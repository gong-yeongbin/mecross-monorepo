import { Request, Response } from 'express';

import Campaign, { ICampaign } from '../models/campaign';

class CampaignService {
  constructor() {}

  get = (req: Request, res: Response) => {
    return;
  };

  create = async (campaign: ICampaign) => {
    try {
      return await Campaign.create(campaign);
    } catch (e) {
      return null;
    }
  };

  modify = (req: Request, res: Response) => {
    return;
  };

  delete = (req: Request, res: Response) => {
    return;
  };
}

export default CampaignService;
