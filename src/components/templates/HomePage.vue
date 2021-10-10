<template>
    <div class="flex flex-col md:flex-row">
        <photo-frame
            class="md:flex-1"
            image-name="DSC_9898.jpg"
            :text-config="roomsTextConfig">
        </photo-frame>
        <photo-frame
            class="md:flex-1"
            image-name="Cheesecake.jpg"
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
