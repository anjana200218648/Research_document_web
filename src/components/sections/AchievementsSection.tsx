import { motion } from "framer-motion";
import { Lightbulb, Layers, Brain, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import achievementsBanner from "@/assets/achievements-banner.jpg";

const achievements = [
  { icon: Lightbulb, label: "Research Innovation", title: "First of its Kind", desc: "Multi-modal digital addiction detection for minors" },
  { icon: Layers, label: "Technical Integration", title: "4 Core Systems", desc: "Image, text, hashtag & IoT analysis modules" },
  { icon: Brain, label: "AI Architecture", title: "Multi-Model", desc: "CNN, NLP, and ensemble approach for comprehensive analysis" },
  { icon: Globe, label: "Real-time Processing", title: "Sub-200ms", desc: "Latency suitable for real-time monitoring applications" },
];

const contributions = [
  "Proposes a multimodal AI framework combining image, caption, and hashtag analysis for early digital addiction detection.",
  "Introduces a hybrid complaint-based risk model using machine learning, rules, and historical data.",
  "Develops an IoT-based system for real-time behavioral and physiological monitoring.",
  "Ensures secure and transparent risk evaluation using explainable AI and blockchain.",
];

const AchievementsSection = () => (
  <section id="achievements" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-display text-3xl font-bold text-primary">Research Achievements</h2>
        <h3 className="text-lg text-muted-foreground mt-2">Innovation in Child Digital Safety</h3>
      </motion.div>

      <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
        Our research addresses a critical gap in child digital safety by developing the first comprehensive AI-powered system specifically designed for early detection of digital addiction in minors.
      </p>

      {/* Achievement cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {achievements.map((a, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-5 text-center">
            <a.icon className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-xs text-muted-foreground">{a.label}</p>
            <p className="font-display font-bold text-primary text-lg">{a.title}</p>
            <p className="text-xs text-muted-foreground mt-1">{a.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Contributions + Image */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h4 className="font-display font-semibold text-primary mb-4">Key Research Contributions</h4>
          <ul className="space-y-3">
            {contributions.map((c, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                <span className="text-accent font-bold">•</span> {c}
              </li>
            ))}
          </ul>
          <Link to="/results" className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg gradient-navy text-white text-sm font-medium hover:brightness-110 transition-all">
            View Full Results
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-xl">
          <img src={achievementsBanner} alt="Research achievements" className="w-full object-cover" loading="lazy" width={1920} height={1080} />
        </motion.div>
      </div>
    </div>
  </section>
);

export default AchievementsSection;
