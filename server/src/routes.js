const RaftsController = require('./controllers/RaftsController')

module.exports = (app) => {
    /* RESFUL Api dor users management */
    // get all rafts
    app.get('/rafts', RaftsController.index)

    // create raft
    app.post('/raft', RaftsController.create)

    // edit raft, suspend, active
    app.put('/raft/:raftId', RaftsController.put)

    // delete raft
    app.delete('/raft/:raftId', RaftsController.remove)

    // get raft by id
    app.get('/raft/:raftId', RaftsController.show)}