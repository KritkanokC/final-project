<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <div class="form-field border border-danger rounded-3 p-3 my-5">
                <div class="text-center">
                    <h3>ดูแพ</h3>
                </div>
                <hr>
                <div class="row mb-3 text-start">
                    <div class="col">
                        <label for="raftname" class="form-label">ชื่อแพ</label>
                        <span class="form-control rounded-5">{{ raft.name }}</span>
                    </div>
                    <div class="col">
                        <label for="rafttype" class="form-label">ชนิดของแพ</label>
                        <span class="form-control rounded-5">{{ raft.type }}</span>
                    </div>
                    <div class="col">
                        <label for="meal" class="form-label">อาหาร/มื้อ</label>
                        <span class="form-control rounded-5">{{ raft.meal }} มื้อ</span>
                    </div>
                </div>
                <div class="row mb-3 text-start">
                    <div class="col">
                        <label for="price" class="form-label">ราคา/1 คืน</label>
                        <span class="form-control rounded-5">{{ raft.price }} บาท/1 คืน</span>
                    </div>
                    <div class="col">
                        <label for="toilet" class="form-label">จำนวนห้องน้ำ</label>
                        <span class="form-control rounded-5">{{ raft.toilet }} ห้อง</span>
                    </div>
                    <div class="col">
                        <label for="kitchen" class="form-label">จำนวนห้องครัว</label>
                        <span class="form-control rounded-5">{{ raft.kitchen }} ห้อง</span>
                    </div>
                </div>
                <div class="row mb-3 text-start">
                    <div class="col">
                        <label for="people" class="form-label">จำนวนคน</label>
                        <span class="form-control rounded-5">{{ raft.people }} คน</span>
                    </div>
                    <div class="col">
                        <label for="bedroom" class="form-label">จำนวนห้องนอน</label>
                        <span class="form-control rounded-5">{{ raft.bedroom }} ห้อง</span>
                    </div>
                    <div class="col">
                        <label for="height" class="form-label">ความสูง/ชั้น</label>
                        <span class="form-control rounded-5">{{ raft.height }} ชั้น</span>
                    </div>
                </div>
                <div class="p-3">
                    <a class="btn btn-primary" @click="$router.back()">ย้อนกลับ</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RaftsService from '@/services/RaftsService';

export default {
    data() {
        return {
            raft: null
        }
    },
    async created() {
        try {
            let raftId = this.$route.params.raftId
            this.raft = (await RaftsService.show(raftId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }

}
</script>
<style scoped></style>