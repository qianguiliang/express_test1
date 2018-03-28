var fortuneCookies=[
  "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
  "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
  "tttttttttttttttttttttttttttttttt",
];
exports.getFortune=function () {
  var idx=Math.floor(Math.random()*fortuneCookies.length);
  return fortuneCookies[idx];
};
