import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("employee", (table) => {
    table.increments("id_employee").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("whatsapp").notNullable();
    table
      .integer("id_company")
      .notNullable()
      .references("id_company")
      .inTable("company");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("employee");
}
