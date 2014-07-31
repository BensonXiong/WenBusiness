Ext.define('WenBusiness.view.Information.NewInformation',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'NewInformation',
	
	config: {
		id: config.viewIdList.NewInformationViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '创建资讯',  
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