<template>
    <main>
        <div class="portfolioTitle blue_nonClay">
            <!-- <img class="portfolioTitleImgLeft portfolioTitleImg" src="../../../image/portfolio/illust/myao_mike.png" alt=""> -->
            <h2 class="portfolioTitle_title dela">バナー</h2>
            <!-- <img class="portfolioTitleImgRight portfolioTitleImg" src="../../../image/portfolio/illust/myao.png" alt=""> -->
        </div>
        <div class="image">
            <img src="../../../image/portfolio/banner/banner_ultra.jpg" alt="" class="portfolio_mainImage bigImg">
        </div>
        <div class="textArea blue">
            <div class="inner">
                <div class="portfolioText">
                    <p><strong>制作時間</strong></p>
                    <p>約1時間</p>
                    <p class="spacing"><strong>制作意図</strong></p>
                    <p>課題として提出を行なったバナーです。</p>
                    <p>テーマは紳士服のバーゲン。</p>
                    <p>必要な情報を提供していただき、それを詰め込んだものとなります。</p>
                    <p class="spacing"><strong>デザインの意図</strong></p>
                    <p>紳士服の一般のイメージは青色であると考えています。</p>
                    <p>ですので青色をメインのカラーと据えました。</p>
                    <p>紳士服のバーゲンということですので、割引額を大きく掲載しております。</p>
                    <p>バーゲン期間の指定はございませんでしたので、記載しておりません。</p>
                </div>
                <img class="textAreaImg textAreaImg1" src="../../../image/portfolio/home/nikukyuBig.png" alt="">
                <img class="textAreaImg textAreaImg2" src="../../../image/portfolio/home/nikukyuBig.png" alt="">
                <img class="textAreaImg textAreaImg3" src="../../../image/portfolio/home/nikukyuBig.png" alt="">
            </div>
        </div>
        <div class="backBtn blue">
            <router-link to="/banner">
                <p class="backBtn_text">一覧に戻る</p>
            </router-link>
        </div>
    </main>
</template>
<style scoped>
.bigImg {
    width: 300px;
}
.bigImg {
    width: 300px;
}
@media screen and (min-width: 768px) {
    .bigImg {
        width: 450px;
    }
}
@media screen and (min-width: 1024px) {
    .bigImg {
        width: 600px;
    }
}
</style>