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
}
export declare const SignUpForm: import('react').ForwardRefExoticComponent<SignUpFormProps & import('react').RefAttributes<HTMLFormElement>>;
//# sourceMappingURL=SignUpForm.d.ts.map