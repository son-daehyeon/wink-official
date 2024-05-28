import {connectDb} from "@/util/MongoDb";

import Member from "@/schemas/Member";

export async function getMembers() {
  await connectDb();

  return await Member.find().exec();
}
