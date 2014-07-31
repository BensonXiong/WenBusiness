Ext.define('WenBusiness.view.Society.CircleDetail',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'CircleDetail',
	
	config: {
		id: config.viewIdList.CircleDetailViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '圈子名称',  
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