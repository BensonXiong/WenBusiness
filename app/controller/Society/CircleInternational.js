Ext.define('WenBusiness.controller.Society.CircleInternational',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.CircleInternationalViewId,
			segmentedButton:'#'+config.viewIdList.CircleInternationalViewId+ ' segmentedbutton',
			backButton:'#'+config.viewIdList.CircleInternationalViewId +' button[iconCls=backIconCls]',
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
			segmentedButton:{
				toggle:'doToggle'
			},
			backButton:{
				tap:'doButtonTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('circle_act.html',view,false);
                
	},

	doToggle:function(segmentedButton,button,isPressed,options)
	{

		if( isPressed == true )
		{
			var view =segmentedButton.up('dataview');
			if ( button.getText() == "活动")
			{

               util.htmlContentHandler('circle_act.html',view,false);
			}
			else if ( button.getText() == "美文")
			{
				
               util.htmlContentHandler('circle_bello.html',view,false);
             
			}
			else if ( button.getText() == "成员")
			{
               util.htmlContentHandler('circle_member.html',view,false);
			}
		}
	},

	doButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.CircleListViewId) || Ext.create('WenBusiness.view.Society.CircleList');
         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	}
});