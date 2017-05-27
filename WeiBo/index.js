window.onload = function() {
    var collect = document.getElementById('collect');
    var temp1 = document.getElementById('temp1');
    var temp2 = document.getElementById('temp2');
    var temp3 = document.getElementById('temp3');
    var list1 = document.getElementById('list1');
    var list2 = document.getElementById('list2');
    var list3 = document.getElementById('list3');

    function onClick(temp) {
        var i = parseInt(temp.innerHTML);
        temp.innerHTML = ++i;
    }

    list1.onclick = onClick(temp1);
    list2.onclick = onClick(temp2);
    list3.onclick = onClick(temp3);

    function changeCollect() {
        if(collect.style.color='grey') {
            collect.onclick = function() {
                collect.style.color='orange';
            }
        }else {
            collect.onclick = function() {
                collect.style.color='grey';
            }
        }
    }
    collect.onclick = changeCollect;
};