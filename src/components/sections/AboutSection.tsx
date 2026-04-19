import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import aboutBanner from "@/assets/about-banner.jpg";

const stats = [
  { value: "94.7%", label: "Overall Accuracy" },
  { value: "96.2%", label: "Image Module" },
  { value: "93.5%", label: "Text Module" },
];

const highlights = [
  "Multi-modal AI system for comprehensive digital behavior analysis",
  "Real-time monitoring through IoT integration",
  "Combines deep learning with NLP techniques",
  "Early warning system with Blockchain-Based report integrity framework",
];

const AboutSection = () => (
  <section id="about" className="relative">
    {/* Stats banner */}
    <div className="relative">
      <img src={aboutBanner} alt="Digital addiction in children" className="w-full h-64 object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsla(222,80%,10%,0.85) 0%, hsla(210,100%,30%,0.7) 100%)" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 grid grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="font-display text-4xl md:text-5xl font-bold text-white">{s.value}</p>
              <p className="text-white/70 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* About content */}
    <div className="container mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-display text-3xl font-bold text-primary mb-4">About the Project</h2>
        <h3 className="text-xl text-muted-foreground mb-6">Protecting Children in the Digital Age</h3>
        <p className="text-muted-foreground leading-relaxed">
          SafeKid Scan is a research project focused on early detection of digital addiction in minors. Using a multi-modal AI approach combining image analysis, text processing, hashtag tracking, Automated Risk Evaluation, and IoT monitoring, we aim to provide parents and guardians with actionable insights about children's digital behavior.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3 glass-card p-4"
          >
            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{h}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
