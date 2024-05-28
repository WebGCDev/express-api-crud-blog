module.exports = (req, res) => {
  const statusCode = 404;
  res.status(statusCode).format({
    html: () => res.send('<h1>404 - Pagina non Trovata</h1>'),
    json: () => res.json({ statusCode, error: 'Pagina non Trovata' }),
  });
};
