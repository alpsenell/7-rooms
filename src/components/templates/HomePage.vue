<template>
    <div class="home-page">
        <photo-frame image-name="DSC_9898.jpg"></photo-frame>
        <photo-frame image-name="restaurant_main.jpeg"></photo-frame>
    </div>
</template>

<script>
    import PhotoFrame from '@/components/organisms/PhotoFrame';
    
    export default {
        components: {
            PhotoFrame
        }
    }
</script>

<style lang="scss" scoped>
    .home-page {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
</style>
