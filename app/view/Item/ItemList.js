Ext.define('WenBusiness.view.Item.ItemList',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'ItemList',
	
	config: {
		id: config.viewIdList.ItemListViewId,
		styleHtmlContent: true,
		styleHtmlCls:'',
        layout:'fit',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '项目',  
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
            text: '进行中',
            ui:'custom',
            pressed: true
        },
        {
            text: '已完成',
            ui:'custom',
            
        },
    ],
                    }
                ]
            }
          ]
	}	
});