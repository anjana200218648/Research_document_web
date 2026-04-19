import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

const researchAreas = ["Machine Learning", "Computer Vision", "NLP", "IoT", "Child Safety"];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-primary">Get In Touch</h2>
          <h3 className="text-lg text-muted-foreground mt-2">Contact Us</h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Have questions about our research or interested in collaboration? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <h4 className="font-display font-semibold text-primary mb-6">Contact Information</h4>
            <div className="space-y-5">
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-primary">Address</p>
                  <p className="text-sm text-muted-foreground">Sri Lanka Institute Of Information Technology, Malabe, Sri Lanka</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-primary">Email</p>
                  <p className="text-sm text-muted-foreground">it22097774@my.sliit.lk</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-primary">Phone</p>
                  <p className="text-sm text-muted-foreground">+94 74 384 2846</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="text-sm font-semibold text-primary mb-3">Research Areas</h5>
              <div className="flex flex-wrap gap-2">
                {researchAreas.map((a) => (
                  <span key={a} className="px-3 py-1 rounded-full border border-accent/30 text-accent text-xs font-medium">{a}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass-card p-8">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-primary block mb-1">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary block mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary block mb-1">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-primary block mb-1">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
                />
              </div>
              <button className="w-full gradient-navy text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                Send Message <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
