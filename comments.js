// Create Web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const commentRouter = require('./src/routes/commentRouter');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', commentRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
