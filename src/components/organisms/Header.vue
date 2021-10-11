<template>
    <div>
        <header>
            <div class="logo">Logo</div>
            <div class="menu">
                <h4>{{ textConfigs.homepage }}</h4>
                <h4>{{ textConfigs.gallery }}</h4>
                <h4>{{ textConfigs.reservation }}</h4>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
    import { localize } from '@/helpers';
    
    export default {
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
