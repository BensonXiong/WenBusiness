Ext.define('WenBusiness.store.Information.InformationList',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'WenBusiness.model.Information.InformationList',	
	     storeId:'InformationList',
	        pageSize: 10,
    		proxy: new Ext.data.AjaxProxy({
			
	    	headers: {
				'Content-Type': 'application/json', 
			},
		    url: config.webUrl +'/newsService/newsList/isrecommend/0/type/0/pageNum/1/numPerPage/5',
	    	actionMethods: {create: 'GET'},
	       timeout:config.ajaxTimeOut,
	       pageParam:'pageNumber',
	    	startParam: 'pageNum',
      		limitParam: 'numPerPage',
      		noCache:true,
      		enablePagingParams:false,
	    	reader: new Ext.data.JsonReader({
	        	model: 'WenBusiness.model.Information.InformationList',
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

    	listeners: {
    		load:function(store)
    		{
    			console.log(store);
    		}
    	}
	}
});