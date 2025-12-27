import {z} from "zod"
export const usernameValidation=z
.string()
.min(2,"Username must be at least 2 characters. ")
.max(20,"Username must not be longer than 20 characters")

export const signUpSchema=z.object({
  username:usernameValidation,
  email:z.string().email({message:"Invalid email address. "}),
  password:z.string().min(6,{message:"Passwod must be contain atleast 6 characters. "})
})