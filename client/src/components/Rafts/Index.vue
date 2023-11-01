<template>
    <div class="container">
        <h3 class="fw-bold my-3">จำนวนของแพ: {{ rafts.length }} แพ</h3>
        <div class="d-flex justify-content-end my-3">
            <button class="btn btn-secondary" v-on:click="navigateTo('/raft/create')">สร้างแพ</button>
        </div>
        <div class="d-flex justify-content-center">
            <table class="table table-bordered table-danger table-striped w-75">
                <thead>
                    <tr>
                        <th scope="row" style="width: 50px;">ID</th>
                        <th scope="row">แพในบ่อตกปลา</th>
                        <th scope="row" style="width: 240px;"></th>
                    </tr>
                </thead>
                <tbody v-for="raft in rafts" v-bind:key="raft.id">
                    <tr>
                        <td>{{ raft.id }}</td>
                        <td>{{ raft.name }}</td>
                        <td>
                            <button class="btn btn-success" v-on:click="navigateTo('/raft/' + raft.id)">Read</button>
                            <button class="btn btn-primary" v-on:click="navigateTo('/raft/edit/' + raft.id)">Edit</button>
                            <button class="btn btn-danger" v-on:click="deleteRaft(raft)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import RaftsService from '@/services/RaftsService';
export default {
    data() {
        return {
            rafts: []
        }
    },
    async created() {
        this.rafts = (await RaftsService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteRaft(raft) {
            let result = confirm("What to delete?")
            if (result) {
                try {
                    await RaftsService.delete(raft)
                    this.refreshData()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.rafts = (await RaftsService.index()).data
        }
    }
}
</script>
<style scoped></style>