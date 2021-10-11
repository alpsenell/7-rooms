import Rooms from '@/components/pages/Rooms.vue';
import Header from '@/components/organisms/Header';

export default [
    { 
        path: '/rooms', 
        component: Header, 
        children: [{ path: '', component: Rooms }] 
    }
];
