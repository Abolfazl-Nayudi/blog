const { Router } = require("express");
const {
  getAllBlogs,
  getOneBlog,
  createNewBlog,
  deleteBlog,
  updateBlog,
} = require("../controllers/blog.controllers");

const router = Router();

/**
 * @URL : /blog/
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get all blogs data
 */
router.get("/", getAllBlogs);

/**
 * @URL : /blog/:id
 * @Method : GET
 * @Status : PUBLIC
 * @Description : get one blog data
 */
router.get("/:id", getOneBlog);

/**
 * @URL : /blog
 * @Method : POST
 * @Status : PUBLIC
 * @Description : create one blog data
 */
router.post("/", createNewBlog);

/**
 * @URL : /blog/:id
 * @Method : DELETE
 * @Status : PUBLIC
 * @Description : delete one blog data
 */
router.delete("/:id", deleteBlog);

/**
 * @URL : /blog/:id
 * @Method : PATCH
 * @Status : PUBLIC
 * @Description : update one blog data
 */
router.patch("/:id", updateBlog);

module.exports = router;
