type Props = {
  text: string;
  size?: 's' | 'm' | 'l';
  variant?: 'primary' | 'secondary' | 'outline';
  type: 'button';
};

const sizes = {
  s: 'px-3 py-2 text-sm',
  m: 'px-4 py-3 text-base',
  l: 'px-6 py-4 text-lg',
};

{
  /* Button styling & Variants */
}
const baseStyles = 'inline-flex cursor-pointer w-full items-center justify-center rounded-md font-medium transition-all duration-200 sm:w-auto';

const primaryStyles = 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0';

const variants = {
  primary: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0',

  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',

  outline: 'border border-border bg-transparent text-foreground hover:bg-muted',
};

function Button({ text, size = 'm', variant = 'primary', type = 'button' }: Props) {
  return (
    <button type={type} className={`${baseStyles} ${primaryStyles} ${variants[variant]} ${sizes[size]}`}>
      {text}
    </button>
  );
}

export default Button;
