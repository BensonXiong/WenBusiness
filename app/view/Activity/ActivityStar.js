Ext.define('WenBusiness.view.Activity.ActivityStar',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'ActivityStar',
	
	config: {
		id: config.viewIdList.ActivityStarViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '每日之星',  
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