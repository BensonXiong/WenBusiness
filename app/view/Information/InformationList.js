Ext.define('WenBusiness.view.Information.InformationList',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'InformationList',
	
	config: {
		id: config.viewIdList.InformationListViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
             layout:'fit',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '资讯',  
                items: [
                    {
                        xtype: 'button',                     
                        ui:'customplain',
                        iconCls:'AddIconCls',     
                        cls:'leftTopIconCls',                  
                        align:'left',
                    },
                    {
                        xtype: 'button',                     
                        ui:'customplain',
                        iconCls:'SearchIconCls',     
                        cls:'rightTopIconCls',                  
                        align:'right',
                    },
                ],                  
          },
          {
                    xtype:'pageTab',
                    docked:'top',
                   items: [{
                    xtype: 'InformationListCatalog1',
                      title: '分类1'
        },
        {
            xtype: 'InformationListCatalog2',
            
            title: '分类2'
        },
        {
            xtype: 'InformationListCatalog3',
            title: '分类3'
        }]

          }]
	}	
});