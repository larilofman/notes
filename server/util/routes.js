const Router = require('express');
const notes = require('@controllers/notesController');

const router = Router();

router.get('/notes', notes.getAll);
router.post('/notes', notes.create);
router.delete('/notes', notes.destroyAll);
router.delete('/notes/:id', notes.destroy);

module.exports = router;
