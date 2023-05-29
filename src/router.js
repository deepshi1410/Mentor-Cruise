import { createRouter, createWebHistory } from 'vue-router'
// importing all the views components and registering them with the routes
import TrainersList from './views/trainers/TrainersList.vue'
import TrainerDetails from './views/trainers/TrainerDetails.vue'
import ContactTrainer from './views/requests/ContactTrainer.vue'
import TrainerRegisteration from './views/trainers/TrainerDetails.vue'
import RequestsReceived from './views/requests/RequestsReceived.vue'
import NotFound from './views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/trainers'
  },
  {
    path: '/trainers',
    component: TrainersList
  },
  {
    path: '/trainers/:id',
    component: TrainerDetails,
    children: [{
      path: 'contact',
      component: ContactTrainer
    }]
  },
  {
    path: '/register',
    component: TrainerRegisteration
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