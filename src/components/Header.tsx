import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import turmalogo from '../assets/turmalogo.png';
import type { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Solução', path: '/solucao' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contato', path: '/contato' },
  { label: 'Integrantes', path: '/integrantes' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-primary shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img src={turmalogo} alt="Logo Gestão Comunica Bem" className="w-10 h-10" />
          <span className="text-primary-foreground font-semibold text-lg hidden sm:inline">
            Gestão Comunica Bem
          </span>
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primary-foreground transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-primary md:bg-transparent gap-1 md:gap-6 p-4 md:p-0 shadow-lg md:shadow-none`}
        >
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`text-primary-foreground font-medium px-3 py-2 rounded-md transition-colors duration-200 no-underline text-center ${
                  isActive ? 'bg-accent' : 'hover:bg-primary-foreground/10'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
