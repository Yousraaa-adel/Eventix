'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';
import styles from './page.module.css';

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/users/login',
        { email, password },
        { withCredentials: true }
      );

      // console.log(response.status);

      // Check if the response is successful
      if (response.status === 200) {
        console.log('Logged in from Login page. Redirecting ..');
        router.push('/admin/dashboard'); // Redirect to the dashboard
      }
    } catch (error) {
      console.log('Error logging you in:', error);
    }
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginFormContainer}>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.adminPortal}>
              <img src="/images/logo.png" />
              <div className={styles.text}>Admin Portal</div>
            </div>
            <div className={styles.formCont}>
              <div className={styles.inputContainer}>
                <label id="email" className={styles.label}>
                  Username
                </label>
                <input
                  type={'email'}
                  id="email"
                  name={email}
                  value={email}
                  placeholder="Enter your username"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.inputContainer}>
                <label id="password" className={styles.label}>
                  Password
                </label>
                <input
                  type={'text'}
                  id="password"
                  name={password}
                  value={password}
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.btn}>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
