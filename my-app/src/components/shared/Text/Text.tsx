import { TextProps } from './Text.props';
import styles from './Text.module.scss';
import cn from 'classnames';

const Text = ({
  children,
  color = 'black',
  className,
  ...props
}: TextProps) => {
  return (
    <p className={cn(styles.main, styles[color], className)} {...props}>
      {children}
    </p>
  );
};

export default Text;
