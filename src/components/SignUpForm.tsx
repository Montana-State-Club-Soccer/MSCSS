import { forwardRef, useState } from 'react';
import { clsx } from 'clsx';
import { Input } from './Input';
import { Button } from './Button';
import { Checkbox } from './Checkbox';
import { Mail, Lock, User } from 'lucide-react';

export interface SignUpFormProps {
  onSubmit: (data: { name: string; email: string; password: string; confirmPassword: string; terms: boolean }) => void;
  isLoading?: boolean;
  error?: string;
  className?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  confirmPasswordLabel?: string;
  confirmPasswordPlaceholder?: string;
  termsLabel?: string;
  passwordMismatchError?: string;
  submitText?: string;
  loadingText?: string;
}

export const SignUpForm = forwardRef<HTMLFormElement, SignUpFormProps>(
  ({ 
    onSubmit, 
    isLoading = false, 
    error, 
    className,
    nameLabel = 'Full Name',
    namePlaceholder,
    emailLabel = 'Email',
    emailPlaceholder,
    passwordLabel = 'Password',
    passwordPlaceholder,
    confirmPasswordLabel = 'Confirm Password',
    confirmPasswordPlaceholder,
    termsLabel = 'I agree to the Terms of Service and Privacy Policy',
    passwordMismatchError = 'Passwords do not match',
    submitText = 'Create account',
    loadingText = 'Creating account...',
    ...props 
  }, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (password !== confirmPassword) {
        setPasswordError(passwordMismatchError);
        return;
      }
      
      setPasswordError('');
      onSubmit({ name, email, password, confirmPassword, terms });
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
          type="text"
          label={nameLabel}
          placeholder={namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<User className="w-5 h-5" />}
          required
          disabled={isLoading}
          fullWidth
        />

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

        <Input
          type="password"
          label={confirmPasswordLabel}
          placeholder={confirmPasswordPlaceholder}
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setPasswordError('');
          }}
          icon={<Lock className="w-5 h-5" />}
          required
          disabled={isLoading}
          error={passwordError}
          fullWidth
        />

        <Checkbox
          label={termsLabel}
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
          disabled={isLoading}
          required
        />

        <Button type="submit" fullWidth disabled={isLoading || !terms}>
          {isLoading ? loadingText : submitText}
        </Button>
      </form>
    );
  }
);

SignUpForm.displayName = 'SignUpForm';
