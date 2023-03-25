const express = require("express"); 
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @ route GET && POST - /post/
/**
 * .get request we getAlPosts
 * When we make a post request, we want to createNewPost
 */
// router.route("/".get(postControllers.getAllPosts).post(postControllers.createNewPost));

router
    .route("/")
    .get(postControllers.getAllPosts)
    .post(postControllers.createNewPost);

// get request - get a post by their id
router.route("/:id").get(postControllers.getPostById)

module.exports = router; 

