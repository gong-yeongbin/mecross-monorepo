import { NextFunction, Request, Response, Router } from 'express';
import CampaignController from '../controllers/campaign.controller';
import { body } from 'express-validator';
import { routerMiddleWare } from '../middlewares/router.middleware';

class CampaignRouter {
  private router: Router;
  private campaignController: CampaignController;

  constructor() {
    this.router = Router();
    this.campaignController = new CampaignController();
    this.registerRoutes();
  }

  registerRoutes = () => {
    this.router.post(
      '/',
      body('name').notEmpty().trim().withMessage('name는 필수 값 입니다.'),
      body('url').notEmpty().trim().withMessage('url는 필수 값 입니다.'),
      body('click_id')
        .notEmpty()
        .trim()
        .withMessage('click_id는 필수 값 입니다.'),
      body('pub_id').notEmpty().trim().withMessage('pub_id는 필수 값 입니다.'),
      body('sub_id').optional(),
      body('adid').optional(),
      body('idfa').optional(),
      routerMiddleWare.validatorErrorChecker,
      (req: Request, res: Response, next: NextFunction) => {
        const adid: String = req.body.adid;
        const idfa: String = req.body.idfa;

        if (adid == undefined && idfa == undefined) {
          return res
            .status(400)
            .json({ error: 'adid or idfa 둘중 하나는 필수 입니다.' });
        }

        next();
      },
      this.campaignController.create
    );
    this.router.get('/', this.campaignController.get);
    this.router.patch('/', this.campaignController.modify);
    this.router.delete('/', this.campaignController.delete);
  };

  getRouter = () => {
    return this.router;
  };
}

export default CampaignRouter;
