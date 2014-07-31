Ext.define('WenBusiness.view.Society.CircleActivityDetail',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'CircleActivityDetail',
	
	config: {
		id: config.viewIdList.CircleActivityDetailViewId,
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