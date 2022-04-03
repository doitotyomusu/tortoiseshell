<template>
        <main>
        <div class="galleryInner">
            <div class="underLayerTitle">
                <h2 class="dela underLayerTitle_text">Photo</h2>
            </div>
            <div class="gallery">
                <div class="galleryWrapper">
                    <div class="galleryImage">
                        <router-link to="/hinami">
                            <img src="../../../image/portfolio/photo/hinami/cat_after.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="galleryImage">
                        <router-link to="/piro">
                            <img src="../../../image/portfolio/photo/piro/piro_after.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="galleryImage">
                        <router-link to="/sky">
                            <img src="../../../image/portfolio/photo/sky/sky_after.jpg" alt="">
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