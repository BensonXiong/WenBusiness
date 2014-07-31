Ext.define('WenBusiness.controller.Activity.ActivityStar',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ActivityStarViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('act_star.html',view,false);
                
	}
});