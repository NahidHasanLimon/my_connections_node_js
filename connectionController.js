const connection = require('./Connection')

exports.getAllConnections = (req,res) => {
    res.json(  connection.getAll());
}
exports.createConnection = (req,res) => {
    let {name,email,phone} = req.body
    let createContact = connection.create({
        name,email,phone
    })
    res.json(createContact);
}
exports.updateConnection = (req,res) => {
    let {id} = req.params;
    id = parseInt(id)
    let {name,email,phone} = req.body
    let updateContact = connection.update(id,{
        name,email,phone
    })
    res.json(updateContact);
}
exports.deleteConnection = (req,res) => {
    let {id} = req.params;
    id = parseInt(id)
    console.log('id is : '+id)
    let deleteConnection = connection.delete(id)
    res.json(deleteConnection)
}
exports.findConnectionById = (req,res) => {
    let {id} = req.params;
    id = parseInt(id)
    console.log('find by id is : '+id)
    let findConnectionById = connection.findbyId(id)
    res.json(findConnectionById)
}