/* JavaScript Document */

(function(){

var marqueeVars = {
  screenSize : '',
  width : 0,
  mobileSize : 600,
  autoPlay : 0,
  currentPanel : 1,
  totalPanels : 0,
  timePassed : 0,
  timeToChange : 60,
  duration : 1250,
  inTransition : false,
  panelContent : Array
};

marqueeGatherData();

function marqueeGatherData() {
  $('.marquee_data .marquee_panel').each(function(index){
    marqueeVars.totalPanels = index + 1;
    var panel_image_l = $(this).attr('data-image')+'_l.jpg';
    var panel_image_s = $(this).attr('data-image')+'_s.jpg';
    var panel_caption = $(this).html();
    marqueeVars.panelContent[index] =
      'div class="marquee_panel" data-image-s="' + panel_image_s +
      '"style="background-image:url(' + panel_image_l + ');"><div class="overlay"></div>' +
      '<div class="panel_caption">' + panel_caption + '</div></div>';

    console.log(panel_image_l);
  });

}

var debugTimer = setInterval(setDebugger, 100);
function setDebugger() {
  $('.var1').html('screenSize = '+marqueeVars.screenSize);
  $('.var2').html('width = '+marqueeVars.width);
  $('.var3').html('mobileSize = '+marqueeVars.mobileSize);
  $('.var4').html('autoPlay = '+marqueeVars.autoPlay);
  $('.var5').html('currentPanel = '+marqueeVars.currentPanel);
  $('.var6').html('totalPanels = '+marqueeVars.totalPanels);
  $('.var7').html('timePassed = '+marqueeVars.timePassed);
  $('.var8').html('timeToChange = '+marqueeVars.timeToChange);
  $('.var9').html('duration = '+marqueeVars.inTransition);

}

})();