import mongoose, { Model } from 'mongoose';

export interface ITrackingInfo {
  adid: string;
  idfa: string;
  token: string;
}

const trackingInfoSchema = new mongoose.Schema<ITrackingInfo>({
  adid: { type: String },
  idfa: { type: String },
  token: { type: String },
});

const Tracking_Info = mongoose.model<ITrackingInfo & mongoose.Document>(
  'tracking_info',
  trackingInfoSchema,
  'tracking_info'
);

export default Tracking_Info;
