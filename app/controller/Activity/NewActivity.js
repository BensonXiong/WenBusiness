Ext.define('WenBusiness.controller.Activity.NewActivity',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.NewActivityViewId,
			backButton:'#'+config.viewIdList.NewActivityViewId +' button',
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

                util.htmlContentHandler('new_act.html',view,false);
                
	},

	doTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(2);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});