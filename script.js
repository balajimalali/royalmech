
isexp = false
function expand(){
    if(isexp){
        document.querySelector('.leftnav').style.height = '45px'
        document.querySelector(".jump").style.display = 'none';
        isexp = false
    }
    else{
        document.querySelector('.leftnav').style.height = '250px'
        document.querySelector(".jump").style.display = 'block';
        isexp = true
    }
}

addEventListener('orientationchange', (event) => { 
    if(screen.orientation.type == 'landscape-primary' || screen.orientation.type == 'landscape-secondary'){
        document.querySelector('.leftnav').style.height = '100vh'
        document.querySelector(".jump").style.display = 'block';
    }
    if((screen.orientation.type == 'portrait-primary' || screen.orientation.type == 'portrait-secondary') && innerHeight<600){
        document.querySelector('.leftnav').style.height = '45px'
        document.querySelector(".jump").style.display = 'none';
    }
});