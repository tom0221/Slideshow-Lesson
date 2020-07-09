// オプションを指定してskkipprの実行
$(".theTarget").skippr({
	// スライドショーの変化
	transition : 'fade',
	// 変化にかかる時間
	speed : 1000,
	easing : 'easeOutQuart',
	// ナビゲーションの形
	navType : 'block',
	childrenElementType : 'div',
	arrows : true,
	autoPlay : false,
	autoPlayDuration : 5000,
	keybordOnAlways :true,
	hidePrevious :false
});