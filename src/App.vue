<template>
  <v-app>

    <v-content>
      <login/>
    </v-content>
  </v-app>
</template>

<script>
import Login from './components/login'

export default {
  name: 'App',
  components: {
    Login
  },
  data () {
    return {
      //
    }
  },
  mounted(){
	this.$geb.emit({id:"system-ready"})
  },
  created(){
	// this.$geb.emit({"asdf":"asdf"})
// 	this.$geb.getBus().subscribe(data => {
//       console.log(data)
//       // Do anything you want with 'data'
//   })

  }
}
</script>
