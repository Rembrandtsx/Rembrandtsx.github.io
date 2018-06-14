'use strict';

$(document).ready(function() {

  var animating = false;
  var step1 = 500;
  var step2 = 500;
  var step3 = 500;
  var reqStep1 = 600;
  var reqStep2 = 800;
  var reqClosingStep1 = 500;
  var reqClosingStep2 = 500;
  var $scrollCont = $(".phone__scroll-cont");

 
  
  

  $(document).on("click", ".card:not(.active)", function() {
    if (animating) return;
    animating = true;
    
    var $card = $(this);
    var cardTop = $card.position().top;
    var scrollTopVal = cardTop - 30;
    $card.addClass("flip-step1 active");

    $scrollCont.animate({scrollTop: scrollTopVal}, step1);

    setTimeout(function() {
      $scrollCont.animate({scrollTop: scrollTopVal}, step2);
      $card.addClass("flip-step2");

      setTimeout(function() {
        $scrollCont.animate({scrollTop: scrollTopVal}, step3);
        $card.addClass("flip-step3");

        setTimeout(function() {
          animating = false;
        }, step3);

      }, step2*0.5);

    }, step1*0.65);
  });

  $(document).on("click", ".card:not(.req-active1) .card__header__close-btn", function() {
    if (animating) return;
    animating = true;
    
    var $card = $(this).parents(".card");
    $card.removeClass("flip-step3 active");

    setTimeout(function() {
      $card.removeClass("flip-step2");

      setTimeout(function() {
        $card.removeClass("flip-step1");

        setTimeout(function() {
          animating = false;
        }, step1);

      }, step2*0.65);

    }, step3/2);
  });

 
 
  $(document).on("click", 
                 ".card.req-active1 .card__header__close-btn, .card.req-active1 ", 
                 function() {
    if (animating) return;
    animating = true;
    
    var $card = $(this).parents(".card");
    
    $card.addClass("req-closing1");
    
    setTimeout(function() {
      $card.addClass("req-closing2");
      
      setTimeout(function() {
        $card.addClass("no-transition hidden-hack")
        $card.css("top");
        $card.removeClass("req-closing2 req-closing1 req-active2 req-active1 map-active flip-step3 flip-step2 flip-step1 active");
        $card.css("top");
        $card.removeClass("no-transition hidden-hack");
        animating = false;
      }, reqClosingStep2);
      
    }, reqClosingStep1);
  });

});

// angular used only for templating, I was too tired to find more lightweight solution
var node_Theme={
  hex: '#6cc24a',
  logo:'fab fa-node-js',
  color:'node-green'
}
var js_Theme={
  hex:'#f7df1e',
  logo:'fab fa-js',
  color:'js-yellow'
}

var delivcardDefaultData = [
  {
  Title: '2618-3157',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque cum iusto in minima consectetur, vel qui officiis consequuntur. Nulla doloremque cumque deleniti reprehenderit quia iste ipsum tenetur voluptates debitis!',
  day: 25,
  month:'Dec',
  skill:node_Theme.logo,
  requests: 5, 
  pledge: 150, 
  weight: 50,
  sender: 'Edward Norton',
  senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
  themeColor: node_Theme.color,
  themeColorHex: node_Theme.hex,
  bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg',
  rating: 5,
  ratingCount: 26,
  fromStreet: 'W 90th St',
  fromCity: 'New York, NY 10025',
  toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
  delivTime: '06:30 pm',
  delivDate: 'May 16, 2015',
  delivDateNoun: 'Today',
   reqDl: '24 minutes'
  },
  {
    Title: '2618-3157',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque cum iusto in minima consectetur, vel qui officiis consequuntur. Nulla doloremque cumque deleniti reprehenderit quia iste ipsum tenetur voluptates debitis!',
    day: 25,
    month:'Dec',
    skill:js_Theme.logo,
    requests: 5, 
    pledge: 150, 
    weight: 50,
    sender: 'Edward Norton',
    senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
    themeColor: js_Theme.color,
    themeColorHex: js_Theme.hex,
    bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg',
    rating: 5,
    ratingCount: 26,
    fromStreet: 'W 90th St',
    fromCity: 'New York, NY 10025',
    toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
    delivTime: '06:30 pm',
    delivDate: 'May 16, 2015',
    delivDateNoun: 'Today',
     reqDl: '24 minutes'
    },
    {
      Title: '2618-3157',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque cum iusto in minima consectetur, vel qui officiis consequuntur. Nulla doloremque cumque deleniti reprehenderit quia iste ipsum tenetur voluptates debitis!',
      day: 25,
      month:'Dec',
      skill:node_Theme.logo,
      requests: 5, 
      pledge: 150, 
      weight: 50,
      sender: 'Edward Norton',
      senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
      themeColor: node_Theme.color,
      themeColorHex: node_Theme.hex,
      bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg',
      rating: 5,
      ratingCount: 26,
      fromStreet: 'W 90th St',
      fromCity: 'New York, NY 10025',
      toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
      delivTime: '06:30 pm',
      delivDate: 'May 16, 2015',
      delivDateNoun: 'Today',
       reqDl: '24 minutes'
      },
      {
        Title: '2618-3157',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque cum iusto in minima consectetur, vel qui officiis consequuntur. Nulla doloremque cumque deleniti reprehenderit quia iste ipsum tenetur voluptates debitis!',
        day: 25,
        month:'Dec',
        skill:node_Theme.logo,
        requests: 5, 
        pledge: 150, 
        weight: 50,
        sender: 'Edward Norton',
        senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
        themeColor: node_Theme.color,
        themeColorHex: node_Theme.hex,
        bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg',
        rating: 5,
        ratingCount: 26,
        fromStreet: 'W 90th St',
        fromCity: 'New York, NY 10025',
        toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
        delivTime: '06:30 pm',
        delivDate: 'May 16, 2015',
        delivDateNoun: 'Today',
         reqDl: '24 minutes'
        },
        {
          Title: '2618-3157',
          description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum neque cum iusto in minima consectetur, vel qui officiis consequuntur. Nulla doloremque cumque deleniti reprehenderit quia iste ipsum tenetur voluptates debitis!',
          day: 25,
          month:'Dec',
          skill:node_Theme.logo,
          requests: 5, 
          pledge: 150, 
          weight: 50,
          sender: 'Edward Norton',
          senderImg: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-sender.jpg',
          themeColor: node_Theme.color,
          themeColorHex: node_Theme.hex,
          bgImgUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/deliv-1.jpg',
          rating: 5,
          ratingCount: 26,
          fromStreet: 'W 90th St',
          fromCity: 'New York, NY 10025',
          toStreet: '46th Ave', toCity: 'Woodside, NY 11101',
          delivTime: '06:30 pm',
          delivDate: 'May 16, 2015',
          delivDateNoun: 'Today',
           reqDl: '24 minutes'
          }
 
];

var app = angular.module("delivcard", []);
app.controller("DelivCtrl", ['$scope', function($scope) {

  $scope.cards = delivcardDefaultData;

}]);
