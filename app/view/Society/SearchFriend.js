Ext.define('WenBusiness.view.Society.SearchFriend',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'SearchFriend',
	
	config: {
		id: config.viewIdList.SearchFriendViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '搜索好友',  
                items: [
                    {
                        xtype: 'button',                     
                        ui:'customplain',
                        iconCls:'backIconCls',     
                        cls:'leftTopIconCls',                  
                        align:'left',
                    }
                ],                  
          }]
	}	
});