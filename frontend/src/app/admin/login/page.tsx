import PrimaryButton from '@/app/components/PrimaryButton/PrimaryButon';
import styles from './page.module.css';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginFormContainer}>
        <div className={styles.loginForm}>
          <div className={styles.adminPortal}>
            <img src="/images/logo.png" />
            <div className={styles.text}>Admin Portal</div>
          </div>
          <div className={styles.formCont}>
            <div className={styles.inputContainer}>
              <div className={styles.label}>Username</div>
              <input placeholder="Enter your username" />
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.label}>Password</div>
              <input placeholder="Enter your password" />
            </div>
          </div>
          <div className={styles.btn}>
            <PrimaryButton href="/admin/dashboard">Login</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
