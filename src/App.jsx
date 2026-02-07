import "./App.css";
import flowerImg from "/assets/flower.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <img src={flowerImg} alt="HANA" className="w-6 h-6" />
            <span className="text-xl font-bold text-glass-bright">HANA 花</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-glass hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-glass hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="#specs"
              className="text-glass hover:text-white transition-colors"
            >
              Specifications
            </a>
            <a
              href="#team"
              className="text-glass hover:text-white transition-colors"
            >
              Team
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 glass-panel rounded-full text-sm font-medium mb-6 text-glass">
              Team Dream Project
            </div>
            <h1 className="title-main mb-6 leading-tight">HANA 花</h1>
            <p className="text-xl text-glass mb-2">
              Smart Plant Care, Powered by AI.
            </p>
            <p className="text-lg text-glass-dim mb-8 leading-relaxed">
              Computer vision and machine learning identify your plants
              automatically, then adjust water and light levels based on
              integrated sensor data. Built to scale across multiple devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#features"
                className="glass-btn px-6 py-3 text-glass-bright font-medium rounded-lg"
              >
                Explore Features
              </a>
              <a
                href="#specs"
                className="glass-btn px-6 py-3 text-glass font-medium rounded-lg"
              >
                View Specs
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 glass-panel rounded-full flex items-center justify-center animate-float">
                <img src={flowerImg} alt="HANA" className="w-32 h-32" />
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
  );
}

function Video() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-xl p-6">
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="HANA Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: "flower",
      title: "AI Plant Identification",
      description:
        "Using computer vision and machine learning, HANA automatically identifies your plant species for optimized care.",
    },
    {
      icon: "💡",
      title: "Adaptive Light Control",
      description:
        "Integrated light sensors allow HANA to adjust grow lights based on your plant's specific requirements.",
    },
    {
      icon: "💧",
      title: "Smart Watering",
      description:
        "With soil moisture sensors, HANA delivers precise watering tailored to each plant's needs.",
    },
    {
      icon: "📱",
      title: "Multi-Device Support",
      description:
        "Manage multiple HANA devices from one UI, designed to scale with your garden.",
    },
    {
      icon: "📊",
      title: "Real-Time Monitoring",
      description:
        "From the moment you set it up, HANA tracks sensor data, device status, and plant health in real time.",
    },
    {
      icon: "🔧",
      title: "Secure Design",
      description:
        "Built-in security features keep HANA protected from unauthorized access.",
    },
  ];

  return (
    <section id="features" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">
            Intelligent Features
          </h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            AI-powered plant care that adapts to each plant's unique needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="glass-card rounded-xl p-6">
              <div className="w-12 h-12 icon-glow rounded-lg flex items-center justify-center mb-4">
                {feature.icon === "flower" ? (
                  <img src={flowerImg} alt="flower" className="w-6 h-6" />
                ) : (
                  <span className="text-2xl">{feature.icon}</span>
                )}
              </div>
              <h3 className="title-section text-lg mb-2">{feature.title}</h3>
              <p className="text-glass text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Buy",
      description:
        "Get your HANA device and place your plant inside. The built-in camera automatically identifies the species and loads optimal care settings.",
      icon: "🛒",
    },
    {
      number: "02",
      title: "Relax",
      description:
        "Relax and let HANA do the rest. Sensors continuously monitor soil moisture, light, and environment.",
      icon: "☕",
    },
    {
      number: "03",
      title: "Trust",
      description:
        "Trust our smart system knows exactly what your plant needs and makes care decisions automatically.",
      icon: "🧠",
    },
    {
      number: "04",
      title: "Thrive",
      description:
        "Watch your plants flourish with perfect watering and lighting, no green thumb required.",
      icon: "🌱",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            Set it up once, then let HANA handle everything. Plant care has
            never been easier.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card rounded-xl p-6 text-center">
                <div className="w-16 h-16 icon-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <div className="text-glass-dim font-bold text-sm mb-2">
                  {step.number}
                </div>
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
  );
}

function Specifications() {
  const specs = {
    hardware: [
      { label: "Microprocessor", value: "Raspberry Pi Zero 2" },
      {
        label: "Soil Moisture Sensor",
        value: "Capacitive Soil Moisture Sensor v1.0",
      },
      {
        label: "Water Pump",
        value: "In-House Peristaltic Pump with NEMA17 Stepper Motor",
      },
      { label: "Light Source", value: "WS2812 5050 RGB LED 8×8 Matrix Module" },
      { label: "Camera", value: "Raspberry Pi Camera v2.1 (8MP, 1080p)" },
      {
        label: "Spectrometer",
        value: "Adafruit AS7341 10-Channel Spectral Sensor",
      },
    ],
    software: [
      { label: "Firmware", value: "Python" },
      { label: "Communication", value: "I2C" },
      { label: "Protocol", value: "WebSockets" },
      { label: "Dashboard", value: "React" },
      { label: "Cloud Platform", value: "Render" },
      { label: "Data Storage", value: "CSV File" },
    ],
  };

  return (
    <section id="specs" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">
            Technical Specifications
          </h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            Built with industry-standard components for reliability and
            performance.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h3 className="title-section text-xl mb-6 flex items-center gap-3">
              <span className="text-2xl">⚡</span> Hardware
            </h3>
            <div className="space-y-3">
              {specs.hardware.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-white/10"
                >
                  <span className="text-glass-dim text-sm">{spec.label}</span>
                  <span className="text-glass-bright text-sm font-medium">
                    {spec.value}
                  </span>
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
                <div
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-white/10"
                >
                  <span className="text-glass-dim text-sm">{spec.label}</span>
                  <span className="text-glass-bright text-sm font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const teamMembers = [
    { name: "Jeremy Tan", role: "Mechanical Engineer" },
    { name: "Kayvan Faghani", role: "Embedded Engineer" },
    { name: "Charlotte Gibson", role: "Machine Learning Engineer" },
  ];

  return (
    <section id="team" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="title-section text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-glass max-w-2xl mx-auto">
            Imperial College London - Embedded Systems Module 2025/26
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-card rounded-xl p-6 text-center">
              <h3 className="title-section text-lg">{member.name}</h3>
              <p className="text-glass-dim text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-glass py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={flowerImg} alt="HANA" className="w-6 h-6" />
              <span className="text-xl font-bold text-glass-bright">
                HANA 花
              </span>
            </div>
            <p className="text-glass-dim text-sm">
              An AI-powered plant care system using computer vision and
              integrated sensors, developed for the Embedded Systems module at
              Imperial College London.
            </p>
          </div>
          <div>
            <h4 className="text-glass-bright font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-glass-dim text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Specifications
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-glass-bright font-semibold mb-4">
              Project Resources
            </h4>
            <ul className="space-y-2 text-glass-dim text-sm">
              <li>
                <a
                  href="https://github.com/kayvan-faghani/EmbeddedPiCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Backend & Hardware Code
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/C-Gibson20/Embedded-Systems-UI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Frontend UI Repository
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-glass-dim text-sm">
          <p>
            &copy; 2025 HANA 花. Imperial College London - Embedded Systems
            Project.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div
        className="bg-overlay"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80')`,
        }}
      />
      <Navbar />
      <Hero />
      <Video />
      <Features />
      <HowItWorks />
      <Specifications />
      <Team />
      <Footer />
    </div>
  );
}
