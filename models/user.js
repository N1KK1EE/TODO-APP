// const express = require('express');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const morgan = require('morgan');
// const path = require('path');
// const dotenv = require('dotenv');
// const connectMongo = require('connect-mongo');
// const authRoutes = require('../routes/auth');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middlewares
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

// // Session Setup
// app.use(session({
//   secret: process.env.,
//   resave: false,
//   saveUninitialized: true,
//   store: connectMongo.create({
//     mongoUrl: process.env.MONGO_URI
//   })
// }));

// // Routes
// const authRoutes = require('./routes/auth');
// const taskRoutes = require('./routes/task');

// app.use('/', authRoutes);
// app.use('/tasks', taskRoutes);

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.log(err));

// // Global error handling
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).send('Something went wrong!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
