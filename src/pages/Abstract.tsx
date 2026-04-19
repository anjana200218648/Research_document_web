import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { FileText } from "lucide-react";

const Abstract = () => (
  <PageWrapper>
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="w-14 h-14 rounded-2xl gradient-navy flex items-center justify-center mx-auto mb-5">
          <FileText className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl font-bold text-gradient-navy">Abstract</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-8 md:p-12"
      >
        <p className="text-muted-foreground leading-relaxed mb-6">
          The rapid proliferation of digital devices and social media platforms has raised significant concerns about
          digital addiction among minors. <strong className="text-primary">SafeKid Scan</strong> presents a comprehensive,
          multi-modal framework for the early detection of digital addiction in children and adolescents.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our system integrates four specialized modules: an <strong className="text-primary">Image Analysis Module</strong> that
          employs convolutional neural networks to detect harmful visual content, a <strong className="text-primary">Text &
          Caption Analysis Module</strong> leveraging natural language processing for sentiment analysis and risk
          assessment, a <strong className="text-primary">Hashtag Analysis Module</strong> that identifies risky behavioral
          trends across platforms, and an <strong className="text-primary">IoT Monitoring Module</strong> for real-time
          screen time and device usage tracking.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          The proposed system achieves an overall detection accuracy of 94.7% across combined modules. By fusing
          insights from visual, textual, social, and behavioral data streams, SafeKid Scan provides a holistic
          assessment of a minor's digital health, enabling parents and guardians to intervene before addictive
          patterns become entrenched.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong className="text-primary">Keywords:</strong> Digital Addiction, Child Safety, Deep Learning, NLP,
          IoT Monitoring, Social Media Analysis, Early Detection Systems.
        </p>
      </motion.div>
    </div>
  </PageWrapper>
);

export default Abstract;
