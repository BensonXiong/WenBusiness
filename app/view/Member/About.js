Ext.define('WenBusiness.view.Member.About',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'About',
	
	config: {
		id: config.viewIdList.AboutViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '关于我们',  
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