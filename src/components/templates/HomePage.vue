<template>
    <div class="flex flex-col md:flex-row">
        <photo-frame
            class="md:flex-1"
            image-name="DSC_9898.jpg"
            :text-config="textConfigs.roomsTextConfig"
            @click="$emit('goToRooms')">
        </photo-frame>
        <photo-frame
            class="md:flex-1"
            image-name="Cheesecake.jpg"
            :text-config="textConfigs.restaurantTextConfig"
            @click="$emit('goToRestaurant')">
        </photo-frame>
    </div>
</template>

<script>
    import { localize } from '@/helpers';
    import PhotoFrame from '@/components/organisms/PhotoFrame';
    
    export default {
        components: {
            PhotoFrame
        },
        
        props: {
            /**
             * @property {String} language
             */
            language: {
                type: String,
                required: true
            }  
        },
        
        computed: {
            /**
             * @return {object}
             */
            textConfigs () {
                return {
                    roomsTextConfig: {
                        text: localize('ROOMS'),
                        size: 'text-4xl',
                        withOverlay: true
                    },
                    restaurantTextConfig: {
                        text: 'Restaurant',
                        size: 'text-4xl',
                        withOverlay: true
                    }
                };
            }
        }
    }
</script>
