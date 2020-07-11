import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import knex from "../database/connection";

import { VerifyAndSign } from "../functions/verifyNSign";

class UserController {
  async index(req: Request, res: Response) {
    const { page = 1, limit = 5, id_company } = req.query;

    try {
      const employees = await knex("employee")
        .where({ id_company })
        .limit(Number(limit))
        .offset((Number(page) - 1) * Number(limit));
      return res.json(employees);
    } catch (err) {
      return res.status(500).send();
    }
  }

  async create(req: Request, res: Response) {
    const { name, email, password, document, id_company, whastapp } = req.body;

    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
    const pass = hash;
    const data = {
      id_user: 1, //retirar
      name,
      email,
      password: pass,
      document,
      whastapp,
      id_company,
    };
    return res.json(data);
    /*
    try {
     const isEmailValid =
        (await knex("users").where({ email }).first()) === undefined;

      if (!isEmailValid) return res.status(400).send("Email já está sendo");

      if (!/@/.test(email)) return res.status(400).send("Email inválido");

      const hash = await bcrypt.hash(password, 10);
      const pass = hash;
      const data = {
        id_user: 1, //retirar
        name,
        email,
        password: pass,
        document,
        whastapp,
        id_company,
      };
    
       const newUserId = await knex("users").insert(data);

       const newUser = await knex("users").where({ id: newUserId }).first();

      const Token = await VerifyAndSign(newUser, password);

     
      if (!Token) return res.status(401).send();

      return res.json({ Token });

      return res.json(data);
    } catch (err) {
      return res.status(500).send();
    }*/
  }
}

export default new UserController();
