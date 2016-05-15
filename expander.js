jQuery.fn.expander = function(){
  var me = this.attr("id") ? $("#" + this.attr("id")) : this;
  
  // default values
  
  var MaxHeight = (me.attr("data-height")) ? me.data("height") : "5em",
      lblView = (me.data("view")) ? me.data("view") : "view all",
      lblHide = (me.data("hide")) ? me.data("hide") : "hide me";
  
  // expand button
  
  var btnExists = me.find(".btnExpander"),
      expander = (btnExists.length) ? btnExists : $('<a href="#" class="btnExpander"></a>');
      
  expander.click(function(){                     
    if (me.hasClass("stretched"))
    {
      me.removeClass("stretched").css("maxHeight","800em");
      expander.html(lblHide);
    }
    else
    {
      me.addClass("stretched").css("maxHeight",MaxHeight);
      expander.html(lblView);
    }                              
  });

  // check if height is already limited (ie. in css for better rendering)
  // if not - do it
  
  var child = me.children().height(); 
}
