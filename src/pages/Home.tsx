import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Shield, Eye, MessageSquare, Hash, Cpu, ChevronDown } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import AboutSection from "@/components/sections/AboutSection";
import ResearchSection from "@/components/sections/ResearchSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MilestonesSection from "@/components/sections/MilestonesSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import DocumentsSection from "@/components/sections/DocumentsSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";
import heroBanner from "@/assets/hero-banner.jpg";

const heroFeatures = [
  { icon: Eye, title: "Image Analysis", desc: "Detect harmful visual content using deep learning" },
  { icon: MessageSquare, title: "Text & Sentiment Intelligence", desc: "NLP-based sentiment and risk detection" },
  { icon: Hash, title: "Automated Risk Evaluation", desc: "Blockchain-Based Report Integrity Framework" },
  { icon: Cpu, title: "IoT Monitoring", desc: "Real-time screen time and usage tracking" },
];

const Home = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img src={heroBanner} alt="SafeKid Scan digital safety" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(222,80%,10%,0.88) 0%, hsla(222,80%,15%,0.65) 100%)" }} />
      </div>

      <div className="relative container mx-auto px-4 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              🛡️ Research Project 2026
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-black leading-tight mb-2">
              <span className="text-white">Smart Surveillance and</span>{" "}
              <span className="text-accent">Intervention System for</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/70 mb-6">
              Early Detection of Digital Addiction in Minors
            </p>
            <p className="text-lg text-white/60 max-w-lg mb-8 leading-relaxed">
              A privacy-aware, multimodal intelligence system that analyzes social media content, behavioral patterns, and IoT signals to identify early signs of digital addiction among children aged 10–18.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/modules" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all glow-accent">
                View Modules <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="https://drive.google.com/file/d/1rTQ_QxTwgQK11jvaf-dkPJRCmW9S2BWm/view?usp=sharing" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card-dark font-semibold text-white hover:bg-white/20 transition-all">
                <Download className="h-4 w-4" /> Download Paper
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="grid grid-cols-2 gap-4">
            {heroFeatures.map((f) => (
              <div key={f.title} className="glass-card-dark rounded-xl p-5 hover:scale-[1.03] transition-transform">
                <div className="w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                  <f.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm mb-1">{f.title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-sm">
          Scroll to explore
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>

    {/* All sections like betelcare */}
    <AboutSection />
    <ResearchSection />
    <FeaturesSection />
    <MilestonesSection />
    <AchievementsSection />
    <DocumentsSection />
    <TeamSection />
    <ContactSection />
  </PageWrapper>
);

export default Home;
