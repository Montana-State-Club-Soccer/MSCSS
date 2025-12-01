export interface LoginFormProps {
    onSubmit: (data: {
        email: string;
        password: string;
        remember: boolean;
    }) => void;
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
export declare const LoginForm: import('react').ForwardRefExoticComponent<LoginFormProps & import('react').RefAttributes<HTMLFormElement>>;
//# sourceMappingURL=LoginForm.d.ts.map