import { IcArrowGray16 } from 'node_modules/@confeti/design-system/src/icons/src';
import * as styles from './logout-button.css.ts';

interface Props {
  text: string;
}

const LogoutButton = ({ text }: Props) => {
  return (
    <button className={styles.button}>
      {text}
      <IcArrowGray16 />
    </button>
  );
};

export default LogoutButton;
