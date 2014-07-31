Ext.define('WenBusiness.controller.Login.SinaLogin',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.SinaLoginViewId,
			backButton:'#'+config.viewIdList.SinaLoginViewId +' button',
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

                util.htmlContentHandler('sina_login.html',view,false);

                       Ext.get(self).on({
                    tap:function(event,dom)
                    {
                      util.showAlertMsgBox('提示','暂不支持Sina登录');      
                    },
                    delegate:'.f-btn-red'
                });
                
	},

	doBackButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.LoginMainViewId) || Ext.create('WenBusiness.view.Login.LoginMain');
         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});