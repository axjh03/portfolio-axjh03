'use client'

import React, { useState, useEffect, useRef } from 'react'

const useTypewriter = (text, speed = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    // Reset the state when text changes
    setDisplayedText('');
    indexRef.current = 0;
    
    const typingInterval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText(text.substring(0, indexRef.current + 1));
        indexRef.current += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayedText;
};

const WebIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM3.7 12C3.7 7.46 7.46 3.7 12 3.7C13.77 3.7 15.42 4.24 16.82 5.18L5.18 16.82C4.24 15.42 3.7 13.77 3.7 12ZM12 20.3C10.23 20.3 8.58 19.76 7.18 18.82L18.82 7.18C19.76 8.58 20.3 10.23 20.3 12C20.3 16.54 16.54 20.3 12 20.3Z" fill="#00FF00"/>
  </svg>
)

const MatrixLoader = () => {
  const [progress, setProgress] = useState(0)
  const totalBlocks = 30

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= totalBlocks ? 0 : prev + 1))
    }, 200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-4 bg-black border border-green-500/50 flex">
      {[...Array(totalBlocks)].map((_, index) => (
        <div
          key={index}
          className={`flex-1 ${
            index === progress ? 'bg-green-500' : 'bg-transparent'
          } border-r border-black-500/30 last:border-r-0`}
        />
      ))}
    </div>
  )
}

