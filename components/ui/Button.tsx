import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "../system/cn";
import Link from "next/link";

const button = tv({
  base: "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border border-gray-300 hover:bg-gray-50",
      ghost: "hover:bg-gray-100",
      primary: "bg-blue-600 text-white hover:bg-blue-700",
    },
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> { 
      loading?: boolean; 
      disabled?: boolean; 
      href?: string;
    }

export const Button: React.FC<ButtonProps> = ({ 
  loading = false, 
  disabled = false, 
  children, 
  href,
  ...props 
}) => {
  const buttonClasses = cn(
    button({ variant: props.variant, size: props.size, className: props.className }),
    {
      'opacity-50 cursor-not-allowed': disabled || loading,
    }
  );

  const content = loading ? (
    <span className="flex items-center justify-center">
      <svg className="animate-spin h-4 w-4 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      Loading...
    </span>
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button {...props} disabled={disabled || loading} className={buttonClasses}>
      {content}
    </button>
  );
};
