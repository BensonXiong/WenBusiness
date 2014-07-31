Ext.define('WenBusiness.view.Item.ItemDetail',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'ItemDetail',
	
	config: {
		id: config.viewIdList.ItemDetailViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '项目',  
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