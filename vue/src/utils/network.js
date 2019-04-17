export const lineStatus = () =>{
    let status = true;
    if (!navigator.onLine) {
        status = false;
    }
    return status;
}

//判断安卓/ios
export const phoneType = () =>{
    let phoneType = '';
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    
    if(isAndroid){
        phoneType = 'Android'
    }else{
        phoneType='ios';
    }
    

    return phoneType;
}