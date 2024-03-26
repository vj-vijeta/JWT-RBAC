"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = require("./auth");
var roles_1 = require("./roles");
var path_1 = __importDefault(require("path"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
var publicPath = path_1.default.join(__dirname, 'public');
// Define route handler for the root URL
app.get('/', function (req, res) {
    // Send the index.html file
    res.sendFile(path_1.default.join(publicPath, 'index.html'));
});
// Mock user (Replace this with your actual authentication mechanism)
var mockUser = {
    id: '1',
    username: 'user',
    role: roles_1.Role.USER,
};
var mockAdmin = {
    id: '1a',
    username: 'admin',
    role: roles_1.Role.ADMIN,
};
// Define route handler for the login endpoint
app.post('/login', function (req, res) {
    // Mock authentication, validate username and password
    var _a = req.body, username = _a.username, password = _a.password;
    // Replace this with your actual authentication logic
    if (username === 'user' && password === '123') {
        var token = (0, auth_1.generateToken)(mockUser);
        console.log('User login successful');
        // Send token as response
        return res.json({ token: token });
    }
    if (username === 'admin' && password === 'admin123') {
        var token = (0, auth_1.generateToken)(mockAdmin);
        console.log('Admin login successful');
        // Send token as response
        return res.json({ token: token });
    }
    // If no valid credentials are found, send an error response
    return res.status(401).json({ message: 'Invalid username or password' });
});
// Other routes and middleware can be defined here...
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=app.js.map