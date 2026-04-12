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

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Bem-vindo ao Projeto<br />Gestão Comunica Bem
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Centralize, organize e agilize todos os contatos em uma única plataforma.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link to="/sobre">
                <Button variant="primary">Saiba mais</Button>
              </Link>
              <Link to="/contato">
                <Button variant="outline">Entrar em contato</Button>
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0">
            <img src={tdbLogo} alt="Marca Turma do Bem" className="w-48 md:w-64 mx-auto" />
          </div>
        </div>
      </section>

      {/* Sobre o Projeto */}
      <section className="bg-card py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Sobre o Projeto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card title="Turma do Bem">
              <p>
                A TDB é uma ONG que oferece tratamento odontológico gratuito para pessoas em situação
                de vulnerabilidade social, conectando dentistas voluntários a crianças, jovens e mulheres
                vítimas de violência.
              </p>
            </Card>

            <Card title="Gestão Comunica Bem">
              <p>
                Auxilia o usuário na comunicação, envio de dados e no processo de atendimento, além de
                ajudar os dentistas da ONG.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Integrantes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Integrantes</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamPreview.map((member) => (
              <div key={member.rm} className="bg-card rounded-xl p-6 shadow-md text-center">
                <img
                  src={member.photo}
                  alt={`Foto de ${member.name}`}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">
                  RM: {member.rm} | Turma: 1TDSPA
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;