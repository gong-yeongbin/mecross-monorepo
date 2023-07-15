import { Request, Response } from 'express';
import CampaignService from '../services/campaign.service';
import { ICampaign } from '../models/campaign';

class CampaignController {
  private campaignService: CampaignService;

  constructor() {
    this.campaignService = new CampaignService();
  }

  get = (req: Request, res: Response) => {
    res.send('campaign get');
  };

  create = async (req: Request, res: Response): Promise<void> => {
    const campaign: ICampaign = req.body;

    const result = await this.campaignService.create(campaign);

    if (result) {
      res.status(201).send({ message: 'created campaign' });
    } else {
      res.status(409).json({ message: 'duplicate campaign name' });
    }
  };

  modify = (req: Request, res: Response) => {
    return;
  };

  delete = (req: Request, res: Response) => {
    return;
  };
}

export default CampaignController;
