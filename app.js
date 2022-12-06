const express = require('express');
const router = require('./routes/pin_routes');
const app = express();
require('./utils/db').connect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', router);
app.listen(process.env.PORT, () => console.log(`Server Connected to port ${process.env.PORT}`))