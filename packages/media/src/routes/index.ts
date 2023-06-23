import { Request, Response, Router } from 'express';
import trackingRouter from './tracking.router';

const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.send('hello world media !!!');
});

router.use('/tracking', trackingRouter);

export default router;
