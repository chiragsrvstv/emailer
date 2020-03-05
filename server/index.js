const express = require("express");
require('./services/passport');

const app = express();


require('./routes/authRoutes')(app); //alternate method



const PORT = process.env.PORT || 5000;
app.listen(PORT);
