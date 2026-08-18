const Category = require("../models/Category");

const createCategory = async (req, res)=>{
    try{
        const category =await Category.create(req.body);
        res.status(201).json(category);
    }catch(error){
        res.status(500).json({
      message: error.message,
    });
    }
};

const getCategories = async (req,res)=>{
  try{
    const categories =await  Category.find();
    res.status(200).json(categories);

  }catch(error){
    res.status(500).json({
      message: error.message,
    });
  }
}


const getCategoryById =async (req,res)=>{
  try{
    const category= await Category.findById(req.params.id);
    if(!category){
       return res.status(404).json({
    message: "Category not Found",
  });
}
res.status(200).json(category);
  }catch(error){
    return res.status(404).json({
      message:"Category Not Found",
    });
  }
}

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
};