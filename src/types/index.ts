export interface ContactFormData {
  nome: string;
  email: string;
  mensagem: string;
}

export interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'accent';
  children: React.ReactNode;
}

export interface TeamMember {
  name: string;
  rm: string;
  turma: string;
  photo: string;
  github?: string;
  linkedin?: string;
}

export interface NavItem {
  label: string;
  path: string;
}