Ext.define('WenBusiness.store.Item.ItemListInProgress',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'WenBusiness.model.Item.ItemListInProgress',	
	     storeId:'ItemListInProgress',
    		proxy: new Ext.data.AjaxProxy({
			
	    	headers: {
				'Content-Type': 'application/json', 
			},
		    url: config.webUrl +'/projectService/projectList/type/0/status/1/pageNum/1/numPerPage/5',
	    	actionMethods: {create: 'GET'},
	       timeout:config.ajaxTimeOut,
	       pageParam:'pageNumber',
	    	startParam: 'pageNum',
      		limitParam: 'numPerPage',
      		noCache:true,
      		enablePagingParams:false,
	    	reader: new Ext.data.JsonReader({
	        	model: 'WenBusiness.model.Item.ItemListInProgress',
	        	rootProperty:'rows'
	    	}),
	    	listeners:{
        		exception:function(proxy, response, orientation){
            	/*	Ext.getStore('ProjectDocking').removeAll();
            		Ext.getStore('ProjectDocking').setTotalCount(0);
            		Ext.Viewport.setMasked(false);*/
            	          		
        		}
    		}
       	}),

/*   data: [
       {    name: 'Maintz' ,introduce: 'Tommy',imgsrc:'./resources/images/face.jpg' },
       ]*/
	},
	listeners:
	{
		load:function(store)
		{
console.log(store);
		}
	}
});