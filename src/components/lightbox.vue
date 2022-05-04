<template>
    <div class="mask bg-black w-screen h-screen bg-opacity-75 
                fixed top-0 left-0 z-50 flex justify-center items-center">

        <div class="light_box w-5/6 sm:w-2/6 relative">
            
            <img src="../assets/img/icons8-cancel.svg" alt="" srcset="" 
                class="w-5 h-5 absolute right-5 top-5 z-10"
                @click="closeLightbox">

                <RoomReserve
                v-if="showRoomReserve"
                @success="ChangeSuccess"
                :roomData="roomData"
                :bookingData="bookingData"/>

                <transition appear name="fade">
                <RoomReserveDone
                v-if="resultRoomReserve"/>
                </transition> 


        </div>
    </div>

</template>

<script>
import RoomReserve from "@/components/RoomReserve.vue";
import RoomReserveDone from "@/components/RoomReserveDone.vue";


export default {
name: "lightbox",
components:{ RoomReserve ,RoomReserveDone },
props:['roomData','bookingData'],
data() {
    return {
        showRoomReserve: true,
        resultRoomReserve: false,
    }
},
methods:{
closeLightbox(){
    this.$emit('clickCloseLightbox');
},
ChangeSuccess(){
    this.showRoomReserve = false;
    this.resultRoomReserve = true;
}
}
};
</script>

<style scoped lang="postcss">
    .light_box {@apply bg-white border-white shadow-md;}
    .room_reserve_list_input   {@apply  border border-matcha rounded;}
</style>
