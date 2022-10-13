//<![CDATA[
var keyGenerator = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890+/=";  
var teksGenerate = "Tạo liên kết";
var teksGetLink = "Xem liên kết";
var timerButton = 15;
var capubAds = "ca-pub-xxxxxxxxxxxxxxxx";
var IDslotAds = "xxxxxxxxx";

// Encode Url
var base64 = {
    _keyStr: keyGenerator,
    key: function (e) {
        var t,
            n,
            r,
            a,
            o,
            i,
            l,
            c = "",
            d = 0;
        for (e = base64._utf8_key(e); d < e.length; )
            (a = (t = e.charCodeAt(d++)) >> 2),
                (o = ((3 & t) << 4) | ((n = e.charCodeAt(d++)) >> 4)),
                (i = ((15 & n) << 2) | ((r = e.charCodeAt(d++)) >> 6)),
                (l = 63 & r),
                isNaN(n) ? (i = l = 64) : isNaN(r) && (l = 64),
                (c = c + this._keyStr.charAt(a) + this._keyStr.charAt(o) + this._keyStr.charAt(i) + this._keyStr.charAt(l));
        return c;
    },
    _utf8_key: function (e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128
                ? (t += String.fromCharCode(r))
                : r > 127 && r < 2048
                ? ((t += String.fromCharCode((r >> 6) | 192)), (t += String.fromCharCode((63 & r) | 128)))
                : ((t += String.fromCharCode((r >> 12) | 224)), (t += String.fromCharCode(((r >> 6) & 63) | 128)), (t += String.fromCharCode((63 & r) | 128)));
        }
        return t;
    },
};

//Công cụ tạo Safelink
function getSafelink() {
    var e = new XMLHttpRequest();
    (e.onreadystatechange = function () {
        if (e.readyState == XMLHttpRequest.DONE) {
            var t = "",
                n = JSON.parse(e.responseText).feed.entry,
                r = new Array();
            if (void 0 !== n) {
                for (var a = 0; a < n.length; a++) {
                    for (var o = 0; o < n[a].link.length; o++)
                        if ("alternate" == n[a].link[o].rel) {
                            t = n[a].link[o].href;
                            break;
                        }
                    r[a] = t;
                    var i = Math.random() * r.length;
                    i = parseInt(i);
                }
                var l = document.getElementById("urlSafelink").value,
                    c = r[i] + "?url=" + base64.key(l),
                    d = document.getElementById("output-safelink");
                null != d && (d.value = c);
            }
        }
    }),
        e.open("GET", "/feeds/posts/summary?alt=json", !0),
        e.send(null),
        (document.querySelector(".input").style.display = "none"),
        (document.querySelector(".output").style.display = "block"),
        (document.querySelector(".tombol-copy-reset").style.display = "block"),
        (document.getElementById("get-button-safelink").style.display = "none");
}
function copySafelink() {
    document.getElementById("output-safelink").select(), document.execCommand("copy"), (document.getElementById("text-keterangan").innerHTML = "Url berhasil disalin"), (document.getElementById("text-keterangan").style.margin = "10px 0");
}
function resetSafelink() {
    window.location.href = window.location.href;
}
window.onload = function () {
    var e = document.getElementById("get-button-safelink");
    null != e && ((e.onclick = getSafelink), (document.getElementById("copy-safelink").onclick = copySafelink), (document.getElementById("reset-safelink").onclick = resetSafelink));
};

// Tombol Auto Safelink
var autoSafelink = document.querySelectorAll(".auto-safelink");
if (null != autoSafelink)
    for (var i = 0; i < autoSafelink.length; i++)
        autoSafelink[i].addEventListener("click", function () {
            var e = this.getAttribute("data-link"),
                t = new XMLHttpRequest();
            (t.onreadystatechange = function () {
                if (t.readyState == XMLHttpRequest.DONE) {
                    var n = "",
                        r = JSON.parse(t.responseText).feed.entry,
                        a = new Array();
                    if (void 0 !== r) {
                        for (var o = 0; o < r.length; o++) {
                            for (var i = 0; i < r[o].link.length; i++)
                                if ("alternate" == r[o].link[i].rel) {
                                    n = r[o].link[i].href;
                                    break;
                                }
                            a[o] = n;
                            var l = Math.random() * a.length;
                            l = parseInt(l);
                        }
                        var c = a[l] + "?url=" + base64.key(e);
                        window.open(c, "_blank");
                    }
                }
            }),
                t.open("GET", "/feeds/posts/summary?alt=json", !0),
                t.send(null);
        });

