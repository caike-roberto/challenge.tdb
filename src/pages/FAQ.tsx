import { useState } from 'react';
import type { FAQItem } from '../types';

const faqData: FAQItem[] = [
  { question: 'Quem pode usar a central?', answer: 'Dentistas, voluntários, doadores e beneficiados.' },
  { question: 'É gratuito?', answer: 'Sim! Gratuito para todos os públicos envolvidos.' },
  { question: 'Como acompanhar solicitações?', answer: 'Pelo painel que mostrará o status: em aberto, em andamento ou concluído.' },
  { question: 'Como faço para me cadastrar?', answer: 'Acesse a página de Contato e preencha o formulário com seus dados.' },
  { question: 'Quais documentos são necessários?', answer: 'RG, CPF e comprovante de residência são os documentos básicos necessários.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">Perguntas Frequentes</h1>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="bg-card rounded-xl shadow-md overflow-hidden">
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-transparent border-none cursor-pointer hover:bg-muted transition-colors"
            >
              <h2 className="text-base md:text-lg font-semibold m-0">{item.question}</h2>
              <span className={`text-accent text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 px-6 pb-4' : 'max-h-0'}`}>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
