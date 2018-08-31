export default{
    computed:{
        filteredBlogs:function(){
            return this.articles.filter((blog)=>{
                return blog.name.match(this.search)
            });
        }
    }
}