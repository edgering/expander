jQuery.fn.WrapMe = function(){

  var me = this.attr("id") ? $("#" + this.attr("id")) : this,  
    temp = me.find("btnExpander").length;
  
  var mh = me.attr("data-height") ? me.data("height") : "10em",
      lbl_vse = (me.data("vse")) ? me.data("vse") : "vše",
      lbl_skryt = (me.data("skryt")) ? me.data("skryt") : "skrýt"; 
                 
  if (me.children().height() > me.height())
  {
    me.addClass("stretch");
  }
    
  var expander = (temp) ? temp : $('<a href="#" class="btnExpander">vše</a>');
                                        
  expander.click(function(){                     
    if (me.hasClass("stretch"))
    {
      me.removeClass("stretch").css("maxHeight","800em");
      expander.html(lbl_skryt);
    }
    else
    {
      me.addClass("stretch").css("maxHeight",mh);
      expander.data(lbl_vse);
    }                              
  });
    
  expander.appendTo(me);    
}
