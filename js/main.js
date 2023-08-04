// $(function(){
//   $(window).on('load', function(){        
//     var e = '.sticky_gallery ul li';
//     var count = 3;
//     var hori_mg = 0;
//     var verti_mg = 0;
//     sticky_gallery.deployment(e, count, hori_mg, verti_mg);
//   });
// })//시작function

// var sticky_gallery = {
//   deployment:function(e, count, hori_mg, verti_mg){
//       var li = document.querySelectorAll(e);
//       var imgStack = new Array();
      
//       var count;
//       var hori_mg;
//       var verti_mg;
//       var eleWidth = $(e).width(($(e).parent().width() / Number(count)) - Number(hori_mg) + (Number(hori_mg) / Number(count)));
//       setTimeout(function(){
//           var colWidth = $(e).width() + Number(hori_mg);

//           for(var i = 0; i < Number(count); i++){
//               imgStack[i] = 0;
//           }

//           for(var i = 0; i < li.length; i++){

//               var minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));

//               var x = colWidth * minIndex;
//               var y = imgStack[minIndex];
//               imgStack[minIndex] += (li[i].offsetHeight + Number(verti_mg));
//               li[i].style.transform = "translateX("+x+"px) translateY("+y+"px)";
//               if(i === li.length - 1){
//                   $(e).parent().css({
//                       // height : Math.max.apply(0, imgStack)+"px"
//                       height : (Math.max.apply(0, imgStack) - verti_mg)+"px"
//                   });
//               }
//           }
//       },500);
//   }
// };

/* masonry */
$(function(){
  $(function(){
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      
    });
  })
})//function



// /* Scroll Indicator */
// function progress_bar() {
//   const b = document.createElement('em');
//   b.setAttribute('class','progress_bar');
//   b.innerHTML = "i'm progress_bar!! khk made me!!";
//   document.querySelector('.sec_1').append(b);

//   var elem = document.querySelector('.progress_bar');
//   var width = 0;
//   var id = setInterval(frame,40)
//   function frame() {
//     if (width == 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//     }
//   }
// }
// progress_bar()
window.addEventListener("resize", function() {
  var width1 = document.querySelectorAll('.inner > p > strong');
  for(let i = 0; i<width1.length; i++){
    var dott = document.querySelectorAll('.inner > p > strong > em')
    dott[i].style.left = width1[i].clientWidth + 15 +'px';
  }
})
  



/* 패럴랙스 효과 구현하기 */


//sec_1 client height 가져오기 //높이값 계산을 스크롤 내에서//리사


  //sec_2 sticky 부여, top은 sec_1 client height로 지정//css
  //sec_2의 리앙에이지 로고 offset top이 딱 0이 되었을때
  //sec_3의 postion top 값이 -가






/* nav open */
function nav_btn(e){
  let nav = document.querySelector('header nav');
  if(nav.classList.contains('active')){
    nav.classList.remove('active');
  }else{
    nav.classList.add('active');
  }
}

/* 스크롤 이벤트 */
function scrollEvt(_target){
  // window.addEventListener('scroll', function(){
    let scrollTop = window.scrollY//scrolltop
    let winHeight = window.outerHeight * 0.9 //브라우저 높이
    // console.log(document.querySelector('.sec_3').offsetTop-250,scrollTop)
    var sec = document.querySelector(_target)
    let sec_offset = document.querySelector(_target).offsetTop-winHeight;
    if(scrollTop >=sec_offset){
      sec.classList.add('show');
        // console.log(_target)  
      }else{
        sec.classList.remove('show')
      }
  // })
}

sec_pos = [];
sections = document.querySelectorAll('section');
for(var j=0; j<sections.length; j++){
  sec_pos.push(sections[j].offsetTop);
}

window.addEventListener('scroll', function(){
  if(window.scrollY >= sec_pos[2]){
    scrollEvt('.sec_3')
  }
  if(window.scrollY >= sec_pos[3]){
    scrollEvt('.sec_4')
  }
})


