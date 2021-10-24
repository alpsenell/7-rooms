<template>
    <div>
        <language-selection
            :languages="availableLanguages"
            :active-language-index="activeLanguageIndex"
            @click="handleLanguageSelectionClick"
            @changeLanguage="changeLanguage">
        </language-selection>
        <header class="h-16 flex justify-between px-8 items-center">
            <photo-frame image-name="logo.png"></photo-frame>
            <div class="menu flex gap-24 justify-evenly">
                <h2 
                    v-for="(config, index) in textConfigs"
                    :key="index"
                    class="text-xl cursor-pointer duration-500"
                    :class="getClassesForMenu(config)"
                    @mouseenter="handleMouseEnterForMenu(config)"
                    @mouseleave="hoveredMenu = ''">
                    {{ config.name }}
                </h2>
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
                hoveredMenu: ''
            }
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
        
        methods: {
            ...mapMutations([
                'changeLanguage'
            ]),
            
            /**
             * @param {Object} config
             */
            handleLanguageSelectionClick ({ url }) {
                if (url) {
                    window.open(url);
                }
            },

            /**
             * @param {string} pageName
             */
            handleMouseEnterForMenu ({ pageName }) {
                this.hoveredMenu = pageName;
            },

            /**
             * @param {string} pageName
             * @return {string}
             */
            getClassesForMenu ({ pageName }) {
                if (this.hoveredMenu === pageName) {
                    return 'border-b-2 border-solid border-black';
                }
                
                if (this.activePage === pageName && this.hoveredMenu === '') {
                    return 'border-b-2 border-solid border-black';
                }
            }
        }
    };
</script>

<style scoped>

</style>
