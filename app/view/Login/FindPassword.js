Ext.define('WenBusiness.view.Login.FindPassword',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'FindPassword',
	
	config: {
		id: config.viewIdList.FindPasswordViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
        layout:'fit',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '找回密码',  
                items: [
                    {
                        xtype: 'button',                     
                        ui:'customplain',
                        iconCls:'backIconCls',     
                        cls:'leftTopIconCls',                  
                        align:'left',
                    }
                ],                  
          },
          {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'customplain',
                layout:
                {
                    type:'hbox',
                    pack:'center',
                },
                items: [
                    {
                        defaults: {
                            flex: 1
                        },
                        xtype: 'segmentedbutton',
                        cls:'segmentButtonCls',
                        allowDepress: false,
                        items: [
        {
            text: '手机',
            ui:'custom',
            pressed: true
        },
        {
            text: '邮箱',
            ui:'custom',
            
        },
    ],
                    }
                ]
            },
          ]
	}	
});