import React, { useEffect } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from "./login.module.css";
import { useHistory } from "react-router";

const Login = ({ authService }) => {
  const histroy = useHistory();
  const goToMaker = (userId) => {
    histroy.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1>
          Login
          <ul className={styles.list}>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Google
              </button>
            </li>
            <li className={styles.item}>
              <button className={styles.button} onClick={onLogin}>
                Github
              </button>
            </li>
          </ul>
        </h1>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
