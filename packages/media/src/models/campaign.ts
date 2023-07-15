import mongoose, { model, Model } from 'mongoose';
export interface ICampaign {
  _id: string;
  name: string;
  url: string;
  click_id: string;
  pub_id: string;
  sub_id: string;
  adid?: string;
  idfa?: string;
  custom1?: string;
  custom2?: string;
  custom3?: string;
}

interface ICampaignDocument extends ICampaign, Document {}
interface ICampaignModel extends Model<ICampaignDocument> {}

const CampaignSchema = new mongoose.Schema<ICampaign>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    url: { type: String, required: true, trim: true },
    click_id: { type: String, default: null, trim: true },
    pub_id: { type: String, default: null, trim: true },
    sub_id: { type: String, default: null, trim: true },
    adid: { type: String, default: null, trim: true },
    idfa: { type: String, default: null, trim: true },
    custom1: { type: String, default: null, trim: true },
    custom2: { type: String, default: null, trim: true },
    custom3: { type: String, default: null, trim: true },
  },
  {
    versionKey: false,
  }
);

const Campaign: ICampaignModel = model<ICampaign, ICampaignModel>(
  'campaign',
  CampaignSchema,
  'campaign'
);

export default Campaign;
