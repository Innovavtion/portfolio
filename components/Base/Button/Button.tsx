import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...restProps }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} {...restProps}>
      {children}
    </button>
  );
}
