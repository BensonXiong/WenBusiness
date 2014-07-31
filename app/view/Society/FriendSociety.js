Ext.define('WenBusiness.view.Society.FriendSociety',{
	extend: 'Ext.List',
	
	xtype: 'FriendSociety',
	
	config: {
		id: config.viewIdList.FriendSocietyViewId,
		styleHtmlContent: true,
		styleHtmlCls:'',
        store: 'Friend',
        grouped:true,
        indexBar:true,
        useSimpleItems: true,
           scrollable: {
            //如此设置carousel切换视图时滚动条不出现
            directionLock: true
        },
		items:[
		  {
                xtype: 'titlebar',
                ui:'customplain',
                docked: 'top',         
                title: '友社',  
                items: [
                   {
                        xtype: 'button',                     
                        ui:'customplain',
                        iconCls:'SearchIconCls',     
                        cls:'rightTopIconCls',                  
                        align:'right',
                    },
                ],                  
          },
         {
            xtype: 'panel',
            id: config.viewIdList.FriendSocietyViewId+ 'panel',
            scrollDock: 'top',
            docked: 'top',        
        },]
	}	
});