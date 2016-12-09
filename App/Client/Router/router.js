import Vue from 'vue';
import VueRouter from 'vue-router';

import AppTEST from '../appController.js';
import login from '../Views/loginController.js';
import video from '../Views/videoController.js';
import signup from '../Views/signupController.js';
import profile from '../Views/profileController.js';
<<<<<<< HEAD
<<<<<<< 6f87d055cc122b1dd1412ccf4d2ab3f4e020c1c3
=======
<<<<<<< HEAD
>>>>>>> 9cb194989fab4fb00bdded4fcddeef15f3955997
import edit from '../Views/profileCreationController.js';
import blank from '../Views/blank.vue';

=======
<<<<<<< HEAD
import blank from '../Views/blank.vue';
import profileCreate from '../Views/profileCreationController.js';
<<<<<<< 57b1807c32c6649c86d00c78ddb2ddb77b95a370
>>>>>>> refactor to implement router
=======
import store from '../store.js';
>>>>>>> implement router authorization
=======
import profileCreate from '../Views/profileCreationController.js';
import blank from '../Views/blank.vue';




>>>>>>> c8a8d92a74630a4719718a88e19969dcc951f41e
>>>>>>> 9cb194989fab4fb00bdded4fcddeef15f3955997

var routes = [
  {
    path: '/',
    component: AppTEST
  },  
  {
    path: '/video',
    component: video,
  },
  {
    path: '/signup',
    component: signup

  },
  // {
  //   path: '/Admin',
  //   meta: { requiresAdmin: true },
  //   component: blank,
  //   children: [
  //     {
  //       path: '/eventcreate',
  //       component: createEventController
  //     }
  //   ]
  // },
  {
    path: '/profile/:id',
    meta: { requiresAuth: true },
    component: blank,
    children: [
      {
        path: 'edit',
        name: 'edit',
        component: profileCreate,
      },
      {
        path: '',
        component: profile,
      }
    ]
  },
  // {
  //   path: '/events',
  //   component: blank,
  //   children: [
  //     {
  //       path: '/signup',
  //       component: eventSignup,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: '',
  //       component: events,
  //     }
  //   ]
  // },
  // {
  //   path: '/date/:dateid',
  //   meta: { requiresAuth: true },
  //   component: blank,
  //   children: [
  //     {
  //       path: '/active',
  //       component: activeController,
  //     },
  //     {
  //       path: '/inactive',
  //       component: inactiveController,
  //     },
  //   ]
  // },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> c8a8d92a74630a4719718a88e19969dcc951f41e
>>>>>>> 9cb194989fab4fb00bdded4fcddeef15f3955997
];

const router = new VueRouter({

  routes
});
// console.log(auth);
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(store.state.username);
    if (!store.state.username) {
      Vue.http.post('auth/authorize')
      .then((res) => {
        console.log(to);
        store.commit('setUser', res.body);
        next({
        });
      })
      .catch((res) => {
        console.log(res.body);
        window.alert('you must log in to do that');
        next(false);
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       });
//     } else {
//       next();
//     }
//   } else {
//     next(); // make sure to always call next()!
//   }
// });

export default router;