const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const videosRouter = require('./routes/videos');
const {schedule_update_db} = require("./utils/youtube_fetch");
const {MONGODB_URI} = require("./utils/config");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true
    });
  } catch (error) {
    console.error('failed to connect to ' + MONGODB_URI);
    console.error(error);
    process.exit(500);
  }
  schedule_update_db();
};
connectDB();

const app = express();


app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRouter);
app.use('/api/videos', videosRouter);

module.exports = app;
