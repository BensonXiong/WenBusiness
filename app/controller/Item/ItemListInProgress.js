Ext.define('WenBusiness.controller.Item.ItemListInProgress',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ItemListInProgressViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize',
				activated:'doActivateShow',
				itemtap:'doListItemtap',
			},
			
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();
	 var me = this;
        var _finishPercentage = {finishPercentage: function(values)
        	{ 
                    var  funds = values.funds;
                    var  collectFunds = values.pay;
                    var percentage =  Math.round(collectFunds / funds * 100) + "%"; 
                    console.log(funds+' '+ collectFunds+' '+ percentage);
        		return  percentage
        	}
        };    
               util.htmlContentHandler('itemlistinprogress.html',view,true,_finishPercentage);
               this.doActivateShow(view);
	},

	doActivateShow:function(view)
	{
		console.log('item list in progress activate');
		   if( !view.loaded)
                {
                  view.getStore().load();
                }  
	},

	doListItemtap:function( view, index, target, record, e, eOpts )
    {
    	console.log(record);
                 var view = Ext.getCmp(config.viewIdList.ItemDetailViewId) || Ext.create('WenBusiness.view.Item.ItemDetail');
             
                 util.viewportAnimate(view, {type: 'slide', direction: 'left'});
    },

});