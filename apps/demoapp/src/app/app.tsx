// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { SharedBaseComponents } from '@myorg/shared/base-components';

export function App() {
  return (
    <>
      <SharedBaseComponents />
      <NxWelcome title="demoapp" />
      <div />
    </>
  );
}

export default App;
