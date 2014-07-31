Ext.define('WenBusiness.view.Society.CircleActivity',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'CircleActivity',
	
	config: {
		id: config.viewIdList.CircleActivityViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '圈子活动',  
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