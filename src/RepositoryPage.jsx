    import React, { useState } from "react";

    export default function RepositoryPage({ activeRepoSub }) {
    const [showUpload, setShowUpload] = useState(false);
    React.useEffect(() => {
        if (showUpload) {
        setTimeout(() => {
            const modal = document.getElementById("upload-modal");
            if (modal) {
            modal.style.transform = "translateX(0)";
            }
        }, 10);
        }
    }, [showUpload]);

    return (
        <div className={`bg-white border rounded-xl p-6 relative${showUpload ? ' pointer-events-none' : ''}`}> 
        <h3 className="text-2xl font-bold mb-2">{activeRepoSub || "Repository"}</h3>
        <div className="flex items-center gap-2 text-gray-500 mb-4">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
            <path d="M8 3h8v4" strokeWidth="2" stroke="currentColor"/>
            </svg>
            <span>Repository</span>
        </div>
        <div className="bg-white border rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
            <input type="text" placeholder="Search" className="border rounded-lg px-4 py-2 w-64" />
            <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2" onClick={() => setShowUpload(true)}>
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" strokeWidth="2"/></svg>
                Upload File
                </button>
                {activeRepoSub === "File Saya" && (
                <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded flex items-center gap-2">
                    <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" strokeWidth="2"/></svg>
                    Buat Folder
                </button>
                )}
            </div>
            </div>
            <table className="min-w-full">
            <thead>
                <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">NAMA</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">TGL UPLOAD</th>
                {activeRepoSub === "File Sekolah" && <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">PEMILIK</th>}
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">STATUS</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">UKURAN</th>
                <th className="px-4 py-2 text-left text-xs font-bold text-gray-500">ACTION</th>
                </tr>
            </thead>
            <tbody>
                {/* No data rows, just header */}
            </tbody>
            </table>
            <div className="flex items-center justify-between mt-4">
            <span className="text-gray-500 text-sm">Total 0 Items</span>
            <div className="flex items-center gap-2">
                <button className="bg-gray-100 px-2 py-1 rounded text-gray-400" disabled>{'<'}</button>
                <span className="bg-blue-100 px-3 py-1 rounded text-blue-600">1</span>
                <button className="bg-gray-100 px-2 py-1 rounded text-gray-400" disabled>{'>'}</button>
            </div>
            <select className="border rounded px-2 py-1 text-sm">
                <option>10 / page</option>
            </select>
            </div>
        </div>
        {/* Slide-in Upload Modal */}
        {showUpload && (
            <div className="fixed inset-0 z-50 flex justify-end pointer-events-auto">
            <div className="bg-black bg-opacity-30 w-full h-full absolute left-0 top-0" onClick={() => setShowUpload(false)}></div>
            <div
                className="w-full max-w-xl h-full bg-white shadow-xl flex flex-col transition-transform duration-300 relative"
                style={{ minWidth: 400, transform: 'translateX(100%)' }}
                id="upload-modal"
            >
                <div className="border-b px-6 py-4 flex items-center justify-between">
                <span className="text-lg font-bold">Upload File</span>
                </div>
                <div className="flex-1 px-6 py-6">
                <div className="mb-6">
                    <label className="block font-semibold mb-2">Status</label>
                    <select className="border rounded-lg px-4 py-2 w-56 bg-white">
                    <option value="" disabled selected>Select...</option>
                    <option value="Public">Public</option>
                    <option value="Private">Private</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block font-semibold mb-2">File</label>
                    <button className="border rounded-lg px-4 py-2 w-full text-gray-500 bg-white">Upload</button>
                </div>
                </div>
                <div className="border-t px-6 py-4 flex justify-end gap-2">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded" onClick={() => setShowUpload(false)}>Batal</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded">Simpan</button>
                </div>
            </div>
            </div>
        )}
        </div>
    );
    }
