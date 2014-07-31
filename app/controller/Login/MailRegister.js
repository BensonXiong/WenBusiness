Ext.define('WenBusiness.controller.Login.MailRegister',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.MailRegisterViewId,
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
                util.htmlContentHandler('m_register.html',view,false);

                       Ext.get(self).on({
                    tap:function(event,dom)
                    {
                     var userName = Ext.DomQuery.select('input[class="m_username"]')[0].value;
                     var email = Ext.DomQuery.select('input[class="m_mail"]')[0].value;
                     var password = Ext.DomQuery.select('input[class="m_password"]')[0].value;
                     var passwordAgain = Ext.DomQuery.select('input[class="m_passwordAgain"]')[0].value;
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