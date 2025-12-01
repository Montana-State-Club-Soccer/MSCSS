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
}

export const SignUpForm = forwardRef<HTMLFormElement, SignUpFormProps>(
  ({ onSubmit, isLoading = false, error, className, ...props }, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [terms, setTerms] = useState(false);
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      
      if (password !== confirmPassword) {
        setPasswordError('Passwords do not match');
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
          label="Full Name"
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon={<User className="w-5 h-5" />}
          required
          disabled={isLoading}
          fullWidth
        />

        <Input
          type="email"
          label="Email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<Mail className="w-5 h-5" />}
          required
          disabled={isLoading}
          fullWidth
        />

        <Input
          type="password"
          label="Password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<Lock className="w-5 h-5" />}
          required
          disabled={isLoading}
          fullWidth
        />

        <Input
          type="password"
          label="Confirm Password"
          placeholder="••••••••"
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
          label="I agree to the Terms of Service and Privacy Policy"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
          disabled={isLoading}
          required
        />

        <Button type="submit" fullWidth disabled={isLoading || !terms}>
          {isLoading ? 'Creating account...' : 'Create account'}
        </Button>
      </form>
    );
  }
);

SignUpForm.displayName = 'SignUpForm';
