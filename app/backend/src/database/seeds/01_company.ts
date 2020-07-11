import Knex from "knex";

export async function seed(knex: Knex) {
  knex("company").insert([
    {
      contractor: true,
      name: "tenho bike",
      cnpj: 14578715281234,
      email: "tenhobikes@bike.com",
      password: "123456",
      whatsapp: 48998765432,
    },
    {
      name: "Empresa verde",
      cnpj: 12345678912345,
      email: "empresa@verde.com",
      password: "123456",
      whatsapp: 48998765431,
    },
    ,
  ]);
}
