import { Request, Response, Router } from 'express';
import TrackingRouter from './tracking.router';
import CampaignRouter from './campaign.router';

const router: Router = Router();
const campaignRouter: CampaignRouter = new CampaignRouter();
const trackingRouter: TrackingRouter = new TrackingRouter();

router.get('/', (req: Request, res: Response): void => {
  res.send('hello world media !!!');
});

router.use('/campaign', campaignRouter.getRouter());
router.use('/tracking', trackingRouter.getRouter());

export default router;
