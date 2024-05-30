import {config} from 'dotenv'
import {connect} from "mongoose";

config({path: `./config/.env`});

export async function connectDb() {
  await connect(process.env.MONGODB_URI)
}
