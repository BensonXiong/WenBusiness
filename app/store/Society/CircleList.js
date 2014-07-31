Ext.define('WenBusiness.store.Society.CircleList',{
	extend: 'Ext.data.Store',
	
	config: {
		model: 'WenBusiness.model.Society.CircleList',	
	     storeId:'CircleList',
   data: [
       {    name: '互联网圈子' ,introduce: '互联网圈子',imgsrc:'./resources/images/image_2.jpg' },
        {    name: '互联网圈子' ,introduce: '互联网圈子',imgsrc:'./resources/images/image_2.jpg' },
       ]
	}
});