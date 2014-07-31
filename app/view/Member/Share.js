Ext.define('WenBusiness.view.Member.Share',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'Share',
	
	config: {
		id: config.viewIdList.ShareViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '分享',  
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