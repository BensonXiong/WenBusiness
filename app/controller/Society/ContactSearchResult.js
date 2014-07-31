Ext.define('WenBusiness.controller.Society.ContactSearchResult',{
	extend: 'Ext.app.Controller',
	
	config: {		
		refs: {
			view:'#'+config.viewIdList.ContactSearchResultViewId,
		},
		control: {
			view: {
				initialize: 'doInitialize'
			}
		}
	},
	
	doInitialize: function(view){
	 var self = view.getId();

                util.htmlContentHandler('contactsearchresult.html',view,false);
                
	}
});