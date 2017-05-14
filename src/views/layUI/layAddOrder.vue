<template src='./layAddOrder.html'>
</template>

<script>
    import XbDate from '../../components/XBDate'
    import XbLayer from '../../components/XBLayer'
    export default {
        components:{
            XbDate,
            XbLayer,
        },
        data(){
            return {
                model:{
                    InputTxt:'我是文本框的值',//必须有初始化值
                    InputDate:'2016-11-29'
                },
                isSubmit:false,
                pageTitle:'',
            }
        },
        created(){
            this.setTitle()
        },
        watch:{
            '$route':function(){
                this.setTitle()
            }
        },
        methods:{
            setTitle(){
                let self=this;
                self.pageTitle=self.$route.query.title||''
                self.$parent.readyShowContent=self.$route.query.readyShowContent
            },
            save(){
                let self=this;
                self.isSubmit=true
                console.log(self.model);

            },
            cancelHandler(){
                console.log('关闭')
            },
            endHandler(){
                // layer.msg("加载完成")
            }
        }
    }
</script>
