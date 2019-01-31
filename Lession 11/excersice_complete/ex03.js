function fibMemo(n){
    // Fibonaci
    //  code here

    const m = new Map();
    if(m.has(n)){
        return map.get(n);
    }else{
        m.set(n - 1,fibonaci(n - 1)),
        m.set(n  -2, fibonaci(n - 2),)
    }
    
    // chua tinh
    map.set(n, fibonaci(n));
}