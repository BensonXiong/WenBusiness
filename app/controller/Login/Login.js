Ext.define('WenBusiness.controller.Login.Login',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			projectDockingView:'#'+config.viewIdList.LoginViewId,
			backButton:'#'+config.viewIdList.LoginViewId +' button',
		},
		control: {
			projectDockingView: {
				initialize: 'doInitialize'
			},
			backButton:{
				tap:'doBackButtonTap'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();
	 var me = this;

     util.htmlContentHandler('login.html',view,false);

      Ext.get(self).on({
                    tap:function(event,dom)
                    {
                      var view = Ext.getCmp(config.viewIdList.FindPasswordViewId) || Ext.create('WenBusiness.view.Login.FindPassword');
                         util.viewportAnimate(view, {type: 'slide', direction: 'left'});
                    },
                    delegate:'.form_opt'
                });

       Ext.get(self).on({
                    tap:function(event,dom)
                    {
                    	var userName = Ext.DomQuery.select('input[type="text"]')[0].value;
                     var passWord = Ext.DomQuery.select('input[type="password"]')[0].value;
                     if(userName == '' || passWord == '')
							{
								
								util.showAlertMsgBox('提示','请填写用户名和密码');
								return false;
							}
                   	me.doLogin(userName,passWord);
                       
                    },
                    delegate:'.f-btn'
                });
                
	},

	doBackButtonTap:function()
	{
		 var view = Ext.getCmp(config.viewIdList.LoginMainViewId) || Ext.create('WenBusiness.view.Login.LoginMain');
         util.viewportAnimate(view, {type: 'slide', direction: 'right'});
	},

	doLogin:function(username,password)
	{
		var requestUrl = config.webUrl+'/userinfoService/login/username/'+username+'/password/'+ password;
                   Ext.Ajax.request({
                        
                        url: requestUrl,
                        
                        method: 'get',
                        timeout:config.ajaxTimeOut ,
                        callback: function(options, success, response){  

                        },
                        success: function(response,request){
                           console.log(response);
                            if(response.status == '200' && response.responseText == '"0"')
                            {
                     
	                  localStorage.setItem("username", username);
					 localStorage.setItem("password", password);
                     var view = Ext.getCmp(config.viewIdList.MainViewId) || Ext.create('WenBusiness.view.Main');
       				 util.viewportAnimate(view, {type: 'slide', direction: 'right'});                                             
                            }
                            else
                            {
                            	util.showAlertMsgBox('提示','无法登陆，请检查用户名和密码');
                            }           
                        },
                        failure: function(response,request){
                         util.showAlertMsgBox('提示','无法登陆，请检查用户名和密码');
                          
                        }
                     }); 
	}
});