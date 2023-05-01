<template>
    <div>

        <div class="share-article">

            <div class="sb fb"><a class="share-btn" :href="`https://www.facebook.com/sharer/sharer.php?u=${article_url}`"
                    target="_blank">
                    <img src="~/assets/img/facebook.svg" alt="Тексти.org.ua - Facebook"></a>
            </div>

            <div class="sb tw"><a class="share-btn" :href="`https://twitter.com/intent/tweet?text=${article_url}`"
                    target="_blank">
                    <img src="~/assets/img/twitter.svg" alt="Тексти.org.ua - Twitter"></a>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    props: {
        article_url: {
            type: String,
            required: true,
        }
    }
}
</script>


<style>
.share-article {
    position: fixed;
    top: 0;
    right: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: max-width;
    z-index: 0;
}

.sb {
    margin-right: 10px;
    border: 1.5px solid white;
    padding: 2px 5px;
    width: 30px;
    height: 30px;
    display: flex;
    border-radius: 50%;
}

.sb:hover {
    border: 1.5px solid #c76367;
}

.share-btn {
    margin: auto;
}

.fb img {
    width: 18px;
    height: 18px
}

.tw img {
    width: 18px;
    height: 15px
}</style>