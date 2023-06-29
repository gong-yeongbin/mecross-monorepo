import { scheduleJob } from 'node-schedule';
import moment from 'moment-timezone';

class TrackingService {
  constructor() {}

  setTrackingRegister = (
    s_time: string,
    adid_list: Array<string>,
    url: string
  ): void => {
    scheduleJob(s_time, () => {
      // api call
    });
  };

  getTrackingCampaignUrl = (name: string): string => {
    return 'http://api.mecrosspro.com/tracking?token=f46b53c1cb7449649a4fbd0c6ba24b71';
  };

  getTrackingAdid = (count: number): Array<string> => {
    return ['test123'];
  };
}

export default TrackingService;
