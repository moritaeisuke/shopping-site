$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        });
});
// DOMを全て読み込んでから処理する
$(function()
{
// [.syncer-acdn]にクリックイベントを設定する
$( '.syncer-acdn' ).click( function(){
    $(this).toggleClass("active");
        if($(this).hasClass('active')) {
	// [data-target]の属性値を代入する
	var target = $( this ).data( 'target' ) ;

	// [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
	$( '#' + target ).slideToggle() ;
		// 終了
		return false ;
        }
	} ) ;
}) ;
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});