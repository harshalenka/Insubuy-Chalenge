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
        $('#filter').bind('click', $.proxy(this.filterClickHandler, this));
    },
    listLinkClickHandler: function(){
        $('#listView').show();
        $('#gridView').hide();
    },
    gridLinkClickHandler: function(){
        $('#listView').hide();
        $('#gridView').show();
    },
    filterClickHandler: function(){
        $('#listView').hide();
        $('#gridView').hide();
    },
    renderPage: function(data){
        data.quotes.forEach($.proxy(function(quote){
            this.renderListItem(quote);
            this.renderGridItem(quote);
        }),this);
    },
    renderListItem: function(item){
        var temp="";
        var tr = "<div class='card green' Style='float:left;text-align:Center;'>";
        tr+=("<div class='additional'>");
        tr+=("<div class='user-card'>");
        tr+=("<div class='level center'>"+item.id+"</div>");
        tr+=("<div class='points center'>"+"Price:"+item.price+"</div></div>");
        tr+=("<div class='more-info'>"+"<h1>"+item.name+"</h1>"+"<p>"+item.description+"</p>"+"<span class='more'>Mouse over the card for more info</span>"+"</div></div>");
        tr+=("<div class='general'>"+"<h1>"+item.name+"</h1>"+"<div class='coords'>"+"<span>Type:"+item.type+"</span>"+"</div>");
        tr+=("<div class='coords'>"+"<span>BestSeller:"+item.bestSellers+"</div>");
        tr+=("<div class='stats'><div>"+"<div class='title'>Section:"+item.section+"</div>"+"<i class='fa fa-trophy'></i>"+"<div class='value'>"+item.section+"</div>"+"</div>");
        tr+=("</div></div></div>");

        $('#listViewTable').append(tr);
        $('#gridView').hide();
    },
    renderGridItem: function(item){
        var temp="";
        var tr = "<div class='card green' Style='text-align:Center;'>";
        tr+=("<div class='additional'>");
        tr+=("<div class='user-card'>");
        tr+=("<div class='level center'>"+item.id+"</div>");
        tr+=("<div class='points center'>"+"Price:"+item.price+"</div></div>");
        tr+=("<div class='more-info'>"+"<h1>"+item.name+"</h1>"+"<p>"+item.description+"</p>"+"<span class='more'>Mouse over the card for more info</span>"+"</div></div>");
        tr+=("<div class='general'>"+"<h1>"+item.name+"</h1>"+"<div class='coords'>"+"<span>Type:"+item.type+"</span>"+"</div>");
        tr+=("<div class='coords'>"+"<span>BestSeller:"+item.bestSellers+"</div>");
        tr+=("<div class='stats'><div>"+"<div class='title'>Section</div>"+"<i class='fa fa-trophy'></i>"+"<div class='value'>"+item.section+"</div>"+"</div>");
        tr+=("</div></div></div>");

        $('#gridViewTable').append(tr);

    }
}

app.init();