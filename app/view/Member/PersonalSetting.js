Ext.define('WenBusiness.view.Member.PersonalSetting',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'PersonalSetting',
	
	config: {
		id: config.viewIdList.PersonalSettingViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '个人设置',  
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