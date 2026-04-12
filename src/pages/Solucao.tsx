import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Solucao = () => {
  return (
    <div>
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Como funciona
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-foreground animate-fade-up">
            Nossa Solução
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up-delay-1">
            Uma plataforma completa que centraliza a comunicação entre pacientes, dentistas e voluntários da Turma do Bem.
          </p>
        </div>
      </section>

      <section className="section-padding section-alt">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card>
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Cadastro simplificado</h3>
              <p className="text-muted-foreground">Formulário intuitivo para cadastro de pacientes com informações pessoais e envio de documentos necessários.</p>
            </Card>
            <Card>
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Comunicação unificada</h3>
              <p className="text-muted-foreground">Todos os contatos centralizados em uma única plataforma, facilitando a gestão e o acompanhamento.</p>
            </Card>
            <Card>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-bold text-foreground mb-2">Acompanhamento de status</h3>
              <p className="text-muted-foreground">Painel para verificar o andamento das solicitações: em aberto, em andamento ou concluído.</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Card>
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-lg font-bold text-foreground mb-3">Para dentistas voluntários</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Acesso rápido aos dados dos pacientes</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Histórico de atendimentos</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Comunicação direta com a ONG</span>
                </li>
              </ul>
            </Card>
            <Card>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-foreground mb-3">Para beneficiados</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Cadastro fácil e rápido</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Envio de documentos pela plataforma</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span>Acompanhamento do processo</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/contato">
              <Button variant="primary">Entre em contato conosco →</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solucao;
