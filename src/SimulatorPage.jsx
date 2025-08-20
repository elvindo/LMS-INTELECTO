import React, { useState } from "react";

export default function SimulatorPage() {
  const [kelas, setKelas] = useState("Kelas 7A");
  const [mapel, setMapel] = useState("Bahasa Indonesia");

  return (
    <div className="px-2 py-2">
      <div className="bg-white border rounded-xl p-6 mb-4 flex flex-col gap-4" style={{maxWidth: '100%'}}>
        <div className="flex flex-wrap gap-8 items-center">
          <div className="flex flex-col">
            <label className="font-bold text-sm mb-2">Kelas</label>
            <select className="border rounded-lg px-4 py-2 w-56 bg-white" value={kelas} onChange={e => setKelas(e.target.value)}>
              <option>Kelas 7</option>
              <option>Kelas 8</option>
              <option>Kelas 9</option>
            </select>
          </div>
          <div className="flex flex-col flex-1 min-w-[180px] max-w-[220px]">
            <label className="font-bold text-sm mb-2">Mata Pelajaran</label>
            <select className="border rounded-lg px-4 py-2 w-full bg-white" value={mapel} onChange={e => setMapel(e.target.value)}>
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
