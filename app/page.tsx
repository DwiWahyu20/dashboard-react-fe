'use client'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { fetchData, postData } from 'app/(services)/apiService';
import { forwardResponse } from 'app/(controllers)/controller';
import styles from './page.module.css';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [tempData, setData] = useState<any>(null);
  useEffect(() => {
    forwardResponse()
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log('Dashboard data:', tempData)


  const navigateToDashboard = async() => {
    // router.push('/dashboard');
    setIsLoading(true);
    try {
      const data = await fetchData('/cors');
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to navigate to dashboard:', error);
    } finally {
      setIsLoading(false);
    }
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
        <Button onClick={navigateToDashboard} className={styles.button} isLoading={isLoading}>ByPass</Button>
      </div>
    </div>
  );
}