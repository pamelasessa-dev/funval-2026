import pool from "../config/db.js";

// Obtener todos los productos
export const getProducts = async () => {
  const query = "SELECT * FROM products ORDER BY id ASC;";

  const { rows } = await pool.query(query);

  return rows;
};

// Obtener un producto por ID
export const getProductById = async (id: number) => {
  const query = "SELECT * FROM products WHERE id = $1;";

  const { rows } = await pool.query(query, [id]);

  return rows[0] ?? null;
};

// Crear producto
export const createProduct = async (data: {
  name: string;
  description: string;
  price: number;
  cost?: number;
  stock?: number;
}) => {
  const query = `
    INSERT INTO products
    (name, description, price, cost, stock)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [
    data.name,
    data.description,
    data.price,
    data.cost ?? 0,
    data.stock ?? 0,
  ]);

  return rows[0];
};

// Actualizar producto
export const updateProduct = async (
  id: number,
  data: {
    name: string;
    description: string;
    price: number;
    cost?: number;
    stock?: number;
  }
) => {
  const query = `
    UPDATE products
    SET
      name = $1,
      description = $2,
      price = $3,
      cost = $4,
      stock = $5
    WHERE id = $6
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [
    data.name,
    data.description,
    data.price,
    data.cost ?? 0,
    data.stock ?? 0,
    id,
  ]);

  return rows[0] ?? null;
};

// Eliminar producto
export const deleteProduct = async (id: number) => {
  const query = `
    DELETE FROM products
    WHERE id = $1
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [id]);

  return rows[0] ?? null;
};