Ext.define('WenBusiness.controller.Information.InformationDetail',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.InformationDetailViewId,
			backButton:'#'+config.viewIdList.InformationDetailViewId +' button[iconCls=backIconCls]',
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

                util.htmlContentHandler('informationDetail.html',view,false);
                
	},

	doButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(1);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});