Ext.define('WenBusiness.view.Society.ContactSearchResult',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'ContactSearchResult',
	
	config: {
		id: config.viewIdList.ContactSearchResultViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '搜索结果',  
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