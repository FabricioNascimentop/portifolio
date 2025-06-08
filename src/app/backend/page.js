"use client";
import { Folder, FolderTree, FileCode  } from 'lucide-react';
import { useState } from 'react';
import '../../styles/backend.css'

const files = {
  Python: {
    "Crud com manipulação básica de arquivos": {
      desc: "No projeto AutoCar usei as tecnologias descritas a baixo para criar rotas para inserir, apagar, modificar, ler dados de carros fictícios a venda e, no servidor, criar diretórios baseados no id responsáveis por fazer tratamentos de erros básicos, salvar, atualizar e apagar imagens relacionadas aos carros de forma automática",
      stack: ['Python', 'Flask', 'Flask-SQLAlchemy', 'MySQL', 'Requisições HTTP','pathlib'],
    },
    "Habilidades em Login": {
      desc: "Sistema de login com opções de 'logar com facebook, google' criar conta própria, recuperar conta com código em email, trocar email (em caso de perca de conta), senha salva com criptografia",
      stack: ['Flask', 'WTForms', 'JTW tokens', 'Facebook e google API', 'Hash de segurança'],
    },
    "Bot de Telegram simulando restaurante": {
      desc: "Bot que envia alertas personalizados para o Telegram com base em eventos ou dados de uma API.",
      stack: ['Python', 'python-telegram-bot', 'APIs públicas', 'JSON', 'Webhook'],
    },
    "Sla alguma coisa que envolve web socket, se pá um joguinho": {
      desc: "Uma API moderna com suporte a autenticação JWT, rotas protegidas e testes automatizados.",
      stack: ['Python', 'Flask', 'JWT', 'PostgreSQL', 'pytest'],
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
export default function Backend(){
    const [selectedLang, setSelectedLang] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
  
    const languageProjects = files[selectedLang] || {};
    const projectNames = Object.keys(languageProjects);


  return (
    <div className="explorer-window">
      <div className="explorer-header">
        <span className="explorer-title">Explorer</span>
        <button className="close-btn" onClick={() => setVisible(false)} title="Fechar">
            ×
        </button>
      </div>
      
      <div className="explorer-content">
        
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
                      <FileCode  size={64} color="#4b5563" />
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
                    <li key={index} className="stack-item">{tech}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="placeholder">Selecione um projeto para visualizar detalhes</p>
            )}
        </div>
      
        </div>

      </div>
    
    </div>
  )
}