// JavaScript Document
(function($){
  $.fn.myScroll = function(options){
  //默认配置
  var defaults = {
    speed:40, //滚动速度,值越大速度越慢
    rowHeight:24 //每行的高度
  };
  var opts = $.extend({}, defaults, options),intId = [];
  var x = $("ul").find("li").length;//找到li的个数
  var z=0;
  function marquee(obj, step){
    obj.find("ul").animate({
      marginTop: '-=1'
    },0,function(){
        z = z + 1;
        var s = Math.abs(parseInt($(this).css("margin-top")));
        if(s >= step&&z<x){//z<x是为了让循环只走一遍，如果去掉就是首尾不间断滚动
          $(this).find("li").slice(0, 1).appendTo($(this));
          $(this).css("margin-top", 0);
        }
      });
    }
    this.each(function(i){
      var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
      intId[i] = setInterval(function(){
        if(_this.find("ul").height()<=_this.height()){
          clearInterval(intId[i]);
        }else{
          marquee(_this, sh);
        }
      }, speed);
      _this.hover(function(){
        clearInterval(intId[i]);
      },function(){
        intId[i] = setInterval(function(){
          if(_this.find("ul").height()<=_this.height()){
            clearInterval(intId[i]);
          }else{
            marquee(_this, sh);
          }
        }, speed);
      });
    });
  }
})(jQuery);