Ext.define('WenBusiness.controller.Login.NewPassword',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			projectDockingView:'#'+config.viewIdList.NewPasswordViewId,
		},
		control: {
			projectDockingView: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('reset_pass.html',view,false);
                
	}
});