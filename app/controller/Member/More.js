Ext.define('WenBusiness.controller.Member.More',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.MoreViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();
     var me = this;
                util.htmlContentHandler('more.html',view,false);

                 Ext.get(self).on({
                    tap:function(event,dom)
                    {
                     var domHtml = dom.innerHTML;
                    if( domHtml == '名片维护')
                    {

                    }
                    else if ( domHtml == '个人分享')
                    {
  						 var view = Ext.getCmp(config.viewIdList.ShareViewId) || Ext.create('WenBusiness.view.Member.Share');
                         util.viewportAnimate(view, {type: 'slide', direction: 'left'});
                    }
                    else if ( domHtml == '访客查询')
                    {

                    }
                    else if ( domHtml == '个人设置')
                    {
						 var view = Ext.getCmp(config.viewIdList.PersonalSettingViewId) || Ext.create('WenBusiness.view.Member.PersonalSetting');
                         util.viewportAnimate(view, {type: 'slide', direction: 'left'});
                    }
                    else if ( domHtml == '关于我们')
                    {
                        var view = Ext.getCmp(config.viewIdList.AboutViewId) || Ext.create('WenBusiness.view.Member.About');
                         util.viewportAnimate(view, {type: 'slide', direction: 'left'});
                    	
                    }
                    else if ( domHtml == '退出登录')
                    {
                    	util.showConfirmMsgBox('提示','退出登录',me.doLogOut);
                    }
                    
                    },
                    delegate:'a'
                });
                
	},

    doLogOut:function()
    {
         localStorage.removeItem("username");
         localStorage.removeItem("password");
          console.log(window.location.href);
        window.location.href= window.location.href;
    }

});