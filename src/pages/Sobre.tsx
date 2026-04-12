import Card from '../components/Card';

const Sobre = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Sobre o Projeto</h1>
      <p className="text-muted-foreground text-lg mb-4">
        O <strong className="text-foreground">Gestão Comunica Bem</strong> é uma iniciativa desenvolvida durante o Challenge,
        com o objetivo de facilitar os problemas enfrentados pela ONG.
      </p>
      <p className="text-muted-foreground text-lg mb-8">
        Nosso foco é criar um meio de comunicação e banco de dados fácil e rápido em um lugar apenas.
      </p>

      <div className="space-y-6">
        <Card title="Objetivos principais">
          <ul className="list-disc list-inside space-y-2">
            <li>Possibilitar toda comunicação em apenas um local de maneira fácil.</li>
            <li>Armazenar os dados dos pacientes, disponibilizando formulário e envio de documentos.</li>
            <li>Disponibilizar os dados dos beneficiados para a ONG.</li>
          </ul>
        </Card>

        <Card title="Tecnologias utilizadas">
          <p>React, TypeScript, TailwindCSS, React Router DOM, React Hook Form e boas práticas de UX/UI.</p>
        </Card>

        <Card title="Roadmap">
          <p>
            Sprint 1: site estático — Sprint 2: formulários dinâmicos —
            Sprint 3: integração com banco de dados — Sprint 4: relatórios e gestão.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Sobre;
