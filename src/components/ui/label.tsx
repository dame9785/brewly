import type { LabelHTMLAttributes } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label({ className = '', ...props }: LabelProps) {
  return <label className={`text-foreground block text-sm font-medium ${className}`} {...props} />;
}

export default Label;
