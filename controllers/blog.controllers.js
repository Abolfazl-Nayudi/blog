const Blog = require('../models/blogs.model');

const getAllBlogs = async (req, res) => {
  try {
    const users = await Blog.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getOneBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const user = await Blog.findOne({ _id });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createNewBlog = async (req, res) => {
  try {
    const newUserData = req.body;
    const newUser = await Blog.create(newUserData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const deletedUser = await Blog.findOneAndDelete({ _id });
    res.status(202).json(deletedUser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const newUserData = req.body;
    const updatedUser = Blog.findOneAndUpdate(_id, newUserData, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllBlogs,
  getOneBlog,
  createNewBlog,
  deleteBlog,
  updateBlog,
};
