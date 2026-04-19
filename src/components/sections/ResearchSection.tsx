import { motion } from "framer-motion";
import { AlertTriangle, Brain, Eye, Shield } from "lucide-react";
import researchBanner from "@/assets/research-banner.jpg";
import systemArchitecture from "@/assets/Untitled Diagram.drawio (5) (1).png"; // Add your image here

const problems = [
  { icon: AlertTriangle, title: "Rising Screen Time", desc: "Children spend an average of 7+ hours daily on screens, making early detection of unhealthy patterns critical." },
  { icon: Brain, title: "Mental Health Impact", desc: "Digital addiction is linked to anxiety, depression, and impaired cognitive development in minors." },
  { icon: Eye, title: "Content Exposure Risks", desc: "Minors are increasingly exposed to harmful content that traditional parental controls fail to detect." },
];

const objectives = [
  { title: "Image Analysis", desc: "CNN-based system to detect harmful visual content and patterns in children's digital activity" },
  { title: "Text & Sentiment Intelligence", desc: "NLP-powered sentiment analysis to identify risky textual interactions" },
  { title: "Automated Risk Evaluation", desc: "Automated risk evaluation and blockchain-based report integrity framework" },
  { title: "IoT Monitoring", desc: "Real-time device usage tracking for screen time and usage pattern analysis" },
];

const methodology = [
  { step: "Data Collection & Preprocessing", desc: "Gathering anonymized digital interaction data and preprocessing for model training." },
  { step: "Model Development", desc: "Training CNN, NLP, and ensemble models for multi-modal digital behavior analysis." },
  { step: "System Integration", desc: "Building unified platform integrating all four analysis modules with real-time processing." },
  { step: "Testing & Validation", desc: "Rigorous testing with controlled datasets and real-world scenarios for accuracy validation." },
];

const architectureLayers = [
  {
    title: "Data Collection Layer",
    desc: "User uploads, behavioral data, complaints, and IoT device inputs are collected in real-time for analysis.",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "AI Processing Engine",
    desc: "Advanced AI models analyze images, captions, voice data, and user behavior to detect risks and addiction patterns.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Monitoring & Interaction Platform",
    desc: "A secure interface provides insights, alerts, and communication channels for users, guardians, and authorities.",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Continuous Feedback Loop",
    desc: "System continuously improves using user behavior, complaint history, and intervention outcomes to enhance accuracy.",
    color: "from-orange-500/20 to-amber-500/20"
  }
];

const centralServerFeatures = [
  "User Input",
  "Pre-Processing Layer",
  "Blockchain-Based Access Control",
  "Advanced Image Analysis Engine",
  "IoT Device Integration",
  "Advanced Complaint Analysis Engine",
  "Digital Medical Card Generation",
  "Addiction Scoring Engine",
  "Report Generation System",
  "AI Decision Agent",
  "Secure Chat System",
  "Notification and Alert System"
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-6">
          <span className="text-accent text-sm font-medium">Innovation in Child Safety</span>
          <h2 className="font-display text-3xl font-bold text-primary mt-2">Research Overview</h2>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
          Our research addresses the growing concern of digital addiction in children through advanced AI and multi-modal analysis techniques.
        </motion.p>

        {/* Image + Problem */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-xl">
            <img src={researchBanner} alt="Research visualization" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          </motion.div>
          <div>
            <h3 className="font-display text-xl font-semibold text-primary mb-6">Research Gap & Problem</h3>
            <p className="text-muted-foreground mb-6">While digital wellness tools exist, there is a significant gap in comprehensive, AI-driven systems that can detect early signs of digital addiction specifically in minors.</p>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-4 flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm">{p.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Objectives */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h3 className="font-display text-xl font-semibold text-primary text-center mb-8">Research Objectives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {objectives.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card-hover p-5 text-center">
                <div className="w-10 h-10 rounded-full gradient-navy flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{i + 1}</span>
                </div>
                <h4 className="font-display font-semibold text-primary text-sm mb-2">{o.title}</h4>
                <p className="text-xs text-muted-foreground">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20">
          <h3 className="font-display text-xl font-semibold text-primary text-center mb-8">Methodology</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {methodology.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-5 relative">
                <div className="absolute -top-3 left-5 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">{`Step ${i + 1}`}</div>
                <h4 className="font-display font-semibold text-primary text-sm mt-3 mb-2">{m.step}</h4>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* System Architecture Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="text-center mb-8">
            <span className="text-accent text-sm font-medium">System Design</span>
            <h3 className="font-display text-2xl font-bold text-primary mt-2">System Architecture</h3>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm">
              Complete overview of our SafeKid Scan system design
            </p>
          </div>

          {/* Architecture Image - Direct local image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 mb-10"
          >
            <div className="rounded-xl overflow-hidden bg-gradient-to-br from-navy/5 to-accent/5">
              <img 
                src={systemArchitecture}
                alt="BetelCare System Architecture Diagram" 
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              High-level architecture of the SafeKid Scan System
            </p>
          </motion.div>

          {/* Central Server Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6 mb-10"
          >
            <h4 className="font-display font-semibold text-primary text-lg mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent" />
              Central System – SafeKid AI Monitoring & Protection Platform
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {centralServerFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-accent/5 rounded-lg px-3 py-2 text-center"
                >
                  <span className="text-xs font-medium text-primary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Architecture Layers */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {architectureLayers.map((layer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card-hover p-5 bg-gradient-to-br ${layer.color} border border-white/10`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold text-sm">{i + 1}</span>
                  </div>
                  <h5 className="font-display font-semibold text-primary text-sm">{layer.title}</h5>
                </div>
                <p className="text-xs text-muted-foreground">{layer.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Architecture Note */}
          <motion.p 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center text-xs text-muted-foreground mt-6"
          >
            The system architecture follows a modular design pattern enabling scalable deployment and real-time data processing.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;