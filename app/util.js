Ext.define('WenBusiness.util',
{
	alternateClassName :'util',
	statics:
	{
          viewportAnimate : function(view,type,viewport)
     {
       if(viewport == true)
       {
        Ext.Viewport.animateActiveItem(view,type);
       }
       else
       {
       Ext.Viewport.animateActiveItem(view, {});
       }
     },
         ScrollToWindowZero : function(){
         window.scrollTo(0,0);
     },
        htmlContentHandler:function(htmlFile,view,useTpl,memberFunction)
        {
                    Ext.Ajax.request({
                 url: 'resources/data/'+htmlFile,
             success: function(rs) {   
              if(useTpl == true)
              {
                               
                 var tpl =new Ext.XTemplate(rs.responseText,memberFunction);
                view.setItemTpl(tpl);    
            
              }
              else
              {
                   view.setHtml(rs.responseText);
              }
              
             
             },
             scope: view
         });
        },
        showLoadMask:function(msg)
        {
           Ext.Viewport.setMasked({
       xtype: 'loadmask',
       message:msg,        
});
          
        },
        hideLoadMask:function()
        {
          Ext.Viewport.unmask();
        },
        showAlertMsgBox:function(_title,_message)
        {
  Ext.Msg.show({
  title   : _title,
  message     : _message,
  promptConfig: false,
  buttons : [{
    itemId : 'ok',
    text   : '确认',
    ui     : 'customplain',
    width: '90%',
    style:'color:#4fc3d4',
  }],
});
        },
        showConfirmMsgBox:function(_title,_message,okCallBack)
        {
            Ext.Msg.show({
  title   : _title,
  message     : _message,
  promptConfig: false,
  buttons : [{
    itemId : 'ok',
    text   : '确认',
    ui     : 'customplain',
    style:'color:#4fc3d4',
  },{
    itemId : 'cancel',
    text   : '取消',
    ui: 'customplain',
    style:'color:#e8323a',   
  }],
  fn      : function(text) {
    if(text == 'ok')
   {
     okCallBack();
   }
  }
});
        },

        ajaxRequest:function(view,urladdress,successCallBack,allCallBack)
        {
         
          Ext.Ajax.request({
                        
                        url: urladdress,
                        
                        method: 'get',
                        timeout:config.ajaxTimeOut ,
                        scope: view,
                        callback: function(options, success, response){  
                        allCallBack(view);  
                       

                        },
                        success: function(response,request){
                           
                            if(response.status == '200')
                            {
                                messageUserMe =  username;
                                console.log('the caller is authenticated.\n' + response.responseText);                                              
                                localStorage.setItem("username", username);
                                localStorage.setItem("authorization", authorization);
                                localStorage.setItem("isauthenticated", true);
                                localStorage.setItem("baseUrl", baseUrl);
                                localStorage.setItem("version", moraVersion);
                                var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
                                util.viewportAnimate(view, {type: 'slide', direction: 'left'});                                                
                            }           
                        },
                        failure: function(response,request){
                          console.log(urladdress +' fail');
                            if(response.status == '401')
                            {
                              //  Ext.Msg.alert('Fail','login fails due to invalid credentials.');
                            }
                            else if(response.status == '403')
                            {
                             //   Ext.Msg.alert('Fail','the login is denied due to a CAPTCHA requirement, throtting, or any other reason.');
                            }
                            else
                            {
                             //   Ext.Msg.alert('Fail','login fail. status:' + response.status);
                            }
                        }
                     });    
        },
        overrideScroller:function()
        {
             Ext.define('Ext.or.Scroller',{
              override:'Ext.scroll.Scroller',
              config:
              {

                momentumEasing: {
            momentum: {
                acceleration: 30,
                friction: 0.5
            },

            bounce: {
                acceleration: 0.0001,
                springTension: 0.9999
            },

            minVelocity: 5
        },

            outOfBoundRestrictFactor:0
        },

             })
        },
        overrideDataProxyAjax:function()
        {
         Ext.define('Ext.or.dataproxyAjax',{
              override:'Ext.data.proxy.Ajax',
 

             })
        },
        //Fix the hide function didn't work on some android device
        overrideCssTransiton:function()
        {
          Ext.define('Ext.or.CssTransition',{
              override:'Ext.fx.runner.CssTransition',
          onTransitionEnd: function (e) {
        var target = e.target,
            id = target.id,
            propertyName = e.browserEvent.propertyName,
            styleDashPrefix = Ext.browser.getStyleDashPrefix();
        if (id && this.runningAnimationsData.hasOwnProperty(id)) {
            if (Ext.feature.has.CssTransformNoPrefix) {
                if (propertyName.indexOf(styleDashPrefix) >= 0) {
                    propertyName = propertyName.substring(styleDashPrefix.length);
                }
            }
            this.refreshRunningAnimationsData(Ext.get(target), [propertyName]);
        }
    }

             })
        },

	    init:function()
	    {
                this.overrideScroller();
                this.overrideCssTransiton();
	    }
	}
})