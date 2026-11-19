import pool from "../config/db.js";

export async function saveUrl(shortCode, originalUrl) {
    const query = `
        INSERT INTO urls (short_code, original_url)
        VALUES ($1, $2) 
        RETURNING *;
    `;
// $1 receives shortCode , $2 receives originalUrl this is called parameterized query. It prevents SQL injection by keeping user provided data seperate from SQL instructions so, if we directly put ${shortCode} and ${originalUrl} instead of $1 and $2 and the original url is some malicious SQL script then it'll be executed but since we are using parameterized query it'll be trreated as data 
    const values = [shortCode, originalUrl];

    const result = await pool.query(query, values);

    return result.rows[0];
}
// now we have saved the url mapping in db so next we will redirect to the original website
export async function findUrlByShortCode(shortCode) {
    const query = `
        SELECT original_url
        FROM urls
        WHERE short_code = $1;
    `;

    const result = await pool.query(query, [shortCode]);

    return result.rows[0];
}