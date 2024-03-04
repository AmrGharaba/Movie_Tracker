const AuthController = require("../controllers/auth.controller");

module.exports = app => {
    app.post('/api/register', AuthController.register);
    app.post("/api/register_admin", AuthController.registerAdmin);
    app.post("/api/login", AuthController.login);
    app.post("/api/admin_login", AuthController.adminLogin);
    app.post("/api/logout", AuthController.logout);
    app.post("/api/refresh_token", AuthController.generateAccessToken);
}