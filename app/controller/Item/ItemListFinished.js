Ext.define('WenBusiness.controller.Item.ItemListFinished',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ItemListFinishedViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
			
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

         //       util.htmlContentHandler('itemlistfinished.html',view,false);
                
	},

});