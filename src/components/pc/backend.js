import React, { useState } from 'react';
import { Folder, FolderTree } from 'lucide-react';
import '../../styles/backend.css';
import ExplorerStyleWindow from '../computador';

const files = {
  Python: {
    "Crud simples sem muito molho": {
      desc: "CRUD básico com operações simples e organização mínima.",
      stack: ['Python', 'Flask', 'Flask-SQLAlchemy', 'MySQL', 'Requisições HTTP'],
    },
    "Crud de senha": {
      desc: "Sistema de gestão de senhas com autenticação e criptografia.",
      stack: ['Python', 'Flask', 'Flask-SQLAlchemy', 'MySQL', 'Requisições HTTP'],
    },
    "API RESTful com autenticação JWT": {
      desc: "Uma API moderna com suporte a autenticação JWT, rotas protegidas e testes automatizados.",
      stack: ['Python', 'Flask', 'JWT', 'PostgreSQL', 'pytest'],
    },
    "Web scraper com agendamento": {
      desc: "Sistema que coleta dados de sites e armazena em banco, com agendamento periódico automático.",
      stack: ['Python', 'BeautifulSoup', 'Requests', 'SQLite', 'APScheduler'],
    },
    "Bot de Telegram para alertas": {
      desc: "Bot que envia alertas personalizados para o Telegram com base em eventos ou dados de uma API.",
      stack: ['Python', 'python-telegram-bot', 'APIs públicas', 'JSON', 'Webhook'],
    },
    "Conversor de vídeos para texto (YouTube)": {
      desc: "Extrai o áudio de vídeos do YouTube e converte em texto usando uma API de transcrição.",
      stack: ['Python', 'pytube', 'FFmpeg', 'OpenAI Whisper API', 'Flask'],
    },
    "Painel de métricas com FastAPI": {
      desc: "Dashboard simples para monitoramento de métricas com uma API performática e moderna.",
      stack: ['Python', 'FastAPI', 'Uvicorn', 'Pandas', 'Jinja2'],
    },
  },
  Javascript: {
    "API RESTful com Express": {
      desc: "Uma API robusta com Express.js, roteamento modular e middlewares personalizados.",
      stack: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'Postman'],
    },
    "Autenticação com tokens JWT": {
      desc: "Sistema completo de login com autenticação baseada em tokens JWT e proteção de rotas.",
      stack: ['JavaScript', 'Node.js', 'Express', 'JWT', 'bcrypt', 'MongoDB'],
    },
    "Sistema de upload de arquivos": {
      desc: "App que permite upload de imagens e arquivos, com validação de tipo e armazenamento em disco ou nuvem.",
      stack: ['JavaScript', 'Express', 'Multer', 'Cloudinary', 'Node.js'],
    },
    "Notificador de eventos com WebSocket": {
      desc: "Serviço que envia notificações em tempo real para clientes conectados via WebSocket.",
      stack: ['JavaScript', 'Node.js', 'Socket.IO', 'Express', 'HTML/CSS'],
    },
    "Bot do Discord para moderação": {
      desc: "Bot de moderação automatizada com comandos personalizados para servidores Discord.",
      stack: ['JavaScript', 'Discord.js', 'Node.js', 'dotenv'],
    },
    "Scraper com Puppeteer": {
      desc: "Automação de navegação em sites para extração de dados estruturados de páginas dinâmicas.",
      stack: ['JavaScript', 'Node.js', 'Puppeteer', 'Cheerio', 'fs'],
    },
    "Dashboard interativo com ECharts": {
      desc: "Painel web com gráficos interativos de dados consumidos de uma API backend.",
      stack: ['JavaScript', 'Node.js', 'Express', 'ECharts', 'Axios', 'HTML/CSS'],
    },
  },
};

export default function BackendOS({onBack}) {
  const [selectedLang, setSelectedLang] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const languageProjects = files[selectedLang] || {};
  const projectNames = Object.keys(languageProjects);

  return (
    <>
    <div className="backendos-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Pastas</h2>
        <div className="nav-section">
            <button onClick={() => { setSelectedLang(null); setSelectedProject(null); }} className='foldinho'>
                📁 Backend
            </button>

            <button onClick={() => { setSelectedLang("Python"); setSelectedProject(null); }}>
                <FolderTree size={24} color='#333'/> Python
            </button>

            <button onClick={() => { setSelectedLang("Javascript"); setSelectedProject(null); }}>
                <FolderTree size={24} color='#333'/> Javascript
            </button>
        </div>
      </div>

      {/* Explorer */}
      <div className="explorer">
        <h2 className="title">{selectedLang ? selectedLang : 'Backend'}</h2>
        <h3>{selectedLang ? 'Meus projetos e habilidades': 'Selecione a pasta desejada'}</h3>
        <div className="folder-grid">
            {!selectedLang ? (
            <>
              <div className="folder" onClick={() => setSelectedLang('Javascript')}>
                <Folder size={64} color="#666" />
                <span>Javascript</span>
              </div>
              <div className="folder" onClick={() => setSelectedLang('Python')}>
                <Folder size={64} color="#666" />
                <span>Python</span>
              </div>
            </>
          ) :(
            projectNames.map((projectName) => (
              <div
              key={projectName}
              className="folder"
              onClick={() => setSelectedProject({ name: projectName, ...languageProjects[projectName] })}
              >
                  <Folder size={64} color="#4b5563" />
                  <div className='folder_text'>
                      <span>{projectName}</span>
                      <span className='stack'>[{languageProjects[projectName].stack + ''}]</span>
                  </div>
                </div>
              ))
            )}
        </div>

      </div>

      {/* Viewer */}
      <div className="viewer">
        {selectedProject ? (
          <>
            <h3>{selectedProject.name}</h3>
            <p style={{ margin: '12px 0', fontSize: '16px' }}>{selectedProject.desc}</p>
            <h4>Tecnologias usadas:</h4>
            <ul className="stack-list">
              {selectedProject.stack.map((tech, index) => (
                <li key={index} className="stack-item">🔧 {tech}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="placeholder">Selecione um projeto para visualizar detalhes</p>
        )}
      </div>
    </div>
    </>
  );
}
