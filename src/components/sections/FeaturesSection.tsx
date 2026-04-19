import { motion } from "framer-motion";
import { Eye, MessageSquare, Hash, Cpu, ShieldCheck, Zap, ScanEye, Brain } from "lucide-react";
import {
  SiPython,
  SiTensorflow,
  SiOpencv,
  SiReact,
  SiOllama,
  SiFlutter,
  SiSupabase,
  SiGooglemaps,
  SiFlask,
  SiScikitlearn,
  SiWhatsapp
} from "react-icons/si";
import { TbTransform, TbCube } from "react-icons/tb";
import { FaMicrochip } from "react-icons/fa6";

const features = [
  { icon: Eye, title: "Image Analysis", desc: "Utilizes Convolutional Neural Networks to detect harmful visual content and patterns in children's digital activity with high accuracy." },
  { icon: MessageSquare, title: "Text & Caption Analysis", desc: "NLP-powered sentiment and risk detection to identify concerning textual interactions and conversations." },
  { icon: Hash, title: "Hashtag Analysis", desc: "Monitors trending hashtags and behavioral patterns across social platforms to detect risky engagement." },
  { icon: Cpu, title: "IoT Monitoring", desc: "Real-time device usage tracking for screen time analysis, app usage patterns, and behavioral monitoring." },
  { icon: ShieldCheck, title: "Early Warning System", desc: "Proactive alerts triggered before clinical thresholds, giving parents and guardians time to intervene." },
  { icon: Zap, title: "Real-time Monitoring", desc: "Sub-200ms latency ensures seamless real-time monitoring by delivering instant analysis and timely alerts across all monitoring modules." },
];

const technologies = [
  { name: "Python", category: "Backend & AI", icon: SiPython, color: "#3776AB" },
  { name: "IoT", category: "Hardware Integration", icon: FaMicrochip, color: "#00B4D8" },
  { name: "Blockchain", category: "Security", icon: TbCube, color: "#F7931A" },
  { name: "TensorFlow", category: "Machine Learning", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Transformers", category: "NLP", icon: TbTransform, color: "#FFD166" },
  { name: "OCR", category: "Text Recognition", icon: ScanEye, color: "#06D6A0" },
  { name: "CNN", category: "Deep Learning", icon: Brain, color: "#EF476F" },
  { name: "OpenCV", category: "Computer Vision", icon: SiOpencv, color: "#5C3EE8" },
  { name: "Ollama", category: "LLM Integration", icon: SiOllama, color: "#FFFFFF" },
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
];

const FeaturesSection = () => (
  <>
    {/* Features Section */}
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
          <h2 className="font-display text-3xl font-bold text-primary">Key Features</h2>
        </motion.div>
        <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-xl text-muted-foreground mb-12">
          Four Integrated AI-Powered Systems
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card-hover p-6"
            >
              <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-display font-semibold text-primary mb-2">{f.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Technologies Section */}
    <section id="technologies" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-4"
        >
          <h2 className="font-display text-3xl font-bold text-primary">Technologies Used</h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }} 
          className="text-center text-lg text-muted-foreground mb-12"
        >
          Modern stack powering our innovative solutions
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl border border-border hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent 
                      className="w-6 h-6" 
                      style={{ color: tech.color }} 
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-primary">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">{tech.category}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default FeaturesSection;