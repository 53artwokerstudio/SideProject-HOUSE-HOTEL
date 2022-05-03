<template>
            <div class="reserve mt-16 mx-8">

                <div class="flex justify-between">
                <p class="mb-2 font-semibold">姓名</p>
                <span class="text-red-800 text-right text-xs"
                      v-show="usernameError"> 
                      {{ userErrMsg }}
                </span>
                </div>
                <input  type="text"
                        name="username"
                        v-model="username"
                        class="room_reserve_list_input w-full  p-1  mb-4">

            
                <div class="flex justify-between">
                <p class="mb-2 font-semibold">手機號碼</p>
                <span class="text-red-800 text-right text-xs"
                      v-show="userTelError"> 
                      {{ userErrMsg }}
                </span>
                </div>
                <input  type="text" 
                        name="userTel"
                        v-model="userTel"
                        class="room_reserve_list_input w-full  p-1  mb-4">


                <p class="mb-2 font-semibold">預約日期</p>
                <div>

                <vc-date-picker v-model="range" 
                                color="green"
                                :masks="masks"
                                :model-config="modelConfig"
                                :attributes="attribute"
                                is-range>
                <template v-slot="{ inputValue, inputEvents }">
                    <div class="flex justify-center items-center">
                    <input
                        :value="inputValue.start"
                        v-on="inputEvents.start"

                        class="room_reserve_list_input w-full  p-1  mb-4"
                    />
                    <svg
                        class="w-4 h-4 mx-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                    <input
                        :value="inputValue.end"
                        v-on="inputEvents.end"
                        class="room_reserve_list_input w-full  p-1  mb-4"
                    />
                    </div>
                </template>
                </vc-date-picker>

                </div>

                <div class="flex justify-between sm:justify-start mb-2">
                    <p class="mb-2 pr-2"> 預計行程：</p>
                    <p class="mb-2 font-semibold"> 
                        {{ selectDays[0] }} 天，包含
                        {{ selectDays[1] }} 晚平日 /
                        {{ selectDays[2] }} 晚假日 </p>
                </div>

                <hr class="border border-matcha mb-2">
               
               <div class="flex flex-row-reverse mb-6">
                   <div class="flex flex-col items-end">
                        <p class="block">總計</p>
                        <p class="text-3xl font-semibold" >$ {{ selectDays[3] }}</p>
                   </div>
    
               </div>

                <div @click="Booking">
                <bookingButton bookingTitle="確認預定"/>
                </div>


            </div>
</template>

<script>
import bookingButton from "@/components/bookingbutton.vue";

export default {
name:'RoomReserve',
props:['roomData'],
components:{ bookingButton },
data() {
   return {
    username: '',
    usernameError: false,
    userErrMsg: 'nothingHere',
    userTel: '',
    userTelError: false,

    inDay:'',
    outDay:'',

    range: { 
        start:'', 
        end: '',
        dates: { weekdays: [1, 7] } },
    masks: { input: 'YYYY-MM-DD',},
    modelConfig: {  type: 'number', },
    attribute: [{ 
        key: 'selectedDay', 
        highlight: true, 
        dates: { weekdays: [1, 7] }}],
    }
    },
watch:{
    username: function (val) {
        let vm = this;
        let el = val.trim();
        let isText = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
        if(!isText.test(el)) {
            vm.usernameError = true ;
            vm.userErrMsg = '請輸入正確名稱';
            return;
        }else{
            vm.usernameError = false;
            vm.userErrMsg = '';
            return;
        }
        },
    userTel: function (val) {
        let vm = this;
        let el = val.trim();
        let isNum = /^[0-9]{10}$/g;
        if(!isNum.test(el)) {
            vm.userTelError = true ;
            vm.userErrMsg = '請輸入正確電話';
            return;
        }else{
            vm.userTelError = false;
            vm.userErrMsg = '';
            return;
        }
        },
    inDay: function () {
      const vm = this;
      let inDay = new Date(vm.inDay);
      let outDay = new Date(vm.outDay);
      vm.attribute[0].dates = inDay;
      if (inDay > outDay) {
         [inDay, outDay] = [outDay, inDay];
      }
      return inDay;
    },
    outDay: function () {
      const vm = this;
      const outDay = new Date(vm.outDay);
      vm.attribute[0].dates = outDay;

      return outDay;
    },
},
computed:{
      selectDays () {
        let vm = this;
        let inDayTotal = vm.range.start;
        let outDayTotal = vm.range.end;
        let normalPrice = vm.roomData.normalDayPrice;
        let holidayPrice = vm.roomData.holidayPrice;
        let normalDays = 0;
        let holidayDays = 0;
        let NDTotal = 0;
        let HDTotal = 0;
        let PriceTotal = 0;
        let selectWeek =[];
        let selectData;

        let totalDays = (outDayTotal - inDayTotal) / (1000 * 60 * 60 * 24); 
        totalDays = Math.ceil(totalDays);

        for (let index = 0; index < totalDays+1; index++) { 
        let day = new Date(inDayTotal); 
        day.setDate(day.getDate() + index);
        selectWeek.push(day.getDay());
        };

        selectWeek.forEach(function(item) {
            if (item === 0 || item >=5 ){
                holidayDays += 1;        
                HDTotal = holidayDays*holidayPrice;
                return;
            }else if(item ===! 0 || item >=!5 ){
                normalDays += 1;
                NDTotal = normalDays*normalPrice;
                return;
            }else{
                return;
            }
        })
            PriceTotal = NDTotal + HDTotal;
            selectData = new Array( totalDays, normalDays, holidayDays ,PriceTotal);

        return selectData;
        },
    },
methods:{
    Booking(){
        let vm = this;
        let roomDataId = vm.roomData.id;
        console.log(roomDataId);
        let inDayTime = vm.range.start;
        let outDayTime = vm.range.end;
        let addDate = [];

        let totalDays = (outDayTime - inDayTime) / (1000 * 60 * 60 * 24); 
        totalDays = Math.ceil(totalDays); 

        for (let index = 0; index < totalDays+1; index++) { 
        let myDay = new Date(inDayTime); 
        myDay.setDate(myDay.getDate() + index);

        let year = myDay.getFullYear();
        let month = myDay.getMonth() + 1;
        let day = myDay.getDate();

        if (month > 12) {
            year++;
            month -= 12;
            }

        if (month < 10) {
            month = `0${month}`;
            }

        if (day < 10) {
            day = `0${day}`;
            }

        let thisDay = `${year}-${month}-${day}`; 
        addDate.push(thisDay.toString()); 
        };

        var booking ={
                name: vm.username,
                tel: vm.userTel,
                date: addDate,
                };
        console.log(booking);

        var axios = require('axios');

        var config = {
        method: 'post',
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/'+ roomDataId,
        headers: { 
            'Authorization': 'Bearer kkc1YuXLPcBEPNQl4iMbEfy0GzRcr05lBLl7lF1iVTjH7EDxgqeyvMEU8lYf', 
        },
        data:booking,
        };
        console.log( config );


        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        return;
        })
        .catch(function (error) {
        console.log(error);
        });
    },
}
}
</script>

<style lang="postcss">
    .room_reserve_list_input         {@apply  border border-matcha rounded;}
</style>
