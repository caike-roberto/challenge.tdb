import Card from '../components/Card';

const Sobre = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative"><p></p>
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Conheça o projeto
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground animate-fade-up">
            Sobre o Projeto
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-1">
            O <strong className="text-foreground">Gestão Comunica Bem</strong> é uma iniciativa desenvolvida durante o Challenge,
            com o objetivo de facilitar os problemas enfrentados pela ONG.
          </p>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground text-lg mb-12 text-center leading-relaxed">
            Nosso foco é criar um meio de comunicação e banco de dados fácil e rápido em um lugar apenas.
          </p>

          <div className="space-y-6">
            <Card title="🎯 Objetivos principais">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Possibilitar toda comunicação em apenas um local de maneira fácil.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Armazenar os dados dos pacientes, disponibilizando formulário e envio de documentos.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Disponibilizar os dados dos beneficiados para a ONG.</span>
                </li>
              </ul>
            </Card>

            <Card title="⚙️ Tecnologias utilizadas">
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'TailwindCSS', 'React Router DOM', 'React Hook Form', 'Vite'].map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card title="🗺️ Roadmap">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { sprint: 'Sprint 1', desc: 'Site estático', status: '✅' },
                  { sprint: 'Sprint 2', desc: 'Formulários dinâmicos', status: '🔄' },
                  { sprint: 'Sprint 3', desc: 'Integração com banco de dados', status: '⏳' },
                  { sprint: 'Sprint 4', desc: 'Relatórios e gestão', status: '⏳' },
                ].map((item) => (
                  <div key={item.sprint} className="bg-secondary rounded-xl p-4 border border-border">
                    <div className="flex items-center gap-2 mb-1">
                      <span>{item.status}</span>
                      <span className="font-bold text-foreground text-sm">{item.sprint}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;