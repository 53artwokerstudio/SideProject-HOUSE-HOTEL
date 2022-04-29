<template>
        <div class="flex justify-center mb-6">
            <a href="#" 
            class="w-full py-3  inline-block booking_Button">
            {{ bookingTitle }}
            </a>
        </div>
</template>

<script>
export default {
  name: "bookingButton",
  props:['bookingTitle'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="postcss">
    .booking_Button{
        @apply  bg-matcha text-white text-center border-2 border-white
                hover:bg-white hover:text-matcha hover:border-matcha transition ;
    }
</style>
