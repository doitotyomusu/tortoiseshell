<template>
    <section class="mv" id="home">
        <div class="mv_img">
            <picture class="mv_img_inner">
                <source srcset=""
                media="">
                <source srcset=""
                media="">
                <img src="../../image/portfolio/home/mvlogo.gif" alt="">
            </picture>
        </div>
    </section>
    <section class="pf" id="pf">
        <div class="pf_title">
            <h2>Portfolio</h2>
        </div>
        <div class="zindex01">
            <div class="pf_stomp" id="stomp01"><img class="stomp01" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp02"><img class="stomp02" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp03"><img class="stomp03" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp04"><img class="stomp04" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp05"><img class="stomp05" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp06"><img class="stomp06" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp07"><img class="stomp07" src="../../image/portfolio/home/stomp02.png" alt=""></div>
            <div class="pf_stomp" id="stomp08"><img class="stomp08" src="../../image/portfolio/home/stomp02.png" alt=""></div>
            <div class="pf_stomp" id="stomp09"><img class="stomp09" src="../../image/portfolio/home/stomp02.png" alt=""></div>
            <div class="pf_stomp" id="stomp10"><img class="stomp10" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp11"><img class="stomp11" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp12"><img class="stomp12" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp13"><img class="stomp13" src="../../image/portfolio/home/stomp02.png" alt=""></div>
            <div class="pf_stomp" id="stomp14"><img class="stomp14" src="../../image/portfolio/home/stomp02.png" alt=""></div>
            <div class="pf_stomp" id="stomp15"><img class="stomp15" src="../../image/portfolio/home/stomp02.png" alt=""></div>
            <div class="pf_stomp" id="stomp16"><img class="stomp16" src="../../image/portfolio/home/stomp02.png" alt=""></div>
            <div class="pf_stomp" id="stomp17"><img class="stomp17" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp18"><img class="stomp18" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp19"><img class="stomp19" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp20"><img class="stomp20" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp21"><img class="stomp21" src="../../image/portfolio/home/stomp01.png" alt=""></div>

<!--
iPad pro用の表示
-->

            <div class="pf_stomp" id="stomp22"><img class="stomp22" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp23"><img class="stomp23" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp24"><img class="stomp24" src="../../image/portfolio/home/stomp01.png" alt=""></div>
            <div class="pf_stomp" id="stomp25"><img class="stomp25" src="../../image/portfolio/home/stomp02.png" alt=""></div>
            <div class="pf_stomp" id="stomp26"><img class="stomp26" src="../../image/portfolio/home/stomp02.png" alt=""></div>
        </div>

<!--
iPad pro用の表示ここまで
-->


        <div class="zindex02">
            <div class="pf_item">
                <router-link to="/banner">
                    <div class="pf_item_img">
                        <picture>
                            <source srcset="../../image/portfolio/banner/insta001.webp" media="(min-width: 350px)">
                            <img src="../../image/portfolio/banner/insta001.jpg" alt="バナー">
                        </picture>
                    </div>
                    <div class="pf_item_title">
                        <p class="dela">バナー</p>
                    </div>
                </router-link>
            </div>
            <div class="pf_item2">
                <router-link to="/illust">
                    <div class="pf_item_img2">
                        <picture>
                            <source srcset="../../image/portfolio/illust/syu.webp" media="(min-width: 350px)">
                            <img src="../../image/portfolio/illust/syu.gif" alt="イラスト">
                        </picture>
                    </div>
                    <div class="pf_item_title2">
                        <p class="dela">イラスト</p>
                    </div>
                </router-link>
            </div>
            <div class="pf_item3">
                <router-link to="/nameCard">
                    <div class="pf_item_img3">
                        <picture>
                            <source srcset="../../image/nameCard/nameCard.webp" media="(min-width: 350px)">
                            <img src="../../image/nameCard/nameCard.png" alt="名刺">
                        </picture>
                    </div>
                    <div class="pf_item_title3">
                        <p class="dela">名刺</p>
                    </div>
                </router-link>
            </div>
            <div class="pf_item4">
                <router-link to="/reTouch">
                    <div class="pf_item_img4">
                        <picture>
                            <source srcset="../../image/portfolio/photo/hinami/cat_after.webp" media="(min-width: 350px)">
                            <img src="../../image/portfolio/photo/hinami/cat_after.jpg" alt="レタッチ">
                        </picture>
                    </div>
                    <div class="pf_item_title4">
                        <p class="dela">Photo</p>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="btn" id="btn" v-show="scrollY > 300" @click="returnTop">
            <img src="../../image/portfolio/home/topbtnB.gif" alt="">
        </div>
    </section>
</template>
<style>
.btn {
    position: fixed;
    right: 4vw;
    bottom: 1vh;
    z-index: 2;
}

.btn img {
    height: auto;
    width: 92px;
}

.btn img:hover{
    transform:scale(1.05,1.05);
    transition:.3s all;
}

.active {
    opacity: 1;
    visibility: visible;
    animation-name: scrollToTop;
    animation-duration: .5s;
}

@keyframes scrollToTop {
    from {
        transform: translateY(16px);
    }
}
</style>
<script>
    export default {
        data(){
            return{
                scrollTimer:0,
                scrollY:0
            }
        },
        mounted(){
            window.addEventListener('scroll',this.handleScroll);
        },
        methods:{
            handleScroll:function(){
                if(this.scrollTimer){
                    return;
                }
                this.scrollTimer = setTimeout(() => {
                    this.scrollY = window.scrollY;
                    clearTimeout(this.scrollTimer);
                    this.scrollTimer = 0;
                },200);
            },
            returnTop:function(){
                window.scrollTo({
                    top:0,
                    behavior:"smooth"
                });
            }
        }
    };
</script>
