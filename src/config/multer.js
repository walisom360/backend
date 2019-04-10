const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

//padroniza a escrita dos caminhos dentro do node

//mudar o nome dos arquivos para nao sobrescrever
module.exports = {
    dest: path.resolve(__dirname, '..' , '..', 'tmp'),
    storage: multer.diskStorage({
        destination: (req , file , cb) => {
           cb(null , path.resolve(__dirname,'..' , '..', 'tmp')) 
        },
        filename:(req , file , cb) => {//aqui da o nome unico gera hashs unicos
           crypto.randomBytes(16 ,(err ,hash)=>{
             if (err) cb(err);

             file.key = `${hash.toString('hex')}-${file.originalname}`;
             
             cb(null ,file.key);

           })
        }
    })
}