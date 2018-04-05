<template>
    <div class="dialog-container" v-show="show">
        <div class="mask"></div>
        <div class="dialog-wrapper">
            <p class="tips">修改{{this.setkey}}为：</p>
            <input type="text" v-model="this.value">
            <div class="dialog-footer">
                <button class="submit" @click="submit"> 确定</button>
                <button class="cancel" @click="closeDialog">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false
        }
    },
    props: ['setkey', 'value'],
    methods: {
        openDialog() {
            this.show = true;
        },
        closeDialog() {
            this.show = false;
        },
        submit() {
            console.log(this.value)
        }
    }
}
</script>
<style lang="scss" scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #dddee1;
    opacity: .8;
    z-index: 1;
}
.dialog-wrapper {
    position: absolute;
    width: 350px;
    height: 100px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    z-index: 100;
    .tips {
        margin-left: 14px;
        margin-bottom: 10px;
    }
    input {
        width: 95%;
        margin-left: 14px;
        border: 1px solid #dddee1;
        border-radius: 2px;
    }
}
.dialog-footer {
    margin-top: 20px;
    text-align: right;
    button {
        width: 80px;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        &:hover {
            opacity: .8;
        }
    }
    .submit {
        background: #339966;
    }
    .cancel {
        background: #d24343;
    }
}
</style>