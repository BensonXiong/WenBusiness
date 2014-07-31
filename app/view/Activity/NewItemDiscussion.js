Ext.define('WenBusiness.view.Activity.NewItemDiscussion',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'NewItemDiscussion',
	
	config: {
		id: config.viewIdList.NewItemDiscussionViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '活动详情',  
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