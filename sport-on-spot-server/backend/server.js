const path = require('path');
const express = require('express');
var cors = require('cors')
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware.js');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/sports', require('./routes/sportRoutes'));
app.use('/api/teams', require('./routes/teamRoutes'));
app.use('/api/match', require('./routes/matchRoutes'));
app.use('/api/lobby', require('./routes/lobbyRoutes'));

// Serve frontend
/* if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(
      path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
} */

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
