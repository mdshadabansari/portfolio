import React,{useEffect,useState} from "react";
import{createRoot}from"react-dom/client";
import{Menu,Play,X}from"lucide-react";
import"./index.css";

const VIDEO="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4";
const nav=["ABOUT","EXPERIENCE","PROJECTS","SKILLS","EDUCATION","CONTACT"];

function Logo(){return <a href="#top" aria-label="Md Shadab Ansari"><svg width="28" height="28" viewBox="0 0 256 256" fill="none"><path d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z" fill="white"/></svg></a>}

function App(){
 const[open,setOpen]=useState(false);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
 return <main id="top" className="relative h-screen w-full overflow-hidden bg-black text-white">
  <video className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]" src={VIDEO} autoPlay muted loop playsInline aria-hidden="true"/>
  <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
   <header className="flex items-center justify-between py-6">
    <Logo/>
    <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">{nav.map(x=><a key={x} href={`#${x.toLowerCase()}`} className="transition-opacity hover:opacity-70">{x}</a>)}</nav>
    <button aria-label="Open menu" onClick={()=>setOpen(true)} className="p-2 transition-opacity hover:opacity-70 md:hidden"><Menu size={24}/></button>
   </header>

   <section className="mt-4 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
    <div><h2 className="text-lg font-normal leading-tight tracking-wide md:text-xl"><span className="block">MD SHADAB</span><span className="font-pixel block text-2xl md:text-3xl">ANSARI</span></h2><div className="mt-3 text-[10px] text-white/50">*</div><p className="font-pixel mt-1 text-xs leading-relaxed text-white/60">Senior Software Engineer<br/>C++ / Python / Linux<br/>building systems that scale<br/>from idea to production</p></div>
    <div className="text-right lg:text-left"><h2 className="text-lg font-normal leading-tight tracking-wide md:text-xl"><span className="block">SOFTWARE &</span><span className="font-pixel block text-2xl md:text-3xl">SYSTEMS</span></h2></div>
    <div><div className="font-pixel mb-3 text-base uppercase tracking-widest text-white/50">What I Do</div><p className="max-w-[220px] text-sm leading-relaxed text-white/90">I build high-performance developer tools, automation systems and engineering software with C++ and Python.</p></div>
    <div className="text-right lg:text-left"><div className="font-pixel mb-3 text-base uppercase tracking-widest text-white/50">Services</div><ul className="space-y-0.5 text-sm leading-relaxed text-white/90"><li>C++ Software Engineering</li><li>Python Automation & APIs</li><li>EDA / Semiconductor Tools</li><li>Performance Optimization</li><li>Parsing, Debugging & Linux</li><li>AI-assisted Development</li></ul></div>
   </section>

   <div className="flex-1"/>
   <section className="pb-4">
    <div className="grid grid-cols-1 items-end gap-4 sm:gap-6 lg:grid-cols-2">
     <div><h1 className="text-3xl font-normal uppercase tracking-wide sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem]" style={{lineHeight:.72}}>
      <span className="block">I BUILD THE</span><span className="block"><span className="font-pixel inline-block text-[1.25em] leading-none align-baseline">COMPLEX</span> INTO</span><span className="block">CLEAR SOFTWARE</span><span className="block"><span className="font-pixel inline-block text-[1.25em] leading-none align-baseline">SYSTEMS</span></span>
     </h1></div>
     <div className="flex flex-col justify-end gap-4 sm:gap-6">
      <a href="#experience" className="flex self-start items-center gap-3 border border-white/30 bg-white/5 px-6 py-3 backdrop-blur-sm transition-colors hover:bg-white/10"><Play size={14} fill="white"/><span className="text-sm tracking-wider">VIEW EXPERIENCE</span></a>
      <div className="flex flex-wrap items-stretch gap-2 text-sm text-white/80 sm:gap-3 lg:self-end">
       <div className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4"><b className="text-sm sm:text-base">C++</b><span className="text-xs text-white/50">PRIMARY</span></div>
       <div className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4"><b className="text-lg sm:text-xl">PY</b><span className="text-xs text-white/50">AUTOMATION</span></div>
       <div className="flex items-center gap-2 bg-[#0B0B0B] px-3 py-2 sm:px-4"><b className="text-[10px] sm:text-xs">EDA / SYSTEMS</b><span className="text-xs text-white/50">5Y+</span></div>
      </div>
     </div>
    </div>
    <div className="mt-4 grid grid-cols-1 gap-2 border-t border-white/10 pt-4 text-xs text-white/60 sm:mt-5 sm:grid-cols-2 sm:gap-4">
     <p id="contact">Open to freelance, contract or full-time. <a href="mailto:mdshadab@live.in" className="text-red-500 transition-colors hover:text-red-400">Schedule a call</a></p>
     <p className="sm:text-right">C++ • Python • Linux • EDA • Automation</p>
    </div>
   </section>
  </div>

  <div className={`fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open?"pointer-events-auto opacity-100":"pointer-events-none opacity-0"}`}>
   <header className="flex items-center justify-between px-6 py-6"><Logo/><button aria-label="Close menu" onClick={()=>setOpen(false)} className="p-2 transition-opacity hover:opacity-70"><X size={24}/></button></header>
   <nav className="flex flex-1 flex-col items-center justify-center gap-8">{nav.map((x,i)=><a key={x} href={`#${x.toLowerCase()}`} onClick={()=>setOpen(false)} className={`text-2xl tracking-widest transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open?"translate-y-0 opacity-100":"translate-y-4 opacity-0"}`} style={{transitionDelay:open?`${100+i*60}ms`:"0ms"}}>{x}</a>)}</nav>
  </div>
 </main>
}
createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>);