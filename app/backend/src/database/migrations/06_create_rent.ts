import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("rent", (table) => {
    table.increments("id_rent").primary();
    table
      .integer("id_employee")
      .notNullable()
      .references("id_employee")
      .inTable("employee");
    table
      .integer("id_contract")
      .notNullable()
      .references("id_contract")
      .inTable("contract");
    table.timestamps().notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("rent");
}
