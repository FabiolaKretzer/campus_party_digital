
exports.up = knex => knex.schema.createTable('users', function(table) {
    table.increments('id')
    table.text('username'.unique().notNullable())
})

exports.down = knex => knex.schema.dropTable('users')
