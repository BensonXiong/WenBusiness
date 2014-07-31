Ext.define('WenBusiness.view.Member.More',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'More',
	
	config: {
		id: config.viewIdList.MoreViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '更多',               
          }]
	}	
});