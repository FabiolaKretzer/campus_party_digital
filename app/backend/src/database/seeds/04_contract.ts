import Knex from "knex";

export async function seed(knex: Knex) {
  knex("contract").insert([{ id_cotractor: 2, id_hired: 1 }]);
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("contract");
}
