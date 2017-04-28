! function e(t, n, r) {
    function i(o, a) {
        if (!n[o]) {
            if (!t[o]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(o, !0);
                if (s) return s(o, !0);
                throw new Error("Cannot find module '" + o + "'")
            }
            var u = n[o] = {
                exports: {}
            };
            t[o][0].call(u.exports, function(e) {
                var n = t[o][1][e];
                return i(n ? n : e)
            }, u, u.exports, e, t, n, r)
        }
        return n[o].exports
    }
    for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) i(r[o]);
    return i
}({
    1: [function(e, t, n) {
        (function(t, r, i, s, o, a, l, u, h) {
            function i(e, t, n) {
                if (!(this instanceof i)) return new i(e, t, n);
                var r = typeof e;
                if ("base64" === t && "string" === r)
                    for (e = F(e); e.length % 4 !== 0;) e += "=";
                var s;
                if ("number" === r) s = N(e);
                else if ("string" === r) s = i.byteLength(e, t);
                else {
                    if ("object" !== r) throw new Error("First argument needs to be a number, array or string.");
                    s = N(e.length)
                }
                var o;
                i._useTypedArrays ? o = i._augment(new Uint8Array(s)) : (o = this, o.length = s, o._isBuffer = !0);
                var a;
                if (i._useTypedArrays && "number" == typeof e.byteLength) o._set(e);
                else if (P(e))
                    for (a = 0; a < s; a++) i.isBuffer(e) ? o[a] = e.readUInt8(a) : o[a] = e[a];
                else if ("string" === r) o.write(e, 0, t);
                else if ("number" === r && !i._useTypedArrays && !n)
                    for (a = 0; a < s; a++) o[a] = 0;
                return o
            }

            function f(e, t, n, r) {
                n = Number(n) || 0;
                var s = e.length - n;
                r ? (r = Number(r), r > s && (r = s)) : r = s;
                var o = t.length;
                J(o % 2 === 0, "Invalid hex string"), r > o / 2 && (r = o / 2);
                for (var a = 0; a < r; a++) {
                    var l = parseInt(t.substr(2 * a, 2), 16);
                    J(!isNaN(l), "Invalid hex string"), e[n + a] = l
                }
                return i._charsWritten = 2 * a, a
            }

            function c(e, t, n, r) {
                var s = i._charsWritten = z(j(t), e, n, r);
                return s
            }

            function d(e, t, n, r) {
                var s = i._charsWritten = z(O(t), e, n, r);
                return s
            }

            function g(e, t, n, r) {
                return d(e, t, n, r)
            }

            function m(e, t, n, r) {
                var s = i._charsWritten = z(G(t), e, n, r);
                return s
            }

            function p(e, t, n, r) {
                var s = i._charsWritten = z(X(t), e, n, r);
                return s
            }

            function y(e, t, n) {
                return 0 === t && n === e.length ? Q.fromByteArray(e) : Q.fromByteArray(e.slice(t, n))
            }

            function w(e, t, n) {
                var r = "",
                    i = "";
                n = Math.min(e.length, n);
                for (var s = t; s < n; s++) e[s] <= 127 ? (r += Y(i) + String.fromCharCode(e[s]), i = "") : i += "%" + e[s].toString(16);
                return r + Y(i)
            }

            function b(e, t, n) {
                var r = "";
                n = Math.min(e.length, n);
                for (var i = t; i < n; i++) r += String.fromCharCode(e[i]);
                return r
            }

            function v(e, t, n) {
                return b(e, t, n)
            }

            function A(e, t, n) {
                var r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                for (var i = "", s = t; s < n; s++) i += $(e[s]);
                return i
            }

            function E(e, t, n) {
                for (var r = e.slice(t, n), i = "", s = 0; s < r.length; s += 2) i += String.fromCharCode(r[s] + 256 * r[s + 1]);
                return i
            }

            function T(e, t, n, r) {
                r || (J("boolean" == typeof n, "missing or invalid endian"), J(void 0 !== t && null !== t, "missing offset"), J(t + 1 < e.length, "Trying to read beyond buffer length"));
                var i = e.length;
                if (!(t >= i)) {
                    var s;
                    return n ? (s = e[t], t + 1 < i && (s |= e[t + 1] << 8)) : (s = e[t] << 8, t + 1 < i && (s |= e[t + 1])), s
                }
            }

            function _(e, t, n, r) {
                r || (J("boolean" == typeof n, "missing or invalid endian"), J(void 0 !== t && null !== t, "missing offset"), J(t + 3 < e.length, "Trying to read beyond buffer length"));
                var i = e.length;
                if (!(t >= i)) {
                    var s;
                    return n ? (t + 2 < i && (s = e[t + 2] << 16), t + 1 < i && (s |= e[t + 1] << 8), s |= e[t], t + 3 < i && (s += e[t + 3] << 24 >>> 0)) : (t + 1 < i && (s = e[t + 1] << 16), t + 2 < i && (s |= e[t + 2] << 8), t + 3 < i && (s |= e[t + 3]), s += e[t] << 24 >>> 0), s
                }
            }

            function B(e, t, n, r) {
                r || (J("boolean" == typeof n, "missing or invalid endian"), J(void 0 !== t && null !== t, "missing offset"), J(t + 1 < e.length, "Trying to read beyond buffer length"));
                var i = e.length;
                if (!(t >= i)) {
                    var s = T(e, t, n, !0),
                        o = 32768 & s;
                    return o ? (65535 - s + 1) * -1 : s
                }
            }

            function x(e, t, n, r) {
                r || (J("boolean" == typeof n, "missing or invalid endian"), J(void 0 !== t && null !== t, "missing offset"), J(t + 3 < e.length, "Trying to read beyond buffer length"));
                var i = e.length;
                if (!(t >= i)) {
                    var s = _(e, t, n, !0),
                        o = 2147483648 & s;
                    return o ? (4294967295 - s + 1) * -1 : s
                }
            }

            function I(e, t, n, r) {
                return r || (J("boolean" == typeof n, "missing or invalid endian"), J(t + 3 < e.length, "Trying to read beyond buffer length")), K.read(e, t, n, 23, 4)
            }

            function R(e, t, n, r) {
                return r || (J("boolean" == typeof n, "missing or invalid endian"), J(t + 7 < e.length, "Trying to read beyond buffer length")), K.read(e, t, n, 52, 8)
            }

            function L(e, t, n, r, i) {
                i || (J(void 0 !== t && null !== t, "missing value"), J("boolean" == typeof r, "missing or invalid endian"), J(void 0 !== n && null !== n, "missing offset"), J(n + 1 < e.length, "trying to write beyond buffer length"), H(t, 65535));
                var s = e.length;
                if (!(n >= s))
                    for (var o = 0, a = Math.min(s - n, 2); o < a; o++) e[n + o] = (t & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
            }

            function S(e, t, n, r, i) {
                i || (J(void 0 !== t && null !== t, "missing value"), J("boolean" == typeof r, "missing or invalid endian"), J(void 0 !== n && null !== n, "missing offset"), J(n + 3 < e.length, "trying to write beyond buffer length"), H(t, 4294967295));
                var s = e.length;
                if (!(n >= s))
                    for (var o = 0, a = Math.min(s - n, 4); o < a; o++) e[n + o] = t >>> 8 * (r ? o : 3 - o) & 255
            }

            function D(e, t, n, r, i) {
                i || (J(void 0 !== t && null !== t, "missing value"), J("boolean" == typeof r, "missing or invalid endian"), J(void 0 !== n && null !== n, "missing offset"), J(n + 1 < e.length, "Trying to write beyond buffer length"), V(t, 32767, -32768));
                var s = e.length;
                n >= s || (t >= 0 ? L(e, t, n, r, i) : L(e, 65535 + t + 1, n, r, i))
            }

            function U(e, t, n, r, i) {
                i || (J(void 0 !== t && null !== t, "missing value"), J("boolean" == typeof r, "missing or invalid endian"), J(void 0 !== n && null !== n, "missing offset"), J(n + 3 < e.length, "Trying to write beyond buffer length"), V(t, 2147483647, -2147483648));
                var s = e.length;
                n >= s || (t >= 0 ? S(e, t, n, r, i) : S(e, 4294967295 + t + 1, n, r, i))
            }

            function M(e, t, n, r, i) {
                i || (J(void 0 !== t && null !== t, "missing value"), J("boolean" == typeof r, "missing or invalid endian"), J(void 0 !== n && null !== n, "missing offset"), J(n + 3 < e.length, "Trying to write beyond buffer length"), W(t, 3.4028234663852886e38, -3.4028234663852886e38));
                var s = e.length;
                n >= s || K.write(e, t, n, r, 23, 4)
            }

            function C(e, t, n, r, i) {
                i || (J(void 0 !== t && null !== t, "missing value"), J("boolean" == typeof r, "missing or invalid endian"), J(void 0 !== n && null !== n, "missing offset"), J(n + 7 < e.length, "Trying to write beyond buffer length"), W(t, 1.7976931348623157e308, -1.7976931348623157e308));
                var s = e.length;
                n >= s || K.write(e, t, n, r, 52, 8)
            }

            function F(e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
            }

            function q(e, t, n) {
                return "number" != typeof e ? n : (e = ~~e, e >= t ? t : e >= 0 ? e : (e += t, e >= 0 ? e : 0))
            }

            function N(e) {
                return e = ~~Math.ceil(+e), e < 0 ? 0 : e
            }

            function k(e) {
                return (Array.isArray || function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                })(e)
            }

            function P(e) {
                return k(e) || i.isBuffer(e) || e && "object" == typeof e && "number" == typeof e.length
            }

            function $(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function j(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    if (r <= 127) t.push(e.charCodeAt(n));
                    else {
                        var i = n;
                        r >= 55296 && r <= 57343 && n++;
                        for (var s = encodeURIComponent(e.slice(i, n + 1)).substr(1).split("%"), o = 0; o < s.length; o++) t.push(parseInt(s[o], 16))
                    }
                }
                return t
            }

            function O(e) {
                for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                return t
            }

            function X(e) {
                for (var t, n, r, i = [], s = 0; s < e.length; s++) t = e.charCodeAt(s), n = t >> 8, r = t % 256, i.push(r), i.push(n);
                return i
            }

            function G(e) {
                return Q.toByteArray(e)
            }

            function z(e, t, n, r) {
                for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); i++) t[i + n] = e[i];
                return i
            }

            function Y(e) {
                try {
                    return decodeURIComponent(e)
                } catch (t) {
                    return String.fromCharCode(65533)
                }
            }

            function H(e, t) {
                J("number" == typeof e, "cannot write a non-number as a number"), J(e >= 0, "specified a negative value for writing an unsigned value"), J(e <= t, "value is larger than maximum value for type"), J(Math.floor(e) === e, "value has a fractional component")
            }

            function V(e, t, n) {
                J("number" == typeof e, "cannot write a non-number as a number"), J(e <= t, "value larger than maximum allowed value"), J(e >= n, "value smaller than minimum allowed value"), J(Math.floor(e) === e, "value has a fractional component")
            }

            function W(e, t, n) {
                J("number" == typeof e, "cannot write a non-number as a number"), J(e <= t, "value larger than maximum allowed value"), J(e >= n, "value smaller than minimum allowed value")
            }

            function J(e, t) {
                if (!e) throw new Error(t || "Failed assertion")
            }
            var Q = e("base64-js"),
                K = e("ieee754");
            n.Buffer = i, n.SlowBuffer = i, n.INSPECT_MAX_BYTES = 50, i.poolSize = 8192, i._useTypedArrays = function() {
                try {
                    var e = new ArrayBuffer(0),
                        t = new Uint8Array(e);
                    return t.foo = function() {
                        return 42
                    }, 42 === t.foo() && "function" == typeof t.subarray
                } catch (n) {
                    return !1
                }
            }(), i.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, i.isBuffer = function(e) {
                return !(null === e || void 0 === e || !e._isBuffer)
            }, i.byteLength = function(e, t) {
                var n;
                switch (e += "", t || "utf8") {
                    case "hex":
                        n = e.length / 2;
                        break;
                    case "utf8":
                    case "utf-8":
                        n = j(e).length;
                        break;
                    case "ascii":
                    case "binary":
                    case "raw":
                        n = e.length;
                        break;
                    case "base64":
                        n = G(e).length;
                        break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        n = 2 * e.length;
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return n
            }, i.concat = function(e, t) {
                if (J(k(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new i(0);
                if (1 === e.length) return e[0];
                var n;
                if ("number" != typeof t)
                    for (t = 0, n = 0; n < e.length; n++) t += e[n].length;
                var r = new i(t),
                    s = 0;
                for (n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.copy(r, s), s += o.length
                }
                return r
            }, i.prototype.write = function(e, t, n, r) {
                if (isFinite(t)) isFinite(n) || (r = n, n = void 0);
                else {
                    var i = r;
                    r = t, t = n, n = i
                }
                t = Number(t) || 0;
                var s = this.length - t;
                n ? (n = Number(n), n > s && (n = s)) : n = s, r = String(r || "utf8").toLowerCase();
                var o;
                switch (r) {
                    case "hex":
                        o = f(this, e, t, n);
                        break;
                    case "utf8":
                    case "utf-8":
                        o = c(this, e, t, n);
                        break;
                    case "ascii":
                        o = d(this, e, t, n);
                        break;
                    case "binary":
                        o = g(this, e, t, n);
                        break;
                    case "base64":
                        o = m(this, e, t, n);
                        break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        o = p(this, e, t, n);
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return o
            }, i.prototype.toString = function(e, t, n) {
                var r = this;
                if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, n = void 0 !== n ? Number(n) : n = r.length, n === t) return "";
                var i;
                switch (e) {
                    case "hex":
                        i = A(r, t, n);
                        break;
                    case "utf8":
                    case "utf-8":
                        i = w(r, t, n);
                        break;
                    case "ascii":
                        i = b(r, t, n);
                        break;
                    case "binary":
                        i = v(r, t, n);
                        break;
                    case "base64":
                        i = y(r, t, n);
                        break;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        i = E(r, t, n);
                        break;
                    default:
                        throw new Error("Unknown encoding")
                }
                return i
            }, i.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, i.prototype.copy = function(e, t, n, r) {
                var s = this;
                if (n || (n = 0), r || 0 === r || (r = this.length), t || (t = 0), r !== n && 0 !== e.length && 0 !== s.length) {
                    J(r >= n, "sourceEnd < sourceStart"), J(t >= 0 && t < e.length, "targetStart out of bounds"), J(n >= 0 && n < s.length, "sourceStart out of bounds"), J(r >= 0 && r <= s.length, "sourceEnd out of bounds"), r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    var o = r - n;
                    if (o < 100 || !i._useTypedArrays)
                        for (var a = 0; a < o; a++) e[a + t] = this[a + n];
                    else e._set(this.subarray(n, n + o), t)
                }
            }, i.prototype.slice = function(e, t) {
                var n = this.length;
                if (e = q(e, n, 0), t = q(t, n, n), i._useTypedArrays) return i._augment(this.subarray(e, t));
                for (var r = t - e, s = new i(r, (void 0), (!0)), o = 0; o < r; o++) s[o] = this[o + e];
                return s
            }, i.prototype.get = function(e) {
                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
            }, i.prototype.set = function(e, t) {
                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
            }, i.prototype.readUInt8 = function(e, t) {
                if (t || (J(void 0 !== e && null !== e, "missing offset"), J(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e]
            }, i.prototype.readUInt16LE = function(e, t) {
                return T(this, e, !0, t)
            }, i.prototype.readUInt16BE = function(e, t) {
                return T(this, e, !1, t)
            }, i.prototype.readUInt32LE = function(e, t) {
                return _(this, e, !0, t)
            }, i.prototype.readUInt32BE = function(e, t) {
                return _(this, e, !1, t)
            }, i.prototype.readInt8 = function(e, t) {
                if (t || (J(void 0 !== e && null !== e, "missing offset"), J(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) {
                    var n = 128 & this[e];
                    return n ? (255 - this[e] + 1) * -1 : this[e]
                }
            }, i.prototype.readInt16LE = function(e, t) {
                return B(this, e, !0, t)
            }, i.prototype.readInt16BE = function(e, t) {
                return B(this, e, !1, t)
            }, i.prototype.readInt32LE = function(e, t) {
                return x(this, e, !0, t)
            }, i.prototype.readInt32BE = function(e, t) {
                return x(this, e, !1, t)
            }, i.prototype.readFloatLE = function(e, t) {
                return I(this, e, !0, t)
            }, i.prototype.readFloatBE = function(e, t) {
                return I(this, e, !1, t)
            }, i.prototype.readDoubleLE = function(e, t) {
                return R(this, e, !0, t)
            }, i.prototype.readDoubleBE = function(e, t) {
                return R(this, e, !1, t)
            }, i.prototype.writeUInt8 = function(e, t, n) {
                n || (J(void 0 !== e && null !== e, "missing value"), J(void 0 !== t && null !== t, "missing offset"), J(t < this.length, "trying to write beyond buffer length"), H(e, 255)), t >= this.length || (this[t] = e)
            }, i.prototype.writeUInt16LE = function(e, t, n) {
                L(this, e, t, !0, n)
            }, i.prototype.writeUInt16BE = function(e, t, n) {
                L(this, e, t, !1, n)
            }, i.prototype.writeUInt32LE = function(e, t, n) {
                S(this, e, t, !0, n)
            }, i.prototype.writeUInt32BE = function(e, t, n) {
                S(this, e, t, !1, n)
            }, i.prototype.writeInt8 = function(e, t, n) {
                n || (J(void 0 !== e && null !== e, "missing value"), J(void 0 !== t && null !== t, "missing offset"), J(t < this.length, "Trying to write beyond buffer length"), V(e, 127, -128)), t >= this.length || (e >= 0 ? this.writeUInt8(e, t, n) : this.writeUInt8(255 + e + 1, t, n))
            }, i.prototype.writeInt16LE = function(e, t, n) {
                D(this, e, t, !0, n)
            }, i.prototype.writeInt16BE = function(e, t, n) {
                D(this, e, t, !1, n)
            }, i.prototype.writeInt32LE = function(e, t, n) {
                U(this, e, t, !0, n)
            }, i.prototype.writeInt32BE = function(e, t, n) {
                U(this, e, t, !1, n)
            }, i.prototype.writeFloatLE = function(e, t, n) {
                M(this, e, t, !0, n)
            }, i.prototype.writeFloatBE = function(e, t, n) {
                M(this, e, t, !1, n)
            }, i.prototype.writeDoubleLE = function(e, t, n) {
                C(this, e, t, !0, n)
            }, i.prototype.writeDoubleBE = function(e, t, n) {
                C(this, e, t, !1, n)
            }, i.prototype.fill = function(e, t, n) {
                if (e || (e = 0), t || (t = 0), n || (n = this.length), "string" == typeof e && (e = e.charCodeAt(0)), J("number" == typeof e && !isNaN(e), "value is not a number"), J(n >= t, "end < start"), n !== t && 0 !== this.length) {
                    J(t >= 0 && t < this.length, "start out of bounds"), J(n >= 0 && n <= this.length, "end out of bounds");
                    for (var r = t; r < n; r++) this[r] = e
                }
            }, i.prototype.inspect = function() {
                for (var e = [], t = this.length, r = 0; r < t; r++)
                    if (e[r] = $(this[r]), r === n.INSPECT_MAX_BYTES) {
                        e[r + 1] = "...";
                        break
                    }
                return "<Buffer " + e.join(" ") + ">"
            }, i.prototype.toArrayBuffer = function() {
                if ("undefined" != typeof Uint8Array) {
                    if (i._useTypedArrays) return new i(this).buffer;
                    for (var e = new Uint8Array(this.length), t = 0, n = e.length; t < n; t += 1) e[t] = this[t];
                    return e.buffer
                }
                throw new Error("Buffer.toArrayBuffer not supported in this browser")
            };
            var Z = i.prototype;
            i._augment = function(e) {
                return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = Z.get, e.set = Z.set, e.write = Z.write, e.toString = Z.toString, e.toLocaleString = Z.toString, e.toJSON = Z.toJSON, e.copy = Z.copy, e.slice = Z.slice, e.readUInt8 = Z.readUInt8, e.readUInt16LE = Z.readUInt16LE, e.readUInt16BE = Z.readUInt16BE, e.readUInt32LE = Z.readUInt32LE, e.readUInt32BE = Z.readUInt32BE, e.readInt8 = Z.readInt8, e.readInt16LE = Z.readInt16LE, e.readInt16BE = Z.readInt16BE, e.readInt32LE = Z.readInt32LE, e.readInt32BE = Z.readInt32BE, e.readFloatLE = Z.readFloatLE, e.readFloatBE = Z.readFloatBE, e.readDoubleLE = Z.readDoubleLE, e.readDoubleBE = Z.readDoubleBE, e.writeUInt8 = Z.writeUInt8, e.writeUInt16LE = Z.writeUInt16LE, e.writeUInt16BE = Z.writeUInt16BE, e.writeUInt32LE = Z.writeUInt32LE, e.writeUInt32BE = Z.writeUInt32BE, e.writeInt8 = Z.writeInt8, e.writeInt16LE = Z.writeInt16LE, e.writeInt16BE = Z.writeInt16BE, e.writeInt32LE = Z.writeInt32LE, e.writeInt32BE = Z.writeInt32BE, e.writeFloatLE = Z.writeFloatLE, e.writeFloatBE = Z.writeFloatBE, e.writeDoubleLE = Z.writeDoubleLE, e.writeDoubleBE = Z.writeDoubleBE, e.fill = Z.fill, e.inspect = Z.inspect, e.toArrayBuffer = Z.toArrayBuffer, e
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js", "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
    }, {
        "base64-js": 2,
        buffer: 1,
        ieee754: 3,
        oMfpAn: 4
    }],
    2: [function(e, t, n) {
        (function(e, t, r, i, s, o, a, l, u) {
            var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            ! function(e) {
                "use strict";

                function t(e) {
                    var t = e.charCodeAt(0);
                    return t === s || t === f ? 62 : t === o || t === c ? 63 : t < a ? -1 : t < a + 10 ? t - a + 26 + 26 : t < u + 26 ? t - u : t < l + 26 ? t - l + 26 : void 0
                }

                function n(e) {
                    function n(e) {
                        u[f++] = e
                    }
                    var r, s, o, a, l, u;
                    if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var h = e.length;
                    l = "=" === e.charAt(h - 2) ? 2 : "=" === e.charAt(h - 1) ? 1 : 0, u = new i(3 * e.length / 4 - l), o = l > 0 ? e.length - 4 : e.length;
                    var f = 0;
                    for (r = 0, s = 0; r < o; r += 4, s += 3) a = t(e.charAt(r)) << 18 | t(e.charAt(r + 1)) << 12 | t(e.charAt(r + 2)) << 6 | t(e.charAt(r + 3)), n((16711680 & a) >> 16), n((65280 & a) >> 8), n(255 & a);
                    return 2 === l ? (a = t(e.charAt(r)) << 2 | t(e.charAt(r + 1)) >> 4, n(255 & a)) : 1 === l && (a = t(e.charAt(r)) << 10 | t(e.charAt(r + 1)) << 4 | t(e.charAt(r + 2)) >> 2, n(a >> 8 & 255), n(255 & a)), u
                }

                function r(e) {
                    function t(e) {
                        return h.charAt(e)
                    }

                    function n(e) {
                        return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e)
                    }
                    var r, i, s, o = e.length % 3,
                        a = "";
                    for (r = 0, s = e.length - o; r < s; r += 3) i = (e[r] << 16) + (e[r + 1] << 8) + e[r + 2], a += n(i);
                    switch (o) {
                        case 1:
                            i = e[e.length - 1], a += t(i >> 2), a += t(i << 4 & 63), a += "==";
                            break;
                        case 2:
                            i = (e[e.length - 2] << 8) + e[e.length - 1], a += t(i >> 10), a += t(i >> 4 & 63), a += t(i << 2 & 63), a += "="
                    }
                    return a
                }
                var i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                    s = "+".charCodeAt(0),
                    o = "/".charCodeAt(0),
                    a = "0".charCodeAt(0),
                    l = "a".charCodeAt(0),
                    u = "A".charCodeAt(0),
                    f = "-".charCodeAt(0),
                    c = "_".charCodeAt(0);
                e.toByteArray = n, e.fromByteArray = r
            }("undefined" == typeof n ? this.base64js = {} : n)
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js", "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
    }, {
        buffer: 1,
        oMfpAn: 4
    }],
    3: [function(e, t, n) {
        (function(e, t, r, i, s, o, a, l, u) {
            n.read = function(e, t, n, r, i) {
                var s, o, a = 8 * i - r - 1,
                    l = (1 << a) - 1,
                    u = l >> 1,
                    h = -7,
                    f = n ? i - 1 : 0,
                    c = n ? -1 : 1,
                    d = e[t + f];
                for (f += c, s = d & (1 << -h) - 1, d >>= -h, h += a; h > 0; s = 256 * s + e[t + f], f += c, h -= 8);
                for (o = s & (1 << -h) - 1, s >>= -h, h += r; h > 0; o = 256 * o + e[t + f], f += c, h -= 8);
                if (0 === s) s = 1 - u;
                else {
                    if (s === l) return o ? NaN : (d ? -1 : 1) * (1 / 0);
                    o += Math.pow(2, r), s -= u
                }
                return (d ? -1 : 1) * o * Math.pow(2, s - r)
            }, n.write = function(e, t, n, r, i, s) {
                var o, a, l, u = 8 * s - i - 1,
                    h = (1 << u) - 1,
                    f = h >> 1,
                    c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    d = r ? 0 : s - 1,
                    g = r ? 1 : -1,
                    m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = h) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -o)) < 1 && (o--, l *= 2), t += o + f >= 1 ? c / l : c * Math.pow(2, 1 - f), t * l >= 2 && (o++, l /= 2), o + f >= h ? (a = 0, o = h) : o + f >= 1 ? (a = (t * l - 1) * Math.pow(2, i), o += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + d] = 255 & a, d += g, a /= 256, i -= 8);
                for (o = o << i | a, u += i; u > 0; e[n + d] = 255 & o, d += g, o /= 256, u -= 8);
                e[n + d - g] |= 128 * m
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js", "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
    }, {
        buffer: 1,
        oMfpAn: 4
    }],
    4: [function(e, t, n) {
        (function(e, n, r, i, s, o, a, l, u) {
            function h() {}
            var e = t.exports = {};
            e.nextTick = function() {
                var e = "undefined" != typeof window && window.setImmediate,
                    t = "undefined" != typeof window && window.postMessage && window.addEventListener;
                if (e) return function(e) {
                    return window.setImmediate(e)
                };
                if (t) {
                    var n = [];
                    return window.addEventListener("message", function(e) {
                            var t = e.source;
                            if ((t === window || null === t) && "process-tick" === e.data && (e.stopPropagation(), n.length > 0)) {
                                var r = n.shift();
                                r()
                            }
                        }, !0),
                        function(e) {
                            n.push(e), window.postMessage("process-tick", "*")
                        }
                }
                return function(e) {
                    setTimeout(e, 0)
                }
            }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = h, e.addListener = h, e.once = h, e.off = h, e.removeListener = h, e.removeAllListeners = h, e.emit = h, e.binding = function(e) {
                throw new Error("process.binding is not supported")
            }, e.cwd = function() {
                return "/"
            }, e.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js", "/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
    }, {
        buffer: 1,
        oMfpAn: 4
    }],
    5: [function(e, t, n) {
        (function(e, n, r, i, s, o, a, l, u) {
            function h(e, t, n) {
                this.onchange = null, this.xRot = 0, this.yRot = 0, this.zRot = 0, this.scaleFactor = 3, this.dragging = !1, this.curX = 0, this.curY = 0, t && (this.canvas_ = t), n && (this.context_ = n)
            }
            t.exports = h
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/3D/cameraController.js", "/3D")
    }, {
        buffer: 1,
        oMfpAn: 4
    }],
    6: [function(e, t, n) {
        (function(e, n, r, i, s, o, a, l, u) {
            function h() {
                this.elements = Array(16), this.loadIdentity()
            }
            h.prototype = {
                scale: function(e, t, n) {
                    return this.elements[0] *= e, this.elements[1] *= e, this.elements[2] *= e, this.elements[3] *= e, this.elements[4] *= t, this.elements[5] *= t, this.elements[6] *= t, this.elements[7] *= t, this.elements[8] *= n, this.elements[9] *= n, this.elements[10] *= n, this.elements[11] *= n, this
                },
                translate: function(e, t, n) {
                    return this.elements[12] += this.elements[0] * e + this.elements[4] * t + this.elements[8] * n, this.elements[13] += this.elements[1] * e + this.elements[5] * t + this.elements[9] * n, this.elements[14] += this.elements[2] * e + this.elements[6] * t + this.elements[10] * n, this.elements[15] += this.elements[3] * e + this.elements[7] * t + this.elements[11] * n, this
                },
                rotate: function(e, t, n, r) {
                    var i = Math.sqrt(t * t + n * n + r * r),
                        s = Math.sin(e * Math.PI / 180),
                        o = Math.cos(e * Math.PI / 180);
                    if (i > 0) {
                        var a, l, u, f, c, d, g, m, p, y, w;
                        t /= i, n /= i, r /= i, a = t * t, l = n * n, u = r * r, f = t * n, c = n * r, d = r * t, g = t * s, m = n * s, p = r * s, y = 1 - o, w = new h, w.elements[0] = y * a + o, w.elements[1] = y * f - p, w.elements[2] = y * d + m, w.elements[3] = 0, w.elements[4] = y * f + p, w.elements[5] = y * l + o, w.elements[6] = y * c - g, w.elements[7] = 0, w.elements[8] = y * d - m, w.elements[9] = y * c + g, w.elements[10] = y * u + o, w.elements[11] = 0, w.elements[12] = 0, w.elements[13] = 0, w.elements[14] = 0, w.elements[15] = 1, w = w.multiply(this), this.elements = w.elements
                    }
                    return this
                },
                frustum: function(e, t, n, r, i, s) {
                    var o, a = t - e,
                        l = r - n,
                        u = s - i;
                    return i <= 0 || s <= 0 || a <= 0 || l <= 0 || u <= 0 ? this : (o = new h, o.elements[0] = 2 * i / a, o.elements[1] = o.elements[2] = o.elements[3] = 0, o.elements[5] = 2 * i / l, o.elements[4] = o.elements[6] = o.elements[7] = 0, o.elements[8] = (t + e) / a, o.elements[9] = (r + n) / l, o.elements[10] = -(i + s) / u, o.elements[11] = -1, o.elements[14] = -2 * i * s / u, o.elements[12] = o.elements[13] = o.elements[15] = 0, o = o.multiply(this), this.elements = o.elements, this)
                },
                perspective: function(e, t, n, r) {
                    var i = Math.tan(e / 360 * Math.PI) * n,
                        s = i * t;
                    return this.frustum(-s, s, -i, i, n, r)
                },
                ortho: function(e, t, n, r, i, s) {
                    var o = t - e,
                        a = r - n,
                        l = s - i,
                        u = new h;
                    return 0 == o || 0 == a || 0 == l ? this : (u.elements[0] = 2 / o, u.elements[12] = -(t + e) / o, u.elements[5] = 2 / a, u.elements[13] = -(r + n) / a, u.elements[10] = -2 / l, u.elements[14] = -(i + s) / l, u = u.multiply(this), this.elements = u.elements, this)
                },
                multiply: function(e) {
                    for (var t = new h, n = 0; n < 4; n++) t.elements[4 * n + 0] = this.elements[4 * n + 0] * e.elements[0] + this.elements[4 * n + 1] * e.elements[4] + this.elements[4 * n + 2] * e.elements[8] + this.elements[4 * n + 3] * e.elements[12], t.elements[4 * n + 1] = this.elements[4 * n + 0] * e.elements[1] + this.elements[4 * n + 1] * e.elements[5] + this.elements[4 * n + 2] * e.elements[9] + this.elements[4 * n + 3] * e.elements[13], t.elements[4 * n + 2] = this.elements[4 * n + 0] * e.elements[2] + this.elements[4 * n + 1] * e.elements[6] + this.elements[4 * n + 2] * e.elements[10] + this.elements[4 * n + 3] * e.elements[14], t.elements[4 * n + 3] = this.elements[4 * n + 0] * e.elements[3] + this.elements[4 * n + 1] * e.elements[7] + this.elements[4 * n + 2] * e.elements[11] + this.elements[4 * n + 3] * e.elements[15];
                    return this.elements = t.elements, this
                },
                copy: function() {
                    for (var e = new h, t = 0; t < 16; t++) e.elements[t] = this.elements[t];
                    return e
                },
                get: function(e, t) {
                    return this.elements[4 * e + t]
                },
                invert: function() {
                    var e = this.get(2, 2) * this.get(3, 3),
                        t = this.get(3, 2) * this.get(2, 3),
                        n = this.get(1, 2) * this.get(3, 3),
                        r = this.get(3, 2) * this.get(1, 3),
                        i = this.get(1, 2) * this.get(2, 3),
                        s = this.get(2, 2) * this.get(1, 3),
                        o = this.get(0, 2) * this.get(3, 3),
                        a = this.get(3, 2) * this.get(0, 3),
                        l = this.get(0, 2) * this.get(2, 3),
                        u = this.get(2, 2) * this.get(0, 3),
                        h = this.get(0, 2) * this.get(1, 3),
                        f = this.get(1, 2) * this.get(0, 3),
                        c = this.get(2, 0) * this.get(3, 1),
                        d = this.get(3, 0) * this.get(2, 1),
                        g = this.get(1, 0) * this.get(3, 1),
                        m = this.get(3, 0) * this.get(1, 1),
                        p = this.get(1, 0) * this.get(2, 1),
                        y = this.get(2, 0) * this.get(1, 1),
                        w = this.get(0, 0) * this.get(3, 1),
                        b = this.get(3, 0) * this.get(0, 1),
                        v = this.get(0, 0) * this.get(2, 1),
                        A = this.get(2, 0) * this.get(0, 1),
                        E = this.get(0, 0) * this.get(1, 1),
                        T = this.get(1, 0) * this.get(0, 1),
                        _ = e * this.get(1, 1) + r * this.get(2, 1) + i * this.get(3, 1) - (t * this.get(1, 1) + n * this.get(2, 1) + s * this.get(3, 1)),
                        B = t * this.get(0, 1) + o * this.get(2, 1) + u * this.get(3, 1) - (e * this.get(0, 1) + a * this.get(2, 1) + l * this.get(3, 1)),
                        x = n * this.get(0, 1) + a * this.get(1, 1) + h * this.get(3, 1) - (r * this.get(0, 1) + o * this.get(1, 1) + f * this.get(3, 1)),
                        I = s * this.get(0, 1) + l * this.get(1, 1) + f * this.get(2, 1) - (i * this.get(0, 1) + u * this.get(1, 1) + h * this.get(2, 1)),
                        R = 1 / (this.get(0, 0) * _ + this.get(1, 0) * B + this.get(2, 0) * x + this.get(3, 0) * I),
                        L = R * _,
                        S = R * B,
                        D = R * x,
                        U = R * I,
                        M = R * (t * this.get(1, 0) + n * this.get(2, 0) + s * this.get(3, 0) - (e * this.get(1, 0) + r * this.get(2, 0) + i * this.get(3, 0))),
                        C = R * (e * this.get(0, 0) + a * this.get(2, 0) + l * this.get(3, 0) - (t * this.get(0, 0) + o * this.get(2, 0) + u * this.get(3, 0))),
                        F = R * (r * this.get(0, 0) + o * this.get(1, 0) + f * this.get(3, 0) - (n * this.get(0, 0) + a * this.get(1, 0) + h * this.get(3, 0))),
                        q = R * (i * this.get(0, 0) + u * this.get(1, 0) + h * this.get(2, 0) - (s * this.get(0, 0) + l * this.get(1, 0) + f * this.get(2, 0))),
                        N = R * (c * this.get(1, 3) + m * this.get(2, 3) + p * this.get(3, 3) - (d * this.get(1, 3) + g * this.get(2, 3) + y * this.get(3, 3))),
                        k = R * (d * this.get(0, 3) + w * this.get(2, 3) + A * this.get(3, 3) - (c * this.get(0, 3) + b * this.get(2, 3) + v * this.get(3, 3))),
                        P = R * (g * this.get(0, 3) + b * this.get(1, 3) + E * this.get(3, 3) - (m * this.get(0, 3) + w * this.get(1, 3) + T * this.get(3, 3))),
                        $ = R * (y * this.get(0, 3) + v * this.get(1, 3) + T * this.get(2, 3) - (p * this.get(0, 3) + A * this.get(1, 3) + E * this.get(2, 3))),
                        j = R * (g * this.get(2, 2) + y * this.get(3, 2) + d * this.get(1, 2) - (p * this.get(3, 2) + c * this.get(1, 2) + m * this.get(2, 2))),
                        O = R * (v * this.get(3, 2) + c * this.get(0, 2) + b * this.get(2, 2) - (w * this.get(2, 2) + A * this.get(3, 2) + d * this.get(0, 2))),
                        X = R * (w * this.get(1, 2) + T * this.get(3, 2) + m * this.get(0, 2) - (E * this.get(3, 2) + g * this.get(0, 2) + b * this.get(1, 2))),
                        G = R * (E * this.get(2, 2) + p * this.get(0, 2) + A * this.get(1, 2) - (v * this.get(1, 2) + T * this.get(2, 2) + y * this.get(0, 2)));
                    return this.elements[0] = L, this.elements[1] = S, this.elements[2] = D, this.elements[3] = U, this.elements[4] = M, this.elements[5] = C, this.elements[6] = F, this.elements[7] = q, this.elements[8] = N, this.elements[9] = k, this.elements[10] = P, this.elements[11] = $, this.elements[12] = j, this.elements[13] = O, this.elements[14] = X, this.elements[15] = G, this
                },
                inverse: function() {
                    var e = this.copy();
                    return e.invert()
                },
                transpose: function() {
                    var e = this.elements[1];
                    return this.elements[1] = this.elements[4], this.elements[4] = e, e = this.elements[2], this.elements[2] = this.elements[8], this.elements[8] = e, e = this.elements[3], this.elements[3] = this.elements[12], this.elements[12] = e, e = this.elements[6], this.elements[6] = this.elements[9], this.elements[9] = e, e = this.elements[7], this.elements[7] = this.elements[13], this.elements[13] = e, e = this.elements[11], this.elements[11] = this.elements[14], this.elements[14] = e, this
                },
                loadIdentity: function() {
                    for (var e = 0; e < 16; e++) this.elements[e] = 0;
                    return this.elements[0] = 1, this.elements[5] = 1, this.elements[10] = 1, this.elements[15] = 1, this
                }
            }, t.exports = h
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/3D/matrix4x4.js", "/3D")
    }, {
        buffer: 1,
        oMfpAn: 4
    }],
    7: [function(e, n, r) {
        (function(r, s, o, a, l, u, h, d, g) {
            var m = e("./matrix4x4"),
                p = e("./cameraController"),
                y = 0,
                w = 1,
                b = 2,
                v = 3,
                A = 0,
                E = 0,
                T = 0;
            AnalyserView = function(e) {
                this.analysisType = b, this.sonogram3DWidth = 256, this.sonogram3DHeight = 256, this.sonogram3DGeometrySize = 9.5, this.freqByteData = 0, this.texture = 0, this.TEXTURE_HEIGHT = 256, this.yoffset = 0, this.frequencyShader = 0, this.waveformShader = 0, this.sonogramShader = 0, this.sonogram3DShader = 0, this.backgroundColor = [.0, .0, .0, 1], this.foregroundColor = [0, .7, 0, 1], this.canvas = e, this.initGL()
            }, AnalyserView.prototype.getAvailableContext = function(e, t) {
                if (e.getContext)
                    for (var n = 0; n < t.length; ++n) try {
                        var r = e.getContext(t[n], {
                            antialias: !0
                        });
                        if (null !== r) return r
                    } catch (i) {}
                return null
            }, AnalyserView.prototype.initGL = function() {
                A = new m, E = new m, T = new m;
                var e = this.sonogram3DWidth,
                    t = this.sonogram3DHeight,
                    n = this.sonogram3DGeometrySize,
                    r = this.backgroundColor,
                    i = this.canvas,
                    s = this.getAvailableContext(i, ["webgl", "experimental-webgl"]);
                this.gl = s, this.has3DVisualizer = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0, this.has3DVisualizer || this.analysisType != b || (this.analysisType = y);
                var o = new p(i);
                this.cameraController = o, o.xRot = -180, o.yRot = 270, o.zRot = 90, o.xT = 0, o.yT = -2, o.zT = -2, s.clearColor(r[0], r[1], r[2], r[3]), s.enable(s.DEPTH_TEST);
                var a = new Float32Array([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0]),
                    l = new Float32Array([1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0]),
                    u = a.byteLength;
                this.vboTexCoordOffset = u;
                var h = s.createBuffer();
                this.vbo = h, s.bindBuffer(s.ARRAY_BUFFER, h), s.bufferData(s.ARRAY_BUFFER, u + l.byteLength, s.STATIC_DRAW), s.bufferSubData(s.ARRAY_BUFFER, 0, a), s.bufferSubData(s.ARRAY_BUFFER, u, l);
                var f = e * t;
                if (f > 65536) throw "Sonogram 3D resolution is too high: can only handle 65536 vertices max";
                a = new Float32Array(3 * f), l = new Float32Array(2 * f);
                for (var c = 0; c < t; c++)
                    for (var d = 0; d < e; d++) a[3 * (e * c + d) + 0] = n * (d - e / 2) / e, a[3 * (e * c + d) + 1] = 0, a[3 * (e * c + d) + 2] = n * (c - t / 2) / t, l[2 * (e * c + d) + 0] = d / (e - 1), l[2 * (e * c + d) + 1] = c / (t - 1);
                var g = a.byteLength;
                this.vbo3DTexCoordOffset = g;
                var w = s.createBuffer();
                this.sonogram3DVBO = w, s.bindBuffer(s.ARRAY_BUFFER, w), s.bufferData(s.ARRAY_BUFFER, g + l.byteLength, s.STATIC_DRAW), s.bufferSubData(s.ARRAY_BUFFER, 0, a), s.bufferSubData(s.ARRAY_BUFFER, g, l);
                var v = (e - 1) * (t - 1) * 6;
                this.sonogram3DNumIndices = v - 3600;
                for (var _ = new Uint16Array(v), B = 0, c = 0; c < t - 1; c++)
                    for (var d = 0; d < e - 1; d++) _[B++] = c * e + d, _[B++] = c * e + d + 1, _[B++] = (c + 1) * e + d + 1, _[B++] = c * e + d, _[B++] = (c + 1) * e + d + 1, _[B++] = (c + 1) * e + d;
                var x = s.createBuffer();
                this.sonogram3DIBO = x, s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, x), s.bufferData(s.ELEMENT_ARRAY_BUFFER, _, s.STATIC_DRAW), this.frequencyShader = o3djs.shader.loadFromURL(s, "bin/shaders/common-vertex.shader", "bin/shaders/frequency-fragment.shader"), this.waveformShader = o3djs.shader.loadFromURL(s, "bin/shaders/common-vertex.shader", "bin/shaders/waveform-fragment.shader"), this.sonogramShader = o3djs.shader.loadFromURL(s, "bin/shaders/common-vertex.shader", "bin/shaders/sonogram-fragment.shader"), this.has3DVisualizer && (this.sonogram3DShader = o3djs.shader.loadFromURL(s, "bin/shaders/sonogram-vertex.shader", "bin/shaders/sonogram-fragment.shader")), console.log("this.sonogramShader", this.sonogramShader), console.log("this.sonogram3DShader", this.sonogram3DShader)
            }, AnalyserView.prototype.initByteBuffer = function() {
                var e = this.gl,
                    n = this.TEXTURE_HEIGHT;
                if (!this.freqByteData || this.freqByteData.length != this.analyser.frequencyBinCount) {
                    // for (freqDataBuffer = [], i = 0; i < 37; i++) freqDataBuffer[i] = new Uint8Array(this.analyser.frequencyBinCount);
                    // strfRequest = new XMLHttpRequest, strfRequest.open("GET", "bin/STRFmatNoEdge50HzAndAboveNormalized.bin", !0), strfRequest.responseType = "arraybuffer", strfRequest.onload = function(e) {}, strfRequest.addEventListener("load", function(e) {
                    //     for (rawStrfs = new Float32Array(strfRequest.response), channelStrfs = [], c = 0; c < 256; c++)
                    //         for (channelStrfs[c] = [], t = 0; t < 37; t++)
                    //             for (channelStrfs[c][t] = new Float32Array(185), f = 0; f < 185; f++) channelStrfs[c][t][f] += rawStrfs[c + 256 * t + 9472 * f]
                    // }, !1), strfRequest.send(null), gridResponse = new Float32Array(256), freqByteData = new Uint8Array(this.analyser.frequencyBinCount), this.freqByteData = freqByteData, this.texture && (e.deleteTexture(this.texture), this.texture = null);
                    freqDataBuffer = new Uint8Array(185*37);
                    channelStrfs = [];
                    channelStrfsVectorized = [];

                    strfRequest = new XMLHttpRequest, strfRequest.open("GET", "bin/STRFmatNoEdge50HzAndAbove.bin", !0), strfRequest.responseType = "arraybuffer", strfRequest.onload = function(e) {}, strfRequest.addEventListener("load", function(e) {
                        for (rawStrfs = new Float32Array(strfRequest.response), c = 0; c < 256; c++){
                            console.log('reading in strfs from binary');
                            channelStrfsVectorized[c] = new Float32Array(185*37);
                            for (t = 0; t < 37; t++){
                                for ( f = 0; f < 185; f++) {
                                    channelStrfsVectorized[c][t*37+f] += rawStrfs[c + 256 * t + 9472 * f];
                                }
                            }
                        }
                        
                    channelStrfsVectorized = Array.from(channelStrfsVectorized);
                    freqDataBuffer = Array.from(freqDataBuffer);
                    }, !1), strfRequest.send(null), gridResponse = new Float32Array(256), freqByteData = new Uint8Array(this.analyser.frequencyBinCount), this.freqByteData = freqByteData, this.texture && (e.deleteTexture(this.texture), this.texture = null);

                    var r = e.createTexture();
                    this.texture = r, e.bindTexture(e.TEXTURE_2D, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR);
                    var s = new Uint8Array(freqByteData.length * n);
                    e.texImage2D(e.TEXTURE_2D, 0, e.ALPHA, freqByteData.length, n, 0, e.ALPHA, e.UNSIGNED_BYTE, s)
                }
            }, AnalyserView.prototype.setAnalysisType = function(e) {
                (this.has3DVisualizer || e != b) && (this.analysisType = e)
            }, AnalyserView.prototype.analysisType = function() {
                return this.analysisType
            }, AnalyserView.prototype.doFrequencyAnalysis = function(e) {           
                switch (freqByteData = this.freqByteData, this.analysisType) {
                    case y:
                        this.analyser.smoothingTimeConstant = .75, this.analyser.getByteFrequencyData(freqByteData);
                        break;
                    case w:
                    case b:
                        // var all = [4,5,6,20,21,22,23,36,37,38,39,52,53,54,55,68,69,70,71,72,84,85,86,87,99,100,101,102,115,116,117,127,132,133,143,147,149,150,165,181,196];
                        // //above is zero indexed
                        // selectedCategory = all;
                        // selectedScaling = 0.000001;
                        // for (this.analyser.smoothingTimeConstant = 0.05,this.analyser.getByteFrequencyData(freqByteData), i = 0; i < 36; i++) freqDataBuffer[i + 1] = freqDataBuffer[i];
                        // for (freqDataBuffer[0] = freqByteData, c = 0; c < selectedCategory.length; c++) {
                        //     channelNum = selectedCategory[c];
                        //     for (gridResponse[channelNum] = 0, t = 0; t < 37; t++)
                        //         for (f = 0; f < 185; f++) gridResponse[channelNum] += freqDataBuffer[t][f] * channelStrfs[channelNum][t][f];
                        //             gridResponse[channelNum] = Math.max(0,selectedScaling*gridResponse[channelNum]);//Math.min(1.5,selectedScaling*gridResponse[channelNum]);
                        // }
                        // break;
                        var all = [4,5,6,20,21,22,23,36,37,38,39,52,53,54,55,68,69,70,71,72,84,85,86,87,99,100,101,102,115,116,117,127,132,133,143,147,149,150,165,181,196];
                        selectedCategory = all;
                        selectedScaling = 0.01;
                        this.analyser.smoothingTimeConstant = 0.02;
                        this.analyser.getByteFrequencyData(freqByteData);
                        freqDataBuffer = Array.from(freqByteData.slice(0,185)).concat(freqDataBuffer.slice(0,185*36));
                        resultVector = $M(channelStrfsVectorized).multiply($V(freqDataBuffer));
                        for (c = 0; c < selectedCategory.length; c++) {
                            channelNum = selectedCategory[c];
                            gridResponse[channelNum] = selectedScaling*resultVector.e(channelNum);
                        }
                        break;

                    case v:
                        this.analyser.smoothingTimeConstant = .1, this.analyser.getByteTimeDomainData(freqByteData)
                }
                this.drawGL()
            }, AnalyserView.prototype.drawGL = function() {
                var e = this.canvas,
                    t = this.gl,
                    n = this.vbo,
                    r = this.vboTexCoordOffset,
                    i = this.sonogram3DVBO,
                    s = this.vbo3DTexCoordOffset,
                    o = this.sonogram3DGeometrySize,
                    a = this.sonogram3DNumIndices,
                    l = (this.sonogram3DWidth, this.sonogram3DHeight),
                    u = this.freqByteData,
                    h = this.texture,
                    f = this.TEXTURE_HEIGHT,
                    c = this.frequencyShader,
                    d = this.waveformShader,
                    g = this.sonogramShader,
                    p = this.sonogram3DShader;
                t.bindTexture(t.TEXTURE_2D, h), t.pixelStorei(t.UNPACK_ALIGNMENT, 1), this.analysisType != w && this.analysisType != b && (this.yoffset = 0), t.texSubImage2D(t.TEXTURE_2D, 0, 0, this.yoffset, u.length, 1, t.ALPHA, t.UNSIGNED_BYTE, u), this.analysisType != w && this.analysisType != b || (this.yoffset = (this.yoffset + 1) % f);
                var _, B, x, I, R, L, S, D = this.yoffset;
                switch (this.analysisType) {
                    case y:
                    case v:
                        t.bindBuffer(t.ARRAY_BUFFER, n), S = this.analysisType == y ? c : d, S.bind(), _ = S.gPositionLoc, B = S.gTexCoord0Loc, x = S.frequencyDataLoc, I = S.foregroundColorLoc, R = S.backgroundColorLoc, t.uniform1f(S.yoffsetLoc, .5 / (f - 1)), L = r;
                        break;
                    case w:
                        t.bindBuffer(t.ARRAY_BUFFER, n), g.bind(), _ = g.gPositionLoc, B = g.gTexCoord0Loc, x = g.frequencyDataLoc, I = g.foregroundColorLoc, R = g.backgroundColorLoc, t.uniform1f(g.yoffsetLoc, D / (f - 1)), L = r;
                        break;
                    case b:
                        t.bindBuffer(t.ARRAY_BUFFER, i), p.bind(), _ = p.gPositionLoc, B = p.gTexCoord0Loc, x = p.frequencyDataLoc, I = p.foregroundColorLoc, R = p.backgroundColorLoc, t.uniform1i(p.vertexFrequencyDataLoc, 0);
                        var U = this.yoffset / (f - 1);
                        t.uniform1f(p.yoffsetLoc, U);
                        var M = Math.floor(U * (l - 1)) / (l - 1);
                        t.uniform1f(p.vertexYOffsetLoc, M), t.uniform1f(p.verticalScaleLoc, o / 3.5), T.loadIdentity(), T.perspective(55, e.width / e.height, 1, 100), E.loadIdentity(), E.translate(0, 0, -9), A.loadIdentity(), A.rotate(this.cameraController.xRot, 1, 0, 0), A.rotate(this.cameraController.yRot, 0, 1, 0), A.rotate(this.cameraController.zRot, 0, 0, 1), A.translate(this.cameraController.xT, this.cameraController.yT, this.cameraController.zT);
                        var C = new m;
                        C.multiply(A), C.multiply(E), C.multiply(T), t.uniformMatrix4fv(p.worldViewProjectionLoc, t.FALSE, C.elements), L = s
                }
                x && t.uniform1i(x, 0), I && t.uniform4fv(I, this.foregroundColor), R && t.uniform4fv(R, this.backgroundColor), t.enableVertexAttribArray(_), t.vertexAttribPointer(_, 3, t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(B), t.vertexAttribPointer(B, 2, t.FLOAT, t.FALSE, 0, L), t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), this.analysisType == y || this.analysisType == v || this.analysisType == w ? t.drawArrays(t.TRIANGLES, 0, 6) : this.analysisType == b && t.drawElements(t.TRIANGLES, a, t.UNSIGNED_SHORT, 0), t.disableVertexAttribArray(_), t.disableVertexAttribArray(B)
            }, AnalyserView.prototype.setAnalyserNode = function(e) {
                this.analyser = e
            }, n.exports = AnalyserView
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/3D/visualizer.js", "/3D")
    }, {
        "./cameraController": 5,
        "./matrix4x4": 6,
        buffer: 1,
        oMfpAn: 4
    }],
    8: [function(e, t, n) {
        (function(t, n, r, i, s, o, a, l, u) {
            "use strict";
            window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), window.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, window.requestAnimFrame = function() {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                    window.setTimeout(e, 1e3 / 60)
                }
            }();
            var h = e("./ui/spectrogram");
            $(function() {
                var e = function() {
                        for (var e = window.location.search.slice(1).split("&"), t = 0; t < e.length; ++t) {
                            var n = e[t].split("=");
                            e[t] = {}, e[t][n[0]] = n[1]
                        }
                        return e
                    },
                    t = function() {
                        for (var t = e(), n = "en", r = 0; r < t.length; r++) void 0 != t[r].ln && (n = t[r].ln);
                        var i = "https://gweb-musiclab-site.appspot.com/static/locales/" + n + "/locale-music-lab.json";
                        $.ajax({
                            url: i,
                            dataType: "json",
                            async: !0,
                            success: function(e) {
                                $.each(e, function(e, t) {
                                    var n = $("[data-name='" + e + "']");
                                    n.length > 0 && (console.log("value.message", t.message), n.attr("data-name", t.message))
                                })
                            },
                            error: function(e) {
                                console.warn(e)
                            }
                        })
                    },
                    n = function() {
                        t(), window.parent.postMessage("ready", "*");
                        var e = h;
                        e.attached(), $(".music-box__tool-tip").hide(0), $("#loadingSound").hide(0), $(".music-box__buttons__button").click(function(t) {
                            e.startRender();
                            e.isPlaying();
                            e.stop(), e.drawingMode = !1; 
                            // console.log($(this));
                            // console.log($(this).attr("data-mic"));
                            // console.log($(this).hasClass("selected"));
                            // console.log($(this).hasClass("selector"));

                            $(this).hasClass("selected") ? 
                                $(".music-box__buttons__button").removeClass("selected") : 
                                ($(".music-box__buttons__button").removeClass("selected"), 
                                $(this).hasClass("selector") ? 
                                    ($(".music-box__buttons__button").removeClass("selected"),$(this).addClass("selected"), void 0 !== $(this).attr("data-mic") ?
                                            ($("#record").fadeIn().delay(2e2).fadeOut(), e.live()) : 
                                                e.play($(this).attr("data-src"))):
                                    (e.play($(this).attr("data-src"))));
                       })
                    },
                    r = $("#iosButton");
                window.isIOS ? (window.parent.postMessage("loaded", "*"), r[0].addEventListener("touchend", function(e) {
                    r.addClass("hide"), n()
                }, !1)) : (n(), r.addClass("hide"))
            })
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_a2d42838.js", "/")
    }, {
        "./ui/spectrogram": 10,
        buffer: 1,
        oMfpAn: 4
    }],
    9: [function(e, t, n) {
        (function(n, r, i, s, o, a, l, u, h) {
            function f() {
                window.AudioContext = window.AudioContext || window.webkitAudioContext, context = new AudioContext;
                var e = context.createAnalyser();
                e.fftSize = 1024, e.smoothingTimeConstant = 0;
                var t = context.createGain(),
                    n = context.createBiquadFilter();
                n.Q.value = 10, n.type = "bandpass";
                var r = context.createGain();
                r.gain.value = 1, t.connect(e), e.connect(r), r.connect(context.destination), this.context = context, this.mix = t, this.filterGain = r, this.analyser = e, this.buffers = {}, c.loadTrackSrc(this.context, "bin/snd/empty.mp3", function(e) {
                    var t = this.createSource_(e, !0);
                    t.loop = !0, t.start(0)
                }.bind(this))
            }
            var c = e("../util/util.js");
            f.prototype.playSrc = function(e) {
                return this.filterGain.gain.value = 1, this.input ? (this.input.disconnect(), void(this.input = null)) : this.buffers[e] ? ($("#loadingSound").fadeIn(100).delay(1e3).fadeOut(500), void this.playHelper_(e)) : ($("#loadingSound").fadeIn(100), void c.loadTrackSrc(this.context, e, function(t) {
                    this.buffers[e] = t, this.playHelper_(e), $("#loadingSound").delay(500).fadeOut(500)
                }.bind(this)))
            }, f.prototype.playHelper_ = function(e) {
                var t = this.buffers[e];
                this.source = this.createSource_(t, !0), this.source.start(0), this.loop || (this.playTimer = setTimeout(function() {
                    this.stop()
                }.bind(this), 2e3 * t.duration))
            }, f.prototype.live = function() {
                if (window.isIOS) window.parent.postMessage("error2", "*"), console.log("cant use mic on ios");
                else {
                    if (this.input) return this.input.disconnect(), void(this.input = null);
                    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, navigator.getUserMedia({
                        audio: !0
                    }, this.onStream_.bind(this), this.onStreamError_.bind(this)), this.filterGain.gain.value = 0
                }
            }, f.prototype.onStream_ = function(e) {
                var t = this.context.createMediaStreamSource(e);
                t.connect(this.mix), this.input = t, this.stream = e
            }, f.prototype.onStreamError_ = function(e) {}, f.prototype.setLoop = function(e) {
                this.loop = e
            }, f.prototype.createSource_ = function(e, t) {
                var n = this.context.createBufferSource();
                return n.buffer = e, n.loop = 0, n.connect(this.mix), n
            }, f.prototype.setMicrophoneInput = function() {}, f.prototype.stop = function() {
                if (this.source && (this.source.stop(0), this.source = null, clearTimeout(this.playTimer), this.playTimer = null), this.input) return this.input.disconnect(), void(this.input = null)
            }, f.prototype.getAnalyserNode = function() {
                return this.analyser
            }, f.prototype.setBandpassFrequency = function(e) {
                null == e ? (console.log("Removing bandpass filter"), this.mix.disconnect(), this.mix.connect(this.analyser)) : (this.bandpass.frequency.value = e, this.mix.disconnect(), this.mix.connect(this.bandpass), this.filterGain.connect(this.analyser))
            }, f.prototype.playTone = function(e) {
                this.osc || (this.osc = this.context.createOscillator(), this.osc.connect(this.mix), this.osc.type = "sine", this.osc.start(0)), this.osc.frequency.value = e, this.filterGain.gain.value = .2
            }, f.prototype.stopTone = function() {
                this.osc.stop(0), this.osc = null
            }, t.exports = f
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/ui/player.js", "/ui")
    }, {
        "../util/util.js": 11,
        buffer: 1,
        oMfpAn: 4
    }],
    10: [function(e, t, n) {
        (function(n, r, i, s, o, a, l, u, h) {
            "use strict";
            var f = e("../util/util.js"),
                c = e("../ui/player"),
                d = e("../3D/visualizer"),
                g = {
                    cxRot: 90,
                    drawingMode: !1,
                    prevX: 0,
                    handleTrack: function(e) {
                        switch (e.type) {
                            case "mousedown":
                            case "touchstart":
                                if (g.prevX = Number(e.pageX) || Number(e.originalEvent.touches[0].pageX), $(e.currentTarget).on("mousemove", g.handleTrack), $(e.currentTarget).on("touchmove", g.handleTrack), 0 == g.drawingMode) return !1;
                                var t = g.yToFreq(Number(e.pageY) || Number(e.originalEvent.touches[0].pageY));
                                return g.isPlaying() ? g.player.setBandpassFrequency(t) : g.player.playTone(t), !1;
                            case "mousemove":
                            case "touchmove":
                                var n = (Number(e.pageX) || Number(e.originalEvent.touches[0].pageX)) - g.prevX;
                                if (g.prevX = Number(e.pageX) || Number(e.originalEvent.touches[0].pageX), g.drawingMode) {
                                    var r = Number(e.pageY) || Number(e.originalEvent.touches[0].pageY),
                                        t = g.yToFreq(r);
                                    g.isPlaying() ? g.player.setBandpassFrequency(t) : g.player.playTone(t)
                                } else g.isPlaying() && (g.cxRot += .2 * n, g.cxRot < 0 ? g.cxRot = 0 : g.cxRot > 90 && (g.cxRot = 90));
                                return !1;
                            case "mouseup":
                            case "touchend":
                                return $(e.currentTarget).off("mousemove", g.handleTrack), $(e.currentTarget).off("touchmove", g.handleTrack), 0 != g.drawingMode && (g.isPlaying() ? g.player.setBandpassFrequency(null) : g.player.stopTone(), !1)
                        }
                    },
                    attached: function() {
                        console.log("spectrogram-3d attached"), f.setLogScale(20, 20, 2e4, 2e4), g.onResize_(), g.init_(), window.addEventListener("resize", g.onResize_.bind(g))
                    },
                    stop: function() {
                        g.player.stop()
                    },
                    isPlaying: function() {
                        return !!this.player.source
                    },
                    stopRender: function() {
                        g.isRendering = !1
                    },
                    startRender: function() {
                        g.isRendering || (g.isRendering = !0, g.draw_())
                    },
                    loopChanged: function(e) {
                        console.log("loopChanged", e), g.player.setLoop(e)
                    },
                    play: function(e) {
                        g.src = e, g.player.playSrc(e);
                    },
                    live: function() {
                        g.player.live()
                    },
                    init_: function() {
                        var e = new c,
                            t = e.getAnalyserNode(),
                            n = new d(this.canvas);
                        n.setAnalyserNode(t), n.initByteBuffer(), g.player = e, g.analyserView = n, $("#spectrogram").on("mousedown", this.handleTrack).on("touchstart", this.handleTrack).on("mouseup", this.handleTrack).on("touchend", this.handleTrack)
                    },
                    onResize_: function() {
                        //console.log("onResize_"); need to fiddle with this section
                        var e = $("#spectrogram")[0];
                        g.canvas = e, e.width = Math.max($(window).width(),800), e.height = 900;//$(window).height();
                        var t = $("#legend")[0];
                        t.width = $(window).width(), t.height = 320, g.drawLegend_();//t.height = $(window).height() - 158, g.drawLegend_();

                        console.log($(window).height()); //so buttons stick to the bottom until some minimum height, after which positioning becomes absolute
                        var pos = 850;
                        if ($(window).height() > pos) {
                            $('.music-box__buttons').css({
                                bottom: '0%',
                                top: 'auto',
                                position: 'auto'
                            });
                            $('#tutorialintro').css({
                                bottom: '0%',
                                //top: 'auto',
                                position: 'auto'
                            });
                            } else {
                                $('.music-box__buttons').css({
                                  position: 'absolute',
                                  top: $('.music-box__buttons').position().top,
                                  //bottom: 'auto'
                                });
                                $('#tutorialintro').css({
                                  position: 'absolute',
                                  top: $('#tutorialintro').position().top,
                                  //bottom: 'auto'
                                });
                            }
                    },
                    draw_: function() {
                        return g.isRendering ? void setTimeout(function() {
                            g.analyserView.doFrequencyAnalysis(), requestAnimationFrame(g.draw_.bind(g))
                        }, 1e3 / 60) : void console.log("stopped draw_")
                    },
                    drawLegend_: function() {
                        var e = $("#legend")[0],
                            t = e.getContext("2d"),
                            n = e.width - 15,
                            fixed = 250; //this seems arbitrary

                        t.fillStyle = "#FFFFFF", t.font = "14px Roboto", t.textAlign = "right", t.textBaseline = "middle", t.fillText("20,000 Hz -", n, fixed - g.freqToY(2e4)), t.fillText("2,000 Hz -", n, fixed - g.freqToY(2e3)), t.fillText("200 Hz -", n, fixed - g.freqToY(200)), t.fillText("20 Hz -", n, fixed - g.freqToY(20))
                    },
                    freqStart: 20,
                    freqEnd: 2e4,
                    padding: 30,
                    yToFreq: function(e) {
                        var t = g.padding,
                            n = $("#spectrogram").height()*0.85; //scaling b/c zoom in styleToUse.css at 0.8, dchang
                        if (n < 2 * t || e < t || e > n - t) return null;
                        var r = 1 - (e - t) / (n - t),
                            i = g.freqStart + (g.freqEnd - g.freqStart) * r;
                        return f.lin2log(i)
                    },
                    freqToY: function(e) {
                        var t = f.log2lin(e),
                            n = $("#spectrogram").height()*0.85,
                            r = g.padding,
                            i = (t - g.freqStart) / (g.freqEnd - g.freqStart);
                        return g.padding + i * (n - 2 * r)
                    },
                    easeInOutCubic: function(e, t, n, r) {
                        return (e /= r / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                    },
                    easeInOutQuad: function(e, t, n, r) {
                        return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                    },
                    easeInOutQuint: function(e, t, n, r) {
                        return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                    },
                    easeInOutExpo: function(e, t, n, r) {
                        return 0 == e ? t : e == r ? t + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                    }
                };
            t.exports = g
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/ui/spectrogram.js", "/ui")
    }, {
        "../3D/visualizer": 7,
        "../ui/player": 9,
        "../util/util.js": 11,
        buffer: 1,
        oMfpAn: 4
    }],
    11: [function(e, t, n) {
        (function(e, n, r, i, s, o, a, l, u) {
            var h = window.Util || {};
            h.loadTrackSrc = function(e, t, n, r) {
                var i = new XMLHttpRequest;
                i.open("GET", t, !0), i.responseType = "arraybuffer", i.onload = function() {
                    e.decodeAudioData(i.response, function(e) {
                        n(e)
                    }, function(e) {
                        console.error(e)
                    })
                }, r && (i.onprogress = function(e) {
                    var t = e.loaded / e.total;
                    r(t)
                }), i.send()
            }, h.setLogScale = function(e, t, n, r) {
                this.b = Math.log(t / r) / (e - n), this.a = t / Math.exp(this.b * e)
            }, h.lin2log = function(e) {
                return this.a * Math.exp(this.b * e)
            }, h.log2lin = function(e) {
                return Math.log(e / this.a) / this.b
            }, t.exports = h
        }).call(this, e("oMfpAn"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/util/util.js", "/util")
    }, {
        buffer: 1,
        oMfpAn: 4
    }]
}, {}, [8]);