import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("company", (table) => {
    table.increments("id_company").primary();
    table.boolean("contractor").notNullable().defaultTo(false);
    table.string("name").notNullable();
    table.integer("cnpj").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("whatsapp").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("company");
}
