import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("catalog", (table) => {
    table.increments("id_catalog").primary();
    table
      .integer("id_contract")
      .notNullable()
      .references("id_contract")
      .inTable("contract");
    table
      .integer("id_bike")
      .notNullable()
      .references("id_bike")
      .inTable("bike");
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("catalog");
}
