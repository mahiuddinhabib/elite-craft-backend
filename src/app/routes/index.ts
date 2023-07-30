import express from 'express';
import { ProductRoutes } from '../modules/product/product.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  /* {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/cows',
    route: CowRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  }, */
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
