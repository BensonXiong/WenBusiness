Ext.define('WenBusiness.view.Item.NewItem',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'NewItem',
	
	config: {
		id: config.viewIdList.NewItemViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '创建项目',  
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