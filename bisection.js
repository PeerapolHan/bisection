let xl = 1.5;
let xr = 2;
let xm = (xl+xr)/2;
let xmo = 0;
let es =0;
let i = 0;
function fx(x){
    return (x**4-13);
}

while(Math.abs((xm-xmo)/xm)>=0.000001){
    xm = (xl+xr)/2;
    var fxm = fx(xm);
    var fxr = fx(xr);

    if(fxm*fxr > 0){
        xmo = xr;
        xr = xm;
    }
    else{
        xmo = xl;
        xl =xm;
    }
    if(i>=1){
        es = Math.abs((xm-xmo)/xm);
        console.log('Iteration:',i);
        console.log('xl',(xl).toFixed(6));
        console.log('xr',(xr).toFixed(6));
        console.log('xm',(xm).toFixed(6));
        console.log('es', (es).toFixed(6));
        console.log('-----------------');
    }
    else{
        console.log('Iteration:',i);
        console.log('xl',(xl).toFixed(6));
        console.log('xr',(xr).toFixed(6));
        console.log('xm',(xm).toFixed(6));
        console.log('-----------------');       
    }
    i++;
}
//console.log('xl',(xl).toFixed(6));
//console.log('xr',(xr).toFixed(6));