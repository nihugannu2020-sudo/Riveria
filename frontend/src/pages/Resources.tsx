import React, { useRef, useState, useEffect } from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
import RetroInput from '../components/RetroInput';
import RetroButton from '../components/RetroButton';
import { uploadFile, getResources } from '../api/ingest';

export default function Resources() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const timetableInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState<{name: string; type: string}[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const data = await getResources();
      setFiles(data.map((r: any) => ({ name: r.title, type: r.type })));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleTimetableClick = () => {
    timetableInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, type: "pdf" | "timetable" = "pdf") => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setUploading(true);
    try {
      await uploadFile(selected, type);
      await fetchResources(); // Refresh list after upload
    } catch (e) {
      console.error(e);
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo/20 pb-4">
        <div>
          <div className="font-interface text-[10px] uppercase tracking-widest text-rust mb-2">Centralized Repository</div>
          <h1 className="font-display text-headline-lg text-indigo tracking-tight leading-none mb-2">
            Resources
          </h1>
          <p className="font-interface text-[11px] uppercase tracking-widest text-indigo/70">
            Notes, lectures, question banks, and timetables.
          </p>
        </div>
        <div className="flex gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={(e) => handleFileChange(e, "pdf")} 
            className="hidden" 
          />
          <input 
            type="file" 
            ref={timetableInputRef} 
            onChange={(e) => handleFileChange(e, "timetable")} 
            className="hidden" 
          />
          <RetroButton variant="primary" icon="upload" onClick={handleUploadClick} disabled={uploading}>
            {uploading ? "Uploading..." : "Upload File"}
          </RetroButton>
          <RetroButton variant="secondary" icon="calendar_today" onClick={handleTimetableClick} disabled={uploading}>
            Upload Timetable
          </RetroButton>
        </div>
      </div>

      <ScrapbookPanel title="Resource Archive" tapePosition="top" rotation={0}>
        <div className="flex flex-col gap-4">
          <RetroInput 
            label="Search Pattern" 
            placeholder="Search all resources..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth 
          />
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="font-marker text-lg text-indigo mr-2">Categories:</span>
            {['All', 'Notes', 'Timetables', 'Question Banks'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1 font-handwriting text-2xl transition-colors ${
                  filterCategory === cat 
                    ? 'border-b-2 border-rust text-rust font-bold' 
                    : 'text-indigo/60 hover:text-indigo'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </ScrapbookPanel>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {(() => {
          const filteredFiles = files.filter(f => {
            if (searchQuery && !f.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
            
            const fileType = (f.type || '').toLowerCase();
            if (filterCategory === 'Notes' && fileType !== 'pdf') return false;
            if (filterCategory === 'Timetables' && fileType !== 'timetable') return false;
            if (filterCategory === 'Question Banks' && fileType !== 'question_bank') return false;
            return true;
          });

          if (filteredFiles.length === 0) {
            return (
              <div className="col-span-full py-12 flex flex-col items-center justify-center text-indigo/50">
                <p className="font-handwriting text-3xl rotate-2">Repository is empty.</p>
              </div>
            );
          }

          return filteredFiles.map((f, i) => (
             <ScrapbookPanel key={i} title={f.name} tapePosition="top" rotation={i % 2 === 0 ? 1 : -1}>
                <div className="p-4 text-center">
                  <span className="material-symbols-outlined text-[48px] text-indigo/30 mb-4">
                    {(f.type || '').toLowerCase() === "timetable" ? "calendar_view_week" : "description"}
                  </span>
                  <p className="font-interface text-[10px] uppercase tracking-widest text-rust">
                    {(f.type || '').toLowerCase() === "pdf" ? "Document" : f.type}
                  </p>
                </div>
             </ScrapbookPanel>
          ));
        })()}
      </div>
    </div>
  );
}
