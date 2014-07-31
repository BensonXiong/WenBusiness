Ext.define('WenBusiness.controller.Login.QQLogin',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.QQLoginViewId,
			backButton:'#'+config.viewIdList.QQLoginViewId +' button',
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
			backButton:{
				tap:'doBackButtonTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('qq_login.html',view,false);

                       Ext.get(self).on({
                    tap:function(event,dom)
                    {
                     util.showAlertMsgBox('提示','暂不支持qq登录');     
                    },
                    delegate:'.f-btn-green'
                });
                
	},

	doBackButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.LoginMainViewId) || Ext.create('WenBusiness.view.Login.LoginMain');
         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});