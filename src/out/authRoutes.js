"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = require("./auth");
var router = express_1.default.Router();
router.post('/login', function (req, res) {
    // Mock authentication, validate username and password
    var _a = req.body, username = _a.username, password = _a.password;
    // Mock user (Replace this with your actual authentication mechanism)
    var mockUser = {
        id: '1',
        username: 'user',
        role: 'USER',
    };
    var mockAdmin = {
        id: '1a',
        username: 'admin',
        role: 'ADMIN',
    };
    // Replace this with your actual authentication logic
    if (username === 'user' && password === '123') {
        var token = (0, auth_1.generateToken)(mockUser);
        // Send token as response
        return res.json({ token: token });
    }
    if (username === 'admin' && password === 'admin123') {
        var token = (0, auth_1.generateToken)(mockAdmin);
        // Send token as response
        return res.json({ token: token });
    }
    else {
        // If no valid credentials are found, send an error response
        return res.status(401).json({ message: 'Invalid username or password' });
    }
});
exports.default = router;
//# sourceMappingURL=authRoutes.js.map