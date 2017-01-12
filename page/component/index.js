var pageData = {
	data: {
		testBind: 'Hello Allan',
		imgUrls: [
	      'resources/banner1.png',
	      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
	      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
	    ],
	    indicatorDots: true,
	    autoplay: true,
	    interval: 5000,
	    duration: 1000,


	},
	onLoad: function () {
    	this.setData({
	      logs: (wx.getStorageSync('logs') || []).map(function (log) {
	        return util.formatTime(new Date(log))
	      })
	    })
	},
	canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onReady: function (e) {

    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createContext()

    context.setStrokeStyle("#00ff00")
    context.setLineWidth(5)
    context.rect(0, 0, 200, 200)
    context.stroke()
    context.setStrokeStyle("#ff0000")
    context.setLineWidth(2)
    context.moveTo(160, 100)
    context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    context.moveTo(140, 100)
    context.arc(100, 100, 40, 0, Math.PI, false)
    context.moveTo(85, 80)
    context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    context.moveTo(125, 80)
    context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    context.stroke()

    // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: context.getActions() // 获取绘图动作数组
    })
  }
},

type = [
    'view', 'content', 'form', 'interact', 'nav', 'media', 'map', 'canvas'
];

pageData.widgetsToggle = function (e) {
    var id = e.currentTarget.id, data = {};
    for (var i = 0, len = type.length; i < len; ++i) {
        data[type[i] + 'Show'] = false;
    }
    data[id + 'Show'] = !this.data[id + 'Show'];
    this.setData(data);
};

Page(pageData);