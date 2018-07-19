<template>
    <div id="app">
        <Nav></Nav>
        <div class="banner">
            <div class="banxin">
                <h1 class="title">索真</h1>
                <p class="subTitle">肿瘤免疫基因组学研究领域的佼佼者！</p>
            </div>
        </div>

        <div class="sec-cancer">
            <div class="banxin">
                <h2 class="title2">专注癌症免疫组学</h2>
                <p>北京索真新生医学生物技术有限公司位于首都北京，由美国海归教授、基因检测专家、基因组大数据分析专家和基因医学解读专家联合创建。</p>
                <p>公司站在免疫基因组学研究的最前沿，始终相信：如果能进一步了解适应性免疫系统，将会对肿瘤的治疗产生重要指导作用。
                </p>
                <p>公司利用先进的高通量测序平台和生物信息学分析平台来检测肿瘤新生抗原。为推动癌症研究，索真立志于不断把免疫组学研究成果转化为服务于临床诊断和治疗评估的产品，以提高患者就医质量。
                </p>


                <div class="one img-show">
                    <img src="../../source/index/tu1.png" alt="">
                    <p>优质的NGS测序技术（放一张二代测序仪器）</p>
                </div>
                <div class="two">
                    <div class="img-show left">
                        <img src="../../source/index/tu3.png" alt="">
                        <p>强大的生物信息分析平台</p>
                    </div>
                    <div class="img-show right">
                        <img src="../../source/index/tu2.png" alt="">
                        <p>远超过国家标准的分子遗传学基因检测实验室</p>
                    </div>
                </div>
            </div>
        </div>




        <Footer></Footer>

    </div>
</template>

<script>

	import Nav from '../../components/nav/nav.vue';
	import Footer from "../../components/footer/footer.vue"


	export default {
		name: 'app',
        data:function () {
            return{
            	h1:"hello , this is index.html",
                a:"./contacts.html"
            }
        },
        components:{Nav , Footer}
	}
</script>

<style lang="less">

    @import "../../less/reset-common";
    @import "../../less/var";


    #app {

        .img-show( @w:100% , @h:100%){
            position: relative;
            z-index: 100;
            overflow: hidden;
            /*border: 3px solid red;*/
            >img{
                width: @w;
                height: @h;
                display: block;
            }

            >p{
                margin: 0;
                padding: 5px;
                position: absolute;
                z-index: 101;
                width: 100%;
                font-size: 16px;
                background:rgba(15,98,167,0.8);
                /*top: 0;*/
                left: 0;
                bottom: -60px;
                text-align: left !important;
                color: @white;
                transition: 0.5s;
            }

            &:hover > p{
                bottom: 0;
            }

        }

        .banner{
            .setBackgroundImgCover();

            .banxin{
                .banxin();
                padding-top: 160px;
                .title{
                    margin-top: 0;
                    color: @white;
                    font-size: 58px;
                }
                .subTitle{
                    color: @white;
                    font-size: 36px;
                }

            }
        }
        .sec-cancer{
            background: #ffffff;
            .banxin{
                padding-top: 100px;
                .banxin();
                color:@blcak_2;
                .title2{
                    color: @black;
                    font-weight: normal;
                    text-align: center;
                }
                p{
                    text-align: center;
                    font-size: 16px;
                    line-height: 1.7;
                }


                .one{

                    .img-show();
                    margin-top: 50px;
                }
                .two{
                    margin-top: 10px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    height: 330px;
                    overflow: hidden;
                    .left{
                        .img-show(@h:330px ,@w:660px);
                    }
                    .right{
                        .img-show(@h:330px; @w:330px);
                    }
                }
            }

        }


        padding-bottom: 200px;
    }
</style>
