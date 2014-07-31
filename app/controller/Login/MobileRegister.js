Ext.define('WenBusiness.controller.Login.MobileRegister',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.MobileRegisterViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			},
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();
	 var me = this;

                util.htmlContentHandler('phone_register.html',view,false);

                       Ext.get(self).on({
                    tap:function(event,dom)
                    {
                     var userName = Ext.DomQuery.select('input[class="phone_username"]')[0].value;
                     var phone = Ext.DomQuery.select('input[class="phone_phone"]')[0].value;
                     var password = Ext.DomQuery.select('input[class="phone_password"]')[0].value;
                     var passwordAgain = Ext.DomQuery.select('input[class="phone_passwordAgain"]')[0].value;
                     console.log(password+ ' '+ passwordAgain);
                       if(userName == '' || password == '' || passwordAgain =='')
							{
								
								util.showAlertMsgBox('提示','请填写用户名和密码');
								return false;
							}
					     if( password != passwordAgain)
							{
								
								util.showAlertMsgBox('提示','请输入相同的密码');
								return false;
							}
                   	me.doRegister(userName,password);   
                    },
                    delegate:'.f-btn'
                });
                
	},

	doRegister:function(username,password)
	{
	var requestUrl = config.webUrl+'/userinfoService/userRejist/username/'+ username+
	'/password/'+ password+'/rejisttype/0';
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
                            	util.showAlertMsgBox('提示','注册失败，请重新注册');
                            }           
                        },
                        failure: function(response,request){
                         util.showAlertMsgBox('提示','注册失败，请重新注册');
                          
                        }
                     }); 
        
	}
});