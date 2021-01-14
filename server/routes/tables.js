const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {


const getTables = async () => {
   let bank_name = {};
   let current_limit = {};
   let risk_rating = {};
   let total_assets = {};
 await   models.bank_name.findAll({}).then(data=>{
        bank_name.data = data;
    });
  await  models.current_limit.findAll({}).then(data=>{
     current_limit.data = data;
    });

   await models.risk_rating.findAll({}).then(data=>{
     risk_rating.data = data;
    });

   await models.total_assets.findAll({}).then(data=>{
     total_assets.data = data;
    });

    let bankTables = {
        bank_name,
        current_limit,
        risk_rating,
        total_assets,
    };

    return bankTables;

   };

   getTables()
     .then((tables)=>{
        res.send(JSON.stringify(tables));
     }).catch((error)=>{
         console.log(error);
     });

});

module.exports = router;