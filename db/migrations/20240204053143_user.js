/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments("user_id").primary()
        table.string("username")
        table.string("password")
        table.string("email")
        table.string("name")
        table.string("birthday")
        table.string("address")
        table.string("phone_number")
        table.string("created_at")
        table.string("updated_at")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("user")
};
