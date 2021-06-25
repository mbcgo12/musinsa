var tab = $('.tab li ');
var tabCon= $('.tab_content>div');

tab.click(function(){
    var tg=$(this);
    var i=tg.index();
    tab.find('a').removeClass('on');
    tg.find('a').addClass('on');
    tabCon.css('display','none');
    tabCon.eq(i).css('display','block');
});
