Ext.define('WenBusiness.controller.Information.InformationList',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.InformationListViewId,
			addButton:'#'+config.viewIdList.InformationListViewId+ ' button[iconCls=AddIconCls]',
		},
		control: {
			view: {
				
			},
			addButton:{
				tap:'doAddButtonTap'
			},

		}
	},
	
	doInitialize: function(view){
		console.log('initial');
	 var informationlistCatalog1View = Ext.getCmp(config.viewIdList.InformationListCatalog1ViewId) || Ext.create('WenBusiness.view.Information.InformationListCatalog1');
       var informationlistCatalog2View = Ext.getCmp(config.viewIdList.InformationListCatalog2ViewId) || Ext.create('WenBusiness.view.Information.InformationListCatalog2');
	var informationlistCatalog3View = Ext.getCmp(config.viewIdList.InformationListCatalog3ViewId) || Ext.create('WenBusiness.view.Information.InformationListCatalog3');
       view.add(informationlistCatalog1View);
        view.add(informationlistCatalog2View);
         view.add(informationlistCatalog3View);
       },

	doViewShow:function(view)
	{
		if( !view.loaded)
                {
                	console.log('viewload');
              var informationlistCatalog1View = Ext.getCmp(config.viewIdList.InformationListCatalog1ViewId) || Ext.create('WenBusiness.view.Information.InformationListCatalog1');
              view.setActiveItem(informationlistCatalog1View);   
                }  
	},

	doAddButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.NewInformationViewId) || Ext.create('WenBusiness.view.Information.NewInformation');                 
         util.viewportAnimate(view, {type: 'slide', direction: 'left'});
	},


});