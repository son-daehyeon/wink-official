import {connect} from "mongoose";

export async function connectDb() {
  await connect(process.env.MONGODB_URI)
}
