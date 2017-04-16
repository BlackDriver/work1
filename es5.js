//map方法
Array.prototype.newmap = function(fun,context) {
    var arr=[];
    if (typeof fun === "function") {
        for (var i = 0; i < this.length;i++) {
            arr.push(fun.call(context,this[i],i,this));
        }
    }
    return arr;
};
//filter方法 怎么感觉是一样的...
Array.prototype.newfilter = function(fun,context) {
    var arr=[];
    if (typeof fun === "function") {
        for (var i = 0; i < this.length;i++) {
            arr.push(fun.call(context,this[i],i,this));
        }
    }
    return arr;
};
//some方法
Array.prototype.newsome = function(fun,context) {
    var pass = false;
    if (typeof fun === "function") {
        for (var i = 0; i < this.length;i++) {
            if (pass === "true")break;
            pass = fun.call(context,this[i],i,this);
        }
    return pass;
    }
};
//every方法

Array.prototype.newevery= function(fun,context) {
    var pass = ture;
    if (typeof fun === "function") {
        for (var i = 0; i < this.length;i++) {
            if (pass === "false")break;
            pass = fun.call(context,this[i],i,this);
        }
    return pass;
    }
};
//reduce方法