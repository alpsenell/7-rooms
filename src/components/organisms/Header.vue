<template>
    <div>
        <header class="h-16 flex justify-between px-8">
            <photo-frame image-name="logo.png"></photo-frame>
            <div class="menu flex space-x-14 justify-evenly">
                <h4>{{ textConfigs.homepage }}</h4>
                <h4>{{ textConfigs.gallery }}</h4>
                <h4>{{ textConfigs.reservation }}</h4>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    import PhotoFrame from '@/components/organisms/PhotoFrame';
    import { localize } from '@/helpers';
    
    export default {
        components: {
          PhotoFrame  
        },
        
        /**
         * @return {string}
         */
        computed: {
            /**
             * @return {object}
             */
            textConfigs () {
                return {
                    homepage: localize('HOMEPAGE'),
                    gallery: localize('GALLERY'),
                    reservation: localize('RESERVATION')
                };
            }
        }
    }
</script>

<style scoped>

</style>
