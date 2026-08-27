CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price > 0),
    cost NUMERIC(10, 2) DEFAULT 0 CHECK (cost >= 0),
    stock INTEGER DEFAULT 0 CHECK (stock >= 0)
);

INSERT INTO products (name, description, price, cost, stock)
VALUES
('Agua fresca', 'Agua de Jamaica natural', 25.00, 10.00, 50),
('Hamburguesa clásica', 'Hamburguesa con carne, lechuga y tomate', 180.00, 90.00, 20),
('Tacos de carne', 'Tres tacos de carne con verduras', 150.00, 70.00, 30),
('Ensalada César', 'Ensalada con pollo, lechuga y aderezo César', 120.00, 55.00, 15),
('Limonada', 'Limonada natural con hielo', 40.00, 15.00, 40);

SELECT * FROM products