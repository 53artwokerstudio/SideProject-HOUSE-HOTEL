<template>
<div class="room-outside flex flex-wrap sm:flex-nowrap text-matcha">

    <div class="room-bg w-full sm:w-2/5 h-96 sm:h-screen overflow-y-hidden
                relative 
                flex justify-center items-end">
        <img :src="RoomBgPic"
          @click="CarouselRoomImg"
        class="object-cover w-full h-full sm:absolute transition-opacity duration-300"
        :class="ImgOpacity"
        alt="" 
        srcset="">


        <ul class="room-bg-dot flex absolute mb-4 sm:mb-10">

            <li v-for=" (item,i) in SingleRoomData.imageUrl"
                    :key="i" 
                    @click="changeRoomBgPic(item,i)"></li>

        </ul>
    </div>

    <div class="room-info w-full px-10 pt-5 sm:pt-28 sm:h-screen sm:overflow-y-scroll sm:scroll-smooth">
        <h2 class="mb-2  text-2xl sm:text-4xl ">{{ SingleRoomData.name }}</h2>
        <p  class="mb-8 font-semibold">
            <span>{{ SingleRoomData.descriptionShort.GuestMin }}</span> — 
            <span>{{ SingleRoomData.descriptionShort.GuestMax }}</span>人・ 
            衛浴<span>{{ SingleRoomData.descriptionShort["Private-Bath"] }}</span>間・
            <span>{{ SingleRoomData.descriptionShort.Footage }}</span>平方公尺
        </p>

        <ul class="mb-8">
            <li><p>平日假日 {{ SingleRoomData.normalDayPrice }}</p></li>
            <li><p>假日價格 {{ SingleRoomData.holidayPrice }}</p></li>
        </ul>
      
        <ul class="mb-8">
            <li><p>入住時間 {{ SingleRoomData.checkInAndOut.checkInEarly }}  —  {{ SingleRoomData.checkInAndOut.checkInLate }}</p></li>
            <li><p>退房時間 {{ SingleRoomData.checkInAndOut.checkOut }} </p></li>
        </ul>

        
        <div class="mb-8">
            <p>{{ SingleRoomData.description }}</p>
        </div>
        
        <p class="room-title mb-6">Room Service</p>
        <ul class="grid  grid-cols-4 sm:grid-cols-6 mb-6">
            <li :class=" SingleRoomData.amenities.Breakfast         ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Breakfast.svg"      alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities['Mini-Bar']       ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Mini-Bar.svg"       alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities['Room-Service']   ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Room-Service.svg"   alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities['Wi-Fi']          ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Wi-Fi.svg"          alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities['Child-Friendly'] ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Child-Friendly.svg" alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities.Television        ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/surface.svg"        alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities['Great-View']     ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Great-View.svg"     alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities.Refrigerator      ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Refrigerator.svg"     alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities.Sofa              ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Sofa.svg"           alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities['Pet-Friendly']   ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Pet-Friendly.svg"   alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities['Smoke-Free']     ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Smoke-Free.svg"     alt="" srcset=""></li>
            <li :class=" SingleRoomData.amenities['Air-Conditioner'] ? 'opacity-100' : 'opacity-30'" class="flex justify-center mb-6"><img src="../assets/img/roomIcon/Air-Conditioner.svg" alt="" srcset=""></li>
        </ul>


        <div class=" mb-8">
          <p class="room-title mb-6" >Date</p>
          <vc-date-picker 
          is-expanded
          color="green"
          class="border-2 border-matcha"
          :columns="$screens({ default: 1, lg: 2 })"
          v-model="range" 
          :min-date="new Date()"
          :disabled-dates="mathDisabledDates"
          />
        </div>

        <div @click="openLightbox =!openLightbox">
        <bookingButton bookingTitle="Booking Now"/>
        </div>

    </div>

    <div v-if="openLightbox">
      <lightbox @clickCloseLightbox="LightboxClose"
                :roomData="SingleRoomData"
                :bookingData="bookingArr"/>
    </div>

    <div>
        
    </div>

</div>
</template>

<script>
import lightbox from "@/components/lightbox.vue";
import bookingButton from "@/components/bookingbutton.vue";

export default {
components:{  lightbox , bookingButton },
data() {
return {
    openLightbox: false,
    SingleRoomData: [],
    RoomAmenities: false,
    RoomBgPic: '',
    NDPrice:'',
    HDPrice:'',

    range: {start:'',end:''},
    bookingArr :[],

    ImgOpacity:'opacity-100',
}
},
computed:{
    mathDisabledDates() {
    let vm = this; 
    let DisabledDay=[]; 

    vm.bookingArr.forEach((item) => {
        DisabledDay.push(new Date(item.date)); 
        return;
    });  

    return DisabledDay;
    },
    CarouselRoomImg(){
        let vm = this;
           vm.SingleRoomData.imageUrl.forEach((item,i)=>{
               setTimeout(() => {                      
                vm.RoomBgPic = item;
                }, 2000*i);
            });
        return vm;
    },
},
methods:{
    getRoominfos(){
        let vm = this;
        const ROOMKEY = process.env.VUE_APP_ROOMKEY;
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/'+ vm.$route.params.id,
        headers: { 
            'Accept': 'application/json', 
            'Authorization': ROOMKEY
        }
        };
        
        axios(config)
        .then(function (response) {
        vm.SingleRoomData = response.data.room[0];
        vm.RoomBgPic = vm.SingleRoomData.imageUrl[0];
        vm.bookingArr = response.data.booking;
        return;
        })
        .catch(function (error) {
        console.log(error);
        });
    },
    changeRoomBgPic(item){
    let vm = this;
        vm.ImgOpacity='opacity-80'
    setTimeout(() => {
        vm.RoomBgPic = item;
        vm.ImgOpacity='opacity-100'
    },100)
    
    

    },
    LightboxClose(){
    this.openLightbox =! this.openLightbox;
    },
},
watch: {
$route(to, from) {
    console.log(to , from);
    this.getRoominfos();
},
},
created() {
this.getRoominfos();
}

}
</script>

<style lang="postcss">

    .index-roomlist    {@apply  hidden sm:grid grid-cols-3;}
    .index-roomlist li {@apply  w-64 h-64 bg-matcha text-center text-white;}

    .room-title {@apply font-semibold text-xl;}
    
    .room-bg-dot li {@apply w-3 h-3 rounded-full block border border-matcha transition hover:bg-matcha active:bg-matcha mr-2;}
    .room-bg-dot li:last-child {@apply mr-0;}

    
</style>
