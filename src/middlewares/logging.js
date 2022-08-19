module.exports = function (req, res, next) {
  console.log(req.method);
  console.log(req.socket.remoteAddress);
  console.log(new Date());
  next();
};
