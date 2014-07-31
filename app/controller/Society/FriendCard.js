Ext.define('WenBusiness.controller.Society.FriendCard',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.FriendCardViewId,
			backButton:'#'+config.viewIdList.FriendCardViewId +' button[iconCls=backIconCls]',
		},
		control: {
			view: {
				initialize: 'doInitialize',

			},
			backButton:{
				tap:'doButtonTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('friendcard.html',view,false);
                
	},

	doButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(3);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});