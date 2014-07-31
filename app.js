/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
Ext.syncRequire('Ext.viewport.Viewport');
Ext.syncRequire('Ext.navigation.View');
Ext.syncRequire('Ext.Ajax');
Ext.syncRequire('Ext.data.proxy.Ajax');
Ext.syncRequire('Ext.Anim');

//Define an iOS viewport
Ext.define('Ext.viewport.iOS', {
  extend: 'Ext.viewport.Default',
  constructor: function(config) {
    //If you are deploying the app to an iOS device you may run into the problem described at toolbar too low.  
    this.superclass.config.height = this.getWindowHeight() + 'px';
    this.callParent([config]);
    return this;
  },
  getWindowHeight: function() {
    //Device running iOS 4.1: innerHeight is 460 (i.e. status bar height seems to be excluded)
    //Device running iOS 4.2: innerHeight is 480 (i.e. status bar height seems to be included)    
    if( Ext.os.version.isLessThan('7.0'))
    {
    return window.innerHeight;
    }
    else
    {
      return window.innerHeight;
    }
  }
}, function() {});

//Define a BlackBerry viewport
Ext.define('Ext.viewport.BlackBerry', {
  extend: 'Ext.viewport.Default',
  constructor: function(config) {

    //If you are using a BlackBerry device, you may run into the problem described at viewport displays 6px  
    this.superclass.config.height = this.getWindowHeight() + 'px';
    this.callParent([config]);
    return this;
  },
  getWindowHeight: function() {
    if (Ext.os.version.lt('7.0')) {
      return window.innerHeight;
    } else {
      // OS7 needs more browser height ONLY when running in webworks.       
      return window.innerHeight + 39;
    }
  }
}, function() {});


// Insert a new Blackberry specific viewport
Ext.override(Ext.viewport.Viewport, {
  constructor: function(config) {
    var osName = Ext.os.name,
      viewportName, viewport;

    switch (osName) {
      /*
            case 'Android':
                viewportName = 'Android';
                break;
            */
      case 'iOS':
        viewportName = 'iOS';
        break;
      case 'BlackBerry':
        viewportName = 'BlackBerry';
        break;

      default:
        viewportName = 'Default';
    }

    viewport = Ext.create('Ext.viewport.' + viewportName, config);
    return viewport;
  },

});

Ext.application({
    name: 'WenBusiness',

    requires: [
        'Ext.MessageBox','WenBusiness.config','WenBusiness.util','Ext.tab.Panel','Ext.LoadMask','Ext.data.Model'
    ],

    models: [
    'Item.ItemListInProgress',
    'Information.InformationList',
    'Information.InformationDetail',


    'Society.Friend',
    'Society.CircleList',
    ],
    stores: [
    'Item.ItemListInProgress',
    'Information.InformationList',
    'Information.InformationDetail',
    'Information.InforListCata1ImageCarousel',

    'Society.Friend',
    'Society.CircleList',
    ],
    views: [
        'Main',
        
        'Login.LoginMain',
        'Login.Login',
        'Login.QQLogin',
        'Login.SinaLogin',
        'Login.Register',
        'Login.MobileRegister',
        'Login.MailRegister',
        'Login.FindPassword',
        'Login.FindPasswordPhone',
        'Login.FindPasswordMail',
        'Login.NewPassword',

        'Activity.NewActivity',
        'Activity.ActivityDetail',
        'Activity.Meeting',
        'Activity.ActivityCommunity',
        'Activity.NewItemDiscussion',
        'Activity.ItemDiscussionList',
        'Activity.ActivityList',
        'Activity.ActivityListOnline',
        'Activity.ActivityListOffline',
        'Activity.ActivityStar',

        'Item.ItemDetail',
        'Item.ItemList',
        'Item.ItemListInProgress',
        'Item.ItemListFinished',
        'Item.NewItem',


        'Information.NewArticle',
        'Information.InformationDetail',
        'Information.NewInformation',
        'Information.InformationList',
        'Information.InformationListCatalog1',
        'Information.InformationListCatalog2',
        'Information.InformationListCatalog3',

        'Member.About',
        'Member.More',
        'Member.ChangePassword',
        'Member.Share',
        'Member.PersonalSetting',


        'Society.CircleList',
        'Society.CircleActivity',
        'Society.CircleAdd',
        'Society.CircleInternational',
        'Society.CircleActivityDetail',
        'Society.CircleJoin',
        'Society.CircleDetail',
        'Society.FriendSociety',
        'Society.FriendCard',
        'Society.AddFriend',
        'Society.SearchFriend',
        'Society.ContactSearchResult',


    ],

 controllers:[
    'Login.LoginMain',
    'Login.Login',
    'Login.QQLogin',
    'Login.SinaLogin',
    'Login.Register',
    'Login.MobileRegister',
    'Login.MailRegister',
    'Login.FindPassword',
    'Login.FindPasswordPhone',
    'Login.FindPasswordMail',
    'Login.NewPassword',

     'Activity.NewActivity',
     'Activity.ActivityDetail',
     'Activity.Meeting',
     'Activity.ActivityCommunity',
     'Activity.NewItemDiscussion',
     'Activity.ItemDiscussionList',
     'Activity.ActivityList',
     'Activity.ActivityListOnline',
     'Activity.ActivityListOffline',
     'Activity.ActivityStar',

     'Item.ItemDetail',
     'Item.ItemList',
     'Item.ItemListInProgress',
     'Item.ItemListFinished',
     'Item.NewItem',
     
     'Information.NewArticle',
     'Information.InformationDetail',
     'Information.NewInformation',
     'Information.InformationList',
     'Information.InformationListCatalog1',
     'Information.InformationListCatalog2',
     'Information.InformationListCatalog3',

     'Member.About',
     'Member.More',
     'Member.ChangePassword',
     'Member.Share',
     'Member.PersonalSetting',



     'Society.CircleList',
     'Society.CircleActivity',
     'Society.CircleAdd',
     'Society.CircleInternational',
     'Society.CircleActivityDetail',
     'Society.CircleJoin',
     'Society.CircleDetail',
     'Society.FriendSociety',
     'Society.FriendCard',
     'Society.AddFriend',
     'Society.SearchFriend',
     'Society.ContactSearchResult',

     ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {

      util.init();
        // Initialize the main view
       config.username = localStorage.getItem('username');
       config.password = localStorage.getItem('password');
    if (!config.username && ! config.password) {
          Ext.Viewport.add({
            xtype: 'Main'
          });
        } else {
          Ext.Viewport.add({

            xtype: 'Main'
          });
       }
        
    },

});
