let btnPrev=$('.prev');
let btnNext=$('.next');
let autoplay=true;
let index=1;
let time=0;
btnNext.click(next);
btnPrev.click(prev);
function sliderShow(e){
    let slide=$('.slide');
    let n=slide.length
    if(e>slide.length){
        index=1;
        e=1;
    }
    else if(e<1){
        index=slide.length;
        e=slide.length;
    }
    slide.hide();
    slide.eq(e-1).fadeIn(3000);
}
function next(){
    index+=1;
    sliderShow(index);
}
function prev(){
    index-=1;
    sliderShow(index);
}



    setInterval(function(){
        next();
    },3000);


    