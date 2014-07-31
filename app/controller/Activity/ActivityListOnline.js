Ext.define('WenBusiness.controller.Activity.ActivityListOnline',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ActivityListOnlineViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
			
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('act_community.html',view,false);
                
	},
});