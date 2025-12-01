import { forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import { Input } from './Input';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { Mail, Lock } from 'lucide-react';

export interface LoginFormProps {
  onSubmit: (data: { email: string; password: string; remember: boolean }) => void;
  isLoading?: boolean;
  error?: string;
  className?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  rememberLabel?: string;
  forgotPasswordText?: string;
  forgotPasswordHref?: string;
  submitText?: string;
  loadingText?: string;
}

export const LoginForm = forwardRef<HTMLFormElement, LoginFormProps>(
  ({ 
    onSubmit, 
    isLoading = false, 
    error, 
    className,
    emailLabel = 'Email',
    emailPlaceholder,
    passwordLabel = 'Password',
    passwordPlaceholder,
    rememberLabel = 'Remember me',
    forgotPasswordText,
    forgotPasswordHref,
    submitText = 'Sign in',
    loadingText = 'Signing in...',
    ...props 
  }, ref) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({ email, password, remember });
    };

    return (
      <form
        ref={ref}
        onSubmit={handleSubmit}
        className={clsx('space-y-4 md:space-y-6 p-6 md:p-8 bg-primary border-2 border-secondary rounded-lg', className)}
        {...props}
      >
        {error && (
          <div className="p-3 md:p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm md:text-base text-red-800">{error}</p>
          </div>
        )}

        <Input
          type="email"
          label={emailLabel}
          placeholder={emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail className="w-5 h-5" />}
          required
          disabled={isLoading}
          fullWidth
        />

        <Input
          type="password"
          label={passwordLabel}
          placeholder={passwordPlaceholder}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock className="w-5 h-5" />}
          required
          disabled={isLoading}
          fullWidth
        />

        <div className="flex items-center justify-between">
          <Checkbox
            label={rememberLabel}
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            disabled={isLoading}
          />
          {forgotPasswordText && forgotPasswordHref && (
            <a
              href={forgotPasswordHref}
              className="text-sm md:text-base text-secondary hover:text-secondary/80 font-medium"
            >
              {forgotPasswordText}
            </a>
          )}
        </div>

        <Button type="submit" fullWidth disabled={isLoading}>
          {isLoading ? loadingText : submitText}
        </Button>
      </form>
    );
  }
);

LoginForm.displayName = 'LoginForm';
