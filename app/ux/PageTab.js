Ext.define('WenBusiness.ux.PageTab', {
    extend: 'Ext.TabPanel',
    xtype: 'pageTab',
    config: {
        //每次移动的距离
        cls:'pageTab',
        moveNum: 41,
        //是否循环滚动
        allowOverflow: false,
          layout:{type:'card',animation:{type:''}},
        //设置横向滚动条
        tabBar: {
            cls: 'pageTabBar',
            scrollable: {
                direction: 'horizontal',
                //隐藏滚动条样式
                indicators: false
            }
        }
    },


    //选择项
    selectView: function (itemId) {
        //获取所有项
        var me = this, innerItems = me.getInnerItems(), i, ln, item;
        for (i = 0, ln = innerItems.length; i < ln; i++) {
            item = innerItems[i];
            if (item.getItemId() == itemId) {
                me.setActiveItem(item);
                me.setScroll(i);
                break;
            }
        }
    },
    //设置滚动条
    setScroll: function (newIdx) {
        //设置新的滚动位置
        var mun = this.getMoveNum();
        if (mun && mun > 0) {
            var scr = this.getTabBar().getScrollable().getScroller();
            scr.scrollTo(newIdx * mun, 0);
        }
    }
});