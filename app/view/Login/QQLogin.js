Ext.define('WenBusiness.view.Login.QQLogin',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'QQLogin',
	
	config: {
		id: config.viewIdList.QQLoginViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '登录',  
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