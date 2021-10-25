<template>
    <div>
        <div
            v-for="socialMedia in config"
            :key="socialMedia.name">
            <svg
                class="cursor-pointer transform hover:scale-125 duration-500"
                :width="socialMedia.size"
                :height="socialMedia.size"
                fill="white"
                @click="$emit('click', socialMedia)">
                <use :href="`/images/sprite.svg#${socialMedia.name}`"></use>
            </svg>
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
