Ext.define('WenBusiness.view.Information.NewArticle',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'NewArticle',
	
	config: {
		id: config.viewIdList.NewArticleViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '创建文章',  
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