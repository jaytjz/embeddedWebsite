import './App.css'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold text-glass-bright">AquaGrow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-glass hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-glass hover:text-white transition-colors">How It Works</a>
            <a href="#specs" className="text-glass hover:text-white transition-colors">Specifications</a>
            <a href="#team" className="text-glass hover:text-white transition-colors">Team</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 glass-panel rounded-full text-sm font-medium mb-6 text-glass">
              Imperial College Embedded Systems Project
            </div>
            <h1 className="title-main mb-6 leading-tight">
              AquaGrow
            </h1>
            <p className="text-xl text-glass mb-2">
              Smart Plant Care, Powered by AI.
            </p>
            <p className="text-lg text-glass-dim mb-8 leading-relaxed">
              Computer vision and machine learning identify your plants automatically,
              then adjust water and light levels based on integrated sensor data. Built to scale across multiple devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#features" className="glass-btn px-6 py-3 text-glass-bright font-medium rounded-lg">
                Explore Features
              </a>
              <a href="#specs" className="glass-btn px-6 py-3 text-glass font-medium rounded-lg">
                View Specs
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 glass-panel rounded-full flex items-center justify-center animate-float">
                <div className="text-[120px]">🪴</div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 icon-glow rounded-full flex items-center justify-center">
                <span className="text-2xl">💧</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 icon-glow rounded-full flex items-center justify-center">
                <span className="text-3xl">📷</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: "🌱",
      title: "AI Plant Identification",
      description: "Computer vision and machine learning automatically identify your plant species for optimized care."
    },
    {
      icon: "💡",
      title: "Adaptive Light Control",
      description: "Integrated light sensors adjust grow lights based on your plant's specific requirements."
    },
    {
      icon: "💧",
      title: "Smart Watering",
      description: "Soil moisture sensors trigger precise watering tailored to each plant's needs."
    },
    {
      icon: "📱",
      title: "Multi-Device Support",
      description: "UI lets you identify and manage multiple AquaGrow devices, designed to scale with your garden."
    },
    {
      icon: "📊",
      title: "Real-Time Dashboard",
      description: "Monitor all sensor data, device status, and plant health from a single web interface."
    },
    {
      icon: "🔧",
      title: "Modular Design",
      description: "Easily integrate additional sensors and actuators as your system grows."
    }
  ]

  return (
    <section id="features" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">Intelligent Features</h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            AI-powered plant care that adapts to each plant's unique needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 icon-glow rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="title-section text-lg mb-2">{feature.title}</h3>
              <p className="text-glass text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Identify",
      description: "Point the camera at your plant. Our ML model recognizes the species and loads optimal care parameters.",
      icon: "📷"
    },
    {
      number: "02",
      title: "Sense",
      description: "Soil moisture, light level, and environmental sensors continuously monitor conditions.",
      icon: "📡"
    },
    {
      number: "03",
      title: "Decide",
      description: "The backend processes sensor data against plant-specific thresholds to determine actions.",
      icon: "🧠"
    },
    {
      number: "04",
      title: "Act",
      description: "Water pump and grow lights activate automatically to maintain ideal growing conditions.",
      icon: "💧"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            A seamless integration of hardware and software working together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 icon-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="text-glass-dim font-bold text-sm mb-2">{step.number}</div>
                <h3 className="title-section text-lg mb-2">{step.title}</h3>
                <p className="text-glass text-sm">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Specifications() {
  const specs = {
    hardware: [
      { label: "Microcontroller", value: "ESP32-WROOM-32" },
      { label: "Soil Moisture Sensor", value: "Capacitive v2.0" },
      { label: "Temperature Sensor", value: "DHT22" },
      { label: "Water Pump", value: "12V DC Submersible" },
      { label: "Relay Module", value: "5V Single Channel" },
      { label: "Power Supply", value: "5V 2A USB / Solar" },
    ],
    software: [
      { label: "Firmware", value: "C++ (Arduino Framework)" },
      { label: "Communication", value: "WiFi 802.11 b/g/n" },
      { label: "Protocol", value: "MQTT / HTTP REST" },
      { label: "Dashboard", value: "React.js Web App" },
      { label: "Cloud Platform", value: "AWS IoT Core" },
      { label: "Data Storage", value: "InfluxDB Time Series" },
    ]
  }

  return (
    <section id="specs" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            Built with industry-standard components for reliability and performance.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="title-section text-xl mb-6 flex items-center gap-3">
              <span className="text-2xl">⚡</span> Hardware
            </h3>
            <div className="space-y-3">
              {specs.hardware.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-glass-dim text-sm">{spec.label}</span>
                  <span className="text-glass-bright text-sm font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h3 className="title-section text-xl mb-6 flex items-center gap-3">
              <span className="text-2xl">💻</span> Software
            </h3>
            <div className="space-y-3">
              {specs.software.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-white/10">
                  <span className="text-glass-dim text-sm">{spec.label}</span>
                  <span className="text-glass-bright text-sm font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Architecture() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">System Architecture</h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            A modular design that separates concerns and enables scalability.
          </p>
        </div>
        <div className="glass-card rounded-xl p-8">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="glass-panel rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="title-section text-lg mb-2">Sensor Layer</h3>
              <p className="text-glass text-sm">Soil moisture, temperature, and ambient light sensors collect environmental data</p>
            </div>
            <div className="glass-panel rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="title-section text-lg mb-2">Control Layer</h3>
              <p className="text-glass text-sm">ESP32 processes data, runs decision algorithms, and controls the water pump</p>
            </div>
            <div className="glass-panel rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="title-section text-lg mb-2">Cloud Layer</h3>
              <p className="text-glass text-sm">AWS IoT handles data storage, analytics, and remote access capabilities</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-4 text-glass-dim">
              <div className="w-20 h-0.5 step-connector"></div>
              <span className="text-xl">↔</span>
              <div className="w-20 h-0.5 step-connector"></div>
              <span className="text-xl">↔</span>
              <div className="w-20 h-0.5 step-connector"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const teamMembers = [
    { name: "Jeremy Tan", role: "Backend & Integration", emoji: "👨‍💻" },
    { name: "Kayvan Faghani", role: "Hardware & Embedded", emoji: "🔧" },
    { name: "Charlotte Gibson", role: "Frontend & UI", emoji: "👩‍💻" },
  ]

  return (
    <section id="team" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            Imperial College London - Embedded Systems Module 2024/25
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card rounded-xl p-6 text-center">
              <div className="w-20 h-20 icon-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">{member.emoji}</span>
              </div>
              <h3 className="title-section text-lg">{member.name}</h3>
              <p className="text-glass-dim text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer-glass py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌱</span>
              <span className="text-xl font-bold text-glass-bright">AquaGrow</span>
            </div>
            <p className="text-glass-dim text-sm">
              An AI-powered plant care system using computer vision and integrated sensors, developed for the Embedded Systems module at Imperial College London.
            </p>
          </div>
          <div>
            <h4 className="text-glass-bright font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-glass-dim text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Specifications</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-glass-bright font-semibold mb-4">Project Resources</h4>
            <ul className="space-y-2 text-glass-dim text-sm">
              <li><a href="https://github.com/kayvan-faghani/EmbeddedPiCode" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Backend & Hardware Code</a></li>
              <li><a href="https://github.com/C-Gibson20/Embedded-Systems-UI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Frontend UI Repository</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-glass-dim text-sm">
          <p>&copy; 2025 AquaGrow. Imperial College London - Embedded Systems Project.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div
        className="bg-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80')` }}
      />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Specifications />
      <Architecture />
      <Team />
      <Footer />
    </div>
  )
}
