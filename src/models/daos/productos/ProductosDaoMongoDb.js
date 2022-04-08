const ContenedorMongoDB = require("../../contenedores/ContenedorMongoDb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

class ProductosDaoMongoDb extends ContenedorMongoDB {
  constructor() {
    super(
      "productos",
      new Schema({
        timestamp: { type: String },
        nombre: { type: String },
        descripcion: { type: String },
        categoria: { type: String },
        thumbail: { type: String },
        precio: { type: Number },
        stock: { type: Number },
      })
    );
  }
  async getByCategory(category) {
    try {
      let docs = await super.getAll();
      const ptosCategory = docs.filter((n) => n.categoria === category);
      return ptosCategory;
    } catch (error) {
      loggerError.error(error);
      throw Error("Error en getByCategory");
    }
  }
}

module.exports = ProductosDaoMongoDb;
