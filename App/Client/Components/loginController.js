import template from '../Templates/loginTemplate.vue';
import auth from '../Auth/auth.js';

// not final data values - need to modify
let login = {
  template: template.template,
  name: 'login',
  data () {
    return {
      user: {
        username: '',
        password: '',
        age: '',
        gender: '',
        location: '',
        interestedIn: ''
      }
    }
  },
  
  methods: {
    login () {
      let userData = {
        username: this.username,
        password: this.password
      };
      auth.login(this, userData, `/myprofile/${userData.username}`);
    }
  },

  route: {
    canActivate() {
      console.log('can activate on SIGN UP route - auth.user.isAuth', auth.user.isAuth)
      return auth.user.isAuth;
    }
  }
};

export default login;


//*** PART OF PREVIOUS CODE HERE *** /
// this.$http.post('/auth/login', {
//         username: this.username,
//         password: this.password
//       })
//       .then((res) => {
//         var body = res.body;
//         // this.$http.get('/api/events')
//         //   .then((res) => {
//         //     this.$store.commit('setAllEvents', res.body);
//         //   });
//         this.$store.commit('setUser', body);
//         this.$store.commit('setSavedEvents', body.events);
//         this.$router.push('/myprofile/' + this.username);
//         console.log("this.$router", this.$router)
//       })
//       .catch((err) => console.error(err));