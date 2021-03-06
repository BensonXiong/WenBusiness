Ext.define('WenBusiness.ux.PullRefreshFn', {
    extend: 'Ext.plugin.PullRefresh',
    xtype:'uxpullrefresh',
    alias: 'plugin.pullrefreshfn',
    requires: ['Ext.DateExtras'],


    config: {
        /**
         * @cfg {Function} refreshFn The function that will be called to refresh the list.
         * If this is not defined, the store's load function will be called.
         * The refresh function gets called with a reference to this plugin instance.
         * @accessor
         */
        refreshFn: null
    },
    
    fetchLatest: function() {
        if (this.getRefreshFn()) {
            this.getRefreshFn().call(this, this);
            this.setState("loaded");
            this.fireEvent('latestfetched', this, 'refreshFn, you have to handle toInsert youself');
            if (this.getAutoSnapBack()) {
                this.snapBack();
            }
        } else {    
            console.log('fetchLatest')
            var store = this.getList().getStore(),
                proxy = store.getProxy(),
                operation;
    
            operation = Ext.create('Ext.data.Operation', {
                page: 1,
                start: 0,
                model: store.getModel(),
                limit: store.getPageSize(),
                action: 'read',
                sorters: store.getSorters(),
                filters: store.getRemoteFilter() ? store.getFilters() : []
            });
    
            proxy.read(operation, this.onLatestFetched, this);
        }
    }
});