Ext.define('WenBusiness.view.Society.FriendCard',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'FriendCard',
	
	config: {
		id: config.viewIdList.FriendCardViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '',  
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