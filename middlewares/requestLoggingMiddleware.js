const requestLoggingMiddleware = (req, res, next) => {
  const { method, baseUrl, url } = req;
  console.log(`New request: ${method} | ${baseUrl}${url}`);
  next();
};

module.exports = requestLoggingMiddleware;
