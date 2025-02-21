
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import { translations } from "../utils/translations";

interface NavigationProps {
  currentLanguage: string;
}

const Navigation = ({ currentLanguage }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[currentLanguage];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed w-full bg-white shadow-md z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/f9e92ce0-bb7d-4489-a684-06d5588d8c81.png" 
              alt="CONFI Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              {t.home}
            </Link>
            <Link to="/products" className="nav-link">
              {t.products}
            </Link>
            <Link to="/about" className="nav-link">
              {t.about}
            </Link>
            <Link to="/contact" className="nav-link">
              {t.contact}
            </Link>
            <Link to="/admin" className="nav-link">
              {t.admin}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t border-primary/10">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-primary hover:text-accent transition-colors px-4" onClick={toggleMenu}>
                {t.home}
              </Link>
              <Link to="/products" className="text-primary hover:text-accent transition-colors px-4" onClick={toggleMenu}>
                {t.products}
              </Link>
              <Link to="/about" className="text-primary hover:text-accent transition-colors px-4" onClick={toggleMenu}>
                {t.about}
              </Link>
              <Link to="/contact" className="text-primary hover:text-accent transition-colors px-4" onClick={toggleMenu}>
                {t.contact}
              </Link>
              <Link to="/admin" className="text-primary hover:text-accent transition-colors px-4" onClick={toggleMenu}>
                {t.admin}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
