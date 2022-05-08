<template>
  <div class="home">

    <div class="index-outside relative flex justify-center items-center">
    
    <div class="index-main absolute z-0 flex items-center flex-col sm:flex-row">
            
            <div class="index-info flex flex-col items-center justify-between h-full">

                <img src="../assets/img/logo.3fafe707.svg" alt="" srcset="" class="sm:mb-12">

                <div class="index-info-text sm:mb-12">
                    <h1 class="mb-6">好室旅店。HOUSE HOTEL</h1>
                    <ul>
                        <li><p>花蓮縣花蓮市國聯一路1號</p></li>
                        <li><p>03-8321155</p></li>
                        <li><p>HOUSE@HOTEL.COM</p></li>
                    </ul>
                </div> 
                
                <ul class="index-bg-dot flex">
                    <li v-for=" item in bgPic"
                    :key="item.id" 
                    @click="changeBgPic(item)"></li>
                </ul>
            </div>

            <div class="flex flex-col items-end">
              <indexRoomlist/>

              <a href="https://challenge.thef2e.com/user/2232?schedule=3968#works-3968"
                 target="_blank" rel="noreferrer noopenner"
                 class="text-white mt-4 opacity-50">
                 UI DESIGN by Pei-Chuan Li
              </a>
            </div>
    </div>


    <div class="index-bg w-full h-screen static -z-50">
        <img :src="NowBgPic"
             class="object-cover w-full h-screen"
             alt="" 
             srcset="">
    </div>


</div>
  </div>
</template>

<script>
// @ is an alias to /src
import indexRoomlist from "@/components/indexRoomlist.vue";

export default {
  name: "Home",
  components: { indexRoomlist },
  data() {
      return {
          NowBgPic:require('../assets/img/house/photo-1507149833265-60c372daea22.jpeg'),
          bgPic:[
              { id: 1,
                bgPicUrl:require('../assets/img/house/photo-1507149833265-60c372daea22.jpeg')},
              { id: 2,
                bgPicUrl:require('../assets/img/house/photo-1551516594-56cb78394645.jpeg')},
              { id: 3,
                bgPicUrl:require('../assets/img/house/photo-1549490148-d7304e934d25.jpeg')},
              { id: 4,
                bgPicUrl:require('../assets/img/house/photo-1523217582562-09d0def993a6.jpeg')},
          ],
      }
  },
  methods: {
      changeBgPic(item){
          let vm = this;
          vm.NowBgPic = item.bgPicUrl;
      }
  },
};
</script>

<style lang="postcss">
    .index-main         {@apply  h-4/6 sm:h-auto;}
    .index-info         {@apply  sm:mr-10;}
    .index-info-text    {@apply  text-white text-center;}
    .index-info-text ul {@apply  leading-8;}

    .index-bg-dot li {@apply w-3 h-3 rounded-full block border border-white transition  mr-2 bg-transparent hover:bg-white;}
    .index-bg-dot li:last-child {@apply mr-0;}
</style>
