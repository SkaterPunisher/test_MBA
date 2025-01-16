import { HeadingProps } from './Heading.props';
import styles from './Heading.module.scss';
import cn from 'classnames';

const Heading = ({
  tag,
  color = 'black',
  children,
  className,
  ...props
}: HeadingProps) => {
  const HTag = tag;

  return (
    <HTag
      className={cn(styles.main, styles[color], styles[tag], className)}
      {...props}
    >
      {children}
    </HTag>
  );
};

export default Heading;
