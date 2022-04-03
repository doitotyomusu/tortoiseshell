<template>
    <main>
        <div class="portfolioTitle">
            <!-- <img class="portfolioTitleImgLeft portfolioTitleImg" src="../../../image/portfolio/illust/myao_mike.png" alt=""> -->
            <h2 class="portfolioTitle_title dela">バナー</h2>
            <!-- <img class="portfolioTitleImgRight portfolioTitleImg" src="../../../image/portfolio/illust/myao.png" alt=""> -->
        </div>
        <div class="image">
            <img src="../../../image/portfolio/banner/food.jpg" alt="" class="portfolio_mainImage bigImg">
        </div>
        <div class="textArea">
            <div class="inner">
                <div class="portfolioText">
                    <p><strong>制作時間</strong></p>
                    <p>約1時間</p>
                    <p class="spacing"><strong>制作意図</strong></p>
                    <p>訓練校で課題として作成を行なったバナーです。</p>
                    <p>テーマはおせち料理のバナー。</p>
                    <p>楽天市場にバナーを掲載するという内容で作成を行いました。</p>
                    <p class="spacing"><strong>デザインの意図</strong></p>
                    <p>おせち料理は豪華絢爛であると考えています。</p>
                    <p>そのため、黒を貴重に金を配色。</p>
                    <p>フォントは明朝体を使うことでチープになることを避けています。</p>
                </div>
                <img class="textAreaImg textAreaImg1" src="../../../image/portfolio/home/nikukyuBig.png" alt="">
                <img class="textAreaImg textAreaImg2" src="../../../image/portfolio/home/nikukyuBig.png" alt="">
                <img class="textAreaImg textAreaImg3" src="../../../image/portfolio/home/nikukyuBig.png" alt="">

            </div>
        </div>
        <div class="backBtn">
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