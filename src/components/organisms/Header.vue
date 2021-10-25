<template>
    <div>
        <language-selection
            :languages="availableLanguages"
            :active-language-index="activeLanguageIndex"
            @click="goToUrl"
            @changeLanguage="changeLanguage">
        </language-selection>
        <header class="h-16 flex justify-between items-center sticky top-0 bg-white z-10 px-16">
            <photo-frame
                image-class="py-2"
                image-name="logo.png"
                @click="pushRouter('/')">
            </photo-frame>
            <div class="menu flex gap-24 justify-evenly relative">
                <h2
                    v-for="(config, index) in textConfigs"
                    :ref="config.pageName"
                    :key="index"
                    class="text-xl cursor-pointer"
                    @mouseenter="handleMouseEnterForMenu(config)"
                    @mouseleave="handleMouseLeave">
                    {{ config.name }}
                </h2>
                <div
                    class="slider absolute h-0.5 duration-500 bg-red-300 -bottom-2"
                    :style="{ left: `${slideLeftPosition}px`, width: `${slideWidth}px` }">
                </div>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex';
    import { localize } from '@/helpers';
    import PhotoFrame from '@/components/organisms/PhotoFrame';
    import LanguageSelection from '@/components/organisms/LanguageSelection';

    export default {
        components: {
            PhotoFrame,
            LanguageSelection
        },

        data () {
            return {
                availableLanguages: [
                    { text: 'TR', value: 'tr_TR' },
                    { text: 'EN', value: 'en_US' }
                ],
                slideLeftPosition: 0,
                slideWidth: 0
            };
        },

        /**
         * @return {string}
         */
        computed: {
            ...mapState([
                'language'
            ]),

            /**
             * @return {object}
             */
            textConfigs () {
                return [
                    { name: localize('HOMEPAGE'), pageName: 'home' },
                    { name: localize('GALLERY'), pageName: 'gallery' },
                    { name: localize('RESERVATION'), pageName: 'reservation' }
                ];
            },

            /**
             * @return {number}
             */
            activeLanguageIndex () {
                return this.language === 'tr_TR' ? 0 : 1;
            },

            /**
             * @return {string}
             */
            activePage () {
                return this.$route.meta?.pageName;
            }
        },
        
        mounted () {
            this.setActiveMenuSlider()  
        },

        methods: {
            ...mapMutations([
                'changeLanguage'
            ]),

            /**
             * @param {Object} config
             */
            goToUrl ({ url }) {
                if (url) {
                    window.open(url);
                }
            },

            /**
             * @param {string} path
             */
            pushRouter (path) {
                this.$router.push({ path })
            },

            /**
             * @param {string} pageName
             */
            handleMouseEnterForMenu ({ pageName }) {
                const activeHeading = this.$refs[pageName][0];

                this.slideWidth = activeHeading.offsetWidth;
                this.slideLeftPosition = activeHeading.offsetLeft;
            },
            
            setActiveMenuSlider () {
                const activeMenu = this.$refs[this.activePage][0];
                
                this.slideWidth = activeMenu.offsetWidth;
                this.slideLeftPosition = activeMenu.offsetLeft;
            },
            
            handleMouseLeave () {
                this.setActiveMenuSlider();
            }
        }
    };
</script>

<style scoped>

</style>
