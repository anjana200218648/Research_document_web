import { Shield } from "lucide-react";

const Footer = () => (
  <footer className="gradient-navy text-primary-foreground py-10">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Shield className="w-5 h-5" />
        <span className="font-display font-semibold">SafeKid Scan</span>
      </div>
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} SafeKid Scan Research Project. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
