type Props = {
  text: string;
  size?: 's' | 'm' | 'l';
};

const sizes = {
  s: 'px-3 py-2 text-sm',
  m: 'px-4 py-3 text-base',
  l: 'px-6 py-4 text-lg',
};

const baseStyles = 'inline-flex w-full items-center justify-center rounded-md font-medium transition-all duration-200 sm:w-auto';

const primaryStyles = 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0';

function Button({ text, size = 'm' }: Props) {
  return <button className={`${baseStyles} ${primaryStyles} ${sizes[size]}`}>{text}</button>;
}

export default Button;
