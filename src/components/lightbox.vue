<template>
    <div class="mask bg-black w-screen h-screen bg-opacity-75 
                fixed top-0 left-0 z-50 flex justify-center items-center">

        <div class="light_box w-5/6 sm:w-2/6 relative">
            
            <img src="../assets/img/icons8-cancel.svg" alt="" srcset="" 
                class="w-5 h-5 absolute right-5 top-5 z-10"
                @click="closeLightbox">

                <RoomReserve
                :roomData="roomData"
                :bookingData="bookingData"/>

        </div>
    </div>

</template>

<script>
import RoomReserve from "@/components/RoomReserve.vue";


export default {
name: "lightbox",
components:{ RoomReserve},
props:['roomData','bookingData'],
methods:{
closeLightbox(){
    this.$emit('clickCloseLightbox');
}
}
};
</script>

<style scoped lang="postcss">
    .light_box {@apply bg-white border-white shadow-md;}
    .room_reserve_list_input   {@apply  border border-matcha rounded;}
</style>
