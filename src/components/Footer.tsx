import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex flex-wrap justify-center gap-6 mb-4" aria-label="Links do rodapé">
          <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground no-underline transition-colors">Home</Link>
          <Link to="/sobre" className="text-primary-foreground/80 hover:text-primary-foreground no-underline transition-colors">Sobre</Link>
          <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground no-underline transition-colors">FAQ</Link>
          <Link to="/contato" className="text-primary-foreground/80 hover:text-primary-foreground no-underline transition-colors">Contato</Link>
        </nav>
        <p className="text-center text-primary-foreground/70 text-sm">
          © {year} Projeto Challenge - Turma do bem 
        </p>
      </div>
    </footer>
  );
};

export default Footer;