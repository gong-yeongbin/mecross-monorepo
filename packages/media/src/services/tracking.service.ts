import { scheduleJob } from 'node-schedule';
// import moment from 'moment-timezone';
import Tracking_Info from '../models/tracking_info';

class TrackingService {
  constructor() {}

  delete = async () => {
    const tracking_info = await Tracking_Info.aggregate([
      {
        $group: {
          _id: '$adid',
          targets: { $push: '$$ROOT' },
          count: { $sum: 1 },
        },
      },
      {
        $match: { count: { $gt: 1 } },
      },
    ]);

    for (let doc of tracking_info) {
      doc.targets.shift();
      await Tracking_Info.deleteMany({
        _id: { $in: doc.targets },
      });
    }
  };
}

export default TrackingService;
