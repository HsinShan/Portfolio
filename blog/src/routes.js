import blogadd from './components/blogadd.vue';
import blogshow from './components/blogshow.vue';
import bloglist from './components/bloglist.vue';
import blogsingle from './components/blogsingle.vue';

export default[
    {path:'/',component:blogshow},
    {path:'/add',component:blogadd},
    {path:'/list',component:bloglist},
    {path:'/blog/:id',component:blogsingle},
]