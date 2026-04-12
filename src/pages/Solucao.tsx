import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Solucao = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Nossa Solução</h1>
      <p className="text-muted-foreground text-center text-lg mb-12 max-w-2xl mx-auto">
        Uma plataforma completa que centraliza a comunicação entre pacientes, dentistas e voluntários da Turma do Bem.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card title="📋 Cadastro simplificado">
          <p>Formulário intuitivo para cadastro de pacientes com informações pessoais e envio de documentos necessários.</p>
        </Card>
        <Card title="💬 Comunicação unificada">
          <p>Todos os contatos centralizados em uma única plataforma, facilitando a gestão e o acompanhamento.</p>
        </Card>
        <Card title="📊 Acompanhamento de status">
          <p>Painel para verificar o andamento das solicitações: em aberto, em andamento ou concluído.</p>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card title="🦷 Para dentistas voluntários">
          <ul className="list-disc list-inside space-y-2">
            <li>Acesso rápido aos dados dos pacientes</li>
            <li>Histórico de atendimentos</li>
            <li>Comunicação direta com a ONG</li>
          </ul>
        </Card>
        <Card title="🤝 Para beneficiados">
          <ul className="list-disc list-inside space-y-2">
            <li>Cadastro fácil e rápido</li>
            <li>Envio de documentos pela plataforma</li>
            <li>Acompanhamento do processo</li>
          </ul>
        </Card>
      </div>

      <div className="text-center">
        <Link to="/contato">
          <Button variant="primary">Entre em contato conosco</Button>
        </Link>
      </div>
    </div>
  );
};

export default Solucao;
