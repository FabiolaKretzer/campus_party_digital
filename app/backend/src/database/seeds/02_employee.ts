import Knex from "knex";

export async function seed(knex: Knex) {
  knex("emlpoyee").insert([
    {
      name: "José",
      email: "ze@gmail.com",
      password: "123456",
      whatsapp: 4898715430,
      id_company: 2,
    },
    {
      name: "Maria",
      email: "maria@gmail.com",
      password: "123456",
      whatsapp: 4898725430,
      id_company: 2,
    },
    {
      name: "Pedro",
      email: "pedrinho@gmail.com",
      password: "123456",
      whatsapp: 4898735430,
      id_company: 2,
    },
    {
      name: "Julia",
      email: "juju@gmail.com",
      password: "123456",
      whatsapp: 4898745430,
      id_company: 2,
    },
    {
      name: "Paulo",
      email: "paulao@gmail.com",
      password: "123456",
      whatsapp: 4898755430,
      id_company: 2,
    },
  ]);
}
