import { Router } from 'express';
import { query } from 'express-validator';
import { routerMiddleWare } from '../middlewares/router.middleware';
import TrackingController from '../controllers/tracking.controller';

class TrackingRouter {
  private router: Router;
  private trackingController: TrackingController;

  constructor() {
    this.router = Router();
    this.trackingController = new TrackingController();
    this.registerRoutes();
  }

  registerRoutes = () => {
    this.router.post(
      '/',
      query('s_time')
        .notEmpty()
        .trim()
        .isInt()
        .isLength({ min: 15 })
        .withMessage('s_time 형식에 맞지 않습니다.'),
      query('count')
        .trim()
        .notEmpty()
        .isInt()
        .withMessage('int 형이 아닙니다.'),
      query('campaign')
        .trim()
        .notEmpty()
        .isString()
        .withMessage('campaign 형식에 맞지 않습니다.'),
      routerMiddleWare.validatorErrorChecker,
      this.trackingController.create
    );

    this.router.get('/delete', this.trackingController.delete);
  };

  getRouter() {
    return this.router;
  }
}

export default TrackingRouter;
