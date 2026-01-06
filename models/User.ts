import mongoose,{Schema,Document} from "mongoose";
import { Message, MessageSchema } from "./Message";

export interface User extends Document{
  username:string;
  email:string;
  password:string;
  verifyCode:string;
  verifyCodeExpiry:Date;
  isVerified:boolean;
  isAcceptingMessages:true;
  messages:Message[];
}
const UserSchema:Schema<User>=new Schema({
  username:{
    type:String,
    required:[true,"Username is required"]
  },
  email:{
    type:String,
    required:[true,"Email is required"],
    match: [/.+\@.+\..+/, 'Please use a valid email address'],
  },
  password:{
    type:String,
    required:[true,"password is required"]
  },
  verifyCode:{
    type:String,
    required:[true,"verify code is required"]
  },
  verifyCodeExpiry:{
    type:Date,
    required:[true,"vefiry code expiry is required"]
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessages: {
    type: Boolean,
    default: true,
  },
  messages:[MessageSchema]
})
const UserModel=(mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User',UserSchema)
export default UserModel