!function($){function e(e){var t=$(this),n=null,i=[],o=null,u=null,r=$.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:$.noop,exit:$.noop,activate:$.noop,deactivate:$.noop,exitMenu:$.noop},e),c=3,l=300,f=function(e){i.push({x:e.pageX,y:e.pageY}),i.length>c&&i.shift()},a=function(){u&&clearTimeout(u),r.exitMenu(this)&&(n&&r.deactivate(n),n=null)},s=function(){u&&clearTimeout(u),r.enter(this),y(this)},h=function(){r.exit(this)},m=function(){x(this)},x=function(e){e!=n&&(n&&r.deactivate(n),r.activate(e),n=e)},y=function(e){var t=v();t?u=setTimeout(function(){y(e)},t):x(e)},v=function(){function e(e,t){return(t.y-e.y)/(t.x-e.x)}if(!n||!$(n).is(r.submenuSelector))return 0;var u=t.offset(),c={x:u.left,y:u.top-r.tolerance},f={x:u.left+t.outerWidth(),y:c.y},a={x:u.left,y:u.top+t.outerHeight()+r.tolerance},s={x:u.left+t.outerWidth(),y:a.y},h=i[i.length-1],m=i[0];if(!h)return 0;if(m||(m=h),m.x<u.left||m.x>s.x||m.y<u.top||m.y>s.y)return 0;if(o&&h.x==o.x&&h.y==o.y)return 0;var x=f,y=s;"left"==r.submenuDirection?(x=a,y=c):"below"==r.submenuDirection?(x=s,y=a):"above"==r.submenuDirection&&(x=c,y=f);var v=e(h,x),p=e(h,y),b=e(m,x),d=e(m,y);return b>v&&p>d?(o=h,l):(o=null,0)};t.mouseleave(a).find(r.rowSelector).mouseenter(s).mouseleave(h).click(m),$(document).mousemove(f)}$.fn.menuAim=function(t){return this.each(function(){e.call(this,t)}),this}}(jQuery);