import type { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label({ className = '', ...props }: LabelProps) {
  return <label className={`text-foreground mb-1.5 block text-sm font-medium ${className}`} {...props} />;
}

export default Label;
