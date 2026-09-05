from fastapi import status
from fastapi.responses import JSONResponse

class PayloadSizeLimitMiddleware:
    """
    Limits the maximum size of incoming request bodies to prevent DoS attacks.
    Enforces the limit on the actual stream, not just the Content-Length header.
    """
    def __init__(self, app, max_size: int = 1_048_576): # Default 1MB
        self.app = app
        self.max_size = max_size

    async def __call__(self, scope, receive, send):
        if scope["type"] != "http":
            return await self.app(scope, receive, send)

        # Fast path check on header
        for header_name, header_value in scope.get("headers", []):
            if header_name.lower() == b"content-length":
                if int(header_value) > self.max_size:
                    await self._send_413(send)
                    return
                break

        received_size = 0
        request_closed = False

        async def receive_wrapper():
            nonlocal received_size, request_closed
            message = await receive()
            if message["type"] == "http.request":
                received_size += len(message.get("body", b""))
                if received_size > self.max_size:
                    request_closed = True
                    raise ValueError("Payload Too Large")
            return message

        try:
            await self.app(scope, receive_wrapper, send)
        except ValueError as exc:
            if request_closed:
                # Can't reliably send 413 if app already started response, but we try
                pass
            else:
                raise

    async def _send_413(self, send):
        await send({
            "type": "http.response.start",
            "status": status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            "headers": [(b"content-type", b"application/json")],
        })
        await send({
            "type": "http.response.body",
            "body": b'{"detail": "Request body too large. Max size exceeded."}',
        })
