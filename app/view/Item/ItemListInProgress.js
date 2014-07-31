Ext.define('WenBusiness.view.Item.ItemListInProgress',{
	extend: 'Ext.List',
	
	xtype: 'ItemListInProgress',
	
	config: {
		id: config.viewIdList.ItemListInProgressViewId,
		styleHtmlContent: true,
		store:'ItemListInProgress',
		styleHtmlCls:'',
		 useSimpleItems: true,
           scrollable: {
            //如此设置carousel切换视图时滚动条不出现
            directionLock: true
        },
	}	
});