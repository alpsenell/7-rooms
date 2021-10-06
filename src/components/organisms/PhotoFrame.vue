<template>
    <img 
        class="w-full h-full"
        :src="`images/${imageName}`" 
        :alt="imageName">
</template>

<script>
    export default {
        props: {
            /**
             * @property {String} imageName
             */
            imageName: {
                type: String,
                required: true
            },
            /**
             * @property {Boolean} withOverlay
             */
            withOverlay: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

