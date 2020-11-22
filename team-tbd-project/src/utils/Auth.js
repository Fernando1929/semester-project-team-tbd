class Auth {

    static authenticateUser(token) {
      localStorage.setItem('usertoken', token);
    }

    static setUsername(user){
      return localStorage.setItem('username',user);
    }
    static getUsername(){
      return localStorage.getItem('username');
    }

    static setUserid(id){
      return localStorage.setItem('user_id',id);
    }

    static getUserid(){
      return localStorage.getItem('user_id');
    }
  
    static isUserAuthenticated() {
      return localStorage.getItem('usertoken') !== null;
    }

    static deauthenticateUser() {
      localStorage.removeItem('usertoken');
      localStorage.removeItem('username');
      localStorage.removeItem('user_id');
      window.location.reload();
    }
  
    static getToken() {
      return localStorage.getItem('usertoken');
    }
  }
  
  export default Auth;