Ext.define('WenBusiness.view.Activity.ActivityCommunity',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'ActivityCommunity',
	
	config: {
		id: config.viewIdList.ActivityCommunityViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '活动',  
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
            text: '线上社区',
            ui:'custom',
            pressed: true
        },
        {
            text: '线下活动',
            ui:'custom',
            
        },
    ],
                    }
                ]
            }]
	}	
});