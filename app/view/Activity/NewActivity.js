Ext.define('WenBusiness.view.Activity.NewActivity',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'NewActivity',
	
	config: {
		id: config.viewIdList.NewActivityViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '创建活动',  
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