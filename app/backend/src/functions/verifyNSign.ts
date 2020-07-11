import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export interface iUser {
  id_employee: number;
  name: string;
  email: string;
  password: string;
  document: number;
  whastapp: string;
  id_company: number;
}

export async function VerifyAndSign(User: iUser, password: string) {
  try {
    const isPasswordCorrect = await bcrypt.compare(password, User.password);

    if (!isPasswordCorrect) return false;

    const token = jwt.sign(
      { User_id: User.id_employee },
      String(process.env.APP_SECRET),
      { expiresIn: "4h" }
    );

    return token;
  } catch (err) {
    return false;
  }
}
