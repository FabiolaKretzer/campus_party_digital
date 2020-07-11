import Knex from "knex";

export async function seed(knex: Knex) {
  knex("rent").insert([
    { id_employee: 1, id_contract: 1 },
    { id_employee: 2, id_contract: 1 },
    { id_employee: 3, id_contract: 1 },
    { id_employee: 4, id_contract: 1 },
  ]);
}
