import express from 'express';
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  commentPost,
} from './../controllers/postController.js';
import { verifyToken } from './../controllers/authController.js';

const router = express.Router();

//READ
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

//UPDATE
router.patch('/:id/like', verifyToken, likePost);
