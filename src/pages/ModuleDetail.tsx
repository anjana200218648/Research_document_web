import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, MessageSquare, Hash, Cpu, Maximize2 } from "lucide-react";
import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";

// Import images from assets folder
import imageAnalysisDiagram from "@/assets/1d.png";
import textAnalysisDiagram from "@/assets/2.png";
import riskEvaluationDiagram from "@/assets/3.png";
import iotMonitoringDiagram from "@/assets/4.png";

const data: Record<string, { 
  icon: any; 
  title: string; 
  diagram: string;
  diagramAlt: string;
  sections: { heading: string; text: string }[] 
}> = {
  "image-analysis": {
    icon: Eye,
    title: "Image Analysis Module",
    diagram: imageAnalysisDiagram,
    diagramAlt: "Image Analysis System Architecture Diagram",
    sections: [
      { heading: "Overview", text: "The Image Analysis Module uses deep learning-based convolutional neural networks (CNNs) to automatically classify social media images. It identifies harmful, violent, or age-inappropriate visual content that may indicate or contribute to digital addiction patterns in minors." },
      { heading: "Technical Approach", text: "We employ a transfer learning approach using ResNet-50 and EfficientNet architectures pre-trained on ImageNet. The models are fine-tuned on a curated dataset of 50,000+ labeled social media images categorized into safe, moderate risk, and high risk. Data augmentation including rotation, flipping, and color jittering is applied to improve generalization." },
      { heading: "Key Features", text: "Real-time image classification with <200ms latency. Multi-label detection supporting 15+ content categories. Confidence scoring for risk assessment. Integration with platform APIs for automated scanning. Privacy-preserving on-device processing option." },
      { heading: "Results", text: "The module achieves 96.2% accuracy on the test set with a precision of 94.8% and recall of 95.1%. False positive rate is maintained below 3%, ensuring minimal unnecessary alerts to parents and guardians." },
    ],
  },
  "text-caption-analysis": {
    icon: MessageSquare,
    title: "Text & Caption Analysis Module",
    diagram: textAnalysisDiagram,
    diagramAlt: "Text & Caption Analysis System Architecture Diagram",
    sections: [
      { heading: "Overview", text: "This module performs natural language processing on social media captions, comments, and text posts to identify signs of emotional distress, cyberbullying, addictive behaviors, and exposure to harmful content." },
      { heading: "Technical Approach", text: "We utilize a fine-tuned BERT model combined with custom sentiment analysis layers. The pipeline includes text preprocessing, tokenization, embedding extraction, and multi-task classification for toxicity, sentiment, and addiction indicators." },
      { heading: "Key Features", text: "Multi-language support for 12+ languages. Context-aware sentiment analysis. Cyberbullying detection. Self-harm and distress keyword monitoring. Temporal pattern analysis for behavioral trends." },
      { heading: "Results", text: "Achieves 93.5% accuracy in sentiment classification and 91.8% in toxicity detection. The combined risk score correlates with expert assessments at r=0.87." },
    ],
  },
  "Automated Risk Evaluation": {
    icon: Hash,
    title: "Automated Risk Evaluation",
    diagram: riskEvaluationDiagram,
    diagramAlt: "Automated Risk Evaluation System Architecture Diagram",
    sections: [
      { 
        heading: "Overview", 
        text: "The Automated Risk Evaluation Module integrates multiple risk scores generated from media analysis and complaint-based analysis to produce a final, reliable addiction risk assessment. It ensures consistency, detects conflicts between different data sources, and supports informed decision-making for guardians and professionals." 
      },
      { 
        heading: "Technical Approach", 
        text: "The system computes two primary risk scores: media-based risk (Rm) and complaint-based risk (Rc). A Risk Gap (RG = |Rm - Rc|) is calculated to measure consistency between these independent assessments. Based on predefined thresholds, the system categorizes the agreement level as compliant, partially non-compliant, or highly non-compliant. AI-based models, including FLAN-T5, are used to generate explainable reports, while SHA-256 hashing ensures report integrity through blockchain storage." 
      },
      { 
        heading: "Key Features", 
        text: "Cross-validation of risk scores from multiple sources. Risk Gap calculation for conflict detection. Automated classification of agreement levels. AI-generated explainable reports for transparency. Blockchain-based report verification and tamper resistance. Secure handling of sensitive behavioral data." 
      },
      { 
        heading: "Results", 
        text: "The module enhances reliability and trust in risk assessment by reducing inconsistencies between multimodal inputs. It provides stable and interpretable outputs, enabling accurate identification of addiction risk levels while ensuring data integrity and transparency in real-world deployment scenarios." 
      },
    ],
  },
  "iot-monitoring": {
    icon: Cpu,
    title: "IoT Monitoring Module",
    diagram: iotMonitoringDiagram,
    diagramAlt: "IoT Monitoring System Architecture Diagram",
    sections: [
      { heading: "Overview", text: "The IoT Monitoring Module integrates with smartphones, tablets, and other connected devices to provide real-time monitoring of screen time, app usage patterns, and behavioral indicators associated with digital addiction." },
      { heading: "Technical Approach", text: "We implement a lightweight agent that collects anonymized usage data including session duration, app switching frequency, time-of-day patterns, and notification interaction rates. Machine learning models (Random Forest and LSTM) analyze these behavioral streams." },
      { heading: "Key Features", text: "Non-intrusive background monitoring. Battery-efficient data collection. Anomaly detection for unusual usage spikes. Weekly and monthly behavioral trend reports. Customizable alert thresholds for parents." },
      { heading: "Results", text: "The module detects addictive usage patterns with 95.4% accuracy. Early warning alerts are triggered an average of 2.3 weeks before clinical addiction thresholds are reached." },
    ],
  },
};

// Modal component for full-screen image view
const ImageModal = ({ 
  isOpen, 
  onClose, 
  src, 
  alt 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  src: string; 
  alt: string;
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl max-h-[90vh] overflow-auto rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
        >
          <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-auto rounded-2xl shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
};

const ModuleDetail = () => {
  const { slug } = useParams();
  const module = data[slug || ""];
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!module) {
    return (
      <PageWrapper>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold text-primary mb-4">Module Not Found</h1>
          <Link to="/modules" className="text-accent hover:underline">← Back to Modules</Link>
        </div>
      </PageWrapper>
    );
  }

  const Icon = module.icon;

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <Link to="/modules" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Modules
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-14 h-14 rounded-2xl gradient-navy flex items-center justify-center">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-gradient-navy">{module.title}</h1>
        </motion.div>

        {/* System Diagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl font-semibold text-primary">System Architecture</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary rounded-lg transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
              View Full Size
            </button>
          </div>
          <div 
            className="relative glass-card p-4 cursor-pointer group overflow-hidden rounded-xl border-2 border-border/50 hover:border-accent/30 transition-all duration-300"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-sm font-medium">Click to expand</span>
              </div>
            </div>
            <img 
              src={module.diagram} 
              alt={module.diagramAlt}
              className="w-full h-auto rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Figure: High-level system architecture and data flow diagram
          </p>
        </motion.div>

        {/* Module Details Sections */}
        <div className="space-y-6">
          {module.sections.map((s, i) => (
            <motion.div
              key={s.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="glass-card p-7"
            >
              <h3 className="font-display text-xl font-semibold text-primary mb-3">{s.heading}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={module.diagram}
        alt={module.diagramAlt}
      />
    </PageWrapper>
  );
};

export default ModuleDetail;