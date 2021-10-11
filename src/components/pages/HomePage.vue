<template>
    <home-page 
        id="homepage"
        class="md:w-screen md:h-screen md:overflow-hidden"
        :language="language"
        @goToRestaurant="redirectUser('restaurantPage')"
        @goToRooms="redirectUser('roomPage')">
    </home-page>
</template>

<script>
    import { mapState } from 'vuex';
    import HomePage from '@/components/templates/HomePage';
    
    export default {
        components: {
            HomePage
        },
        
        computed: {
            ...mapState([
                'language'
            ])
        },
        
        methods: {
            /**
             * @param {string} param
             */
            redirectUser (param) {
                if (param === 'roomPage') {
                    this.$router.push({ path: 'rooms' });
                } else if (param === 'restaurantPage') {
                    this.$router.push({ path: 'restaurant' });
                }
            }
        }
    }
</script>
