export interface SignUpFormProps {
    onSubmit: (data: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        terms: boolean;
    }) => void;
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
export declare const SignUpForm: import('react').ForwardRefExoticComponent<SignUpFormProps & import('react').RefAttributes<HTMLFormElement>>;
//# sourceMappingURL=SignUpForm.d.ts.map