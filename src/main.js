import Vue from 'vue'
import App from './App.vue'
import GoogleMap from './GoogleMap'
import ListView from './ListView'
import myOverlay from './myOverlay'
window.EventBus = new Vue({
 data(){
   return {
     sanfrancisco: [33.4484, -112.0740]
   }
 }
});

Vue.component('GoogleMap', GoogleMap);
Vue.component('ListView', ListView);
Vue.component('myOverlay', myOverlay);

new Vue({
 el: '#app',
 render: h => h(App)
});

	
	Atlantians: [
	{
		firstName: "Dwight",
		lastName:  "Schrute",
		Role:      "Driver",
		Space:     "5",
		Address:   "Tempe, AZ"
	},
	{
		firstName: "Jim",
		lastName:  "Halber",
		Role:      "Rider",
		Space:     "N/A", 
		Address:   "Chandler, AZ"
	},
	{
		firstName: "Michael",
		lastName:  "Scott",
		Role:      "Rider",
		Space:     "N/A",
		Address:   "Gilber, AZ" 
	},
	{
		firstName: "Pam",
		lastName:  "Halbert",
		Role:      "Rider",
		Space:     "N/A",
		Address:   "Gilber, AZ"
	}
	]

