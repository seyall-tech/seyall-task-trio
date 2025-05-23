
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-seyall-gray-dark border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <h2 className="font-nunito font-bold text-2xl">
                <span className="text-white">Se</span>
                <span className="text-seyall-accent">yall</span>
              </h2>
            </Link>
            <p className="text-gray-400 mb-4 max-w-sm">
              India's first hyperlocal gig app made for real-world, short-term work — think of it like "Uber for your neighborhood tasks."
            </p>
            <p className="text-gray-500 mb-2">© {currentYear} Seyall. All rights reserved.</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-seyall-accent transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-seyall-accent transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-seyall-accent transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-seyall-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-seyall-accent transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-seyall-accent transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4 text-lg">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a 
                  href="mailto:hello@seyall.in"
                  className="text-gray-400 hover:text-seyall-accent transition-colors"
                >
                  hello@seyall.in
                </a>
              </li>
              <li className="text-gray-400">Chennai, Tamil Nadu</li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-seyall-accent transition-colors"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
