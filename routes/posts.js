const express = require("express");
const router = express.Router();
const LoginCheck = require("../middlewares/login-check");
const ControllerPost = require("../controller/posts");

//전체 조회
router.get("/", ControllerPost.ShowPost);
//게시글생성
router.post("/create", LoginCheck, ControllerPost.CreatePost);
//상세조회
router.get("/views/:id", ControllerPost.DetailPost);
//게시글수정
router.patch("/update/:id", ControllerPost.UpdatePost);
//게시글 삭제
router.delete("/delete/:id", ControllerPost.DeletePost);

module.exports = router;
