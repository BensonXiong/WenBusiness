Ext.define('WenBusiness.controller.Login.FindPassword',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			findPasswordView:'#'+config.viewIdList.FindPasswordViewId,
			segmentedButton:'#'+config.viewIdList.FindPasswordViewId+ ' segmentedbutton',
			backButton:'#'+config.viewIdList.FindPasswordViewId +' button[iconCls=backIconCls]',
		},
		control: {
			findPasswordView: {
				initialize:'doInitialize',
				show:'doViewShow',
			},
			segmentedButton:{
				toggle:'doToggle'
			},
			backButton:{
				tap:'doButtonTap'
			}
		}
	},
	
	doInitialize:function(view)
	{
       //To solve the toggle flash issue 
      Ext.getCmp(config.viewIdList.FindPasswordMailViewId) || Ext.create('WenBusiness.view.Login.FindPasswordMail');
	},

	doViewShow:function(view)
	{
		if( !view.loaded)
                {
              var findPasswordPhoneView = Ext.getCmp(config.viewIdList.FindPasswordPhoneViewId) || Ext.create('WenBusiness.view.Login.FindPasswordPhone');
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

              var findPasswordMailView = Ext.getCmp(config.viewIdList.FindPasswordMailViewId);
              var findPasswordPhoneView = Ext.getCmp(config.viewIdList.FindPasswordPhoneViewId);
              view.remove(findPasswordMailView,false);
              view.setActiveItem(findPasswordPhoneView);

               
			}
			else
			{
			  var findPasswordMailView = Ext.getCmp(config.viewIdList.FindPasswordMailViewId) || Ext.create('WenBusiness.view.Login.FindPasswordMail');
              var findPasswordPhoneView = Ext.getCmp(config.viewIdList.FindPasswordPhoneViewId);
              view.remove(findPasswordPhoneView,false);
              view.setActiveItem(findPasswordMailView);

               
             
			}
		}
	},

	doButtonTap:function()
	{
		var view = Ext.getCmp(config.viewIdList.LoginViewId) || Ext.create('WenBusiness.view.Login.Login');
         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});