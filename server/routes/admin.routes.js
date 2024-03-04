const AdminController = require("../controllers/admin.controller");
const Authorization = require("../middleware/authorization");

module.exports = app => {
    app.get("/api/admin/users", Authorization, AdminController.findAllUsers);
    app.get("/api/admin/movies", Authorization, AdminController.findAllMovies);
    app.put("/api/admin/movie/:id", Authorization, AdminController.updateExistingMovie);
    app.delete("/api/admin/movie/:id", Authorization, AdminController.deleteAnExistingMovie);
}