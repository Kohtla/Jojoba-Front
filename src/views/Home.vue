<template>
  <div class="home">
    <logo/>
  </div>
</template>

<script>
// @ is an alias to /src
import Logo from '@/components/Logo.vue'

export default {
  name: 'Home',
  components: {
    'logo':Logo
  }
}
</script>
