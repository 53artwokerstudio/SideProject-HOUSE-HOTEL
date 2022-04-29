<template>
    <ul class="index-roomlist">
        <li class=" group relative flex items-center justify-center"
            v-for="item in roomLists"
            :key="item.id">
            <p class="hidden absolute group-hover:inline-block group-hover:z-50"> 
                {{ item.name }}
            </p>
            <img :src=" item.imageUrl" 
                    alt="" srcset=""
                    class="object-cover overflow-hidden w-full h-full transition opacity-100 group-hover:opacity-20 z-0">
        </li>
    </ul>
</template>

<script>
export default {
    name:'indexRoomlist',
    data(){
    return{
        roomLists:[],
    }},
    methods: {
    getRoominfos(){
        let vm = this;
        var axios = require('axios');

        var config = {
        method: 'get',
        url: 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',
        headers: { 
            'Accept': 'application/json', 
            'Authorization': 'Bearer kkc1YuXLPcBEPNQl4iMbEfy0GzRcr05lBLl7lF1iVTjH7EDxgqeyvMEU8lYf'
        }
        };
        
        axios(config)
        .then(function (response) {
        vm.roomLists = response.data.items;
        console.log(vm.roomLists);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    },
    created() {
    this.getRoominfos();
    }

    
}
</script>

<style lang="postcss">
    .index-roomlist    {@apply  hidden sm:grid grid-cols-3;}
    .index-roomlist li {@apply  w-64 h-64 bg-matcha text-center  text-white;}
</style>