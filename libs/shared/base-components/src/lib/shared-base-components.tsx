import styles from './shared-base-components.module.css';

/* eslint-disable-next-line */
export interface SharedBaseComponentsProps {}

export function SharedBaseComponents(props: SharedBaseComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedBaseComponents!</h1>
    </div>
  );
}

export default SharedBaseComponents;
