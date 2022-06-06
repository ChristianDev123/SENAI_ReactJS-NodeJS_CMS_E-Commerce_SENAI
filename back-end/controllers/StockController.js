const db = require('../config/db');
const products = require('../models/Products');
const stocks = require('../models/Stocks');
const images = require("../models/Images");
const updateProject = require('../database/Modify_Product');
const GetAllProducts = require('../database/GetAll');
const DeleteProducts = require('../database/DeleteProduct')
const SearchGet = require('../database/getSearcher');
const multer = require('multer');
const path = multer({dest: 'public/'})


class StockControll {
    
    static async CreateTables(req,res){
        try{
            console.log("chegou aqui")
            products.hasMany(stocks,{foreignKey:'id_product'});
            stocks.belongsTo(products,{foreignKey:'id_product'});
            
            products.hasMany(images,{foreignKey:'id_product'});
            images.belongsTo(products,{foreignKey:'id_product'});
            
            const result = await db.sync({force:true});
            console.log(result)
            res.status(200).send('<h2>Todas Tabelas foram criadas com êxito!<h2>');
        }catch(err){
            console.log(err);
            res.status(500).send('<h2>Erro ao tentar criar as tabelas!</h2>');
        };
    }

    static async SelectAll(req,res){
        GetAllProducts(res);
    }
    
    static async DeleteProduct(req,res){
        const index = req.params.id
        DeleteProducts(index,res)
    }

    static async SearchBarGet(req,res){
        const search = req.query;
        SearchGet(search,res);
    }

    static async UploadImages(req,res){
        path.single('image')(req,res,err=>{
            if(err) res.status(500).json({mensagem:"[ERROR] Falha ao salvar a imagem!"});
            else{
                const image = {
                    id: req.file.filename,
                    url:`/uploads/${image.id}`
                };
                res.status(200).json({error:0,payload: image})
            }
        })
    }
    
}

module.exports = StockControll;