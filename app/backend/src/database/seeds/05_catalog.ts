import Knex from "knex";

export async function seed(knex: Knex) {
  knex("catalog").insert([
    { id_contract: 1, id_bike: 1 },
    { id_contract: 1, id_bike: 2 },
    { id_contract: 1, id_bike: 3 },
    { id_contract: 1, id_bike: 9 },
    { id_contract: 1, id_bike: 8 },
    { id_contract: 1, id_bike: 5 },
  ]);
}
