const AdminController = require("../controllers/admin.controller");
const Authorization = require("../middleware/authorization");

module.exports = app => {
    app.get("/api/admin/users", AdminController.findAllUsers);
    app.patch("/api/admin/updateRole", AdminController.UpdatingTheRole);
    app.get("/api/admin/movies", AdminController.findAllMovies);
    app.post("/api/admin/movies", AdminController.createNewMovie);
    app.get("/api/admin/movie/:id", AdminController.findOneSingleMovie);
    app.put("/api/admin/movie/:id", AdminController.updateExistingMovie);
    app.delete("/api/admin/movie/:id", AdminController.deleteAnExistingMovie);
}