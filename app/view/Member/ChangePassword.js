Ext.define('WenBusiness.view.Member.ChangePassword',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'ChangePassword',
	
	config: {
		id: config.viewIdList.ChangePasswordViewId,
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