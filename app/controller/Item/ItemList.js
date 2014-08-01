Ext.define('WenBusiness.controller.Item.ItemList',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ItemListViewId,
			segmentedButton:'#'+config.viewIdList.ItemListViewId+ ' segmentedbutton',
			addButton:'#'+config.viewIdList.ItemListViewId+ ' button[iconCls=AddIconCls]',
			searchButton:'#'+config.viewIdList.ItemListViewId+ ' button[iconCls=SearchIconCls]',
		},
		control: {
			view: {
				initialize: 'doInitialize',
				show:'doViewShow',
			},
			segmentedButton:{
				toggle:'doToggle'
			},
			addButton:{
				tap:'doAddButtonTap'
			},
			searchButton:{
				tap:'doSearchButtonTap'
			}
		}
	},
	
	doInitialize: function(view){
		Ext.getCmp(config.viewIdList.ItemListFinishedViewId) || Ext.create('WenBusiness.view.Item.ItemListFinished');
  
	},

	doViewShow:function(view)
	{
			console.log('item list show');
		if( !view.loaded)
                {
              var itemlistInProgressView = Ext.getCmp(config.viewIdList.ItemListInProgressViewId) || Ext.create('WenBusiness.view.Item.ItemListInProgress');
              view.setActiveItem(itemlistInProgressView);   
                }  
	},

	doToggle:function(segmentedButton,button,isPressed,options)
	{

		if( isPressed == true )
		{
			var view =segmentedButton.up('dataview');
			if ( button.getText() == "进行中")
			{

              var itemListFinishedView = Ext.getCmp(config.viewIdList.ItemListFinishedViewId);
              var itemlistInProgressView = Ext.getCmp(config.viewIdList.ItemListInProgressViewId);
              view.remove(itemListFinishedView,false);
              view.setActiveItem(itemlistInProgressView);

               
			}
			else
			{
			  var itemListFinishedView = Ext.getCmp(config.viewIdList.ItemListFinishedViewId) || Ext.create('WenBusiness.view.Item.ItemListFinished');
              var itemlistInProgressView = Ext.getCmp(config.viewIdList.ItemListInProgressViewId);
              view.remove(itemlistInProgressView,false);
              view.setActiveItem(itemListFinishedView);

               
             
			}
		}
	},


	doAddButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.NewItemViewId) || Ext.create('WenBusiness.view.Item.NewItem');                 
         util.viewportAnimate(view, {type: 'slide', direction: 'left'});
	},

	doSearchButtonTap:function()
	{

	}
});