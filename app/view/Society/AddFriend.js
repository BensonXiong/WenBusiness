Ext.define('WenBusiness.view.Society.AddFriend',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'AddFriend',
	
	config: {
		id: config.viewIdList.AddFriendViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '添加好友',  
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