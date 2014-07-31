Ext.define('WenBusiness.controller.Society.SearchFriend',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.SearchFriendViewId,
			backButton:'#'+config.viewIdList.SearchFriendViewId +' button',
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
			backButton:{
				tap:'doTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('searchfriend.html',view,false);
                
	},

	doTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(3);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});