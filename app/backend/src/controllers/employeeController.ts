import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import knex from "../database/connection";

import { VerifyAndSign } from "../functions/verifyNSign";

class UserController {
  async index(req: Request, res: Response) {
    const { email, password } = req.body

    try {
      const user = await knex('employee').select('*').where('email', String(email));

      if (user)
        return res.status(400).send({ error: 'User already exists' })
        
      const Token = await VerifyAndSign(user, password);

      if (!Token) return res.status(401).send();

      return res.json({ Token });
    } catch (err) {
      return res.status(500).send();
    }
  }

  async create(req: Request, res: Response) {
    const { name, email, password, document, id_company, whatsapp } = req.body;

    const hash = await bcrypt.hash(password, 10);
    const pass = hash;

    const data = {
      name,
      email,
      password: pass,
      document,
      whatsapp,
      id_company,
    };

    try {

      const trx = await knex.transaction();

      const newUserId = await trx("employee").insert(data);

      const newUser = await knex("employee").where({ id: newUserId }).first();

      const Token = await VerifyAndSign(newUser, password);

      if (!Token) return res.status(401).send();

      await trx.commit();

      return res.json({ Token });

    }catch (err) {
      console.error(err);
      return res.status(500).send();
    }
  }
}

export default new UserController();
