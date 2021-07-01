/**
 * owl Carousel initialization
 */

$(document).ready(function() {
    var itemSlider = $('#owl-carousel');
    itemSlider.owlCarousel(
    {
      items:3,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
      autoplay:3000,
      autoplayHoverPause:true,
      loop:true,
      smartSpeed:1200,
      dots:true,
      margin:5,
      responsive:
      {
        0:{items:1,nav:false},
        450:{nav:false},
        768:{items:2},
        992:{items:3}
      }
    });
  });

  /**
 * Carousel random put info
 */
$(document).ready(function() {
  //	declare variables
  var div_item_n = []
  var img_path = []
  var caroucel_items = []
  var n = 0
      //	getting data from item list
      //	getting items list
  var container = document.querySelector('#myItems');
  //	making array of items
  var matches_button = container.querySelectorAll('li>button');
  var matches_img = container.querySelectorAll('div.card > img');
  //	making array id from div
  $.each(matches_button, function(ind, elem) {
          div_item_n.push($(elem).attr("data-target"))
      })
      //	making array src path from item
  $.each(matches_img, function(ind, elem) {
          img_path.push(elem.src)
      })
      //	carousel insert data
      //	getting carousel list
  var container_carosuels = document.querySelector('.owl-carousel');
  //	making array of items for buttom target and Img source
  var matches_img_carousels = container_carosuels.querySelectorAll('button.carousel_modal > img');
  var matches_d_target_carousels = container_carosuels.querySelectorAll('button.carousel_modal');
  //	put random source to carousel src
  $.each(matches_img_carousels, function(ind, elem) {
      var r_number = Math.floor(Math.random() * img_path.length);
      $(elem).attr('src', img_path[r_number])
      $(matches_d_target_carousels[n]).attr('data-target', div_item_n[r_number])
      n += 1
  })
})
//paginator-search function

$(document).ready(function() {
  // scroll down
  $("body").animate({
      scrollTop: $(document).height()
  }, 9000, 'easeInOutExpo')
});

$(function() {

  var flexiblePagination = $('#myItems').flexiblePagination({
      itemsPerPage: 8,
      itemSelector: 'div.result:visible',
      pagingControlsContainer: '#pagingControls',
      showingInfoSelector: '#showingInfo',

      css: {
          btnNumberingClass: 'btn btn-outline-primary',
          btnActiveClass: "btn btn-primary",
          btnFirstClass: 'btn btn-outline-primary',
          btnLastClass: 'btn btn-outline-primary',
          btnNextClass: 'btn btn-outline-primary',
          btnPreviousClass: 'btn btn-outline-primary',
      }
  });

  flexiblePagination.getController().onPageClick = function(pageNum, e) {
      console.log('You Clicked Page: ' + pageNum)
      $('html, body').animate({ scrollTop: 1100 }, 'smooth');
  };


});

//finish of paginator search

//carousel automatic change for slab and sink