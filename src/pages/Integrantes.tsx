import fotoCaike from '../assets/foto_caike.jpg';
import fotoGuilherme from '../assets/foto_guilherme.jpg';
import fotoIgor from '../assets/foto_igor.jpg';
import type { TeamMember } from '../types';


const members: TeamMember [] = [
  {
    name: 'Caike Roberto de Souza Hollo',
    rm: '568104',
    turma: '1TDSPA',
    photo: fotoCaike,
    github: 'https://github.com/caike-roberto',
    linkedin: 'https://www.linkedin.com/in/caike-roberto-a43229388',
  },
  {
    name: 'Guilherme Sena',
    rm: '568101',
    turma: '1TDSPA',
    photo: fotoGuilherme,
    github: 'https://github.com/sena-guilherme',
    linkedin: 'https://www.linkedin.com/in/guilherme-sena-7126b5328',
  },
  {
    name: 'Igor Dantas da Silva',
    rm: '538337',
    turma: '1TDSPA',
    photo: fotoIgor,
    github: 'https://github.com/Igor-D1',
    linkedin: 'https://www.linkedin.com/in/igor-dantas-0092b2384',
  },
];

const Integrantes = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Integrantes do Projeto</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member) => (
          <article key={member.rm} className="bg-card rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-shadow">
            <img
              src={member.photo}
              alt={`Foto de ${member.name}`}
              className="w-40 h-40 rounded-full object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
            <p className="text-muted-foreground text-sm mb-3">RM: {member.rm} | Turma: {member.turma}</p>
            <div className="flex justify-center gap-4">
              {member.github && (
                <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium text-sm">
                  GitHub
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium text-sm">
                  LinkedIn
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Integrantes;
