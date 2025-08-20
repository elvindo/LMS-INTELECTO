import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "./SessionContext";
import SubjectsPage from "./SubjectsPage";
import RaportPage from "./RaportPage";
import RepositoryPage from "./RepositoryPage";
import AssasmenPage from "./AssasmenPage";
import KunciJawabanPage from "./KunciJawabanPage";
import ATPPage from "./ATPPage";
import MAPage from "./MAPage";
import PPTMediaMengajarPage from "./PPTMediaMengajarPage";
import GamesPage from "./GamesPage";
import SimulatorPage from "./SimulatorPage";
import Interaktif3DPage from "./Interaktif3DPage";
import VideoPembelajaranPage from "./VideoPembelajaranPage";

const stats = [
  { label: "Total Courses", value: 12 },
  { label: "Enrolled", value: 3 },
  { label: "Lessons Completed", value: 27 },
];

const courses = [
  {
    title: "React Basics",
    description: "Learn the fundamentals of React, components, and hooks.",
    progress: 80,
  },
  {
    title: "Advanced JavaScript",
    description: "Deep dive into ES6+, async programming, and more.",
    progress: 45,
  },
  {
    title: "UI/UX Design",
    description: "Principles of design, prototyping, and user experience.",
    progress: 100,
  },
];

export default function Dashboard() {
  const { logout } = useSession();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("subjects");
  const [repoOpen, setRepoOpen] = useState(false);
  const [activeRepoSub, setActiveRepoSub] = useState(null);
  const [IntelectoOpen, setIntelectoOpen] = useState(true);
  const [perangkatAjarOpen, setPerangkatAjarOpen] = useState(false);
  const [kontenDigitalOpen, setKontenDigitalOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const sidebarItems = [
  { key: "subjects", label: "Subjects" },
  { key: "Raport", label: "Raport" },
  { key: "repo", label: "Repository" },
  { key: "Assasmen", label: "Assasmen" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col py-6 px-4 min-h-screen">
        <div className="flex items-center gap-3 mb-10 px-2">
          <img src="/Intelecto_logo2.png" alt="Logo" className="h-10" />
          <span className="text-xl font-bold text-blue-600">INTELECTO <span className="text-blue-600 font-normal">LMS+</span></span>
        </div>
        <nav className="flex flex-col gap-2">
          <button
            className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 focus:outline-none text-xs font-semibold mb-4 w-full ${activePage === 'dashboard' ? 'text-blue-600 font-semibold bg-blue-100' : 'text-gray-700'}`}
            onClick={() => setActivePage('dashboard')}
          >
            {/* Window icon SVG */}
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M3 9h18" strokeWidth="2" stroke="currentColor"/></svg>
            DASHBOARD
          </button>
          <div className="text-xs font-semibold text-gray-500 mt-2 mb-1 px-3">INTELECTO LMS</div>
          <div className="flex flex-col gap-2 mb-2">
            {sidebarItems.map(item => {
              let icon = null;
              if (item.key === "subjects") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" strokeWidth="2" stroke="currentColor"/><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/></svg>
                ); // Book icon
              } else if (item.key === "Raport") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="6" y="4" width="12" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M9 8h6" strokeWidth="2" stroke="currentColor"/><path d="M9 12h6" strokeWidth="2" stroke="currentColor"/></svg>
                ); // Document icon
              } else if (item.key === "repo") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M8 3h8v4" strokeWidth="2" stroke="currentColor"/></svg>
                ); // File icon
              } else if (item.key === "Assasmen") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M9 8h6" strokeWidth="2" stroke="currentColor"/><path d="M9 12h6" strokeWidth="2" stroke="currentColor"/><path d="M9 16h6" strokeWidth="2" stroke="currentColor"/></svg>
                ); // Clipboard icon
              }
              if (item.key === "repo") {
                return (
                  <div key="repo" className="w-full">
                    <button
                      onClick={() => setRepoOpen(!repoOpen)}
                      className={`flex items-center justify-between gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 focus:outline-none w-full ${activePage === "repo" ? "text-blue-600 font-semibold bg-blue-100" : "text-gray-700"}`}
                    >
                      <span className="flex items-center gap-2">
                        {icon}
                        Repository
                      </span>
                      <svg className={`w-4 h-4 transition-transform ${repoOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" strokeWidth="2" stroke="currentColor" fill="none"/></svg>
                    </button>
                    {repoOpen && (
                      <div className="ml-7 mt-1 flex flex-col gap-1">
                        <button
                          onClick={() => { setActivePage("repo"); setActiveRepoSub("File Sekolah"); }}
                          className={`text-left px-3 py-2 rounded-lg w-full ${activeRepoSub === "File Sekolah" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                          style={{backgroundColor: activeRepoSub === "File Sekolah" ? "#f3f4f6" : "#fff"}}
                        >File Sekolah</button>
                        <button
                          onClick={() => { setActivePage("repo"); setActiveRepoSub("File Saya"); }}
                          className={`text-left px-3 py-2 rounded-lg w-full ${activeRepoSub === "File Saya" ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}
                          style={{backgroundColor: activeRepoSub === "File Saya" ? "#f3f4f6" : "#fff"}}
                        >File Saya</button>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item.key}
                  onClick={() => setActivePage(item.key)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 focus:outline-none ${activePage === item.key ? "text-blue-600 font-semibold bg-blue-100" : "text-gray-700"}`}
                >
                  {icon}
                  {item.label}
                </button>
              );
            })}
          </div>
          <div className="text-xs font-semibold text-gray-500 mt-2 mb-1 px-3">PERANGKAT AJAR</div>
          <div className="flex flex-col gap-2 mb-2">
            {["Kunci Jawaban", "ATP", "MA", "PPT Media Mengajar"].map(label => {
              let icon = null;
              if (label === "Kunci Jawaban") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 17v-6a4 4 0 1 1 8 0v6" strokeWidth="2" stroke="currentColor"/><rect x="4" y="17" width="16" height="3" rx="1.5" strokeWidth="2" stroke="currentColor" fill="none"/></svg>
                ); // Key icon
              } else if (label === "ATP") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M12 8v4l3 3" strokeWidth="2" stroke="currentColor"/></svg>
                ); // Clock icon
              } else if (label === "MA") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M8 8h8v8H8z" strokeWidth="2" stroke="currentColor"/></svg>
                ); // Grid icon
              } else if (label === "PPT Media Mengajar") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="3" rx="1.5" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M8 3h8v4" strokeWidth="2" stroke="currentColor"/></svg>
                ); // Presentation/file icon
              }
              return (
                <button
                  key={label}
                  onClick={() => setActivePage(label)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 focus:outline-none ${activePage === label ? "text-blue-600 font-semibold bg-blue-100" : "text-gray-700"}`}
                >
                  {icon}
                  {label}
                </button>
              );
            })}
          </div>
          <div className="text-xs font-semibold text-gray-500 mt-2 mb-1 px-3">KONTEN DIGITAL BUKU</div>
          <div className="flex flex-col gap-2 mb-2">
            {["Games", "Simulator", "3D Interaktif", "Video Pembelajaran"].map(label => {
              let icon = null;
              if (label === "Games") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M8 15l8-8" strokeWidth="2" stroke="currentColor"/></svg>
                ); // Gamepad icon
              } else if (label === "Simulator") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/><path d="M8 8h8v8H8z" strokeWidth="2" stroke="currentColor"/></svg>
                ); // Grid icon
              } else if (label === "3D Interaktif") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="12,2 22,8 22,16 12,22 2,16 2,8" strokeWidth="2" stroke="currentColor" fill="none"/></svg>
                ); // Cube icon
              } else if (label === "Video Pembelajaran") {
                icon = (
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/><polygon points="10,10 16,14 10,18" strokeWidth="2" stroke="currentColor" fill="none"/></svg>
                ); // Video icon
              }
              return (
                <button
                  key={label}
                  onClick={() => setActivePage(label)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-blue-50 focus:outline-none ${activePage === label ? "text-blue-600 font-semibold bg-blue-100" : "text-gray-700"}`}
                >
                  {icon}
                  {label}
                </button>
              );
            })}
          </div>
        </nav>
      </aside>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between px-8 py-4 bg-white shadow">
          <div className="font-bold text-lg text-blue-600">Brawijaya Smart School</div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700">Mochamad Elvindo</span>
            <img src="/elvindo_foto.jpg" alt="avatar" className="rounded-full w-10 h-10" />
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Logout</button>
          </div>
        </header>
        <main className="px-8 py-8">
          <h2 className="text-2xl font-bold mb-6">
            {activePage === 'dashboard' ? 'Dashboard' :
              (activePage === 'repo' && activeRepoSub ? activeRepoSub : (sidebarItems.find(item => item.key === activePage)?.label || activePage))}
          </h2>
          {activePage === "dashboard" ? (
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl shadow-lg bg-white p-6 flex flex-col items-center justify-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">LMS Overview</div>
                <div className="text-gray-700 mb-4">Welcome to the Intelecto LMS dashboard. Here you can see a summary of your learning activities and progress.</div>
                <div className="flex gap-6">
                  {stats.map(stat => (
                    <div key={stat.label} className="bg-blue-50 rounded-lg px-6 py-4 text-center">
                      <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : activePage === "subjects" ? (
            <SubjectsPage />
          ) : activePage === "Raport" ? (
            <RaportPage />
          ) : activePage === "repo" ? (
            <RepositoryPage activeRepoSub={activeRepoSub} />
          ) : activePage === "Assasmen" ? (
            <AssasmenPage />
          ) : activePage === "Kunci Jawaban" ? (
            <KunciJawabanPage />
          ) : activePage === "ATP" ? (
            <ATPPage />
          ) : activePage === "MA" ? (
            <MAPage />
          ) : activePage === "PPT Media Mengajar" ? (
            <PPTMediaMengajarPage />
          ) : activePage === "Games" ? (
            <GamesPage />
          ) : activePage === "Simulator" ? (
            <SimulatorPage />
          ) : activePage === "3D Interaktif" ? (
            <Interaktif3DPage />
          ) : activePage === "Video Pembelajaran" ? (
            <VideoPembelajaranPage />
          ) : (
            <div className="flex items-center justify-center h-96">
              <span className="text-2xl text-gray-400 font-bold">Coming soon</span>
            </div>
          )}
        </main>
        <footer className="text-xs text-gray-500 text-center py-4">Copyright © 2025 PT. INTELECTO</footer>
      </div>
    </div>
  );
}
