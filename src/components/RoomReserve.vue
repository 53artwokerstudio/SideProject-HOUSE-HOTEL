<template>
            <div class="reserve mt-16 mx-8">
            
                <p class="mb-2 font-semibold">姓名</p>
                <input type="text" class="room_reserve_list_input w-full  p-1  mb-4">
            
                <p class="mb-2 font-semibold">手機號碼</p>
                <input type="text" class="room_reserve_list_input w-full  p-1  mb-4">


                <!-- <vc-date-picker 
                v-model="inDay"
                :min-date="new Date(new Date().getTime() + 24 * 60 * 60 * 1000)"
                :max-date="maxDay"
                :disabled-dates="disableDates"
                :masks="masks"
                :attributes="attribute">
                    <template v-slot="{ inputValue, inputEvents }">
                    <p class="mb-2 font-semibold">入住日期</p>
                    <input  type="text" 
                            class="room_reserve_list_input w-full  p-1  mb-4"
                            :value="inputValue"
                            v-on="inputEvents">
                    </template>
                </vc-date-picker>
                
                <vc-date-picker
                 v-model="outDay"
                :min-date="new Date(new Date().getTime() + 24 * 60 * 60 * 1000)"
                :max-date="maxDay"
                :disabled-dates="disableDates"
                :attributes="attribute"
                :masks="masks">
                    <template v-slot="{ inputValue, inputEvents }">
                    <p class="mb-2 font-semibold">退房日期</p>
                    <input  type="text" 
                            class="room_reserve_list_input w-full  p-1  mb-4"
                            :value="inputValue"
                            v-on="inputEvents">
                    </template>
                </vc-date-picker> -->

            <p class="mb-2 font-semibold">預約日期</p>
            <DateRange/>

                <div class="flex justify-between sm:justify-start mb-2">
                    <p class="mb-2 pr-2"> 預計行程：</p>
                    <p class="mb-2 font-semibold"> {{ totalDays }} 天 / 1 晚平日 </p>
                </div>

                <hr class="border border-matcha mb-2">
               
               <div class="flex flex-row-reverse mb-6">
                   <div class="flex flex-col items-end">
                        <p class="block">總計</p>
                        <p class="text-3xl font-semibold">$1380</p>
                   </div>
    
               </div>


                <bookingButton 
                bookingTitle="確認預定"/>
            </div>
</template>

<script>
import bookingButton from "@/components/bookingbutton.vue";
import DateRange from "@/components/DateRange.vue";

export default {
    name:'RoomReserve',
    components:{ bookingButton , DateRange },
  data() {
    return {
         totalDays: 0,
    }
    }
}
</script>

<style lang="postcss">
    .room_reserve_list_input   {@apply  border border-matcha rounded;}
</style>
