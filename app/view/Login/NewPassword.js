Ext.define('WenBusiness.view.Login.NewPassword',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'NewPassword',
	
	config: {
		id: config.viewIdList.NewPasswordViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '重置密码',  
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