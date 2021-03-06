Ext.define('WenBusiness.ux.ListOptions', {
    extend: 'Ext.Component',
    alias: 'plugin.ListOptions',

    config: {

    list:null,
       /**
     * Selector to use to get the dynamically created List Options Ext.Element (where the menu options are held)
     * Once created the List Options element will be used again and again.
     */
    optionsSelector: 'x-list-options',

    /**
     * An array of objects to be applied to the 'listOptionsTpl' to create the 
     * menu
     */
    menuOptions: [],
    
    /**
     * Selector to use to get individual List Options within the created Ext.Element
     * This is used when attaching event handlers to the menu options
     */
    menuOptionSelector: 'x-menu-option',
    
    /**
     * XTemplate to use to create the List Options view
     */
    menuOptionsTpl: new Ext.XTemplate(  '<ul>',
                                            '<tpl for=".">',                                            
                                                '<li class="x-menu-option {cls}">',
                                                '</li>',
                                            '</tpl>',
                                        '</ul>').compile(),
                                
    /**
     * CSS Class that is applied to the tapped Menu Option while it is being touched
     */     
    menuOptionPressedClass: 'x-menu-option-pressed',
    
    /**
     * Set to a function that takes in 2 arguments - your initial 'menuOptions' config option and the current 
     * item's Model instance
     * The function must return either the original 'menuOptions' variable or a revised one
     */
    menuOptionDataFilter: null,
    
    /**
     * Animation used to reveal the List Options
     */
    revealAnimation: 'slide',
    
    /**
     * The direction the List Item will slide to reveal the List Options
     * Possible values: 'left', 'right' and 'both'
     * setting to 'both' means it will be decided by the direction of the User's swipe if 'triggerEvent' is set to 'itemswipe'
     */
    revealDirection: 'both',
    
    /**
     * Distance (in pixels) a User must swipe before triggering the List Options to be displayed.
     * Set to -1 to disable threshold checks
     */
    swipeThreshold: 30,
    
    /**
     * The direction the user must swipe to reveal the menu
     * Only applicable when 'triggerEvent' is set to 'itemswipe'
     */
    swipeDirection: 'left',
    
    /**
     * Ext.DataView event used to trigger the menu reveal
     * Usual values are 'itemswipe', 'itemtap', 'itemdoubletap'
     * Notes:
     * itemswipe: see configs 'swipeThreshold' & 'swipeDirection'
     */
    triggerEvent: 'itemswipe',
    
    /**
     * Stops the List from scrolling when a List Options menu is about to be opened
     */
    stopScrollOnShow: true,
    
    /**
     * Decides whether the visible List Options menu is hidden when the List is scrolled
     */
    hideOnScroll: false,
    
    /**
     * Decides whether multiple List Options can be visible at once
     */
    allowMultiple: false,
    
    /**
     * Decides whether sound effects are played as List Options open
     * Defaults to false.
     */
    enableSoundEffects: false,
    
    openSoundEffectURL: 'sounds/open.wav',
    
    closeSoundEffectURL: '',
    },
    
    init: function(list){
       this.setList(list);
        
        this.getList().on(this.getTriggerEvent(), this.onItemSwipe, this);
        
        this.getList().on({
            painted: this.onPainted,
            destroy: this.onListDestroy,
            scope: this
        });
        
        this.getList().addEvents({
            'menuoptiontap': true,
            'listoptionsopen': true,
            'listoptionsclose': true,
            'beforelistoptionstap': true
        });
    },
    
    /**
     * Destroy listeners when destroying list
     */
    onListDestroy: function(){
        this.getList().removeListener(this.getTriggerEvent(), this.onItemSwipe, this);
        this.getList().removeListener('painted', this.onPainted, this);
        this.getList().getScrollable().getScroller().removeListener('scrollstart', this.hideOptionsMenu, this); 
    },
    
    /**
     * Handles the 'afterrender' event
     * Attaches the handler to the List's scroller
     */
    onPainted: function(){
        if (this.getHideOnScroll()) {
            this.getList().getScrollable().getScroller().on({
                scrollstart: Ext.bind(this.hideOptionsMenu, this, [], false),
                scope: this
            });
        }
        
        // add plugin class to the list so its special styles aren't applied globally
        this.getList().element.addCls('x-list-options-plugin');
    },
    
    /**
     * Handler for the List's 'itemswipe' event
     * Hides any visible List Options
     * Caches the List Item we're working with
     * Sets some styles needed for it to look right
     * Shows the List Options
     * @param {Object} dataView
     * @param {Object} index
     * @param {Object} item
     * @param {Object} e
     */
    onItemSwipe: function(dataView, index, item,record, e){
        // check we're over the 'swipethreshold'
        if(this.revealAllowed(e.direction, e.distance)){
            
            // set the direction of the reveal
            this.setRevealDirection(e.direction);

            // cache the current List Item's elements for easy use later
            this.activeListItemRecord = dataView.getStore().getAt(index);
            
            var activeEl = Ext.get(item.element);
                
            this.activeListElement = activeEl;

            if (!this.getAllowMultiple()) {
                // hide any visible List Options
                this.hideOptionsMenu();
            }           
            
            activeEl.setVisibilityMode(1);
            console.log(activeEl);
            // Show the item's List Options
            this.doShowOptionsMenu(activeEl);
        }
    },
    
    /**
     * Decide whether the List Options are allowed to be revealed based on the config options
     * Only relevant for 'itemswipe' event because this event has all the config options
     * @param {Object} direction
     * @param {Object} distance
     */
    revealAllowed: function(direction, distance){
        var allowed = true;
        if(this.getTriggerEvent() === 'itemswipe'){
            // check swipe is long enough
            // check direction of swipe is correct
            allowed = (distance >= this.getSwipeThreshold() && (direction === this.getSwipeDirection())) || this.getSwipeThreshold() < 0 ;
        }
        return allowed;
    },
    
    /**
     * Decide the direction the reveal animation will go
     * this.revealDirection config can only be 'both' when triggerEvent is 'itemswipe' in which case
     * the direction of the swipe is used
     * @param {Object} direction
     */
    setRevealDirection: function(direction){
        var dir = this.getRevealDirection();
        if(this.getRevealDirection() === 'both' && this.getTriggerEvent() === 'itemswipe'){
            dir = direction;
        }
        
        Ext.apply(this.getRevealAnimation(), {
            direction: dir
        });
    },
    
    /**
     * Hides the List Options menu for the specified record or, if that is not defined, hides all List Options
     * @param {Object} record - A record 
     */
    hideOptionsMenu: function(record){
        if (record) {
            var node = this.getList().getNode(record),
                listOptions = Ext.get(node).next('.' + this.getOptionsSelector());
            
            if (node && listOptions) {
                this.doHideOptionsMenu(Ext.get(node), listOptions);
            }
        } else {
            var multiListOptions = this.getList().element.select('.' + this.getOptionsSelector());
            
            for(var i = 0; i < multiListOptions.elements.length; i++){
                this.doHideOptionsMenu(Ext.get(multiListOptions.elements[i]).prev('.x-list-item'), Ext.get(multiListOptions.elements[i]), i === 0);
            }
        }
    },
    
    /**
     * Performs the List Options animation and hide
     * @param {Object} hiddenEl - the List Item that is hidden
     * @param {Object} activeListOptions - the List Options element that is visible
     */
    doHideOptionsMenu: function(hiddenEl, activeListOptions, playSoundEffect){
        playSoundEffect = Ext.isEmpty(playSoundEffect) ? true : playSoundEffect;
        
        // reverse the configured animation so it looks like its going back
        Ext.apply(this.getRevealAnimation(), {
            reverse: true
        });
        
        // Run the animation on the List Item's 'body' Ext.Element
        Ext.Anim.run(hiddenEl, this.getRevealAnimation(), {
            out: false,
            before: function(el, options){
                // force the List Options to the back
                activeListOptions.setStyle('z-index', '0');
                
                // show the List Item's 'body' so the animation can be seen
                el.show();
                
                if (this.getEnableSoundEffects() && !Ext.isEmpty(this.getCloseSoundEffectURL()) && playSoundEffect) {
                    var audio = document.createElement('audio');
                    audio.setAttribute('src', this.getCloseSoundEffectURL());
                    audio.play();
                }
            },
            after: function(el, options){
                el.setVisible(true);
                el.setVisibilityMode(2);
                
                // remove the ListOptions DIV completely to save some resources
                activeListOptions.destroy();
                Ext.removeNode(Ext.getDom(activeListOptions));
                
                this.getList().fireEvent('listoptionsclose');
            },
            scope: this
        });
    },
    
    /**
     * Perform the List Option animation and show
     * @param {Object} listItemEl - the List Item's element to show a menu for
     */
    doShowOptionsMenu: function(listItemEl){
        if(this.getStopScrollOnShow()){
            this.getList().setScrollable(false);
        }
        
        // ensure the animation is not reversed
        Ext.apply(this.getRevealAnimation(), {
            reverse: false
        });
       
        // Do the animation on the current 
        Ext.Anim.run(listItemEl, this.getRevealAnimation(), {
            out: true,
            before: function(el, options){
                // Create the List Options Ext.Element
                this.createOptionsMenu(el);
                
                if (this.getEnableSoundEffects() && !Ext.isEmpty(this.getOpenSoundEffectURL())) {
                    var audio = document.createElement('audio');
                    audio.setAttribute('src', this.getOpenSoundEffectURL());
                    audio.play();
                }
            },
            after: function(el, options){
                console.log(el);
                el.setVisible(false);
                
                this.getList().fireEvent('listoptionsopen');
                
                // re-enable the scroller
                if (this.getStopScrollOnShow()) {
                    this.getList().setScrollable(true);
                }
            },
            scope: this
        });
    },
    
    /**
     * Used to process the menuOptions data prior to applying it to the menuOptions template
     */
    processMenuOptionsData: function(){
        return (Ext.isFunction(this.getMenuOptionDataFilter())) ? this.getMenuOptionDataFilter(this.getMenuOptions(), this.activeListItemRecord) : this.getMenuOptions();
    },
    
    /**
     * Get the existing or create a new List Options Ext.Element and return and cache it
     * @param {Object} listItem
     */
    createOptionsMenu: function(listItemEl){
        var listItemElHeight = listItemEl.getHeight();
        // Create the List Options element
        this.activeListOptions = Ext.DomHelper.insertAfter(listItemEl, {
            cls: this.getOptionsSelector(),
            html: this.getMenuOptionsTpl().apply(this.processMenuOptionsData())
        }, true).setHeight(listItemElHeight).setStyle('margin-top', (-1 * listItemElHeight) + 'px');
        
        // Add tap handlers to the List Option's menu items
        // this.activeListOptions.select('.' + this.getMenuOptionSelector()).on({
        //     touchstart: this.onListOptionTabStart,
        //     touchend: this.onListOptionTapEnd,
        //     tapcancel: this.onListOptionTabCancel,
        // });
        
        // attach event handler to options element to close it when tapped
        this.activeListOptions.on({
            tap: Ext.bind(this.doHideOptionsMenu, this, [this.activeListElement, this.activeListOptions], false),
            scope: this
        });
        
        return this.activeListOptions;
    },
    
    /**
     * Handler for 'touchstart' event to add the Pressed class
     * @param {Object} e
     * @param {Object} el
     */
    onListOptionTabStart: function(e, el){
        var menuOption = e.getTarget('.' + this.getMenuOptionSelector()),
            listOptionsEl = Ext.get(Ext.get(menuOption).findParent('.' + this.getOptionsSelector())).prev('.x-list-item');
        
        // get the menu item's data
        var menuItemData = this.processMenuOptionsData()[this.getIndex(menuOption)];
        
        if (this.getList().fireEvent('beforelistoptionstap', menuItemData, this.getList().getRecord(listOptionsEl.dom)) === true) {
                this.addPressedClass(e);
        } else {
            this.TapCancelled = true;
        }
    },
    
    /**
     * Handler for 'tapcancel' event
     * Sets TapCancelled value to stop TapEnd function from executing and removes Pressed class
     * @param {Object} e
     * @param {Object} el
     */
    onListOptionTabCancel: function(e, el){
        this.TapCancelled = true;
        this.removePressedClass(e);
    },
    
    /**
     * Handler for the 'tap' event of the individual List Option menu items
     * @param {Object} e
     */
    onListOptionTapEnd: function(e, el){
        if (!this.TapCancelled) {
            // Remove the Pressed class
            this.removePressedClass(e);
            
            var menuOption = e.getTarget('.' + this.getMenuOptionSelector()),
                listOptionsEl = Ext.get(Ext.get(menuOption).findParent('.' + this.getOptionsSelector())).prev('.x-list-item');
            
            // get the menu item's data
            var menuItemData = this.processMenuOptionsData()[this.getIndex(menuOption)];
            
            this.getList().fireEvent('menuoptiontap', menuItemData, this.getList().getRecord(listOptionsEl.dom));
        }
        this.TapCancelled = false;
        
        // stop menu from hiding
        e.stopPropagation();
    },
    
    /**
     * Adds the Pressed class on the Menu Option
     * @param {Object} e
     */
    addPressedClass: function(e){
        if (Ext.fly(e.getTarget('.' + this.getMenuOptionSelector()))) {
            Ext.fly(e.getTarget('.' + this.getMenuOptionSelector())).addCls(this.getMenuOptionPressedClass());
        }       
    },
    
    /**
     * Removes the Pressed class on the Menu Option
     * @param {Object} e
     */
    removePressedClass: function(e){
        if (Ext.fly(e.getTarget('.' + this.getMenuOptionSelector()))) {
            Ext.fly(e.getTarget('.' + this.getMenuOptionSelector())).removeCls(this.getMenuOptionPressedClass());
        }       
    },
    
    /**
     * Helper method to get the index of the List Option that was tapped
     * @param {Object} el - the tapped node
     */
    getIndex: function(el){
        var listOptions = Ext.get(Ext.get(el).findParent('.' + this.getOptionsSelector())).select('.' + this.getMenuOptionSelector());
        
        for(var i = 0; i < listOptions.elements.length; i++){
            if(listOptions.elements[i].id === el.id){
                return i;
            }
        }
        return -1;
    }  
});