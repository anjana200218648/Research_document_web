import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileText, Presentation, BookOpen, ClipboardList, FileCheck, ArrowRight } from "lucide-react";

const documents = [
  { 
    icon: FileText, 
    title: "Project Proposal", 
    desc: "Initial research project proposal including problem statement and objectives.",
    link: "https://drive.google.com/drive/folders/1_wdQnxRc87EYILEjeXDuxmz96goiwmeA?usp=sharing" 
  },
  { 
    icon: Presentation, 
    title: "Progress Presentation 1", 
    desc: "First milestone presentation covering initial implementation and findings.",
    link: "https://drive.google.com/file/d/1y_CYpm_5j8SqlSEHqDFdoooXBM43KhEL/view?usp=sharing" 
  },
  { 
    icon: Presentation, 
    title: "Progress Presentation 2", 
    desc: "Second milestone presentation with updated results and system integration.",
    link: "https://drive.google.com/file/d/1HamwF9DEtFS64LnxgHLNHRIfSNUR4tEa/view?usp=sharing" 
  },
  { 
    icon: BookOpen, 
    title: "Research Paper", 
    desc: "Academic paper detailing the methodology, experiments, and outcomes.",
    link: "https://drive.google.com/file/d/1rTQ_QxTwgQK11jvaf-dkPJRCmW9S2BWm/view?usp=sharing" 
  },
  { 
    icon: FileCheck, 
    title: "Final Reports", 
    desc: "Comprehensive documentation of the entire research project.",
    link: "https://drive.google.com/drive/folders/1hF3JKAYoPlo0zj1eg9q5jIDe2NFMTpJ9?usp=sharing" 
  },
  { 
    icon: ClipboardList, 
    title: "Log Books", 
    desc: "Detailed records of research activities and experiments.",
    link: "https://drive.google.com/drive/folders/1SD6A7CoVP18D_xn-4ydnIVTHljWcqnlw?usp=sharing" 
  },
];

const DocumentsSection = () => (
  <section id="documents" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="font-display text-3xl font-bold text-primary">Research Documentation</h2>
        <h3 className="text-lg text-muted-foreground mt-2">Project Documents</h3>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
          Access our comprehensive collection of research documents, presentations, and reports that detail the development and findings of the SafeKid Scan project.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-10">
        {documents.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-5 flex flex-col"
          >
            <d.icon className="w-8 h-8 text-accent mb-3" />
            <h4 className="font-display font-semibold text-primary text-sm mb-2">{d.title}</h4>
            <p className="text-xs text-muted-foreground flex-1">{d.desc}</p>
            
            {/* Individual document link */}
            <a 
              href={d.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent text-xs font-medium mt-3 inline-flex items-center gap-1 hover:underline"
            >
              View document <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/download" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-navy text-white font-semibold hover:brightness-110 transition-all">
          View All Documents <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default DocumentsSection;