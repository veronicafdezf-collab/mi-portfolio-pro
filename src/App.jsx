export default function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-black">
      {/* HEADER / NAV */}
      <header className="w-full max-w-5xl mx-auto px-4 py-6 flex justify-between items-center border-b border-zinc-900">
        <div className="font-bold text-lg tracking-tight">
          <span className="bg-zinc-800 text-white px-2 py-1 rounded mr-2 text-sm">VR</span>
          Verónica | Cloud Engineer
        </div>
        <nav className="flex gap-6 text-sm text-gray-400 font-medium">
          <a href="#perfil" className="hover:text-white transition">Perfil</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#proyectos" className="hover:text-white transition">Proyectos</a>
          <span className="text-zinc-800">|</span>
          <span className="text-emerald-400">ES</span>
          <span className="text-zinc-700">| EN</span>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-5xl mx-auto px-4 py-12 flex-1">
        <section id="perfil" className="mb-16">
          {/* HERO BANNER */}
          <div className="w-full h-48 bg-gradient-to-r from-zinc-900 via-blue-950 to-zinc-900 rounded-t-xl border-t border-x border-gray-800 flex flex-col items-center justify-center relative overflow-hidden px-4">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
            <div className="text-center z-10 space-y-1 px-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                DevOps & Cloud Engineer
              </h1>
              <p className="text-blue-400 text-xs md:text-sm tracking-widest uppercase font-mono">
                CI/CD • Containers • Kubernetes • Infrastructure as Code
              </p>
            </div>
          </div>

          {/* PROFILE CARD */}
          <div className="bg-[#161b22] rounded-b-xl border-x border-b border-gray-800 p-6 relative">
            <div className="absolute -top-14 left-6">
              <div className="w-24 h-24 rounded-full border-4 border-[#161b22] bg-zinc-800 ring-2 ring-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-400 tracking-wider">
                DEVOPS
              </div>
            </div>

            <div className="pt-12 flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded-full w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Disponible para proyectos / Roles</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Verónica</h2>
                <p className="text-sm font-mono text-gray-400">
                  📍 Remoto / España • 💻 Kubernetes, Docker & Cloud Architecture
                </p>
                <p className="text-sm max-w-3xl text-gray-400 leading-relaxed">
                  Orientada a construir entornos reproducibles, seguros y altamente observables. Experiencia práctica real empaquetando servicios web mediante <strong>Docker</strong>, desplegando arquitecturas microservicios en <strong>Kubernetes</strong> y automatizando flujos de despliegue para optimizar la entrega de software.
                </p>
              </div>

              {/* BOTONES ACCIÓN */}
              <div className="flex flex-col gap-2 w-full md:w-auto shrink-0 text-xs font-semibold">
                <a 
                  href="/cv-veronica.pdf" 
                  download="CV_Veronica_DevOps.pdf" 
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-700 block"
                >
                  Descargar CV
                </a>
                <a 
                  href="https://www.linkedin.com/in/verónica-fernández-fernández-124257406" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-700 block"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/veronica10-tech" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg transition text-center border border-gray-700 block"
                >
                  GitHub 🐙
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-emerald-400">#</span> Conocimientos Técnicos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
              <div className="text-blue-400 font-bold text-lg">☁️ Diseño Cloud</div>
              <p className="text-xs text-gray-400 leading-relaxed">Separación de entornos, configuración de redes privadas, mapeo de puertos y gestión de volúmenes estables.</p>
            </div>
            <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
              <div className="text-emerald-400 font-bold text-lg">📦 Orquestación y Contenedores</div>
              <p className="text-xs text-gray-400 leading-relaxed">Creación de imágenes optimizadas con Dockerfile, gestión multi-contenedor mediante Docker Compose y despliegue de Pods/Services en clústeres locales de Kubernetes.</p>
            </div>
            <div className="bg-[#161b22] border border-gray-800 p-5 rounded-xl space-y-2">
              <div className="text-purple-400 font-bold text-lg">🚀 Automatización CI/CD</div>
              <p className="text-xs text-gray-400 leading-relaxed">Próximo hito: Configuración de flujos automatizados con GitHub Actions para compilar y subir imágenes a registros públicos de forma automática.</p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">CI/CD</span>
                <span className="bg-zinc-800 text-zinc-300 text-[10px] font-mono px-2 py-0.5 rounded">Cloud</span>
              </div>
            </div>
</div>
      </section>

      {/* FOOTER */}
      <footer className="w-full max-w-5xl mx-auto text-center py-4 text-gray-500 text-xs border-t border-gray-800">
        © {new Date().getFullYear()} Verónica. Todos los derechos reservados.
      </footer>

    </main>
  </div>
);
}