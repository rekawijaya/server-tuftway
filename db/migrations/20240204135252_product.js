/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("product", (table) => {
        table.increments("product_id").primary()
        table.string("product_name")
        table.string("file")
        table.integer("price")
        table.string("description")
        table.string("created_at")
        table.string("updated_at")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("product")
};
