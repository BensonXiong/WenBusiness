Ext.define('WenBusiness.controller.Item.NewItem',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.NewItemViewId,
			backButton:'#'+config.viewIdList.NewItemViewId +' button',
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
			backButton:{
				tap:'doTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('new_item.html',view,false);
                
	},

	doTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(0);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});