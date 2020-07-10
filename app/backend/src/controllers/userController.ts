import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import knex from "../database/connection";

import { VerifyAndSign } from "../functions/verifyNSign";

class UserController {
  async index(req: Request, res: Response) {
    const { page = 1, limit = 5 } = req.query;

    // try {
    //     const users = await knex("users")
    //         .limit(Number(limit))
    //         .offset((Number(page) - 1) * Number(limit))
    //     return res.json(users)
    // } catch (err) {
    //     return res.status(500).send()
    // }
  }

  async create(req: Request, res: Response) {
    const { name, email, password, document, photo, idType } = req.body;

    const data = {
      name,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkTHaPjZwomBcDeqrhUwUQ81ZuR1DgBUWkew&usqp=CAU",
      email,
      password,
      pontos: 0,
      nozes: 20,
    };

    try {
      const isEmailValid =
        (await knex("users").where({ email }).first()) === undefined;

      if (!isEmailValid) return res.status(400).send("Email já está sendo");

      if (!/@/.test(email)) return res.status(400).send("Email inválido");

      const hash = await bcrypt.hash(password, 10);
      data.password = hash;

      const newUserId = await knex("users").insert(data);

      const newUser = await knex("users").where({ id: newUserId }).first();

      const Token = await VerifyAndSign(newUser, password);

      if (!Token) return res.status(401).send();

      return res.json({ Token });
    } catch (err) {
      return res.status(500).send();
    }
  }
}

export default new UserController();
