<template>
    <main>
        <div class="nameCardTitle">
            <img class="portfolioTitleImgLeft portfolioTitleImg" src="../../../image/portfolio/illust/myao_mike.png" alt="">
            <h2 class="nameCardTitle_title">名刺</h2>
            <img class="portfolioTitleImgRight portfolioTitleImg" src="../../../image/portfolio/illust/myao.png" alt="">
        </div>
        <div class="image">
            <img src="../../../image/nameCard/nameCard.png" alt="名刺の画像" class="nameCard_mainImage">
        </div>
        <div class="textArea">
            <div class="inner">
                <div class="nameCardText">
                    <p><strong>制作時間</strong></p>
                    <p>約2週間</p>
                    <p class="spacing"><strong>制作意図</strong></p>
                    <p>名刺を頂戴する機会が増えたため作成を行いました。</p>
                    <p>個人事業主として活動していると名刺を頂戴する機会があります。</p>
                    <p>その際に業者にお願いをして作っている名刺をお渡ししていました。</p>
                    <p>デザインを学ぶ機会があり、自分で作ったものをお渡ししたいと考え作成に至りました。</p>
                    <p class="spacing"><strong>デザインの意図</strong></p>
                    <p>名刺のデザインも自身で作ったWebサイトのデザインに寄せました。</p>
                    <p>名刺のサイズははほぼ黄金比です。</p>
                    <p>ですので、この名刺にも黄金比を用いて作成を行っております。</p>
                    <p>目の大きさや耳の模様、鼻の大きさなどに黄金長方形内にある正方形を使っています。</p>
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
                    <img src="../../../image/nameCard/nameCardFile-01.png" alt="" class="nameCard_image">
                </div>
                <div class="nameCard_image_area">
                    <img src="../../../image/nameCard/nameCardFile-02.png" alt="" class="nameCard_image">
                </div>
            </div>
            <div class="nameCard_image_area soloImage soloImage1">
                <img src="../../../image/nameCard/nameCardFile-03.png" alt="" class="nameCard_image">
            </div>
            <div class="nameCard_image_wrapper">
                <div class="nameCard_image_area">
                    <img src="../../../image/nameCard/nameCardFile-04.png" alt="" class="nameCard_image">
                </div>
                <div class="nameCard_image_area">
                    <img src="../../../image/nameCard/nameCardFile-05.png" alt="" class="nameCard_image">
                </div>
            </div>
            <div class="nameCard_image_area soloImage soloImage2">
                <img src="../../../image/nameCard/nameCardFile-06.png" alt="" class="nameCard_image">
            </div>
            <div class="nameCard_image_wrapper">
                <div class="nameCard_image_area">
                    <img src="../../../image/nameCard/nameCardFile-07.png" alt="" class="nameCard_image">
                </div>
                <div class="nameCard_image_area">
                    <img src="../../../image/nameCard/nameCardFile-08.png" alt="" class="nameCard_image">
                </div>
            </div>
        </div>
        <div class="backBtn">
            <router-link to="/">
                <p class="backBtn_text">Topに戻る</p>
            </router-link>
        </div>
    </main>
</template>
<style scoped>
</style>
<script>
export default {
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