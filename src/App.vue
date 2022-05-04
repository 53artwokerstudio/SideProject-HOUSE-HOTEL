<template>
  <div id="app">

    <div id="nav" class="nav absolute">
        <nav class="nav-outside flex items-center justify-between flex-wrap">
            <div class="nav-logo  flex items-center">
                <router-link to="/"><h1>好室旅店。HOUSE HOTEL</h1></router-link>
            </div>
            
            <div class="block sm:hidden">
                <button @click="toggle" 
                        class="nav-btn flex items-center">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            
            <div :class="open ? 'block': 'hidden'" 
                class="w-full sm:flex sm:flex-row-reverse sm:items-center sm:w-auto">
            
                <ul class="nav-roomlist-item sm:flex-grow">
                    <li v-for="(item) in NavRoomLists"
                        :key="item.id">
                        <router-link :to="`/room/${item.id}`">{{ item.name }}</router-link>
                    </li>
                    
                </ul>
            <div>
        </div>
            </div>
        </nav>
    </div>

    <transition appear name="fade" >
        <router-view />
    </transition>

  </div>
</template>

<script>
export default {
    data() {
    return {
        open: false,
        NavRoomLists:[],
    }
    },
    methods: {
    getNavRoomLists(){
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
    vm.NavRoomLists = response.data.items;
    console.log(vm.NavRoomLists);
    })
    .catch(function (error) {
    console.log(error);
    });
    },
    toggle() {
    this.open = !this.open;
    },
    },
    watch: {
    $route(to, from) {
    console.log(to , from);
    this.open = false;
    }},
    created() {
    this.getNavRoomLists();
    },
}
</script>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .05s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

.nav           {@apply   z-10 w-full;}
.nav-outside   {@apply   bg-black bg-opacity-75 p-6 sm:px-12;}
.nav-logo      {@apply   text-white mr-6 ;}
.nav-btn       {@apply   px-3 py-2  text-white ;}
.nav-roomlist  {@apply  w-full;}
.nav-roomlist-item {@apply   text-sm;}
.nav-roomlist-item li{@apply  block my-8 sm:inline-block sm:my-0 text-white mr-6;}


</style>
