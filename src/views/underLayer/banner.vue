<template>
        <main>
        <div class="galleryInner">
            <div class="underLayerTitle">
                <h2 class="dela underLayerTitle_text">バナー</h2>
            </div>
            <div class="gallery">
                <div class="galleryWrapper">
                    <div class="galleryImage">
                        <router-link to="/insta">
                            <img src="../../../image/portfolio/banner/insta001.jpg" alt="インスタ用バナー">
                        </router-link>
                    </div>
                    <div class="galleryImage">
                        <router-link to="/food">
                            <img src="../../../image/portfolio/banner/food.jpg" alt="楽天のおせちのバナー">
                        </router-link>
                    </div>
                    <div class="galleryImage">
                        <router-link to="/ultra">
                            <img src="../../../image/portfolio/banner/banner_ultra.jpg" alt="課題提出用バナー">
                        </router-link>
                    </div>
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