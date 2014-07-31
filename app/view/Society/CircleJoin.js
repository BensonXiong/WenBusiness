Ext.define('WenBusiness.view.Society.CircleJoin',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'CircleJoin',
	
	config: {
		id: config.viewIdList.CircleJoinViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '申请理由',  
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