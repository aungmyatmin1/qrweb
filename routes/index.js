var express = require('express');
var router = express.Router();
var qr = require('qr-image')
var bodyParser = require('body-parser')
var fs = require('fs')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'QR Image'});
});

router.post('/submit', (req,res)=>{
  let reqWeb = req.body.reqWeb;
  let saveFileName =  req.body.saveFileName;


  if(!reqWeb || !saveFileName){
  
    res.render('index', {title : 'QR Image'})
    
  } else { 
    
    var qr_svg = qr.image(reqWeb, { type: 'png' });
    qr_svg.pipe(require('fs').createWriteStream(`./qrimage/`+ saveFileName+ `.png`));
 
    res.redirect('/')
    
    }

})

module.exports = router;
