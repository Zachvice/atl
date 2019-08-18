<!DOCTYPE html>
<template>
   <div align="center">
       <h1>ListView</h1>
       <p>Atlantians: {{ markers.length }}</p>
       <table class="table">
           <thead>
               <tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>	Role</th>
                   <th>	Space</th>
               </tr>
           </thead>
           <tbody id="LV">
               <tr v-for="marker in markers">
                   <td>{{ marker.index }}</td>
                   <ol>
                   	<li v-for="atlantian in Atlantians" :key="Atlantians.firstName">
                   	{{Atlantians.firstName}}
                   	</li>
                   	</ol>
                   <td>{{ Atlantians.latitude }}</td>
                   	<ol>
                   		<li v-for="lastName in Atlantians">
                   			{{Atlantias.lastName}}
                   		</li>
                   	</ol>
                   <td>{{ Atlantians.Role }}</td>
                   <ol>
                   	<li v-for="Role in Atlantians">
                   		{{Atlantians.Role}}
                   	</li>
                   </ol>
                   	<td>{{ marker.Space }}</td>
                   	 <ol>
                   		<li v-for="Space in Atlantians">
                   			{{Atlantians.Space}}
                   		</li>
                   	</ol>
               </tr>
           </tbody>
       </table>
   </div>
</template>
<script>
   export default {
     created(){
       EventBus.$on('add-marker', (marker)=>{
         marker['index'] = this.index;
         this.index++;
         this.markers.push(marker);
       });
       EventBus.$on('clear-markers', ()=>{
         this.markers = [];
         this.index = 0;
       });
     },
     data(){
       return {
         index: 0,
         markers: []
       };
     }
   }
</script>


