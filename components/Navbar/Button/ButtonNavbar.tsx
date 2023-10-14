import styles from "./ButtonNavbar.module.scss";
import { Button, ButtonProps } from "@/components/Base/Button/Button";

interface Props extends ButtonProps {}

export default function ButtonNavbar({ children, ...restProps }: Props) {
  return (
    <Button className={styles.button} {...restProps}>
      {children}
    </Button>
  );
}
