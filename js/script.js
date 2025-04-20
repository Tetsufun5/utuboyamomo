$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 5000,//次のスライドに切り替わる待ち時間
    speed:1500,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: false,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

$(window).on('load resize', function() {
    var windowWidth = window.innerWidth;
    var elements = $('.fixed');
    if (windowWidth >= 768) {
    Stickyfill.add(elements);
    }else{
    Stickyfill.remove(elements);
    } 
    });

//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
	//ヘッダーの高さを取得
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
			$('.openbtn').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
			$('.areaCmnheader').addClass('dnone');//#headerにdnoneというクラス名を付与
		}else{//それ以外は
			$('.openbtn').removeClass('fadeDown');//fadeDownというクラス名を除き
			$('.areaCmnheader').removeClass('dnone');//dnoneというクラス名を除く
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

//ボタンをクリックした際のアニメーションの設定
$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".areaCmnheader").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#g-navi li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".areaCmnheader").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});