const mongoose = require('mongoose');
// const dbName = process.env.DB;
// const username = process.env.ATLAS_USERNAME;
// const pw = process.env.ATLAS_PASSWORD;
const URI = process.env.URI;
const uri = URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));