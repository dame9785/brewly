import type { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  size?: 's' | 'm' | 'l';
  variant?: 'primary' | 'secondary' | 'outline';
};

{
  /* Button SIZE */
}
const sizes = {
  s: 'px-3 py-2 text-sm',
  m: 'px-4 py-3 text-base',
  l: 'px-5 py-3 text-base sm:px-6 sm:py-4 sm:text-lg',
};

{
  /* Button Styling */
}
const baseStyles =
  'inline-flex w-full items-center justify-center rounded-md font-medium transition-all duration-200 sm:w-auto cursor-pointer whitespace-normal text-center disabled:pointer-events-none disabled:opacity-50';

const variants = {
  primary:
    'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  outline: 'border border-border bg-transparent text-foreground hover:bg-muted',
};

function Button({ text, size = 'm', variant = 'primary', type = 'button', disabled = false, ...props }: Props) {
  return (
    <button type={type} disabled={disabled} className={`${baseStyles} ${variants[variant]} ${sizes[size]}`} {...props}>
      {text}
    </button>
  );
}

export default Button;
