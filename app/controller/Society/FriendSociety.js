Ext.define('WenBusiness.controller.Society.FriendSociety',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			friendSocietyView:'#'+config.viewIdList.FriendSocietyViewId,
			friendSocietyViewPanel: '#'+config.viewIdList.FriendSocietyViewId+'panel',
			searchButton:'#'+config.viewIdList.FriendSocietyViewId+ ' button',

		},
		control: {
			friendSocietyView: {
				initialize: 'dofsviewInitialize',
				activate:'dofsActivate',
				itemtap:'doListItemtap',
			},
			friendSocietyViewPanel:{
				initialize:'dofsviewPanelInitialize'
			},
			searchButton:{
				tap:'doTap'
			}
		}
	},
	
	dofsviewInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('friendsociety.html',view,true);
                
	},

	dofsActivate:function(view)
	{
		if( !view.loaded)
                {
                  view.getStore().load();
                }  
	},

	dofsviewPanelInitialize:function(view)
	{

		util.htmlContentHandler('friendsocietypanel.html',view,false);
				    var self = view.getId();
				    Ext.get(self).on({
                    tap:function(event,dom)
                    {
                 var view = Ext.getCmp(config.viewIdList.CircleListViewId) || Ext.create('WenBusiness.view.Society.CircleList');                 
                  util.viewportAnimate(view, {type: 'slide', direction: 'left'});
                    },
                    delegate:'.friCircle_class'
                });

	},

	doListItemtap:function( view, index, target, record, e, eOpts )
    {
    	console.log(record);
                 var view = Ext.getCmp(config.viewIdList.FriendCardViewId) || Ext.create('WenBusiness.view.Society.FriendCard');
                 view.down('titlebar').setTitle(record.data.nick);
                 util.viewportAnimate(view, {type: 'slide', direction: 'left'});
    },

	doTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.SearchFriendViewId) || Ext.create('WenBusiness.view.Society.SearchFriend');                 
         util.viewportAnimate(view, {type: 'slide', direction: 'left'});
	}
});