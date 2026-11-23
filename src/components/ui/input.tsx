import type { InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  hasIcon?: boolean;
};

function Input({ className = '', hasIcon = false, ...props }: Props) {
  return (
    <input
      className={`border-border bg-background focus:border-primary focus:ring-primary/20 w-full rounded-lg border py-2 pr-3 text-sm transition-colors outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${
        hasIcon ? 'pl-10' : 'pl-3'
      } ${className}`}
      {...props}
    />
  );
}

export default Input;
