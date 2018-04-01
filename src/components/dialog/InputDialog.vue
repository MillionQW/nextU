<template>
    <div class="dialog-container">
        <p>修改{{this.setkey}}为：</p>
        <input type="text" :value="this.value">
        <div class="dialog-footer">
            <button> 确定</button>
            <button>取消</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['setkey', 'value']
}
</script>
<style lang="scss" scoped>
.dialog-container {
    width: 350px;
    height: 100px;
    padding: 20px;
    background: #854525;
}
.dialog-footer {
    button {
        width: 80px;
        height: 40px;
        border-radius: 5px;
    }
}
</style>