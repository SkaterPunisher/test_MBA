import { getCourses } from '@/actions/course';
import CourseCard from '@/components/common/CourseCard/CourseCard';
import Heading from '@/components/shared/Heading/Heading';
import Text from '@/components/shared/Text/Text';
import { Course } from '@/type/course';
import styles from './page.module.scss';

export default async function Home() {
  const courses = await getCourses();

  return (
    <div>
      <Heading tag='h1' className={styles.title}>
        Специализированные дисциплины
      </Heading>

      {courses && courses.length ? (
        <ul className={styles.list}>
          {courses.map((course: Course) => (
            <li key={course.id}>
              <CourseCard
                title={course.title}
                modules={course.whatWillYouLearn}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Text>Курсы не найдены</Text>
      )}
    </div>
  );
}
