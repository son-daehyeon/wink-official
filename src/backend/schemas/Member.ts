import {Schema, model} from 'mongoose';

import UserInfo from '@/interfaces/UserInfo'

const memberSchema = new Schema<UserInfo>({
  name: { type: String },
  intro: { type: String },
  github: { type: String },
  instagram: { type: String },
  blog: { type: String },
});

const Member = model<UserInfo>('Member', memberSchema);

export default Member;
