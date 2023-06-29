import { Router } from 'express';
import { check, query } from 'express-validator';
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
      // query('stime')
      //   .notEmpty()
      //   .trim()
      //   .isInt()
      //   .isLength({ min: 15 })
      //   .withMessage('stime 형식에 맞지 않습니다.'),
      // query('count').trim().notEmpty().isInt().withMessage('int형이 아닙니다.'),
      // query('campaign')
      //   .trim()
      //   .notEmpty()
      //   .isString()
      //   .withMessage('campaign 형식에 맞지 않습니다.'),
      // routerMiddleWare.validatorErrorChecker,
      this.trackingController.tracking
    );

    return router;
  };

  getRouter() {
    return this.router;
  }
}

export default TrackingRouter;
