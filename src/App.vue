<template>
  <div id="app">
    <div id="nav" class="nav absolute">
        <nav class="nav-outside flex items-center justify-between flex-wrap">
            <div class="nav-logo  flex items-center">
                <h1>好室旅店。HOUSE HOTEL</h1>
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
            
                <div class="nav-roomlist-item sm:flex-grow">
                    <router-link to="/room"><a href="#responsive-header"> Single Room1 </a></router-link>
                    <router-link to="/room"><a href="#responsive-header"> Single Room2 </a></router-link>
                    <router-link to="/room"><a href="#responsive-header"> Single Room3 </a></router-link>
                    <router-link to="/room"><a href="#responsive-header"> Single Room4 </a></router-link>
                    <router-link to="/room"><a href="#responsive-header"> Single Room5 </a></router-link>
                    
                </div>
            <div>
        </div>
            </div>
        </nav>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
    data() {
        return {
              	open: false,
        }
    },
      methods: {
  	toggle() {
    	this.open = !this.open
    }
  }
}
</script>

<style lang="postcss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav           {@apply   z-10 w-full;}
.nav-outside   {@apply   bg-black bg-opacity-75 p-6 sm:px-12;}
.nav-logo      {@apply   text-white mr-6 ;}
.nav-btn       {@apply   px-3 py-2  text-white ;}
.nav-roomlist  {@apply  w-full;}
.nav-roomlist-item {@apply   text-sm;}
.nav-roomlist-item a{@apply  block my-8 sm:inline-block sm:my-0 text-white mr-6;}
.nav-roomlist-item a:last-child {@apply mr-0;}

</style>
