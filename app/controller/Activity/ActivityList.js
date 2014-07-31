Ext.define('WenBusiness.controller.Activity.ActivityList',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ActivityListViewId,
			addButton:'#'+config.viewIdList.ActivityListViewId+ ' button[iconCls=AddIconCls]',
			segmentedButton:'#'+config.viewIdList.ActivityListViewId+ ' segmentedbutton',
		},
		control: {
			view: {
				initialize: 'doInitialize',
				show:'doViewShow',
			},
			addButton:{
				tap:'doAddButtonTap'
			},
			segmentedButton:{
				toggle:'doToggle'
			},
		}
	},
	
	doInitialize: function(view){
	 Ext.getCmp(config.viewIdList.ActivityListOfflineViewId) || Ext.create('WenBusiness.view.Activity.ActivityListOffline');
                
	},

	doViewShow:function(view)
	{
		if( !view.loaded)
                {
              var activityListOnlineView = Ext.getCmp(config.viewIdList.ActivityListOnlineViewId) || Ext.create('WenBusiness.view.Activity.ActivityListOnline');
              view.setActiveItem(activityListOnlineView);   
                }  
	},

	doAddButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.NewActivityViewId) || Ext.create('WenBusiness.view.Activity.NewActivity');                 
         util.viewportAnimate(view, {type: 'slide', direction: 'left'});
	},

	doToggle:function(segmentedButton,button,isPressed,options)
	{

		if( isPressed == true )
		{
			var view =segmentedButton.up('dataview');
			if ( button.getText() == "线上社区")
			{

              var activityListOfflineView = Ext.getCmp(config.viewIdList.ActivityListOfflineViewId);
              var activityListOnlineView = Ext.getCmp(config.viewIdList.ActivityListOnlineViewId);
              view.remove(activityListOfflineView,false);
              view.setActiveItem(activityListOnlineView);

               
			}
			else
			{
			  var activityListOfflineView = Ext.getCmp(config.viewIdList.ActivityListOfflineViewId) || Ext.create('WenBusiness.view.Activity.ActivityListOffline');
              var activityListOnlineView = Ext.getCmp(config.viewIdList.ActivityListOnlineViewId);
              view.remove(activityListOnlineView,false);
              view.setActiveItem(activityListOfflineView);

               
             
			}
		}
	},
});