import firebase from "firebase";

class AuthService {
  login(provideName) {
    const authProvider = new firebase.auth[`${provideName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
