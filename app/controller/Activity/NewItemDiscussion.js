Ext.define('WenBusiness.controller.Activity.NewItemDiscussion',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.NewItemDiscussionViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('act_discuss.html',view,false);
                
	}
});