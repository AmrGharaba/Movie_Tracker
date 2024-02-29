const Category = require('../models/category.models');

module.exports.findAllCategories = (req, res) => {
    Category.find().collation({ locale: 'en', strength: 2 }).sort({ name: 1 })
        .then((allCategories) => {
            res.json({ Categories: allCategories })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleCategory = (req, res) => {
    Category.findOne({ _id: req.params.id })
        .then(oneSingleCategory => {
            res.json({ Category: oneSingleCategory })
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.createNewCategory = (req, res) => {
    Category.create(req.body)
        .then(newlyCreatedCategory => {
            res.json({ Category: newlyCreatedCategory })
        })
        .catch(err => res.status(400).json(err))
}

module.exports.updateExistingCategory = (req, res) => {
    Category.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedCategory => {
            res.json({ Category: updatedCategory })
        })
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingCategory = (req, res) => {
    Category.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });
}
