import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('rafts')
    },
    show (raftId) {
        return Api().get('raft/' + raftId)
    },
    post (raft) {
        return Api().post('raft/', raft)
    },
    put (raft) {
        return Api().put('raft/' + raft.id, raft)
    },
    delete (raft) {
        return Api().delete('raft/' + raft.id, raft)
    },
}