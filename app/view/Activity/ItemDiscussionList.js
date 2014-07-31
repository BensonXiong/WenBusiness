Ext.define('WenBusiness.view.Activity.ItemDiscussionList',{
	extend: 'Ext.dataview.DataView',
	
	xtype: 'ItemDiscussionList',
	
	config: {
		id: config.viewIdList.ItemDiscussionListViewId,
		styleHtmlContent: true,
		styleHtmlCls:'viewBoxContent',
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '项目讨论',  
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