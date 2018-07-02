var DFT = function(tickssets, preInput){
	var ticks = {
		template: '#ticks-template',
		props:{
			ticks: {
				default: [],
			},
			answers: []
		},
	    methods: {
	    }
	}
	
	var tickSet = {
			template: '#tickSet-template',
			props:{
				tickset: {
					default: [],
				},
				answers: []
			},
			components:{
				"ticks" : ticks
			},
			methods: {
			}
	}

	var app = new Vue({
		el: '#app',
		data: {
			tickSets: [],
			answers: []
		},
		components:{
			"tickset" : tickSet
		},
		methods:{
			init: function(tickSetsInput, formFills){
				this.tickSets = tickSetsInput
				this.answers = formFills
			}
		},
		mounted: function(){
			$(document).ready(function(){
			    $('[data-toggle="tooltip"]').tooltip(); 
			});
		}
	})
	app.init(tickssets, preInput)
}

var dpt = function(ticksSets, preInputs){
	DFT(ticksSets, preInputs)
} 