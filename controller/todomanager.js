const Todo = require("../module/todo");

exports.deleteTodo = (req, res) => {
    Todo.remove({title: req.params.title},(err) => {
        if (err) {
            return res.status(500).json({
                message: "Error occur",
                err
            });
        }
        return res.status(200).json({
            message: "Delete successfully"
        });
    })
};

exports.postTodo = (req, res) => {
    let todo = new Todo(req.body);
    todo.save().then((result) => {
        return res.status(200).json({
            message: "Successfully done"
        });
    }).catch((err) => {
        return res.status(500).json(err);
    })
};

exports.getTodo = (req, res) => {
    Todo.find((err, result) => {
        if ( err ) {
            return res.status(500).json({
                message: err
            });
        }
        if (result.length <= 0) {
            return res.status(201).json({
                error:"No todo is there"
            });
        } else {
            return res.status(200).json(result);
        }
    })
};

exports.findTodo = (req, res) => {
    Todo.findOne({title: req.params.title},(err, result) => {
        if (err) {
            return res.status(400).json({
                message: "Problem occur"
            });
        }
        return res.status(200).json({
            result
        });
    })
};