Ext.define('WenBusiness.view.Information.InformationListCatalog3',{
	extend: 'Ext.List',
	
	xtype: 'InformationListCatalog3',

	require:['WenBusiness.ux.RotatingCarousel'],
	
	config: {
		id: config.viewIdList.InformationListCatalog3ViewId,
		styleHtmlContent: true,
		 variableHeights: true,
            useSimpleItems: true,
		styleHtmlCls:'viewBoxContent',
	}	
});