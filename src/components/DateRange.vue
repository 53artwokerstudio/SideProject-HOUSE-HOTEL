<template>
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
</template>

<script>
export default {
name: "DateRange",
data() {
    return {
        inDay:'',
        outDay:'',
        totalDays: 0,
      range: {
        start:'',
        end: '',
      },
       masks: {
        input: 'YYYY-MM-DD',
      },
       modelConfig: {
        type: 'number',
      },
      attribute: [{ 
          key: 'selectedDay', 
          highlight: true, 
          dates: '' }],

    };
},
  watch: {
    inDay: function () {
      const vm = this;
      let inDay = new Date(vm.inDay);
      let outDay = new Date(vm.outDay);
      vm.attribute[0].dates = inDay;
      if (inDay > outDay) {
         [inDay, outDay] = [outDay, inDay];
      }
    },
    outDay: function () {
      const vm = this;
      const outDay = new Date(vm.outDay);
      vm.attribute[0].dates = outDay;
    },
  },
computed:{
mathTotalDays(){
    let vm = this;
    let inDayTotal = vm.range.start;
    let outDayTotal = vm.range.end;
    console.log(typeof inDayTotal);
    console.log(inDayTotal);
    console.log(outDayTotal);
    
    let totalDays = (outDayTotal - inDayTotal) / (1000 * 60 * 60 * 24); 

    totalDays = Math.ceil(totalDays) 
    //(計算天數無條件進位)
    console.log(`總天數${totalDays}日`);

    return  totalDays;
},
}
}
</script>

<style lang="postcss">
    .room_reserve_list_input   {@apply  border border-matcha rounded;}
</style>

