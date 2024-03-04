const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const port = process.env.PORT;

require('./config/mongoose.config'); 

// configure the server to accept and update the cookies
app.use(cookieParser());
// middleware
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

require('./routes/user.routes')(app);
require('./routes/movie.routes')(app);
require('./routes/category.routes')(app);
require('./routes/auth.routes')(app);
require('./routes/admin.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));

