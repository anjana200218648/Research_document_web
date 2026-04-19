import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { Mail, User, GraduationCap } from "lucide-react";

const authors = [
  { name: "Anjana H.H.H", role: "Principal Investigator/Group Leader", email: "it22097774@my.sliit.lk", expertise: "Full Stack Developer" },
  { name: "Weerakkodi Y.P. ", role: "Blockchain Developer", email: "it22279484@my.sliit.lk", expertise: "Full Stack Developer" },
  { name: "Gimhani J.M.K.P", role: "Text Analysis Lead", email: "it22563828@my.sliit.lk", expertise: "Full Stack Developer" },
  { name: "Nethmini M.A.N.", role: "IoT Module Lead", email: "it22579904@my.sliit.lk", expertise: "Full Stack Developer" },
];

const Contact = () => (
  <PageWrapper>
    <div className="container mx-auto px-4 py-16 max-w-5xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
        <div className="w-14 h-14 rounded-2xl gradient-navy flex items-center justify-center mx-auto mb-5">
          <Mail className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl font-bold text-gradient-navy mb-3">Contact & Authors</h1>
        <p className="text-muted-foreground text-lg">Meet the research team behind SafeKid Scan</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {authors.map((a, i) => (
          <motion.div
            key={a.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-7"
          >
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
              <User className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-display text-lg font-semibold text-primary mb-1">{a.name}</h3>
            <p className="text-sm text-accent font-medium mb-2">{a.role}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <GraduationCap className="w-4 h-4" /> {a.expertise}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" /> {a.email}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

export default Contact;
