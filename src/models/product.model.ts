import pool from "../config/db.js";

// Obtener todos los productos
export const getProducts = async () => {
  const query = "SELECT * FROM menu_producto ORDER BY id_producto ASC;";

  const { rows } = await pool.query(query);

  return rows;
};

// Obtener un producto por ID
export const getProductById = async (id: number) => {
  const query = "SELECT * FROM menu_producto WHERE id_producto = $1;";
  const { rows } = await pool.query(query, [id]);
  return rows[0] ?? null;
};

// Crear producto
export const createProduct = async (data: {
  nombre: string;
  categoria: string;
  precio: number;
  disponible: boolean;
}) => {
  const query = `
    INSERT INTO menu_producto 
    (nombre, categoria, precio, disponible)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [
    data.nombre,
    data.categoria,
    data.precio,
    data.disponible,
  ]);

  return rows[0];
};

// Actualizar producto
export const updateProduct = async (
  id: number,
  data: {
    nombre: string;
    categoria: string;
    precio: number;
    disponible: boolean;
  }
) => {
  const query = `
    UPDATE menu_producto
    SET
      nombre = $1,
      categoria = $2,
      precio = $3,
      disponible = $4
    WHERE id_producto = $5
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [
    data.nombre,
    data.categoria,
    data.precio,
    data.disponible,
    id,
  ]);

  return rows[0] ?? null;
};

// Eliminar producto
export const deleteProduct = async (id: number) => {
  const query = `
    DELETE FROM menu_producto
    WHERE id_producto = $1
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [id]);

  return rows[0] ?? null;
};