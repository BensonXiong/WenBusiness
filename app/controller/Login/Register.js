Ext.define('WenBusiness.controller.Login.Register',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.RegisterViewId,
			segmentedButton:'#'+config.viewIdList.RegisterViewId+ ' segmentedbutton',
			backButton:'#'+config.viewIdList.RegisterViewId +' button[iconCls=backIconCls]',
		},
		control: {
			view: {
				initialize: 'doInitialize',
				show:'doViewShow',
			},
			segmentedButton:{
				toggle:'doToggle'
			},
			backButton:{
				tap:'doBackButtonTap'
			}
		}
	},
	
	doInitialize: function(view){
	      Ext.getCmp(config.viewIdList.MailRegisterViewId) || Ext.create('WenBusiness.view.Login.MailRegister');
                
	},

	doViewShow:function(view)
	{
		if( !view.loaded)
                {
              var findPasswordPhoneView = Ext.getCmp(config.viewIdList.MobileRegisterViewId) || Ext.create('WenBusiness.view.Login.MobileRegister');
              view.setActiveItem(findPasswordPhoneView);   
                }  
	},

	doToggle:function(segmentedButton,button,isPressed,options)
	{

		if( isPressed == true )
		{
			var view =segmentedButton.up('dataview');
			if ( button.getText() == "手机")
			{

               var mailRegisterView = Ext.getCmp(config.viewIdList.MailRegisterViewId);
              var mobileRegisterView = Ext.getCmp(config.viewIdList.MobileRegisterViewId);
              view.remove(mailRegisterView,false);
              view.setActiveItem(mobileRegisterView);
			}
			else if ( button.getText() == "邮箱")
			{
				
               var mailRegisterView = Ext.getCmp(config.viewIdList.MailRegisterViewId);
              var mobileRegisterView = Ext.getCmp(config.viewIdList.MobileRegisterViewId);
              view.remove(mobileRegisterView,false);
              view.setActiveItem(mailRegisterView);
			}
		}
	},

	doBackButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.LoginMainViewId) || Ext.create('WenBusiness.view.Login.LoginMain');
         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});