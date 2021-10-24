import Restaurant from '@/components/pages/Restaurant.vue';
import Header from '@/components/organisms/Header';

export default [
    {
        path: '/restaurant',
        component: Header,
        children: [
            {
                path: '',
                component: Restaurant,
                meta: { pageName: 'home' }
            }
        ]
    }
];
