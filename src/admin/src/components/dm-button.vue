<template>
    <button class="dm-button" @click.prevent="(event) => $emit('click', event)" >
        <dm-icon :icon="icon" ></dm-icon>
        <span class="label" >{{ label }}</span>
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: 'plus'
        }
    },
}
</script>

<style scoped>
    button {
        border-radius: 8.5px;
        border: none;
        min-width: 120px;
        display: inline-flex;
        align-items: center;
        padding: 0;
        cursor: pointer;  
        outline: none;             
        background-color: transparent;
    }

    button .icon {
        margin: 5px;
    }

    button .label {
        flex: 0 0 calc(100% - 40px);
        text-align: left;
        line-height: 18px;
    }

    button:hover .label {
        font-weight: bold;
    }
</style>