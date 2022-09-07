import express from "express";
import {allPosts, newPost, editPost, deletePost} from "../controllers/posts.js";


const router =express.Router();

router.get('/', allPosts);
router.post('/',newPost);
router.patch('/:id/edit', editPost);
router.delete('/:id',deletePost);


export default router ;
