Ext.define('WenBusiness.controller.Login.LoginMain',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			projectDockingView:'#'+config.viewIdList.LoginMainViewId,
		},
		control: {
			projectDockingView: {
				initialize: 'onInitialize',
			},
           
		}
	},
	
	onInitialize: function(view){
     var controller = this;
	 var self = view.getId();

                util.htmlContentHandler('register.html',view,false);

                 Ext.get(self).on({
                    tap:function(event,dom)
                    {
                      controller.doLoginButtonTap();
                    },
                    delegate:'.loginClass'
                });

                Ext.get(self).on({
                    tap:function(event,dom)
                    {
                      controller.doRegisterButtonTap();
                    },
                    delegate:'.resClass'
                });

                Ext.get(self).on({
                    tap:function(event,dom)
                    {
                      controller.doQQButtonTap();
                    },
                    delegate:'.qqClass'
                });

                Ext.get(self).on({
                    tap:function(event,dom)
                    {
                      controller.doSinaButtonTap();
                    },
                    delegate:'.sinaClass'
                });

                Ext.get(self).on({
                    tap:function(event,dom)
                    {
                      controller.doGoToMainView();
                    },
                    delegate:'.res-opt-btn'
                });
                
	},

    doLoginButtonTap:function()
    {
        var view = Ext.getCmp(config.viewIdList.LoginViewId) || Ext.create('WenBusiness.view.Login.Login');
        util.viewportAnimate(view, {type: 'slide', direction: 'right'});
    },

    doRegisterButtonTap:function()
    {
 		var view = Ext.getCmp(config.viewIdList.RegisterViewId) || Ext.create('WenBusiness.view.Login.Register');
        util.viewportAnimate(view, {type: 'slide', direction: 'right'});    	
    },

    doQQButtonTap:function()
    {
 		var view = Ext.getCmp(config.viewIdList.QQLoginViewId) || Ext.create('WenBusiness.view.Login.QQLogin');
        util.viewportAnimate(view, {type: 'slide', direction: 'right'});    	
    },

    doSinaButtonTap:function()
    {
 		var view = Ext.getCmp(config.viewIdList.SinaLoginViewId) || Ext.create('WenBusiness.view.Login.SinaLogin');
        util.viewportAnimate(view, {type: 'slide', direction: 'right'});    	
    },

    doGoToMainView:function()
    {
        var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
        util.viewportAnimate(view, {type: 'slide', direction: 'right'});        
    }
});