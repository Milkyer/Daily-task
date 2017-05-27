$(window).load(function () {
	var img_arry = $("#lunbo img");
	var li_arry = $("#lunbo_icon li");
	var count = 1;
    function lunbo () {
    	return (setInterval (function () {
                   if (count == 2) {
                       $(img_arry[2]).removeClass("show");
                       $(img_arry[0]).addClass("show");
                       $(li_arry[2]).removeClass("on");
                       $(li_arry[0]).addClass("on");
                       count = 0;
                   } else {
                       $(img_arry[count]).removeClass("show");
                       $(img_arry[count+1]).addClass("show");
                       $(li_arry[count]).removeClass("on");
                       $(li_arry[count+1]).addClass("on");
                       count ++;
                   }
                }, 2000))
    }
    var run = lunbo();
    $(".blessing").mouseover(function(){
		clearInterval(run);
	})
	$(".blessing").mouseout(function(){
		run = lunbo();
	})

	function stopAt(i){
        $(li_arry[i]).click(function(){
        	$(li_arry[count]).removeClass("on");
        	$(li_arry[i]).addClass("on")
        	$(img_arry[count]).removeClass("show")
        	$(img_arry[i]).addClass("show")
        	count=i
        })
	}
	for(var i=0;i<=2;i++){
		stopAt(i)
	}

});