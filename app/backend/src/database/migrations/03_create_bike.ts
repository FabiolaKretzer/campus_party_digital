import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("bike", (table) => {
    table.increments("id_bike").primary();
    table.boolean("eletric").notNullable().defaultTo(false);
    table.string("code").unique().notNullable();
    table
      .integer("id_company")
      .notNullable()
      .references("id_company")
      .inTable("company");
  });
}
export async function down(knex: Knex) {
  return knex.schema.dropTable("bike");
}
