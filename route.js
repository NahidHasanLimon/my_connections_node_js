const router = require('express').Router()
const {
    getAllConnections,createConnection,deleteConnection

} = require('./connectionController')

router.get('/connections', getAllConnections)
router.post('/create',createConnection )
router.delete('/delete/:id',deleteConnection)
router.delete('/:id',findConnectionById)
// router.get('/profile',profile )
// router.get('/:userID', singleUser)
// router.post('/create', createUser)
// router.get('/users', getAllUser )

module.exports = router