const router = require('express').Router();
const {deleteTodo,getTodo,postTodo,findTodo} = require("../controller/todomanager");

router.get('/', getTodo);

router.post('/', postTodo);

router.delete('/:title', deleteTodo);

router.get("/search/:title", findTodo);

module.exports = router;