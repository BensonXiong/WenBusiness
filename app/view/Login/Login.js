Ext.define('WenBusiness.view.Login.Login',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'Login',
	
	config: {
		id: config.viewIdList.LoginViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '用户登录',  
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