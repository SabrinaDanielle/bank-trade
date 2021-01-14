const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const models = require('./models');

/* I began this last night, had some tech issues */

const indexRouter = require('./routes/index');
const tablesRouter = require('./routes/tables');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/tables', tablesRouter);

models.sequelize.sync().then(()=>{
    console.log("db and models sync'd");
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server ready ! at ${PORT} !`);

    console.log(process.env.NODE_ENV);
});
