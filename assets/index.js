/*!
 * 
 *   @bornfight/gocart v1.0.9
 *   
 * 
 *   Copyright (c) Bornfight (https://www.bornfight.com/)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
! function(t, e) {
    "object" === typeof exports && "object" === typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define("GoCart", [], e) : "object" === typeof exports ? exports.GoCart = e() : t.GoCart = e()
}(window, (function() {
    return function(t) {
        var e = {};

        function __webpack_require__(r) {
            if (e[r]) return e[r].exports;
            var a = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(a.exports, a, a.exports, __webpack_require__), a.l = !0, a.exports
        }
        return __webpack_require__.m = t, __webpack_require__.c = e, __webpack_require__.d = function(t, e, r) {
            __webpack_require__.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }, __webpack_require__.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, __webpack_require__.t = function(t, e) {
            if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (__webpack_require__.r(r), Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var a in t) __webpack_require__.d(r, a, function(e) {
                    return t[e]
                }.bind(null, a));
            return r
        }, __webpack_require__.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return __webpack_require__.d(e, "a", e), e
        }, __webpack_require__.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 1)
    }([function(t, e, r) {
        var a = r(3),
            o = /^(?:submit|button|image|reset|file)$/i,
            n = /^(?:input|select|textarea|keygen)/i,
            i = /(\[[^\[\]]*\])/g;

        function hash_serializer(t, e, r) {
            if (e.match(i)) {
                ! function hash_assign(t, e, r) {
                    if (0 === e.length) return t = r;
                    var a = e.shift(),
                        o = a.match(/^\[(.+?)\]$/);
                    if ("[]" === a) return t = t || [], Array.isArray(t) ? t.push(hash_assign(null, e, r)) : (t._values = t._values || [], t._values.push(hash_assign(null, e, r))), t;
                    if (o) {
                        var n = o[1],
                            i = +n;
                        isNaN(i) ? (t = t || {})[n] = hash_assign(t[n], e, r) : (t = t || [])[i] = hash_assign(t[i], e, r)
                    } else t[a] = hash_assign(t[a], e, r);
                    return t
                }(t, function(t) {
                    var e = [],
                        r = new RegExp(i),
                        a = /^([^\[\]]*)/.exec(t);
                    for (a[1] && e.push(a[1]); null !== (a = r.exec(t));) e.push(a[1]);
                    return e
                }(e), r)
            } else {
                var a = t[e];
                a ? (Array.isArray(a) || (t[e] = [a]), t[e].push(r)) : t[e] = r
            }
            return t
        }

        function str_serialize(t, e, r) {
            return r = r.replace(/(\r)?\n/g, "\r\n"), r = (r = encodeURIComponent(r)).replace(/%20/g, "+"), t + (t ? "&" : "") + encodeURIComponent(e) + "=" + r
        }
        t.exports = function(t, e) {
            "object" != a(e) ? e = {
                hash: !!e
            } : void 0 === e.hash && (e.hash = !0);
            for (var r = e.hash ? {} : "", i = e.serializer || (e.hash ? hash_serializer : str_serialize), s = t && t.elements ? t.elements : [], c = Object.create(null), l = 0; l < s.length; ++l) {
                var u = s[l];
                if ((e.disabled || !u.disabled) && u.name && (n.test(u.nodeName) && !o.test(u.type))) {
                    var d = u.name,
                        f = u.value;
                    if ("checkbox" !== u.type && "radio" !== u.type || u.checked || (f = void 0), e.empty) {
                        if ("checkbox" !== u.type || u.checked || (f = ""), "radio" === u.type && (c[u.name] || u.checked ? u.checked && (c[u.name] = !0) : c[u.name] = !1), void 0 == f && "radio" == u.type) continue
                    } else if (!f) continue;
                    if ("select-multiple" !== u.type) r = i(r, d, f);
                    else {
                        f = [];
                        for (var h = u.options, y = !1, p = 0; p < h.length; ++p) {
                            var m = h[p],
                                b = e.empty && !m.value,
                                v = m.value || b;
                            m.selected && v && (y = !0, r = e.hash && "[]" !== d.slice(d.length - 2) ? i(r, d + "[]", m.value) : i(r, d, m.value))
                        }!y && e.empty && (r = i(r, d, ""))
                    }
                }
            }
            if (e.empty)
                for (var d in c) c[d] || (r = i(r, d, ""));
            return r
        }
    }, function(t, e, r) {
        t.exports = r(4)
    }, function(t, e, r) {}, function(t, e) {
        function _typeof2(t) {
            return (_typeof2 = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function _typeof(e) {
            return "function" === typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? t.exports = _typeof = function(t) {
                return _typeof2(t)
            } : t.exports = _typeof = function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof2(t)
            }, _typeof(e)
        }
        t.exports = _typeof
    }, function(t, e, r) {
        "use strict";
        r.r(e);
        r(2);
        var a = "${{amount}}";

        function formatMoney(t, e) {
            "string" === typeof t && (t = t.replace(".", ""));
            var r = "",
                o = /\{\{\s*(\w+)\s*\}\}/,
                n = e || a;

            function formatWithDelimiters(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ",",
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".";
                if (isNaN(t) || null == t) return 0;
                var o = (t = (t / 100).toFixed(e)).split(".");
                return o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1".concat(r)) + (o[1] ? a + o[1] : "")
            }
            switch (n.match(o)[1]) {
                case "amount":
                    r = formatWithDelimiters(t, 2);
                    break;
                case "amount_no_decimals":
                    r = formatWithDelimiters(t, 0);
                    break;
                case "amount_with_comma_separator":
                    r = formatWithDelimiters(t, 2, ".", ",");
                    break;
                case "amount_no_decimals_with_comma_separator":
                    r = formatWithDelimiters(t, 0, ".", ",")
            }
            return n.replace(o, r)
        }

        function _typeof(t) {
            return (_typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var o = "undefined" !== typeof globalThis && globalThis || "undefined" !== typeof self && self || "undefined" !== typeof o && o,
            n = {
                searchParams: "URLSearchParams" in o,
                iterable: "Symbol" in o && "iterator" in Symbol,
                blob: "FileReader" in o && "Blob" in o && function() {
                    try {
                        return new Blob, !0
                    } catch (t) {
                        return !1
                    }
                }(),
                formData: "FormData" in o,
                arrayBuffer: "ArrayBuffer" in o
            };
        if (n.arrayBuffer) var i = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            s = ArrayBuffer.isView || function(t) {
                return t && i.indexOf(Object.prototype.toString.call(t)) > -1
            };

        function normalizeName(t) {
            if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }

        function normalizeValue(t) {
            return "string" !== typeof t && (t = String(t)), t
        }

        function iteratorFor(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: void 0 === e,
                        value: e
                    }
                }
            };
            return n.iterable && (e[Symbol.iterator] = function() {
                return e
            }), e
        }

        function Headers(t) {
            this.map = {}, t instanceof Headers ? t.forEach((function(t, e) {
                this.append(e, t)
            }), this) : Array.isArray(t) ? t.forEach((function(t) {
                this.append(t[0], t[1])
            }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                this.append(e, t[e])
            }), this)
        }

        function consumed(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }

        function fileReaderReady(t) {
            return new Promise((function(e, r) {
                t.onload = function() {
                    e(t.result)
                }, t.onerror = function() {
                    r(t.error)
                }
            }))
        }

        function readBlobAsArrayBuffer(t) {
            var e = new FileReader,
                r = fileReaderReady(e);
            return e.readAsArrayBuffer(t), r
        }

        function bufferClone(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer
        }

        function Body() {
            return this.bodyUsed = !1, this._initBody = function(t) {
                var e;
                this.bodyUsed = this.bodyUsed, this._bodyInit = t, t ? "string" === typeof t ? this._bodyText = t : n.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : n.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : n.arrayBuffer && n.blob && ((e = t) && DataView.prototype.isPrototypeOf(e)) ? (this._bodyArrayBuffer = bufferClone(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || s(t)) ? this._bodyArrayBuffer = bufferClone(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, n.blob && (this.blob = function() {
                var t = consumed(this);
                if (t) return t;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                if (this._bodyArrayBuffer) {
                    var t = consumed(this);
                    return t || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer))
                }
                return this.blob().then(readBlobAsArrayBuffer)
            }), this.text = function() {
                var t = consumed(this);
                if (t) return t;
                if (this._bodyBlob) return function(t) {
                    var e = new FileReader,
                        r = fileReaderReady(e);
                    return e.readAsText(t), r
                }(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
                    for (var e = new Uint8Array(t), r = new Array(e.length), a = 0; a < e.length; a++) r[a] = String.fromCharCode(e[a]);
                    return r.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, n.formData && (this.formData = function() {
                return this.text().then(decode)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }
        Headers.prototype.append = function(t, e) {
            t = normalizeName(t), e = normalizeValue(e);
            var r = this.map[t];
            this.map[t] = r ? r + ", " + e : e
        }, Headers.prototype.delete = function(t) {
            delete this.map[normalizeName(t)]
        }, Headers.prototype.get = function(t) {
            return t = normalizeName(t), this.has(t) ? this.map[t] : null
        }, Headers.prototype.has = function(t) {
            return this.map.hasOwnProperty(normalizeName(t))
        }, Headers.prototype.set = function(t, e) {
            this.map[normalizeName(t)] = normalizeValue(e)
        }, Headers.prototype.forEach = function(t, e) {
            for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
        }, Headers.prototype.keys = function() {
            var t = [];
            return this.forEach((function(e, r) {
                t.push(r)
            })), iteratorFor(t)
        }, Headers.prototype.values = function() {
            var t = [];
            return this.forEach((function(e) {
                t.push(e)
            })), iteratorFor(t)
        }, Headers.prototype.entries = function() {
            var t = [];
            return this.forEach((function(e, r) {
                t.push([r, e])
            })), iteratorFor(t)
        }, n.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
        var c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

        function Request(t, e) {
            if (!(this instanceof Request)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var r = (e = e || {}).body;
            if (t instanceof Request) {
                if (t.bodyUsed) throw new TypeError("Already read");
                this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new Headers(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
            } else this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new Headers(e.headers)), this.method = function(t) {
                    var e = t.toUpperCase();
                    return c.indexOf(e) > -1 ? e : t
                }(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(r), ("GET" === this.method || "HEAD" === this.method) && ("no-store" === e.cache || "no-cache" === e.cache)) {
                var a = /([?&])_=[^&]*/;
                if (a.test(this.url)) this.url = this.url.replace(a, "$1_=" + (new Date).getTime());
                else {
                    this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (new Date).getTime()
                }
            }
        }

        function decode(t) {
            var e = new FormData;
            return t.trim().split("&").forEach((function(t) {
                if (t) {
                    var r = t.split("="),
                        a = r.shift().replace(/\+/g, " "),
                        o = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(a), decodeURIComponent(o))
                }
            })), e
        }

        function parseHeaders(t) {
            var e = new Headers;
            return t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
                var r = t.split(":"),
                    a = r.shift().trim();
                if (a) {
                    var o = r.join(":").trim();
                    e.append(a, o)
                }
            })), e
        }

        function Response(t, e) {
            if (!(this instanceof Response)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "", this.headers = new Headers(e.headers), this.url = e.url || "", this._initBody(t)
        }
        Request.prototype.clone = function() {
            return new Request(this, {
                body: this._bodyInit
            })
        }, Body.call(Request.prototype), Body.call(Response.prototype), Response.prototype.clone = function() {
            return new Response(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new Headers(this.headers),
                url: this.url
            })
        }, Response.error = function() {
            var t = new Response(null, {
                status: 0,
                statusText: ""
            });
            return t.type = "error", t
        };
        var l = [301, 302, 303, 307, 308];
        Response.redirect = function(t, e) {
            if (-1 === l.indexOf(e)) throw new RangeError("Invalid status code");
            return new Response(null, {
                status: e,
                headers: {
                    location: t
                }
            })
        };
        var u = o.DOMException;
        try {
            new u
        } catch (y) {
            (u = function(t, e) {
                this.message = t, this.name = e;
                var r = Error(t);
                this.stack = r.stack
            }).prototype = Object.create(Error.prototype), u.prototype.constructor = u
        }

        function fetch(t, e) {
            return new Promise((function(r, a) {
                var i = new Request(t, e);
                if (i.signal && i.signal.aborted) return a(new u("Aborted", "AbortError"));
                var s = new XMLHttpRequest;

                function abortXhr() {
                    s.abort()
                }
                s.onload = function() {
                    var t = {
                        status: s.status,
                        statusText: s.statusText,
                        headers: parseHeaders(s.getAllResponseHeaders() || "")
                    };
                    t.url = "responseURL" in s ? s.responseURL : t.headers.get("X-Request-URL");
                    var e = "response" in s ? s.response : s.responseText;
                    setTimeout((function() {
                        r(new Response(e, t))
                    }), 0)
                }, s.onerror = function() {
                    setTimeout((function() {
                        a(new TypeError("Network request failed"))
                    }), 0)
                }, s.ontimeout = function() {
                    setTimeout((function() {
                        a(new TypeError("Network request failed"))
                    }), 0)
                }, s.onabort = function() {
                    setTimeout((function() {
                        a(new u("Aborted", "AbortError"))
                    }), 0)
                }, s.open(i.method, function(t) {
                    try {
                        return "" === t && o.location.href ? o.location.href : t
                    } catch (e) {
                        return t
                    }
                }(i.url), !0), "include" === i.credentials ? s.withCredentials = !0 : "omit" === i.credentials && (s.withCredentials = !1), "responseType" in s && (n.blob ? s.responseType = "blob" : n.arrayBuffer && i.headers.get("Content-Type") && -1 !== i.headers.get("Content-Type").indexOf("application/octet-stream") && (s.responseType = "arraybuffer")), !e || "object" !== _typeof(e.headers) || e.headers instanceof Headers ? i.headers.forEach((function(t, e) {
                    s.setRequestHeader(e, t)
                })) : Object.getOwnPropertyNames(e.headers).forEach((function(t) {
                    s.setRequestHeader(t, normalizeValue(e.headers[t]))
                })), i.signal && (i.signal.addEventListener("abort", abortXhr), s.onreadystatechange = function() {
                    4 === s.readyState && i.signal.removeEventListener("abort", abortXhr)
                }), s.send("undefined" === typeof i._bodyInit ? null : i._bodyInit)
            }))
        }
        fetch.polyfill = !0, o.fetch || (o.fetch = fetch, o.Headers = Headers, o.Request = Request, o.Response = Response);
        var d = r(0),
            f = r.n(d);

        function _defineProperties(t, e) {
            for (var r = 0; r < e.length; r++) {
                var a = e[r];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
            }
        }
        var h = function() {
            function GoCart(t) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, GoCart);
                this.defaults = Object.assign({}, {
                    cartModalFail: ".js-go-cart-modal-fail",
                    cartModalFailClose: ".js-go-cart-modal-fail-close",
                    cartModal: ".js-go-cart-modal",
                    cartModalClose: ".js-go-cart-modal-close",
                    cartModalContent: ".js-go-cart-modal-content",
                    cartDrawer: ".js-go-cart-drawer",
                    cartDrawerContent: ".js-go-cart-drawer-content",
                    cartDrawerSubTotal: ".js-go-cart-drawer-subtotal",
                    cartDrawerFooter: ".js-go-cart-drawer-footer",
                    cartDrawerClose: ".js-go-cart-drawer-close",
                    cartMiniCart: ".js-go-cart-mini-cart",
                    cartMiniCartContent: ".js-go-cart-mini-cart-content",
                    cartMiniCartSubTotal: ".js-go-cart-mini-cart-subtotal",
                    cartMiniCartFooter: ".js-go-cart-mini-cart-footer",
                    cartTrigger: ".js-go-cart-trigger",
                    cartOverlay: ".js-go-cart-overlay",
                    cartCount: ".js-go-cart-counter",
                    addToCart: ".js-go-cart-add-to-cart",
                    removeFromCart: ".js-go-cart-remove-from-cart",
                    removeFromCartNoDot: "js-go-cart-remove-from-cart",
                    itemQuantity: ".js-go-cart-quantity",
                    itemQuantityPlus: ".js-go-cart-quantity-plus",
                    itemQuantityMinus: ".js-go-cart-quantity-minus",
                    cartMode: "drawer",
                    drawerDirection: "right",
                    displayModal: !1,
                    // moneyFormat: "${{amount}}", - defaults
                    moneyFormat: moneyFormat, // for uk,au,ca
                    labelAddedToCart: "was added to your cart.",
                    labelCartIsEmpty: "Your Cart is currently empty!",
                    labelQuantity: "Quantity:",
                    labelRemove: "Remove"
                }, t), this.cartModalFail = document.querySelector(this.defaults.cartModalFail), this.cartModalFailClose = document.querySelector(this.defaults.cartModalFailClose), this.cartModal = document.querySelector(this.defaults.cartModal), this.cartModalClose = document.querySelectorAll(this.defaults.cartModalClose), this.cartModalContent = document.querySelector(this.defaults.cartModalContent), this.cartDrawer = document.querySelector(this.defaults.cartDrawer), this.cartDrawerContent = document.querySelector(this.defaults.cartDrawerContent), this.cartDrawerSubTotal = document.querySelector(this.defaults.cartDrawerSubTotal), this.cartDrawerFooter = document.querySelector(this.defaults.cartDrawerFooter), this.cartDrawerClose = document.querySelector(this.defaults.cartDrawerClose), this.cartMiniCart = document.querySelector(this.defaults.cartMiniCart), this.cartMiniCartContent = document.querySelector(this.defaults.cartMiniCartContent), this.cartMiniCartSubTotal = document.querySelector(this.defaults.cartMiniCartSubTotal), this.cartMiniCartFooter = document.querySelector(this.defaults.cartMiniCartFooter), this.cartTrigger = document.querySelector(this.defaults.cartTrigger), this.cartOverlay = document.querySelector(this.defaults.cartOverlay), this.cartCount = document.querySelector(this.defaults.cartCount), this.addToCart = document.querySelectorAll(this.defaults.addToCart), this.removeFromCart = this.defaults.removeFromCart, this.removeFromCartNoDot = this.defaults.removeFromCartNoDot, this.itemQuantity = this.defaults.itemQuantity, this.itemQuantityPlus = this.defaults.itemQuantityPlus, this.itemQuantityMinus = this.defaults.itemQuantityMinus, this.cartMode = this.defaults.cartMode, this.drawerDirection = this.defaults.drawerDirection, this.displayModal = this.defaults.displayModal, this.moneyFormat = this.defaults.moneyFormat, this.labelAddedToCart = this.defaults.labelAddedToCart, this.labelCartIsEmpty = this.defaults.labelCartIsEmpty, this.labelQuantity = this.defaults.labelQuantity, this.labelRemove = this.defaults.labelRemove, this.init()
            }
            var moneyFormat = "${{amount}}";
            if (window.location.href.includes("device-2-ca")) {
                moneyFormat = "${{amount}} CAD";
            } else if (window.location.href.includes("device-2-au")) {
                moneyFormat = "${{amount}} AUD";
            } else if (window.location.href.includes("device-2-uk")) {
                moneyFormat = "£{{amount}} GBP";
            }
            var t, e, r;
            return t = GoCart, r = [{
                key: "removeItemAnimation",
                value: function(t) {
                    t.classList.add("is-invisible")
                }
            }], (e = [{
                key: "init",
                value: function() {
                    var t = this;
                    this.fetchCart(), this.isDrawerMode && this.setDrawerDirection(), document.addEventListener("click", (function(e) {
                        if (e.target.matches(t.defaults.addToCart)) {
                            e.preventDefault();
                            for (var r = e.target.parentNode;
                                "form" !== r.tagName.toLowerCase();) r = r.parentNode;
                            var a = r.getAttribute("id");
                            t.addItemToCart(a)
                        }
                    }), !1), this.cartTrigger.addEventListener("click", (function() {
                        t.isDrawerMode ? t.openCartDrawer() : t.openMiniCart(), t.openCartOverlay()
                    })), this.cartOverlay.addEventListener("click", (function() {
                        t.closeFailModal(), t.closeCartModal(), t.isDrawerMode ? t.closeCartDrawer() : t.closeMiniCart(), t.closeCartOverlay()
                    })), this.isDrawerMode && this.cartDrawerClose.addEventListener("click", (function() {
                        t.closeCartDrawer(), t.closeCartOverlay()
                    })), this.displayModal && this.cartModalClose.forEach((function(e) {
                        e.addEventListener("click", (function() {
                            t.closeFailModal(), t.closeCartModal(), t.isDrawerMode ? t.closeCartDrawer() : t.closeMiniCart(), t.closeCartOverlay()
                        }))
                    })), this.cartModalFailClose.addEventListener("click", (function() {
                        t.closeFailModal(), t.closeCartModal(), t.isDrawerMode ? t.closeCartDrawer() : t.closeMiniCart(), t.closeCartOverlay()
                    }))
                }
            }, {
                key: "fetchCart",
                value: function(t) {
                    var e = this;
                    window.fetch((window.Shopify.routes.root || "/") + "cart.js", {
                        credentials: "same-origin",
                        method: "GET"
                    }).then((function(t) {
                        return t.json()
                    })).then((function(r) {
                        return e.fetchHandler(r, t)
                    })).catch((function(t) {
                        throw e.ajaxRequestFail(), new Error(t)
                    }))
                }
            }, {
                key: "addItemToCart",
                value: function(t) {
                    var e = this,
                        r = document.querySelector("#".concat(t)),
                        a = f()(r, {
                            hash: !0
                        });
                    window.fetch((window.Shopify.routes.root || "/") + "cart/add.js", {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(a)
                    }).then((function(t) {
                        return t.json()
                    })).then((function(t) {
                        return e.addItemToCartHandler(t)
                    })).catch((function(t) {
                        throw e.ajaxRequestFail(), new Error(t)
                    }))
                }
            }, {
                key: "removeItem",
                value: function(t) {
                    var e = this;
                    window.fetch((window.Shopify.routes.root || "/") + "cart/change.js", {
                        method: "POST",
                        credentials: "same-origin",
                        body: JSON.stringify({
                            quantity: 0,
                            line: t
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((function(t) {
                        return t.json()
                    })).then((function() {
                        return e.fetchCart()
                    })).catch((function(t) {
                        throw e.ajaxRequestFail(), new Error(t)
                    }))
                }
            }, {
                key: "changeItemQuantity",
                value: function(t, e) {
                    var r = this;
                    window.fetch((window.Shopify.routes.root || "/") + "cart/change.js", {
                        method: "POST",
                        credentials: "same-origin",
                        body: JSON.stringify({
                            quantity: e,
                            line: t
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then((function(t) {
                        return t.json()
                    })).then((function() {
                        return r.fetchCart()
                    })).catch((function(t) {
                        throw r.ajaxRequestFail(), new Error(t)
                    }))
                }
            }, {
                key: "cartItemCount",
                value: function(t) {
                    this.cartCount.innerHTML = t.item_count
                }
            }, {
                key: "fetchAndOpenCart",
                value: function() {
                    var t = this;
                    this.fetchCart((function() {
                        t.isDrawerMode ? t.openCartDrawer() : t.openMiniCart(), t.openCartOverlay()
                    }))
                }
            }, {
                key: "fetchAndOpenModal",
                value: function(t) {
                    var e = this;
                    this.fetchCart((function() {
                        e.renderCartModal(t), e.openCartModal(), e.openCartOverlay()
                    }))
                }
            }, {
                key: "fetchHandler",
                value: function(t, e) {
                    this.cartItemCount(t), this.isDrawerMode ? 0 === t.item_count ? (this.renderBlankCartDrawer(), this.cartDrawerFooter.classList.add("is-invisible")) : (this.renderDrawerCart(t), this.cartDrawerFooter.classList.remove("is-invisible"), "function" === typeof e && e(t)) : 0 === t.item_count ? (this.renderBlankMiniCart(), this.cartMiniCartFooter.classList.add("is-invisible")) : (this.renderMiniCart(t), this.cartMiniCartFooter.classList.remove("is-invisible"), "function" === typeof e && e(t))
                }
            }, {
                key: "addItemToCartHandler",
                value: function(t) {
                    return this.displayModal ? this.fetchAndOpenModal(t) : this.fetchAndOpenCart()
                }
            }, {
                key: "ajaxRequestFail",
                value: function() {
                    this.openFailModal(), this.openCartOverlay()
                }
            }, {
                key: "renderCartModal",
                value: function(t) {
                    this.clearCartModal();
                    var e = t.variant_title;
                    e = null === e ? "" : "(".concat(e, ")");
                    var r = '\n        <div class="go-cart-modal-item">\n            <div class="go-cart-item__image" style="background-image: url('.concat(t.image, ');"></div>\n            <div class="go-cart-item__info">\n                <a href="').concat(t.url, '" class="go-cart-item__title">').concat(t.product_title, " ").concat(e, "</a> ").concat(this.labelAddedToCart, "\n            </div>\n        </div>\n      ");
                    this.cartModalContent.innerHTML += r
                }
            }, {
                key: "renderDrawerCart",
                value: function(t) {
                    var e = this;
                    this.clearCartDrawer(), t.items.forEach((function(t, r) {
                        var a = t.variant_title;
                        null === a && (a = "");
                        var o = '\n        <div class="go-cart-item__single "  data-line="'.concat(Number(r + 1), '">\n            <div class="go-cart-item__info-wrapper">\n                <div class="go-cart-item__image" id="p-').concat(t.product_id, '" style="background-image: url(').concat(t.image, ');"></div>\n                <div class="go-cart-item__info">\n                    <a href="').concat(t.url, '" class="go-cart-item__title">').concat(t.product_title, '</a>\n                    <div class="go-cart-item__variant">').concat(a, '</div>\n                    <div class="go-cart-item__quantity">\n                        <span class="go-cart-item__quantity-label">').concat(e.labelQuantity, ' </span>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-minus">-</span>\n                        <input class="go-cart-item__quantity-number js-go-cart-quantity" type="number" value="').concat(t.quantity, '" disabled>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-plus">+</span>\n                    </div>\n                </div>\n            </div>\n            <div class="go-cart-item__price ssss"><span id="c-').concat(t.product_id, '"></span>').concat(formatMoney(t.line_price, e.moneyFormat),  '</div>\n            <a class="go-cart-item__remove ').concat(e.removeFromCartNoDot, '">').concat(e.labelRemove, "</a>\n        </div>\n      ");
                        e.cartDrawerContent.innerHTML += o
                    })), this.cartDrawerSubTotal.innerHTML = formatMoney(t.total_price, this.moneyFormat), this.cartDrawerSubTotal.parentNode.classList.remove("is-invisible"), document.querySelectorAll(this.removeFromCart).forEach((function(t) {
                        t.addEventListener("click", (function() {
                            GoCart.removeItemAnimation(t.parentNode);
                            var r = t.parentNode.getAttribute("data-line");
                            e.removeItem(r)
                        }))
                    })), document.querySelectorAll(this.itemQuantityPlus).forEach((function(t) {
                        t.addEventListener("click", (function() {
                            var r = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-line"),
                                a = Number(t.parentNode.querySelector(e.itemQuantity).value) + 1;
                            e.changeItemQuantity(r, a)
                        }))
                    })), document.querySelectorAll(this.itemQuantityMinus).forEach((function(t) {
                        t.addEventListener("click", (function() {
                            var r = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-line"),
                                a = Number(t.parentNode.querySelector(e.itemQuantity).value) - 1;
                            e.changeItemQuantity(r, a), 0 === Number(t.parentNode.querySelector(e.itemQuantity).value - 1) && GoCart.removeItemAnimation(t.parentNode.parentNode.parentNode.parentNode)
                        }))
                    }))
                     $(".cart-header-text").show();
                }
            }, {
                key: "renderMiniCart",
                value: function(t) {
                    var e = this;
                    this.clearMiniCart(), t.items.forEach((function(t, r) {
                        var a = t.variant_title;
                        null === a && (a = "");
                        var o = '\n        <div class="go-cart-item__single" data-line="'.concat(Number(r + 1), '">\n            <div class="go-cart-item__info-wrapper">\n                <div class="go-cart-item__image" style="background-image: url(').concat(t.image, ');"></div>\n                <div class="go-cart-item__info">\n                    <a href="').concat(t.url, '" class="go-cart-item__title">').concat(t.product_title, '</a>\n                    <div class="go-cart-item__variant">').concat(a, '</div>\n                    <div class="go-cart-item__quantity">\n                        <span class="go-cart-item__quantity-label">').concat(e.labelQuantity, ' </span>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-minus">-</span>\n                        <input class="go-cart-item__quantity-number js-go-cart-quantity" type="number" value="').concat(t.quantity, '" disabled>\n                        <span class="go-cart-item__quantity-button js-go-cart-quantity-plus">+</span>\n                    </div>\n                </div>\n            </div>\n            <div class="go-cart-item__price ddd">').concat(formatMoney(t.line_price, e.moneyFormat), '</div>\n            <a class="go-cart-item__remove ').concat(e.removeFromCartNoDot, '">').concat(e.labelRemove, "</a>\n        </div>\n      ");
                        e.cartMiniCartContent.innerHTML += o
                    })), this.cartMiniCartSubTotal.innerHTML = formatMoney(t.total_price, this.moneyFormat), this.cartMiniCartSubTotal.parentNode.classList.remove("is-invisible"), document.querySelectorAll(this.removeFromCart).forEach((function(t) {
                        t.addEventListener("click", (function() {
                            GoCart.removeItemAnimation(t.parentNode);
                            var r = t.parentNode.getAttribute("data-line");
                            e.removeItem(r)
                        }))
                    })), document.querySelectorAll(this.itemQuantityPlus).forEach((function(t) {
                        t.addEventListener("click", (function() {
                            var r = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-line"),
                                a = Number(t.parentNode.querySelector(e.itemQuantity).value) + 1;
                            e.changeItemQuantity(r, a)
                        }))
                    })), document.querySelectorAll(this.itemQuantityMinus).forEach((function(t) {
                        t.addEventListener("click", (function() {
                            var r = t.parentNode.parentNode.parentNode.parentNode.getAttribute("data-line"),
                                a = Number(t.parentNode.querySelector(e.itemQuantity).value) - 1;
                            e.changeItemQuantity(r, a), 0 === Number(t.parentNode.querySelector(e.itemQuantity).value - 1) && GoCart.removeItemAnimation(t.parentNode.parentNode.parentNode.parentNode)
                        }))
                    }))
                   
                }
            }, {
                key: "renderBlankCartDrawer",
                value: function() {
                    this.cartDrawerSubTotal.parentNode.classList.add("is-invisible"), this.clearCartDrawer(), this.cartDrawerContent.innerHTML = '<div class="go-cart__empty">'.concat(this.labelCartIsEmpty, "</div>")
                }
            }, {
                key: "renderBlankMiniCart",
                value: function() {
                    this.cartMiniCartSubTotal.parentNode.classList.add("is-invisible"), this.clearMiniCart(), this.cartMiniCartContent.innerHTML = '<div class="go-cart__empty">'.concat(this.labelCartIsEmpty, "</div>");
                  //$(".cart-header-text").hide();
                }
            }, {
                key: "clearCartDrawer",
                value: function() {
                    this.cartDrawerContent.innerHTML = ""
                    $(".cart-header-text").hide();
                }
            }, {
                key: "clearMiniCart",
                value: function() {
                    this.cartMiniCartContent.innerHTML = ""
                }
            }, {
                key: "clearCartModal",
                value: function() {
                    this.cartModalContent.innerHTML = ""
                }
            }, {
                key: "openCartDrawer",
                value: function() {
                    this.cartDrawer.classList.add("is-open")
                }
            }, {
                key: "closeCartDrawer",
                value: function() {
                    this.cartDrawer.classList.remove("is-open")
                }
            }, {
                key: "openMiniCart",
                value: function() {
                    this.cartMiniCart.classList.add("is-open")
                }
            }, {
                key: "closeMiniCart",
                value: function() {
                    this.cartMiniCart.classList.remove("is-open")
                }
            }, {
                key: "openFailModal",
                value: function() {
                    this.cartModalFail.classList.add("is-open")
                }
            }, {
                key: "closeFailModal",
                value: function() {
                    this.cartModalFail.classList.remove("is-open")
                }
            }, {
                key: "openCartModal",
                value: function() {
                    this.cartModal.classList.add("is-open")
                }
            }, {
                key: "closeCartModal",
                value: function() {
                    this.cartModal.classList.remove("is-open")
                }
            }, {
                key: "openCartOverlay",
                value: function() {
                    this.cartOverlay.classList.add("is-open")
                }
            }, {
                key: "closeCartOverlay",
                value: function() {
                    this.cartOverlay.classList.remove("is-open")
                }
            }, {
                key: "setDrawerDirection",
                value: function() {
                    this.cartDrawer.classList.add("go-cart__drawer--".concat(this.drawerDirection))
                }
            }, {
                key: "isDrawerMode",
                get: function() {
                    return "drawer" === this.cartMode
                }
            }]) && _defineProperties(t.prototype, e), r && _defineProperties(t, r), GoCart
        }();
        e.default = h
    }]).default
}));

 $(document).on('click','.addcart',function(){
    var quantity = $(this).attr('v_qty');
    var id= $(this).attr('v_id');
        var compare_at_price;
    $.ajax({
        type: 'POST',
        url: '/cart/add.js',
        dataType: 'json',
        data: {id:id,quantity:quantity, compare_at_price:id.compare_at_price},
        success: function(){
            comparePrice = id.compare_at_price;
            var goCart = new GoCart();
            $(".js-go-cart-trigger").trigger("click")
        }
    });
});

  function replaceText(originalText, replacements) {
    let modifiedText = originalText;
    for (let [oldText, newText] of Object.entries(replacements)) {
      const regex = new RegExp(oldText, 'g');
      modifiedText = modifiedText.replace(regex, newText);
    }
    return modifiedText;
  }

  function replaceTextInPage(replacements) {
    const body = document.body;
    const originalHTML = body.innerHTML;
    const newHTML = replaceText(originalHTML, replacements);
    body.innerHTML = newHTML;
  }

  document.addEventListener('DOMContentLoaded', () => {
    if(window.textReplacements) {
        replaceTextInPage(window.textReplacements);
    }
  });


//# sourceMappingURL=index.js.map