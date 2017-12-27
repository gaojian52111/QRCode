cc.Class({
	extends: cc.Component,

	properties: {

	},

	// use this for initialization
	onLoad: function() {
		var qrcode = new QRCode(-1, QRErrorCorrectLevel.H);
		// qrcode.addData('www.baidu.com');
		qrcode.addData('SB!FEIDONG哈哈');
		qrcode.make();

		var ctx = this.node.getComponent(cc.Graphics);
		// ctx.fillColor = cc.Color.BLACK;
		// compute tileW/tileH based on node width and height
		var tileW = this.node.width / qrcode.getModuleCount();
		var tileH = this.node.height / qrcode.getModuleCount();

		// draw in the Graphics
		for (var row = 0; row < qrcode.getModuleCount(); row++) {
			for (var col = 0; col < qrcode.getModuleCount(); col++) {
				if (qrcode.isDark(row, col)) {
					// ctx.fillColor = cc.Color.BLACK;
					var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
					var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
					ctx.rect(Math.round(col * tileW), Math.round(row * tileH), w, h);
					ctx.fill();
				} else {
					// ctx.fillColor = cc.Color.WHITE;
				}
				// var w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
				// var h = (Math.ceil((row + 1) * tileW) - Math.floor(row * tileW));
				// ctx.rect(Math.round(col * tileW), Math.round(row * tileH), w, h);
				// ctx.fill();
			}
		}

	},

	// called every frame, uncomment this function to activate update callback
	// update: function (dt) {

	// },
});