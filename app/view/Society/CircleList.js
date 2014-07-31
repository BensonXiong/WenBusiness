Ext.define('WenBusiness.view.Society.CircleList',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'CircleList',
	
	config: {
		id: config.viewIdList.CircleListViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
        store:'CircleList',
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