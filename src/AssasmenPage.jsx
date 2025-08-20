    import React from "react";

    export default function AssasmenPage() {
    return (
        <div className="bg-white border rounded-xl p-6">
        <div className="mb-4 flex gap-8">
            <div className="flex flex-col">
            <label className="font-bold text-sm mb-2">Mata Pelajaran</label>
                        <select
                            className="border rounded-lg px-4 py-2 w-56 bg-white"
                            style={{ color: '#94a3b8' }}
                            onChange={e => e.target.style.color = e.target.value === '' ? '#94a3b8' : '#1e293b'}
                            defaultValue=""
                        >
                                <option value="" disabled style={{color: '#94a3b8'}}>Pilih Mata Pelajaran</option>
                                <option value="Bahasa Indonesia" style={{color: '#1e293b'}}>Bahasa Indonesia</option>
                                <option value="IPA" style={{color: '#1e293b'}}>IPA</option>
                                <option value="Matematika" style={{color: '#1e293b'}}>Matematika</option>
                        </select>
            </div>
            <div className="flex flex-col">
            <label className="font-bold text-sm mb-2">Kelas</label>
                        <select
                            className="border rounded-lg px-4 py-2 w-56 bg-white"
                            style={{ color: '#94a3b8' }}
                            onChange={e => e.target.style.color = e.target.value === '' ? '#94a3b8' : '#1e293b'}
                            defaultValue=""
                        >
                                <option value="" disabled style={{color: '#94a3b8'}}>Pilih Kelas</option>
                                <option value="Kelas 7A" style={{color: '#1e293b'}}>Kelas 7A</option>
                                <option value="Kelas 7B" style={{color: '#1e293b'}}>Kelas 7B</option>
                                <option value="Kelas 8A" style={{color: '#1e293b'}}>Kelas 8A</option>
                                <option value="Kelas 8B" style={{color: '#1e293b'}}>Kelas 8B</option>
                                <option value="Kelas 9A" style={{color: '#1e293b'}}>Kelas 9A</option>
                                <option value="Kelas 9B" style={{color: '#1e293b'}}>Kelas 9B</option>
                        </select>
            </div>
        </div>
        <div className="bg-white border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
            <input type="text" placeholder="Search" className="border rounded-lg px-4 py-2 w-64" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
                <span className="text-lg">+</span> Tambah
            </button>
            </div>
            <table className="min-w-full">
            <thead>
                <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">NO</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">NAMA</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">KELAS</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">MATA PELAJARAN</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">GURU</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">STATUS</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {/* No data rows, just header */}
            </tbody>
            </table>
        </div>
        </div>
    );
    }
