<template>
    <div>
        <div
            v-for="socialMedia in config"
            :key="socialMedia.name">
            <img
                :src="`/images/${socialMedia.name}.svg`"
                class="cursor-pointer transform hover:scale-125 duration-500"
                :width="socialMedia.size"
                :height="socialMedia.size"
                :alt="socialMedia.name"
                @click="$emit('click', socialMedia)"/>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            /**
             * @property {Array}
             */
            config: {
                type: Array,
                required: true
            }    
        }
    };
</script>

<style scoped>

</style>
