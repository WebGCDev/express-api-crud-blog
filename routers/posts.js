//Modulo Express
const express = require('express');
//Nuovo router per gestire le route relative ai post
const router = express.Router();
//Importiamo il controller dei post
const postController = require('../Controller/posts');

//chiama la funzione index del controller dei post
router.get('/', postController.index);
//chiama la funzione create del controller dei post
router.get('/create', postController.create);
//chiama la funzione show del controller dei post
router.get('/:slug', postController.show);
//rotta per scaricare immagine del singolo post
router.get('/:slug/download', postController.downloadImage);
//rotta per creare nuovo post
router.post('/', express.urlencoded({ extended: true }), postController.store);

// esportiamo il router per renderlo disponibile in altre parti dell'app
module.exports = router;
