jQuery.fn.expander = function(){
  var me = this.attr("id") ? $("#" + this.attr("id")) : this;
  
  // default values
  
  var MaxHeight = (me.attr("data-height")) ? me.data("height") : "5em",
        lblView = (me.data("view")) ? me.data("view") : "view all",
        lblHide = (me.data("hide")) ? me.data("hide") : "hide me";
      
  // do we need it? -> compare MaxHeight with height of a child
  
  var child = me.children().height(),
         mh = parseInt(MaxHeight),
         fs = parseInt(me.css("fontSize"));
    
  if (MaxHeight.search(/em/i) > 0)
  {    
    mh = (mh * fs); 
  }
      
  if (child > mh && child < mh + fs)
  {
    me.css("maxHeight","800em");
  }  
  else if (child > mh)
  {            
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

    expander.appendTo(me);
    me.addClass("hasBtnExpander");
    
    if (child > me.height())
    {    
      expander.trigger("click");
    }   
  }   
}
