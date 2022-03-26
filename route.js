const router = require('express').Router()
const {
    getAllConnections,createConnection,updateConnection,deleteConnection,findConnectionById

} = require('./connectionController')

router.get('/', getAllConnections)
router.post('/create',createConnection )
router.put('/update/:id',updateConnection )
router.delete('/delete/:id',deleteConnection)
router.get('/find/:id',findConnectionById)


module.exports = router