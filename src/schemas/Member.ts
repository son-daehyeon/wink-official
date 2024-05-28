import {Schema, model, models} from 'mongoose';

interface Member {
  name: string;
  intro: string;
  github: string;
  instagram: string;
  blog: string;
  profile: boolean;
}

const memberSchema = new Schema<Member>({
  name: { type: String },
  intro: { type: String },
  github: { type: String },
  instagram: { type: String },
  blog: { type: String },
  profile: { type: Boolean },
});

const Member = models.Member || model<Member>('Member', memberSchema);

export default Member;
