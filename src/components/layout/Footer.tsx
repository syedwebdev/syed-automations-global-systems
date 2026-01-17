import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: "Business Process Automation", path: "/solutions#bpa" },
      { name: "RPA Bots", path: "/solutions#rpa" },
      { name: "AI Automation", path: "/solutions#ai" },
      { name: "Dashboards", path: "/solutions#dashboards" },
      { name: "Integrations", path: "/solutions#integrations" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Industries", path: "/industries" },
      { name: "Pricing", path: "/pricing" },
      { name: "Resources", path: "/resources" },
      { name: "Contact", path: "/contact" },
    ],
    resources: [
      { name: "Blog", path: "/resources#blog" },
      { name: "Case Studies", path: "/resources#cases" },
      { name: "Whitepapers", path: "/resources#whitepapers" },
      { name: "Free Audit", path: "/audit" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">S</span>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-foreground">Syed Automations</span>
                <span className="text-primary font-display font-bold text-lg"> & RPA</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Enterprise-grade automation solutions that transform businesses worldwide. 
              Building self-running systems with AI, RPA, and intelligent workflows.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@syedautomations.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                hello@syedautomations.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                Global Operations · Remote-First
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Syed Automations & RPA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;