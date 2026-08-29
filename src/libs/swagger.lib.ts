import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        title: "API Rincón del Sabor",
        description: "API para gestionar productos, clientes y ventas",
        version: "1.0.0",
    },
    host: "localhost:3000",
    schemes: ["http"],
};

const outputFile = "swagger-output.json";
const endpointsFiles = ["./src/index.ts"];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
    await import("../index.js");
});