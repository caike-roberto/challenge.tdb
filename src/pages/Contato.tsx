
import { useState } from 'react';
import Button from '../components/Button';
import type { ContactFormData } from '../types';

const Contato = () => {
  const [successMsg, setSuccessMsg] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Formulário enviado:', data);
    setSuccessMsg('Mensagem enviada com sucesso! Obrigado pelo contato.');
    reset();
    setTimeout(() => setSuccessMsg(''), 5000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Entre em contato</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="bg-card rounded-xl p-6 md:p-8 shadow-md space-y-5" noValidate>
        <div>
          <label htmlFor="nome" className="block font-semibold mb-1">Nome:</label>
          <input
            type="text"
            id="nome"
            placeholder="Seu nome completo"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
            {...register('nome', { required: 'O nome é obrigatório' })}
          />
          {errors.nome && <p className="text-destructive text-sm mt-1">{errors.nome.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="seu@email.com"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition"
            {...register('email', {
              required: 'O email é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Insira um email válido',
              },
            })}
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="mensagem" className="block font-semibold mb-1">Mensagem:</label>
          <textarea
            id="mensagem"
            rows={4}
            placeholder="Escreva sua mensagem aqui..."
            className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition resize-y"
            {...register('mensagem', { required: 'A mensagem é obrigatória' })}
          />
          {errors.mensagem && <p className="text-destructive text-sm mt-1">{errors.mensagem.message}</p>}
        </div>

        <Button type="submit" variant="primary">Enviar</Button>

        {successMsg && (
          <p className="text-primary font-medium mt-2">{successMsg}</p>
        )}
      </form>  
    </div>
  );
};

export default Contato;
import { useForm } from 'react-hook-form';