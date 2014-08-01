Ext.define('WenBusiness.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'Main',
    requires: [
    ],
    config: {
        tabBarPosition: 'bottom',
         id: config.viewIdList.MainViewId,
         ui:'custom',
          layout:{type:'card',animation:{type:''}},
        items: [
            {
                xtype:'ItemList',
                title:'项目',
                iconCls: 'item_icon',
            },
            {
                 xtype:'InformationList',
                title:'资讯',
                iconCls: 'info_icon',
            },           
            {
                 xtype:'ActivityList',
                title:'活动',
                iconCls: 'act_icon',
            },
            {
                xtype:'FriendSociety',
                title: '人脉',
                iconCls: 'fri_icon',
            },
             {
                 xtype:'More',  
                 title:'个人',    
                iconCls: 'peo_icon',

            },
        ],
    }
});
