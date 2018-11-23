//Kody Broussard
//November 14th 2018
//FS_js_Tech_Degree_Project_7
//A Static Node.js and Express Site

const express = require('express');
const app = express();


//Using a static route and express.static method to serve static files located in the public folder
app.use('/static', express.static('public'));
//Setting the view engine to PUG
app.set('view engine', 'pug');

//Setting route variables
const homeRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');

app.use(homeRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404;
  console.log(err);
  next(err);
});
 
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000!')
});
