;(function ($, window, document) {
    //自定义变量、函数管理器
    var obj = function () {
    }
    obj.prototype.Funcs = {
        completeHeight: function (that, opt) {
            var siblings = opt.siblings;
            var heightC = 0;
            for (var i = 0; i < siblings.length; i++) {
                heightC += siblings[i].height();
            }
            that.height(opt.totalHeight - heightC);
        }
    }

    //根据屏幕高度，用选定元素补全屏幕
    $.fn.completeHeight = function (param) {
        var _default_ = {
            totalHeight: $(window).height(),
            siblings: this.siblings()
        }
        var opt = $.extend({}, _default_, param);
        new obj().Funcs.completeHeight(this, opt);
    }
})(jQuery, window, document);