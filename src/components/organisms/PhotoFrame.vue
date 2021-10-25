<template>
    <div 
        class="relative group h-full"
        @click="$emit('click')">
        <div
            class="w-full h-full cursor-pointer"
            :class="{ 'with-overlay': withOverlay }">
            <img
                class="w-full h-full object-cover"
                :class="imageClass"
                :src="`images/${imageName}`"
                :alt="imageName">
        </div>
        <div
            v-if="hasTextConfig"
            class="cursor-pointer absolute top-2/4 left-2/4 translate-center text-gray-50 group-hover:text-gray-900"
            :class="textConfig.size">
            {{ textConfig.text }}
        </div>
    </div>
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
             * @property {Object} textConfig
             */
            textConfig: {
                type: Object,
                default: () => ({})
            },
            /**
             * @property {String} imageClass
             */
            imageClass: {
                type: String,
                default: ''
            },
        },

        computed: {
            /**
             * @return {boolean}
             */
            hasTextConfig () {
                return Object.keys(this.textConfig).length > 0;
            },

            /**
             * @return {boolean}
             */
            withOverlay () {
                return this.hasTextConfig && this.textConfig.withOverlay;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .with-overlay {
        &:hover {
            &:after {
                opacity: 0;
            }
        }
        &:after {
            transition: all 0.5s ease;
            content: '\A';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.4);
            position: absolute;
            opacity: 1;
        }
    }
    .translate-center {
        transform: translate(-50%, -50%);
    }
</style>

