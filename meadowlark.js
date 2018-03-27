var express=require('express');
var app =express();
app.set('port',process.env.PORT||3000);
// 设置 handlebars 视图引擎
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.static(__dirname+'/public'));


app.get('/',function (req,res) {
  res.render('home');
});
app.get('/about',function (req,res) {
  var randomFortune=
                fortunes[Math.floor(Math.random()*fortunes.length)];//利用长度，求下标
  res.render('about',{fortune:randomFortune});
})

var fortunes=[
  "aaaaaaaaaaaaaa",
  "bbbbbbbbbbbbbb",
  "cccccccccccccc",
  "dddddddddddddd",
  "fffffffffffffff",
];



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
