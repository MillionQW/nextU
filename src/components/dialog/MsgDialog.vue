<template>
    <div class="dialog-container" v-show="show">
        <div class="mask"></div>
        <div class="dialog-wrapper">
            <p class="tips">{{model.text}}</p>
            <div class="dialog-footer">
                <button class="submit" @click="submit">{{model.confirmButtonText}}</button>
               
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            promise: '',
            reject: '',
            resolve: ''
        }
    },
    props: {
        dialogOption: Object
    },
    computed: {
        model: function() {
            let options =  this.dialogOption;
            return {
                text: options.text,
                confirmButtonText: options.confirmButtonText ? options.confirmButtonText : '确定'
            }
        }
    },
    methods: {
        submit() {
            this.resolve('submit')
        },
        confirm() {
            this.promise = new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
            return this.promise;
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
    position: fixed;
    left: 50%;
    top: 40%;
    width: 350px;
    height: 100px;
    margin-top: -50px;
    margin-left: -225px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    z-index: 100;
    .tips {
        margin-left: 14px;
        margin-bottom: 10px;
    }
}
.dialog-footer {
    margin-top: 20px;
    text-align: right;
    button {
        height: 40px;
        color: #fff;
        border-radius: 5px;
        border: 0;
        &:hover {
            opacity: .8;
        }
    }
    .submit {
        display: block;
        margin: 0 auto;
        font-size: 14px;
        background: #339966;
    }
}
</style>