import React from "react";

export default function RaportPage() {
  return (
    <div>
      <div className="bg-white border rounded-xl p-6 mb-4 flex flex-col gap-4" style={{maxWidth: '100%'}}>
        <div className="flex flex-wrap gap-8 items-center">
          <div className="flex flex-col">
            <label className="font-bold text-sm mb-2">Kelas</label>
            <select className="border rounded-lg px-4 py-2 w-56 bg-white">
              <option>Kelas 7A</option>
              <option>Kelas 7B</option>
              <option>Kelas 8A</option>
              <option>Kelas 8B</option>
              <option>Kelas 9A</option>
              <option>Kelas 9B</option>
            </select>
          </div>
          <div className="flex flex-col flex-1 min-w-[180px] max-w-[220px]">
            <label className="font-bold text-sm mb-2">Rapor</label>
            <select className="border rounded-lg px-4 py-2 w-full bg-white">
              <option>Bahasa Indonesia</option>
              <option>Matematika</option>
              <option>IPA</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white border rounded-xl p-2" style={{minHeight: '48px'}}></div>
    </div>
  );
}
