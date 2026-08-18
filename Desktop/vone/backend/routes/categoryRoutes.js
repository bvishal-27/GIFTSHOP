const express=require("express");

const {createCategory,
    getCategories,
    getCategoryById,
}= require("../controllers/categoryController");
const router = express.Router();


router.post("/", createCategory);
router.get("/",getCategories);
router.get("/:id",getCategoryById)

module.exports = router;