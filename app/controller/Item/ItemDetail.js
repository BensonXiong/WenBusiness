Ext.define('WenBusiness.controller.Item.ItemDetail',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ItemDetailViewId,
			backButton:'#'+config.viewIdList.ItemDetailViewId +' button[iconCls=backIconCls]',
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
			backButton:{
				tap:'doButtonTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('itemdetail.html',view,false);
                
	},

	doButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(0);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});