//Truy xuất Tạo mã kết quả trong tham số? Url=
function getVariable(e) {
    for (
        var t = {
                _keyStr: keyGenerator,
                key: function (e) {
                    var n,
                        r,
                        a,
                        o,
                        i,
                        l,
                        c = "",
                        d = 0;
                    for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < e.length; )
                        (n = (this._keyStr.indexOf(e.charAt(d++)) << 2) | ((o = this._keyStr.indexOf(e.charAt(d++))) >> 4)),
                            (r = ((15 & o) << 4) | ((i = this._keyStr.indexOf(e.charAt(d++))) >> 2)),
                            (a = ((3 & i) << 6) | (l = this._keyStr.indexOf(e.charAt(d++)))),
                            (c += String.fromCharCode(n)),
                            64 != i && (c += String.fromCharCode(r)),
                            64 != l && (c += String.fromCharCode(a));
                    return (c = t._utf8_key(c));
                },
                _utf8_key: function (e) {
                    for (var t = "", n = 0, r = (c1 = c2 = 0); n < e.length; )
                        (r = e.charCodeAt(n)) < 128
                            ? ((t += String.fromCharCode(r)), n++)
                            : r > 191 && r < 224
                            ? ((c2 = e.charCodeAt(n + 1)), (t += String.fromCharCode(((31 & r) << 6) | (63 & c2))), (n += 2))
                            : ((c2 = e.charCodeAt(n + 1)), (c3 = e.charCodeAt(n + 2)), (t += String.fromCharCode(((15 & r) << 12) | ((63 & c2) << 6) | (63 & c3))), (n += 3));
                    return t;
                },
            },
            n = window.location.search.substring(1).split("&"),
            r = 0;
        r < n.length;
        r++
    ) {
        var a = n[r].split("=");
        if (a[0] == e) return t.key(a[1]);
    }
    return !1;
}

// Kiểm tra các thông số? Url=
let cekUrlSafelink = getVariable("url");

//Generate Link (decode)
if (0 != cekUrlSafelink) {
    document.getElementById("progress-bar").innerHTML =
        '<div class="circular" style="transform: scale(0.6)"><div class="inner"></div><div class="number"></div><div class="circle"><div class="bar left"><div class="progress"></div></div><div class="bar right"><div class="progress"></div></div></div></div><div class="generate-link">' +
        teksGenerate +
        "</div>";
    const e = document.querySelector(".number");
    let t = 0;
    function gotoLink() {
        var e = document.getElementById("gotolink"),
            t = e.offsetTop;
        window.scrollTo(0, t),
            (e.innerHTML =
                "<ins class='adsbygoogle' data-ad-client='"+capubAds+"' data-ad-format='fluid' data-ad-layout='in-article' data-ad-slot='"+IDslotAds+"' style='display:block; text-align:center;'></ins><div class='proses-link'></div><div id='menuju-link'>" +
                teksGetLink +
                "</div><ins class='adsbygoogle' data-ad-client='"+capubAds+"' data-ad-format='fluid' data-ad-layout='in-article' data-ad-slot='"+IDslotAds+"' style='display:block; text-align:center;'></ins>"),
            (document.getElementById("menuju-link").onclick = function () {
                var e = cekUrlSafelink;
                window.open(e, "_self");
            });
        var n = timerButton;
        setInterval(function () {
            n <= 1
                ? ((document.getElementById("menuju-link").style.display = "inline-block"), (document.querySelector(".proses-link").style.display = "none"))
                : ((document.getElementById("menuju-link").style.display = "none"), (document.querySelector(".proses-link").innerHTML = "Link will appear in " + --n + " second"));
        }, 1e3);
    }
    setInterval(() => {
        100 == t
            ? (clearInterval(), (document.querySelector(".generate-link").style.display = "inline-block"), (document.querySelector(".circular").style = "display:none;transform: scale(0.6)"))
            : ((t += 1), (e.textContent = t + "%"), (document.querySelector(".generate-link").style.display = "none"));
    }, 80),
        (document.querySelector("#progress-bar").onclick = gotoLink);
    var uri = window.location.toString();
    if (uri.indexOf("?", "?") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, clean_uri);
    }
	
	//Thông số sạch? Url=
    function clickIE4() {
        return 2 != event.button && void 0;
    }
    function clickNS4(e) {
        return (!(document.layers || (document.getElementById && !document.all)) || (2 != e.which && 3 != e.which)) && void 0;
    }
    document.layers ? (document.captureEvents(Event.MOUSEDOWN), (document.onmousedown = clickNS4)) : document.all && !document.getElementById && (document.onmousedown = clickIE4), (document.oncontextmenu = new Function("return false"));
}
//]]>
