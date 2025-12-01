export interface LoginFormProps {
    onSubmit: (data: {
        email: string;
        password: string;
        remember: boolean;
    }) => void;
    isLoading?: boolean;
    error?: string;
    className?: string;
}
export declare const LoginForm: import('react').ForwardRefExoticComponent<LoginFormProps & import('react').RefAttributes<HTMLFormElement>>;
//# sourceMappingURL=LoginForm.d.ts.map