import './App.css'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold text-primary-800">AquaGrow</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 transition-colors">How It Works</a>
            <a href="#specs" className="text-gray-600 hover:text-primary-600 transition-colors">Specifications</a>
            <a href="#team" className="text-gray-600 hover:text-primary-600 transition-colors">Team</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="gradient-bg min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              Imperial College Embedded Systems Project
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Smart Plant Care,<br />
              <span className="text-primary-200">Simplified.</span>
            </h1>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              AquaGrow is an IoT-powered automated plant watering system that uses real-time
              soil moisture sensing and intelligent algorithms to keep your plants perfectly hydrated.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#features" className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-colors shadow-lg">
                Explore Features
              </a>
              <a href="#specs" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                View Specs
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 rounded-full flex items-center justify-center animate-float">
                <div className="text-[150px]">🪴</div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-400/30 rounded-full flex items-center justify-center glass-card">
                <span className="text-3xl">💧</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-300/30 rounded-full flex items-center justify-center glass-card">
                <span className="text-4xl">📡</span>
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
      icon: "🌡️",
      title: "Real-Time Monitoring",
      description: "Continuous soil moisture and temperature sensing with instant data updates to your dashboard."
    },
    {
      icon: "🤖",
      title: "Smart Automation",
      description: "Intelligent watering schedules based on plant type, weather data, and soil conditions."
    },
    {
      icon: "📱",
      title: "Remote Control",
      description: "Control and monitor your plants from anywhere using our web dashboard or mobile app."
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Historical data tracking and insights to optimize your plant care routine."
    },
    {
      icon: "🔋",
      title: "Energy Efficient",
      description: "Low-power design with solar charging capability for sustainable operation."
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      description: "Get notified when your plants need attention or when water levels are low."
    }
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Intelligent Features</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to keep your plants thriving with minimal effort.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
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
      title: "Sense",
      description: "Capacitive soil moisture sensors continuously measure the water content in your plant's soil.",
      icon: "📡"
    },
    {
      number: "02",
      title: "Process",
      description: "The ESP32 microcontroller analyzes sensor data and determines optimal watering needs.",
      icon: "🧠"
    },
    {
      number: "03",
      title: "Connect",
      description: "Data is transmitted via WiFi to our cloud platform for remote monitoring and control.",
      icon: "☁️"
    },
    {
      number: "04",
      title: "Water",
      description: "The pump activates precisely when needed, delivering the right amount of water to your plants.",
      icon: "💧"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A seamless integration of hardware and software working together.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <div className="text-primary-600 font-bold text-sm mb-2">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-primary-200"></div>
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
    <section id="specs" className="py-20 bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
          <p className="text-xl text-primary-200 max-w-2xl mx-auto">
            Built with industry-standard components for reliability and performance.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">⚡</span> Hardware
            </h3>
            <div className="space-y-4">
              {specs.hardware.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-primary-200">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-3xl">💻</span> Software
            </h3>
            <div className="space-y-4">
              {specs.software.map((spec, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-primary-200">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">System Architecture</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modular design that separates concerns and enables scalability.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-primary-50 rounded-xl">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-primary-800 mb-2">Sensor Layer</h3>
              <p className="text-sm text-gray-600">Soil moisture, temperature, and ambient light sensors collect environmental data</p>
            </div>
            <div className="text-center p-6 bg-accent-50 rounded-xl">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-lg font-bold text-accent-700 mb-2">Control Layer</h3>
              <p className="text-sm text-gray-600">ESP32 processes data, runs decision algorithms, and controls the water pump</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-lg font-bold text-purple-700 mb-2">Cloud Layer</h3>
              <p className="text-sm text-gray-600">AWS IoT handles data storage, analytics, and remote access capabilities</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-4 text-gray-400">
              <div className="w-24 h-0.5 bg-primary-300"></div>
              <span className="text-2xl">↔️</span>
              <div className="w-24 h-0.5 bg-accent-300"></div>
              <span className="text-2xl">↔️</span>
              <div className="w-24 h-0.5 bg-purple-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const teamMembers = [
    { name: "Team Member 1", role: "Hardware Lead", emoji: "👨‍💻" },
    { name: "Team Member 2", role: "Firmware Developer", emoji: "👩‍💻" },
    { name: "Team Member 3", role: "Cloud & Backend", emoji: "👨‍🔬" },
    { name: "Team Member 4", role: "Frontend & UI", emoji: "👩‍🎨" },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Imperial College London - Embedded Systems Module 2024/25
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-5xl">{member.emoji}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-primary-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌱</span>
              <span className="text-xl font-bold">AquaGrow</span>
            </div>
            <p className="text-gray-400">
              An IoT automated plant watering system developed for the Embedded Systems module at Imperial College London.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#specs" className="hover:text-white transition-colors">Specifications</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Project Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Demo Video</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; 2025 AquaGrow. Imperial College London - Embedded Systems Project.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
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
