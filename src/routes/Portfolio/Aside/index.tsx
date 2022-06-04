import { INFO } from 'assets/article';

import ContactList from 'components/ContactList';
import ColorButtons from 'components/ColorButtons';
import ThemeButtons from 'components/ThemeButtons';

import styles from './aside.module.scss';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <h1>{INFO.NAME}</h1>
      <p className={styles.intro}>{INFO.INTRO}</p>
      <ContactList />
      <p className={styles.copyright}>{INFO.COPYRIGHT}</p>
      <div className={styles.buttonsAside}>
        <ColorButtons border={false} />
        <ThemeButtons border={false} />
      </div>
    </aside>
  );
};

export default Aside;
