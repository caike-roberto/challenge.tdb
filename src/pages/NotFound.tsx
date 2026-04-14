import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.error(
      "[404] Rota inexistente acessada:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-4">
          Oops! Página não encontrada
        </p>
        <a
          href="/"
          className="text-primary underline hover:text-primary/90"
        >
          Voltar para a Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;