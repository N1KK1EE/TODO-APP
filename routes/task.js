const express = require('express');
const Task = require('../models/task');
const router = express.Router();

// Middleware for checking authentication
const isAuthenticated = (req, res, next) => {
  if (!req.cookies.token) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.redirect('/login');
  }
};

// List tasks (filter by pending/completed)
router.get('/', isAuthenticated, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.render('dashboard', { tasks });
});

// Create task
router.post('/', isAuthenticated, async (req, res) => {
  const { title, description } = req.body;

  const task = new Task({ title, description, user: req.user.id });
  await task.save();
  res.redirect('/tasks');
});

// Update task status
router.post('/update/:id', isAuthenticated, async (req, res) => {
  const { status } = req.body;

  await Task.findByIdAndUpdate(req.params.id, { status });
  res.redirect('/tasks');
});

module.exports = router;
