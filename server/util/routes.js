const Router = require('express');
const notes = require('@controllers/notesController');
const healthCheck = require('@controllers/healthController');

const router = Router();

router.get('/notes', notes.getAll);
router.post('/notes', notes.create);
router.delete('/notes', notes.destroyAll);
router.delete('/notes/:id', notes.destroy);
router.get('/health', healthCheck.checkHealth);

module.exports = router;
