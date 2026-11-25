import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  showPasswordToggle?: boolean;
};

function Input({ className = '', type = 'text', showPasswordToggle = false, ...props }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && showPassword ? 'text' : type;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        className={`border-border bg-background focus:border-primary focus:ring-primary/20 w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${showPasswordToggle && isPassword ? 'pr-10' : ''} ${className}`}
        {...props}
      />

      {showPasswordToggle && isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((previous) => !previous)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          aria-pressed={showPassword}
          className="text-foreground/60 hover:text-primary absolute top-1/2 right-3 -translate-y-1/2 transition-colors"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}

export default Input;
