const express = require('express');
const morgan = require('morgan');

const blogPostsRouter = require ('./blogPostsRouter');

app.use(morgan('common'));
app.use(express.json());

app.use('/blog-posts', blogPostsRouter);

app.list(process.env.PORT || 8080, () => {
  console.log (`Your app is listening on port ${process.env.PORT || 8080}`);
});
