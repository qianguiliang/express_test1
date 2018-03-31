var express=require('express');
var app =express();
var fortune=require('./lib/fortune.js')

app.set('port',process.env.PORT||3000);
// 设置 handlebars 视图引擎
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(function (req,res,next) {
  res.locals.showTests=app.get("env")!=='production' && req.query.test==='1';
  next();
});
app.use(express.static(__dirname+'/public'));


//路由放在这里
app.get('/',function (req,res) {
  res.render('home');
});
app.get('/about',function (req,res) {

  res.render('about',{for:fortune.getFortune(),
  pageTestScript:'/qa/tests-about.js'
  });
});


//404 page
app.use(function (req,res) {
        res.status(404);
        res.render('404');
});
//500page
app.use(function (req,res) {
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'),function () {
  console.log('Express started on http://localhost:'+app.get('port')+'; Ctrl-C to terminate.');
})
