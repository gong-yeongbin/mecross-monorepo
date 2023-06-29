import { Request, Response } from 'express';
import TrackingService from '../services/tracking.service';

class TrackingController {
  private trackingService: TrackingService;

  constructor() {
    this.trackingService = new TrackingService();
  }

  tracking(req: Request, res: Response) {
    res.status(200).send('hello world media tracking');
  }
}

export default TrackingController;
