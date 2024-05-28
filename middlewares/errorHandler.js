module.exports = (err, req, res, next) => {
  const statusCode = err.statusCode || 500; // Utilizza lo statusCode specificato nell'errore, altrimenti usa 500
  const errorMessage = err.message || 'Qualcosa è andato storto!'; // Utilizza il messaggio di errore specificato, altrimenti un messaggio di default

  // Invia la risposta in base al formato richiesto
  res.status(statusCode).format({
    html: () => res.send(`${errorMessage}`),
    json: () => res.json({ statusCode, error: errorMessage, stack: err.stack }),
    default: () => res.send(`${statusCode} ${errorMessage}`), // Se il formato richiesto non è supportato, invia una risposta di default
  });
};
