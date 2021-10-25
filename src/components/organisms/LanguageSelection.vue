<template>
    <div class="bg-black h-14">
        <div class="max-w-screen-xl flex justify-between my-0 mx-auto items-center h-full">
            <div class="language-selection">
                <span 
                    v-for="(language, index) in languages"
                    :key="language.value"
                    :class="getClassForLanguage(language, index)"
                    class="text-white hover:text-red-400 cursor-pointer mr-6"
                    @mouseenter="handleMouseEnter(language)"
                    @mouseleave="hoveredLanguage = ''"
                    @click="$emit('changeLanguage', language.value)">
                    {{ language.text }}
                </span>
            </div>
            <social-medias
                class="flex gap-4"
                :config="socialMediaConfig"
                @click="config => $emit('click', config)">
            </social-medias>
        </div>
    </div>
</template>

<script>
    import SocialMedias from '@/components/organisms/SocialMedias';
    
    export default {
        components: {
            SocialMedias
        },
        
        props: {
            /**
             * @property {Array} languages
             */
            languages: {
                type: Array,
                required: true
            },
            /**
             * @property {number} activeLanguageIndex
             */
            activeLanguageIndex: {
                type: Number,
                required: true
            }  
        },
        
        data () {
            return {
                socialMediaConfig: [
                    { name: 'instagram', size: 25, url: 'https://www.instagram.com/onder_ozlem_mazi/' },
                    { name: 'facebook', size: 25 },
                ],
                hoveredLanguage: ''
            };
        },
        
        methods: {
            /**
             * @param {object} language
             * @param {number} index
             * @return {string}
             */
            getClassForLanguage ({ value }, index) {
                if (this.hoveredLanguage === value) {
                    return 'border-b border-solid border-red-400';
                }
                
                if (index === this.activeLanguageIndex && this.hoveredLanguage === '') {
                    return 'border-b border-solid border-red-400';
                }
            },

            /**
             * @param {string} value
             */
            handleMouseEnter ({ value }) {
                this.hoveredLanguage = value;
            }
        }
    };
</script>

