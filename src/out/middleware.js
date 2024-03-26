"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authenticate = void 0;
var auth_1 = require("./auth");
function authenticate(req, res, next) {
    var _a;
    var token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
    }
    var user = (0, auth_1.verifyToken)(token);
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    req.user = user;
    next();
}
exports.authenticate = authenticate;
function authorize(role) {
    return function (req, res, next) {
        // Check if user object exists in the request
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized: Missing user information' });
        }
        var user = req.user;
        if (user.role !== role) {
            return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        }
        next();
    };
}
exports.authorize = authorize;
//# sourceMappingURL=middleware.js.map