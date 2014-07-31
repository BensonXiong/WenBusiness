Ext.define('WenBusiness.view.Information.InformationDetail',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'InformationDetail',
	
	config: {
		id: config.viewIdList.InformationDetailViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '资讯',  
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