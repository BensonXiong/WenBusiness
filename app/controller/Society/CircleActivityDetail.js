Ext.define('WenBusiness.controller.Society.CircleActivityDetail',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.CircleActivityDetailViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('circle_view.html',view,false);
                
	}
});