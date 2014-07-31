Ext.define('WenBusiness.controller.Society.CircleList',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.CircleListViewId,
			backButton:'#'+config.viewIdList.CircleListViewId +' button[iconCls=backIconCls]',
		},
		control: {
			view: {
				initialize: 'doInitialize',
				itemtap:'doListItemtap',
			},
			backButton:{
				tap:'doButtonTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('circle.html',view,true);
                
	},

	doListItemtap:function( view, index, target, record, e, eOpts )
    {
                 var view = Ext.getCmp(config.viewIdList.CircleInternationalViewId) || Ext.create('WenBusiness.view.Society.CircleInternational');
                 util.viewportAnimate(view, {type: 'slide', direction: 'left'});
    },

	doButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                           view.setActiveItem(3);
                         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});