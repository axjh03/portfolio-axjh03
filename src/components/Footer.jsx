import { FacebookIcon, Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Alok Jha All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
              <FacebookIcon size={20} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        <div className="text-xs text-center text-gray-400 mt-4">
          <p>Coded with ❤️ by Alok Jha</p>
        </div>
      </div>
    </footer>
  )
}

