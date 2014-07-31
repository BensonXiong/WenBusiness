Ext.define('WenBusiness.controller.Activity.ItemDiscussionList',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ItemDiscussionListViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('act_item.html',view,false);
                
	}
});