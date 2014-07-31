Ext.define('WenBusiness.controller.Information.InformationListCatalog1',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.InformationListCatalog1ViewId,
			rotatingCarousel:'rotatingCarousel',
		},
		control: {
			view: {
				initialize: 'doViewInitialize',
				activate:'doActivate',
				itemtap:'doListItemtap',
			},
			rotatingCarousel: {
				activate:'dorotatingCarouselActivate',
			},
			
		}
	},
	
	doViewInitialize: function(view){
		console.log('ini');
	 var self = view.getId();

     util.htmlContentHandler('informationlist.html',view,true);
                
	},

	doActivate:function(view)
	{
		if( !view.loaded)
                {
                  view.getStore().load();
                }  
	},

	doListItemtap:function( view, index, target, record, e, eOpts )
    {
    	console.log(record);
                 var view = Ext.getCmp(config.viewIdList.InformationDetailViewId) || Ext.create('WenBusiness.view.Information.InformationDetail');
             
                 util.viewportAnimate(view, {type: 'slide', direction: 'left'});
    },

	dorotatingCarouselActivate:function()
	{
		alert('activate')
	}

});