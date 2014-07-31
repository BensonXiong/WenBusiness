Ext.define('WenBusiness.controller.Login.FindPasswordMail',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			projectDockingView:'#'+config.viewIdList.FindPasswordMailViewId,
		},
		control: {
			projectDockingView: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('find_pass1.html',view,false);
                Ext.get(self).on({
                    tap:function(event,dom)
                    {
                    	var email = Ext.DomQuery.select('input[type=email]')[0].value;
                    	
                     console.log(email);                
                    },
                    delegate:'.f-btn'
                });
	}
});