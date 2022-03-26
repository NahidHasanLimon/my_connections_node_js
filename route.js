const router = require('express').Router()
const {
    getAllConnections,createConnection,updateConnection,deleteConnection,findConnectionById

} = require('./connectionController')

router.get('/connections', getAllConnections)
router.post('/create',createConnection )
router.put('/update/:id',updateConnection )
router.delete('/delete/:id',deleteConnection)
router.get('/:id',findConnectionById)


module.exports = router