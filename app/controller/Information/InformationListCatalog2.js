Ext.define('WenBusiness.controller.Information.InformationListCatalog2',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.InformationListCatalog2ViewId,
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