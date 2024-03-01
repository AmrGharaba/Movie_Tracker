const UserController = require('../controllers/user.controller');

module.exports = app => {
    app.get('/api/users', UserController.findAllUsers);
    app.post('/api/users/register', UserController.createNewUser);
    app.post("/api/users/login", UserController.LoginUser);
    app.get("/api/users/logout", UserController.LogoutUser);
    app.get("/api/users/loggeduser", UserController.getUserByEmail);
    app.get('/api/users/:id', UserController.findOneSingleUser);
    app.patch('/api/users/:id', UserController.updateExistingUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);


}
