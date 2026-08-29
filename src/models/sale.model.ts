import pool from "../config/db.js";

export async function getSales() {
    const result = await pool.query(`
        SELECT 
        sales.id,
        customers.name,
        sales.total
        FROM sales
        JOIN customers ON sales.customer_id = customers.id
    `);

    return result.rows;
}

export async function getSaleById(id: number) {
    const result = await pool.query(`
        SELECT 
        sales.id,
        customers.name,
        sales.total
        FROM sales
        INNER JOIN customers ON sales.customer_id = customers.id
        WHERE sales.id = $1
    `, [id]);

    return result.rows[0];
}

export async function createSale(customer_id: number, total: number) {
    const result = await pool.query(`
        INSERT INTO sales(customer_id, total)
        VALUES ($1, $2)
        RETURNING *
    `, [customer_id, total]);

    return result.rows[0];
}