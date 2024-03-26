"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var roles_1 = require("./roles");
var middleware_1 = require("./middleware");
var router = express_1.default.Router();
router.get('/admin', middleware_1.authenticate, (0, middleware_1.authorize)(roles_1.Role.ADMIN), function (req, res) {
    // Handle admin dashboard route logic here
    res.json({ message: 'Welcome Admin!' });
});
exports.default = router;
//# sourceMappingURL=adminRoutes.js.map