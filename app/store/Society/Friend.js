Ext.define('WenBusiness.store.Society.Friend',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'WenBusiness.model.Society.Friend',	
	     storeId:'Friend',
	     sorters: 'nick',

   grouper: {
       groupFn: function(record) {
           return record.get('nick')[0];
       }
   },

        pageSize: 10,
        proxy: new Ext.data.AjaxProxy({
      
        headers: {
        'Content-Type': 'application/json', 
      },
        url: config.webUrl +'/userinfoService/userinfoList/pageNum/1/numPerPage/5',
        actionMethods: {create: 'GET'},
         timeout:config.ajaxTimeOut,
         pageParam:'pageNumber',
        startParam: 'pageNum',
          limitParam: 'numPerPage',
          noCache:true,
          enablePagingParams:false,
        reader: new Ext.data.JsonReader({
            model: 'WenBusiness.model.Society.Friend',
            rootProperty:'rows'
        }),
        listeners:{
            exception:function(proxy, response, orientation){
              /*  Ext.getStore('ProjectDocking').removeAll();
                Ext.getStore('ProjectDocking').setTotalCount(0);
                Ext.Viewport.setMasked(false);*/
                            
            }
        }
        }),

/*   data: [
       {    name: 'Maintz' ,introduce: 'Tommy',imgsrc:'./resources/images/face.jpg' },
       {      name: 'Dougan',introduce: 'Rob',imgsrc:'./resources/images/face.jpg'  },
        {       name: 'Spencer',introduce: 'Ed',imgsrc:'./resources/images/face.jpg' },
       {    name: 'Avins',introduce: 'Jamie', imgsrc:'./resources/images/face.jpg'  },
       ]*/
	}
});