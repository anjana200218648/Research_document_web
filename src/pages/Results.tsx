import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { BarChart3, CheckCircle, TrendingUp, Target } from "lucide-react";

const metrics = [
  { label: "Overall Accuracy", value: "94.7%", icon: Target },
  { label: "Image Module", value: "96.2%", icon: CheckCircle },
  { label: "Text Module", value: "93.5%", icon: TrendingUp },
  { label: "IoT Module", value: "95.4%", icon: BarChart3 },
];

const Results = () => (
  <PageWrapper>
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <div className="w-14 h-14 rounded-2xl gradient-navy flex items-center justify-center mx-auto mb-5">
          <BarChart3 className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl font-bold text-gradient-navy mb-3">Research Results</h1>
        <p className="text-muted-foreground text-lg">Performance metrics across all modules</p>
      </motion.div>

      {/* Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <m.icon className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="font-display text-3xl font-bold text-primary mb-1">{m.value}</p>
            <p className="text-sm text-muted-foreground">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="glass-card p-8"
      >
        <h2 className="font-display text-xl font-semibold text-primary mb-6">Module Performance Comparison</h2>
        <div className="space-y-5">
          {[
            { name: "Image Analysis", acc: 96.2, color: "bg-blue-500" },
            { name: "Text & Caption Analysis", acc: 93.5, color: "bg-cyan-500" },
            { name: "Hashtag Analysis", acc: 92.1, color: "bg-indigo-500" },
            { name: "IoT Monitoring", acc: 95.4, color: "bg-teal-500" },
          ].map((bar) => (
            <div key={bar.name}>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="font-medium text-primary">{bar.name}</span>
                <span className="text-muted-foreground">{bar.acc}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.acc}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className={`h-full rounded-full ${bar.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Findings */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8 mt-8"
      >
        <h2 className="font-display text-xl font-semibold text-primary mb-4">Key Findings</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /> The multi-modal fusion approach outperforms individual module performance by 8-12%.</li>
          <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /> Early warning alerts triggered an average of 2.3 weeks before clinical thresholds.</li>
          <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /> False positive rate maintained below 3% across all modules.</li>
          <li className="flex gap-3"><CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /> System operates with sub-200ms latency suitable for real-time applications.</li>
        </ul>
      </motion.div>
    </div>
  </PageWrapper>
);

export default Results;
