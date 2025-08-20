    import React from "react";

    export default function SubjectsPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Example subject cards */}
        <div className="rounded-xl shadow-lg bg-white overflow-hidden flex flex-col">
            <div className="relative h-36">
            <img src="/card_bindo.png" alt="Bahasa Indonesia" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-pink-200 opacity-0"></div>
            <div className="relative z-10 p-4"></div>
            </div>
            <div className="p-4">
            <div className="text-xs text-gray-500 mb-1">Kelas</div>
            <div className="font-semibold text-gray-700 mb-2">Kelas 7B</div>
            <div className="text-xs text-gray-500 mb-1">Guru</div>
            <div className="font-semibold text-gray-700">Mochamad Elvindo</div>
            </div>
        </div>
        <div className="rounded-xl shadow-lg bg-white overflow-hidden flex flex-col">
            <div className="relative h-36">
            <img src="/card_science.png" alt="Natural Science" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-200 opacity-0"></div>
            <div className="relative z-10 p-4"></div>
            </div>
            <div className="p-4">
            <div className="text-xs text-gray-500 mb-1">Kelas</div>
            <div className="font-semibold text-gray-700 mb-2">Kelas 7A</div>
            <div className="text-xs text-gray-500 mb-1">Guru</div>
            <div className="font-semibold text-gray-700">Mochamad Elvindo</div>
            </div>
        </div>
        <div className="rounded-xl shadow-lg bg-white overflow-hidden flex flex-col">
            <div className="relative h-36">
            <img src="/card_math.png" alt="Mathematics" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-200 opacity-0"></div>
            <div className="relative z-10 p-4"></div>
            </div>
            <div className="p-4">
            <div className="text-xs text-gray-500 mb-1">Kelas</div>
            <div className="font-semibold text-gray-700 mb-2">Kelas 7B</div>
            <div className="text-xs text-gray-500 mb-1">Guru</div>
            <div className="font-semibold text-gray-700">Mochamad Elvindo</div>
            </div>
        </div>
        <div className="rounded-xl shadow-lg bg-white overflow-hidden flex flex-col">
            <div className="relative h-36">
            <img src="/card_bindo.png" alt="Bahasa Indonesia" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-pink-200 opacity-0"></div>
            <div className="relative z-10 p-4"></div>
            </div>
            <div className="p-4">
            <div className="text-xs text-gray-500 mb-1">Kelas</div>
            <div className="font-semibold text-gray-700 mb-2">Kelas 8A</div>
            <div className="text-xs text-gray-500 mb-1">Guru</div>
            <div className="font-semibold text-gray-700">Mochamad Elvindo</div>
            </div>
        </div>
        <div className="rounded-xl shadow-lg bg-white overflow-hidden flex flex-col">
            <div className="relative h-36">
            <img src="/card_science.png" alt="Natural Science" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-pink-200 opacity-0"></div>
            <div className="relative z-10 p-4"></div>
            </div>
            <div className="p-4">
            <div className="text-xs text-gray-500 mb-1">Kelas</div>
            <div className="font-semibold text-gray-700 mb-2">Kelas 8B</div>
            <div className="text-xs text-gray-500 mb-1">Guru</div>
            <div className="font-semibold text-gray-700">Mochamad Elvindo</div>
            </div>
        </div>
        </div>
    );
    }
