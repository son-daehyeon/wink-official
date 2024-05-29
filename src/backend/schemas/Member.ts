import {Schema, model} from 'mongoose';

import MemberInterface from '@/backend/interface/Member'

const memberSchema = new Schema<MemberInterface>({
  name: { type: String },
  intro: { type: String },
  github: { type: String },
  instagram: { type: String },
  blog: { type: String },
  profile: { type: Boolean },
});

const Member = model<MemberInterface>('Member', memberSchema);

export default Member;
