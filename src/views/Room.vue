<template>
<div class="room-outside flex flex-wrap sm:flex-nowrap text-matcha">

    <div class="room-bg w-full sm:w-2/5 h-full sm:h-screen
                relative 
                flex justify-center items-end">
        <img src="../assets/img/house/photo-1507149833265-60c372daea22.jpeg" 
        class="object-cover w-full h-full sm:absolute"
        alt="" 
        srcset="">

        <ul class="room-bg-dot flex absolute mb-4 sm:mb-10">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

    <div class="room-info px-10 pt-5 sm:pt-28 sm:h-screen sm:overflow-y-scroll sm:scroll-smooth">
        <h2 class="mb-2">Single Room</h2>
        <p  class="mb-6 font-semibold">1人・ 單人床・ 附早餐・衛浴1間・18平方公尺</p>

        <ul class="mb-6">
            <li><p>平日假日 1380</p></li>
            <li><p>假日價格 1500</p></li>
        </ul>
      
        <ul class="mb-6">
            <li><p>入住時間 15:00 - 21:00</p></li>
            <li><p>退房時間 10:00</p></li>
        </ul>


        <ul class="mb-6">
            <li><p>Deluxe Double Room is reserved for two or three guests.</p></li>
            <li><p>There is a bedroom with a queen size bed and a private bathroom.</p></li>
            <li><p>Everything you need prepared for you: sheets and blankets, towels, soap and shampoo, hairdryer are provided.</p></li>
            <li><p>In the room there is AC and of course WiFi.</p></li>
        </ul>
        
        <p class="room-title mb-6">Room Service</p>
        <ul class="grid  grid-cols-4 sm:grid-cols-6 mb-6">
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Breakfast.svg"      alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Mini-Bar.svg"       alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Room-Service.svg"   alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Wi-Fi.svg"          alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Child-Friendly.svg" alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/surface.svg"        alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Great-View.svg"     alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Refrigerator.svg"   alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Sofa.svg"           alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Pet-Friendly.svg"   alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Smoke-Free.svg"     alt="" srcset=""></li>
            <li class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Air-Conditioner.svg" alt="" srcset=""></li>
        </ul>


        <div class="bg-matcha h-96 mb-6"></div>

        <div class="flex justify-center mb-6">
            <a href="#" 
            class="bg-matcha text-white text-center py-3 px-24 inline-block border-2 border-white
                    hover:bg-white hover:text-matcha hover:border-matcha transition">
            Booking now
            </a>
        </div>



    </div>

</div>
</template>

<script>
export default {
  
}
</script>

<style lang="postcss">
    .index-roomlist    {@apply  hidden sm:grid grid-cols-3;}
    .index-roomlist li {@apply  w-64 h-64 bg-matcha text-center text-white;}

    .room-title {@apply font-semibold text-xl;}
    
    .room-bg-dot li {@apply w-3 h-3 rounded-full block border border-matcha transition hover:bg-matcha active:bg-matcha mr-2;}
    .room-bg-dot li:last-child {@apply mr-0;}
</style>
