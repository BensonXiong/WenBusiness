Ext.define('WenBusiness.controller.Activity.ActivityCommunity',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ActivityCommunityViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('act_community.html',view,false);
                
	}
});