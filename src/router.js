import { createRouter, createWebHistory } from 'vue-router'
// importing all the views components and registering them with the routes
import MentorsList from './views/mentors/MentorsList.vue'
import MentorDetails from './views/mentors/MentorDetails.vue'
import ContactMentor from './views/requests/ContactMentor.vue'
import MentorRegisteration from './views/mentors/MentorRegisteration.vue'
import RequestsReceived from './views/requests/RequestsReceived.vue'
import NotFound from './views/NotFound.vue'
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
    component: MentorRegisteration
  },
  {
    path: '/requests',
    component: RequestsReceived
  },
  {
    path: '/notFound(.*)',
    component: NotFound
  }
  ]
})
export default router;