import {connectDb} from "@/backend/util/MongoDb";

import Member from "@/backend/schemas/Member";

export async function getMembers() {
  await connectDb();

  return await Member.find().exec();
}
