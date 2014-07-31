Ext.define('WenBusiness.controller.Member.About',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.AboutViewId,
			backButton:'#'+config.viewIdList.AboutViewId +' button',
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

                util.htmlContentHandler('about.html',view,false);
                
	},

	doTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(4);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});