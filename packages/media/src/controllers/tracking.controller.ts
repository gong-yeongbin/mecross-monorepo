import { Request, Response } from 'express';
import TrackingService from '../services/tracking.service';
import moment from 'moment-timezone';
import CampaignService from '../services/campaign.service';
import CommonService from '../services/common.service';

class TrackingController {
  private trackingService: TrackingService;
  private campaignService: CampaignService;
  private commonService: CommonService;

  constructor() {
    this.trackingService = new TrackingService();
    this.campaignService = new CampaignService();
    this.commonService = new CommonService();
  }

  delete = async (req: Request, res: Response) => {
    await this.trackingService.delete();
  };

  create = async (req: Request, res: Response) => {
    // const s_time: string = moment(req.query.stime as string)
    //   .tz('Asia/Seoul')
    //   .utc(true)
    //   .format('YYYY-MM-DD HH:mm:ss');
    // // const campaign: string = req.query.campaign as string;
    // const count: number = Number(req.query.count);

    // const campaign: ICampaign = await this.campaignService.getCampaign();
    const adid = await this.commonService.getAdid();

    await this.commonService.createSchedule();

    res
      .status(200)
      .send(moment().tz('Asia/Seoul').utc(true).format('YYYY-MM-DD HH:mm:ss'));
  };
}

export default TrackingController;
