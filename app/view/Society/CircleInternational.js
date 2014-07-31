Ext.define('WenBusiness.view.Society.CircleInternational',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'CircleInternational',
	
	config: {
		id: config.viewIdList.CircleInternationalViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '互联网圈子',  
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
            text: '活动',
            ui:'custom',
            pressed: true
        },
        {
            text: '美文',
            ui:'custom',
            
        },
         {
            text: '成员',
            ui:'custom',
            
        }
    ],
                    }
                ]
            }]
	}	
});