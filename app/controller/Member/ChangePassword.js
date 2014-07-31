Ext.define('WenBusiness.controller.Member.ChangePassword',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ChangePasswordViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('new_pass.html',view,false);
                
	}
});