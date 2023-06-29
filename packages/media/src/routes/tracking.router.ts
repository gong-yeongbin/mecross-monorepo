import { Router } from 'express';
import { query } from 'express-validator';
import { routerMiddleWare } from '../middlewares/router.middleware';
import TrackingController from '../controllers/tracking.controller';
import router from './index';

class TrackingRouter {
  private router: Router;
  private trackingController: TrackingController;

  constructor() {
    this.router = Router();
    this.trackingController = new TrackingController();
    this.registerRoutes();
  }

  registerRoutes = () => {
    this.router.get(
      '/',
      query('stime').notEmpty().trim().isString().withMessage('Invalid stime'),
      query('count').trim().notEmpty().isInt().withMessage('Invalid count'),
      query('campaign')
        .trim()
        .notEmpty()
        .isString()
        .withMessage('Invalid campaign'),
      routerMiddleWare.validatorErrorChecker,
      this.trackingController.tracking
    );

    return router;
  };

  getRouter() {
    return this.router;
  }
}

export default TrackingRouter;
