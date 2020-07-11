import Knex from "knex";

export async function seed(knex: Knex) {
  knex("bike").insert([
    { code: "ADE145", id_company: 1 },
    { code: "ADE144", id_company: 1 },
    { code: "ADE143", id_company: 1 },
    { code: "ADE142", id_company: 1 },
    { code: "ADE141", id_company: 1 },
    { code: "ADE140", id_company: 1 },
    { eletric: true, code: "ADE139", id_company: 1 },
    { eletric: true, code: "ADE138", id_company: 1 },
    { eletric: true, code: "ADE137", id_company: 1 },
  ]);
}
