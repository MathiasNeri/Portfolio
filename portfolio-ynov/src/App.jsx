import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Moon, Sun, Menu, X, ChevronDown, Code, Coffee, Heart, Mail, MapPin, Send, Github, Linkedin, Database, Globe, Server, Zap, Star, Award, Users, Download } from 'lucide-react'
import profilePhoto from './assets/IMG_20250728_143718.jpg'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' })

  useEffect(() => {
    // Forcer le mode sombre par défaut
    setDarkMode(true)
    localStorage.setItem('darkMode', 'true')
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
  }



  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Ajouter la date et l'heure actuelles au formulaire
    const now = new Date()
    const dateStr = now.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    const timeStr = now.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    })
    
    // Créer des champs cachés pour la date et l'heure
    const dateInput = document.createElement('input')
    dateInput.type = 'hidden'
    dateInput.name = 'date'
    dateInput.value = dateStr
    
    const timeInput = document.createElement('input')
    timeInput.type = 'hidden'
    timeInput.name = 'time'
    timeInput.value = timeStr
    
    // Ajouter les champs au formulaire
    e.target.appendChild(dateInput)
    e.target.appendChild(timeInput)
    
    try {
      const result = await emailjs.sendForm(
        'service_gd01ihp', // Service ID configuré
        'template_rp2e37b', // Template ID configuré
        e.target,
        'vs8NAB1ZQ_HR13RAb' // Public Key configurée
      )
      
      if (result.status === 200) {
        setNotification({
          show: true,
          message: 'Message envoyé avec succès ! 🎉',
          type: 'success'
        })
        setFormData({ name: '', email: '', message: '' })
        
        // Masquer la notification après 5 secondes
        setTimeout(() => {
          setNotification({ show: false, message: '', type: 'success' })
        }, 5000)
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setNotification({
        show: true,
        message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.',
        type: 'error'
      })
      
      // Masquer la notification après 5 secondes
      setTimeout(() => {
        setNotification({ show: false, message: '', type: 'error' })
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }



  const skills = [
    { name: "HTML5", level: "Avancé", color: "from-orange-500 to-red-500" },
    { name: "CSS3", level: "Avancé", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", level: "Intermédiaire", color: "from-yellow-400 to-orange-500" },
    { name: "React", level: "Intermédiaire", color: "from-cyan-400 to-blue-500" },
    { name: "PHP", level: "Avancé", color: "from-purple-500 to-pink-500" },
    { name: "Node.js", level: "Avancé", color: "from-green-500 to-emerald-500" },
    { name: "Python", level: "Avancé", color: "from-blue-600 to-indigo-600" },
    { name: "Golang", level: "Intermédiaire", color: "from-cyan-500 to-blue-500" },
    { name: "Git", level: "Avancé", color: "from-red-500 to-orange-500" },
    { name: "MySQL", level: "Avancé", color: "from-blue-500 to-indigo-500" },
    { name: "phpMyAdmin", level: "Avancé", color: "from-orange-500 to-yellow-500" }
  ]

  const stats = [
    { icon: <Code className="w-6 h-6" />, number: "12", label: "Projets réalisés" },
    { icon: <Users className="w-6 h-6" />, number: "2", label: "Années d'études" },
    { icon: <Award className="w-6 h-6" />, number: "3ème", label: "Année en cours" },
    { icon: <Star className="w-6 h-6" />, number: "Cybersécurité", label: "Spécialisation" }
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`} style={{ paddingTop: '80px' }}>
      
      {/* Avatar flottant en haut à gauche */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -180 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
        className="absolute top-20 left-8 z-50 avatar-container"
      >
        <div className="relative">
          {/* Cercle principal avec effets */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl avatar-inner" style={{ width: '96px', height: '96px', minWidth: '96px', minHeight: '96px' }}>
            {/* Anneau rotatif */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-white/30"
            />
            
            {/* Photo */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white avatar-inner" style={{ width: '100%', height: '100%', minWidth: '100%', minHeight: '100%' }}>
              <img 
                src={profilePhoto} 
                alt="Mathias Neri" 
                className="w-full h-full object-cover profile-photo"
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
              {/* Overlay subtil */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10" />
            </div>
          </div>
          
          {/* Particules flottantes */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"
          />
          
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-400 rounded-full shadow-lg"
          />
          
          <motion.div
            animate={{ 
              x: [0, 5, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            className="absolute top-1 -left-1 w-2 h-2 bg-pink-400 rounded-full shadow-lg"
          />
          
          {/* Badge de statut */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 300 }}
            className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">👨‍💻</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Notification System */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, x: 400, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 400, scale: 0.8 }}
            transition={{ 
              type: "spring", 
              damping: 20, 
              stiffness: 300,
              duration: 0.6
            }}
            className="fixed top-0 right-6 z-[9999] w-80" style={{top: '0px', marginTop: '0px', position: 'fixed'}}
          >
            <div className="relative overflow-hidden">
              {/* Background avec gradient et effet glassmorphism */}
                             <div className="bg-green-500 rounded-xl shadow-lg border border-green-400/30" style={{backgroundColor: '#10b981'}}>
                {/* Effet de brillance animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full animate-pulse"></div>
                
                {/* Contenu de la notification */}
                                 <div className="relative p-4">
                   <div className="flex items-start space-x-3">
                    {/* Icône avec animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                             className="flex-shrink-0 w-8 h-8 bg-white/30 rounded-full flex items-center justify-center border border-white/50"
                    >
                      {notification.type === 'success' ? (
                                                 <motion.svg 
                           className="w-4 h-4 text-white" 
                           fill="currentColor" 
                           viewBox="0 0 20 20"
                           initial={{ scale: 0 }}
                           animate={{ scale: 1 }}
                           transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                           style={{color: 'white'}}
                         >
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </motion.svg>
                      ) : (
                                                 <motion.svg 
                           className="w-4 h-4 text-white" 
                           fill="currentColor" 
                           viewBox="0 0 20 20"
                           initial={{ scale: 0 }}
                           animate={{ scale: 1 }}
                           transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                           style={{color: 'white'}}
                         >
                           <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                         </motion.svg>
                      )}
                    </motion.div>
                    
                    {/* Texte du message */}
                    <div className="flex-1 min-w-0">
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                                                 className="text-white font-medium text-sm leading-relaxed" style={{color: 'white'}}
                      >
                        {notification.message}
                      </motion.p>
                    </div>
                    
                    {/* Bouton de fermeture */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => setNotification({ show: false, message: '', type: 'success' })}
                                             className="flex-shrink-0 w-6 h-6 bg-white/30 hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 border border-white/50"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" style={{color: 'white'}}>
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
                
                {/* Barre de progression */}
                                 <motion.div
                   initial={{ scaleX: 1 }}
                   animate={{ scaleX: 0 }}
                   transition={{ duration: 5, ease: "linear" }}
                   className="h-0.5 bg-white/50 rounded-b-xl origin-left"
                 />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="bg-element absolute top-20 left-20 w-32 h-32 bg-blue-200 dark:bg-blue-800"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="bg-element absolute bottom-20 right-20 w-40 h-40 bg-purple-200 dark:bg-purple-800"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="bg-element absolute top-1/2 left-1/3 w-24 h-24 bg-green-200 dark:bg-green-800"
        />
      </div>

      {/* Header with navigation */}
      <header className="header-fixed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ paddingLeft: '3rem', height: '80px', alignItems: 'center' }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="cursor-pointer group relative flex items-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="text-5xl font-bold gradient-text transition-all duration-300 relative"
                style={{
                  textShadow: '0 0 0 rgba(59, 130, 246, 0)',
                  transition: 'all 0.3s ease-out'
                }}
              >
                Mathias Neri
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {['home', 'about', 'skills', 'contact'].map((section) => (
                <motion.a
                  key={section}
                  href={`#${section}`}
                  whileHover={{ y: -1 }}
                  className="nav-link text-base font-medium capitalize relative group px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                >
                  {section === 'home' ? 'Accueil' : 
                   section === 'about' ? 'À propos' :
                   section === 'skills' ? 'Compétences' : 'Contact'}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="header-icons-container flex items-center justify-center space-x-4" style={{ height: '80px', display: 'flex', alignItems: 'center' }}>
              {/* CV Download button */}
              <motion.a
                href="/cv-mathias-neri.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-base font-medium shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>CV</span>
              </motion.a>

              {/* Dark mode toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="hamburger-icon flex items-center justify-center"
                style={{ alignSelf: 'center', margin: 'auto 0', position: 'relative', top: '0', transform: 'none' }}
                aria-label="Toggle dark mode"
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-6 h-6 text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-6 h-6 text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Mobile menu button - moved to the right */}
              <motion.button
                onClick={toggleMobileMenu}
                className="lg:hidden hamburger-icon flex items-center justify-center"
                style={{ alignSelf: 'center', margin: 'auto 0', position: 'relative', top: '0', transform: 'none' }}
                aria-label="Toggle mobile menu"
              >
                <div className={`icon-1 ${mobileMenuOpen ? 'a' : ''}`}></div>
                <div className={`icon-2 ${mobileMenuOpen ? 'c' : ''}`}></div>
                <div className={`icon-3 ${mobileMenuOpen ? 'b' : ''}`}></div>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-overlay lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile menu - Style moderne */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu header with close button */}
              <div className="mobile-menu-header">
                <button 
                  className="close-button"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ×
                </button>
              </div>

              {/* Menu content */}
              <div className="mobile-menu-content">
                <div 
                  className="mobile-menu-item"
                  onClick={() => { scrollToSection('about'); setMobileMenuOpen(false); }}
                >
                  À propos
                </div>
                <div 
                  className="mobile-menu-item"
                  onClick={() => { scrollToSection('skills'); setMobileMenuOpen(false); }}
                >
                  Compétences
                </div>
                <div 
                  className="mobile-menu-item"
                  onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
                >
                  Contact
                </div>
                <div 
                  className="mobile-menu-item"
                  onClick={() => { 
                    window.open('/cv-mathias-neri.pdf', '_blank');
                    setMobileMenuOpen(false);
                  }}
                >
                  CV
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <main className="pt-20">
        {/* Hero Section - Design Moderne */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient orbs */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
            />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-24"
            >
              {/* Status badge */}
                              <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
                  className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm rounded-full text-sm font-medium shadow-lg"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span style={{
                    background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: '500'
                  }}>Disponible pour de nouveaux projets</span>
                </motion.div>

              {/* Main title */}
              <div className="space-y-16">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight"
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Mathias
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
                    Neri
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                  className="text-2xl md:text-3xl text-gray-300 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
                >
                  Passionné par la <span className="text-blue-600 dark:text-blue-400 font-semibold">cybersécurité</span> et le <span className="text-purple-600 dark:text-purple-400 font-semibold">développement</span>
                </motion.p>
              </div>

              {/* Stats with modern design */}
              <div className="mt-24">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                  className="max-w-4xl mx-auto"
                >
                  {/* Première rangée */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.slice(0, 2).map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.1, ease: "backOut" }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative p-8 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300"
                      >
                        <div className="relative z-10">
                          <div className="text-blue-500 dark:text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Spacer entre les rangées */}
                  <div style={{ height: '80px' }}></div>
                  
                  {/* Deuxième rangée */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.slice(2, 4).map((stat, index) => (
                      <motion.div
                        key={index + 2}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.1, ease: "backOut" }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group relative p-8 bg-white/5 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl hover:bg-white/10 dark:hover:bg-gray-800/50 transition-all duration-300"
                      >
                        <div className="relative z-10">
                          <div className="text-blue-500 dark:text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            {stat.icon}
                          </div>
                          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer div */}
              <div style={{ height: '50px' }}></div>

              {/* Tech stack icons */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                  className="flex justify-center items-center space-x-20 text-gray-400 dark:text-gray-500"
                >
                                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                    className="p-3 bg-white/5 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm"
                  >
                    <Code className="w-8 h-8" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    className="p-3 bg-white/5 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm"
                  >
                    <Coffee className="w-8 h-8" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="p-3 bg-white/5 dark:bg-gray-800/30 rounded-xl backdrop-blur-sm"
                  >
                                      <Heart className="w-8 h-8" />
                </motion.div>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-12 justify-center items-center"
                >
                                  <motion.button 
                    className="motion-button"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToContact();
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '0.75rem 5.5rem',
                      background: 'linear-gradient(135deg, #1e40af, #1e40af)',
                      color: 'white',
                      borderRadius: '12px',
                      fontWeight: '600',
                      fontSize: '1.125rem',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.3s ease',
                      border: 'none',
                      cursor: 'pointer',
                      textDecoration: 'none !important',
                      outline: 'none',
                      width: '420px',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #1d4ed8, #1d4ed8)';
                      e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'scale(1.05) translateY(-2px)';
                      e.target.style.textDecoration = 'none !important';
                      
                      // Force remove text decoration from all child elements
                      const childElements = e.target.querySelectorAll('*');
                      childElements.forEach(el => {
                        el.style.textDecoration = 'none !important';
                        el.style.textDecorationLine = 'none !important';
                        el.style.textDecorationStyle = 'none !important';
                        el.style.textDecorationColor = 'none !important';
                      });
                      
                      // Effet de reflet
                      const reflection = document.createElement('div');
                      reflection.style.cssText = `
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
                        transform: translateX(-100%);
                        transition: transform 0.6s ease;
                        pointer-events: none;
                      `;
                      reflection.id = 'reflection';
                      e.target.appendChild(reflection);
                      
                      setTimeout(() => {
                        reflection.style.transform = 'translateX(100%)';
                      }, 50);
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #1e40af, #1e40af)';
                      e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                      e.target.style.transform = 'scale(1) translateY(0)';
                      e.target.style.textDecoration = 'none !important';
                      
                      // Supprimer l'effet de reflet
                      const reflection = e.target.querySelector('#reflection');
                      if (reflection) {
                        reflection.remove();
                      }
                    }}
                  >
                                                                <div className="flex items-center justify-center space-x-2 w-full" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', pointerEvents: 'none' }}>
                        <Mail className="w-5 h-5" />
                        <div style={{ whiteSpace: 'nowrap', textDecoration: 'none !important', userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', pointerEvents: 'none' }}>Me contacter</div>
                      </div>
                  </motion.button>
                
                                 <motion.a 
                   className="motion-a"
                   href="#skills"
                   whileTap={{ scale: 0.95 }}
                   style={{
                     padding: '0.75rem 5.5rem',
                     background: 'linear-gradient(135deg, #1e3a8a, #1e3a8a)',
                     color: 'white',
                     borderRadius: '12px',
                     fontWeight: '600',
                     fontSize: '1.125rem',
                     boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                     transition: 'all 0.3s ease',
                     border: 'none',
                     cursor: 'pointer',
                                            textDecoration: 'none !important',
                     outline: 'none',
                     display: 'inline-block',
                     width: '420px',
                     position: 'relative',
                     overflow: 'hidden'
                   }}
                                        onMouseEnter={(e) => {
                       e.target.style.background = 'linear-gradient(135deg, #1d4ed8, #1d4ed8)';
                       e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                       e.target.style.transform = 'scale(1.05) translateY(-2px)';
                       e.target.style.textDecoration = 'none !important';
                       
                       // Force remove text decoration from all child elements
                       const childElements = e.target.querySelectorAll('*');
                       childElements.forEach(el => {
                         el.style.textDecoration = 'none !important';
                         el.style.textDecorationLine = 'none !important';
                         el.style.textDecorationStyle = 'none !important';
                         el.style.textDecorationColor = 'none !important';
                       });
                       
                       // Effet de reflet
                       const reflection = document.createElement('div');
                       reflection.style.cssText = `
                         position: absolute;
                         top: -50%;
                         left: -50%;
                         width: 200%;
                         height: 200%;
                         background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%);
                         transform: translateX(-100%);
                         transition: transform 0.6s ease;
                         pointer-events: none;
                       `;
                       reflection.id = 'reflection2';
                       e.target.appendChild(reflection);
                       
                       setTimeout(() => {
                         reflection.style.transform = 'translateX(100%)';
                       }, 50);
                     }}
                                        onMouseLeave={(e) => {
                       e.target.style.background = 'linear-gradient(135deg, #1e3a8a, #1e3a8a)';
                       e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                       e.target.style.transform = 'scale(1) translateY(0)';
                       e.target.style.textDecoration = 'none !important';
                       
                       // Supprimer l'effet de reflet
                       const reflection = e.target.querySelector('#reflection2');
                       if (reflection) {
                         reflection.remove();
                       }
                     }}
                 >
                                                            <div className="flex items-center justify-center space-x-2 w-full" style={{ userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', pointerEvents: 'none' }}>
                        <Code className="w-6 h-6" />
                        <div style={{ whiteSpace: 'nowrap', textDecoration: 'none !important', userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none', pointerEvents: 'none' }}>Voir mes compétences</div>
                      </div>
                  </motion.a>
                </motion.div>
              </div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="p-3 bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm rounded-full text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16 section-header"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                À propos de <span className="gradient-text">moi</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Passionné par le développement et les nouvelles technologies
              </p>
            </motion.div>

            <div className="relative">
              {/* Background avec photo intégrée */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 p-8 lg:p-12">
                
                {/* Contenu principal */}
                <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Mon parcours à Ynov
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Étudiant en 2ème année d'informatique à Ynov Campus Aix, je me passionne 
                        pour la cybersécurité et le développement. Mon parcours m'a permis d'acquérir 
                        une solide base technique tout en développant ma curiosité et ma rigueur.
                      </p>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Curieux de nature, j'aime explorer de nouvelles technologies et approches 
                        pour créer des solutions sécurisées. En septembre, je vais entamer ma 3ème année 
                        en me spécialisant en cybersécurité, un domaine qui me passionne particulièrement.
                      </p>
                    </div>

                    {/* Education info grid */}
                    <div className="grid grid-cols-2 gap-4 pt-6">
                      {[
                        { icon: <Code className="w-6 h-6" />, title: "2ème année", desc: "Informatique à Ynov Campus Aix" },
                        { icon: <MapPin className="w-6 h-6" />, title: "Localisation", desc: "Aix-en-Provence, France" },
                        { icon: <Mail className="w-6 h-6" />, title: "Formation", desc: "2023 - 2026 (en cours)" },
                        { icon: <Database className="w-6 h-6" />, title: "Spécialisation", desc: "Cybersécurité (3ème année)" }
                      ].map((info, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300"
                        >
                          <div className="text-blue-600 dark:text-blue-400">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {info.title}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {info.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>


                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16 section-header"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Mes <span className="gradient-text">compétences</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Technologies et outils que j'utilise pour créer des applications modernes
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Frontend", icon: <Globe className="w-6 h-6" />, skills: skills.slice(0, 4) },
                { title: "Backend", icon: <Server className="w-6 h-6" />, skills: skills.slice(4, 8) },
                { title: "Outils", icon: <Zap className="w-6 h-6" />, skills: skills.slice(8, 11) }
              ].map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                  viewport={{ once: true }}
                  className="skill-card"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-blue-600 dark:text-blue-400">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                            skill.level === "Avancé" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                            skill.level === "Intermédiaire" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                            skill.level === "Débutant" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" :
                            "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16 section-header"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Me <span className="gradient-text">contacter</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discutons de vos projets et opportunités de collaboration
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="card-info p-0"
              >
                                <div className="p-8 m-4">
                  {/* Section Informations de contact */}
                  <div className="mb-8 mt-6 p-8">
                    <div style={{height: '30px'}}></div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6" style={{paddingLeft: '20px'}}>
                      Informations de contact
                    </h3>
                  </div>
                  
                  {/* Espacement invisible */}
                  <div style={{height: '50px'}}></div>
                  
                  <div className="space-y-4 p-8">
                      {[
                        { icon: <Mail className="w-8 h-8" />, title: "Email", value: "mathias.neri@ynov.com", link: "mailto:mathias.neri@ynov.com" },
                        { icon: <MapPin className="w-8 h-8" />, title: "Localisation", value: "Aix-en-Provence, France", link: "#" }
                      ].map((info, index) => (
                        <motion.a
                          key={index}
                          href={info.link}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          className="contact-info-card"
                          style={{padding: '20px'}}
                        >
                          <div className="text-blue-600 dark:text-blue-400">
                            {info.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {info.title}
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400">
                              {info.value}
                            </p>
                          </div>
                        </motion.a>
                      ))}
                    </div>

                  {/* Section Réseaux sociaux */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Réseaux sociaux
                      </h3>
                    </div>
                    
                    {/* Conteneur des logos avec flexbox */}
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '64px', padding: '16px'}}>
                      {[
                        { name: "GitHub", icon: <Github className="w-10 h-10" />, url: "https://github.com/MathiasNeri", color: "hover:bg-gray-900 dark:hover:bg-white dark:hover:text-gray-900" },
                        { name: "LinkedIn", icon: <Linkedin className="w-10 h-10" />, url: "https://www.linkedin.com/in/mathias-neri-53482833a/", color: "hover:bg-blue-600" },
                        { name: "Email", icon: <Mail className="w-10 h-10" />, url: "mailto:mathias.neri@ynov.com", color: "hover:bg-red-500" }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: 0.4 + index * 0.05, hover: { duration: 0.05, delay: 0 } }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.15, y: -8, rotate: 5 }}
                          className={`social-link p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-2xl text-gray-700 dark:text-gray-300 transition-all duration-75 ease-out shadow-lg hover:shadow-2xl ${social.color}`}
                          style={{padding: '20px'}}

                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                    
                    {/* Espacement vers le bas */}
                    <div style={{height: '30px', marginTop: '20px'}}></div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="card-form p-0"
              >
                <div className="p-8 m-4">
                  {/* Section Titre du formulaire */}
                  <div className="mb-6 p-8">
                    <div style={{height: '30px'}}></div>
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-12" style={{paddingLeft: '20px'}}>
                      Envoyez-moi un message
                    </h3>
                    

                  </div>
                  
                  {/* Espacement invisible */}
                  <div style={{height: '50px'}}></div>
                  
                  {/* Section Formulaire */}
                  <form onSubmit={handleSubmit} className="space-y-6 mt-8 p-8">
                  <div style={{padding: '20px'}}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input-variety"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div style={{padding: '20px'}}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input-variety"
                      placeholder="votre.email@example.com"
                    />
                  </div>

                  <div style={{padding: '20px'}}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="input-variety resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{padding: '20px'}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </motion.button>
                </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-2">
              Mathias Neri
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Étudiant en cybersécurité
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Mathias Neri. Tous droits réservés.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
              Portfolio créé avec React, Tailwind CSS et Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