/* section3 완료 */
// window.addEventListener('scroll', function(){
//   let scrollTop = window.scrollY//scrolltop
//   let winHeight = window.outerHeight * 0.8 //브라우저 높이
//   // console.log(document.querySelector('.sec_3').offsetTop-250,scrollTop)
//   let sec_offset = document.querySelector('.sec_3').offsetTop-winHeight;
//   let sec_3 = document.querySelector('.sec_3')
//     if(scrollTop >=sec_offset){
//       sec_3.classList.add('show');
//     }else{
//       sec_3.classList.remove('show')
//     }
// })

/* section4 완료 */
// window.addEventListener('scroll', function(){
//   let scrollTop = window.scrollY//scrolltop
//   let winHeight = window.outerHeight * 0.8 //브라우저 높이
//   // console.log(document.querySelector('.sec_3').offsetTop-250,scrollTop)
//   let sec_offset = document.querySelector('.sec_4').offsetTop-winHeight;
//   let sec_4_ul = document.querySelectorAll('.sec_4 .inner ul')
//     if(scrollTop >=sec_offset){
//       sec_4_ul.forEach(function(a){
//         a.classList.add('show')
//         console.log(a)
//       })
//     }else{
//       sec_4_ul.forEach(function(a){
//         a.classList.remove('show')
//       })
//     }
// })






window.addEventListener('scroll', function(){
  let scrollTop = window.scrollY//scrolltop
  let winHeight = window.outerHeight * 0.2 //브라우저 높이
  let sec_offset = document.querySelector('.sec_2').offsetTop-winHeight;
    if(scrollTop >=sec_offset){
      let sec_2 = document.querySelectorAll('.sec_2 .inner ul li');
      sec_2.forEach(function(a,i){ 
        a.style.opacity = 1;
        a.style.transitionDelay = 300*i + "ms";
      })
    }
})





// var scrollTop = window.scrollY
// console.log(scrollTop)
  // let sec_3 = document.querySelector('.sec_3')
  // let observer = new IntersectionObserver()
  // console.log(observer.observe(sec_3));
//만약 해당 섹션의 높이의 20% 도착했을 때
//해당 섹션에 show 클래스가 붙는다,
//아닐경우  show 클래스가 제거된다.

/* text_animation */
window.addEventListener('scroll', function(){
  let scrollTop = window.scrollY
  let winHeight = window.outerHeight * 0.4
  let delay = 100
  // console.log(document.querySelector('.sec_3').offsetTop-250,scrollTop)
  let sec_offset = document.querySelector('.sec_6').offsetTop-winHeight;
    if(scrollTop >=sec_offset){

      // const test = document.querySelectorAll('.sec_6 .inner ul > li > img');
      //     test.forEach((e,i)=> {
      //         setTimeout(function(){
      //             e.style.cssText = `border:1px solid red; transition-property:all;`;
      //         },i*delay);
              
      //     });
      //     setTimeout(function(){
      //         test.forEach((e,i)=> {
      //             setTimeout(function(){
      //                 test[(test.length-(i+1))].removeAttribute('style');
      //             },i*50);
      //         });
      //     },test.length * delay);




        var text = document.querySelectorAll('.sec_6 .inner ul > li > img')
        text.forEach(function(a,i){
          setTimeout(function(){
            a.style.animation = "jumps 2s ease-in-out 1 alternate";
            a.style.animationDelay = (delay*i);
            // console.log('1 : '+i)
          }, (delay*i))
          console.log(delay*i)
        })
        
        setTimeout(function(){
          text.forEach(function(a,j){
            // text[text.length - (j+1)].style.border='2px solid blue'
            text[text.length - (j+1)].style.animation = "jumps 2s ease-in-out 2 alternate";
            text[text.length - (j+1)].style.animationDelay = delay*j;
            // console.log('2 : '+(text.length - (j+1)));
          })
        }, (delay* text.length))
      
    }
})




// /* typing */
 const content = "Metaverse R&D Center";
 const text = document.querySelector(".sec_4 .inner h2");
 let i = 0;

 var typingani = function typing(){
     if (i < content.length) {
     let txt = content.charAt(i);
     text.innerHTML += txt;
     i++;
     }
 }
 setInterval(typingani, 200);
 clearInterval(typingani);