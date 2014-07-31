Ext.define('WenBusiness.view.Activity.ActivityDetail',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'ActivityDetail',
	
	config: {
		id: config.viewIdList.ActivityDetailViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '活动详情',  
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