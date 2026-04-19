import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { BookOpen } from "lucide-react";

const refs = [
  "World Health Organization. (2018). Gaming disorder. International Classification of Diseases, 11th Revision (ICD-11).",
  "Andreassen, C. S. (2015). Online social network site addiction: A comprehensive review. Current Addiction Reports, 2(2), 175-184.",
  "He, K., Zhang, X., Ren, S., & Sun, J. (2016). Deep residual learning for image recognition. CVPR 2016, 770-778.",
  "Devlin, J., Chang, M., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. NAACL-HLT 2019.",
  "Tan, M., & Le, Q. (2019). EfficientNet: Rethinking model scaling for convolutional neural networks. ICML 2019.",
  "Hochreiter, S., & Schmidhuber, J. (1997). Long short-term memory. Neural Computation, 9(8), 1735-1780.",
  "Kwak, H., Lee, C., Park, H., & Moon, S. (2010). What is Twitter, a social network or a news media? WWW 2010, 591-600.",
  "Griffiths, M. D. (2005). A 'components' model of addiction within a biopsychosocial framework. Journal of Substance Use, 10(4), 191-197.",
  "Király, O., et al. (2020). Preventing problematic internet use during the COVID-19 pandemic. Addictive Behaviors, 108, 106390.",
  "Lin, L. Y., et al. (2016). Association between social media use and depression among US young adults. Depression and Anxiety, 33(4), 323-331.",
];

const References = () => (
  <PageWrapper>
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <div className="w-14 h-14 rounded-2xl gradient-navy flex items-center justify-center mx-auto mb-5">
          <BookOpen className="w-7 h-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl font-bold text-gradient-navy">References</h1>
      </motion.div>

      <div className="space-y-3">
        {refs.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-5 flex gap-4"
          >
            <span className="font-display font-bold text-accent text-sm min-w-[2rem]">[{i + 1}]</span>
            <p className="text-sm text-muted-foreground leading-relaxed">{r}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </PageWrapper>
);

export default References;
