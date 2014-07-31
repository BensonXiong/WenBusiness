Ext.define('WenBusiness.view.Information.InformationListCatalog1',{
	extend: 'Ext.List',
	
	xtype: 'InformationListCatalog1',

	require:['WenBusiness.ux.RotatingCarousel'],
	
	config: {
		id: config.viewIdList.InformationListCatalog1ViewId,
		styleHtmlContent: true,
		 variableHeights: true,

            useSimpleItems: true,
            store:'InformationList',
		styleHtmlCls:'viewBoxContent',
    items:[
    {
            xtype: 'rotatingCarousel',
            //跟随滚动条滚动
            scrollDock: 'top',
            docked: 'top',
            height: '80px',
            store:'InforListCata1ImageCarousel',
            listeners:
            {
            	initialize:function(view)
            	{

	var store = Ext.data.StoreManager.lookup(this.getStore());
        store.load ({
            callback : function(records, operation, success) {
                for (var i=0,totalItem=store.getCount();i<totalItem;i++){
                    view.add({
                        data: store.getAt(i).data,
                        tpl: '<tpl for "."><div><img height="40%" src={img}></div>'+
                        '<div class="title">{title}</div>'+'</tpl>',
                    });
                }
            },
            scope:view
        });
            	}
            }
        
    }]
	}	
});