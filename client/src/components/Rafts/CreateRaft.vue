<template>
    <div class="container">
        <div class="d-flex justify-content-center">
            <form class="form-field border border-danger rounded-3 p-3 my-5" v-on:submit.prevent="createRaft">
                <div class="text-center">
                    <h3>สร้างแพ</h3>
                </div>
                <hr>
                <div class="row mb-3 text-start">
                    <div class="col">
                        <label for="raftname" class="form-label">ชื่อแพ</label>
                        <input type="text" class="form-control rounded-5" v-model="raft.name" placeholder="กรุณากรอกชื่อแพ"
                            required>
                    </div>
                    <div class="col">
                        <label for="rafttype" class="form-label">ชนิดของแพ</label>
                        <input type="text" class="form-control rounded-5" v-model="raft.type"
                            placeholder="กรุณากรอกชนิดของแพ" required>
                    </div>
                    <div class="col">
                        <label for="meal" class="form-label">อาหาร/มื้อ</label>
                        <input type="number" class="form-control rounded-5" v-model="raft.meal"
                            placeholder="กรุณากรอกจำนวนมื้ออาหาร" required>
                    </div>
                </div>
                <div class="row mb-3 text-start">
                    <div class="col">
                        <label for="price" class="form-label">ราคา/1 คืน</label>
                        <input type="number" class="form-control rounded-5" v-model="raft.price"
                            placeholder="กรุณากรอกราคาของแพ" required>
                    </div>
                    <div class="col">
                        <label for="toilet" class="form-label">จำนวนห้องน้ำ</label>
                        <input type="number" class="form-control rounded-5" v-model="raft.toilet"
                            placeholder="กรุณากรอกจำนวนห้องน้ำ" required>
                    </div>
                    <div class="col">
                        <label for="kitchen" class="form-label">จำนวนห้องครัว</label>
                        <input type="number" class="form-control rounded-5" v-model="raft.kitchen"
                            placeholder="กรุณากรอกจำนวนห้องครัว" required>
                    </div>
                </div>
                <div class="row mb-3 text-start">
                    <div class="col">
                        <label for="people" class="form-label">จำนวนคน</label>
                        <input type="number" class="form-control rounded-5" v-model="raft.people"
                            placeholder="กรุณากรอกจำนวนคน" required>
                    </div>
                    <div class="col">
                        <label for="bedroom" class="form-label">จำนวนห้องนอน</label>
                        <input type="number" class="form-control rounded-5" v-model="raft.bedroom"
                            placeholder="กรุณากรอกจำนวนห้องนอน" required>
                    </div>
                    <div class="col">
                        <label for="height" class="form-label">ความสูง/ชั้น</label>
                        <input type="number" class="form-control rounded-5" v-model="raft.height"
                            placeholder="กรุณากรอกจำนวนชั้น" required>
                    </div>
                </div>
                <div class="p-3">
                    <button type="submit" class="btn btn-success">สร้างแพ</button>
                    <a class="btn btn-primary" @click="$router.back()">ย้อนกลับ</a>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import RaftsService from '@/services/RaftsService'

export default {
    data() {
        return {
            raft: {
                name: '',
                type: '',
                meal: '',
                price: '',
                toilet: '',
                kitchen: '',
                people: '',
                bedroom: '',
                height: ''
            }
        }
    },
    methods: {
        async createRaft() {
            try {
                await RaftsService.post(this.raft)
                this.$router.push({
                    name: 'rafts'
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped></style>