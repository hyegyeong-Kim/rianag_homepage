var swiper_1 = new Swiper(".sec_1_swiper", {
  autoplay: {
       delay: 5000,
       disableOnInteraction: false,
     },
 pagination: {
       el: ".swiper-pagination",
       type: "fraction",
       formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                  ' / ' +
                  '<span class="' + totalClass + '"></span>';
        }
        
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
   });


  // //progress Bar
  // var pagingSwiper = new Swiper(".sec_1_swiper", {
  //   pagination: {
  //     el: ".pagination_progress",
  //     type: "progressbar",
  //   },
  // });
  
  // swiper_1.controller.control = pagingSwiper;

  //progress Bar
	var pagingSwiper = new Swiper(".sec_1_swiper", {
		pagination: {
			el: ".pagination_progress",
			type: "progressbar",
		},
	});

    //Main Swiper로 progress Bar 제어
    swiper_1.controller.control = pagingSwiper;


   var swiper_2 = new Swiper(".sec_3_swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
