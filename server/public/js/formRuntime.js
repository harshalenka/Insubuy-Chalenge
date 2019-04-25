var app = {
    init: function(){
        this.bindEvents();
    },
    bindEvents:  function(){
        $('#formSubmit').bind('click', $.proxy(this.postForm, this));
    },
    postForm: function(){
        
        var formParams = $('#registerFrom').serialize();
        var postData = this.paramToObject(formParams);
        $.ajax({
            url: '/quotes/',
            method: 'POST',
            dadta: postData,
            success: function(rep, status, xhr){
                window.location.href = '/results';
            }
        })
    },
    paramToObject: function(params){
        var paramArr = params.split("&");
        var obj = {};
        paramArr.forEach(function(param){
            var arr = param.split("=");
            obj[arr[0]] = arr[1];
        });
        return obj;
    }
}

app.init();