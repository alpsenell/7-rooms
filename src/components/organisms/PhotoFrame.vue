<template>
    <div class="relative">
        <div
            class="w-full h-full"
            :class="{ 'with-overlay': textConfig.withOverlay }">
            <img
                class="w-full h-full"
                :src="`images/${imageName}`"
                :alt="imageName">
        </div>
        <div
            v-if="withText"
            class="absolute top-2/4	left-2/4 translate-center text-gray-50"
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
             * @property {Boolean} withOverlay
             */
            withOverlay: {
                type: Boolean,
                default: false
            },
            /**
             * @property {Object} textConfig
             */
            textConfig: {
                type: Object,
                default: () => {}
            }
        },
        
        computed: {
            /**
             * @return {boolean}
             */
            withText () {
                return Object.keys(this.textConfig).length > 0;
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
            content:'\A';
            width:100%;
            height:100%;
            top:0;
            left:0;
            background: rgba(0, 0, 0, 0.4);
            position:absolute;
            opacity: 1;
        }
    }
    .translate-center {
        transform: translate(-50%, -50%);
    }
</style>

