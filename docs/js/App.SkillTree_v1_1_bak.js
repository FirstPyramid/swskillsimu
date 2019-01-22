/*
 js-cookie v2.2.0 | MIT */
var $jscomp = $jscomp || {}; $jscomp.scope = {}; $jscomp.findInternal = function (a, d, f) { a instanceof String && (a = String(a)); for (var h = a.length, k = 0; k < h; k++) { var b = a[k]; if (d.call(f, b, k, a)) return { i: k, v: b } } return { i: -1, v: void 0 } }; $jscomp.ASSUME_ES5 = !1; $jscomp.ASSUME_NO_NATIVE_MAP = !1; $jscomp.ASSUME_NO_NATIVE_SET = !1; $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, d, f) { a != Array.prototype && a != Object.prototype && (a[d] = f.value) };
$jscomp.getGlobal = function (a) { return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a }; $jscomp.global = $jscomp.getGlobal(this); $jscomp.polyfill = function (a, d, f, h) { if (d) { f = $jscomp.global; a = a.split("."); for (h = 0; h < a.length - 1; h++) { var k = a[h]; k in f || (f[k] = {}); f = f[k] } a = a[a.length - 1]; h = f[a]; d = d(h); d != h && null != d && $jscomp.defineProperty(f, a, { configurable: !0, writable: !0, value: d }) } };
$jscomp.polyfill("Array.prototype.find", function (a) { return a ? a : function (a, f) { return $jscomp.findInternal(this, a, f).v } }, "es6", "es3"); $jscomp.SYMBOL_PREFIX = "jscomp_symbol_"; $jscomp.initSymbol = function () { $jscomp.initSymbol = function () { }; $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol) }; $jscomp.Symbol = function () { var a = 0; return function (d) { return $jscomp.SYMBOL_PREFIX + (d || "") + a++ } }();
$jscomp.initSymbolIterator = function () { $jscomp.initSymbol(); var a = $jscomp.global.Symbol.iterator; a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")); "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, { configurable: !0, writable: !0, value: function () { return $jscomp.arrayIterator(this) } }); $jscomp.initSymbolIterator = function () { } };
$jscomp.initSymbolAsyncIterator = function () { $jscomp.initSymbol(); var a = $jscomp.global.Symbol.asyncIterator; a || (a = $jscomp.global.Symbol.asyncIterator = $jscomp.global.Symbol("asyncIterator")); $jscomp.initSymbolAsyncIterator = function () { } }; $jscomp.arrayIterator = function (a) { var d = 0; return $jscomp.iteratorPrototype(function () { return d < a.length ? { done: !1, value: a[d++] } : { done: !0 } }) };
$jscomp.iteratorPrototype = function (a) { $jscomp.initSymbolIterator(); a = { next: a }; a[$jscomp.global.Symbol.iterator] = function () { return this }; return a }; $jscomp.iteratorFromArray = function (a, d) { $jscomp.initSymbolIterator(); a instanceof String && (a += ""); var f = 0, h = { next: function () { if (f < a.length) { var k = f++; return { value: d(k, a[k]), done: !1 } } h.next = function () { return { done: !0, value: void 0 } }; return h.next() } }; h[Symbol.iterator] = function () { return h }; return h };
$jscomp.polyfill("Array.prototype.keys", function (a) { return a ? a : function () { return $jscomp.iteratorFromArray(this, function (a) { return a }) } }, "es6", "es3");
!function (a) { var d = !1; if ("function" == typeof define && define.amd && (define(a), d = !0), "object" == typeof exports && (module.exports = a(), d = !0), !d) { var f = window.Cookies, h = window.Cookies = a(); h.noConflict = function () { return window.Cookies = f, h } } }(function () {
    function a() { for (var a = 0, d = {}; a < arguments.length; a++) { var k = arguments[a], b; for (b in k) d[b] = k[b] } return d } function d(f) {
        function h(d, b, c) {
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    if ("number" == typeof (c = a({ path: "/" }, h.defaults, c)).expires) {
                        var e =
                            new Date; e.setMilliseconds(e.getMilliseconds() + 864E5 * c.expires); c.expires = e
                    } c.expires = c.expires ? c.expires.toUTCString() : ""; try { var g = JSON.stringify(b); /^[\{\[]/.test(g) && (b = g) } catch (r) { } b = f.write ? f.write(b, d) : encodeURIComponent(b + "").replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent); d = (d = (d = encodeURIComponent(d + "")).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape); g = ""; for (var m in c) c[m] && (g += "; " + m, !0 !== c[m] && (g += "=" + c[m]));
                    return document.cookie = d + "=" + b + g
                } d || (g = {}); m = document.cookie ? document.cookie.split("; ") : []; for (var n = /(%[0-9A-Z]{2})+/g, q = 0; q < m.length; q++) { var l = m[q].split("="), k = l.slice(1).join("="); this.json || '"' !== k.charAt(0) || (k = k.slice(1, -1)); try { e = l[0].replace(n, decodeURIComponent); if (k = f.read ? f.read(k, e) : f(k, e) || k.replace(n, decodeURIComponent), this.json) try { k = JSON.parse(k) } catch (r) { } if (d === e) { g = k; break } d || (g[e] = k) } catch (r) { } } return g
            }
        } return h.set = h, h.get = function (a) { return h.call(h, a) }, h.getJSON = function () {
            return h.apply({ json: !0 },
                [].slice.call(arguments))
        }, h.defaults = {}, h.remove = function (d, b) { h(d, "", a(b, { expires: -1 })) }, h.withConverter = d, h
    } return d(function () { })
}); function StorageWrapper() { "undefined" !== typeof Storage && window.hasOwnProperty("localStorage") && window.localStorage instanceof Storage ? (this._localStorage = window.localStorage, this._storageFromCookies = null) : (this._localStorage = null, this._storageFromCookies = Cookies.noConflict()) } StorageWrapper.prototype.SetData = function (a, d) { return this._localStorage ? (this._localStorage.setItem(a, d), !0) : this._storageFromCookies ? (this._storageFromCookies.set(a, d, { expires: 365, path: "" }), !0) : !1 };
StorageWrapper.prototype.GetData = function (a) { return this._localStorage ? this._localStorage.getItem(a) : this._storageFromCookies ? this._storageFromCookies.get(a, { path: "" }) : defaultValue }; StorageWrapper.prototype.DeleteData = function (a) { return this._localStorage ? (this._localStorage.removeItem(a), !0) : this._storageFromCookies ? Cookies.remove(a, { path: "" }) : !1 }; StorageWrapper.prototype.DeleteAllDatas = function () { return this._localStorage ? (this._localStorage.clear(), !0) : !1 }; var SafeStorage = new StorageWrapper; function EventHandler() { this.callbacks = [] } EventHandler.prototype.Unregister = function (a) { "function" === typeof a && (a = this.callbacks.indexOf(a), -1 !== a && this.callbacks.splice(a, 1)) }; EventHandler.prototype.Register = function (a) { "function" === typeof a && -1 === this.callbacks.indexOf(a) && this.callbacks.push(a) }; EventHandler.prototype.Trigger = function (a) { 0 !== this.callbacks.length && this.callbacks.forEach(function (d, f, h) { d(a) }) }; var _transitiontype = null; function whichTransitionEvent() { if (_transitiontype) return _transitiontype; var a, d = document.createElement("div"), f = { transition: "animationend", WebkitTransition: "webkitAnimationEnd" }; for (a in f) void 0 !== d.style[a] && (_transitiontype = f[a]); return _transitiontype }
function SkillTreeToolTipFramework(a, d) {
    if (!a) throw "Tooltip target can't be null."; if (!d) throw "Tooltip selector can't be null."; this._selector = d; var f = this, h = $(window), k = $(document); this.mouseY = this.mouseX = this.basemouseY = this.basemouseX = 0; this.lastRendermouseY = this.lastRendermouseX = void 0; this._boundBottom = this._boundRight = this._boundLeft = this._boundTop = 0; this.isRendering = this.IsListening = !1; this.cancelID; this._target = a; this.refreshOnClick = this._useAnimation = !0; a.addClass("animated"); this.OnMouseEnter =
        new EventHandler; this.OnMouseLeave = new EventHandler; this.OnTooltipHidden = new EventHandler; var b = null; this.listenFunc = function (b) { f.mouseX = b.clientX; f.mouseY = b.clientY }; this.mouseClick = function (a) { f.refreshOnClick && (b = null) }; this.mouseOn = function (a) {
            if (a.target !== b || !0 !== f.isRendering) {
            f.isRendering = !0; b = a.target; var c = a.clientX, g = a.clientY; f.mouseX = c; f.mouseY = g; f.basemouseX = c; f.basemouseY = g; f.OnMouseEnter.Trigger(a); f._target.css({ top: g + "px", left: c + "px" }); !0 !== a.cancel && (f.UpdateTooltipSize(), f.onRender(),
                f._useAnimation ? (f._hidingID && clearTimeout(f._hidingID), f._hidingID = null, f._target.removeClass("fadeout-custom"), f._target.addClass("fadein-custom").show()) : f._target.stop(!1, !0).show())
            }
        }; this.mouseOff = function (b) {
        f.isRendering = !1; this.cancelID && window.cancelAnimationFrame(f.cancelID); f.cancelID = null; f._useAnimation ? (f._target.removeClass("fadein-custom"), f._target.addClass("fadeout-custom")) : (f._target.stop(!1, !0).hide(), something._tooltipHeight = 0, something._tooltipWidth = 0, something.OnTooltipHidden.Trigger(something._target));
            f.OnMouseLeave.Trigger(b)
        }; this.onAnimationCompleted = function (b) { !1 === f.isRendering && (f._target.hide(), f._tooltipHeight = 0, f._tooltipWidth = 0, f.lastRendermouseX = void 0, f.lastRendermouseY = void 0, f.OnTooltipHidden.Trigger(f._target)) }; this.onRender = function () {
        f.cancelID = !0 === f.isRendering ? window.requestAnimationFrame(f.onRender) : null; if (f.lastRendermouseX !== f.mouseX || f.lastRendermouseY !== f.mouseY) {
        f.lastRendermouseX = f.mouseX; f.lastRendermouseY = f.mouseY; var b = f.lastRendermouseY + 5, a = b + f._tooltipHeight,
            g = h.height(), m = k.height(), d = Math.min(g, m); g = f.lastRendermouseX + 5; m = g + f._tooltipWidth; var q = h.width(), l = k.width(); q = Math.min(q, l); d -= f._boundBottom; b = a > d ? d - f._tooltipHeight - f.basemouseY : b - f.basemouseY; d = q - f._boundRight; f._target.css({ transform: "translate(" + (m > d ? d - f._tooltipWidth - f.basemouseX : g - f.basemouseX) + "px," + b + "px)" })
        }
        }
}
SkillTreeToolTipFramework.prototype.UpdateTooltipSize = function () { this._tooltipHeight = this._target.outerHeight(!0); this._tooltipWidth = this._target.outerWidth(!0); this.lastRendermouseY = this.lastRendermouseX = void 0 };
SkillTreeToolTipFramework.prototype.SetBound = function (a, d, f, h) { "number" === typeof a ? (this._boundTop = a, this._boundLeft = d, this._boundRight = f, this._boundBottom = h) : (a.hasOwnProperty("top") ? this._boundTop = a.top : this._boundTop = 0, a.hasOwnProperty("left") ? this._boundLeft = a.left : this._boundLeft = 0, a.hasOwnProperty("right") ? this._boundRight = a.right : this._boundRight = 0, a.hasOwnProperty("bottom") ? this._boundBottom = a.bottom : this._boundBottom = 0) };
SkillTreeToolTipFramework.prototype.StartListen = function () { !0 !== this.IsListening && (this.IsListening = !0, $(document.body).on("mouseover", this._selector, this.mouseOn), $(document.body).on("mousemove", this._selector, this.listenFunc), $(document.body).on("mouseout", this._selector, this.mouseOff), $(document.body).on("click", this._selector, this.mouseClick), this._target[0].addEventListener(whichTransitionEvent(), this.onAnimationCompleted)) };
SkillTreeToolTipFramework.prototype.StopListen = function () {
!1 !== this.IsListening && (this.IsListening = !1, $(document.body).off("mouseover", this._selector, this.mouseOn), $(document.body).off("mousemove", this._selector, this.listenFunc), $(document.body).off("mouseout", this._selector, this.mouseOff), $(document.body).off("click", this._selector, this.mouseClick), this._target[0].removeEventListener(whichTransitionEvent(), this.onAnimationCompleted), this.isRendering = !1, this.cancelID && window.cancelAnimationFrame(this.cancelID),
    this.cancelID = null)
};/*
 imagesLoaded PACKAGED v4.1.4
 JavaScript is all like "You images are done yet or what?"
 MIT License
*/
!function (a, d) { "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", d) : "object" == typeof module && module.exports ? module.exports = d() : a.EvEmitter = d() }("undefined" != typeof window ? window : this, function () {
    function a() { } var d = a.prototype; return d.on = function (a, d) { if (a && d) { var f = this._events = this._events || {}; a = f[a] = f[a] || []; return -1 == a.indexOf(d) && a.push(d), this } }, d.once = function (a, d) { if (a && d) { this.on(a, d); var f = this._onceEvents = this._onceEvents || {}; return (f[a] = f[a] || {})[d] = !0, this } }, d.off =
        function (a, d) { if ((a = this._events && this._events[a]) && a.length) return d = a.indexOf(d), -1 != d && a.splice(d, 1), this }, d.emitEvent = function (a, d) { var f = this._events && this._events[a]; if (f && f.length) { f = f.slice(0); d = d || []; for (var b = this._onceEvents && this._onceEvents[a], c = 0; c < f.length; c++) { var e = f[c]; b && b[e] && (this.off(a, e), delete b[e]); e.apply(this, d) } return this } }, d.allOff = function () { delete this._events; delete this._onceEvents }, a
});
(function (a, d) { "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (f) { return d(a, f) }) : "object" == typeof module && module.exports ? module.exports = d(a, require("ev-emitter")) : a.imagesLoaded = d(a, a.EvEmitter) })("undefined" != typeof window ? window : this, function (a, d) {
    function f(b, a) { for (var c in a) b[c] = a[c]; return b } function h(b, a, m) {
        if (!(this instanceof h)) return new h(b, a, m); var d = b; "string" == typeof b && (d = document.querySelectorAll(b)); d ? (b = d, b = Array.isArray(b) ? b : "object" == typeof b &&
            "number" == typeof b.length ? g.call(b) : [b], a = (this.elements = b, this.options = f({}, this.options), "function" == typeof a ? m = a : f(this.options, a), m && this.on("always", m), this.getImages(), c && (this.jqDeferred = new c.Deferred), void setTimeout(this.check.bind(this)))) : a = void e.error("Bad element for imagesLoaded " + (d || b)); return a
    } function k(b) { this.img = b } function b(b, a) { this.url = b; this.element = a; this.img = new Image } var c = a.jQuery, e = a.console, g = Array.prototype.slice; h.prototype = Object.create(d.prototype); h.prototype.options =
        {}; h.prototype.getImages = function () { this.images = []; this.elements.forEach(this.addElementImages, this) }; h.prototype.addElementImages = function (b) { "IMG" == b.nodeName && this.addImage(b); !0 === this.options.background && this.addElementBackgroundImages(b); var a = b.nodeType; if (a && m[a]) { var c = b.querySelectorAll("img"); for (a = 0; a < c.length; a++)this.addImage(c[a]); if ("string" == typeof this.options.background) for (b = b.querySelectorAll(this.options.background), a = 0; a < b.length; a++)this.addElementBackgroundImages(b[a]) } };
    var m = { 1: !0, 9: !0, 11: !0 }; return h.prototype.addElementBackgroundImages = function (b) { var a = getComputedStyle(b); if (a) for (var c = /url\((['"])?(.*?)\1\)/gi, g = c.exec(a.backgroundImage); null !== g;)(g = g && g[2]) && this.addBackground(g, b), g = c.exec(a.backgroundImage) }, h.prototype.addImage = function (b) { b = new k(b); this.images.push(b) }, h.prototype.addBackground = function (a, c) { a = new b(a, c); this.images.push(a) }, h.prototype.check = function () {
        function b(b, c, g) { setTimeout(function () { a.progress(b, c, g) }) } var a = this; return this.progressedCount =
            0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (a) { a.once("progress", b); a.check() }) : void this.complete()
    }, h.prototype.progress = function (b, a, c) { this.progressedCount++; this.hasAnyBroken = this.hasAnyBroken || !b.isLoaded; this.emitEvent("progress", [this, b, a]); this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, b); this.progressedCount == this.images.length && this.complete(); this.options.debug && e && e.log("progress: " + c, b, a) }, h.prototype.complete = function () {
        var b = this.hasAnyBroken ?
            "fail" : "done"; if (this.isComplete = !0, this.emitEvent(b, [this]), this.emitEvent("always", [this]), this.jqDeferred) this.jqDeferred[this.hasAnyBroken ? "reject" : "resolve"](this)
    }, k.prototype = Object.create(d.prototype), k.prototype.check = function () {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error",
            this), void (this.proxyImage.src = this.img.src))
    }, k.prototype.getIsImageComplete = function () { return this.img.complete && this.img.naturalWidth }, k.prototype.confirm = function (b, a) { this.isLoaded = b; this.emitEvent("progress", [this, this.img, a]) }, k.prototype.handleEvent = function (b) { var a = "on" + b.type; this[a] && this[a](b) }, k.prototype.onload = function () { this.confirm(!0, "onload"); this.unbindEvents() }, k.prototype.onerror = function () { this.confirm(!1, "onerror"); this.unbindEvents() }, k.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load",
            this); this.proxyImage.removeEventListener("error", this); this.img.removeEventListener("load", this); this.img.removeEventListener("error", this)
    }, b.prototype = Object.create(k.prototype), b.prototype.check = function () { this.img.addEventListener("load", this); this.img.addEventListener("error", this); this.img.src = this.url; this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, b.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this); this.img.removeEventListener("error",
            this)
    }, b.prototype.confirm = function (b, a) { this.isLoaded = b; this.emitEvent("progress", [this, this.element, a]) }, h.makeJQueryPlugin = function (b) { (b = b || a.jQuery) && (c = b, c.fn.imagesLoaded = function (b, a) { return (new h(this, b, a)).jqDeferred.promise(c(this)) }) }, h.makeJQueryPlugin(), h
}); (function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery) })(function (a) {
    function d(d) {
        var b = !1; return a('[data-notify="container"]').each(function (c, e) {
            c = a(e); e = c.find('[data-notify="title"]').html().trim(); var g = c.find('[data-notify="message"]').html().trim(); e = e === a("<div>" + d.settings.content.title + "</div>").html().trim(); g = g === a("<div>" + d.settings.content.message + "</div>").html().trim(); c = c.hasClass("alert-" + d.settings.type);
            return e && g && c && (b = !0), !b
        }), b
    } function f(f, b, c) {
        c = a.extend(!0, {}, { content: { message: "object" == typeof b ? b.message : b, title: b.title ? b.title : "", icon: b.icon ? b.icon : "", url: b.url ? b.url : "#", target: b.target ? b.target : "-" } }, c); this.settings = a.extend(!0, {}, h, c); this._defaults = h; "-" === this.settings.content.target && (this.settings.content.target = this.settings.url_target); this.animations = { start: "webkitAnimationStart oanimationstart MSAnimationStart animationstart", end: "webkitAnimationEnd oanimationend MSAnimationEnd animationend" };
        "number" == typeof this.settings.offset && (this.settings.offset = { x: this.settings.offset, y: this.settings.offset }); !this.settings.allow_duplicates && (this.settings.allow_duplicates || d(this)) || this.init()
    } var h = {
        element: "body", position: null, type: "info", allow_dismiss: !0, allow_duplicates: !0, newest_on_top: !1, showProgressbar: !1, placement: { from: "top", align: "right" }, offset: 20, spacing: 10, z_index: 1031, delay: 5E3, timer: 1E3, url_target: "_blank", mouse_over: null, animate: { enter: "animated fadeInDown", exit: "animated fadeOutUp" },
        onShow: null, onShown: null, onClose: null, onClosed: null, onClick: null, icon_type: "class", template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };
    String.format = function () { var a = arguments; return arguments[0].replace(/(\{\{\d\}\}|\{\d\})/g, function (b) { if ("{{" === b.substring(0, 2)) return b; b = parseInt(b.match(/\d/)[0]); return a[b + 1] }) }; a.extend(f.prototype, {
        init: function () {
            var a = this; this.buildNotify(); this.settings.content.icon && this.setIcon(); "#" != this.settings.content.url && this.styleURL(); this.styleDismiss(); this.placement(); this.bind(); this.notify = {
                $ele: this.$ele, update: function (b, c) {
                    var e = {}, g; for (g in "string" == typeof b ? e[b] = c : e = b, e) switch (g) {
                        case "type": this.$ele.removeClass("alert-" +
                            a.settings.type); this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-" + a.settings.type); a.settings.type = e[g]; this.$ele.addClass("alert-" + e[g]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-" + e[g]); break; case "icon": c = this.$ele.find('[data-notify="icon"]'); "class" === a.settings.icon_type.toLowerCase() ? c.removeClass(a.settings.content.icon).addClass(e[g]) : (!c.is("img") && c.find("img"), c.attr("src", e[g])); a.settings.content.icon = e[b]; break;
                        case "progress": this.$ele.data("notify-delay", a.settings.delay - e[g] / 100 * a.settings.delay); this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow", e[g]).css("width", e[g] + "%"); break; case "url": this.$ele.find('[data-notify="url"]').attr("href", e[g]); break; case "target": this.$ele.find('[data-notify="url"]').attr("target", e[g]); break; default: this.$ele.find('[data-notify="' + g + '"]').html(e[g])
                    }b = this.$ele.outerHeight() + parseInt(a.settings.spacing) + parseInt(a.settings.offset.y); a.reposition(b)
                },
                close: function () { a.close() }
            }
        }, buildNotify: function () { var d = this.settings.content; this.$ele = a(String.format(this.settings.template, this.settings.type, d.title, d.message, d.url, d.target)); this.$ele.attr("data-notify-position", this.settings.placement.from + "-" + this.settings.placement.align); this.settings.allow_dismiss || this.$ele.find('[data-notify="dismiss"]').css("display", "none"); (!(0 >= this.settings.delay) || this.settings.showProgressbar) && this.settings.showProgressbar || this.$ele.find('[data-notify="progressbar"]').remove() },
        setIcon: function () { "class" === this.settings.icon_type.toLowerCase() ? this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').is("img") ? this.$ele.find('[data-notify="icon"]').attr("src", this.settings.content.icon) : this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />') }, styleDismiss: function () {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: "absolute", right: "10px", top: "5px", zIndex: this.settings.z_index +
                    2
            })
        }, styleURL: function () { this.$ele.find('[data-notify="url"]').css({ backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)", height: "100%", left: 0, position: "absolute", top: 0, width: "100%", zIndex: this.settings.z_index + 1 }) }, placement: function () {
            var d = this, b = this.settings.offset.y, c = {
                display: "inline-block", margin: "0px auto", position: this.settings.position ? this.settings.position : "body" === this.settings.element ? "fixed" : "absolute", transition: "all .5s ease-in-out",
                zIndex: this.settings.z_index
            }, e = !1, g = this.settings; switch (a('[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () { b = Math.max(b, parseInt(a(this).css(g.placement.from)) + parseInt(a(this).outerHeight()) + parseInt(g.spacing)) }), !0 === this.settings.newest_on_top && (b = this.settings.offset.y), c[this.settings.placement.from] = b + "px", this.settings.placement.align) {
                case "left": case "right": c[this.settings.placement.align] = this.settings.offset.x +
                    "px"; break; case "center": c.left = 0, c.right = 0
            }this.$ele.css(c).addClass(this.settings.animate.enter); a.each(["webkit-", "moz-", "o-", "ms-", ""], function (b, a) { d.$ele[0].style[a + "AnimationIterationCount"] = 1 }); a(this.settings.element).append(this.$ele); !0 === this.settings.newest_on_top && (b = parseInt(b) + parseInt(this.settings.spacing) + this.$ele.outerHeight(), this.reposition(b)); a.isFunction(d.settings.onShow) && d.settings.onShow.call(this.$ele); this.$ele.one(this.animations.start, function () { e = !0 }).one(this.animations.end,
                function () { d.$ele.removeClass(d.settings.animate.enter); a.isFunction(d.settings.onShown) && d.settings.onShown.call(this) }); setTimeout(function () { !e && a.isFunction(d.settings.onShown) && d.settings.onShown.call(this) }, 600)
        }, bind: function () {
            var d = this; if (this.$ele.find('[data-notify="dismiss"]').on("click", function () { d.close() }), a.isFunction(d.settings.onClick) && this.$ele.on("click", function (b) { b.target != d.$ele.find('[data-notify="dismiss"]')[0] && d.settings.onClick.call(this, b) }), this.$ele.mouseover(function () {
                a(this).data("data-hover",
                    "true")
            }).mouseout(function () { a(this).data("data-hover", "false") }), this.$ele.data("data-hover", "false"), 0 < this.settings.delay) {
                d.$ele.data("notify-delay", d.settings.delay); var b = setInterval(function () {
                    var a = parseInt(d.$ele.data("notify-delay")) - d.settings.timer; if ("false" === d.$ele.data("data-hover") && "pause" === d.settings.mouse_over || "pause" != d.settings.mouse_over) {
                        var e = (d.settings.delay - a) / d.settings.delay * 100; d.$ele.data("notify-delay", a); d.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",
                            e).css("width", e + "%")
                    } a <= -d.settings.timer && (clearInterval(b), d.close())
                }, d.settings.timer)
            }
        }, close: function () {
            var d = this, b = parseInt(this.$ele.css(this.settings.placement.from)), c = !1; this.$ele.attr("data-closing", "true").addClass(this.settings.animate.exit); d.reposition(b); a.isFunction(d.settings.onClose) && d.settings.onClose.call(this.$ele); this.$ele.one(this.animations.start, function () { c = !0 }).one(this.animations.end, function () { a(this).remove(); a.isFunction(d.settings.onClosed) && d.settings.onClosed.call(this) });
            setTimeout(function () { c || (d.$ele.remove(), a.isFunction(d.settings.onClosed) && d.settings.onClosed.call(this)) }, 600)
        }, reposition: function (d) { var b = this, c = '[data-notify-position="' + this.settings.placement.from + "-" + this.settings.placement.align + '"]:not([data-closing="true"])', e = this.$ele.nextAll(c); !0 === this.settings.newest_on_top && (e = this.$ele.prevAll(c)); e.each(function () { a(this).css(b.settings.placement.from, d); d = parseInt(d) + parseInt(b.settings.spacing) + a(this).outerHeight() }) }
    }); a.notify = function (a,
        b) { return (new f(this, a, b)).notify }; a.notifyDefaults = function (d) { return h = a.extend(!0, {}, h, d), h }; a.notifyClose = function (d) { "undefined" == typeof d || "all" === d ? a("[data-notify]").find('[data-notify="dismiss"]').trigger("click") : "success" === d || "info" === d || "warning" === d || "danger" === d ? a(".alert-" + d + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : d ? a(d + "[data-notify]").find('[data-notify="dismiss"]').trigger("click") : a('[data-notify-position="' + d + '"]').find('[data-notify="dismiss"]').trigger("click") };
    a.notifyCloseExcept = function (d) { "success" === d || "info" === d || "warning" === d || "danger" === d ? a("[data-notify]").not(".alert-" + d).find('[data-notify="dismiss"]').trigger("click") : a("[data-notify]").not(d).find('[data-notify="dismiss"]').trigger("click") }
});/*
 jQuery UI - v1.12.1 - 2018-05-06
 http://jqueryui.com
 Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/resizable.js, widgets/selectable.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/dialog.js, widgets/mouse.js, widgets/tooltip.js, effect.js, effects/effect-fade.js
 Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) })(function (a) {
a.ui = a.ui || {}; a.ui.version = "1.12.1"; var d = 0, f = Array.prototype.slice; a.cleanData = function (b) { return function (c) { var e, g, d; for (d = 0; null != (g = c[d]); d++)try { (e = a._data(g, "events")) && e.remove && a(g).triggerHandler("remove") } catch (n) { } b(c) } }(a.cleanData); a.widget = function (b, c, e) {
    var g, d, f, q = {}, l = b.split(".")[0]; b = b.split(".")[1]; var h = l + "-" + b; return e || (e = c, c = a.Widget), a.isArray(e) && (e = a.extend.apply(null, [{}].concat(e))),
        a.expr[":"][h.toLowerCase()] = function (b) { return !!a.data(b, h) }, a[l] = a[l] || {}, g = a[l][b], d = a[l][b] = function (a, b) { return this._createWidget ? (arguments.length && this._createWidget(a, b), void 0) : new d(a, b) }, a.extend(d, g, { version: e.version, _proto: a.extend({}, e), _childConstructors: [] }), f = new c, f.options = a.widget.extend({}, f.options), a.each(e, function (b, g) {
            return a.isFunction(g) ? (q[b] = function () {
                function a() { return c.prototype[b].apply(this, arguments) } function e(a) { return c.prototype[b].apply(this, a) } return function () {
                    var b,
                    c = this._super, d = this._superApply; return this._super = a, this._superApply = e, b = g.apply(this, arguments), this._super = c, this._superApply = d, b
                }
            }(), void 0) : (q[b] = g, void 0)
        }), d.prototype = a.widget.extend(f, { widgetEventPrefix: g ? f.widgetEventPrefix || b : b }, q, { constructor: d, namespace: l, widgetName: b, widgetFullName: h }), g ? (a.each(g._childConstructors, function (b, c) { b = c.prototype; a.widget(b.namespace + "." + b.widgetName, d, c._proto) }), delete g._childConstructors) : c._childConstructors.push(d), a.widget.bridge(b, d), d
}; a.widget.extend =
    function (b) { for (var c, e, g = f.call(arguments, 1), d = 0, n = g.length; n > d; d++)for (c in g[d]) e = g[d][c], g[d].hasOwnProperty(c) && void 0 !== e && (b[c] = a.isPlainObject(e) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], e) : a.widget.extend({}, e) : e); return b }; a.widget.bridge = function (b, c) {
        var e = c.prototype.widgetFullName || b; a.fn[b] = function (g) {
            var d = "string" == typeof g, n = f.call(arguments, 1), q = this; return d ? this.length || "instance" !== g ? this.each(function () {
                var c, d = a.data(this, e); return "instance" === g ? (q = d, !1) : d ? a.isFunction(d[g]) &&
                    "_" !== g.charAt(0) ? (c = d[g].apply(d, n), c !== d && void 0 !== c ? (q = c && c.jquery ? q.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + g + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + g + "'")
            }) : q = void 0 : (n.length && (g = a.widget.extend.apply(null, [g].concat(n))), this.each(function () { var b = a.data(this, e); b ? (b.option(g || {}), b._init && b._init()) : a.data(this, e, new c(g, this)) })), q
        }
    }; a.Widget = function () { }; a.Widget._childConstructors = [];
    a.Widget.prototype = {
        widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function (b, c) {
            c = a(c || this.defaultElement || this)[0]; this.element = a(c); this.uuid = d++; this.eventNamespace = "." + this.widgetName + this.uuid; this.bindings = a(); this.hoverable = a(); this.focusable = a(); this.classesElementLookup = {}; c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, { remove: function (b) { b.target === c && this.destroy() } }), this.document = a(c.style ?
                c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)); this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b); this._create(); this.options.disabled && this._setOptionDisabled(this.options.disabled); this._trigger("create", null, this._getCreateEventData()); this._init()
        }, _getCreateOptions: function () { return {} }, _getCreateEventData: a.noop, _create: a.noop, _init: a.noop, destroy: function () {
            var b = this; this._destroy(); a.each(this.classesElementLookup,
                function (a, e) { b._removeClass(e, a) }); this.element.off(this.eventNamespace).removeData(this.widgetFullName); this.widget().off(this.eventNamespace).removeAttr("aria-disabled"); this.bindings.off(this.eventNamespace)
        }, _destroy: a.noop, widget: function () { return this.element }, option: function (b, c) {
            var e, g, d = b; if (0 === arguments.length) return a.widget.extend({}, this.options); if ("string" == typeof b) if (d = {}, e = b.split("."), b = e.shift(), e.length) {
                var f = d[b] = a.widget.extend({}, this.options[b]); for (g = 0; e.length - 1 > g; g++)f[e[g]] =
                    f[e[g]] || {}, f = f[e[g]]; if (b = e.pop(), 1 === arguments.length) return void 0 === f[b] ? null : f[b]; f[b] = c
            } else { if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b]; d[b] = c } return this._setOptions(d), this
        }, _setOptions: function (b) { for (var a in b) this._setOption(a, b[a]); return this }, _setOption: function (b, a) { return "classes" === b && this._setOptionClasses(a), this.options[b] = a, "disabled" === b && this._setOptionDisabled(a), this }, _setOptionClasses: function (b) {
            var c, e; for (c in b) {
                var g = this.classesElementLookup[c];
                b[c] !== this.options.classes[c] && g && g.length && (e = a(g.get()), this._removeClass(g, c), e.addClass(this._classes({ element: e, keys: c, classes: b, add: !0 })))
            }
        }, _setOptionDisabled: function (b) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!b); b && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) }, enable: function () { return this._setOptions({ disabled: !1 }) }, disable: function () { return this._setOptions({ disabled: !0 }) }, _classes: function (b) {
            function c(c,
                d) { var m; for (m = 0; c.length > m; m++) { var f = g.classesElementLookup[c[m]] || a(); f = b.add ? a(a.unique(f.get().concat(b.element.get()))) : a(f.not(b.element).get()); g.classesElementLookup[c[m]] = f; e.push(c[m]); d && b.classes[c[m]] && e.push(b.classes[c[m]]) } } var e = [], g = this; return b = a.extend({ element: this.element, classes: this.options.classes || {} }, b), this._on(b.element, { remove: "_untrackClassesElement" }), b.keys && c(b.keys.match(/\S+/g) || [], !0), b.extra && c(b.extra.match(/\S+/g) || []), e.join(" ")
        }, _untrackClassesElement: function (b) {
            var c =
                this; a.each(c.classesElementLookup, function (e, g) { -1 !== a.inArray(b.target, g) && (c.classesElementLookup[e] = a(g.not(b.target).get())) })
        }, _removeClass: function (b, a, e) { return this._toggleClass(b, a, e, !1) }, _addClass: function (b, a, e) { return this._toggleClass(b, a, e, !0) }, _toggleClass: function (b, a, e, g) { g = "boolean" == typeof g ? g : e; var c = "string" == typeof b || null === b; b = { extra: c ? a : e, keys: c ? b : a, element: c ? this.element : b, add: g }; return b.element.toggleClass(this._classes(b), g), this }, _on: function (b, c, e) {
            var g, d = this; "boolean" !=
                typeof b && (e = c, c = b, b = !1); e ? (c = g = a(c), this.bindings = this.bindings.add(c)) : (e = c, c = this.element, g = this.widget()); a.each(e, function (e, m) { function f() { return b || !0 !== d.options.disabled && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof m ? d[m] : m).apply(d, arguments) : void 0 } "string" != typeof m && (f.guid = m.guid = m.guid || f.guid || a.guid++); var n = e.match(/^([\w:-]*)\s*(.*)$/); e = n[1] + d.eventNamespace; (n = n[2]) ? g.on(e, n, f) : c.on(e, f) })
        }, _off: function (b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            b.off(c).off(c); this.bindings = a(this.bindings.not(b).get()); this.focusable = a(this.focusable.not(b).get()); this.hoverable = a(this.hoverable.not(b).get())
        }, _delay: function (a, c) { var b = this; return setTimeout(function () { return ("string" == typeof a ? b[a] : a).apply(b, arguments) }, c || 0) }, _hoverable: function (b) { this.hoverable = this.hoverable.add(b); this._on(b, { mouseenter: function (b) { this._addClass(a(b.currentTarget), null, "ui-state-hover") }, mouseleave: function (b) { this._removeClass(a(b.currentTarget), null, "ui-state-hover") } }) },
        _focusable: function (b) { this.focusable = this.focusable.add(b); this._on(b, { focusin: function (b) { this._addClass(a(b.currentTarget), null, "ui-state-focus") }, focusout: function (b) { this._removeClass(a(b.currentTarget), null, "ui-state-focus") } }) }, _trigger: function (b, c, e) {
            var g, d = this.options[b]; if (e = e || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], b = c.originalEvent) for (g in b) g in c || (c[g] = b[g]); return this.element.trigger(c, e), !(a.isFunction(d) &&
                !1 === d.apply(this.element[0], [c].concat(e)) || c.isDefaultPrevented())
        }
    }; a.each({ show: "fadeIn", hide: "fadeOut" }, function (b, c) { a.Widget.prototype["_" + b] = function (e, g, d) { "string" == typeof g && (g = { effect: g }); var m = g ? !0 === g || "number" == typeof g ? c : g.effect || c : b; g = g || {}; "number" == typeof g && (g = { duration: g }); var f = !a.isEmptyObject(g); g.complete = d; g.delay && e.delay(g.delay); f && a.effects && a.effects.effect[m] ? e[b](g) : m !== b && e[m] ? e[m](g.duration, g.easing, d) : e.queue(function (c) { a(this)[b](); d && d.call(e[0]); c() }) } });
    a.widget; (function () {
        function b(b, a, c) { return [parseFloat(b[0]) * (k.test(b[0]) ? a / 100 : 1), parseFloat(b[1]) * (k.test(b[1]) ? c / 100 : 1)] } function c(b) { var c = b[0]; return 9 === c.nodeType ? { width: b.width(), height: b.height(), offset: { top: 0, left: 0 } } : a.isWindow(c) ? { width: b.width(), height: b.height(), offset: { top: b.scrollTop(), left: b.scrollLeft() } } : c.preventDefault ? { width: 0, height: 0, offset: { top: c.pageY, left: c.pageX } } : { width: b.outerWidth(), height: b.outerHeight(), offset: b.offset() } } var e, g = Math.max, d = Math.abs, f = /left|center|right/,
            h = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, p = /^\w+/, k = /%$/, v = a.fn.position; a.position = {
                scrollbarWidth: function () { if (void 0 !== e) return e; var b, c, g = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), d = g.children()[0]; return a("body").append(g), b = d.offsetWidth, g.css("overflow", "scroll"), c = d.offsetWidth, b === c && (c = g[0].clientWidth), g.remove(), e = b - c }, getScrollInfo: function (b) {
                    var c = b.isWindow || b.isDocument ? "" :
                        b.element.css("overflow-x"), g = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"); c = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth; return { width: "scroll" === g || "auto" === g && b.height < b.element[0].scrollHeight ? a.position.scrollbarWidth() : 0, height: c ? a.position.scrollbarWidth() : 0 }
                }, getWithinInfo: function (b) {
                    var c = a(b || window), g = a.isWindow(c[0]), e = !!c[0] && 9 === c[0].nodeType; return {
                        element: c, isWindow: g, isDocument: e, offset: g || e ? { left: 0, top: 0 } : a(b).offset(), scrollLeft: c.scrollLeft(), scrollTop: c.scrollTop(),
                        width: c.outerWidth(), height: c.outerHeight()
                    }
                }
            }; a.fn.position = function (e) {
                if (!e || !e.of) return v.apply(this, arguments); e = a.extend({}, e); var m, n, B, q, u, A, k = a(e.of), r = a.position.getWithinInfo(e.within), w = a.position.getScrollInfo(r), C = (e.collision || "flip").split(" "), D = {}; return A = c(k), k[0].preventDefault && (e.at = "left top"), n = A.width, B = A.height, q = A.offset, u = a.extend({}, q), a.each(["my", "at"], function () {
                    var b = (e[this] || "").split(" "); 1 === b.length && (b = f.test(b[0]) ? b.concat(["center"]) : h.test(b[0]) ? ["center"].concat(b) :
                        ["center", "center"]); b[0] = f.test(b[0]) ? b[0] : "center"; b[1] = h.test(b[1]) ? b[1] : "center"; var a = l.exec(b[0]); var c = l.exec(b[1]); D[this] = [a ? a[0] : 0, c ? c[0] : 0]; e[this] = [p.exec(b[0])[0], p.exec(b[1])[0]]
                }), 1 === C.length && (C[1] = C[0]), "right" === e.at[0] ? u.left += n : "center" === e.at[0] && (u.left += n / 2), "bottom" === e.at[1] ? u.top += B : "center" === e.at[1] && (u.top += B / 2), m = b(D.at, n, B), u.left += m[0], u.top += m[1], this.each(function () {
                    var c, f = a(this), h = f.outerWidth(), l = f.outerHeight(), A = parseInt(a.css(this, "marginLeft"), 10) || 0, p = parseInt(a.css(this,
                        "marginTop"), 10) || 0, y = h + A + (parseInt(a.css(this, "marginRight"), 10) || 0) + w.width, t = l + p + (parseInt(a.css(this, "marginBottom"), 10) || 0) + w.height, x = a.extend({}, u), E = b(D.my, f.outerWidth(), f.outerHeight()); "right" === e.my[0] ? x.left -= h : "center" === e.my[0] && (x.left -= h / 2); "bottom" === e.my[1] ? x.top -= l : "center" === e.my[1] && (x.top -= l / 2); x.left += E[0]; x.top += E[1]; var z = { marginLeft: A, marginTop: p }; a.each(["left", "top"], function (b, c) {
                            a.ui.position[C[b]] && a.ui.position[C[b]][c](x, {
                                targetWidth: n, targetHeight: B, elemWidth: h,
                                elemHeight: l, collisionPosition: z, collisionWidth: y, collisionHeight: t, offset: [m[0] + E[0], m[1] + E[1]], my: e.my, at: e.at, within: r, elem: f
                            })
                        }); e.using && (c = function (b) {
                            var a = q.left - x.left, c = a + n - h, m = q.top - x.top, A = m + B - l, p = { target: { element: k, left: q.left, top: q.top, width: n, height: B }, element: { element: f, left: x.left, top: x.top, width: h, height: l }, horizontal: 0 > c ? "left" : 0 < a ? "right" : "center", vertical: 0 > A ? "top" : 0 < m ? "bottom" : "middle" }; h > n && n > d(a + c) && (p.horizontal = "center"); l > B && B > d(m + A) && (p.vertical = "middle"); p.important = g(d(a),
                                d(c)) > g(d(m), d(A)) ? "horizontal" : "vertical"; e.using.call(this, b, p)
                        }); f.offset(a.extend(x, { using: c }))
                })
            }; a.ui.position = {
                fit: {
                    left: function (b, a) { var c, e = a.within, d = e.isWindow ? e.scrollLeft : e.offset.left; e = e.width; var m = b.left - a.collisionPosition.marginLeft, f = d - m, n = m + a.collisionWidth - e - d; a.collisionWidth > e ? 0 < f && 0 >= n ? (c = b.left + f + a.collisionWidth - e - d, b.left += f - c) : b.left = 0 < n && 0 >= f ? d : f > n ? d + e - a.collisionWidth : d : 0 < f ? b.left += f : 0 < n ? b.left -= n : b.left = g(b.left - m, b.left) }, top: function (b, a) {
                        var c, e = a.within; e = e.isWindow ?
                            e.scrollTop : e.offset.top; var d = a.within.height, m = b.top - a.collisionPosition.marginTop, f = e - m, n = m + a.collisionHeight - d - e; a.collisionHeight > d ? 0 < f && 0 >= n ? (c = b.top + f + a.collisionHeight - d - e, b.top += f - c) : b.top = 0 < n && 0 >= f ? e : f > n ? e + d - a.collisionHeight : e : 0 < f ? b.top += f : 0 < n ? b.top -= n : b.top = g(b.top - m, b.top)
                    }
                }, flip: {
                    left: function (b, a) {
                        var c, e, g = a.within, m = g.offset.left + g.scrollLeft, f = g.width; g = g.isWindow ? g.scrollLeft : g.offset.left; var n = b.left - a.collisionPosition.marginLeft, h = n - g; n = n + a.collisionWidth - f - g; var l = "left" ===
                            a.my[0] ? -a.elemWidth : "right" === a.my[0] ? a.elemWidth : 0, q = "left" === a.at[0] ? a.targetWidth : "right" === a.at[0] ? -a.targetWidth : 0, p = -2 * a.offset[0]; 0 > h ? (c = b.left + l + q + p + a.collisionWidth - f - m, (0 > c || d(h) > c) && (b.left += l + q + p)) : 0 < n && (e = b.left - a.collisionPosition.marginLeft + l + q + p - g, (0 < e || n > d(e)) && (b.left += l + q + p))
                    }, top: function (b, a) {
                        var c, g, e = a.within, m = e.offset.top + e.scrollTop, f = e.height; e = e.isWindow ? e.scrollTop : e.offset.top; var n = b.top - a.collisionPosition.marginTop, h = n - e; n = n + a.collisionHeight - f - e; var l = "top" === a.my[1] ?
                            -a.elemHeight : "bottom" === a.my[1] ? a.elemHeight : 0, q = "top" === a.at[1] ? a.targetHeight : "bottom" === a.at[1] ? -a.targetHeight : 0, p = -2 * a.offset[1]; 0 > h ? (g = b.top + l + q + p + a.collisionHeight - f - m, (0 > g || d(h) > g) && (b.top += l + q + p)) : 0 < n && (c = b.top - a.collisionPosition.marginTop + l + q + p - e, (0 < c || n > d(c)) && (b.top += l + q + p))
                    }
                }, flipfit: {
                    left: function () { a.ui.position.flip.left.apply(this, arguments); a.ui.position.fit.left.apply(this, arguments) }, top: function () {
                        a.ui.position.flip.top.apply(this, arguments); a.ui.position.fit.top.apply(this,
                            arguments)
                    }
                }
            }
    })(); a.ui.position; a.extend(a.expr[":"], { data: a.expr.createPseudo ? a.expr.createPseudo(function (b) { return function (c) { return !!a.data(c, b) } }) : function (b, c, e) { return !!a.data(b, e[3]) } }); a.fn.extend({ disableSelection: function () { var b = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function () { return this.on(b + ".ui-disableSelection", function (b) { b.preventDefault() }) } }(), enableSelection: function () { return this.off(".ui-disableSelection") } }); a.ui.focusable = function (b,
        c) { var e, g, d, f, h, l = b.nodeName.toLowerCase(); if ("area" === l) b = (e = b.parentNode, g = e.name, b.href && g && "map" === e.nodeName.toLowerCase() ? (d = a("img[usemap='#" + g + "']"), 0 < d.length && d.is(":visible")) : !1); else { /^(input|select|textarea|button|object)$/.test(l) ? (f = !b.disabled, f && (h = a(b).closest("fieldset")[0], h && (f = !h.disabled))) : f = "a" === l ? b.href || c : c; if (e = f && a(b).is(":visible")) { b = a(b); for (e = b.css("visibility"); "inherit" === e;)b = b.parent(), e = b.css("visibility"); e = "hidden" !== e } b = e } return b }; a.extend(a.expr[":"],
            { focusable: function (b) { return a.ui.focusable(b, null != a.attr(b, "tabindex")) } }); a.ui.focusable; a.fn.form = function () { return "string" == typeof this[0].form ? this.closest("form") : a(this[0].form) }; a.ui.formResetMixin = {
                _formResetHandler: function () { var b = a(this); setTimeout(function () { var c = b.data("ui-form-reset-instances"); a.each(c, function () { this.refresh() }) }) }, _bindFormResetHandler: function () {
                    if (this.form = this.element.form(), this.form.length) {
                        var b = this.form.data("ui-form-reset-instances") || []; b.length || this.form.on("reset.ui-form-reset",
                            this._formResetHandler); b.push(this); this.form.data("ui-form-reset-instances", b)
                    }
                }, _unbindFormResetHandler: function () { if (this.form.length) { var b = this.form.data("ui-form-reset-instances"); b.splice(a.inArray(this, b), 1); b.length ? this.form.data("ui-form-reset-instances", b) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset") } }
            }; "1.7" === a.fn.jquery.substring(0, 3) && (a.each(["Width", "Height"], function (b, c) {
                function e(b, c, e, d) {
                    return a.each(g, function () {
                        c -= parseFloat(a.css(b, "padding" +
                            this)) || 0; e && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0); d && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                    }), c
                } var g = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"], d = c.toLowerCase(), f = { innerWidth: a.fn.innerWidth, innerHeight: a.fn.innerHeight, outerWidth: a.fn.outerWidth, outerHeight: a.fn.outerHeight }; a.fn["inner" + c] = function (b) { return void 0 === b ? f["inner" + c].call(this) : this.each(function () { a(this).css(d, e(this, b) + "px") }) }; a.fn["outer" + c] = function (b, g) {
                    return "number" != typeof b ? f["outer" + c].call(this,
                        b) : this.each(function () { a(this).css(d, e(this, b, !0, g) + "px") })
                }
            }), a.fn.addBack = function (b) { return this.add(null == b ? this.prevObject : this.prevObject.filter(b)) }); a.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }; a.ui.escapeSelector = function () { var b = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g; return function (a) { return a.replace(b, "\\$1") } }(); a.fn.labels = function () {
                var b, c, e, g, d; return this[0].labels &&
                    this[0].labels.length ? this.pushStack(this[0].labels) : (g = this.eq(0).parents("label"), e = this.attr("id"), e && (b = this.eq(0).parents().last(), d = b.add(b.length ? b.siblings() : this.siblings()), c = "label[for='" + a.ui.escapeSelector(e) + "']", g = g.add(d.find(c).addBack(c))), this.pushStack(g))
            }; a.fn.scrollParent = function (b) {
                var c = this.css("position"), e = "absolute" === c, g = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/; b = this.parents().filter(function () {
                    var b = a(this); return e && "static" === b.css("position") ? !1 : g.test(b.css("overflow") +
                        b.css("overflow-y") + b.css("overflow-x"))
                }).eq(0); return "fixed" !== c && b.length ? b : a(this[0].ownerDocument || document)
            }; a.extend(a.expr[":"], { tabbable: function (b) { var c = a.attr(b, "tabindex"), e = null != c; return (!e || 0 <= c) && a.ui.focusable(b, e) } }); a.fn.extend({ uniqueId: function () { var b = 0; return function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++b) }) } }(), removeUniqueId: function () { return this.each(function () { /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id") }) } }); a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var h = !1; a(document).on("mouseup", function () { h = !1 }); a.widget("ui.mouse", {
        version: "1.12.1", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function () { var b = this; this.element.on("mousedown." + this.widgetName, function (a) { return b._mouseDown(a) }).on("click." + this.widgetName, function (c) { return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0 }); this.started = !1 },
        _mouseDestroy: function () { this.element.off("." + this.widgetName); this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function (b) {
            if (!h) {
            this._mouseMoved = !1; this._mouseStarted && this._mouseUp(b); this._mouseDownEvent = b; var c = this, e = 1 === b.which, g = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1; return e && !g && this._mouseCapture(b) ? (this.mouseDelayMet =
                !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () { c.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(b), !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (b) { return c._mouseMove(b) }, this._mouseUpDelegate = function (b) { return c._mouseUp(b) },
                    this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), h = !0, !0)) : !0
            }
        }, _mouseMove: function (b) {
            if (this._mouseMoved) { if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b); if (!b.which) if (b.originalEvent.altKey || b.originalEvent.ctrlKey || b.originalEvent.metaKey || b.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(b) } return (b.which ||
                b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b), this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
        }, _mouseUp: function (b) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate); this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target &&
                a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)); this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer); h = this.ignoreMissingWhich = !1; b.preventDefault()
        }, _mouseDistanceMet: function (b) { return Math.max(Math.abs(this._mouseDownEvent.pageX - b.pageX), Math.abs(this._mouseDownEvent.pageY - b.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { },
        _mouseCapture: function () { return !0 }
    }); a.ui.plugin = { add: function (b, c, e) { var g; b = a.ui[b].prototype; for (g in e) b.plugins[g] = b.plugins[g] || [], b.plugins[g].push([c, e[g]]) }, call: function (b, a, e, g) { if ((a = b.plugins[a]) && (g || b.element[0].parentNode && 11 !== b.element[0].parentNode.nodeType)) for (g = 0; a.length > g; g++)b.options[a[g][0]] && a[g][1].apply(b.element, e) } }; a.ui.safeActiveElement = function (b) { try { var a = b.activeElement } catch (e) { a = b.body } return a || (a = b.body), a.nodeName || (a = b.body), a }; a.ui.safeBlur = function (b) {
    b &&
        "body" !== b.nodeName.toLowerCase() && a(b).trigger("blur")
    }; a.widget("ui.draggable", a.ui.mouse, {
        version: "1.12.1", widgetEventPrefix: "drag", options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
        _create: function () { "original" === this.options.helper && this._setPositionRelative(); this.options.addClasses && this._addClass("ui-draggable"); this._setHandleClassName(); this._mouseInit() }, _setOption: function (b, a) { this._super(b, a); "handle" === b && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function () { return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0) }, _mouseCapture: function (b) {
            var c =
                this.options; return this.helper || c.disabled || 0 < a(b.target).closest(".ui-resizable-handle").length ? !1 : (this.handle = this._getHandle(b), this.handle ? (this._blurActiveElement(b), this._blockFrames(!0 === c.iframeFix ? "iframe" : c.iframeFix), !0) : !1)
        }, _blockFrames: function (b) { this.iframeBlocks = this.document.find(b).map(function () { var b = a(this); return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0] }) }, _unblockFrames: function () {
        this.iframeBlocks &&
            (this.iframeBlocks.remove(), delete this.iframeBlocks)
        }, _blurActiveElement: function (b) { var c = a.ui.safeActiveElement(this.document[0]); a(b.target).closest(c).length || a.ui.safeBlur(c) }, _mouseStart: function (b) {
            var c = this.options; return this.helper = this._createHelper(b), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0),
                this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function () { return "fixed" === a(this).css("position") }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(b), this.originalPosition = this.position = this._generatePosition(b, !1), this.originalPageX = b.pageX, this.originalPageY = b.pageY, c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt), this._setContainment(), !1 === this._trigger("start", b) ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager &&
                    !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
        }, _refreshOffsets: function (b) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }; this.offset.click = { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top } }, _mouseDrag: function (b, c) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
                this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) { c = this._uiHash(); if (!1 === this._trigger("drag", b, c)) return this._mouseUp(new a.Event("mouseup", b)), !1; this.position = c.position } return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", a.ui.ddmanager && a.ui.ddmanager.drag(this, b), !1
        }, _mouseStop: function (b) {
            var c = this, e = !1; return a.ui.ddmanager && !this.options.dropBehaviour && (e = a.ui.ddmanager.drop(this, b)),
                this.dropped && (e = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !e || "valid" === this.options.revert && e || !0 === this.options.revert || a.isFunction(this.options.revert) && this.options.revert.call(this.element, e) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { !1 !== c._trigger("stop", b) && c._clear() }) : !1 !== this._trigger("stop", b) && this._clear(), !1
        }, _mouseUp: function (b) {
            return this._unblockFrames(), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b),
                this.handleElement.is(b.target) && this.element.trigger("focus"), a.ui.mouse.prototype._mouseUp.call(this, b)
        }, cancel: function () { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new a.Event("mouseup", { target: this.element[0] })) : this._clear(), this }, _getHandle: function (b) { return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0 }, _setHandleClassName: function () {
        this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle")
        }, _removeHandleClassName: function () { this._removeClass(this.handleElement, "ui-draggable-handle") }, _createHelper: function (b) {
            var c = this.options, e = a.isFunction(c.helper); b = e ? a(c.helper.apply(this.element[0], [b])) : "clone" === c.helper ? this.element.clone().removeAttr("id") : this.element; return b.parents("body").length || b.appendTo("parent" === c.appendTo ? this.element[0].parentNode : c.appendTo), e && b[0] === this.element[0] && this._setPositionRelative(), b[0] ===
                this.element[0] || /(fixed|absolute)/.test(b.css("position")) || b.css("position", "absolute"), b
        }, _setPositionRelative: function () { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") }, _adjustOffsetFromHelper: function (b) {
        "string" == typeof b && (b = b.split(" ")); a.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }); "left" in b && (this.offset.click.left = b.left + this.margins.left); "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left); "top" in b &&
            (this.offset.click.top = b.top + this.margins.top); "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        }, _isRootNode: function (b) { return /(html|body)/i.test(b.tagName) || b === this.document[0] }, _getParentOffset: function () {
            var b = this.offsetParent.offset(), c = this.document[0]; return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()),
                this._isRootNode(this.offsetParent[0]) && (b = { top: 0, left: 0 }), { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        }, _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var b = this.element.position(), a = this._isRootNode(this.scrollParent[0]); return {
                top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + (a ? 0 : this.scrollParent.scrollTop()), left: b.left - (parseInt(this.helper.css("left"), 10) ||
                    0) + (a ? 0 : this.scrollParent.scrollLeft())
            }
        }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () {
            var b, c, e, g = this.options, d = this.document[0]; return this.relativeContainer =
                null, g.containment ? "window" === g.containment ? (this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || d.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === g.containment ? (this.containment = [0, 0, a(d).width() - this.helperProportions.width -
                    this.margins.left, (a(d).height() || d.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : g.containment.constructor === Array ? (this.containment = g.containment, void 0) : ("parent" === g.containment && (g.containment = this.helper[0].parentNode), c = a(g.containment), e = c[0], e && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [(parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"),
                        10) || 0), (b ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = c), void 0) : (this.containment = null, void 0)
        }, _convertPositionTo: function (b,
            a) { a || (a = this.position); b = "absolute" === b ? 1 : -1; var c = this._isRootNode(this.scrollParent[0]); return { top: a.top + this.offset.relative.top * b + this.offset.parent.top * b - ("fixed" === this.cssPosition ? -this.offset.scroll.top : c ? 0 : this.offset.scroll.top) * b, left: a.left + this.offset.relative.left * b + this.offset.parent.left * b - ("fixed" === this.cssPosition ? -this.offset.scroll.left : c ? 0 : this.offset.scroll.left) * b } }, _generatePosition: function (b, a) {
                var c, g, d, f, h = this.options, l = this._isRootNode(this.scrollParent[0]), p = b.pageX,
                k = b.pageY; return l && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), a && (this.containment && (this.relativeContainer ? (g = this.relativeContainer.offset(), c = [this.containment[0] + g.left, this.containment[1] + g.top, this.containment[2] + g.left, this.containment[3] + g.top]) : c = this.containment, b.pageX - this.offset.click.left < c[0] && (p = c[0] + this.offset.click.left), b.pageY - this.offset.click.top < c[1] && (k = c[1] + this.offset.click.top), b.pageX - this.offset.click.left >
                    c[2] && (p = c[2] + this.offset.click.left), b.pageY - this.offset.click.top > c[3] && (k = c[3] + this.offset.click.top)), h.grid && (d = h.grid[1] ? this.originalPageY + Math.round((k - this.originalPageY) / h.grid[1]) * h.grid[1] : this.originalPageY, k = c ? d - this.offset.click.top >= c[1] || d - this.offset.click.top > c[3] ? d : d - this.offset.click.top >= c[1] ? d - h.grid[1] : d + h.grid[1] : d, f = h.grid[0] ? this.originalPageX + Math.round((p - this.originalPageX) / h.grid[0]) * h.grid[0] : this.originalPageX, p = c ? f - this.offset.click.left >= c[0] || f - this.offset.click.left >
                        c[2] ? f : f - this.offset.click.left >= c[0] ? f - h.grid[0] : f + h.grid[0] : f), "y" === h.axis && (p = this.originalPageX), "x" === h.axis && (k = this.originalPageY)), { top: k - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : l ? 0 : this.offset.scroll.top), left: p - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : l ? 0 : this.offset.scroll.left) }
            }, _clear: function () {
                this._removeClass(this.helper,
                    "ui-draggable-dragging"); this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(); this.helper = null; this.cancelHelperRemoval = !1; this.destroyOnClear && this.destroy()
            }, _trigger: function (b, c, e) { return e = e || this._uiHash(), a.ui.plugin.call(this, b, [c, e, this], !0), /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), e.offset = this.positionAbs), a.Widget.prototype._trigger.call(this, b, c, e) }, plugins: {}, _uiHash: function () {
                return {
                    helper: this.helper, position: this.position,
                    originalPosition: this.originalPosition, offset: this.positionAbs
                }
            }
    }); a.ui.plugin.add("draggable", "connectToSortable", {
        start: function (b, c, e) { var g = a.extend({}, c, { item: e.element }); e.sortables = []; a(e.options.connectToSortable).each(function () { var c = a(this).sortable("instance"); c && !c.options.disabled && (e.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, g)) }) }, stop: function (b, c, e) {
            var g = a.extend({}, c, { item: e.element }); e.cancelHelperRemoval = !1; a.each(e.sortables, function () {
                this.isOver ? (this.isOver =
                    0, e.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = { position: this.placeholder.css("position"), top: this.placeholder.css("top"), left: this.placeholder.css("left") }, this._mouseStop(b), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", b, g))
            })
        }, drag: function (b, c, e) {
            a.each(e.sortables, function () {
                var g = !1, d = this; d.positionAbs = e.positionAbs; d.helperProportions = e.helperProportions; d.offset.click = e.offset.click; d._intersectsWith(d.containerCache) &&
                    (g = !0, a.each(e.sortables, function () { return this.positionAbs = e.positionAbs, this.helperProportions = e.helperProportions, this.offset.click = e.offset.click, this !== d && this._intersectsWith(this.containerCache) && a.contains(d.element[0], this.element[0]) && (g = !1), g })); g ? (d.isOver || (d.isOver = 1, e._parent = c.helper.parent(), d.currentItem = c.helper.appendTo(d.element).data("ui-sortable-item", !0), d.options._helper = d.options.helper, d.options.helper = function () { return c.helper[0] }, b.target = d.currentItem[0], d._mouseCapture(b,
                        !0), d._mouseStart(b, !0, !0), d.offset.click.top = e.offset.click.top, d.offset.click.left = e.offset.click.left, d.offset.parent.left -= e.offset.parent.left - d.offset.parent.left, d.offset.parent.top -= e.offset.parent.top - d.offset.parent.top, e._trigger("toSortable", b), e.dropped = d.element, a.each(e.sortables, function () { this.refreshPositions() }), e.currentItem = e.element, d.fromOutside = e), d.currentItem && (d._mouseDrag(b), c.position = d.position)) : d.isOver && (d.isOver = 0, d.cancelHelperRemoval = !0, d.options._revert = d.options.revert,
                            d.options.revert = !1, d._trigger("out", b, d._uiHash(d)), d._mouseStop(b, !0), d.options.revert = d.options._revert, d.options.helper = d.options._helper, d.placeholder && d.placeholder.remove(), c.helper.appendTo(e._parent), e._refreshOffsets(b), c.position = e._generatePosition(b, !0), e._trigger("fromSortable", b), e.dropped = !1, a.each(e.sortables, function () { this.refreshPositions() }))
            })
        }
    }); a.ui.plugin.add("draggable", "cursor", {
        start: function (b, c, e) {
            b = a("body"); e = e.options; b.css("cursor") && (e._cursor = b.css("cursor")); b.css("cursor",
                e.cursor)
        }, stop: function (b, c, e) { b = e.options; b._cursor && a("body").css("cursor", b._cursor) }
    }); a.ui.plugin.add("draggable", "opacity", { start: function (b, c, e) { b = a(c.helper); e = e.options; b.css("opacity") && (e._opacity = b.css("opacity")); b.css("opacity", e.opacity) }, stop: function (b, c, e) { b = e.options; b._opacity && a(c.helper).css("opacity", b._opacity) } }); a.ui.plugin.add("draggable", "scroll", {
        start: function (b, a, e) {
        e.scrollParentNotHidden || (e.scrollParentNotHidden = e.helper.scrollParent(!1)); e.scrollParentNotHidden[0] !==
            e.document[0] && "HTML" !== e.scrollParentNotHidden[0].tagName && (e.overflowOffset = e.scrollParentNotHidden.offset())
        }, drag: function (b, c, e) {
            c = e.options; var g = !1, d = e.scrollParentNotHidden[0], f = e.document[0]; d !== f && "HTML" !== d.tagName ? (c.axis && "x" === c.axis || (e.overflowOffset.top + d.offsetHeight - b.pageY < c.scrollSensitivity ? d.scrollTop = g = d.scrollTop + c.scrollSpeed : b.pageY - e.overflowOffset.top < c.scrollSensitivity && (d.scrollTop = g = d.scrollTop - c.scrollSpeed)), c.axis && "y" === c.axis || (e.overflowOffset.left + d.offsetWidth -
                b.pageX < c.scrollSensitivity ? d.scrollLeft = g = d.scrollLeft + c.scrollSpeed : b.pageX - e.overflowOffset.left < c.scrollSensitivity && (d.scrollLeft = g = d.scrollLeft - c.scrollSpeed))) : (c.axis && "x" === c.axis || (b.pageY - a(f).scrollTop() < c.scrollSensitivity ? g = a(f).scrollTop(a(f).scrollTop() - c.scrollSpeed) : a(window).height() - (b.pageY - a(f).scrollTop()) < c.scrollSensitivity && (g = a(f).scrollTop(a(f).scrollTop() + c.scrollSpeed))), c.axis && "y" === c.axis || (b.pageX - a(f).scrollLeft() < c.scrollSensitivity ? g = a(f).scrollLeft(a(f).scrollLeft() -
                    c.scrollSpeed) : a(window).width() - (b.pageX - a(f).scrollLeft()) < c.scrollSensitivity && (g = a(f).scrollLeft(a(f).scrollLeft() + c.scrollSpeed)))); !1 !== g && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(e, b)
        }
    }); a.ui.plugin.add("draggable", "snap", {
        start: function (b, c, e) {
            b = e.options; e.snapElements = []; a(b.snap.constructor !== String ? b.snap.items || ":data(ui-draggable)" : b.snap).each(function () {
                var b = a(this), c = b.offset(); this !== e.element[0] && e.snapElements.push({
                    item: this, width: b.outerWidth(), height: b.outerHeight(),
                    top: c.top, left: c.left
                })
            })
        }, drag: function (b, c, e) {
            var g, d, f, h, l, p, k = e.options, v = k.snapTolerance, w = c.offset.left, t = w + e.helperProportions.width, z = c.offset.top, B = z + e.helperProportions.height; for (l = e.snapElements.length - 1; 0 <= l; l--) {
                var y = e.snapElements[l].left - e.margins.left; var u = y + e.snapElements[l].width; var A = e.snapElements[l].top - e.margins.top; var x = A + e.snapElements[l].height; y - v > t || w > u + v || A - v > B || z > x + v || !a.contains(e.snapElements[l].item.ownerDocument, e.snapElements[l].item) ? (e.snapElements[l].snapping &&
                    e.options.snap.release && e.options.snap.release.call(e.element, b, a.extend(e._uiHash(), { snapItem: e.snapElements[l].item })), e.snapElements[l].snapping = !1) : ("inner" !== k.snapMode && (g = v >= Math.abs(A - B), d = v >= Math.abs(x - z), f = v >= Math.abs(y - t), h = v >= Math.abs(u - w), g && (c.position.top = e._convertPositionTo("relative", { top: A - e.helperProportions.height, left: 0 }).top), d && (c.position.top = e._convertPositionTo("relative", { top: x, left: 0 }).top), f && (c.position.left = e._convertPositionTo("relative", { top: 0, left: y - e.helperProportions.width }).left),
                        h && (c.position.left = e._convertPositionTo("relative", { top: 0, left: u }).left)), p = g || d || f || h, "outer" !== k.snapMode && (g = v >= Math.abs(A - z), d = v >= Math.abs(x - B), f = v >= Math.abs(y - w), h = v >= Math.abs(u - t), g && (c.position.top = e._convertPositionTo("relative", { top: A, left: 0 }).top), d && (c.position.top = e._convertPositionTo("relative", { top: x - e.helperProportions.height, left: 0 }).top), f && (c.position.left = e._convertPositionTo("relative", { top: 0, left: y }).left), h && (c.position.left = e._convertPositionTo("relative", { top: 0, left: u - e.helperProportions.width }).left)),
                        !e.snapElements[l].snapping && (g || d || f || h || p) && e.options.snap.snap && e.options.snap.snap.call(e.element, b, a.extend(e._uiHash(), { snapItem: e.snapElements[l].item })), e.snapElements[l].snapping = g || d || f || h || p)
            }
        }
    }); a.ui.plugin.add("draggable", "stack", {
        start: function (b, c, e) {
            var g; b = a.makeArray(a(e.options.stack)).sort(function (b, c) { return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0) }); b.length && (g = parseInt(a(b[0]).css("zIndex"), 10) || 0, a(b).each(function (b) {
                a(this).css("zIndex",
                    g + b)
            }), this.css("zIndex", g + b.length))
        }
    }); a.ui.plugin.add("draggable", "zIndex", { start: function (b, c, e) { b = a(c.helper); e = e.options; b.css("zIndex") && (e._zIndex = b.css("zIndex")); b.css("zIndex", e.zIndex) }, stop: function (b, c, e) { b = e.options; b._zIndex && a(c.helper).css("zIndex", b._zIndex) } }); a.ui.draggable; a.widget("ui.resizable", a.ui.mouse, {
        version: "1.12.1", widgetEventPrefix: "resize", options: {
            alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" },
            containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null
        }, _num: function (b) { return parseFloat(b) || 0 }, _isNumber: function (b) { return !isNaN(parseFloat(b)) }, _hasScroll: function (b, c) { if ("hidden" === a(b).css("overflow")) return !1; c = c && "left" === c ? "scrollLeft" : "scrollTop"; var e = !1; return 0 < b[c] ? !0 : (b[c] = 1, e = 0 < b[c], b[c] = 0, e) }, _create: function () {
            var b, c = this.options, e = this; this._addClass("ui-resizable"); a.extend(this,
                { _aspectRatio: !!c.aspectRatio, aspectRatio: c.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: c.helper || c.ghost || c.animate ? c.helper || "ui-resizable-helper" : null }); this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })),
                    this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, b = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(b), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1, display: "block"
                    })), this.originalElement.css(b), this._proportionallyResize()); this._setupHandles(); c.autoHide && a(this.element).on("mouseenter", function () { c.disabled || (e._removeClass("ui-resizable-autohide"), e._handles.show()) }).on("mouseleave", function () { c.disabled || e.resizing || (e._addClass("ui-resizable-autohide"), e._handles.hide()) }); this._mouseInit()
        }, _destroy: function () {
            this._mouseDestroy(); var b, c = function (b) { a(b).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() };
            return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({ position: b.css("position"), width: b.outerWidth(), height: b.outerHeight(), top: b.css("top"), left: b.css("left") }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
        }, _setOption: function (b, a) { switch (this._super(b, a), b) { case "handles": this._removeHandles(), this._setupHandles() } }, _setupHandles: function () {
            var b, c = this.options, e = this; if (this.handles = c.handles ||
                (a(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = a(), this.handles.constructor === String) {
                "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"); var g = this.handles.split(","); this.handles = {}; for (b = 0; g.length > b; b++) {
                    var d = a.trim(g[b]); var f = "ui-resizable-" + d; var h = a("<div>"); this._addClass(h, "ui-resizable-handle " +
                        f); h.css({ zIndex: c.zIndex }); this.handles[d] = ".ui-resizable-" + d; this.element.append(h)
                }
            } this._renderAxis = function (b) {
                var c, g, d, f; b = b || this.element; for (c in this.handles) this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), this._on(this.handles[c], { mousedown: e._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) &&
                    (g = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? g.outerHeight() : g.outerWidth(), d = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(d, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c])
            }; this._renderAxis(this.element); this._handles = this._handles.add(this.element.find(".ui-resizable-handle")); this._handles.disableSelection(); this._handles.on("mouseover", function () {
            e.resizing || (this.className && (h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                e.axis = h && h[1] ? h[1] : "se")
            }); c.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        }, _removeHandles: function () { this._handles.remove() }, _mouseCapture: function (b) { var c, e = !1; for (c in this.handles) { var g = a(this.handles[c])[0]; (g === b.target || a.contains(g, b.target)) && (e = !0) } return !this.options.disabled && e }, _mouseStart: function (b) {
            var c, e, g, d = this.options, f = this.element; return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), e = this._num(this.helper.css("top")),
                d.containment && (c += a(d.containment).scrollLeft() || 0, e += a(d.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: c, top: e }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: f.width(), height: f.height() }, this.originalSize = this._helper ? { width: f.outerWidth(), height: f.outerHeight() } : { width: f.width(), height: f.height() }, this.sizeDiff = { width: f.outerWidth() - f.width(), height: f.outerHeight() - f.height() }, this.originalPosition = { left: c, top: e }, this.originalMousePosition =
                { left: b.pageX, top: b.pageY }, this.aspectRatio = "number" == typeof d.aspectRatio ? d.aspectRatio : this.originalSize.width / this.originalSize.height || 1, g = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === g ? this.axis + "-resize" : g), this._addClass("ui-resizable-resizing"), this._propagate("start", b), !0
        }, _mouseDrag: function (b) {
            var c, e, g = this.originalMousePosition, d = b.pageX - g.left || 0; g = b.pageY - g.top || 0; var f = this._change[this.axis]; return this._updatePrevProperties(), f ? (c = f.apply(this, [b,
                d, g]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), e = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(e) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1) : !1
        }, _mouseStop: function (b) {
        this.resizing = !1; var c, e, g, d, f, h, l, p = this.options; return this._helper &&
            (c = this._proportionallyResizeElements, e = c.length && /textarea/i.test(c[0].nodeName), g = e && this._hasScroll(c[0], "left") ? 0 : this.sizeDiff.height, d = e ? 0 : this.sizeDiff.width, f = { width: this.helper.width() - d, height: this.helper.height() - g }, h = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null, l = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null, p.animate || this.element.css(a.extend(f, { top: l, left: h })), this.helper.height(this.size.height),
                this.helper.width(this.size.width), this._helper && !p.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
        }, _updatePrevProperties: function () { this.prevPosition = { top: this.position.top, left: this.position.left }; this.prevSize = { width: this.size.width, height: this.size.height } }, _applyChanges: function () {
            var b = {}; return this.position.top !== this.prevPosition.top && (b.top = this.position.top +
                "px"), this.position.left !== this.prevPosition.left && (b.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (b.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (b.height = this.size.height + "px"), this.helper.css(b), b
        }, _updateVirtualBoundaries: function (b) {
            var a, e, g, d; var f = this.options; f = {
                minWidth: this._isNumber(f.minWidth) ? f.minWidth : 0, maxWidth: this._isNumber(f.maxWidth) ? f.maxWidth : 1 / 0, minHeight: this._isNumber(f.minHeight) ? f.minHeight : 0, maxHeight: this._isNumber(f.maxHeight) ?
                    f.maxHeight : 1 / 0
            }; (this._aspectRatio || b) && (a = f.minHeight * this.aspectRatio, g = f.minWidth / this.aspectRatio, e = f.maxHeight * this.aspectRatio, d = f.maxWidth / this.aspectRatio, a > f.minWidth && (f.minWidth = a), g > f.minHeight && (f.minHeight = g), f.maxWidth > e && (f.maxWidth = e), f.maxHeight > d && (f.maxHeight = d)); this._vBoundaries = f
        }, _updateCache: function (b) {
        this.offset = this.helper.offset(); this._isNumber(b.left) && (this.position.left = b.left); this._isNumber(b.top) && (this.position.top = b.top); this._isNumber(b.height) && (this.size.height =
            b.height); this._isNumber(b.width) && (this.size.width = b.width)
        }, _updateRatio: function (b) { var a = this.position, e = this.size, g = this.axis; return this._isNumber(b.height) ? b.width = b.height * this.aspectRatio : this._isNumber(b.width) && (b.height = b.width / this.aspectRatio), "sw" === g && (b.left = a.left + (e.width - b.width), b.top = null), "nw" === g && (b.top = a.top + (e.height - b.height), b.left = a.left + (e.width - b.width)), b }, _respectSize: function (b) {
            var a = this._vBoundaries, e = this.axis, g = this._isNumber(b.width) && a.maxWidth && a.maxWidth <
                b.width, d = this._isNumber(b.height) && a.maxHeight && a.maxHeight < b.height, f = this._isNumber(b.width) && a.minWidth && a.minWidth > b.width, h = this._isNumber(b.height) && a.minHeight && a.minHeight > b.height, l = this.originalPosition.left + this.originalSize.width, p = this.originalPosition.top + this.originalSize.height, k = /sw|nw|w/.test(e); e = /nw|ne|n/.test(e); return f && (b.width = a.minWidth), h && (b.height = a.minHeight), g && (b.width = a.maxWidth), d && (b.height = a.maxHeight), f && k && (b.left = l - a.minWidth), g && k && (b.left = l - a.maxWidth), h &&
                    e && (b.top = p - a.minHeight), d && e && (b.top = p - a.maxHeight), b.width || b.height || b.left || !b.top ? b.width || b.height || b.top || !b.left || (b.left = null) : b.top = null, b
        }, _getPaddingPlusBorderDimensions: function (b) {
            var a = 0, e = [], g = [b.css("borderTopWidth"), b.css("borderRightWidth"), b.css("borderBottomWidth"), b.css("borderLeftWidth")]; for (b = [b.css("paddingTop"), b.css("paddingRight"), b.css("paddingBottom"), b.css("paddingLeft")]; 4 > a; a++)e[a] = parseFloat(g[a]) || 0, e[a] += parseFloat(b[a]) || 0; return {
                height: e[0] + e[2], width: e[1] +
                    e[3]
            }
        }, _proportionallyResize: function () { if (this._proportionallyResizeElements.length) for (var b, a = 0, e = this.helper || this.element; this._proportionallyResizeElements.length > a; a++)b = this._proportionallyResizeElements[a], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(b)), b.css({ height: e.height() - this.outerDimensions.height || 0, width: e.width() - this.outerDimensions.width || 0 }) }, _renderProxy: function () {
            var b = this.options; this.elementOffset = this.element.offset(); this._helper ?
                (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++b.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        }, _change: {
            e: function (b, a) { return { width: this.originalSize.width + a } }, w: function (b, a) {
                return {
                    left: this.originalPosition.left + a, width: this.originalSize.width -
                        a
                }
            }, n: function (b, a, e) { return { top: this.originalPosition.top + e, height: this.originalSize.height - e } }, s: function (b, a, e) { return { height: this.originalSize.height + e } }, se: function (b, c, e) { return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, e])) }, sw: function (b, c, e) { return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, e])) }, ne: function (b, c, e) { return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, e])) }, nw: function (b, c,
                e) { return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, e])) }
        }, _propagate: function (b, c) { a.ui.plugin.call(this, b, [c, this.ui()]); "resize" !== b && this._trigger(b, c, this.ui()) }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }); a.ui.plugin.add("resizable", "animate", {
        stop: function (b) {
            var c = a(this).resizable("instance"),
            e = c.options, g = c._proportionallyResizeElements, d = g.length && /textarea/i.test(g[0].nodeName), f = d && c._hasScroll(g[0], "left") ? 0 : c.sizeDiff.height; d = { width: c.size.width - (d ? 0 : c.sizeDiff.width), height: c.size.height - f }; f = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null; var h = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null; c.element.animate(a.extend(d, h && f ? { top: h, left: f } : {}), {
                duration: e.animateDuration, easing: e.animateEasing, step: function () {
                    var e =
                        { width: parseFloat(c.element.css("width")), height: parseFloat(c.element.css("height")), top: parseFloat(c.element.css("top")), left: parseFloat(c.element.css("left")) }; g && g.length && a(g[0]).css({ width: e.width, height: e.height }); c._updateCache(e); c._propagate("resize", b)
                }
            })
        }
    }); a.ui.plugin.add("resizable", "containment", {
        start: function () {
            var b, c, e, g, d, f, h, l = a(this).resizable("instance"), k = l.element, r = l.options.containment; (k = r instanceof a ? r.get(0) : /parent/.test(r) ? k.parent().get(0) : r) && (l.containerElement =
                a(k), /document/.test(r) || r === document ? (l.containerOffset = { left: 0, top: 0 }, l.containerPosition = { left: 0, top: 0 }, l.parentData = { element: a(document), left: 0, top: 0, width: a(document).width(), height: a(document).height() || document.body.parentNode.scrollHeight }) : (b = a(k), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function (a, g) { c[a] = l._num(b.css("padding" + g)) }), l.containerOffset = b.offset(), l.containerPosition = b.position(), l.containerSize = { height: b.innerHeight() - c[3], width: b.innerWidth() - c[1] }, e = l.containerOffset,
                    g = l.containerSize.height, d = l.containerSize.width, f = l._hasScroll(k, "left") ? k.scrollWidth : d, h = l._hasScroll(k) ? k.scrollHeight : g, l.parentData = { element: k, left: e.left, top: e.top, width: f, height: h }))
        }, resize: function (b) {
            var c = a(this).resizable("instance"); var e = c.options; var g = c.containerOffset; var d = c.position; b = c._aspectRatio || b.shiftKey; var f = { top: 0, left: 0 }, h = c.containerElement, l = !0; h[0] !== document && /static/.test(h.css("position")) && (f = g); d.left < (c._helper ? g.left : 0) && (c.size.width += c._helper ? c.position.left -
                g.left : c.position.left - f.left, b && (c.size.height = c.size.width / c.aspectRatio, l = !1), c.position.left = e.helper ? g.left : 0); d.top < (c._helper ? g.top : 0) && (c.size.height += c._helper ? c.position.top - g.top : c.position.top, b && (c.size.width = c.size.height * c.aspectRatio, l = !1), c.position.top = c._helper ? g.top : 0); e = c.containerElement.get(0) === c.element.parent().get(0); d = /relative|absolute/.test(c.containerElement.css("position")); e && d ? (c.offset.left = c.parentData.left + c.position.left, c.offset.top = c.parentData.top + c.position.top) :
                    (c.offset.left = c.element.offset().left, c.offset.top = c.element.offset().top); e = Math.abs(c.sizeDiff.width + (c._helper ? c.offset.left - f.left : c.offset.left - g.left)); g = Math.abs(c.sizeDiff.height + (c._helper ? c.offset.top - f.top : c.offset.top - g.top)); e + c.size.width >= c.parentData.width && (c.size.width = c.parentData.width - e, b && (c.size.height = c.size.width / c.aspectRatio, l = !1)); g + c.size.height >= c.parentData.height && (c.size.height = c.parentData.height - g, b && (c.size.width = c.size.height * c.aspectRatio, l = !1)); l || (c.position.left =
                        c.prevPosition.left, c.position.top = c.prevPosition.top, c.size.width = c.prevSize.width, c.size.height = c.prevSize.height)
        }, stop: function () {
            var b = a(this).resizable("instance"), c = b.options, e = b.containerOffset, g = b.containerPosition, d = b.containerElement, f = a(b.helper), h = f.offset(), l = f.outerWidth() - b.sizeDiff.width; f = f.outerHeight() - b.sizeDiff.height; b._helper && !c.animate && /relative/.test(d.css("position")) && a(this).css({ left: h.left - g.left - e.left, width: l, height: f }); b._helper && !c.animate && /static/.test(d.css("position")) &&
                a(this).css({ left: h.left - g.left - e.left, width: l, height: f })
        }
    }); a.ui.plugin.add("resizable", "alsoResize", {
        start: function () { var b = a(this).resizable("instance").options; a(b.alsoResize).each(function () { var b = a(this); b.data("ui-resizable-alsoresize", { width: parseFloat(b.width()), height: parseFloat(b.height()), left: parseFloat(b.css("left")), top: parseFloat(b.css("top")) }) }) }, resize: function (b, c) {
            b = a(this).resizable("instance"); var e = b.originalSize, g = b.originalPosition, d = {
                height: b.size.height - e.height || 0, width: b.size.width -
                    e.width || 0, top: b.position.top - g.top || 0, left: b.position.left - g.left || 0
            }; a(b.options.alsoResize).each(function () { var b = a(this), g = a(this).data("ui-resizable-alsoresize"), e = {}, f = b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; a.each(f, function (b, a) { (b = (g[a] || 0) + (d[a] || 0)) && 0 <= b && (e[a] = b || null) }); b.css(e) })
        }, stop: function () { a(this).removeData("ui-resizable-alsoresize") }
    }); a.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var b = a(this).resizable("instance"),
            c = b.size; b.ghost = b.originalElement.clone(); b.ghost.css({ opacity: .25, display: "block", position: "relative", height: c.height, width: c.width, margin: 0, left: 0, top: 0 }); b._addClass(b.ghost, "ui-resizable-ghost"); !1 !== a.uiBackCompat && "string" == typeof b.options.ghost && b.ghost.addClass(this.options.ghost); b.ghost.appendTo(b.helper)
        }, resize: function () { var b = a(this).resizable("instance"); b.ghost && b.ghost.css({ position: "relative", height: b.size.height, width: b.size.width }) }, stop: function () {
            var b = a(this).resizable("instance");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }
    }); a.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var b, c = a(this).resizable("instance"), e = c.options, g = c.size, d = c.originalSize, f = c.originalPosition, h = c.axis, l = "number" == typeof e.grid ? [e.grid, e.grid] : e.grid, k = l[0] || 1, r = l[1] || 1, v = Math.round((g.width - d.width) / k) * k; g = Math.round((g.height - d.height) / r) * r; var w = d.width + v, t = d.height + g, z = e.maxWidth && w > e.maxWidth, B = e.maxHeight && t > e.maxHeight, y = e.minWidth && e.minWidth > w, u = e.minHeight && e.minHeight >
                t; e.grid = l; y && (w += k); u && (t += r); z && (w -= k); B && (t -= r); /^(se|s|e)$/.test(h) ? (c.size.width = w, c.size.height = t) : /^(ne)$/.test(h) ? (c.size.width = w, c.size.height = t, c.position.top = f.top - g) : /^(sw)$/.test(h) ? (c.size.width = w, c.size.height = t, c.position.left = f.left - v) : ((0 >= t - r || 0 >= w - k) && (b = c._getPaddingPlusBorderDimensions(this)), 0 < t - r ? (c.size.height = t, c.position.top = f.top - g) : (t = r - b.height, c.size.height = t, c.position.top = f.top + d.height - t), 0 < w - k ? (c.size.width = w, c.position.left = f.left - v) : (w = k - b.width, c.size.width = w,
                    c.position.left = f.left + d.width - w))
        }
    }); a.ui.resizable; a.widget("ui.selectable", a.ui.mouse, {
        version: "1.12.1", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function () {
            var b = this; this._addClass("ui-selectable"); this.dragged = !1; this.refresh = function () {
            b.elementPos = a(b.element[0]).offset(); b.selectees = a(b.options.filter, b.element[0]); b._addClass(b.selectees, "ui-selectee"); b.selectees.each(function () {
                var c =
                    a(this), e = c.offset(), g = e.left - b.elementPos.left; e = e.top - b.elementPos.top; a.data(this, "selectable-item", { element: this, $element: c, left: g, top: e, right: g + c.outerWidth(), bottom: e + c.outerHeight(), startselected: !1, selected: c.hasClass("ui-selected"), selecting: c.hasClass("ui-selecting"), unselecting: c.hasClass("ui-unselecting") })
            })
            }; this.refresh(); this._mouseInit(); this.helper = a("<div>"); this._addClass(this.helper, "ui-selectable-helper")
        }, _destroy: function () { this.selectees.removeData("selectable-item"); this._mouseDestroy() },
        _mouseStart: function (b) {
            var c = this, e = this.options; this.opos = [b.pageX, b.pageY]; this.elementPos = a(this.element[0]).offset(); this.options.disabled || (this.selectees = a(e.filter, this.element[0]), this._trigger("start", b), a(e.appendTo).append(this.helper), this.helper.css({ left: b.pageX, top: b.pageY, width: 0, height: 0 }), e.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var g = a.data(this, "selectable-item"); g.startselected = !0; b.metaKey || b.ctrlKey || (c._removeClass(g.$element, "ui-selected"),
                    g.selected = !1, c._addClass(g.$element, "ui-unselecting"), g.unselecting = !0, c._trigger("unselecting", b, { unselecting: g.element }))
            }), a(b.target).parents().addBack().each(function () {
                var g, e = a.data(this, "selectable-item"); return e ? (g = !b.metaKey && !b.ctrlKey || !e.$element.hasClass("ui-selected"), c._removeClass(e.$element, g ? "ui-unselecting" : "ui-selected")._addClass(e.$element, g ? "ui-selecting" : "ui-unselecting"), e.unselecting = !g, e.selecting = g, e.selected = g, g ? c._trigger("selecting", b, { selecting: e.element }) : c._trigger("unselecting",
                    b, { unselecting: e.element }), !1) : void 0
            }))
        }, _mouseDrag: function (b) {
            if (this.dragged = !0, !this.options.disabled) {
                var c, e = this, g = this.options, d = this.opos[0], f = this.opos[1], h = b.pageX, l = b.pageY; return d > h && (c = h, h = d, d = c), f > l && (c = l, l = f, f = c), this.helper.css({ left: d, top: f, width: h - d, height: l - f }), this.selectees.each(function () {
                    var c = a.data(this, "selectable-item"), m = !1, n, k, q, z; c && c.element !== e.element[0] && (n = c.left + e.elementPos.left, k = c.right + e.elementPos.left, q = c.top + e.elementPos.top, z = c.bottom + e.elementPos.top,
                        "touch" === g.tolerance ? m = !(n > h || d > k || q > l || f > z) : "fit" === g.tolerance && (m = n > d && h > k && q > f && l > z), m ? (c.selected && (e._removeClass(c.$element, "ui-selected"), c.selected = !1), c.unselecting && (e._removeClass(c.$element, "ui-unselecting"), c.unselecting = !1), c.selecting || (e._addClass(c.$element, "ui-selecting"), c.selecting = !0, e._trigger("selecting", b, { selecting: c.element }))) : (c.selecting && ((b.metaKey || b.ctrlKey) && c.startselected ? (e._removeClass(c.$element, "ui-selecting"), c.selecting = !1, e._addClass(c.$element, "ui-selected"),
                            c.selected = !0) : (e._removeClass(c.$element, "ui-selecting"), c.selecting = !1, c.startselected && (e._addClass(c.$element, "ui-unselecting"), c.unselecting = !0), e._trigger("unselecting", b, { unselecting: c.element }))), c.selected && (b.metaKey || b.ctrlKey || c.startselected || (e._removeClass(c.$element, "ui-selected"), c.selected = !1, e._addClass(c.$element, "ui-unselecting"), c.unselecting = !0, e._trigger("unselecting", b, { unselecting: c.element })))))
                }), !1
            }
        }, _mouseStop: function (b) {
            var c = this; return this.dragged = !1, a(".ui-unselecting",
                this.element[0]).each(function () { var e = a.data(this, "selectable-item"); c._removeClass(e.$element, "ui-unselecting"); e.unselecting = !1; e.startselected = !1; c._trigger("unselected", b, { unselected: e.element }) }), a(".ui-selecting", this.element[0]).each(function () { var e = a.data(this, "selectable-item"); c._removeClass(e.$element, "ui-selecting")._addClass(e.$element, "ui-selected"); e.selecting = !1; e.selected = !0; e.startselected = !0; c._trigger("selected", b, { selected: e.element }) }), this._trigger("stop", b), this.helper.remove(),
                !1
        }
    }); var k = /ui-corner-([a-z]){2,6}/g; a.widget("ui.controlgroup", {
        version: "1.12.1", defaultElement: "<div>", options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } }, _create: function () { this._enhance() }, _enhance: function () { this.element.attr("role", "toolbar"); this.refresh() },
        _destroy: function () { this._callChildMethod("destroy"); this.childWidgets.removeData("ui-controlgroup-data"); this.element.removeAttr("role"); this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() }, _initWidgets: function () {
            var b = this, c = []; a.each(this.options.items, function (e, g) {
                var d, f = {}; return g ? "controlgroupLabel" === e ? (d = b.element.find(g), d.each(function () {
                    var b = a(this); b.children(".ui-controlgroup-label-contents").length ||
                        b.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), b._addClass(d, null, "ui-widget ui-widget-content ui-state-default"), c = c.concat(d.get()), void 0) : (a.fn[e] && (f = b["_" + e + "Options"] ? b["_" + e + "Options"]("middle") : { classes: {} }, b.element.find(g).each(function () {
                    var g = a(this), d = g[e]("instance"), h = a.widget.extend({}, f); "button" === e && g.parent(".ui-spinner").length || (d || (d = g[e]()[e]("instance")), d && (h.classes = b._resolveClassesValues(h.classes, d)), g[e](h), h = g[e]("widget"), a.data(h[0],
                        "ui-controlgroup-data", d ? d : g[e]("instance")), c.push(h[0]))
                })), void 0) : void 0
            }); this.childWidgets = a(a.unique(c)); this._addClass(this.childWidgets, "ui-controlgroup-item")
        }, _callChildMethod: function (b) { this.childWidgets.each(function () { var c = a(this).data("ui-controlgroup-data"); c && c[b] && c[b]() }) }, _updateCornerClass: function (b, a) {
            a = this._buildSimpleOptions(a, "label").classes.label; this._removeClass(b, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"); this._addClass(b,
                null, a)
        }, _buildSimpleOptions: function (b, a) { var c = "vertical" === this.options.direction, g = { classes: {} }; return g.classes[a] = { middle: "", first: "ui-corner-" + (c ? "top" : "left"), last: "ui-corner-" + (c ? "bottom" : "right"), only: "ui-corner-all" }[b], g }, _spinnerOptions: function (b) { b = this._buildSimpleOptions(b, "ui-spinner"); return b.classes["ui-spinner-up"] = "", b.classes["ui-spinner-down"] = "", b }, _buttonOptions: function (b) { return this._buildSimpleOptions(b, "ui-button") }, _checkboxradioOptions: function (b) {
            return this._buildSimpleOptions(b,
                "ui-checkboxradio-label")
        }, _selectmenuOptions: function (b) { var a = "vertical" === this.options.direction; return { width: a ? "auto" : !1, classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (a ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (a ? "top" : "left") }, last: { "ui-selectmenu-button-open": a ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (a ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[b] } },
        _resolveClassesValues: function (b, c) { var d = {}; return a.each(b, function (g) { var e = c.options.classes[g] || ""; e = a.trim(e.replace(k, "")); d[g] = (e + " " + b[g]).replace(/\s+/g, " ") }), d }, _setOption: function (b, a) { return "direction" === b && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(b, a), "disabled" === b ? (this._callChildMethod(a ? "disable" : "enable"), void 0) : (this.refresh(), void 0) }, refresh: function () {
            var b = this; this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction); "horizontal" ===
                this.options.direction && this._addClass(null, "ui-helper-clearfix"); this._initWidgets(); var c = this.childWidgets; this.options.onlyVisible && (c = c.filter(":visible")); c.length && (a.each(["first", "last"], function (a, g) { (a = c[g]().data("ui-controlgroup-data")) && b["_" + a.widgetName + "Options"] ? (g = b["_" + a.widgetName + "Options"](1 === c.length ? "only" : g), g.classes = b._resolveClassesValues(g.classes, a), a.element[a.widgetName](g)) : b._updateCornerClass(c[g](), g) }), this._callChildMethod("refresh"))
        }
    }); a.widget("ui.checkboxradio",
        [a.ui.formResetMixin, {
            version: "1.12.1", options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } }, _getCreateOptions: function () {
                var b, c, d = this, g = this._super() || {}; return this._readType(), c = this.element.labels(), this.label = a(c[c.length - 1]), this.label.length || a.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                d.originalLabel += 3 === this.nodeType ? a(this).text() :
                    this.outerHTML
                }), this.originalLabel && (g.label = this.originalLabel), b = this.element[0].disabled, null != b && (g.disabled = b), g
            }, _create: function () {
                var a = this.element[0].checked; this._bindFormResetHandler(); null == this.options.disabled && (this.options.disabled = this.element[0].disabled); this._setOption("disabled", this.options.disabled); this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"); this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"); "radio" === this.type && this._addClass(this.label,
                    "ui-checkboxradio-radio-label"); this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel); this._enhance(); a && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")); this._on({ change: "_toggleClasses", focus: function () { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function () { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } })
            },
            _readType: function () { var b = this.element[0].nodeName.toLowerCase(); this.type = this.element[0].type; "input" === b && /radio|checkbox/.test(this.type) || a.error("Can't create checkboxradio on element.nodeName=" + b + " and element.type=" + this.type) }, _enhance: function () { this._updateIcon(this.element[0].checked) }, widget: function () { return this.label }, _getRadioGroup: function () {
                var b, c = this.element[0].name, d = "input[name='" + a.ui.escapeSelector(c) + "']"; return c ? (b = this.form.length ? a(this.form[0].elements).filter(d) :
                    a(d).filter(function () { return 0 === a(this).form().length }), b.not(this.element)) : a([])
            }, _toggleClasses: function () {
                var b = this.element[0].checked; this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", b); this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", b)._toggleClass(this.icon, null, "ui-icon-blank", !b); "radio" === this.type && this._getRadioGroup().each(function () {
                    var b = a(this).checkboxradio("instance"); b && b._removeClass(b.label,
                        "ui-checkboxradio-checked", "ui-state-active")
                })
            }, _destroy: function () { this._unbindFormResetHandler(); this.icon && (this.icon.remove(), this.iconSpace.remove()) }, _setOption: function (a, c) { return "label" !== a || c ? (this._super(a, c), "disabled" === a ? (this._toggleClass(this.label, null, "ui-state-disabled", c), this.element[0].disabled = c, void 0) : (this.refresh(), void 0)) : void 0 }, _updateIcon: function (b) {
                var c = "ui-icon ui-icon-background "; this.options.icon ? (this.icon || (this.icon = a("<span>"), this.iconSpace = a("<span> </span>"),
                    this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (c += b ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, b ? "ui-icon-blank" : "ui-icon-check")) : c += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", c), b || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
            }, _updateLabel: function () {
                var a =
                    this.label.contents().not(this.element[0]); this.icon && (a = a.not(this.icon[0])); this.iconSpace && (a = a.not(this.iconSpace[0])); a.remove(); this.label.append(this.options.label)
            }, refresh: function () { var a = this.element[0].checked, c = this.element[0].disabled; this._updateIcon(a); this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", a); null !== this.options.label && this._updateLabel(); c !== this.options.disabled && this._setOptions({ disabled: c }) }
        }]); a.ui.checkboxradio; a.widget("ui.button", {
            version: "1.12.1",
            defaultElement: "<button>", options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 }, _getCreateOptions: function () { var a, c = this._super() || {}; return this.isInput = this.element.is("input"), a = this.element[0].disabled, null != a && (c.disabled = a), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (c.label = this.originalLabel), c }, _create: function () {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel =
                !0); null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1); this.hasTitle = !!this.element.attr("title"); this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)); this._addClass("ui-button", "ui-widget"); this._setOption("disabled", this.options.disabled); this._enhance(); this.element.is("a") && this._on({
                    keyup: function (b) {
                    b.keyCode === a.ui.keyCode.SPACE && (b.preventDefault(), this.element[0].click ?
                        this.element[0].click() : this.element.trigger("click"))
                    }
                })
            }, _enhance: function () { this.element.is("button") || this.element.attr("role", "button"); this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) }, _updateTooltip: function () { this.title = this.element.attr("title"); this.options.showLabel || this.title || this.element.attr("title", this.options.label) }, _updateIcon: function (b, c) {
                var d = (b = "iconPosition" !== b) ? this.options.iconPosition : c, g = "top" === d || "bottom" === d; this.icon ? b && this._removeClass(this.icon,
                    null, this.options.icon) : (this.icon = a("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")); b && this._addClass(this.icon, null, c); this._attachIcon(d); g ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = a("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(d))
            },
            _destroy: function () { this.element.removeAttr("role"); this.icon && this.icon.remove(); this.iconSpace && this.iconSpace.remove(); this.hasTitle || this.element.removeAttr("title") }, _attachIconSpace: function (a) { this.icon[/^(?:end|bottom)/.test(a) ? "before" : "after"](this.iconSpace) }, _attachIcon: function (a) { this.element[/^(?:end|bottom)/.test(a) ? "append" : "prepend"](this.icon) }, _setOptions: function (a) {
                var b = void 0 === a.icon ? this.options.icon : a.icon; (void 0 === a.showLabel ? this.options.showLabel : a.showLabel) || b || (a.showLabel =
                    !0); this._super(a)
            }, _setOption: function (a, c) {
            "icon" === a && (c ? this._updateIcon(a, c) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())); "iconPosition" === a && this._updateIcon(a, c); "showLabel" === a && (this._toggleClass("ui-button-icon-only", null, !c), this._updateTooltip()); "label" === a && (this.isInput ? this.element.val(c) : (this.element.html(c), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))); this._super(a, c); "disabled" === a && (this._toggleClass(null,
                "ui-state-disabled", c), this.element[0].disabled = c, c && this.element.blur())
            }, refresh: function () { var a = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled"); a !== this.options.disabled && this._setOptions({ disabled: a }); this._updateTooltip() }
        }); !1 !== a.uiBackCompat && (a.widget("ui.button", a.ui.button, {
            options: { text: !0, icons: { primary: null, secondary: null } }, _create: function () {
                this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text);
                !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel); this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"); this._super()
            }, _setOption: function (a, c) {
                return "text" === a ? (this._super("showLabel", c), void 0) : ("showLabel" === a && (this.options.text =
                    c), "icon" === a && (this.options.icons.primary = c), "icons" === a && (c.primary ? (this._super("icon", c.primary), this._super("iconPosition", "beginning")) : c.secondary && (this._super("icon", c.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0)
            }
        }), a.fn.button = function (b) {
            return function () {
                return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? b.apply(this, arguments) : (a.ui.checkboxradio ||
                    a.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments))
            }
        }(a.fn.button), a.fn.buttonset = function () {
            return a.ui.controlgroup || a.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] &&
                arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments))
        }); a.ui.button; a.widget("ui.dialog", {
            version: "1.12.1", options: {
                appendTo: "body", autoOpen: !0, buttons: [], classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" }, closeOnEscape: !0, closeText: "Close", draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: {
                    my: "center", at: "center", of: window, collision: "fit", using: function (b) {
                        var c =
                            a(this).css(b).offset().top; 0 > c && a(this).css("top", b.top - c)
                    }
                }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null
            }, sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function () {
            this.originalCss = {
                display: this.element[0].style.display, width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height
            }; this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }; this.originalTitle = this.element.attr("title"); null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle); this.options.disabled && (this.options.disabled = !1); this._createWrapper(); this.element.show().removeAttr("title").appendTo(this.uiDialog);
                this._addClass("ui-dialog-content", "ui-widget-content"); this._createTitlebar(); this._createButtonPane(); this.options.draggable && a.fn.draggable && this._makeDraggable(); this.options.resizable && a.fn.resizable && this._makeResizable(); this._isOpen = !1; this._trackFocus()
            }, _init: function () { this.options.autoOpen && this.open() }, _appendTo: function () { var b = this.options.appendTo; return b && (b.jquery || b.nodeType) ? a(b) : this.document.find(b || "body").eq(0) }, _destroy: function () {
                var a = this.originalPosition; this._untrackInstance();
                this._destroyOverlay(); this.element.removeUniqueId().css(this.originalCss).detach(); this.uiDialog.remove(); this.originalTitle && this.element.attr("title", this.originalTitle); var c = a.parent.children().eq(a.index); c.length && c[0] !== this.element[0] ? c.before(this.element) : a.parent.append(this.element)
            }, widget: function () { return this.uiDialog }, disable: a.noop, enable: a.noop, close: function (b) {
                var c = this; this._isOpen && !1 !== this._trigger("beforeClose", b) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(),
                    this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || a.ui.safeBlur(a.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () { c._trigger("close", b) }))
            }, isOpen: function () { return this._isOpen }, moveToTop: function () { this._moveToTop() }, _moveToTop: function (b, c) {
                var d = !1, g = this.uiDialog.siblings(".ui-front:visible").map(function () { return +a(this).css("z-index") }).get(); g = Math.max.apply(null, g); return g >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index",
                    g + 1), d = !0), d && !c && this._trigger("focus", b), d
            }, open: function () {
                var b = this; return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = a(a.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () { b._focusTabbable(); b._trigger("focus") }), this._makeFocusTarget(), this._trigger("open"),
                    void 0)
            }, _focusTabbable: function () { var a = this._focusedElement; a || (a = this.element.find("[autofocus]")); a.length || (a = this.element.find(":tabbable")); a.length || (a = this.uiDialogButtonPane.find(":tabbable")); a.length || (a = this.uiDialogTitlebarClose.filter(":tabbable")); a.length || (a = this.uiDialog); a.eq(0).trigger("focus") }, _keepFocus: function (b) {
                function c() { var b = a.ui.safeActiveElement(this.document[0]); this.uiDialog[0] === b || a.contains(this.uiDialog[0], b) || this._focusTabbable() } b.preventDefault(); c.call(this);
                this._delay(c)
            }, _createWrapper: function () {
            this.uiDialog = a("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()); this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"); this._on(this.uiDialog, {
                keydown: function (b) {
                    if (this.options.closeOnEscape && !b.isDefaultPrevented() && b.keyCode && b.keyCode === a.ui.keyCode.ESCAPE) return b.preventDefault(), this.close(b), void 0; if (b.keyCode === a.ui.keyCode.TAB && !b.isDefaultPrevented()) {
                        var c = this.uiDialog.find(":tabbable"),
                        d = c.filter(":first"), g = c.filter(":last"); b.target !== g[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function () { g.trigger("focus") }), b.preventDefault()) : (this._delay(function () { d.trigger("focus") }), b.preventDefault())
                    }
                }, mousedown: function (a) { this._moveToTop(a) && this._focusTabbable() }
            }); this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
            }, _createTitlebar: function () {
            this.uiDialogTitlebar =
                a("<div>"); this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"); this._on(this.uiDialogTitlebar, { mousedown: function (b) { a(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }); this.uiDialogTitlebarClose = a("<button type='button'></button>").button({ label: a("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar); this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
                this._on(this.uiDialogTitlebarClose, { click: function (a) { a.preventDefault(); this.close(a) } }); var b = a("<span>").uniqueId().prependTo(this.uiDialogTitlebar); this._addClass(b, "ui-dialog-title"); this._title(b); this.uiDialogTitlebar.prependTo(this.uiDialog); this.uiDialog.attr({ "aria-labelledby": b.attr("id") })
            }, _title: function (a) { this.options.title ? a.text(this.options.title) : a.html("&#160;") }, _createButtonPane: function () {
            this.uiDialogButtonPane = a("<div>"); this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane",
                "ui-widget-content ui-helper-clearfix"); this.uiButtonSet = a("<div>").appendTo(this.uiDialogButtonPane); this._addClass(this.uiButtonSet, "ui-dialog-buttonset"); this._createButtons()
            }, _createButtons: function () {
                var b = this, c = this.options.buttons; return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), a.isEmptyObject(c) || a.isArray(c) && !c.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (a.each(c, function (c, d) {
                    d = a.isFunction(d) ? { click: d, text: c } : d; d = a.extend({ type: "button" }, d);
                    var g = d.click; c = { icon: d.icon, iconPosition: d.iconPosition, showLabel: d.showLabel, icons: d.icons, text: d.text }; delete d.click; delete d.icon; delete d.iconPosition; delete d.showLabel; delete d.icons; "boolean" == typeof d.text && delete d.text; a("<button></button>", d).button(c).appendTo(b.uiButtonSet).on("click", function () { g.apply(b.element[0], arguments) })
                }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
            }, _makeDraggable: function () {
                function b(a) {
                    return {
                        position: a.position,
                        offset: a.offset
                    }
                } var c = this, d = this.options; this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (d, e) { c._addClass(a(this), "ui-dialog-dragging"); c._blockFrames(); c._trigger("dragStart", d, b(e)) }, drag: function (a, d) { c._trigger("drag", a, b(d)) }, stop: function (g, e) {
                        var f = e.offset.left - c.document.scrollLeft(), h = e.offset.top - c.document.scrollTop(); d.position = {
                            my: "left top", at: "left" + (0 <= f ? "+" : "") + f + " top" + (0 <= h ? "+" :
                                "") + h, of: c.window
                        }; c._removeClass(a(this), "ui-dialog-dragging"); c._unblockFrames(); c._trigger("dragStop", g, b(e))
                    }
                })
            }, _makeResizable: function () {
                function b(a) { return { originalPosition: a.originalPosition, originalSize: a.originalSize, position: a.position, size: a.size } } var c = this, d = this.options, g = d.resizable, f = this.uiDialog.css("position"); g = "string" == typeof g ? g : "n,e,s,w,se,sw,ne,nw"; this.uiDialog.resizable({
                    cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: d.maxWidth, maxHeight: d.maxHeight,
                    minWidth: d.minWidth, minHeight: this._minHeight(), handles: g, start: function (d, g) { c._addClass(a(this), "ui-dialog-resizing"); c._blockFrames(); c._trigger("resizeStart", d, b(g)) }, resize: function (a, d) { c._trigger("resize", a, b(d)) }, stop: function (g, e) {
                        var f = c.uiDialog.offset(), h = f.left - c.document.scrollLeft(); f = f.top - c.document.scrollTop(); d.height = c.uiDialog.height(); d.width = c.uiDialog.width(); d.position = { my: "left top", at: "left" + (0 <= h ? "+" : "") + h + " top" + (0 <= f ? "+" : "") + f, of: c.window }; c._removeClass(a(this), "ui-dialog-resizing");
                        c._unblockFrames(); c._trigger("resizeStop", g, b(e))
                    }
                }).css("position", f)
            }, _trackFocus: function () { this._on(this.widget(), { focusin: function (b) { this._makeFocusTarget(); this._focusedElement = a(b.target) } }) }, _makeFocusTarget: function () { this._untrackInstance(); this._trackingInstances().unshift(this) }, _untrackInstance: function () { var b = this._trackingInstances(), c = a.inArray(this, b); -1 !== c && b.splice(c, 1) }, _trackingInstances: function () {
                var a = this.document.data("ui-dialog-instances"); return a || (a = [], this.document.data("ui-dialog-instances",
                    a)), a
            }, _minHeight: function () { var a = this.options; return "auto" === a.height ? a.minHeight : Math.min(a.minHeight, a.height) }, _position: function () { var a = this.uiDialog.is(":visible"); a || this.uiDialog.show(); this.uiDialog.position(this.options.position); a || this.uiDialog.hide() }, _setOptions: function (b) {
                var c = this, d = !1, g = {}; a.each(b, function (a, b) { c._setOption(a, b); a in c.sizeRelatedOptions && (d = !0); a in c.resizableRelatedOptions && (g[a] = b) }); d && (this._size(), this._position()); this.uiDialog.is(":data(ui-resizable)") &&
                    this.uiDialog.resizable("option", g)
            }, _setOption: function (b, c) {
                var d, g, f = this.uiDialog; "disabled" !== b && (this._super(b, c), "appendTo" === b && this.uiDialog.appendTo(this._appendTo()), "buttons" === b && this._createButtons(), "closeText" === b && this.uiDialogTitlebarClose.button({ label: a("<a>").text("" + this.options.closeText).html() }), "draggable" === b && (d = f.is(":data(ui-draggable)"), d && !c && f.draggable("destroy"), !d && c && this._makeDraggable()), "position" === b && this._position(), "resizable" === b && (g = f.is(":data(ui-resizable)"),
                    g && !c && f.resizable("destroy"), g && "string" == typeof c && f.resizable("option", "handles", c), g || !1 === c || this._makeResizable()), "title" === b && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            }, _size: function () {
                var a = this.options; this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }); a.minWidth > a.width && (a.width = a.minWidth); var c = this.uiDialog.css({ height: "auto", width: a.width }).outerHeight(); var d = Math.max(0, a.minHeight - c); var g = "number" == typeof a.maxHeight ? Math.max(0, a.maxHeight -
                    c) : "none"; "auto" === a.height ? this.element.css({ minHeight: d, maxHeight: g, height: "auto" }) : this.element.height(Math.max(0, a.height - c)); this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            }, _blockFrames: function () { this.iframeBlocks = this.document.find("iframe").map(function () { var b = a(this); return a("<div>").css({ position: "absolute", width: b.outerWidth(), height: b.outerHeight() }).appendTo(b.parent()).offset(b.offset())[0] }) }, _unblockFrames: function () {
            this.iframeBlocks &&
                (this.iframeBlocks.remove(), delete this.iframeBlocks)
            }, _allowInteraction: function (b) { return a(b.target).closest(".ui-dialog").length ? !0 : !!a(b.target).closest(".ui-datepicker").length }, _createOverlay: function () {
                if (this.options.modal) {
                    var b = !0; this._delay(function () { b = !1 }); this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function (a) { b || this._allowInteraction(a) || (a.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }); this.overlay = a("<div>").appendTo(this._appendTo());
                    this._addClass(this.overlay, null, "ui-widget-overlay ui-front"); this._on(this.overlay, { mousedown: "_keepFocus" }); this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            }, _destroyOverlay: function () { if (this.options.modal && this.overlay) { var a = this.document.data("ui-dialog-overlays") - 1; a ? this.document.data("ui-dialog-overlays", a) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")); this.overlay.remove(); this.overlay = null } }
        }); !1 !== a.uiBackCompat &&
            a.widget("ui.dialog", a.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function () { this._super(); this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function (a, c) { "dialogClass" === a && this.uiDialog.removeClass(this.options.dialogClass).addClass(c); this._superApply(arguments) } }); a.ui.dialog; a.widget("ui.tooltip", {
                version: "1.12.1", options: {
                    classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function () { var b = a(this).attr("title") || ""; return a("<a>").text(b).html() }, hide: !0, items: "[title]:not([disabled])",
                    position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null
                }, _addDescribedBy: function (b, c) { var d = (b.attr("aria-describedby") || "").split(/\s+/); d.push(c); b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" "))) }, _removeDescribedBy: function (b) {
                    var c = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/); c = a.inArray(c, d); -1 !== c && d.splice(c, 1); b.removeData("ui-tooltip-id"); (d = a.trim(d.join(" "))) ? b.attr("aria-describedby",
                        d) : b.removeAttr("aria-describedby")
                }, _create: function () { this._on({ mouseover: "open", focusin: "open" }); this.tooltips = {}; this.parents = {}; this.liveRegion = a("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body); this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"); this.disabledTitles = a([]) }, _setOption: function (b, c) { var d = this; this._super(b, c); "content" === b && a.each(this.tooltips, function (a, b) { d._updateContent(b.element) }) }, _setOptionDisabled: function (a) {
                    this[a ?
                        "_disable" : "_enable"]()
                }, _disable: function () { var b = this; a.each(this.tooltips, function (c, d) { c = a.Event("blur"); c.target = c.currentTarget = d.element[0]; b.close(c, !0) }); this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () { var b = a(this); return b.is("[title]") ? b.data("ui-tooltip-title", b.attr("title")).removeAttr("title") : void 0 })) }, _enable: function () {
                    this.disabledTitles.each(function () { var b = a(this); b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title")) });
                    this.disabledTitles = a([])
                }, open: function (b) {
                    var c = this, d = a(b ? b.target : this.element).closest(this.options.items); d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function () { var b, d = a(this); d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)); d.attr("title") && (d.uniqueId(), c.parents[this.id] = { element: this, title: d.attr("title") }, d.attr("title", "")) }),
                        this._registerCloseHandlers(b, d), this._updateContent(d, b))
                }, _updateContent: function (a, c) { var b, d = this.options.content, f = this, h = c ? c.type : null; return "string" == typeof d || d.nodeType || d.jquery ? this._open(c, a, d) : (b = d.call(a[0], function (b) { f._delay(function () { a.data("ui-tooltip-open") && (c && (c.type = h), this._open(c, a, b)) }) }), b && this._open(c, a, b), void 0) }, _open: function (b, c, d) {
                    function g(a) { h.of = a; l.is(":hidden") || l.position(h) } var e, f, h = a.extend({}, this.options.position); if (d) {
                        if (e = this._find(c)) return e.tooltip.find(".ui-tooltip-content").html(d),
                            void 0; c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title")); e = this._tooltip(c); var l = e.tooltip; this._addDescribedBy(c, l.attr("id")); l.find(".ui-tooltip-content").html(d); this.liveRegion.children().hide(); d = a("<div>").html(l.find(".ui-tooltip-content").html()); d.removeAttr("name").find("[name]").removeAttr("name"); d.removeAttr("id").find("[id]").removeAttr("id"); d.appendTo(this.liveRegion); this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, { mousemove: g }),
                                g(b)) : l.position(a.extend({ of: c }, this.options.position)); l.hide(); this._show(l, this.options.show); this.options.track && this.options.show && this.options.show.delay && (f = this.delayedShow = setInterval(function () { l.is(":visible") && (g(h.of), clearInterval(f)) }, a.fx.interval)); this._trigger("open", b, { tooltip: l })
                    }
                }, _registerCloseHandlers: function (b, c) {
                    var d = { keyup: function (b) { b.keyCode === a.ui.keyCode.ESCAPE && (b = a.Event(b), b.currentTarget = c[0], this.close(b, !0)) } }; c[0] !== this.element[0] && (d.remove = function () { this._removeTooltip(this._find(c).tooltip) });
                    b && "mouseover" !== b.type || (d.mouseleave = "close"); b && "focusin" !== b.type || (d.focusout = "close"); this._on(!0, c, d)
                }, close: function (b) {
                    var c, d = this, g = a(b ? b.currentTarget : this.element), f = this._find(g); return f ? (c = f.tooltip, f.closing || (clearInterval(this.delayedShow), g.data("ui-tooltip-title") && !g.attr("title") && g.attr("title", g.data("ui-tooltip-title")), this._removeDescribedBy(g), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function () { d._removeTooltip(a(this)) }), g.removeData("ui-tooltip-open"), this._off(g,
                        "mouseleave focusout keyup"), g[0] !== this.element[0] && this._off(g, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function (b, c) { a(c.element).attr("title", c.title); delete d.parents[b] }), f.closing = !0, this._trigger("close", b, { tooltip: c }), f.hiding || (f.closing = !1)), void 0) : (g.removeData("ui-tooltip-open"), void 0)
                }, _tooltip: function (b) {
                    var c = a("<div>").attr("role", "tooltip"), d = a("<div>").appendTo(c), g = c.uniqueId().attr("id"); return this._addClass(d, "ui-tooltip-content"),
                        this._addClass(c, "ui-tooltip", "ui-widget ui-widget-content"), c.appendTo(this._appendTo(b)), this.tooltips[g] = { element: b, tooltip: c }
                }, _find: function (a) { return (a = a.data("ui-tooltip-id")) ? this.tooltips[a] : null }, _removeTooltip: function (a) { a.remove(); delete this.tooltips[a.attr("id")] }, _appendTo: function (a) { a = a.closest(".ui-front, dialog"); return a.length || (a = this.document[0].body), a }, _destroy: function () {
                    var b = this; a.each(this.tooltips, function (c, d) {
                        var g = a.Event("blur"); d = d.element; g.target = g.currentTarget =
                            d[0]; b.close(g, !0); a("#" + c).remove(); d.data("ui-tooltip-title") && (d.attr("title") || d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title"))
                    }); this.liveRegion.remove()
                }
            }); !1 !== a.uiBackCompat && a.widget("ui.tooltip", a.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function () { var a = this._superApply(arguments); return this.options.tooltipClass && a.tooltip.addClass(this.options.tooltipClass), a } }); a.ui.tooltip; a.effects = { effect: {} }; (function (a, c) {
                function b(a, b, c) {
                    var d = r[b.type] || {};
                    return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : a > d.max ? d.max : a)
                } function d(b) { var d = l(), g = d._rgba = []; return b = b.toLowerCase(), t(k, function (a, e) { var f; a = (a = e.re.exec(b)) && e.parse(a); e = e.space || "rgba"; return a ? (f = d[e](a), d[p[e].cache] = f[p[e].cache], g = d._rgba = f._rgba, !1) : c }), g.length ? ("0,0,0,0" === g.join() && a.extend(g, z.transparent), d) : z[b] } function f(a, b, c) { return c = (c + 1) % 1, 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a } var h = /^([\-+])=\s*(\d+\.?\d*)/,
                    k = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (a) { return [a[1], a[2], a[3], a[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (a) { return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (a) { return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)] } }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (a) {
                            return [parseInt(a[1] +
                                a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                        }
                    }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)%\s*,\s*(\d+(?:\.\d+)?)%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (a) { return [a[1], a[2] / 100, a[3] / 100, a[4]] } }], l = a.Color = function (b, c, d, g) { return new a.Color.fn.parse(b, c, d, g) }, p = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                    r = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, v = l.support = {}, w = a("<p>")[0], t = a.each; w.style.cssText = "background-color:rgba(1,1,1,.5)"; v.rgba = -1 < w.style.backgroundColor.indexOf("rgba"); t(p, function (a, b) { b.cache = "_" + a; b.props.alpha = { idx: 3, type: "percent", def: 1 } }); l.fn = a.extend(l.prototype, {
                        parse: function (g, e, f, h) {
                            if (g === c) return this._rgba = [null, null, null, null], this; (g.jquery || g.nodeType) && (g = a(g).css(e), e = c); var m = this, k = a.type(g), n = this._rgba = []; return e !== c && (g = [g, e, f, h],
                                k = "array"), "string" === k ? this.parse(d(g) || z._default) : "array" === k ? (t(p.rgba.props, function (a, c) { n[c.idx] = b(g[c.idx], c) }), this) : "object" === k ? (g instanceof l ? t(p, function (a, b) { g[b.cache] && (m[b.cache] = g[b.cache].slice()) }) : t(p, function (c, d) { var e = d.cache; t(d.props, function (a, c) { if (!m[e] && d.to) { if ("alpha" === a || null == g[a]) return; m[e] = d.to(m._rgba) } m[e][c.idx] = b(g[a], c, !0) }); m[e] && 0 > a.inArray(null, m[e].slice(0, 3)) && (m[e][3] = 1, d.from && (m._rgba = d.from(m[e]))) }), this) : c
                        }, is: function (a) {
                            var b = l(a), d = !0, g = this;
                            return t(p, function (a, e) { var f, h = b[e.cache]; return h && (f = g[e.cache] || e.to && e.to(g._rgba) || [], t(e.props, function (a, b) { return null != h[b.idx] ? d = h[b.idx] === f[b.idx] : c })), d }), d
                        }, _space: function () { var a = [], b = this; return t(p, function (c, d) { b[d.cache] && a.push(c) }), a.pop() }, transition: function (a, c) {
                            var d = l(a); a = d._space(); var g = p[a], e = 0 === this.alpha() ? l("transparent") : this, f = e[g.cache] || g.to(e._rgba), h = f.slice(); return d = d[g.cache], t(g.props, function (a, g) {
                                a = g.idx; var e = f[a], m = d[a], l = r[g.type] || {}; null !== m &&
                                    (null === e ? h[a] = m : (l.mod && (m - e > l.mod / 2 ? e += l.mod : e - m > l.mod / 2 && (e -= l.mod)), h[a] = b((m - e) * c + e, g)))
                            }), this[a](h)
                        }, blend: function (b) { if (1 === this._rgba[3]) return this; var c = this._rgba.slice(), d = c.pop(), g = l(b)._rgba; return l(a.map(c, function (a, b) { return (1 - d) * g[b] + d * a })) }, toRgbaString: function () { var b = "rgba(", c = a.map(this._rgba, function (a, b) { return null == a ? 2 < b ? 1 : 0 : a }); return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")" }, toHslaString: function () {
                            var b = "hsla(", c = a.map(this.hsla(), function (a, b) {
                                return null == a &&
                                    (a = 2 < b ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                            }); return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                        }, toHexString: function (b) { var c = this._rgba.slice(), d = c.pop(); return b && c.push(~~(255 * d)), "#" + a.map(c, function (a) { return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a }).join("") }, toString: function () { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
                    }); l.fn.parse.prototype = l.fn; p.hsla.to = function (a) {
                        if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]]; var b, c, d = a[0] / 255, g = a[1] / 255,
                            e = a[2] / 255; a = a[3]; var f = Math.max(d, g, e), h = Math.min(d, g, e), m = f - h, l = f + h, k = .5 * l; return b = h === f ? 0 : d === f ? 60 * (g - e) / m + 360 : g === f ? 60 * (e - d) / m + 120 : 60 * (d - g) / m + 240, c = 0 === m ? 0 : .5 >= k ? m / l : m / (2 - l), [Math.round(b) % 360, c, k, null == a ? 1 : a]
                    }; p.hsla.from = function (a) { if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]]; var b = a[0] / 360, c = a[1], d = a[2]; a = a[3]; c = .5 >= d ? d * (1 + c) : d + c - d * c; d = 2 * d - c; return [Math.round(255 * f(d, c, b + 1 / 3)), Math.round(255 * f(d, c, b)), Math.round(255 * f(d, c, b - 1 / 3)), a] }; t(p, function (d, g) {
                        var e = g.props, f =
                            g.cache, m = g.to, k = g.from; l.fn[d] = function (d) { if (m && !this[f] && (this[f] = m(this._rgba)), d === c) return this[f].slice(); var g, h = a.type(d), n = "array" === h || "object" === h ? d : arguments, q = this[f].slice(); return t(e, function (a, c) { a = n["object" === h ? a : c.idx]; null == a && (a = q[c.idx]); q[c.idx] = b(a, c) }), k ? (g = l(k(q)), g[f] = q, g) : l(q) }; t(e, function (b, c) {
                            l.fn[b] || (l.fn[b] = function (g) {
                                var e, f = a.type(g), m = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d, l = this[m](), k = l[c.idx]; return "undefined" === f ? k : ("function" === f && (g = g.call(this, k), f = a.type(g)),
                                    null == g && c.empty ? this : ("string" === f && (e = h.exec(g), e && (g = k + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1))), l[c.idx] = g, this[m](l)))
                            })
                            })
                    }); l.hook = function (b) {
                        b = b.split(" "); t(b, function (b, c) {
                        a.cssHooks[c] = {
                            set: function (b, g) {
                                var e, f = ""; if ("transparent" !== g && ("string" !== a.type(g) || (e = d(g)))) {
                                    if (g = l(e || g), !v.rgba && 1 !== g._rgba[3]) { for (e = "backgroundColor" === c ? b.parentNode : b; ("" === f || "transparent" === f) && e && e.style;)try { f = a.css(e, "backgroundColor"), e = e.parentNode } catch (C) { } g = g.blend(f && "transparent" !== f ? f : "_default") } g =
                                        g.toRgbaString()
                                } try { b.style[c] = g } catch (C) { }
                            }
                        }; a.fx.step[c] = function (b) { b.colorInit || (b.start = l(b.elem, c), b.end = l(b.end), b.colorInit = !0); a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos)) }
                        })
                    }; l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"); a.cssHooks.borderColor = { expand: function (a) { var b = {}; return t(["Top", "Right", "Bottom", "Left"], function (c, d) { b["border" + d + "Color"] = a }), b } };
                var z = a.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
            })(a); (function () {
                function b(b) {
                    var c = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle, d = {}; if (c && c.length && c[0] && c[c[0]]) for (b = c.length; b--;) {
                        var g =
                            c[b]; "string" == typeof c[g] && (d[a.camelCase(g)] = c[g])
                    } else for (g in c) "string" == typeof c[g] && (d[g] = c[g]); return d
                } var c = ["add", "remove", "toggle"], d = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (b, c) { a.fx.step[c] = function (b) { ("none" !== b.end && !b.setAttr || 1 === b.pos && !b.setAttr) && (a.style(b.elem, c, b.end), b.setAttr = !0) } }); a.fn.addBack || (a.fn.addBack =
                    function (a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }); a.effects.animateClass = function (g, e, f, h) {
                        var m = a.speed(e, f, h); return this.queue(function () {
                            var e = a(this), f = e.attr("class") || "", h = m.children ? e.find("*").addBack() : e; h = h.map(function () { return { el: a(this), start: b(this) } }); var l = function () { a.each(c, function (a, b) { g[b] && e[b + "Class"](g[b]) }) }; l(); h = h.map(function () {
                            this.end = b(this.el[0]); var c = this.start, g = this.end, e, f = {}; for (e in g) {
                                var h = g[e]; c[e] !== h && (d[e] || (a.fx.step[e] ||
                                    !isNaN(parseFloat(h))) && (f[e] = h))
                            } return this.diff = f, this
                            }); e.attr("class", f); h = h.map(function () { var b = this, c = a.Deferred(), d = a.extend({}, m, { queue: !1, complete: function () { c.resolve(b) } }); return this.el.animate(this.diff, d), c.promise() }); a.when.apply(a, h.get()).done(function () { l(); a.each(arguments, function () { var b = this.el; a.each(this.diff, function (a) { b.css(a, "") }) }); m.complete.call(e[0]) })
                        })
                    }; a.fn.extend({
                        addClass: function (b) {
                            return function (c, d, g, e) {
                                return d ? a.effects.animateClass.call(this, { add: c },
                                    d, g, e) : b.apply(this, arguments)
                            }
                        }(a.fn.addClass), removeClass: function (b) { return function (c, d, g, e) { return 1 < arguments.length ? a.effects.animateClass.call(this, { remove: c }, d, g, e) : b.apply(this, arguments) } }(a.fn.removeClass), toggleClass: function (b) { return function (c, d, g, e, f) { return "boolean" == typeof d || void 0 === d ? g ? a.effects.animateClass.call(this, d ? { add: c } : { remove: c }, g, e, f) : b.apply(this, arguments) : a.effects.animateClass.call(this, { toggle: c }, d, g, e) } }(a.fn.toggleClass), switchClass: function (b, c, d, e, f) {
                            return a.effects.animateClass.call(this,
                                { add: c, remove: b }, d, e, f)
                        }
                    })
            })(); (function () {
                function b(b, c, d, e) { return a.isPlainObject(b) && (c = b, b = b.effect), b = { effect: b }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b } function c(b) {
                    return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ?
                        a.isFunction(b) ? !0 : "object" != typeof b || b.effect ? !1 : !0 : !0
                } function d(a, b) { var c = b.outerWidth(); b = b.outerHeight(); a = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(a) || ["", 0, c, b, 0]; return { top: parseFloat(a[1]) || 0, right: "auto" === a[2] ? c : parseFloat(a[2]), bottom: "auto" === a[3] ? b : parseFloat(a[3]), left: parseFloat(a[4]) || 0 } } a.expr && a.expr.filters && a.expr.filters.animated && (a.expr.filters.animated = function (b) {
                    return function (c) {
                        return !!a(c).data("ui-effects-animated") ||
                            b(c)
                    }
                }(a.expr.filters.animated)); !1 !== a.uiBackCompat && a.extend(a.effects, {
                    save: function (a, b) { for (var c = 0, d = b.length; d > c; c++)null !== b[c] && a.data("ui-effects-" + b[c], a[0].style[b[c]]) }, restore: function (a, b) { for (var c, d = 0, g = b.length; g > d; d++)null !== b[d] && (c = a.data("ui-effects-" + b[d]), a.css(b[d], c)) }, setMode: function (a, b) { return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b }, createWrapper: function (b) {
                        if (b.parent().is(".ui-effects-wrapper")) return b.parent(); var c = {
                            width: b.outerWidth(!0), height: b.outerHeight(!0),
                            "float": b.css("float")
                        }, d = a("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), e = { width: b.width(), height: b.height() }, g = document.activeElement; try { g.id } catch (p) { g = document.body } return b.wrap(d), (b[0] === g || a.contains(b[0], g)) && a(g).trigger("focus"), d = b.parent(), "static" === b.css("position") ? (d.css({ position: "relative" }), b.css({ position: "relative" })) : (a.extend(c, { position: b.css("position"), zIndex: b.css("z-index") }), a.each(["top",
                            "left", "bottom", "right"], function (a, d) { c[d] = b.css(d); isNaN(parseInt(c[d], 10)) && (c[d] = "auto") }), b.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), b.css(e), d.css(c).show()
                    }, removeWrapper: function (b) { var c = document.activeElement; return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).trigger("focus")), b }
                }); a.extend(a.effects, {
                    version: "1.12.1", define: function (b, c, d) {
                        return d || (d = c, c = "effect"), a.effects.effect[b] = d, a.effects.effect[b].mode =
                            c, d
                    }, scaledDimensions: function (a, b, c) { if (0 === b) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; var d = "horizontal" !== c ? (b || 100) / 100 : 1; b = "vertical" !== c ? (b || 100) / 100 : 1; return { height: a.height() * b, width: a.width() * d, outerHeight: a.outerHeight() * b, outerWidth: a.outerWidth() * d } }, clipToBox: function (a) { return { width: a.clip.right - a.clip.left, height: a.clip.bottom - a.clip.top, left: a.clip.left, top: a.clip.top } }, unshift: function (a, b, c) { var d = a.queue(); 1 < b && d.splice.apply(d, [1, 0].concat(d.splice(b, c))); a.dequeue() },
                    saveStyle: function (a) { a.data("ui-effects-style", a[0].style.cssText) }, restoreStyle: function (a) { a[0].style.cssText = a.data("ui-effects-style") || ""; a.removeData("ui-effects-style") }, mode: function (a, b) { a = a.is(":hidden"); return "toggle" === b && (b = a ? "show" : "hide"), (a ? "hide" === b : "show" === b) && (b = "none"), b }, getBaseline: function (a, b) {
                        switch (a[0]) { case "top": var c = 0; break; case "middle": c = .5; break; case "bottom": c = 1; break; default: c = a[0] / b.height }switch (a[1]) {
                            case "left": a = 0; break; case "center": a = .5; break; case "right": a =
                                1; break; default: a = a[1] / b.width
                        }return { x: a, y: c }
                    }, createPlaceholder: function (b) {
                        var c, d = b.css("position"), e = b.position(); return b.css({ marginTop: b.css("marginTop"), marginBottom: b.css("marginBottom"), marginLeft: b.css("marginLeft"), marginRight: b.css("marginRight") }).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()), /^(static|relative)/.test(d) && (d = "absolute", c = a("<" + b[0].nodeName + ">").insertAfter(b).css({
                            display: /^(inline|ruby)/.test(b.css("display")) ? "inline-block" : "block", visibility: "hidden",
                            marginTop: b.css("marginTop"), marginBottom: b.css("marginBottom"), marginLeft: b.css("marginLeft"), marginRight: b.css("marginRight"), "float": b.css("float")
                        }).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).addClass("ui-effects-placeholder"), b.data("ui-effects-placeholder", c)), b.css({ position: d, left: e.left, top: e.top }), c
                    }, removePlaceholder: function (a) { var b = a.data("ui-effects-placeholder"); b && (b.remove(), a.removeData("ui-effects-placeholder")) }, cleanUp: function (b) { a.effects.restoreStyle(b); a.effects.removePlaceholder(b) },
                    setTransition: function (b, c, d, e) { return e = e || {}, a.each(c, function (a, c) { a = b.cssUnit(c); 0 < a[0] && (e[c] = a[0] * d + a[1]) }), e }
                }); a.fn.extend({
                    effect: function () {
                        function c(b) { function c() { h.removeData("ui-effects-animated"); a.effects.cleanUp(h); "hide" === d.mode && h.hide(); g() } function g() { a.isFunction(r) && r.call(h[0]); a.isFunction(b) && b() } var h = a(this); d.mode = w.shift(); !1 === a.uiBackCompat || f ? "none" === d.mode ? (h[v](), g()) : e.call(h[0], d, c) : (h.is(":hidden") ? "hide" === v : "show" === v) ? (h[v](), g()) : e.call(h[0], d, g) } var d =
                            b.apply(this, arguments), e = a.effects.effect[d.effect], f = e.mode, h = d.queue, k = h || "fx", r = d.complete, v = d.mode, w = [], t = function (b) { var c = a(this), d = a.effects.mode(c, v) || f; c.data("ui-effects-animated", !0); w.push(d); f && ("show" === d || d === f && "hide" === d) && c.show(); f && "none" === d || a.effects.saveStyle(c); a.isFunction(b) && b() }; return a.fx.off || !e ? v ? this[v](d.duration, r) : this.each(function () { r && r.call(this) }) : !1 === h ? this.each(t).each(c) : this.queue(k, t).queue(k, c)
                    }, show: function (a) {
                        return function (d) {
                            if (c(d)) return a.apply(this,
                                arguments); var e = b.apply(this, arguments); return e.mode = "show", this.effect.call(this, e)
                        }
                    }(a.fn.show), hide: function (a) { return function (d) { if (c(d)) return a.apply(this, arguments); var e = b.apply(this, arguments); return e.mode = "hide", this.effect.call(this, e) } }(a.fn.hide), toggle: function (a) { return function (d) { if (c(d) || "boolean" == typeof d) return a.apply(this, arguments); var e = b.apply(this, arguments); return e.mode = "toggle", this.effect.call(this, e) } }(a.fn.toggle), cssUnit: function (b) {
                        var c = this.css(b), d = []; return a.each(["em",
                            "px", "%", "pt"], function (a, b) { 0 < c.indexOf(b) && (d = [parseFloat(c), b]) }), d
                    }, cssClip: function (a) { return a ? this.css("clip", "rect(" + a.top + "px " + a.right + "px " + a.bottom + "px " + a.left + "px)") : d(this.css("clip"), this) }, transfer: function (b, c) {
                        var d = a(this), e = a(b.to), g = "fixed" === e.css("position"), f = a("body"), h = g ? f.scrollTop() : 0; f = g ? f.scrollLeft() : 0; var k = e.offset(); e = { top: k.top - h, left: k.left - f, height: e.innerHeight(), width: e.innerWidth() }; k = d.offset(); var m = a("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(b.className).css({
                            top: k.top -
                                h, left: k.left - f, height: d.innerHeight(), width: d.innerWidth(), position: g ? "fixed" : "absolute"
                        }).animate(e, b.duration, b.easing, function () { m.remove(); a.isFunction(c) && c() })
                    }
                }); a.fx.step.clip = function (b) {
                b.clipInit || (b.start = a(b.elem).cssClip(), "string" == typeof b.end && (b.end = d(b.end, b.elem)), b.clipInit = !0); a(b.elem).cssClip({
                    top: b.pos * (b.end.top - b.start.top) + b.start.top, right: b.pos * (b.end.right - b.start.right) + b.start.right, bottom: b.pos * (b.end.bottom - b.start.bottom) + b.start.bottom, left: b.pos * (b.end.left -
                        b.start.left) + b.start.left
                })
                }
            })(); (function () {
                var b = {}; a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (a, d) { b[d] = function (b) { return Math.pow(b, a + 2) } }); a.extend(b, {
                    Sine: function (a) { return 1 - Math.cos(a * Math.PI / 2) }, Circ: function (a) { return 1 - Math.sqrt(1 - a * a) }, Elastic: function (a) { return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15) }, Back: function (a) { return a * a * (3 * a - 2) }, Bounce: function (a) {
                        for (var b, c = 4; ((b = Math.pow(2, --c)) - 1) / 11 > a;); return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 *
                            b - 2) / 22 - a, 2)
                    }
                }); a.each(b, function (b, d) { a.easing["easeIn" + b] = d; a.easing["easeOut" + b] = function (a) { return 1 - d(1 - a) }; a.easing["easeInOut" + b] = function (a) { return .5 > a ? d(2 * a) / 2 : 1 - d(-2 * a + 2) / 2 } })
            })(); a.effects; a.effects.define("fade", "toggle", function (b, c) { var d = "show" === b.mode; a(this).css("opacity", d ? 0 : 1).animate({ opacity: d ? 1 : 0 }, { queue: !1, duration: b.duration, easing: b.easing, complete: c }) })
}); function Bootstrap4ModalDialogManager() { this.modals = []; this.callbacks = [] } Bootstrap4ModalDialogManager.prototype.Unregister = function (a) { a = this.modals.indexOf(a); -1 !== a && (this.modals.splice(a, 1), 0 === this.modals.length && this.callbacks.forEach(function (a, f, h) { a(!1) })) }; Bootstrap4ModalDialogManager.prototype.Register = function (a) { -1 === this.modals.indexOf(a) && (0 === this.modals.length && this.callbacks.forEach(function (a, f, h) { a(!0) }), this.modals.push(a)) };
Bootstrap4ModalDialogManager.prototype.CloseForegroundDialog = function () { 0 !== this.modals.length && this.modals[this.modals.length - 1].Hide() }; Bootstrap4ModalDialogManager.prototype.CloseAllDialogs = function () { 0 !== this.modals.length && this.modals.forEach(function (a, d, f) { a.Hide() }) }; Bootstrap4ModalDialogManager.prototype.OnModalChanged = function (a) { "function" === typeof a && this.callbacks.push(a) }; var DialogManager = new Bootstrap4ModalDialogManager;
function Bootstrap4ModalDialog(a, d, f, h, k) {
    if (!d) throw "Dialog without content is surely something to be seen!??"; this.objState = {}; this.parent = a; var b = typeof d; this.dialogContent = "string" === b ? $("<div>").addClass("modal-body").text(d) : "function" === b ? $("<div>").addClass("modal-body").append(d(this)) : $("<div>").addClass("modal-body").append(d); this.callbacks = []; var c = this; d = ["bootstrap-dialog", "modal", "fade"]; k = k || Bootstrap4ModalDialog.Type.Default; switch (k || Bootstrap4ModalDialog.Type.Default) {
        case Bootstrap4ModalDialog.Type.Info: d.push("type-info");
            break; case Bootstrap4ModalDialog.Type.Success: d.push("type-succes"); break; case Bootstrap4ModalDialog.Type.Primary: d.push("type-primary"); break; case Bootstrap4ModalDialog.Type.Warning: d.push("type-warning"); break; case Bootstrap4ModalDialog.Type.Danger: d.push("type-danger"); break; default: d.push("type-default")
    }if (h) if (k = typeof h, "number" === k) switch (h) {
        case Bootstrap4ModalDialog.Buttons.Retry: this.dialogButtons = $("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({
            type: "button",
            "modal-IsDefault": "true"
        }).text("Retry").click(function (a) { c.result = 1 })); break; case Bootstrap4ModalDialog.Buttons.OK: this.dialogButtons = $("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({ type: "button", "modal-IsDefault": "true" }).text("OK").click(function (a) { c.result = 1 })); break; case Bootstrap4ModalDialog.Buttons.Close: this.dialogButtons = $("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({ type: "button", "modal-IsDefault": "true" }).text("Close").click(function (a) {
        c.result =
            1
        })); break; case Bootstrap4ModalDialog.Buttons.YesNo: this.dialogButtons = $("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({ type: "button", "modal-IsDefault": "true" }).text("Yes").click(function (a) { c.result = 1 }), [$("<button>").addClass("btn btn-secondary").attr({ type: "button", "modal-IsCancel": "true", "data-dismiss": "modal" }).text("No")]); break; case Bootstrap4ModalDialog.Buttons.YesNoDanger: this.dialogButtons = $("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-danger").attr({
            type: "button",
            "modal-IsDefault": "true"
        }).text("Yes").click(function (a) { c.result = 1 }), [$("<button>").addClass("btn btn-primary").attr({ type: "button", "modal-IsCancel": "true", "data-dismiss": "modal" }).text("No")])
    } else {
        if ("object" === k && h.length && 0 < h.length) {
        this.dialogButtons = $("<div>").addClass("modal-footer"); var e; h.forEach(function (a, b, d) {
            e = $("<button>").attr("type", "button"); a.cssClass && e.addClass(a.cssClass); a.label && e.text(a.label); "function" === typeof a.action ? e.click(function (b) { b.stopPropagation(); a.action(c) }) :
                e.click(function (a) { a.stopPropagation() }); this.append(e)
        }, this.dialogButtons)
        }
    } else this.dialogButtons = $("<div>").addClass("modal-footer").append($("<button>").addClass("btn btn-primary").attr({ type: "button", "modal-IsDefault": "true" }).text("OK").click(function (a) { c.result = 1 })); f || (f = "Dialog"); this.dialogHeader = $("<div>").addClass("modal-header").append($("<h5>").addClass("modal-title").text(f), [$("<button>").addClass("close").attr({ role: "button", "aria-label": "Close", "data-dismiss": "modal" }).append($("<span>").attr("aria-hidden",
        "true").html("&times;"))]); this.dialog = $("<div>").addClass(d).attr({ tabindex: "-1", role: "dialog", "aria-labelledby": "ModalLabel", "aria-hidden": "true", "data-backdrop": "false" }).append($("<div>").addClass("modal-dialog modal-dialog-centered").attr("role", "document").append($("<div>").addClass("modal-content").append(this.dialogHeader, [this.dialogContent, this.dialogButtons]).click(function (a) { if (a.target) { var b = $(a.target); b.is("button") || b.is("a") || b.hasClass("clickable") || a.stopPropagation() } else a.stopPropagation() }).draggable({
            handle: ".modal-header",
            containment: a
        })))
} Bootstrap4ModalDialog.prototype.SetData = function (a, d) { this.objState[a] = d }; Bootstrap4ModalDialog.prototype.GetData = function (a) { return this.objState[a] }; Bootstrap4ModalDialog.prototype.Show = function (a) { var d = this; a ? a.append(this.dialog) : this.parent.append(this.dialog); this.dialog.on("hidden.bs.modal", function (a) { window.DialogManager.Unregister(d); d.TriggerCallback(); d.Dispose() }); this.dialog.on("show.bs.modal", function (a) { window.DialogManager.Register(d) }); this.dialog.modal() };
Bootstrap4ModalDialog.prototype.RegisterCallback = function (a) { "function" === typeof a && this.callbacks.push(a) }; Bootstrap4ModalDialog.prototype.TriggerCallback = function () { 0 !== this.callbacks.length && this.callbacks.forEach(function (a, d, f) { a(this, this.result) }, this) }; Bootstrap4ModalDialog.prototype.Hide = function () { this.dialog.modal("hide") }; Bootstrap4ModalDialog.prototype.Dispose = function () { this.dialog.modal("dispose"); this.dialog.empty(); this.dialog.detach() };
Bootstrap4ModalDialog.Buttons = { OK: 0, Close: 1, YesNo: 2, YesNoDanger: 3, Retry: 4 }; Bootstrap4ModalDialog.Type = { Default: 0, Info: 1, Primary: 2, Success: 3, Warning: 4, Danger: 5 };/*
 clipboard.js v2.0.0
 https://zenorocha.github.io/clipboard.js

 Licensed MIT ? Zeno Rocha
*/
!function (a, d) { "object" == typeof exports && "object" == typeof module ? module.exports = d() : "function" == typeof define && define.amd ? define([], d) : "object" == typeof exports ? exports.ClipboardJS = d() : a.ClipboardJS = d() }(this, function () {
    return function (a) {
        function d(h) { if (f[h]) return f[h].exports; var k = f[h] = { i: h, l: !1, exports: {} }; return a[h].call(k.exports, k, k.exports, d), k.l = !0, k.exports } var f = {}; return d.m = a, d.c = f, d.i = function (a) { return a }, d.d = function (a, f, b) {
            d.o(a, f) || Object.defineProperty(a, f, {
                configurable: !1, enumerable: !0,
                get: b
            })
        }, d.n = function (a) { var f = a && a.__esModule ? function () { return a.default } : function () { return a }; return d.d(f, "a", f), f }, d.o = function (a, d) { return Object.prototype.hasOwnProperty.call(a, d) }, d.p = "", d(d.s = 3)
    }([function (a, d, f) {
        var h, k, b; !function (c, e) { k = [a, f(7)]; h = e; void 0 !== (b = "function" == typeof h ? h.apply(d, k) : h) && (a.exports = b) }(0, function (a, b) {
            var c = b && b.__esModule ? b : { default: b }, d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) {
                return a && "function" ==
                    typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
            }, e = function () { function a(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c]; d.enumerable = d.enumerable || !1; d.configurable = !0; "value" in d && (d.writable = !0); Object.defineProperty(a, d.key, d) } } return function (b, c, d) { return c && a(b.prototype, c), d && a(b, d), b } }(); b = function () {
                function a(b) { if (!(this instanceof a)) throw new TypeError("Cannot call a class as a function"); this.resolveOptions(b); this.initSelection() } return e(a, [{
                    key: "resolveOptions",
                    value: function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; this.action = a.action; this.container = a.container; this.emitter = a.emitter; this.target = a.target; this.text = a.text; this.trigger = a.trigger; this.selectedText = "" }
                }, { key: "initSelection", value: function () { this.text ? this.selectFake() : this.target && this.selectTarget() } }, {
                    key: "selectFake", value: function () {
                        var a = this, b = "rtl" == document.documentElement.getAttribute("dir"); this.removeFake(); this.fakeHandlerCallback = function () { return a.removeFake() };
                        this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0; this.fakeElem = document.createElement("textarea"); this.fakeElem.style.fontSize = "12pt"; this.fakeElem.style.border = "0"; this.fakeElem.style.padding = "0"; this.fakeElem.style.margin = "0"; this.fakeElem.style.position = "absolute"; this.fakeElem.style[b ? "right" : "left"] = "-9999px"; this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px"; this.fakeElem.setAttribute("readonly", ""); this.fakeElem.value =
                            this.text; this.container.appendChild(this.fakeElem); this.selectedText = (0, c.default)(this.fakeElem); this.copyText()
                    }
                }, { key: "removeFake", value: function () { this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null); this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null) } }, { key: "selectTarget", value: function () { this.selectedText = (0, c.default)(this.target); this.copyText() } }, {
                    key: "copyText", value: function () {
                        var a =
                            void 0; try { a = document.execCommand(this.action) } catch (p) { a = !1 } this.handleResult(a)
                    }
                }, { key: "handleResult", value: function (a) { this.emitter.emit(a ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) }) } }, { key: "clearSelection", value: function () { this.trigger && this.trigger.focus(); window.getSelection().removeAllRanges() } }, { key: "destroy", value: function () { this.removeFake() } }, {
                    key: "action", set: function () {
                        if (this._action = 0 < arguments.length &&
                            void 0 !== arguments[0] ? arguments[0] : "copy", "copy" !== this._action && "cut" !== this._action) throw Error('Invalid "action" value, use either "copy" or "cut"');
                    }, get: function () { return this._action }
                }, {
                    key: "target", set: function (a) {
                        if (void 0 !== a) {
                            if (!a || "object" !== (void 0 === a ? "undefined" : d(a)) || 1 !== a.nodeType) throw Error('Invalid "target" value, use a valid Element'); if ("copy" === this.action && a.hasAttribute("disabled")) throw Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if ("cut" === this.action && (a.hasAttribute("readonly") || a.hasAttribute("disabled"))) throw Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'); this._target = a
                        }
                    }, get: function () { return this._target }
                }]), a
            }(); a.exports = b
        })
    }, function (a, d, f) {
        function h(a, b, c) { return a.addEventListener(b, c), { destroy: function () { a.removeEventListener(b, c) } } } function k(a, b, c) {
            return Array.prototype.forEach.call(a, function (a) { a.addEventListener(b, c) }), {
                destroy: function () {
                    Array.prototype.forEach.call(a,
                        function (a) { a.removeEventListener(b, c) })
                }
            }
        } var b = f(6), c = f(5); a.exports = function (a, d, f) { if (!a && !d && !f) throw Error("Missing required arguments"); if (!b.string(d)) throw new TypeError("Second argument must be a String"); if (!b.fn(f)) throw new TypeError("Third argument must be a Function"); if (b.node(a)) return h(a, d, f); if (b.nodeList(a)) return k(a, d, f); if (b.string(a)) return c(document.body, a, d, f); throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList"); }
    }, function (a,
        d) {
            function f() { } f.prototype = {
                on: function (a, d, b) { var c = this.e || (this.e = {}); return (c[a] || (c[a] = [])).push({ fn: d, ctx: b }), this }, once: function (a, d, b) { function c() { e.off(a, c); d.apply(b, arguments) } var e = this; return c._ = d, this.on(a, c, b) }, emit: function (a) { var d = [].slice.call(arguments, 1), b = ((this.e || (this.e = {}))[a] || []).slice(), c = 0, e = b.length; for (c; c < e; c++)b[c].fn.apply(b[c].ctx, d); return this }, off: function (a, d) {
                    var b = this.e || (this.e = {}), c = b[a], e = []; if (c && d) for (var f = 0, h = c.length; f < h; f++)c[f].fn !== d && c[f].fn._ !==
                        d && e.push(c[f]); return e.length ? b[a] = e : delete b[a], this
                }
            }; a.exports = f
    }, function (a, d, f) {
        var h, k, b; !function (c, e) { k = [a, f(0), f(2), f(1)]; h = e; void 0 !== (b = "function" == typeof h ? h.apply(d, k) : h) && (a.exports = b) }(0, function (a, b, d, f) {
            function c(a) { return a && a.__esModule ? a : { default: a } } function e(a, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b); a.prototype = Object.create(b && b.prototype, {
                    constructor: {
                        value: a, enumerable: !1, writable: !0,
                        configurable: !0
                    }
                }); b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
            } function g(a, b) { a = "data-clipboard-" + a; if (b.hasAttribute(a)) return b.getAttribute(a) } var h = c(b); b = c(d); var k = c(f), m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) { return typeof a } : function (a) { return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a }, w = function () {
                function a(a, b) {
                    for (var c = 0; c < b.length; c++) {
                        var d = b[c]; d.enumerable = d.enumerable || !1;
                        d.configurable = !0; "value" in d && (d.writable = !0); Object.defineProperty(a, d.key, d)
                    }
                } return function (b, c, d) { return c && a(b.prototype, c), d && a(b, d), b }
            }(); f = function (a) {
                function b(a, c) {
                    if (!(this instanceof b)) throw new TypeError("Cannot call a class as a function"); var d = (b.__proto__ || Object.getPrototypeOf(b)).call(this); if (!this) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); d = !d || "object" != typeof d && "function" != typeof d ? this : d; return d.resolveOptions(c), d.listenClick(a),
                        d
                } return e(b, a), w(b, [{ key: "resolveOptions", value: function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}; this.action = "function" == typeof a.action ? a.action : this.defaultAction; this.target = "function" == typeof a.target ? a.target : this.defaultTarget; this.text = "function" == typeof a.text ? a.text : this.defaultText; this.container = "object" === m(a.container) ? a.container : document.body } }, { key: "listenClick", value: function (a) { var b = this; this.listener = (0, k.default)(a, "click", function (a) { return b.onClick(a) }) } },
                { key: "onClick", value: function (a) { a = a.delegateTarget || a.currentTarget; this.clipboardAction && (this.clipboardAction = null); this.clipboardAction = new h.default({ action: this.action(a), target: this.target(a), text: this.text(a), container: this.container, trigger: a, emitter: this }) } }, { key: "defaultAction", value: function (a) { return g("action", a) } }, { key: "defaultTarget", value: function (a) { if (a = g("target", a)) return document.querySelector(a) } }, { key: "defaultText", value: function (a) { return g("text", a) } }, {
                    key: "destroy", value: function () {
                        this.listener.destroy();
                        this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                    }
                }], [{ key: "isSupported", value: function () { var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"], b = !!document.queryCommandSupported; return ("string" == typeof a ? [a] : a).forEach(function (a) { b = b && !!document.queryCommandSupported(a) }), b } }]), b
            }(b.default); a.exports = f
        })
    }, function (a, d) {
    "undefined" == typeof Element || Element.prototype.matches || (d = Element.prototype, d.matches = d.matchesSelector || d.mozMatchesSelector ||
        d.msMatchesSelector || d.oMatchesSelector || d.webkitMatchesSelector); a.exports = function (a, d) { for (; a && 9 !== a.nodeType;) { if ("function" == typeof a.matches && a.matches(d)) return a; a = a.parentNode } }
    }, function (a, d, f) {
        function h(a, b, d, f, h) { var c = k.apply(this, arguments); return a.addEventListener(d, c, h), { destroy: function () { a.removeEventListener(d, c, h) } } } function k(a, d, f, h) { return function (c) { c.delegateTarget = b(c.target, d); c.delegateTarget && h.call(a, c) } } var b = f(4); a.exports = function (a, b, d, f, k) {
            return "function" == typeof a.addEventListener ?
                h.apply(null, arguments) : "function" == typeof d ? h.bind(null, document).apply(null, arguments) : ("string" == typeof a && (a = document.querySelectorAll(a)), Array.prototype.map.call(a, function (a) { return h(a, b, d, f, k) }))
        }
    }, function (a, d) {
    d.node = function (a) { return void 0 !== a && a instanceof HTMLElement && 1 === a.nodeType }; d.nodeList = function (a) { var f = Object.prototype.toString.call(a); return void 0 !== a && ("[object NodeList]" === f || "[object HTMLCollection]" === f) && "length" in a && (0 === a.length || d.node(a[0])) }; d.string = function (a) {
        return "string" ==
            typeof a || a instanceof String
    }; d.fn = function (a) { return "[object Function]" === Object.prototype.toString.call(a) }
    }, function (a, d) {
    a.exports = function (a) {
        if ("SELECT" === a.nodeName) a.focus(), a = a.value; else if ("INPUT" === a.nodeName || "TEXTAREA" === a.nodeName) { var d = a.hasAttribute("readonly"); d || a.setAttribute("readonly", ""); a.select(); a.setSelectionRange(0, a.value.length); d || a.removeAttribute("readonly"); a = a.value } else {
            a.hasAttribute("contenteditable") && a.focus(); d = window.getSelection(); var f = document.createRange();
            f.selectNodeContents(a); d.removeAllRanges(); d.addRange(f); a = d.toString()
        } return a
    }
    }])
}); var clipboardsupport; function readurlparam(a, d) { d = d || location.search; return decodeURIComponent(((new RegExp("[?|&]" + a + "=([^&;]+?)(&|#|;|$)")).exec(d) || [null, ""])[1].replace(/\+/g, "%20")) || null } function GetUrlParam(a, d) { return (a = readurlparam(a)) ? a : d } function PageReload() { "function" === typeof window.location.reload ? window.location.reload() : window.location = window.location }
function shownotify(a, d) { $.notify({ message: a }, { type: d, placement: { from: "bottom", align: "right" }, animate: { enter: "animated fadeInRight", exit: "animated fadeOutDown" } }) }
function SetLoading(a) { var d = a.find($("div[metroloading]")); d && 0 < d.length || (d = $("<div>").addClass("stretch").addClass("windows8-loading"), d.append($("<b>")), d.append($("<b>")), d.append($("<b>")), d.append($("<b>")), d.append($("<b>")), d = $("<div metroloading>").addClass("midcenter").append(d), $("<div metroloading>").addClass("fixedDiv").addClass("stretch").addClass("disabled").addClass("opacity50").prependTo(a), a.append(d)) }
function GetSvgUnavailable() { return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 40 40" class="icon icons8-Unavailable"><g id="surface1"><path style="fill:#DFF0FE;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke:#4788C7;stroke-opacity:1;stroke-miterlimit:10;" d="M 20 1 C 9.507813 1 1 9.507813 1 20 C 1 30.492188 9.507813 39 20 39 C 30.492188 39 39 30.492188 39 20 C 39 9.507813 30.492188 1 20 1 Z M 6 20 C 6 12.269531 12.269531 6 20 6 C 22.964844 6 25.707031 6.925781 27.96875 8.496094 L 8.496094 27.96875 C 6.925781 25.707031 6 22.964844 6 20 Z M 20 34 C 17.035156 34 14.292969 33.074219 12.03125 31.503906 L 31.503906 12.03125 C 33.074219 14.292969 34 17.035156 34 20 C 34 27.730469 27.730469 34 20 34 Z"></path></g></svg>' }
function RemoveLoading(a) { a.children("div[metroloading]").remove() } String.prototype.ctrim = function (a) { void 0 === a && (a = "s"); return this.replace(new RegExp("^[" + a + "]+"), "").replace(new RegExp("[" + a + "]+$"), "") }; function GetCurrentFolderUrl() { var a = location.pathname.split("/"); a[a.length - 1] ? -1 != a[a.length - 1].indexOf(".") && a.pop() : a.pop(); return a[a.length - 1] } function removefilename(a) { }; function ShowSkillSelection(a, d, f) {
window.SkillCore && (f = [{ label: "선택", cssClass: "btn btn-success", action: function (a) { a.Hide(); "function" === typeof d && d(a.GetData("selectedskillid")) } }], a && f.push({ label: "삭제", cssClass: "btn btn-danger", action: function (a) { a.Hide(); "function" === typeof d && d(null) } }), f.push({ label: "취소", cssClass: "btn btn-default", action: function (a) { a.Hide(); "function" === typeof noCallback && noCallback() } }), (new Bootstrap4ModalDialog($("#dialogs"), function (a) {
    var f = $("<div>").addClass("container"),
    b; for (b in window.SkillCore.ActiveSkillList) window.SkillCore.ActiveSkillList.hasOwnProperty(b) && window.SkillCore.ActiveSkillList[b].IsVisible() && window.SkillCore.ActiveSkillList[b].IsAssignable() && 0 < window.SkillCore.ActiveSkillList[b].GetCurrentSkillLevel() && f.append($("<div>").addClass("row").append($("<div>").addClass("col").append($("<button>").attr("type", "button").addClass("btn btn-primary btn-block").append($("<div>").addClass(["clickthrough", "row", "text-noselect"]).append([$("<div>").addClass("col-md-auto").append($("<img>").attr("src",
        window.SkillCore.ActiveSkillList[b].GetIconURL())), $("<div>").addClass("col").text(window.SkillCore.ActiveSkillList[b].GetName()), $("<div>").addClass("col col-lg-2").text("Lv: " + window.SkillCore.ActiveSkillList[b].GetCurrentSkillLevel() + "/" + window.SkillCore.ActiveSkillList[b].GetMaxLevel())])))).click(function (b) {
            b.stopPropagation(); f.find("button.active").removeClass(["btn-success", "active"]).addClass("btn-primary"); $(this).find("button").removeClass("btn-primary").addClass("active btn-success");
            a.SetData("selectedskillid", $(this).attr("skillid"))
        }).dblclick(function (b) { b.stopPropagation(); a.Hide(); "function" === typeof d && d($(this).attr("skillid")) }).attr("skillid", b)); return $("<div>").addClass("skill-list-select").append(f)
}, " 스킬 선택", f)).Show())
} function GridInfo() { this.IsEmpty = !0; this.myDiv = this.SkillInfo = null }
GridInfo.prototype.Redraw = function () { this.myDiv && (this.myDiv.empty(), this.IsEmpty ? (this.myDiv.append($("<img>").addClass("clickthrough").attr("src", "../skillicons/skillslot_empty_null.png")), this.myDiv.attr("title", "Click the box to select skill")) : (this.myDiv.append($("<img>").addClass("clickthrough").attr("src", this.SkillInfo.GetIconURL())), this.myDiv.attr("title", "Skill: " + this.SkillInfo.GetName() + "\nClick the box to select skill"))) };
GridInfo.prototype.resetinfo = function () { this.IsEmpty = !0; this.SkillInfo = null }; GridInfo.prototype.SetSkill = function (a) { a ? (this.IsEmpty = !1, this.SkillInfo = a) : this.resetinfo(); this.Redraw() }; GridInfo.prototype.UnsetSkill = function () { this.SetSkill(null) };
GridInfo.prototype.GetRender = function () {
    var a = this; this.myDiv = $("<div>").addClass("slotskillimg").click(function (d) { d.preventDefault(); ShowSkillSelection(!a.IsEmpty, function (d) { d ? a.SetSkill(window.SkillCore.SkillList[d]) : a.UnsetSkill() }) }); this.IsEmpty || 0 === this.SkillInfo.GetCurrentSkillLevel() && this.resetinfo(); this.IsEmpty ? (this.myDiv.append($("<img>").addClass("clickthrough").attr("src", "../skillicons/skillslot_empty_null.png")), this.myDiv.attr("title", "Click the box to select skill")) : (this.myDiv.append($("<img>").addClass("clickthrough").attr("src",
        this.SkillInfo.GetIconURL())), this.myDiv.attr("title", "Skill: " + this.SkillInfo.GetName() + "\nClick the box to select skill")); return this.myDiv
}; function SlotGrid() { this.effect2nd = "2_1"; this.effect3rd = "3_1"; this.Column = []; this.Column[0] = this.initRow(); this.Column[1] = this.initRow(); this.Column[2] = this.initRow(); this.Column[3] = this.initRow(); this.Column[4] = this.initRow(); this.Column[5] = this.initRow() } SlotGrid.prototype.getoption = function (a, d) { return $("<option>").val(a).text(d) };
SlotGrid.prototype.initRow = function () { var a = []; a[0] = new GridInfo; a[1] = new GridInfo; a[2] = new GridInfo; return a }; SlotGrid.prototype.IsEmptyColumn = function (a) { for (var d = 0; d < this.Column[a].length; d++)if (!this.GetGridValue(a, d).IsEmpty) return !1; return !0 }; SlotGrid.prototype.IsEmptyTree = function () { for (var a = 0; a < this.Column.length; a++)if (!this.IsEmptyColumn(a)) return !1; return !0 }; SlotGrid.prototype.ResetToEmpty = function () { for (var a = 0; a < this.Column[0].length; a++)for (var d = 0; d < this.Column.length; d++)this.Column[d][a].UnsetSkill() };
SlotGrid.prototype.GetGridValue = function (a, d) { return this.Column[a][d] }; SlotGrid.prototype.SetGridValue = function (a, d, f) { this.Column[a][d].SetSkill(f) }; SlotGrid.prototype.UnsetGridValue = function (a, d) { this.Column[a][d].UnsetSkill() }; SlotGrid.prototype.printfloor = function (a) { for (var d = [], f = 0; f < a.length; f++)d.push($("<div>").addClass("col").append(a[f])); return d }; SlotGrid.prototype.generatefloor = function () { for (var a = [], d = 0; d < this.Column[0].length; d++) { a[d] = []; for (var f = 0; f < this.Column.length; f++)a[d].push(this.Column[f][d].GetRender()) } return a };
SlotGrid.prototype.GetRender = function () {
    var a = this.generatefloor(), d = this; return $("<div>").append($("<ul>").addClass("liststyle-none").append([$("<li>").append($("<div>").addClass("row").append(this.printfloor(a[0]))), $("<li>").append($("<i>").addClass("fas fa-arrow-up")), $("<li>").append($("<span>").text("3단계 보너스: "), $("<select>").attr("id", "select3rdchaineffect").append([this.getoption("3_1", "피해 증가 8% 증가"), this.getoption("3_2", "재사용 대기 시간 15% 감소"), this.getoption("3_3", "SG 소모량 25% 감소")]).val(d.effect3rd).change(function () {
    d.effect3rd =
        $(this).val()
    })), $("<li>").append($("<i>").addClass("fas fa-arrow-up")), $("<li>").append($("<div>").addClass("row").append(this.printfloor(a[1]))), $("<li>").append($("<i>").addClass("fas fa-arrow-up")), $("<li>").append($("<span>").text("2단계 보너스: "), $("<select>").attr("id", "select2ndchaineffect").append([this.getoption("2_1", "피해 증가 4% 증가"), this.getoption("2_2", "재사용 대기 시간 8% 감소"), this.getoption("2_3", "SG 소모량 12% 감소")]).val(d.effect2nd).change(function () { d.effect2nd = $(this).val() })), $("<li>").append($("<i>").addClass("fas fa-arrow-up")),
    $("<li>").append($("<div>").addClass("row").append(this.printfloor(a[2]))), $("<li>").append($("<span>").text("(네모를 눌러 스킬선택)"))]))
};
SlotGrid.prototype.ReadAssignment = function () { var a, d = GetUrlParam("s", null); if (d) for (d = d.split("_"), a = 0; a < d.length; a++) { var f = d[a].split("-"); var h = window.SkillCore.GetSkillByShortID(f[2]); h || (h = window.SkillCore.GetSkill(f[2])); h && !h.IsPassive() && h.IsVisible() && !0 === h.IsAssignable() && 0 < h.GetCurrentSkillLevel() && this.Column[f[0]][f[1]].SetSkill(h) } f = GetUrlParam("b1", null); a = GetUrlParam("b2", null); f && (this.effect2nd = f); a && (this.effect3rd = a) };
SlotGrid.prototype.GenerateAssignment = function () { if (this.IsEmptyTree()) return null; for (var a = [], d = 0; d < this.Column[0].length; d++)for (var f = 0; f < this.Column.length; f++)this.Column[f][d].IsEmpty || (this.Column[f][d].SkillInfo.ShortID ? a.push(f + "-" + d + "-" + this.Column[f][d].SkillInfo.ShortID) : a.push(f + "-" + d + "-" + this.Column[f][d].SkillInfo.GetID())); return a.join("_") }; window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function (a) { return setTimeout(a, 1E3 / 60) }; window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (a) { clearTimeout(a) };
var v_PreviewHeight = "170px", mediaType = { webm_vp9: 'video/webm; codecs="vp9"', mp4_h264: 'video/mp4; codecs="avc1.64001E"' }, justSomeTemp1 = document.createElement("video"), SupportedCodec = { webm: { vp9: "probably" === justSomeTemp1.canPlayType(mediaType.webm_vp9) }, mp4: { h264_highProfile: "probably" === justSomeTemp1.canPlayType(mediaType.mp4_h264) } }; justSomeTemp1 = null;
var isPromiseSupported = "undefined" !== typeof Promise, previewOptions = { "No preview": 0, "Show video": 1, "Show video (Beta)": 2 }, previewOptionExplains = { 0: "Turn off preview", 1: "Show skill preview with MP4 container with video codec H.264 (Profile High). This container and the codec are widely supported in most of browsers you can find.", 2: "\"Show video (Beta)\"는 비디오 코덱 VP9와 함께 WebM 컨테이너를 사용하여 더 높은 압축을 실행합니다. 즉, 비디오를 디코딩하고 재생할 수 있는 컴퓨터 성능을 요구하지만 다운로드 데이터 소모량을 적게 사용합니다. 시각적 버그가 있을 수 있습니다. 만약 버그 또는 영상을 재생할 수 없는 경우, \"Show Video\" 옵션을 선택하십시오." },
    mouseX, mouseY; $(document).mousemove(function (a) { window.mouseX = a.pageX; window.mouseY = a.pageY }); function SetToolTip(a) { a.attr("tooltipframework", "0"); return a } function SetToolTipUp(a) { a.attr("tooltipframework", "1"); return a } function SetToolTipDown(a) { a.attr("tooltipframework", "-1"); return a }
function ChangeFileExtension() { if (2 === arguments.length) { var a = arguments[0].lastIndexOf("."); return -1 === a ? arguments[0] + arguments[1] : arguments[0].substr(0, a) + arguments[1] } return 3 === arguments.length ? (a = arguments[0].lastIndexOf(arguments[1]), -1 === a ? arguments[0] + arguments[2] : arguments[0].substr(0, a) + arguments[2]) : arguments[0] } function IsExtension(a, d) { return -1 !== a.lastIndexOf(d) }
function ShowDangerDialog(a, d, f) { a = new Bootstrap4ModalDialog($("#dialogs"), a, "Warning", Bootstrap4ModalDialog.Buttons.YesNoDanger, Bootstrap4ModalDialog.Type.Danger); a.RegisterCallback(function (a, k) { k ? "function" === typeof d && d() : "function" === typeof f && f() }); a.Show() } function ShowRetryDialog(a, d, f) { a = new Bootstrap4ModalDialog($("#dialogs"), a, d, Bootstrap4ModalDialog.Buttons.Retry, Bootstrap4ModalDialog.Type.Warning); a.RegisterCallback(function (a, d) { d && "function" === typeof f && f() }); a.Show() }
function ShowMessageDialog(a, d) { a = new Bootstrap4ModalDialog($("#dialogs"), a, "Notice", null, Bootstrap4ModalDialog.Type.Info); a.RegisterCallback(function (a, h) { h && "function" === typeof d && d() }); a.Show() } function ShowConfirmDialog(a, d, f) { a = new Bootstrap4ModalDialog($("#dialogs"), a, "Info", Bootstrap4ModalDialog.Buttons.YesNo, Bootstrap4ModalDialog.Type.Primary); a.RegisterCallback(function (a, k) { k ? "function" === typeof d && d() : "function" === typeof f && f() }); a.Show() }
function ShowSkillAssignment(a) { window.SkillCore && (new Bootstrap4ModalDialog($("#dialogs"), window.SkillCore.GetSkillAssignmentRender(), "스킬 프리셋", [{ label: "초기화", cssClass: "btn btn-warning", action: function (a) { window.ShowDangerDialog("정말 초기화 하시겠습니까?", function () { window.SkillCore.ResetSlotAssignment() }) } }, { label: "닫기", cssClass: "btn btn-default", action: function (d) { d.Hide(); "function" === typeof a && a() } }], Bootstrap4ModalDialog.Type.Success)).Show() }
function ReRenderTree(a) { if ("function" === typeof window.SkillCore.RenderTree) { if (!a) throw "characterclassinfo is null"; window.SkillCore.RenderTree(function () { var d = $("img.image-bg-character"); d && d.remove(); a.Cover && (d = a.Position ? a.Position : "side-right", $("#forbackground").append($("<img>").addClass(["image-bg-character", d]).attr("src", a.Cover).imagesLoaded().always(function (a) { a.elements.forEach(function (a, d, b) { $(a).addClass("animated fadeIn").show() }) }).hide())) }, !0) } }
function copyLink(a) { if (window.clipboardsupport) { var d = $("<div>").addClass("hiddendiv"); a = $("<button>").addClass("btncopymagicclass").attr("data-clipboard-text", encodeURI(a)); d.append(a); $(document.body).append(d); a.trigger("click"); d.remove(); return !0 } d = $("<div>"); d.append($("<p>").text("Clipboard access failed. Please copy the link below:")); d.append($("<input>").attr("type", "text").css({ width: "100%" }).prop("readonly", !0).val(a).click(function () { $(this).select() })); window.ShowMessageDialog(d); return !1 }
$(document).ready(function () {
    var a = $(document.body); a.on("click", ".dropdown-menu.keep-open", function (a) { a && a.stopPropagation() }); window.SkillTreeSetting = {}; var d = $("#skillsimulatoroption"), f = $("#option_skillpreview select"), h = $("#saveSettingToBrowser"), k = null, b = previewOptions["Show video (Beta)"]; var c = SafeStorage.GetData("skilltree_firsttime"); window.SkillTreeSetting.skilltree_firsttime = "string" === typeof c ? parseInt(c) : 1; c = SafeStorage.GetData("skilltree_skillpreview"); window.SkillTreeSetting.skilltree_skillpreview =
        "string" === typeof c ? parseInt(c) : b; previewOptionExplains.hasOwnProperty(window.SkillTreeSetting.skilltree_skillpreview) || (window.SkillTreeSetting.skilltree_skillpreview = b); var e = $("<span>").text(previewOptionExplains[window.SkillTreeSetting.skilltree_skillpreview]), g = f.popover({ animation: !0, placement: "right", trigger: "hover focus", html: !0, content: e }); f.change(function () {
            window.SkillTreeSetting.skilltree_skillpreview = parseInt($(this).val()); e.text(previewOptionExplains[window.SkillTreeSetting.skilltree_skillpreview]);
            g.popover("update")
        }); for (var m in previewOptions) previewOptions.hasOwnProperty(m) && f.append($("<option>").attr("value", previewOptions[m]).text(m)); if ("undefined" === typeof window.SkillTreeSetting.skilltree_firsttime || 1 === window.SkillTreeSetting.skilltree_firsttime) d.addClass("highlight-red"), k = h.popover({ animation: !0, placement: "right", trigger: "hover focus", content: "여기에서 변경한 옵션은 다음 사이트를 방문할 때 유지되지 않습니다. 설정을 브라우저에 저장하면 브라우저를 다시 시작한 경우에도 설정을 유지할 수 있습니다." }),
            d.one("mouseover", function () { d.removeClass("highlight-red") }); f.val(window.SkillTreeSetting.skilltree_skillpreview); h.click(function (a) {
                a.preventDefault(); k && (k.popover("hide"), k.on("hidden.bs.popover", function () { k.popover("disable"); k.popover("dispose"); k = null })); var b = function D() {
                    try { for (var a in window.SkillTreeSetting) window.SkillTreeSetting.hasOwnProperty(a) && SafeStorage.SetData(a, window.SkillTreeSetting[a]); shownotify("저장성공!", "success") } catch (F) {
                        ShowDangerDialog($("<div>").append($("<span>").text("Error: " +
                            F)).append($("<br/>")).append($("<span>").text("다시 하시겠습니까?")), function () { D() })
                    }
                }; if (0 === window.SkillTreeSetting.skilltree_firsttime) b(); else {
                    var c = function (a) { "function" === typeof a.stopPropagation && a.stopPropagation() }, d = $('<span>현재 셋팅을 저장합니다. 이를 위해 다음을 사용합니다.<a href="https://www.w3schools.com/html/html5_webstorage.asp" target="_blank">localStorage</a> (또는 fallback to <a href="https://www.w3schools.com/js/js_cookies.asp" target="_blank">cookie</a> 만약 현재 브라우저가 지원하지 않는다면, <a href="https://www.w3schools.com/html/html5_webstorage.asp" target="_blank">localStorage</a>).<br/><strong>저장하시겠습니까?</strong></span>').on("click",
                        "a", c); ShowConfirmDialog(d, function () { window.SkillTreeSetting.skilltree_firsttime = 0; d.off("click", "a", c); b() }, function () { d.off("click", "a", c) })
                }
            }); ClipboardJS && ClipboardJS.isSupported() ? (f = new ClipboardJS(".btncopymagicclass"), window.clipboardsupport = !0, f.on("success", function (a) { window.shownotify("The link to this skill tree has been copied to clipboard.", "success") }), f.on("error", function (a) {
                var b = $("<div>"); b.append($("<p>").text("클립보스 접근 실패. 다음 링크를 수동으로 복사하세요:")); b.append($("<input>").attr("type",
                    "text").css({ width: "100%" }).prop("readonly", !0).val(a.text).click(function () { $(this).select() })); window.ShowMessageDialog(b)
            })) : window.clipboardsupport = !1; var n = $("#dialogs"); n.hide().click(function (a) { a.preventDefault(); window.DialogManager.CloseForegroundDialog() }); window.DialogManager.OnModalChanged(function (a) { a ? n.show() : n.hide() }); SetLoading(a); var q = $("#tooltip"), l = $("#tooltip .tooltipheader"), p = $("#tooltip #skillpreview").css("height", v_PreviewHeight), r = $("#tooltip #skillpreview video").css({ height: v_PreviewHeight }),
                v = $("#tooltip pre"), w = $(".navbar.fixed-bottom"), t = new SkillTreeToolTipFramework(q, "[tooltipframework][insight]"); q.detach(); if (isPromiseSupported) r.on("error", function () { p.hide() }).on("canplay", function (a) { (a = a.target.play()) && a.catch(function () { p.hide(); t.UpdateTooltipSize() }) }); else r && (r.remove(), r = null); t.OnMouseEnter.Register(function (a) {
                    var b = $(a.target).attr("insight"); if (b) {
                        var c = $(a.target).attr("tooltipframework"); if (isNaN(c)) a.cancel = !0; else {
                            var d = [], e = window.SkillCore.GetSkill(b); b = e.GetCurrentLevelInfo();
                            l.text(e.GetName()); var f = b.PreviewInfo; t.SetBound(0, 0, 0, w.outerHeight(!0) || 0); if (isPromiseSupported && r && window.SkillTreeSetting.skilltree_skillpreview !== previewOptions["No preview"] && f) {
                                var g = "string" === typeof f.Video.vp9, h = "string" === typeof f.Video.h264; if (g || h) {
                                    var k = { src: null }; window.SkillTreeSetting.skilltree_skillpreview === previewOptions["Show video (Beta)"] && g && SupportedCodec.webm.vp9 ? (k.src = f.Video.vp9, k.type = mediaType.webm_vp9) : h && SupportedCodec.mp4.h264_highProfile && (k.src = f.Video.h264,
                                        k.type = mediaType.mp4_h264); "string" === typeof k.src ? (r.attr(k), p.show(), r[0].play()) : p.hide()
                                } else r && (r[0].paused || r.trigger("pause")), p.hide()
                            } else r && (r[0].paused || r.trigger("pause")), p.hide(); c = parseInt(c); switch (c) {
                                case -1: a = e.GetPreviousLevelInfo(); if (b || a) b = b.SkillEffect, c = "", a && (c = a.SkillEffect), d.push("[현재]"), b ? (d.push("\n"), d.push(b)) : d.push("\n<사용 가능한 정보 없음>"), d.push("\n\n[다음]"), c ? (d.push("\n"), d.push(c)) : d.push("\n<사용 가능한 정보 없음>"); break; case 0: b && (a = b.SkillDescription,
                                    b = b.SkillEffect, a && (d.push("[설명]\n"), d.push(a)), b && (0 !== d.length && d.push("\n\n"), d.push("[효과]\n"), d.push(b))); break; case 1: a = e.GetNextLevelInfo(); if (b || a) b = b.SkillEffect, c = "", a && (c = a.SkillEffect), d.push("[현재]"), b ? (d.push("\n"), d.push(b)) : d.push("\n<사용 가능한 정보 없음>"), d.push("\n\n[다음]"), c ? (d.push("\n"), d.push(c)) : d.push("\n<사용 가능한 정보 없음>"); break; default: a.cancel = !0; return
                            }0 !== d ? v.text(d.join("")).show() : v.empty().hide(); q.insertAfter(n)
                        }
                    }
                }); t.OnTooltipHidden.Register(function (a) {
                    r &&
                    (r[0].paused || r.trigger("pause")); q.detach()
                }); t.StartListen(); $('#charList a[href^="../' + GetCurrentFolderUrl() + '"]').remove(); $("#copyURL").click(function (a) { a.preventDefault(); (a = window.SkillCore.GenerateLink()) && copyLink(a) }); $("#copyURLshowassign").click(function (a) { a.preventDefault(); (a = window.SkillCore.GenerateLink(!0)) && copyLink(a) }); $("#resetAllSkill").click(function () { ShowDangerDialog("정말 초기화 하시겠습니까?", function () { window.SkillCore.UnlearnAllSkills() }) }); $("#slotassignment").click(function () { ShowSkillAssignment() });
    var z = window.location.search, B = GetUrlParam("sa", null), y = GetUrlParam("lv", 60), u = GetUrlParam("c", window.SkillCore.GetAvailableClassIndex()); 60 == y && (y = GetUrlParam("level", 60)); isNaN(y) && (y = 60); window.SkillCore.ReadTree(function (a) {
        u = Math.min(u, window.SkillCore.GetAvailableClassIndex()); for (var b = $("<select>").attr("id", "selectLevelBox").change(function () { var a = $(this).val(); window.SkillCore.SetLevel(a) ? y = a : $(this).val(y) }), c = 1; c <= window.c_maxlevel; c++)b.append($("<option>").val(c).text(c)); $("#levelBoxtd").append(b);
        b.val(y); b = $("<select>").attr("id", "selectClassBox").change(function () {
            var a = $(this).val(), b = window.SkillCore.GetClass(a); window.SkillCore.IsSelectiveClass(a) ? ShowConfirmDialog($("<span><strong>클래스 변경은 현재 작업중인 정보가 모두 사라집니다.</strong><br/>계속해서 클래스를 변경하시겠습니까?</span>"), function () { window.SkillCore.UnlearnAllSkills(); window.SkillCore.SetSelectedClass(a) ? (u = a, ReRenderTree(window.SkillCore.GetSelectedClass())) : $("#selectClassBox").val(u) }, function () { $("#selectClassBox").val(u) }) :
                (shownotify("The class you selected requires the character to be at least at level " + (b.RequiredLevel || "????"), "info"), $("#selectClassBox").val(u))
        }); if (a.hasOwnProperty("AvailableClass")) for (var d in a.AvailableClass) a.AvailableClass.hasOwnProperty(d) && b.append($("<option>").val(d).text(a.AvailableClass[d].Name || "Unknown")); else b.append($("<option>").val(0).text("Base")); $("#classBoxtd").append(b)
    }, function (b, c, d) {
        RemoveLoading(a); if (!1 === b) ShowRetryDialog($("<span>Unknown internet error occurred: " +
            d + "<br/>Do you want to retry?</span>"), function () { PageReload() }); else {
                b = window.SkillCore.GetClass(u).RequiredLevel || 0; y < b && (shownotify("The class you selected requires the character to be at least at level " + (changingclassinfo.RequiredLevel || "????"), "info"), y = b); window.SkillCore.SetCharacterInfo(y, u); $("#selectLevelBox").val(y); $("#selectClassBox").val(u); ReRenderTree(window.SkillCore.GetClass(u)); for (var e in window.SkillCore.SkillList) window.SkillCore.SkillList.hasOwnProperty(e) && (b = window.SkillCore.SkillList[e],
                    b._availablelevel <= y && b.IsClassAvailable(u) ? (c = readurlparam(b.GetID(), z), !c && b.ShortID && (c = readurlparam(b.ShortID, z)), c || (c = b.GetDefaultLevel()), b.SetCurrentSkillLevel(c)) : b.SetCurrentSkillLevel(0)); window.SkillCore.ReadAssignment(); "1" === B && $("#slotassignment").click()
        }
    })
}); var ClassOperator = { AtLeast: 0, MustMatch: 1, AtMost: 2 }, ClassIndex = { Base: 0, Upgraded: 1 }; function SkillInfo(a, d, f) { this._rowspan = []; this._defaultLevel = 0; this._id = a; this._availablelevel = window.c_maxlevel + 1; this._currentskilllevel = 0; this._name = d; this._passive = !1; this._parent = null; this._visible = !0; this._spused = 0; this.Assignable = !0; this.RequiredClassIndex = 0; this._previewinfo = null; this.readInfos(f) }
SkillInfo.prototype.readInfos = function (a) {
this.Levels = []; var d = "", f = null; for (k in a.Levels) {
    var h = a.Levels[k]; h.Description && (d = h.Description); h.Preview && ("string" === typeof h.Preview.Video ? (f = IsExtension(h.Preview.Video, ".{{auto}}"), result = { Video: {} }, f ? (result.Video.vp9 = ChangeFileExtension(h.Preview.Video, ".{{auto}}", ".webm"), result.Video.h264 = ChangeFileExtension(h.Preview.Video, ".{{auto}}", ".mp4")) : IsExtension(h.Preview.Video, ".webm") ? result.Video.vp9 = h.Preview.Video : IsExtension(h.Preview.Video,
        ".mp4") && (result.Video.h264 = h.Preview.Video), f = result) : f = h.Preview); this.Levels.push(new LevelInfo(h.RequiredLevel, h.RequiredSP, h.Effect, d, f))
} this._string_extensions = a.Extensions; a.Passive && (this._passive = a.Passive); this._iconURL = a.Icon; 0 == a.Assignable && (this.Assignable = a.Assignable); 0 == a.Visible && (this._visible = a.Visible); this._skillmaxlevel = this.Levels.length - 1; 0 < a.DefaultLevel && (this._defaultLevel = a.DefaultLevel); this._availablelevel = this.Levels[1].RequiredLevel; a.ID && (this.ShortID = a.ID); if (a.hasOwnProperty("RowSpan")) {
    d =
    window.SkillCore.GetAvailableClassIndex(); var k = 1; for (h = ClassIndex.Base; h <= d; h++)a.RowSpan.hasOwnProperty(h) && (k = a.RowSpan[h]), this._rowspan[h] = k
} if (a.hasOwnProperty("RequireClass")) {
    d = a.RequireClass.CompareType || ClassOperator.AtLeast; if (isNaN(d)) "string" === typeof d ? (d = d.toLowerCase(), d = "atmost" === d || "<" === d ? ClassOperator.AtMost : "mustmatch" === d || "=" === d ? ClassOperator.MustMatch : ClassOperator.AtLeast) : d = ClassOperator.AtLeast; else switch (d) {
        case ClassOperator.AtMost: d = ClassOperator.AtMost; break; case ClassOperator.MustMatch: d =
            ClassOperator.MustMatch; break; default: d = ClassOperator.AtLeast
    }this._classComparer = d; this.RequiredClassIndex = a.RequireClass.ClassIndex || 0
}
}; SkillInfo.prototype.SetSkillLevel = function () { if (this._availablelevel <= window.SkillCore.GetCurrentLevel()) { var a = GetUrlParam(this._id, null); !a && this.ShortID && (a = GetUrlParam(this.ShortID, null)); a || (a = this._defaultLevel); this.SetCurrentSkillLevel(a) } else this.SetCurrentSkillLevel(0) }; SkillInfo.prototype.SetParent = function (a) { this._parent = a };
SkillInfo.prototype.GetParent = function () { return this._parent }; SkillInfo.prototype.GetID = function () { return this._id }; SkillInfo.prototype.GetName = function () { return this._name }; SkillInfo.prototype.GetAvailableLevel = function () { return this._availablelevel }; SkillInfo.prototype.GetSPUsed = function () { return this._spused }; SkillInfo.prototype.GetCurrentSkillLevel = function () { return this._currentskilllevel }; SkillInfo.prototype.GetMaxLevel = function () { return this._skillmaxlevel };
SkillInfo.prototype.GetCurrentLevelInfo = function () { return this.Levels[this._currentskilllevel] }; SkillInfo.prototype.GetIconURL = function () { return this._iconURL }; SkillInfo.prototype.IsPassive = function () { return this._passive }; SkillInfo.prototype.GetDefaultLevel = function () { return this._defaultLevel }; SkillInfo.prototype.IsAssignable = function () { return this.Assignable }; SkillInfo.prototype.GetRowSpan = function (a) { return this._rowspan[a] || 1 };
SkillInfo.prototype.GetNextLevelInfo = function () { return this.Levels[this._currentskilllevel + 1] }; SkillInfo.prototype.GetPreviousLevelInfo = function () { return this.Levels[this._currentskilllevel - 1] }; SkillInfo.prototype.GetExtensions = function () { if (!this._extensions) { this._extensions = {}; var a; for (a in this._string_extensions) { var d = this._string_extensions[a]; var f = window.SkillCore.GetSkill(d); f.SetParent(this); this._extensions[d] = f } } return this._extensions }; SkillInfo.prototype.IsVisible = function () { return this._visible };
SkillInfo.prototype.UnlearnSkill = function () { this._availablelevel > window.SkillCore.GetCurrentLevel() ? this.SetCurrentSkillLevel(0) : this.ToDefaultLevel() }; SkillInfo.prototype.ToDefaultLevel = function () { this.SetCurrentSkillLevel(Math.max(0, this._defaultLevel)) }; SkillInfo.prototype.SetCurrentSkillLevel = function (a) { for (var d = 0; d <= this._skillmaxlevel && (this._currentskilllevel > a && this.SkillDownEx(), this._currentskilllevel < a && this.SkillUp(), this._currentskilllevel !== a); d++); };
SkillInfo.prototype.IsClassAvailable = function (a) { if (this.RequiredClassIndex) switch (this._classComparer) { case ClassOperator.AtMost: return a <= this.RequiredClassIndex; case ClassOperator.MustMatch: return a === this.RequiredClassIndex; default: return a >= this.RequiredClassIndex }return !0 };
SkillInfo.prototype.GetSkillPanel = function (a, d) {
    if (this.Panel) if (d) this.Panel && this.Panel.remove(), this.Panel = null; else return this.Panel; if (a) {
        a = $("<div>").addClass("skillExinfopanel").addClass("fadeinAppear"); a.attr("insight", this._id); a.css({ top: "" }); d = $("<img>").addClass("skillExIcon").attr("insight", this._id).attr("src", this.GetIconURL()); a.append(d); SetToolTip(d); d = $('<button type="button" class="btn-success skillexup" insight="' + this._id + '">').attr("skillup", "1"); this._currentskilllevel ===
            this._skillmaxlevel && d.addClass("disabled"); SetToolTipUp(d); a.append(d.click(function () { $(this).hasClass("disabled") || (window.SkillCore.GetSkill($(this).attr("insight")).SkillUp(), $(this).trigger("mouseover")) })); d = $('<button type="button" class="btn-danger skillexdown" insight="' + this._id + '">').attr("skilldown", "1"); this._currentskilllevel === this._defaultLevel && d.addClass("disabled"); SetToolTipDown(d); a.append(d.click(function () {
                $(this).hasClass("disabled") || (window.SkillCore.GetSkill($(this).attr("insight")).SkillDown(),
                    $(this).trigger("mouseover"))
            })); a.append($('<p insight="skilllexevel">').addClass("skillExLevel").text(this._currentskilllevel + "" + this._skillmaxlevel)); d = this.GetExtensions(); if (void 0 !== d && 0 < Object.keys(d).length) for (var f in d) d = window.SkillCore.GetSkill(f), d.GetSkillPanel(!0).appendTo(a); this.Panel = a
    } else {
        a = $("<div>").addClass("skillinfopanel").addClass("fadeinAppear"); a.attr("insight", this._id); d = $("<img>").addClass("skillIcon").attr("insight", this._id).attr("src", this.GetIconURL()); a.append(d);
        SetToolTip(d); d = $('<button type="button" class="btn btn-success skillup" insight="' + this._id + '">').attr("skillup", "1"); this._currentskilllevel === this._skillmaxlevel && d.addClass("disabled"); SetToolTipUp(d); a.append(d.click(function () { window.SkillCore.GetSkill($(this).attr("insight")).SkillUp(); $(this).trigger("mouseover") })); d = $('<button type="button" class="btn btn-danger skilldown" insight="' + this._id + '">').attr("skilldown", "1"); this._currentskilllevel === this._defaultLevel && d.addClass("disabled");
        SetToolTipDown(d); a.append(d.click(function () { window.SkillCore.GetSkill($(this).attr("insight")).SkillDown(); $(this).trigger("mouseover") })); a.append($('<p insight="skilllevel">').addClass("skillLevel").text(this._currentskilllevel + "/" + this._skillmaxlevel)); d = this.GetExtensions(); if (void 0 !== d && 0 < Object.keys(d).length) {
            var h = !1, k = 0; for (f in d) {
                var b = window.SkillCore.GetSkill(f); if (!b.IsVisible() && b.IsClassAvailable(window.SkillCore.GetSelectedClassIndex())) {
                    k++; var c = $("<div>").addClass("extension" +
                        k + "infopanel"); b.GetSkillPanel(!0, !0).appendTo(c); this._currentskilllevel < this._skillmaxlevel ? b.Disabled(!0) : 0 < b.GetCurrentSkillLevel() ? (b.Disabled(!1), h = !0) : b.Disabled(!0); c.appendTo(a)
                }
            } if (!h && this._currentskilllevel == this._skillmaxlevel) for (f in d) window.SkillCore.GetSkill(f).Disabled(!1)
        } this.Panel = a
    } return this.Panel
};
SkillInfo.prototype.Disabled = function (a) { a ? (this.UnlearnSkill(), a = this.GetSkillPanel(), a.hasClass("disabled") || a.addClass("disabled"), a.find("button[skilldown]:not(.disabled)").addClass("disabled"), a.find("button[skillup]:not(.disabled)").addClass("disabled"), a.find("img:not(.disabled)").addClass("disabled")) : (a = this.GetSkillPanel(), a.hasClass("disabled") && a.removeClass("disabled"), a.find("img.disabled").removeClass("disabled"), a.find("button.disabled[skilldown]").removeClass("disabled"), a.find("button.disabled[skillup]").removeClass("disabled")) };
SkillInfo.prototype.UpdateSkill = function () {
    if (this.Panel) {
        var a = this.Panel; a.children('p[insight="skilllevel"]:first').text(this._currentskilllevel + "/" + this._skillmaxlevel); a.children('p[insight="skilllexevel"]:first').text(this._currentskilllevel + "" + this._skillmaxlevel); if (this._currentskilllevel <= this._defaultLevel) { if (a.children("button[skilldown]:first").addClass("disabled"), (a = this._parent) && !a.GetNextLevelInfo()) { a = a.GetExtensions(); for (var d in a) a[d].Disabled(!1) } } else if (this._currentskilllevel ==
            this._skillmaxlevel) { a.children("button[skillup]:first").addClass("disabled"); if (a = this._parent) for (d in a = a.GetExtensions(), a) { var f = a[d]; f.GetID() !== this._id && f.Disabled(!0) } a = this.GetExtensions(); for (d in a) a[d].Disabled(!1) } else { a.children("button.disabled[skilldown]:first").removeClass("disabled"); a.children("button.disabled[skillup]:first").removeClass("disabled"); if (a = this._parent) for (d in a = a.GetExtensions(), a) f = a[d], f.GetID() !== this._id && f.Disabled(!0); a = this.GetExtensions(); for (d in a) a[d].Disabled(!0) }
    }
};
SkillInfo.prototype.SkillUp = function () { var a = this.GetNextLevelInfo(); a && (a.RequiredLevel > window.SkillCore.GetCurrentLevel() ? shownotify("캐릭터 레벨이 충분하지 않습니다.", "info") : (a = a.RequiredSP, window.SkillCore.GetSPLeft() < a ? shownotify("Insufficient skill point.", "info") : (this._currentskilllevel++ , this._spused += a, window.SkillCore.InvestedSPIncrease(a), this.UpdateSkill()))) };
SkillInfo.prototype.SkillDown = function () { if (this.GetPreviousLevelInfo()) if (this._defaultLevel === this._currentskilllevel) shownotify("Can not go lower than skill's default level.", "warning"); else { var a = this.GetCurrentLevelInfo().RequiredSP; this._spused -= a; window.SkillCore.InvestedSPDecrease(a); this._currentskilllevel--; this.UpdateSkill() } };
SkillInfo.prototype.SkillDownEx = function () { this.GetPreviousLevelInfo() && (window.SkillCore.InvestedSPDecrease(this.GetCurrentLevelInfo().RequiredSP), this._currentskilllevel-- , this.UpdateSkill()) }; function LevelInfo(a, d, f, h, k) { this.RequiredLevel = a; this.RequiredSP = d; this.SkillDescription = h; this.SkillEffect = f; this.PreviewInfo = k }; var c_maxlevel = 65; function SkillTreeCore() { this._selectedclassindex = this._spleft = this._investedsp = this._currentlevel = this._totalsp = 0; this._selectedclass = null; this.slotassign = new SlotGrid; var a = ClassIndex.Base, d; for (d in ClassIndex) ClassIndex[d] > a && (a = ClassIndex[d]); this.AvailableClassIndex = a } SkillTreeCore.prototype.GetTotalSP = function () { return this._totalsp }; SkillTreeCore.prototype.GetCurrentLevel = function () { return this._currentlevel }; SkillTreeCore.prototype.GetInvestedSP = function () { return this._investedsp };
SkillTreeCore.prototype.GetSPLeft = function () { return this._spleft }; SkillTreeCore.prototype.GetAvailableClassIndex = function () { return this.AvailableClassIndex }; SkillTreeCore.prototype.SetLevel = function (a) { var d = this.GetSelectedClass().RequiredLevel || 0; if (a >= d) return this.setlevelcore(a), !0; shownotify("The class you selected requires the character to be at level " + d, "info"); return !1 };
SkillTreeCore.prototype.setlevelcore = function (a) { this._currentlevel = Math.min(a, window.c_maxlevel); this._totalsp = this.inner_gettotalsp(this._currentlevel); this.UpdateAllSPs() }; SkillTreeCore.prototype.SetLevelFromElement = function () { this.SetLevel(parseInt($("#selectLevelBox").val())) };
SkillTreeCore.prototype.UpdateSP = function () { this._spleft = this._totalsp - this._investedsp; 5 > this._spleft ? $("#e_remainingSP").addClass("alertlow") : $("#e_remainingSP").removeClass("alertlow"); $("#e_investedSP").text("사용한 SP: " + this._investedsp + "/" + this._totalsp); $("#e_remainingSP").text("남은 SP: " + this._spleft + "/" + this._totalsp); $("#spusageinfo").html(this.GenerateUsageInfo()) };
SkillTreeCore.prototype.UpdateAllSPs = function () { $("#e_investedSP").text("사용한 SP: " + this._investedsp + "/" + this._totalsp); this._spleft = this._totalsp - this._investedsp; $("#e_remainingSP").text("남은 SP: " + this._spleft + "/" + this._totalsp); this.CheckAllSkills() && (5 > this._spleft ? $("#e_remainingSP").addClass("alertlow") : $("#e_remainingSP").removeClass("alertlow")); $("#spusageinfo").html(this.GenerateUsageInfo()) }; SkillTreeCore.prototype.UnlearnAllSkills = function () { for (var a in this.SkillList) this.SkillList[a].UnlearnSkill() };
SkillTreeCore.prototype.CheckAllSkills = function () { if (this._totalsp < this._investedsp) { if (this.SkillList) for (var a in this.SkillList) this.SkillList[a].UnlearnSkill(); return !1 } if (!this.SkillList) return !1; for (a in this.SkillList) { var d = this.SkillList[a]; if (d.GetAvailableLevel() > this._currentlevel) d.UnlearnSkill(); else { d.GetCurrentSkillLevel() < d.GetDefaultLevel() && d.UnlearnSkill(); var f = d.GetCurrentLevelInfo(); f.RequiredLevel > this._currentlevel && d.UnlearnSkill() } } return !0 };
SkillTreeCore.prototype.inner_gettotalsp = function (a) { for (var d = 0, f = 1; f <= a; f++)d += this.inner_gettotalspex(f); return d };
SkillTreeCore.prototype.inner_gettotalspex = function (a) { switch (a) { case 0: return 0; case 1: return 0; case 2: return 0; case 3: return 0; case 4: return 1; case 5: return 3; case 6: return 1; case 7: return 1; case 8: return 1; case 9: return 1; case 10: return 5; case 15: return 5; case 20: return 10; case 25: return 5; case 30: return 5; case 35: return 5; case 40: return 10; case 45: return 5; case 50: return 5; case 55: return 5; case 60: return 5; case 61: return 1; case 62: return 1; case 63: return 1; case 64: return 1; case 65: return 1; default: return 2 } };
SkillTreeCore.prototype.GenerateLink = function (a) {
    var d = []; this._currentlevel !== window.c_maxlevel && d.push("lv=" + this._currentlevel); for (var f in this.SkillList) { var h = this.SkillList[f].GetCurrentSkillLevel(); h != this.SkillList[f].GetDefaultLevel() && (this.SkillList[f].ShortID ? d.push(this.SkillList[f].ShortID + "=" + h) : d.push(f + "=" + h)) } f = location.protocol + "//" + location.host + location.pathname; h = null; var k = this.slotassign.GenerateAssignment(); k && d.push("s=" + k); "2_1" !== this.slotassign.effect2nd && d.push("b1=" +
        this.slotassign.effect2nd); "3_1" !== this.slotassign.effect3rd && d.push("b2=" + this.slotassign.effect3rd); !0 === a && d.push("sa=1"); a = this.GetSelectedClassIndex(); a !== this.GetAvailableClassIndex() && d.push("c=" + a); 1 < d.length ? h = d.join("&") : 1 === d.length && (h = d[0]); h && (f = f + "?" + h); return f
};
SkillTreeCore.prototype.GenerateUsageInfo = function () { var a = {}, d; for (d in this.SkillList) if (this.SkillList.hasOwnProperty(d) && this.SkillList[d].GetCurrentSkillLevel() != this.SkillList[d].GetDefaultLevel()) { var f = this.SkillList[d].GetSPUsed(); var h = this.SkillList[d].GetParent(); 0 != f && (h ? a[h.GetID()] += " + " + f + "SP" : a[d] = this.SkillList[d].GetName() + ": " + f + "SP") } h = ""; f = !0; if (0 < Object.keys(a).length) for (d in a) a.hasOwnProperty(d) && (f ? (h += a[d], f = !1) : h += "<br>" + a[d]); return h };
SkillTreeCore.prototype.SetSelectedClass = function (a) { var d = this.IsSelectiveClass(a); d && this.setclasscore(a); return d }; SkillTreeCore.prototype.IsSelectiveClass = function (a) { return a > this.AvailableClassIndex ? !1 : this._jsondata.hasOwnProperty("AvailableClass") && this._jsondata.AvailableClass.hasOwnProperty(a) && ((a = this._jsondata.AvailableClass[a].RequiredLevel) || (a = 0), this._currentlevel >= a) ? !0 : !1 }; SkillTreeCore.prototype.setclasscore = function (a) { this._selectedclassindex = a; this._selectedclass = this._jsondata.AvailableClass[a] };
SkillTreeCore.prototype.SetCharacterInfo = function (a, d) { if (!isNaN(a) && !isNaN(d)) { if (d > this.AvailableClassIndex) return !1; if (this._jsondata.hasOwnProperty("AvailableClass") && this._jsondata.AvailableClass.hasOwnProperty(d)) { var f = this._jsondata.AvailableClass[d].RequiredLevel; f || (f = 0); if (a >= f) return this.setclasscore(d), this.setlevelcore(a), !0; shownotify("레벨 " + f + " 때 승급 이후부터 선택이 가능합니다.", "info") } return !1 } };
SkillTreeCore.prototype.GetClass = function (a) { return isNaN(a) ? null : this._jsondata.AvailableClass[a] }; SkillTreeCore.prototype.GetSelectedClassIndex = function () { return this._selectedclassindex }; SkillTreeCore.prototype.GetSelectedClass = function () { return this._selectedclass }; SkillTreeCore.prototype.SetJSON = function (a) { this._jsondata = a }; SkillTreeCore.prototype.GetJSON = function () { return this._jsondata }; SkillTreeCore.prototype.ResetSlotAssignment = function () { this.slotassign.ResetToEmpty() };
SkillTreeCore.prototype.SetSkillAssignment = function (a, d, f) { this.slotassign.SetGridValue(a, d, f) }; SkillTreeCore.prototype.GetSkillAssignmentRender = function () { return this.slotassign.GetRender() }; SkillTreeCore.prototype.ReadAssignment = function () { this.slotassign.ReadAssignment() }; SkillTreeCore.prototype.GetSkill = function (a) { return this.SkillList[a] };
SkillTreeCore.prototype.GetSkillByShortID = function (a) { for (var d in this.SkillList) if (this.SkillList.hasOwnProperty(d) && this.SkillList[d].ShortID && this.SkillList[d].ShortID == a) return this.SkillList[d]; return null };
SkillTreeCore.prototype.ReadTree = function (a, d) {
this.SkillList = {}; this.ActiveSkillList = {}; this.PassiveSkillList = {}; this.loadedSkillCount = this.SkillCount = 0; $.ajax({
    cache: !1, url: "skilltreeinfo.json", dataType: "json", success: function (f) {
        window.SkillCore.SetJSON(f); void 0 === f.MaxLevel || isNaN(f.MaxLevel) || (window.c_maxlevel = f.MaxLevel); if (f.hasOwnProperty("AvailableClass")) { var h = 0, k; for (k in f.AvailableClass) f.AvailableClass.hasOwnProperty(k) && k > h && (h = k); this.AvailableClassIndex = h } f.CharacterName ? $("#charName").text(f.CharacterName) :
            $("#charName").text(GetCurrentFolderUrl()); f.CharacterWikiURL ? f.CharacterName ? $("#morecharacterinfo").attr("href", f.CharacterWikiURL).attr("target", "_blank").text("More info about " + f.CharacterName) : $("#morecharacterinfo").attr("href", f.CharacterWikiURL).attr("target", "_blank").text("More info about " + GetCurrentFolderUrl()) : $("#morecharacterinfo").remove(); window.document.title = "Skill Simulator - " + f.CharacterName; for (var b in f.Skills) f.Skills.hasOwnProperty(b) && (window.SkillCore.SkillList[b] = new SkillInfo(b,
                f.Skills[b].Name, f.Skills[b]), window.SkillCore.SkillList[b].IsPassive() ? window.SkillCore.PassiveSkillList[b] = window.SkillCore.SkillList[b] : window.SkillCore.ActiveSkillList[b] = window.SkillCore.SkillList[b]); window.SkillCore.SkillCount = Object.keys(window.SkillCore.SkillList).length; "function" === typeof a && a(f); "function" === typeof d && d(!0, null, null)
    }, error: function (a, h, k) { "function" === typeof d && d(!1, h, k) }
})
};
SkillTreeCore.prototype.RenderTree = function (a, d) {
    var f = $("li#activeskill"); if (f) {
        var h = $("<ul>").addClass("tableactiveskill"); f.empty(); var k = 0, b; for (b in this.ActiveSkillList) if (this.ActiveSkillList.hasOwnProperty(b) && this.ActiveSkillList[b].IsVisible() && this.ActiveSkillList[b].IsClassAvailable(this._selectedclassindex)) {
            var c = this.ActiveSkillList[b].GetRowSpan(this._selectedclassindex); 1 < c ? k += c : k++; h.append($("<li>").addClass("tablelike").append(this.ActiveSkillList[b].GetSkillPanel(!1, d))); 3 <=
                k && (h && f.append(h), h = $("<ul>").addClass("tableactiveskill"), k = 0)
        } 0 < k && h && f.append(h)
    } if (f = $("li#passiveskill")) {
        h = $("<ul>").addClass("tablepassiveskill"); f.empty(); k = 0; for (b in this.PassiveSkillList) this.PassiveSkillList.hasOwnProperty(b) && this.PassiveSkillList[b].IsVisible() && this.PassiveSkillList[b].IsClassAvailable(this._selectedclassindex) && (c = this.PassiveSkillList[b].GetRowSpan(this._selectedclassindex), 1 < c ? k += c : k++ , h.append($("<li>").addClass("tablelike").addClass("passiveskilltree").append(this.PassiveSkillList[b].GetSkillPanel(!1,
            d))), 2 <= k && (h && f.append(h), h = $("<ul>").addClass("tablepassiveskill"), k = 0)); 0 < k && h && f.append(h)
    } "function" === typeof a && $("#skilltree").imagesLoaded().always(function () { a(!0) })
}; SkillTreeCore.prototype.InvestedSPIncrease = function (a) { this._investedsp += a; this.UpdateSP() }; SkillTreeCore.prototype.InvestedSPDecrease = function (a) { this._investedsp -= a; this.UpdateSP() }; var SkillCore = new SkillTreeCore;
