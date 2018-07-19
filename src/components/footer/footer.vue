<template>
    <div class="footer">
        <div class="banxin">
            <div class="footer-top">
                <div class="footer-top-left">
                    <div class="footer-top-left-top">
                        <div class="links">
                            <span class="link" v-for="(v,i) in  links" @click="linkTo(v.link)"> {{v.text}} </span>
                        </div>
                        <div class="address">北京市经济技术开发区科创六街88号A1-2层</div>
                    </div>
                    <div class="footer-top-left-bottom">
                        客户服务热线：400 - 808 -8978
                    </div>
                </div>
                <div class="footer-top-right" >
                    <img src="./erweima.png"/>
                </div>
            </div>
            <div class="footer-bottom">
                索真北京医学检验所有限公司
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: '',
		data: function () {
			return {
				links: [
					{
						text: "关于我们",
						link: "./index.html"
					},
					{
						text: "技术方法",
						link: "./technique.html"
					},
					{
						text: "技术优势",
						link: "./advantage.html"
					},
					{
						text: "新闻中心",
						link: "./news.html"
					},
				]
			}
		},
		methods: {
			linkTo: function (href) {
				window.location.href = href
			}
		}

	}
</script>

<style lang="less">
    @import "../../less/var";


    @codeimgH:96px;
    .footer {
        background: @blue;
        color: @white;
        .banxin {
            .banxin();
            .footer-top {
                padding-bottom: 10px;
                padding-top: 15px;
                border-bottom: 1px solid @white;
                display: flex;
                flex-direction: row;
                align-content: space-between;
                &-left{
                    width: 810px;
                    display: flex;
                    flex-direction: column;

                    @topH:40px;
                    &-top{
                        height: @topH;
                        padding-right: 20px;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;

                        .links{

                            align-self: flex-end;
                            .link{

                                font-size: 15px;
                                padding: 0 15px;
                                border-right: 1px solid @white;
                                &:last-child{
                                    border-right: none;
                                }
                                &:hover{
                                    cursor: default;
                                }
                            }
                        }
                        .address{

                            align-self: flex-end;

                            font-size: 14px;
                        }
                    }
                    &-bottom{
                        height: @codeimgH - @topH;
                        line-height: @codeimgH - @topH;
                        text-align: center;
                        align-self: center;
                        font-size: 22px;
                        font-weight: bolder;

                    }
                }
                &-right{
                    width: 130px;
                    >img{
                        display: block;
                        border: none;
                        width: @codeimgH;
                        height: @codeimgH;
                    }
                }
            }
        }
    }

</style>
