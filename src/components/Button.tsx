import { type ButtonProps } from '../types';

const variantClasses: Record<string, string> = {
  primary: 'bg-accent text-accent-foreground hover:opacity-90',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground',
  accent: 'bg-primary text-primary-foreground hover:opacity-90',
};

const Button = ({ variant = 'primary', children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
