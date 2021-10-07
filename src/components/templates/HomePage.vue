<template>
    <div class="grid grid-cols-2">
        <photo-frame
            image-name="DSC_9898.jpg"
            :text-config="roomsTextConfig">
        </photo-frame>
        <photo-frame
            image-name="DSC_9927.jpg"
            :text-config="restaurantTextConfig">
        </photo-frame>
    </div>
</template>

<script>
    import PhotoFrame from '@/components/organisms/PhotoFrame';
    
    export default {
        components: {
            PhotoFrame
        },
        
        data () {
            return {
                roomsTextConfig: {
                    text: '7 Rooms',
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
</script>
