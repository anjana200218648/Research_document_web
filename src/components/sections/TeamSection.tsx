import { motion } from "framer-motion";
import { User } from "lucide-react";

const supervisors = [
  { name: "Ms. Jenny Krishara", role: "Senior Lecturer", badge: "Supervisor", qualification: "Faculty of Computing | Information Technology" },
  { name: "Ms. Poorna Panduwawala", role: "Assistant Lecturer", badge: "Co-supervisor", qualification: "Faculty of Computing | Information Technology" },
];

const members = [
  { name: "Anjana H.H.H", role: "Full Stack Developer", desc: "Information Technology undergraduate" },
  { name: "Weerakkodi Y.P.", role: "Full Stack Developer", desc: "Information Technology undergraduate" },
  { name: "Gimhani J.M.K.P.", role: "Full Stack Developer", desc: "Information Technology undergraduate" },
  { name: "Nethmini M.A.N.", role: "Full Stack Developer", desc: "Information Technology undergraduate" },
];

const TeamSection = () => (
  <section id="team" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
        <span className="text-accent text-sm font-medium">Research Team</span>
        <h2 className="font-display text-3xl font-bold text-primary mt-2">Meet Our Team</h2>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
        A collaborative effort between experienced supervisors and dedicated undergraduate researchers.
      </motion.p>

      {/* Supervisors */}
      <h3 className="font-display text-lg font-semibold text-primary text-center mb-6">Research Supervisors</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-14">
        {supervisors.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
            <div className="w-20 h-20 rounded-full gradient-navy flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <h4 className="font-display font-semibold text-primary">{s.name}</h4>
            <p className="text-sm text-muted-foreground">{s.role}</p>
            <span className="inline-block mt-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">{s.badge}</span>
            <p className="text-xs text-muted-foreground mt-2">{s.qualification}</p>
          </motion.div>
        ))}
      </div>

      {/* Members */}
      <h3 className="font-display text-lg font-semibold text-primary text-center mb-6">Research Team Members</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {members.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-5 text-center">
            <div className="w-16 h-16 rounded-full gradient-navy flex items-center justify-center mx-auto mb-3">
              <User className="w-8 h-8 text-primary-foreground" />
            </div>
            <h4 className="font-display font-semibold text-primary text-sm">{m.name}</h4>
            <p className="text-accent text-xs font-medium">{m.role}</p>
            <p className="text-xs text-muted-foreground mt-1">{m.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