const BootMessages = () => {
  const messages = [
    "Initializing Alok's Neural Framework...",
    "Bootstrapping Simulation Parameters...",
    "Scanning for system dependencies...",
    "Found: Bachelor of Science in Computer Science - UT Arlington",
    "Loading kernel modules...",
    "Configuring environment variables...",
    "Detected optimized algorithms for Data Structures...",
    "Found: HackUTA 2023 Award - Full-Stack Development Recognition",
    "Loading Operating System compatibility layer...",
    "Setting up multi-modal AI Systems...",
    "Initializing Docker containers with AI/ML modules...",
    "Loading Java, Python, and ReactJS libraries...",
    "Configuring GitHub repositories from axjh03...",
    "Detected: Advanced AI models (LLAVA, YOLO, CogLVM)...",
    "Mounting React Native framework for mobile compatibility...",
    "Loading real-time communication protocols...",
    "Error: Unsecured socket detected! Retrying with encryption...",
    "Optimizing system performance metrics...",
    "Initializing AWS S3 bucket for cloud storage...",
    "Loading MongoDB clusters for database synchronization...",
    "Detected: CI/CD pipelines for rapid deployment...",
    "Found: Top-tier GPU resources for AI acceleration...",
    "Importing academic achievements from alokjha.com.np...",
    "Found: FLAIRS-37 Conference Presentation Data...",
    "Mounting responsive UI framework...",
    "Initializing Kubernetes clusters...",
    "Loading DevOps configuration with Azure pipelines...",
    "Found: Strong expertise in WebSocket protocols...",
    "Importing Anatomy AI system modules...",
    "Found: 95% test coverage across multiple projects...",
    "Loading advanced vector search capabilities...",
    "Initializing FAISS with LangChain optimizations...",
    "Detected: High proficiency in Flask and FastAPI frameworks...",
    "Scanning system logs for potential vulnerabilities...",
    "No critical vulnerabilities detected.",
    "Loading research data from Cornell University...",
    "Found: Assistive technology deployment data...",
    "Detected: 70% navigation accuracy improvement for AI models...",
    "Mounting Ornale Messaging App architecture...",
    "Loading Agile development practices...",
    "Found: Advanced Docker orchestration strategies...",
    "Mounting secure Firebase authentication modules...",
    "Found: Maverick Academic Scholarship Data...",
    "Importing Webpack build configurations...",
    "Configuring Tailwind CSS for responsive design...",
    "Found: GitHub repo axjh03 - Real-time Chat App...",
    "Detected: Over 40% latency reduction in WebSockets...",
    "Error: Debugging failed unit test for TWSG...",
    "Test passed. Continuing optimization...",
    "Loading 3D data visualization tools...",
    "Configuring GraphQL endpoints for efficient queries...",
    "Scanning installed Linux distributions...",
    "Detected: Debian-based Red Hat and Ubuntu systems...",
    "Loading user behavior analytics...",
    "Error: Unauthorized login attempt detected! Blocking IP...",
    "Detected: High-security compliance for cloud systems...",
    "Mounting CI/CD workflows with CircleCI...",
    "Found: 90% test coverage in Jest and JUnit tests...",
    "Importing LangChain, FAISS, and HuggingFace embeddings...",
    "Initializing Maven build for scalable gaming platform...",
    "Loading scalable multi-player game architecture...",
    "Found: Real-time synchronization for 100+ users...",
    "Detected: Agile sprint efficiency improvements...",
    "Loading React.js and Next.js libraries...",
    "Configuring OAuth2 protocols...",
    "Detected: Comprehensive DevOps toolchain...",
    "Found: Full-Stack Development Capabilities...",
    "Importing Hackathon-winning project details...",
    "Mounting Vite build configurations...",
    "Initializing MongoDB database schema...",
    "Loading academic and project achievements...",
    "Found: Dean's List Recognition - Outstanding Performance",
    "Error: Network timeout! Retrying connection...",
    "Connection restored. Continuing boot sequence...",
    "Initializing machine learning model performance optimizations...",
    "Detected: Advanced cosine similarity techniques...",
    "Importing Figma assets for UI design...",
    "Found: Real-time chat feature implementation...",
    "Configuring advanced authentication mechanisms...",
    "Detected: Mastery in Firebase Firestore real-time databases...",
    "Loading state management with Redux...",
    "Found: Agile sprint completion with 20% efficiency gains...",
    "Initializing 100% responsive web designs...",
    "Mounting secure Docker containers...",
    "Found: Excellent performance in multi-modal AI systems...",
    "Configuring Cloud-native applications...",
    "Importing Jenkins pipelines for CI/CD...",
    "Optimizing serverless architecture...",
    "System fully initialized. Welcome, Alok!",
  ];
  
  const [visibleMessages, setVisibleMessages] = useState([])

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      setVisibleMessages(prev => {
        const newMessages = [...prev]
        if (currentIndex < messages.length) {
          newMessages.push(messages[currentIndex])
          currentIndex++
        }
        if (newMessages.length > 45) {
          newMessages.shift()
        }
        return newMessages
      })
      
      if (currentIndex >= messages.length) {
        currentIndex = 0
      }
    }, 125)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="text-xs font-mono space-y-1 p-4 overflow-y-auto max-h-screen">
        {visibleMessages.map((msg, index) => (
          <div 
            key={index}
            className={`${
              msg.includes('Error') ? 'text-red-500' : 
              msg.includes('Loading') ? 'text-green-500' : 
              msg.includes('Found') ? 'text-green-500' : 
              msg.includes('Importing') ? 'text-green-500/60' :
              msg.includes('Initializing') ? 'text-green-400/70' :
              msg.includes('Mounting') ? 'text-white' :
              msg.includes('Configuring') ? 'text-yellow-400/75' :
              'text-green-400/50'
            }`}
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  )
}

const MatrixRain = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const chars = 'अआइईउऊऋएऐओऔअंअःकखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसह';
    const charArray = chars.split('')
    const fontSize = 20
    const columns = canvas.width / fontSize

    const drops = Array(Math.floor(columns)).fill(1)

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        if (Math.random() < 0.975) {
          ctx.fillStyle = '#0F0'
        } else {
          ctx.fillStyle = '#FFF'
        }

        ctx.fillText(char, x, y)

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    return () => clearInterval(interval)
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed right-0 top-0 h-full opacity-20 pointer-events-none"
      style={{ width: '400px' }}
    />
  )
}

export default function MatrixBootLoader() {
  const text = useTypewriter("You reached 100.28.201.155", 50);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4 relative overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
        
        body {
          margin: 0;
          font-family: 'VT323', monospace;
        }

        @keyframes matrix-rain {
          0% { background-position: 0% 0%; }
          100% { background-position: 0% 100%; }
        }

        .matrix-bg {
          background-image: linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
          background-size: 100% 2px;
          animation: matrix-rain 20s linear infinite;
        }
      `}</style>
      <div className="matrix-bg absolute inset-0 z-0"></div>
      <MatrixRain />
      <BootMessages />
      <div className="relative p-8 text-green-500 font-mono text-lg max-w-md w-full z-10 bg-black/80 rounded-none border border-green-500/50">
        <div className="flex items-center space-x-2 mb-4">
          <WebIcon />
          <p className="relative z-10">{text}</p>
        </div>
        <MatrixLoader />
      </div>
    </div>
  );
}