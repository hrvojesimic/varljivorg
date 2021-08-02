function e2fInit() {
  $(".popAnchor").each( function() { addPopover(this); } );
  $(".books .book").each( function() { addBookDetailsModal(this); } );
  hovergif();
  //$(window).scroll(checkBottom);
}

var closePopoverHtml = '<button type="button" id="close" class="close" onclick="closeAllPopovers();">&times;</button>'

//function checkBottom() {
//  if( $(window).scrollTop() + $(window).height() > $("article").height() - 200 ) {
//	$.get("/tick/bottom");
//	$(window).unbind("scroll");
//  }
//}

function popId( e ) {
  return $(e).attr("id").substring(4);
}
function closeAllPopovers() {
	$(".popAnchor").popover('hide');
}
function closeAllOtherPopovers() {
  $(".popAnchor").not(this).popover('hide');
}
function addPopover( e ) {
  $(e).popover( {html: true, content: function() { return closePopoverHtml + $("#"+popId(e)).html(); } }
  ).on('show.bs.popover', closeAllOtherPopovers);
}

function addBookDetailsModal( e ) {
  var detailsId = "#bookDetails-" + $(e).attr("id");
  $(detailsId).modal({ show: false, backdrop: true, keyboard: true });
  $(e).click(function() { $(detailsId).modal('show'); });
}

function hovergif() {
  $("img.hovergif").hover(
    function() {
      $(this).attr("static", $(this).attr("src"));
      $(this).attr("src", $(this).attr("src") + ".gif");
    },
    function() {
      $(this).attr("src", $(this).attr("static"));
    }
  );
}
