import Vue from 'vue'
import Router from 'vue-router'

//Rafts
import RaftIndex from '@/components/Rafts/Index'
import RaftCreate from '@/components/Rafts/CreateRaft'
import RaftEdit from '@/components/Rafts/EditRaft'
import RaftShow from '@/components/Rafts/ShowRaft'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rafts',
      name: 'rafts',
      component: RaftIndex
    },
    {
      path: '/raft/create',
      name: 'raft-create',
      component: RaftCreate
    },
    {
      path: '/raft/edit/:raftId',
      name: 'raft-edit',
      component: RaftEdit
    },
    {
      path: '/raft/:raftId',
      name: 'raft',
      component: RaftShow
    }
  ]
})
