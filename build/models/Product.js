"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: [String], required: false, default: [] },
    price: { type: String, required: true },
    status: { type: String, default: "ACTIVE" },
    createdAt: { type: String, default: "" + Date.now() },
});
exports.Product = (0, mongoose_1.model)("Product", ProductSchema);
//# sourceMappingURL=Product.js.map