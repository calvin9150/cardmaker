import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Login = ({ authService }) => {
  const onLogin = (e) => {
    authService.login(e.currentTarget.textContent).then(console.log);
  };
  return (
    <section>
      <Header />
      <section>
        <h1>
          Login
          <ul>
            <li>
              <button onClick={onLogin}>Google</button>
            </li>
            <li>
              <button onClick={onLogin}>Github</button>
            </li>
          </ul>
        </h1>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
