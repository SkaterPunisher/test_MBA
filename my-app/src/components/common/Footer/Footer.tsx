import Heading from '@/components/shared/Heading/Heading';
import styles from './Footer.module.scss';
import cn from 'classnames';
import Text from '@/components/shared/Text/Text';

const Footer = () => {
  return (
    <footer>
      <ul className={styles.list}>
        <li className={styles.listWrapper}>
          <article className={cn(styles.item, styles.practical)}>
            <Heading color='white' tag='h3'>
              Практические модули
            </Heading>
            <Text color='white'>
              Работа над собственными проектами: практика групповых
              взаимодействий, кейс-методы, эссе
            </Text>
          </article>
        </li>

        <li className={styles.listWrapper}>
          <article className={cn(styles.item, styles.final)}>
            <Heading color='white' tag='h3'>
              Итоговая аттестация
            </Heading>
            <ul className={styles.finalList}>
              <li>
                <Text color='white'>
                  Бизнес-проектирование (подготовка итоговой аттестационной
                  работы, консультирование по бизнес-проектированию)
                </Text>
              </li>
              <li>
                <Text color='white'>Защита итоговой аттестационной работы</Text>
              </li>
            </ul>
          </article>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
