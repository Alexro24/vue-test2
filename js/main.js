// JavaScript Document


(function()
{
  require.config(
  {
    baseUrl: "js/",
    paths:{
      vue: "https://cdn.rawgit.com/edgardleal/require-vuejs/aeaff6db/dist/require-vuejs.min",
      Vuetify: "https://unpkg.com/vuetify/dist/vuetify",
      VueRouter: "https://unpkg.com/vue-router/dist/vue-router"
    }
  });
  
  require(["Vuetify", "router", "vue!home"], 
          function(Vuetify, router, home)
  {
    //Vue.use(Vuetify);
    
    Vue.config.productionTip = false;
    
    new Vue({
      el: '#app',
      router: router,
      render: h => h(home)
    })
    
  });
  
})();


