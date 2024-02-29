const CategoryController = require('../controllers/category.controller');

module.exports = app => {
    app.get('/api/categories', CategoryController.findAllCategories);
    app.get('/api/categories/:id', CategoryController.findOneSingleCategory);
    app.post('/api/categories', CategoryController.createNewCategory);
    app.patch('/api/categories/:id', CategoryController.updateExistingCategory);
    app.delete('/api/categories/:id', CategoryController.deleteAnExistingCategory);


}
