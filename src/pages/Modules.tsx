import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Eye, MessageSquare, Hash, Cpu, ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";

const modules = [
  {
    slug: "image-analysis",
    icon: Eye,
    title: "Image Analysis Module",
    desc: "Uses convolutional neural networks to classify and detect harmful or addictive visual content from social media images.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    slug: "text-caption-analysis",
    icon: MessageSquare,
    title: "Text & Caption Analysis Module",
    desc: "Employs NLP techniques including BERT-based models for sentiment analysis, toxicity detection, and risk scoring of textual content.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    slug: "Automated Risk Evaluation",
    icon: Hash,
    title: "Automated Risk Evaluation Module",
    desc: " Automated Risk Evaluation and Blockchain-Based Report Integrity Framework",
    color: "from-indigo-500 to-purple-600",
  },
  {
    slug: "iot-monitoring",
    icon: Cpu,
    title: "IoT Monitoring Module",
    desc: "Integrates with IoT devices and smartphone sensors for real-time screen time monitoring and usage pattern analysis.",
    color: "from-teal-500 to-cyan-600",
  },
];

const Modules = () => (
  <PageWrapper>
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <h1 className="font-display text-4xl font-bold text-gradient-navy mb-3">Project Modules</h1>
        <p className="text-muted-foreground text-lg">Four integrated modules working together for comprehensive detection</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((m, i) => (
          <motion.div
            key={m.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/modules/${m.slug}`} className="block glass-card-hover p-7 group">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-4`}>
                <m.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{m.desc}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

export default Modules;
