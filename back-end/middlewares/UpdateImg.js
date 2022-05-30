const multer = require('multer')

module.exports = (
    multer({
        storage:multer.diskStorage({
            destination: (req,file,cb) =>{
                cb(null,'./public')
            },
            filename: (req,file,cb) =>{
                cb(null, Date.now().toString() + "_" + file.originalname)
            }
        }),
        fileFilter: (req,file,cb) =>{
            const ExtensionImg = ['image/png','image/jpg','image/jpeg'].find(formatAcept =>formatAcept == file.mimetype)
            if(ExtensionImg){
                return cb(null, true)
            }
            return cb(null,false)
        }
    })
)