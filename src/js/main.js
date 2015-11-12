(function($) {

    /* Show Menu and Push the content on left */
    var showMenu = document.getElementById( 'menu--buttonShow' ),
        menuLeft = document.getElementById( 'menu--items' ),
        body = document.body;

    showMenu.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( body, 'push' );
        classie.toggle( menuLeft, 'menu--open' );
    };

    /* Show Search input*/
    var showSearch = document.getElementById( 'search--buttonShow'),
        searchForm = document.getElementById( 'search--form'),
        searchInput = document.getElementById( 'search--input'),
        overlay = document.getElementById( 'overlay'),
        animateSearchInput = function(){classie.toggle( searchInput, 'animate' );};

    showSearch.onclick = function() {
        classie.toggle( body, 'no-scroll' );
        classie.toggle( overlay, 'show' );
        classie.toggle( searchForm, 'show' );
        setTimeout(animateSearchInput, 500);
    };

    overlay.onclick = function(){
        if (classie.has( overlay, 'show' )){
            classie.toggle( body, 'no-scroll' );
            classie.toggle( overlay, 'show' );
            classie.toggle( searchForm, 'show' );
            classie.toggle( searchInput, 'animate' );
        }
    };

})(jQuery);