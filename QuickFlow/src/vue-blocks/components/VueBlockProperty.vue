<template>
    <div class="blocks-properties">
        <div class="property" v-for="p in inputValues" :key="p.id">
            <label :for="p.name">{{p.label}}:</label>
            <br>
            <input type="text" v-model="p.value">
        </div>
        <button @click.prevent="save">Save</button>
    </div>
</template>

<script>
    export default {
        name: 'VueBlockProperty',
        props: {
            inputValues: {
                type: Array
            },
        },
        methods: {
            save() {
                this.$emit('save', this.inputValues)
            }
        }
    }
</script>

<style lang="css" scoped>
    .blocks-properties {
        position: relative;
        right: 0;
        top: 0;
        width: 100%;
        min-height: 200px;
        box-sizing: border-box;
        padding: 10px;
        background: #ffffff;
    }
</style>