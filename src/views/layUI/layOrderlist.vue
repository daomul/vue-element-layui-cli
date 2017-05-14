<template src="./layOrderlist.html">

</template>
<script>
import XbPager from '../../components/XBPager';
import XbTable from '../../components/XBTable';
import { getOrederListPage } from '../../api/api';

export default {
        components:{
            XbPager,
            XbTable
        },
        data(){
            return {
                artType:null,
                pageTitle:'',
                pageIndex:1,
                pageSize:6,
                items:[]
            }
        },
        created(){
            this.pageIndex=1;
        },
        watch:{
            '$route':'loadData'
        },
        methods:{
            loadData(page){
                this.pageTitle=this.$route.query.title||'列表页';
                this.pageIndex=page>0?page:1;
                console.log(`加载${this.$route.fullPath}第${this.pageIndex}页数据`);

                let para = {
        					page: this.pageIndex,
        					name: ''
        				};
        				this.listLoading = true;
        				//NProgress.start();
        				getOrederListPage(para).then((res) => {
        					this.total = res.data.total;
        					this.items = res.data.orders;
                  console.log(res.data.orders);
        					this.listLoading = false;
        					//NProgress.done();
        				});
            },
            getIndex(index,pageIndex,pageSize){
                return (pageIndex-1)*pageSize+(index+1)
            },
            openEditLayer(){
                layer.open({
                    type:2,
                    shade:0,
                    maxmin:true,
                    area:['500px','350px'],
                    title:'添加'+this.pageTitle,
                    content:'#/layAddOrder/'
                })
            }
        }
    }
</script>
