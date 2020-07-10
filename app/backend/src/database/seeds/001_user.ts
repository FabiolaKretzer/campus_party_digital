import Knex from "knex";

export async function seed(knex: Knex) {
  knex("user").insert([
    { name: "rowValue1", document: "01234567891" },
    { name: "rowValue2", document: "01234567892" },
    { name: "rowValue3", document: "01234567891234}" },
  ]);
}
