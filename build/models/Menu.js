"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const mongoose_1 = require("mongoose");
const MenuSchema = new mongoose_1.Schema({
    product: { type: [String] },
});
exports.Menu = (0, mongoose_1.model)("Menu", MenuSchema);
//# sourceMappingURL=Menu.js.map