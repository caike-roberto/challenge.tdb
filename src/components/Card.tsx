import { type CardProps } from '@/types';

const Card = ({ title, children, className = '' }: CardProps) => {
  return (
    <article className={`bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <div className="text-foreground leading-relaxed">{children}</div>
    </article>
  );
};

export default Card;
