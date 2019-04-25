var app = {
    init: function(){
        $.ajax({
            url:'/quotes/',
            method:'GET',
            success: $.proxy(this.renderPage, this)
        });
        this.bindEvents();
    },
    bindEvents: function(){
        $('#listViewLink').bind('click', $.proxy(this.listLinkClickHandler, this));
        $('#gridViewLink').bind('click', $.proxy(this.gridLinkClickHandler, this));
    },
    listLinkClickHandler: function(){
        $('#listView').show();
        $('#gridView').hide();
    },
    gridLinkClickHandler: function(){
        $('#listView').hide();
        $('#gridView').show();
    },
    renderPage: function(data){
        data.quotes.forEach($.proxy(function(quote){
            this.renderListItem(quote);
            this.renderGridItem(quote);
        }),this);
    },
    renderListItem: function(item){
        var tr = $('<tr></tr>');
        $(tr).append('<td>'+ item.id +'</td>');
        $(tr).append('<td>'+ item.name +'</td>');
        $(tr).append('<td>'+ item.description +'</td>');
        $(tr).append('<td>'+ item.price +'</td>');
        $(tr).append('<td>'+ item.type +'</td>');
        $(tr).append('<td>'+ item.section +'</td>');
        $(tr).append('<td>'+ item.bestSellers +'</td>');
        $('#listViewTable').append(tr);
    },
    renderGridItem: function(item){

    }
}

app.init();