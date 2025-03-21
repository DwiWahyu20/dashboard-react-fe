'use client'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const navigateToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Welcome to Project Deucalion</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>Username</label>
            <input type="text" id="username" name="username" className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" name="password" className={styles.input} />
          </div>
          <Button type="submit" className={styles.button}>Login</Button>
        </form>
        <Button onClick={navigateToDashboard} className={styles.button}>ByPass</Button>
      </div>
    </div>
  );
}