<template>
    <main>
        <div class="portfolioTitle">
            <img class="portfolioTitleImgLeft portfolioTitleImg" src="../../../image/portfolio/illust/myao_mike.png" alt="">
            <h2 class="portfolioTitle_title dela">Photo</h2>
            <img class="portfolioTitleImgRight portfolioTitleImg" src="../../../image/portfolio/illust/myao.png" alt="">
        </div>
        <div class="image">
            <img src="../../../image/portfolio/photo/piro/piro_after.jpg" alt="猫の画像" class="portfolio_mainImage">
        </div>
        <div class="textArea">
            <div class="inner">
                <div class="portfolioText">
                    <p><strong>制作時間</strong></p>
                    <p>約1時間</p>
                    <p class="spacing"><strong>制作意図</strong></p>
                    <p>レタッチの勉強のために制作を行いました。</p>
                    <p class="spacing"><strong>デザインの意図</strong></p>
                    <p>結婚式に使用するリングピローの写真です。</p>
                    <p>高級感を持たせるために全体のトーンを落としてピローを強調しております。</p>
                    <p>机に不要な照り返し等あったため削除を行い、ピローをより強調する様にしております。</p>
                </div>
                <div class="scrollDown">
                    <p>scroll</p>
                    <div class="scrollStripe"></div>
                </div>
                <img class="textAreaImg textAreaImg1" src="../../../image/portfolio/home/nikukyuBig.png" alt="">
                <img class="textAreaImg textAreaImg2" src="../../../image/portfolio/home/nikukyuBig.png" alt="">
                <img class="textAreaImg textAreaImg3" src="../../../image/portfolio/home/nikukyuBig.png" alt="">
            </div>
        </div>
        <div class="imageInner">
            <div class="nameCard_image_wrapper">
                <div class="nameCard_image_area nameCard_image_area_first">
                    <p><strong>修正前</strong></p>
                    <img src="../../../image/portfolio/photo/piro/piro.jpg" alt="" class="nameCard_image">
                </div>
                <div class="nameCard_image_area">
                    <p><strong>修正後</strong></p>
                    <img src="../../../image/portfolio/photo/piro/piro_after.jpg" alt="" class="nameCard_image">
                </div>
            </div>
        </div>
        <div class="backBtn">
            <router-link to="/reTouch">
                <p class="backBtn_text">一覧に戻る</p>
            </router-link>
        </div>
    </main>
</template>
<style scoped>

</style>
<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
        },
    methods: {
    handleScroll() {
        let nameCardActive = document.querySelectorAll('.nameCard_image_area');
        let scrollAnimationFunction = function() {
            for (let i = 0; i < nameCardActive.length; i++) {
                let triggerMargin = 230;
                if (window.innerHeight > nameCardActive[i].getBoundingClientRect().top + triggerMargin) {
                    nameCardActive[i].classList.add('nameCard_active');
                    }
                }
            }
        window.addEventListener('load', scrollAnimationFunction);
        window.addEventListener('scroll', scrollAnimationFunction);
        },
    },
};
</script>