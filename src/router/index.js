import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/pages/main/MainPage";
import WishlistPage from "@/pages/wishlist/WishlistPage";

const routes = [
  {
    name: 'Main',
    path: '/',
    component: MainPage
  },
  {
    name: 'Wishlist',
    path: '/wishlist',
    component: WishlistPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
