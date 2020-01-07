	var text = "In love folly is always sweet.In love folly is always sweet.In love folly is always sweet.In love folly is always sweet.In love folly is always sweet.";
    var num = text.length;

    var i =0;
    function show() {
        var shower = text.substr(0,i);
        document.getElementById("test").innerHTML = shower;
        i++;
        if(i + 1 >= num){
            clearInterval("done");
        }
    }
    var done=setInterval("show()",10);
    
