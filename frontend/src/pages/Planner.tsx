import React, { useState, useRef } from 'react';
import ScrapbookPanel from '../components/ScrapbookPanel';
import StickyNote from '../components/StickyNote';
import RetroButton from '../components/RetroButton';
import { uploadFile } from '../api/ingest';

export default function Planner() {
  const [columns, setColumns] = useState<string[]>(['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
  const [rows, setRows] = useState<{id: string, cells: string[]}[]>([]);
  
  const [notes, setNotes] = useState<{content: string, color: string, rotation: number}[]>([
    { content: "Review Chapter 4 (Thermodynamics) before Thursday!", color: "yellow", rotation: -3 },
    { content: "Draft essay outline for History.", color: "pink", rotation: 4 },
    { content: "Practice 5 calculus problems.", color: "blue", rotation: -2 },
    { content: "Don't forget to ask Prof about the midterm.", color: "green", rotation: 1 }
  ]);

  const [loadingPlan, setLoadingPlan] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadTimetable = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setUploading(true);
    try {
      await uploadFile(selected, 'timetable');
      await handleGeneratePlan();
    } catch (error) {
      console.error(error);
      alert("Failed to upload timetable.");
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleAddRow = () => {
    const newRow = {
      id: Math.random().toString(36).substring(7),
      cells: new Array(columns.length).fill('')
    };
    setRows([...rows, newRow]);
  };

  const handleAddColumn = () => {
    const newColName = prompt("Enter column name:", `Col ${columns.length + 1}`);
    if (!newColName) return;
    setColumns([...columns, newColName]);
    setRows(rows.map(row => ({
      ...row,
      cells: [...row.cells, '']
    })));
  };

  const updateCell = (rowIndex: number, colIndex: number, value: string) => {
    const newRows = [...rows];
    newRows[rowIndex].cells[colIndex] = value;
    setRows(newRows);
  };

  const handleGeneratePlan = async () => {
    setLoadingPlan(true);
    try {
      const { sendMessage } = await import('../api/chat');
      
      const prompt = `Analyze my uploaded timetable and resources. Create a weekly study schedule. 
      Return strictly a JSON object with this format:
      {
        "columns": ["Time", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        "rows": [
          { "id": "1", "cells": ["09:00 - 10:30", "Math", "History", "Physics", "Math", "History", "Break", "Break"] }
        ]
      }
      Do not wrap in markdown blocks, return ONLY the raw JSON object.`;
      
      const res = await sendMessage(prompt, 'oasis');
      let jsonStr = res.answer.trim();
      if (jsonStr.startsWith('```json')) {
        jsonStr = jsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
      }
      
      const match = jsonStr.match(/\{.*\}/s);
      if (match) {
        jsonStr = match[0];
      }

      const generatedTable = JSON.parse(jsonStr);
      if (generatedTable.columns && generatedTable.rows) {
        setColumns(generatedTable.columns);
        setRows(generatedTable.rows);
      }
    } catch (e) {
      console.error(e);
      alert("Failed to generate plan. Please try again.");
    } finally {
      setLoadingPlan(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-indigo/20 pb-4">
        <div>
          <h1 className="font-marker text-5xl text-indigo mb-2 rotate-[-1deg]">
            Study Planner
          </h1>
          <p className="font-handwriting text-2xl text-indigo/70 rotate-[1deg]">
            "Plan the work, work the plan."
          </p>
        </div>
        <div className="flex gap-2">
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleUploadTimetable} 
            className="hidden" 
          />
          <RetroButton variant="secondary" icon="calendar_today" onClick={() => fileInputRef.current?.click()} disabled={uploading || loadingPlan}>
            {uploading ? "Uploading..." : (loadingPlan ? "Generating..." : "Upload Timetable")}
          </RetroButton>
          <RetroButton icon="add_column_right" onClick={handleAddColumn}>Add Column</RetroButton>
          <RetroButton icon="table_rows" onClick={handleAddRow}>Add Row</RetroButton>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start mt-4">
        <div className="xl:col-span-9 flex flex-col gap-6">
          <ScrapbookPanel title="My Schedule" tapePosition="top" rotation={-1}>
            <div className="flex flex-col gap-6 p-4 overflow-x-auto custom-scrollbar">
              
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr>
                    {columns.map((col, idx) => (
                      <th key={idx} className="p-3 border-b-2 border-indigo/20 font-handwriting text-2xl text-indigo/70">
                        {col}
                      </th>
                    ))}
                    <th className="p-3 border-b-2 border-indigo/20 w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={columns.length + 1} className="py-12 text-center text-indigo/40 font-handwriting text-2xl rotate-2">
                        No schedule rows yet!
                      </td>
                    </tr>
                  ) : (
                    rows.map((row, rowIndex) => (
                      <tr key={row.id} className="border-b border-indigo/10 hover:bg-indigo/5 transition-colors group">
                        {columns.map((_, colIndex) => (
                          <td key={colIndex} className="p-2 border-r border-indigo/5 last:border-r-0">
                            <input 
                              type="text" 
                              className="bg-transparent w-full font-interface text-xs uppercase tracking-wider text-indigo font-bold focus:outline-none focus:bg-sand/50 p-1 rounded-sm"
                              value={row.cells[colIndex] || ''}
                              placeholder={colIndex === 0 ? "09:00" : "-"}
                              onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                            />
                          </td>
                        ))}
                        <td className="p-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => setRows(rows.filter((_, i) => i !== rowIndex))} className="text-rust hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

            </div>
          </ScrapbookPanel>
        </div>

        <div className="xl:col-span-3 flex flex-col gap-6 relative">
          <div className="flex items-center justify-between ml-4">
            <h3 className="font-marker text-3xl text-indigo mb-2">To-Do List:</h3>
            <button onClick={() => setNotes([...notes, { content: 'New Note', color: 'yellow', rotation: (Math.random() * 8) - 4 }])} className="text-rust hover:text-rust/80 flex items-center gap-1 font-interface text-xs uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px]">add</span> Add Note
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {notes.map((note, idx) => (
              <StickyNote 
                key={idx}
                color={note.color as any} 
                content={note.content} 
                rotation={note.rotation} 
                className={`z-${10 + idx * 10} ${idx % 2 !== 0 ? '-ml-4 mt-8' : ''}`}
                isEditable={true}
                onChange={(newContent) => {
                  const newNotes = [...notes];
                  newNotes[idx].content = newContent;
                  setNotes(newNotes);
                }}
                onDelete={() => setNotes(notes.filter((_, i) => i !== idx))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
