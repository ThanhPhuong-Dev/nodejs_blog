const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/coursesControllers');

router.get('/create', courseControllers.create);
router.post('/store', courseControllers.store);
router.get('/:id/edit', courseControllers.edit);
router.put('/:id', courseControllers.update);
router.patch('/:id/restored', courseControllers.restored);
router.delete('/:id', courseControllers.delete);
router.delete('/:id/destroy', courseControllers.destroy);
router.get('/:slug', courseControllers.show);

module.exports = router;
