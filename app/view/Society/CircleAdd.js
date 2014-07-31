Ext.define('WenBusiness.view.Society.CircleAdd',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'CircleAdd',
	
	config: {
		id: config.viewIdList.CircleAddViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '圈子',  
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