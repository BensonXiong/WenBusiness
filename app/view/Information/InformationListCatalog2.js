Ext.define('WenBusiness.view.Information.InformationListCatalog2',{
	extend: 'Ext.List',
	
	xtype: 'InformationListCatalog2',

	require:['WenBusiness.ux.RotatingCarousel'],
	
	config: {
		id: config.viewIdList.InformationListCatalog2ViewId,
		styleHtmlContent: true,
		 variableHeights: true,
            useSimpleItems: true,
		styleHtmlCls:'viewBoxContent',
	}	
});