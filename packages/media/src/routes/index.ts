import { Request, Response, Router } from 'express';
import TrackingRouter from './tracking.router';

const router: Router = Router();
const trackingRouter: TrackingRouter = new TrackingRouter();

router.get('/', (req: Request, res: Response): void => {
  res.send('hello world media !!!');
});

router.use('/tracking', trackingRouter.getRouter());

export default router;
