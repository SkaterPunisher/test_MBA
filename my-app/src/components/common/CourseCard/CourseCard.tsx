import { CourseCardProps } from './CourseCard.props';
import styles from './CourseCard.module.scss';
import cn from 'classnames';
import Heading from '@/components/shared/Heading/Heading';

const CourseCard = ({
  title,
  modules,
  className,
  ...props
}: CourseCardProps) => {
  return (
    <article className={cn(styles.wrapper, className)} {...props}>
      <Heading tag='h2'>{title}</Heading>

      {modules && modules.length && <div></div>}
    </article>
  );
};

export default CourseCard;
