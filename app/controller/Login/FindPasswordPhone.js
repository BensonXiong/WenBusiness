Ext.define('WenBusiness.controller.Login.FindPasswordPhone',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			projectDockingView:'#'+config.viewIdList.FindPasswordPhoneViewId,
		},
		control: {
			projectDockingView: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('find_pass.html',view,false);
                Ext.get(self).on({
                    tap:function(event,dom)
                    {
                   // 	var email = Ext.DomQuery.select('input[type=email]')[0].value;
                    	var phone = Ext.DomQuery.select('input[type=text]')[0].value;  
                    	console.log(phone);           
                    },
                    delegate:'.f-btn'
                });
                
	}
});