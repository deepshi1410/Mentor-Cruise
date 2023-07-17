import { createRouter, createWebHistory } from 'vue-router'
// importing all the views components and registering them with the routes
import MentorsList from './views/mentors/MentorsList.vue'
// import { defineAsyncComponent } from 'vue'
import MentorDetails from './views/mentors/MentorDetails.vue'
import ContactMentor from './views/requests/ContactMentor.vue'
import MentorRegisteration from './views/mentors/MentorRegisteration.vue'
import RequestsReceived from './views/requests/RequestsReceived.vue'
import NotFound from './views/NotFound.vue'
import store from './store/index.js';
import UserAuth from './views/auth/UserAuth.vue'
// an optimisation that we import components only when needed
// const MentorDetails = defineAsyncComponent(() =>
//   import('./views/mentors/MentorDetails.vue')
// );
// const MentorRegisteration = defineAsyncComponent(() =>
//   import('./views/mentors/MentorRegisteration.vue')
// );
// const ContactMentor = defineAsyncComponent(() =>
//   import('./views/requests/ContactMentor.vue')
// );
// const RequestsReceived = defineAsyncComponent(() =>
//   import('./views/requests/RequestsReceived.vue')
// );
// const UserAuth = defineAsyncComponent(() =>
//   import('./views/auth/UserAuth.vue')
// );

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/mentors'
  },
  {
    path: '/mentors',
    component: MentorsList
  },
  {
    path: '/mentors/:id',
    props: true,
    name: 'mentor-details',
    component: MentorDetails,
    children: [{
      path: 'contact',
      component: ContactMentor
    }]
  },
  {
    path: '/register',
    component: MentorRegisteration,
    meta: { requiresAuth: true }
  },
  {
    path: '/requests',
    component: RequestsReceived,
    meta: { requiresAuth: true }
  },
  {
    path: '/auth',
    component: UserAuth,
    meta: { requiresUnauth: true }
  },
  {
    path: '/notFound(.*)',
    component: NotFound
  }
  ]
})

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/mentors');
  } else {
    next();
  }
});

export default router;