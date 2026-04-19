import { motion } from "framer-motion";
import { CheckCircle, Clock } from "lucide-react";

const milestones = [
  { title: "Project Proposal", date: "September 12, 2025", status: "completed", weight: "10%", desc: "Initial research project proposal including problem statement, objectives, and methodology." },
  { title: "Progress Presentation 1", date: "December 15, 2025", status: "completed", weight: "15%", desc: "First milestone presentation covering implementation of analysis modules and ML models." },
  { title: "Progress Presentation 2", date: "March 28, 2026", status: "completed", weight: "30%", desc: "Second milestone showcasing system integration and multi-modal analysis results." },
  { title: "Final Report Submission", date: "April 27, 2026", status: "completed", weight: "25%", desc: "Comprehensive documentation of research methodology, implementation, and results." },
  { title: "Final Viva", date: "April 28, 2026", status: "in-progress", weight: "20%", desc: "Final assessment through oral examination and project demonstration." },
];

const tabs = ["Proposal", "Progress 1", "Progress 2", "Final Report", "Viva"];

const MilestonesSection = () => (
  <section id="milestones" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
        <span className="text-accent text-sm font-medium">Project Journey</span>
        <h2 className="font-display text-3xl font-bold text-primary mt-2">Research Milestones</h2>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
        Track our research journey through key assessments and deliverables.
      </motion.p>

      {/* Progress tabs */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {tabs.map((t, i) => (
          <div key={t} className={`px-4 py-2 rounded-full text-xs font-medium ${milestones[i].status === "completed" ? "gradient-navy text-white" : "glass-card text-accent"}`}>
            {t}
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto space-y-6">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 relative"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {m.status === "completed" ? (
                    <CheckCircle className="w-5 h-5 text-accent" />
                  ) : (
                    <Clock className="w-5 h-5 text-amber-500" />
                  )}
                  <h3 className="font-display font-semibold text-primary">{m.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{m.desc}</p>
                <p className="text-xs text-muted-foreground">{m.date}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${m.status === "completed" ? "bg-accent/10 text-accent" : "bg-amber-500/10 text-amber-600"}`}>
                  {m.status}
                </span>
                <p className="text-xs text-muted-foreground mt-1">Weight: {m.weight}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MilestonesSection;
