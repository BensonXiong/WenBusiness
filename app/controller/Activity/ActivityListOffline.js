Ext.define('WenBusiness.controller.Activity.ActivityListOffline',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ActivityListOfflineViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
			
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('act_line.html',view,false);
                
	},
});