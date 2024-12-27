import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, ...props }: CardProps) {
    return (
      <div className="p-6 rounded-lg shadow-lg bg-white" {...props}>
        {children}
      </div>
    );
  }
  