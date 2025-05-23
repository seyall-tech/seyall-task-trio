
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="font-nunito font-bold text-2xl md:text-3xl">
            <span className="text-white">Se</span>
            <span className="text-seyall-accent">yall</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/blog"
            className="text-white/80 hover:text-seyall-accent transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/careers"
            className="text-white/80 hover:text-seyall-accent transition-colors"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className="text-white/80 hover:text-seyall-accent transition-colors"
          >
            Contact
          </Link>
          <a href="#early-access">
            <Button
              variant="default"
              className="bg-seyall-accent hover:bg-seyall-accent-dark text-black font-medium"
            >
              Get Early Access
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-800 py-4 animate-slide-in-right">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              to="/blog"
              className="text-white/80 hover:text-seyall-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="text-white/80 hover:text-seyall-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="text-white/80 hover:text-seyall-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a href="#early-access" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="default"
                className="bg-seyall-accent hover:bg-seyall-accent-dark text-black font-medium w-full"
              >
                Get Early Access
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
