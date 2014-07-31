Ext.define('WenBusiness.controller.Information.InformationListCatalog3',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.InformationListCatalog3ViewId,
			rotatingCarousel:'rotatingCarousel',
		},
		control: {
			view: {
				initialize: 'doViewInitialize'
			},
			rotatingCarousel: {
				
			},
		}
	},
	
	doViewInitialize: function(view){
                
	},

});