import {Schema, model, models} from 'mongoose';

import MemberInterface from '@/backend/interface/Member'

const memberSchema = new Schema<MemberInterface>({
  name: { type: String },
  intro: { type: String },
  github: { type: String },
  instagram: { type: String },
  blog: { type: String },
  profile: { type: Boolean },
});

const Member = models.Member || model<Member>('Member', memberSchema);

export default Member;
