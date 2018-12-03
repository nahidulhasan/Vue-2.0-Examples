Vue.component('message',{

	props:['tittle', 'body'],

	template:`
          
           <article class="message">

		  <div class="message-header">
		    {{tittle}}
		  </div>

		  <div class="message-body">

		  {{body}}

		  </div>

		</article>

	`

});

	
new Vue({

	el:"#root"

});
