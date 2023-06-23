import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response): void => {
  res.send('hello media !!!');
});

export default router;
