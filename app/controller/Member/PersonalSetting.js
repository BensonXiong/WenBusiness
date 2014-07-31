Ext.define('WenBusiness.controller.Member.PersonalSetting',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			projectDockingView:'#'+config.viewIdList.PersonalSettingViewId,
			backButton:'#'+config.viewIdList.PersonalSettingViewId +' button',
		},
		control: {
			projectDockingView: {
				initialize: 'doInitialize'
			},
			backButton:{
				tap:'doTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('card_info.html',view,false);
                
	},

	doTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(4);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});