import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("contract", (table) => {
    table.increments("id_contract").primary();
    table
      .integer("id_contractor")
      .notNullable()
      .references("id_company")
      .inTable("company");
    table
      .integer("id_hired")
      .notNullable()
      .references("id_company")
      .inTable("company");
    table.timestamps();
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("contract");
}
