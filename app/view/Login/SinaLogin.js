Ext.define('WenBusiness.view.Login.SinaLogin',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'SinaLogin',
	
	config: {
		id: config.viewIdList.SinaLoginViewId,
		styleHtmlContent: true,
		styleHtmlCls:'',
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