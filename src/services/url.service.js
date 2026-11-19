import pool from "../config/db.js";

export async function saveUrl(shortCode, originalUrl) {
    const query = `
        INSERT INTO urls (short_code, original_url)
        VALUES ($1, $2)
        RETURNING *;
    `;

    const values = [shortCode, originalUrl];

    const result = await pool.query(query, values);

    return result.rows[0];
}