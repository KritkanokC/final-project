const { Raft } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const rafts = await Raft.findAll()
            res.send(rafts)
        } catch (error) {
            res.status(500).send({
                error: 'The rafts information was incorrect'
            })
        }
    },

    async create(req, res) {
        try {
            const raft = await Raft.create(req.body)
            res.send(raft.toJSON())
        } catch (error) {
            res.status(500).send({
                error: 'Create raft incorrect'
            })
        }
    },

    async put(req, res) {
        try {
            await Raft.update(req.body, {
                where: {
                    id: req.params.raftId
                }
            })
            res.send(req.body)
        } catch (error) {
            res.status(500).send({
                error: 'Update raft incorrect'
            })
        }
    },

    async remove(req, res) {
        try {
            const raft = await Raft.findOne({
                where: {
                    id: req.params.raftId
                }
            })

            if (!raft) {
                return res.status(403).send({
                    error: 'The raft information was incorrect'
                })
            }

            await raft.destroy()
            res.send(raft)
        } catch (error) {
            res.status(500).send({
                error: 'The raft information was incorrect'
            })
        }
    },

    async show(req, res) {
        try {
            const raft = await Raft.findByPk(req.params.raftId)
            res.send(raft)
        } catch (error) {
            res.status(500).send({
                error: 'The raft information was incorrect'
            })
        }
    }
}