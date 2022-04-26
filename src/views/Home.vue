<template>
  <div class="home">

    <div class="index-outside relative flex justify-center items-center">
    
    <div class="index-main absolute z-0 flex items-center">
            
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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>


            <ul class="index-roomlist">
                <!-- 1 -->
                <li class=" group relative flex items-center justify-center">
                    <p class="hidden absolute group-hover:inline-block group-hover:z-50"> Single Room</p>
                    <img src="../assets/img/room5/photo-1501876725168-00c445821c9e.jpeg" 
                         alt="" srcset=""
                         class="object-cover overflow-hidden w-full h-full transition opacity-100 group-hover:opacity-20 z-0">
                </li>
                <!-- 2 -->
                <li class=" group relative flex items-center justify-center">
                    <p class="hidden absolute group-hover:inline-block group-hover:z-50"> Single Room</p>
                    <img src="../assets/img/room5/photo-1501876725168-00c445821c9e.jpeg" 
                         alt="" srcset=""
                         class="object-cover overflow-hidden w-full h-full transition opacity-100 group-hover:opacity-20 z-0">
                </li>
                <!-- 3 -->
                <li class=" group relative flex items-center justify-center">
                    <p class="hidden absolute group-hover:inline-block group-hover:z-50"> Single Room</p>
                    <img src="../assets/img/room5/photo-1501876725168-00c445821c9e.jpeg" 
                         alt="" srcset=""
                         class="object-cover overflow-hidden w-full h-full transition opacity-100 group-hover:opacity-20 z-0">
                </li>
                <!-- 4 -->
                <li class=" group relative flex items-center justify-center">
                    <p class="hidden absolute group-hover:inline-block group-hover:z-50"> Single Room</p>
                    <img src="../assets/img/room5/photo-1501876725168-00c445821c9e.jpeg" 
                         alt="" srcset=""
                         class="object-cover overflow-hidden w-full h-full transition opacity-100 group-hover:opacity-20 z-0">
                </li>
                <!-- 5 -->
                <li class=" group relative flex items-center justify-center">
                    <p class="hidden absolute group-hover:inline-block group-hover:z-50"> Single Room</p>
                    <img src="../assets/img/room5/photo-1501876725168-00c445821c9e.jpeg" 
                         alt="" srcset=""
                         class="object-cover overflow-hidden w-full h-full transition opacity-100 group-hover:opacity-20 z-0">
                </li>
                <!-- 6 -->
                <li class=" group relative flex items-center justify-center">
                    <p class="hidden absolute group-hover:inline-block group-hover:z-50"> Single Room</p>
                    <img src="../assets/img/room5/photo-1501876725168-00c445821c9e.jpeg" 
                         alt="" srcset=""
                         class="object-cover overflow-hidden w-full h-full transition opacity-100 group-hover:opacity-20 z-0">
                </li>
                
            </ul>

    </div>

    <div class="index-bg w-full h-screen static -z-50 brightness-50">
        <img src="../assets/img/house/photo-1507149833265-60c372daea22.jpeg" 
             class="object-cover w-full h-screen "
             alt="" 
             srcset="">
    </div>

</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {

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
    
    .index-roomlist    {@apply  hidden sm:grid grid-cols-3;}
    .index-roomlist li {@apply  w-64 h-64 bg-matcha text-center  text-white;}
</style>
