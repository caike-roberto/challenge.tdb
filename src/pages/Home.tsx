import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import tdbLogo from '../assets/tdb-logo.png';
import fotoCaike from '../assets/foto_caike.jpg';
import fotoGuilherme from '../assets/foto_guilherme.jpg';
import fotoIgor from '../assets/foto_igor.jpg';
const teamPreview = [
  { name: 'Caike Roberto de Souza Hollo', rm: '568104', photo: fotoCaike },
  { name: 'Guilherme Sena', rm: '568101', photo: fotoGuilherme },
  { name: 'Igor Dantas da Silva', rm: '538337', photo: fotoIgor },
];

const features = [
  {
    icon: '📋',
    title: 'Cadastro Simples',
    desc: 'Formulário intuitivo para cadastro de pacientes e envio de documentos.',
  },
  {
    icon: '💬',
    title: 'Comunicação Unificada',
    desc: 'Todos os contatos centralizados em uma única plataforma.',
  },
  {
    icon: '📊',
    title: 'Acompanhamento',
    desc: 'Painel para verificar o status das solicitações em tempo real.',
  },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
          <div className="flex-1 text-center md:text-left animate-fade-up">
            <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              🦷 Projeto Challenge — Turma do Bem
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              <span className="text-foreground">Gestão</span>{' '}
              <span className="gradient-text">Comunica Bem</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              Centralize, organize e agilize todos os contatos da ONG em uma única plataforma moderna e acessível.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/sobre">
                <Button variant="primary">Saiba mais →</Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline">Entrar em contato</Button>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 animate-fade-up-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl scale-110" />
              <img
                src={tdbLogo}
                alt="Marca Turma do Bem"
                className="w-48 md:w-72 mx-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
              O que oferecemos
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma solução pensada para conectar pessoas e facilitar o acesso à saúde bucal.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className={`animate-fade-up-delay-${i + 1}`}
              >
                <Card>
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground">{f.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
              Sobre o Projeto
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="🦷 Turma do Bem">
              <p>
                A TDB é uma ONG que oferece tratamento odontológico gratuito para pessoas em situação
                de vulnerabilidade social, conectando dentistas voluntários a crianças, jovens e mulheres
                vítimas de violência.
              </p>
            </Card>
            <Card title="💻 Gestão Comunica Bem">
              <p>
                Auxilia o usuário na comunicação, envio de dados e no processo de atendimento, além de
                ajudar os dentistas da ONG a gerenciar pacientes de forma eficiente.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrantes Preview */}
      <section className="section-padding section-alt">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
              Nossa Equipe
            </h2>
            <p className="text-muted-foreground text-lg">
              Conheça os desenvolvedores por trás do projeto.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamPreview.map((member) => (
              <div
                key={member.rm}
                className="bg-card rounded-2xl p-8 border border-border text-center hover-lift"
              >
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-30 scale-110" />
                  <img
                    src={member.photo}
                    alt={`Foto de ${member.name}`}
                    className="w-32 h-32 rounded-full object-cover relative z-10 border-4 border-background"
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">RM: {member.rm} | Turma: 1TDSPA</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/integrantes">
              <Button variant="outline">Ver todos os integrantes →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">
            Quer saber mais?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Entre em contato com nossa equipe e conheça a solução completa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/solucao">
              <Button variant="accent">Conheça a Solução</Button>
            </Link>
            <Link to="/contato">
              <Button variant="primary">Fale Conosco</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;