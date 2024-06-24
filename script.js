// ==UserScript==
// @name         Ks-Bundle Dark Visuals
// @namespace    Visuals Script for Legit Players!
// @version      2024-06-15
// @description  try to take over the world!
// @author       KoKsus (xX_KSGaming_Xx)
// @match        *://*.moomoo.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ks-bio.pl
// @grant        none
// ==/UserScript==

/*
    Author: KoKsus (xX_KSGaming_Xx)
    Github: https://github.com/xXKSGamingXx
    Discord: https://discord.gg/9TNezpZEmc
    YouTube: https://www.youtube.com/@xx_ksgaming_xx
*/



localStorage.moofoll = !0;
//Murka Grid

(function() {
    "use strict";

    // Change to true or false
    const GRID_ENABLED = false;
    function inRange(value, min, max) {
        return value > min && value < max;
    }

    function createHook(target, prop, callback) {
        const symbol = Symbol(prop);
        Object.defineProperty(target, prop, {
            get() { return this[symbol]; },
            set(value) { callback(this, symbol, value); },
            configurable: true
        })
    }

    createHook(window, "config", function(that, symbol, value) {
        if (typeof value === "object" && value.hasOwnProperty("maxScreenHeight")) {
            delete window.config;
            Object.defineProperty(window, "config", {
                value: value,
                configurable: false,
                writeable: false
            })
        }
    })

    CanvasRenderingContext2D.prototype.moveTo = new Proxy(CanvasRenderingContext2D.prototype.moveTo, {
        apply(target, _this, args) {

            if (!GRID_ENABLED) {
                const [ x, y ] = args;
                const { maxScreenWidth, maxScreenHeight } = window.config || {};;
                if (inRange(x, 0, maxScreenWidth) || inRange(y, 0, maxScreenHeight)) return null;
            }

            return target.apply(_this, args);
        }
    })

})();

//css
var style = document.createElement('style');

// Dodajemy tekst CSS do elementu style
style.innerHTML = `

#upgradeHolder {
	width: 100%;
	position: absolute;
	text-align: center;
	top: 40px;
}

#upgradeCounter {
	width: 100%;
	position: absolute;
	top: 120px;
	text-align: center;
	font-size: 24px;
	color: #fff;
}
/* Przycisk party */
#partyButton {
    position: absolute;
    color: #ffffff;
    top: 20px;
    right: 20px;
    font-size: 24px;
    text-decoration: none;
    background: linear-gradient(45deg, #4caf50, #81c784); /* Gradient tła */
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background 0.3s, box-shadow 0.3s; /* Płynne przejście dla tła i cienia */
}

#partyButton:hover {
    background: linear-gradient(45deg, #388e3c, #66bb6a); /* Zmiana gradientu przy najechaniu */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Zmiana cienia przy najechaniu */
}

/* Przycisk dołączenia do party */
#joinPartyButton {
display: none;
}

#joinPartyButton:hover {
 display: none;
}

/* Wyświetlacz pinga */
#pingDisplay {
    position: absolute;
    top: 1px;
    left: 50%;
    transform: translateX(-50%);
    color: #ffffff;
    font-size: 18px;
    background: rgba(0, 0, 0, 0.5); /* Ciemne półprzezroczyste tło */
    padding: 5px 10px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background 0.3s, box-shadow 0.3s; /* Płynne przejście dla tła i cienia */
}

#pingDisplay:hover {
    background: rgba(0, 0, 0, 0.7); /* Zmiana tła przy najechaniu */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Zmiana cienia przy najechaniu */
}

/* Kontener paska wieku */
#ageBarContainer {
    width: 100%;
    bottom: 93px;
    text-align: center;
    position: absolute; /* Aby upewnić się, że element jest absolutnie pozycjonowany */
}

/* Tekst wieku */
#ageText {
    width: 100%;
    bottom: 118px;
    text-align: center;
    color: #e0e0e0;
    font-size: 24px;
    position: absolute; /* Aby upewnić się, że element jest absolutnie pozycjonowany */
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

/* Pasek wieku */
#ageBar {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    padding: 6px;
    width: 320px;
    height: 14px;
    display: inline-block;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Ciało paska wieku */
#ageBarBody {
    background: linear-gradient(90deg, rgba(0, 128, 0, 1), rgba(0, 255, 0, 1)); /* Dodanie gradientu */
    border-radius: 8px;
    width: 0px;
    height: 100%;
    transition: width 0.3s ease-in-out; /* Płynne przejście przy zmianie szerokości */
}

/* Karty menu i reklamy */
.menuCard, .adMenuCard {
    vertical-align: top;
    text-align: left;
    white-space: normal;
    word-wrap: break-word;
    margin: 5px;
    display: inline-block;
    width: 300px;
    padding: 18px;
    background-color: #2c2c2c;
    -moz-box-shadow: 0px 7px #1a1a1a;
    -webkit-box-shadow: 0px 7px #1a1a1a;
    box-shadow: 0px 7px #1a1a1a;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    overflow: hidden;
    color: #e0e0e0;
}

.adMenuCard {
    min-width: 0;
    min-height: 0;
    height: initial;
    width: initial;
    padding: 0;
    box-shadow: none;
}

.menuHeader {
    font-size: 24px;
    color: #e0e0e0;
    margin-bottom: 5px;
}

.menuText {
    font-size: 18px;
    color: #a8a8a8;
    margin-bottom: 10px;
}

#serverBrowser select {
    width: 100%;
    height: 24px;
    background-color: #1e1e1e;
    color: #e0e0e0;
    border: 1px solid #444;
    border-radius: 4px;
}

#altServer {
    width: 100%;
    text-align: center;
    margin-top: 10px;
    color: #e0e0e0;
}

/* Przewijanie dla WebKit */
.menuCard::-webkit-scrollbar, .adMenuCard::-webkit-scrollbar {
    width: 12px;
}

.menuCard::-webkit-scrollbar-track, .adMenuCard::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.menuCard::-webkit-scrollbar-thumb, .adMenuCard::-webkit-scrollbar-thumb {
    background: rgba(64, 64, 64, 0.5);
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.25);
}

.menuCard::-webkit-scrollbar-thumb:hover, .adMenuCard::-webkit-scrollbar-thumb:hover {
    background: rgba(64, 64, 64, 0.7);
}

/* Podgląd kapelusza */
.hatPreview {
    margin-top: -5px;
    width: 45px;
    height: 45px;
    display: inline-block;
    vertical-align: middle;
    padding-right: 10px;
}

/* Kontener sklepu */
#storeHolder {
    pointer-events: all;
    width: 400px;
    display: inline-block;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
    padding: 10px;
    height: 200px;
    max-height: calc(100vh - 200px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}

#storeHolder span {
    display: none;
}

/* Przewijanie dla WebKit */
#storeHolder::-webkit-scrollbar {
    width: 12px;
}

#storeHolder::-webkit-scrollbar-track {

}

#storeHolder::-webkit-scrollbar-thumb {
    border-radius: 4px;
}

#storeHolder::-webkit-scrollbar-thumb:hover {

}

/* Kontener sojuszu */
#allianceHolder {
    pointer-events: all;
    height: 200px;
    max-height: calc(100vh - 260px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    width: 350px;
    display: inline-block;
    text-align: left;
    padding: 10px;

    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    color: #fff;
}

/* Przewijanie dla WebKit */
#allianceHolder::-webkit-scrollbar {
    width: 12px;
}

#allianceHolder::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

#allianceHolder::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    border: 2px solid rgba(0, 0, 0, 0.25);
}

#allianceHolder::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.7);
}
/* Kontener czatu */
#chatHolder {
    position: absolute;
    bottom: 200px;
    width: 100%;
    text-align: center;
}

#chatBox {
    padding: 10px;
    font-size: 20px;
    color: #e0e0e0;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
#chatBox:focus {
    outline: none;
}

/* Kontener górnej informacji */
#topInfoHolder {
    position: absolute;
    right: 20px;
    top: 20px;
}

#leaderboard {
    color: #e0e0e0;
    font-size: 31px;
    text-align: left;
    padding: 15px;
    width: 240px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.leaderHolder {
    overflow: hidden;
    white-space: nowrap;
}



.leaderScore {
    text-align: right;
    float: right;
    margin-left: 10px;
    display: inline-block;
    font-size: 22px;
}

.leaderboardItem {
    float: left;
    display: inline-block;
    max-width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 22px;
}

/* Elementy UI i wyświetlanie zasobów */
.uiElement, .resourceDisplay {
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    color: #e0e0e0;
    padding: 10px;
    font-size: 28px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.resourceDisplay {
    position: absolute;
    right: 20px;
    height: 40px;
    text-align: right;
    line-height: 40px;
    padding-left: 10px;
    padding-right: 50px;
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: right 10px center;
}

#foodDisplay {
    background-image: url(../img/resources/food_ico.png);
    bottom: 130px;
}

#woodDisplay {
    background-image: url(../img/resources/wood_ico.png);
    bottom: 75px;
}

#stoneDisplay {
    background-image: url(../img/resources/stone_ico.png);
    bottom: 20px;
}

#scoreDisplay {
    left: 20px;
    bottom: 160px;
    text-align: left;
    padding-left: 50px;
    padding-right: 10px;
    background-position: left 10px center;
    background-image: url(../img/resources/gold_ico.png);
}

/* Pasek akcji */
#actionBar {
    bottom: 17px;
    width: 100%;
    text-align: center;
}

.actionBarItem {
    width: 66px;
    height: 66px;
    top: 1000px;
    right: 20px;
    margin: 5px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    display: inline-block;
    cursor: pointer;
    pointer-events: all;
    background-size: cover;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.actionBarItem:hover {
    background-color: rgba(50, 50, 50, 0.6);
}

.itemIcon {
    width: 66px;
    height: 66px;
}

/* Mapa */
#mapDisplay {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: inline-block;
    width: 130px;
    height: 130px;
    pointer-events: all;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
/* Przycisk YouTube */
#youtubeFollow {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: #ff0000;
    color: #fff;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

#youtubeFollow:hover {
    background-color: #cc0000;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Kontener linków 1 */
#linksContainer1 {
    border-radius: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #fff;
    font-size: 20px;
    padding: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Kontener linków 2 */
#linksContainer2 {
	border-radius: 4px;
	position: absolute;
	bottom: 0px;
	right: 0px;
	background-color: #fff;
	text-align: right;
	font-size: 20px;
	padding: 8px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Tekst ładowania */
#loadingText {
    font-size: 45px;
    color: #fff;
    text-align: center;
}

#loadingText a {
    display: block;
    color: #fff;
    text-decoration: underline;
    transition: color 0.3s;
}

#loadingText a:hover {
    color: #cccccc;
}
#serverBrowser select {
    width: 100%;
    height: 24px;
    font-size: 16px; /* Rozmiar czcionki */
    border: none; /* Usunięcie standardowego obramowania */
    background-color: #333; /* Kolor tła */
    color: #fff; /* Kolor tekstu */
    border-radius: 4px; /* Zaokrąglenie rogów */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Cień */
    outline: none; /* Usunięcie obramowania przy focusie */
    transition: box-shadow 0.3s, background-color 0.3s; /* Płynne przejścia */

    /* Stylowanie paska przewijania dla WebKit */
    scrollbar-width: thin; /* Grubość paska przewijania */
    scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.1); /* Kolor paska przewijania */
}

/* Pasek przewijania dla WebKit */
#serverBrowser select::-webkit-scrollbar {
    width: 8px; /* Szerokość paska przewijania */
}

#serverBrowser select::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1); /* Tło paska przewijania */
}

#serverBrowser select::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3); /* Kolor kciuka paska przewijania */
    border-radius: 4px; /* Zaokrąglenie rogów kciuka */
}

#serverBrowser select::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.5); /* Kolor kciuka paska przewijania przy najechaniu */
}
`;

//Die Text


(function() {
    'use strict';

    // Tekst, który chcesz wstawiać w elemencie
    var newText = '💀Dont Give Up!';

    // Sprawdzamy, czy element o id "diedText" istnieje
    var diedTextElement = document.getElementById("diedText");

    if (diedTextElement) {
        // Jeśli element istnieje, edytujemy jego tekst
        diedTextElement.textContent = newText;
    } else {
        console.error('Nie znaleziono elementu o id "diedText"');
    }
})();
document.head.appendChild(style);

(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        s(n);
    new MutationObserver(n=>{
        for (const r of n)
            if (r.type === "childList")
                for (const o of r.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function i(n) {
        const r = {};
        return n.integrity && (r.integrity = n.integrity),
        n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
        n.crossOrigin === "use-credentials" ? r.credentials = "include" : n.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function s(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const r = i(n);
        fetch(n.href, r)
    }
}
)();
var Ke = 4294967295;
function Qo(e, t, i) {
    var s = i / 4294967296
      , n = i;
    e.setUint32(t, s),
    e.setUint32(t + 4, n)
}
function Rr(e, t, i) {
    var s = Math.floor(i / 4294967296)
      , n = i;
    e.setUint32(t, s),
    e.setUint32(t + 4, n)
}
function _r(e, t) {
    var i = e.getInt32(t)
      , s = e.getUint32(t + 4);
    return i * 4294967296 + s
}
function Zo(e, t) {
    var i = e.getUint32(t)
      , s = e.getUint32(t + 4);
    return i * 4294967296 + s
}
var Gi, Yi, $i, Ei = (typeof process > "u" || ((Gi = process == null ? void 0 : process.env) === null || Gi === void 0 ? void 0 : Gi.TEXT_ENCODING) !== "never") && typeof TextEncoder < "u" && typeof TextDecoder < "u";
function Es(e) {
    for (var t = e.length, i = 0, s = 0; s < t; ) {
        var n = e.charCodeAt(s++);
        if (n & 4294967168)
            if (!(n & 4294965248))
                i += 2;
            else {
                if (n >= 55296 && n <= 56319 && s < t) {
                    var r = e.charCodeAt(s);
                    (r & 64512) === 56320 && (++s,
                    n = ((n & 1023) << 10) + (r & 1023) + 65536)
                }
                n & 4294901760 ? i += 4 : i += 3
            }
        else {
            i++;
            continue
        }
    }
    return i
}
function jo(e, t, i) {
    for (var s = e.length, n = i, r = 0; r < s; ) {
        var o = e.charCodeAt(r++);
        if (o & 4294967168)
            if (!(o & 4294965248))
                t[n++] = o >> 6 & 31 | 192;
            else {
                if (o >= 55296 && o <= 56319 && r < s) {
                    var l = e.charCodeAt(r);
                    (l & 64512) === 56320 && (++r,
                    o = ((o & 1023) << 10) + (l & 1023) + 65536)
                }
                o & 4294901760 ? (t[n++] = o >> 18 & 7 | 240,
                t[n++] = o >> 12 & 63 | 128,
                t[n++] = o >> 6 & 63 | 128) : (t[n++] = o >> 12 & 15 | 224,
                t[n++] = o >> 6 & 63 | 128)
            }
        else {
            t[n++] = o;
            continue
        }
        t[n++] = o & 63 | 128
    }
}
var Lt = Ei ? new TextEncoder : void 0
  , ea = Ei ? typeof process < "u" && ((Yi = process == null ? void 0 : process.env) === null || Yi === void 0 ? void 0 : Yi.TEXT_ENCODING) !== "force" ? 200 : 0 : Ke;
function ta(e, t, i) {
    t.set(Lt.encode(e), i)
}
function ia(e, t, i) {
    Lt.encodeInto(e, t.subarray(i))
}
var na = Lt != null && Lt.encodeInto ? ia : ta
  , sa = 4096;
function Br(e, t, i) {
    for (var s = t, n = s + i, r = [], o = ""; s < n; ) {
        var l = e[s++];
        if (!(l & 128))
            r.push(l);
        else if ((l & 224) === 192) {
            var c = e[s++] & 63;
            r.push((l & 31) << 6 | c)
        } else if ((l & 240) === 224) {
            var c = e[s++] & 63
              , a = e[s++] & 63;
            r.push((l & 31) << 12 | c << 6 | a)
        } else if ((l & 248) === 240) {
            var c = e[s++] & 63
              , a = e[s++] & 63
              , u = e[s++] & 63
              , p = (l & 7) << 18 | c << 12 | a << 6 | u;
            p > 65535 && (p -= 65536,
            r.push(p >>> 10 & 1023 | 55296),
            p = 56320 | p & 1023),
            r.push(p)
        } else
            r.push(l);
        r.length >= sa && (o += String.fromCharCode.apply(String, r),
        r.length = 0)
    }
    return r.length > 0 && (o += String.fromCharCode.apply(String, r)),
    o
}
var ra = Ei ? new TextDecoder : null
  , oa = Ei ? typeof process < "u" && (($i = process == null ? void 0 : process.env) === null || $i === void 0 ? void 0 : $i.TEXT_DECODER) !== "force" ? 200 : 0 : Ke;
function aa(e, t, i) {
    var s = e.subarray(t, t + i);
    return ra.decode(s)
}
var ni = function() {
    function e(t, i) {
        this.type = t,
        this.data = i
    }
    return e
}()
  , la = globalThis && globalThis.__extends || function() {
    var e = function(t, i) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(s, n) {
            s.__proto__ = n
        }
        || function(s, n) {
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (s[r] = n[r])
        }
        ,
        e(t, i)
    };
    return function(t, i) {
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        e(t, i);
        function s() {
            this.constructor = t
        }
        t.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype,
        new s)
    }
}()
  , Pe = function(e) {
    la(t, e);
    function t(i) {
        var s = e.call(this, i) || this
          , n = Object.create(t.prototype);
        return Object.setPrototypeOf(s, n),
        Object.defineProperty(s, "name", {
            configurable: !0,
            enumerable: !1,
            value: t.name
        }),
        s
    }
    return t
}(Error)
  , ca = -1
  , ha = 4294967296 - 1
  , fa = 17179869184 - 1;
function ua(e) {
    var t = e.sec
      , i = e.nsec;
    if (t >= 0 && i >= 0 && t <= fa)
        if (i === 0 && t <= ha) {
            var s = new Uint8Array(4)
              , n = new DataView(s.buffer);
            return n.setUint32(0, t),
            s
        } else {
            var r = t / 4294967296
              , o = t & 4294967295
              , s = new Uint8Array(8)
              , n = new DataView(s.buffer);
            return n.setUint32(0, i << 2 | r & 3),
            n.setUint32(4, o),
            s
        }
    else {
        var s = new Uint8Array(12)
          , n = new DataView(s.buffer);
        return n.setUint32(0, i),
        Rr(n, 4, t),
        s
    }
}
function da(e) {
    var t = e.getTime()
      , i = Math.floor(t / 1e3)
      , s = (t - i * 1e3) * 1e6
      , n = Math.floor(s / 1e9);
    return {
        sec: i + n,
        nsec: s - n * 1e9
    }
}
function pa(e) {
    if (e instanceof Date) {
        var t = da(e);
        return ua(t)
    } else
        return null
}
function ma(e) {
    var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
    switch (e.byteLength) {
    case 4:
        {
            var i = t.getUint32(0)
              , s = 0;
            return {
                sec: i,
                nsec: s
            }
        }
    case 8:
        {
            var n = t.getUint32(0)
              , r = t.getUint32(4)
              , i = (n & 3) * 4294967296 + r
              , s = n >>> 2;
            return {
                sec: i,
                nsec: s
            }
        }
    case 12:
        {
            var i = _r(t, 4)
              , s = t.getUint32(0);
            return {
                sec: i,
                nsec: s
            }
        }
    default:
        throw new Pe("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(e.length))
    }
}
function ga(e) {
    var t = ma(e);
    return new Date(t.sec * 1e3 + t.nsec / 1e6)
}
var ya = {
    type: ca,
    encode: pa,
    decode: ga
}
  , zr = function() {
    function e() {
        this.builtInEncoders = [],
        this.builtInDecoders = [],
        this.encoders = [],
        this.decoders = [],
        this.register(ya)
    }
    return e.prototype.register = function(t) {
        var i = t.type
          , s = t.encode
          , n = t.decode;
        if (i >= 0)
            this.encoders[i] = s,
            this.decoders[i] = n;
        else {
            var r = 1 + i;
            this.builtInEncoders[r] = s,
            this.builtInDecoders[r] = n
        }
    }
    ,
    e.prototype.tryToEncode = function(t, i) {
        for (var s = 0; s < this.builtInEncoders.length; s++) {
            var n = this.builtInEncoders[s];
            if (n != null) {
                var r = n(t, i);
                if (r != null) {
                    var o = -1 - s;
                    return new ni(o,r)
                }
            }
        }
        for (var s = 0; s < this.encoders.length; s++) {
            var n = this.encoders[s];
            if (n != null) {
                var r = n(t, i);
                if (r != null) {
                    var o = s;
                    return new ni(o,r)
                }
            }
        }
        return t instanceof ni ? t : null
    }
    ,
    e.prototype.decode = function(t, i, s) {
        var n = i < 0 ? this.builtInDecoders[-1 - i] : this.decoders[i];
        return n ? n(t, i, s) : new ni(i,t)
    }
    ,
    e.defaultCodec = new e,
    e
}();
function gi(e) {
    return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : e instanceof ArrayBuffer ? new Uint8Array(e) : Uint8Array.from(e)
}
function wa(e) {
    if (e instanceof ArrayBuffer)
        return new DataView(e);
    var t = gi(e);
    return new DataView(t.buffer,t.byteOffset,t.byteLength)
}
var ka = 100
  , va = 2048
  , xa = function() {
    function e(t, i, s, n, r, o, l, c) {
        t === void 0 && (t = zr.defaultCodec),
        i === void 0 && (i = void 0),
        s === void 0 && (s = ka),
        n === void 0 && (n = va),
        r === void 0 && (r = !1),
        o === void 0 && (o = !1),
        l === void 0 && (l = !1),
        c === void 0 && (c = !1),
        this.extensionCodec = t,
        this.context = i,
        this.maxDepth = s,
        this.initialBufferSize = n,
        this.sortKeys = r,
        this.forceFloat32 = o,
        this.ignoreUndefined = l,
        this.forceIntegerToFloat = c,
        this.pos = 0,
        this.view = new DataView(new ArrayBuffer(this.initialBufferSize)),
        this.bytes = new Uint8Array(this.view.buffer)
    }
    return e.prototype.reinitializeState = function() {
        this.pos = 0
    }
    ,
    e.prototype.encodeSharedRef = function(t) {
        return this.reinitializeState(),
        this.doEncode(t, 1),
        this.bytes.subarray(0, this.pos)
    }
    ,
    e.prototype.encode = function(t) {
        return this.reinitializeState(),
        this.doEncode(t, 1),
        this.bytes.slice(0, this.pos)
    }
    ,
    e.prototype.doEncode = function(t, i) {
        if (i > this.maxDepth)
            throw new Error("Too deep objects in depth ".concat(i));
        t == null ? this.encodeNil() : typeof t == "boolean" ? this.encodeBoolean(t) : typeof t == "number" ? this.encodeNumber(t) : typeof t == "string" ? this.encodeString(t) : this.encodeObject(t, i)
    }
    ,
    e.prototype.ensureBufferSizeToWrite = function(t) {
        var i = this.pos + t;
        this.view.byteLength < i && this.resizeBuffer(i * 2)
    }
    ,
    e.prototype.resizeBuffer = function(t) {
        var i = new ArrayBuffer(t)
          , s = new Uint8Array(i)
          , n = new DataView(i);
        s.set(this.bytes),
        this.view = n,
        this.bytes = s
    }
    ,
    e.prototype.encodeNil = function() {
        this.writeU8(192)
    }
    ,
    e.prototype.encodeBoolean = function(t) {
        t === !1 ? this.writeU8(194) : this.writeU8(195)
    }
    ,
    e.prototype.encodeNumber = function(t) {
        Number.isSafeInteger(t) && !this.forceIntegerToFloat ? t >= 0 ? t < 128 ? this.writeU8(t) : t < 256 ? (this.writeU8(204),
        this.writeU8(t)) : t < 65536 ? (this.writeU8(205),
        this.writeU16(t)) : t < 4294967296 ? (this.writeU8(206),
        this.writeU32(t)) : (this.writeU8(207),
        this.writeU64(t)) : t >= -32 ? this.writeU8(224 | t + 32) : t >= -128 ? (this.writeU8(208),
        this.writeI8(t)) : t >= -32768 ? (this.writeU8(209),
        this.writeI16(t)) : t >= -2147483648 ? (this.writeU8(210),
        this.writeI32(t)) : (this.writeU8(211),
        this.writeI64(t)) : this.forceFloat32 ? (this.writeU8(202),
        this.writeF32(t)) : (this.writeU8(203),
        this.writeF64(t))
    }
    ,
    e.prototype.writeStringHeader = function(t) {
        if (t < 32)
            this.writeU8(160 + t);
        else if (t < 256)
            this.writeU8(217),
            this.writeU8(t);
        else if (t < 65536)
            this.writeU8(218),
            this.writeU16(t);
        else if (t < 4294967296)
            this.writeU8(219),
            this.writeU32(t);
        else
            throw new Error("Too long string: ".concat(t, " bytes in UTF-8"))
    }
    ,
    e.prototype.encodeString = function(t) {
        var i = 5
          , s = t.length;
        if (s > ea) {
            var n = Es(t);
            this.ensureBufferSizeToWrite(i + n),
            this.writeStringHeader(n),
            na(t, this.bytes, this.pos),
            this.pos += n
        } else {
            var n = Es(t);
            this.ensureBufferSizeToWrite(i + n),
            this.writeStringHeader(n),
            jo(t, this.bytes, this.pos),
            this.pos += n
        }
    }
    ,
    e.prototype.encodeObject = function(t, i) {
        var s = this.extensionCodec.tryToEncode(t, this.context);
        if (s != null)
            this.encodeExtension(s);
        else if (Array.isArray(t))
            this.encodeArray(t, i);
        else if (ArrayBuffer.isView(t))
            this.encodeBinary(t);
        else if (typeof t == "object")
            this.encodeMap(t, i);
        else
            throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(t)))
    }
    ,
    e.prototype.encodeBinary = function(t) {
        var i = t.byteLength;
        if (i < 256)
            this.writeU8(196),
            this.writeU8(i);
        else if (i < 65536)
            this.writeU8(197),
            this.writeU16(i);
        else if (i < 4294967296)
            this.writeU8(198),
            this.writeU32(i);
        else
            throw new Error("Too large binary: ".concat(i));
        var s = gi(t);
        this.writeU8a(s)
    }
    ,
    e.prototype.encodeArray = function(t, i) {
        var s = t.length;
        if (s < 16)
            this.writeU8(144 + s);
        else if (s < 65536)
            this.writeU8(220),
            this.writeU16(s);
        else if (s < 4294967296)
            this.writeU8(221),
            this.writeU32(s);
        else
            throw new Error("Too large array: ".concat(s));
        for (var n = 0, r = t; n < r.length; n++) {
            var o = r[n];
            this.doEncode(o, i + 1)
        }
    }
    ,
    e.prototype.countWithoutUndefined = function(t, i) {
        for (var s = 0, n = 0, r = i; n < r.length; n++) {
            var o = r[n];
            t[o] !== void 0 && s++
        }
        return s
    }
    ,
    e.prototype.encodeMap = function(t, i) {
        var s = Object.keys(t);
        this.sortKeys && s.sort();
        var n = this.ignoreUndefined ? this.countWithoutUndefined(t, s) : s.length;
        if (n < 16)
            this.writeU8(128 + n);
        else if (n < 65536)
            this.writeU8(222),
            this.writeU16(n);
        else if (n < 4294967296)
            this.writeU8(223),
            this.writeU32(n);
        else
            throw new Error("Too large map object: ".concat(n));
        for (var r = 0, o = s; r < o.length; r++) {
            var l = o[r]
              , c = t[l];
            this.ignoreUndefined && c === void 0 || (this.encodeString(l),
            this.doEncode(c, i + 1))
        }
    }
    ,
    e.prototype.encodeExtension = function(t) {
        var i = t.data.length;
        if (i === 1)
            this.writeU8(212);
        else if (i === 2)
            this.writeU8(213);
        else if (i === 4)
            this.writeU8(214);
        else if (i === 8)
            this.writeU8(215);
        else if (i === 16)
            this.writeU8(216);
        else if (i < 256)
            this.writeU8(199),
            this.writeU8(i);
        else if (i < 65536)
            this.writeU8(200),
            this.writeU16(i);
        else if (i < 4294967296)
            this.writeU8(201),
            this.writeU32(i);
        else
            throw new Error("Too large extension object: ".concat(i));
        this.writeI8(t.type),
        this.writeU8a(t.data)
    }
    ,
    e.prototype.writeU8 = function(t) {
        this.ensureBufferSizeToWrite(1),
        this.view.setUint8(this.pos, t),
        this.pos++
    }
    ,
    e.prototype.writeU8a = function(t) {
        var i = t.length;
        this.ensureBufferSizeToWrite(i),
        this.bytes.set(t, this.pos),
        this.pos += i
    }
    ,
    e.prototype.writeI8 = function(t) {
        this.ensureBufferSizeToWrite(1),
        this.view.setInt8(this.pos, t),
        this.pos++
    }
    ,
    e.prototype.writeU16 = function(t) {
        this.ensureBufferSizeToWrite(2),
        this.view.setUint16(this.pos, t),
        this.pos += 2
    }
    ,
    e.prototype.writeI16 = function(t) {
        this.ensureBufferSizeToWrite(2),
        this.view.setInt16(this.pos, t),
        this.pos += 2
    }
    ,
    e.prototype.writeU32 = function(t) {
        this.ensureBufferSizeToWrite(4),
        this.view.setUint32(this.pos, t),
        this.pos += 4
    }
    ,
    e.prototype.writeI32 = function(t) {
        this.ensureBufferSizeToWrite(4),
        this.view.setInt32(this.pos, t),
        this.pos += 4
    }
    ,
    e.prototype.writeF32 = function(t) {
        this.ensureBufferSizeToWrite(4),
        this.view.setFloat32(this.pos, t),
        this.pos += 4
    }
    ,
    e.prototype.writeF64 = function(t) {
        this.ensureBufferSizeToWrite(8),
        this.view.setFloat64(this.pos, t),
        this.pos += 8
    }
    ,
    e.prototype.writeU64 = function(t) {
        this.ensureBufferSizeToWrite(8),
        Qo(this.view, this.pos, t),
        this.pos += 8
    }
    ,
    e.prototype.writeI64 = function(t) {
        this.ensureBufferSizeToWrite(8),
        Rr(this.view, this.pos, t),
        this.pos += 8
    }
    ,
    e
}();
function Ki(e) {
    return "".concat(e < 0 ? "-" : "", "0x").concat(Math.abs(e).toString(16).padStart(2, "0"))
}
var ba = 16
  , Sa = 16
  , Ta = function() {
    function e(t, i) {
        t === void 0 && (t = ba),
        i === void 0 && (i = Sa),
        this.maxKeyLength = t,
        this.maxLengthPerKey = i,
        this.hit = 0,
        this.miss = 0,
        this.caches = [];
        for (var s = 0; s < this.maxKeyLength; s++)
            this.caches.push([])
    }
    return e.prototype.canBeCached = function(t) {
        return t > 0 && t <= this.maxKeyLength
    }
    ,
    e.prototype.find = function(t, i, s) {
        var n = this.caches[s - 1];
        e: for (var r = 0, o = n; r < o.length; r++) {
            for (var l = o[r], c = l.bytes, a = 0; a < s; a++)
                if (c[a] !== t[i + a])
                    continue e;
            return l.str
        }
        return null
    }
    ,
    e.prototype.store = function(t, i) {
        var s = this.caches[t.length - 1]
          , n = {
            bytes: t,
            str: i
        };
        s.length >= this.maxLengthPerKey ? s[Math.random() * s.length | 0] = n : s.push(n)
    }
    ,
    e.prototype.decode = function(t, i, s) {
        var n = this.find(t, i, s);
        if (n != null)
            return this.hit++,
            n;
        this.miss++;
        var r = Br(t, i, s)
          , o = Uint8Array.prototype.slice.call(t, i, i + s);
        return this.store(o, r),
        r
    }
    ,
    e
}()
  , Ia = globalThis && globalThis.__awaiter || function(e, t, i, s) {
    function n(r) {
        return r instanceof i ? r : new i(function(o) {
            o(r)
        }
        )
    }
    return new (i || (i = Promise))(function(r, o) {
        function l(u) {
            try {
                a(s.next(u))
            } catch (p) {
                o(p)
            }
        }
        function c(u) {
            try {
                a(s.throw(u))
            } catch (p) {
                o(p)
            }
        }
        function a(u) {
            u.done ? r(u.value) : n(u.value).then(l, c)
        }
        a((s = s.apply(e, t || [])).next())
    }
    )
}
  , Ji = globalThis && globalThis.__generator || function(e, t) {
    var i = {
        label: 0,
        sent: function() {
            if (r[0] & 1)
                throw r[1];
            return r[1]
        },
        trys: [],
        ops: []
    }, s, n, r, o;
    return o = {
        next: l(0),
        throw: l(1),
        return: l(2)
    },
    typeof Symbol == "function" && (o[Symbol.iterator] = function() {
        return this
    }
    ),
    o;
    function l(a) {
        return function(u) {
            return c([a, u])
        }
    }
    function c(a) {
        if (s)
            throw new TypeError("Generator is already executing.");
        for (; i; )
            try {
                if (s = 1,
                n && (r = a[0] & 2 ? n.return : a[0] ? n.throw || ((r = n.return) && r.call(n),
                0) : n.next) && !(r = r.call(n, a[1])).done)
                    return r;
                switch (n = 0,
                r && (a = [a[0] & 2, r.value]),
                a[0]) {
                case 0:
                case 1:
                    r = a;
                    break;
                case 4:
                    return i.label++,
                    {
                        value: a[1],
                        done: !1
                    };
                case 5:
                    i.label++,
                    n = a[1],
                    a = [0];
                    continue;
                case 7:
                    a = i.ops.pop(),
                    i.trys.pop();
                    continue;
                default:
                    if (r = i.trys,
                    !(r = r.length > 0 && r[r.length - 1]) && (a[0] === 6 || a[0] === 2)) {
                        i = 0;
                        continue
                    }
                    if (a[0] === 3 && (!r || a[1] > r[0] && a[1] < r[3])) {
                        i.label = a[1];
                        break
                    }
                    if (a[0] === 6 && i.label < r[1]) {
                        i.label = r[1],
                        r = a;
                        break
                    }
                    if (r && i.label < r[2]) {
                        i.label = r[2],
                        i.ops.push(a);
                        break
                    }
                    r[2] && i.ops.pop(),
                    i.trys.pop();
                    continue
                }
                a = t.call(e, i)
            } catch (u) {
                a = [6, u],
                n = 0
            } finally {
                s = r = 0
            }
        if (a[0] & 5)
            throw a[1];
        return {
            value: a[0] ? a[1] : void 0,
            done: !0
        }
    }
}
  , Ps = globalThis && globalThis.__asyncValues || function(e) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = e[Symbol.asyncIterator], i;
    return t ? t.call(e) : (e = typeof __values == "function" ? __values(e) : e[Symbol.iterator](),
    i = {},
    s("next"),
    s("throw"),
    s("return"),
    i[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    i);
    function s(r) {
        i[r] = e[r] && function(o) {
            return new Promise(function(l, c) {
                o = e[r](o),
                n(l, c, o.done, o.value)
            }
            )
        }
    }
    function n(r, o, l, c) {
        Promise.resolve(c).then(function(a) {
            r({
                value: a,
                done: l
            })
        }, o)
    }
}
  , St = globalThis && globalThis.__await || function(e) {
    return this instanceof St ? (this.v = e,
    this) : new St(e)
}
  , Ma = globalThis && globalThis.__asyncGenerator || function(e, t, i) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var s = i.apply(e, t || []), n, r = [];
    return n = {},
    o("next"),
    o("throw"),
    o("return"),
    n[Symbol.asyncIterator] = function() {
        return this
    }
    ,
    n;
    function o(h) {
        s[h] && (n[h] = function(m) {
            return new Promise(function(w, v) {
                r.push([h, m, w, v]) > 1 || l(h, m)
            }
            )
        }
        )
    }
    function l(h, m) {
        try {
            c(s[h](m))
        } catch (w) {
            p(r[0][3], w)
        }
    }
    function c(h) {
        h.value instanceof St ? Promise.resolve(h.value.v).then(a, u) : p(r[0][2], h)
    }
    function a(h) {
        l("next", h)
    }
    function u(h) {
        l("throw", h)
    }
    function p(h, m) {
        h(m),
        r.shift(),
        r.length && l(r[0][0], r[0][1])
    }
}
  , Ea = function(e) {
    var t = typeof e;
    return t === "string" || t === "number"
}
  , Dt = -1
  , Zn = new DataView(new ArrayBuffer(0))
  , Pa = new Uint8Array(Zn.buffer)
  , Pn = function() {
    try {
        Zn.getInt8(0)
    } catch (e) {
        return e.constructor
    }
    throw new Error("never reached")
}()
  , Cs = new Pn("Insufficient data")
  , Ca = new Ta
  , Aa = function() {
    function e(t, i, s, n, r, o, l, c) {
        t === void 0 && (t = zr.defaultCodec),
        i === void 0 && (i = void 0),
        s === void 0 && (s = Ke),
        n === void 0 && (n = Ke),
        r === void 0 && (r = Ke),
        o === void 0 && (o = Ke),
        l === void 0 && (l = Ke),
        c === void 0 && (c = Ca),
        this.extensionCodec = t,
        this.context = i,
        this.maxStrLength = s,
        this.maxBinLength = n,
        this.maxArrayLength = r,
        this.maxMapLength = o,
        this.maxExtLength = l,
        this.keyDecoder = c,
        this.totalPos = 0,
        this.pos = 0,
        this.view = Zn,
        this.bytes = Pa,
        this.headByte = Dt,
        this.stack = []
    }
    return e.prototype.reinitializeState = function() {
        this.totalPos = 0,
        this.headByte = Dt,
        this.stack.length = 0
    }
    ,
    e.prototype.setBuffer = function(t) {
        this.bytes = gi(t),
        this.view = wa(this.bytes),
        this.pos = 0
    }
    ,
    e.prototype.appendBuffer = function(t) {
        if (this.headByte === Dt && !this.hasRemaining(1))
            this.setBuffer(t);
        else {
            var i = this.bytes.subarray(this.pos)
              , s = gi(t)
              , n = new Uint8Array(i.length + s.length);
            n.set(i),
            n.set(s, i.length),
            this.setBuffer(n)
        }
    }
    ,
    e.prototype.hasRemaining = function(t) {
        return this.view.byteLength - this.pos >= t
    }
    ,
    e.prototype.createExtraByteError = function(t) {
        var i = this
          , s = i.view
          , n = i.pos;
        return new RangeError("Extra ".concat(s.byteLength - n, " of ").concat(s.byteLength, " byte(s) found at buffer[").concat(t, "]"))
    }
    ,
    e.prototype.decode = function(t) {
        this.reinitializeState(),
        this.setBuffer(t);
        var i = this.doDecodeSync();
        if (this.hasRemaining(1))
            throw this.createExtraByteError(this.pos);
        return i
    }
    ,
    e.prototype.decodeMulti = function(t) {
        return Ji(this, function(i) {
            switch (i.label) {
            case 0:
                this.reinitializeState(),
                this.setBuffer(t),
                i.label = 1;
            case 1:
                return this.hasRemaining(1) ? [4, this.doDecodeSync()] : [3, 3];
            case 2:
                return i.sent(),
                [3, 1];
            case 3:
                return [2]
            }
        })
    }
    ,
    e.prototype.decodeAsync = function(t) {
        var i, s, n, r;
        return Ia(this, void 0, void 0, function() {
            var o, l, c, a, u, p, h, m;
            return Ji(this, function(w) {
                switch (w.label) {
                case 0:
                    o = !1,
                    w.label = 1;
                case 1:
                    w.trys.push([1, 6, 7, 12]),
                    i = Ps(t),
                    w.label = 2;
                case 2:
                    return [4, i.next()];
                case 3:
                    if (s = w.sent(),
                    !!s.done)
                        return [3, 5];
                    if (c = s.value,
                    o)
                        throw this.createExtraByteError(this.totalPos);
                    this.appendBuffer(c);
                    try {
                        l = this.doDecodeSync(),
                        o = !0
                    } catch (v) {
                        if (!(v instanceof Pn))
                            throw v
                    }
                    this.totalPos += this.pos,
                    w.label = 4;
                case 4:
                    return [3, 2];
                case 5:
                    return [3, 12];
                case 6:
                    return a = w.sent(),
                    n = {
                        error: a
                    },
                    [3, 12];
                case 7:
                    return w.trys.push([7, , 10, 11]),
                    s && !s.done && (r = i.return) ? [4, r.call(i)] : [3, 9];
                case 8:
                    w.sent(),
                    w.label = 9;
                case 9:
                    return [3, 11];
                case 10:
                    if (n)
                        throw n.error;
                    return [7];
                case 11:
                    return [7];
                case 12:
                    if (o) {
                        if (this.hasRemaining(1))
                            throw this.createExtraByteError(this.totalPos);
                        return [2, l]
                    }
                    throw u = this,
                    p = u.headByte,
                    h = u.pos,
                    m = u.totalPos,
                    new RangeError("Insufficient data in parsing ".concat(Ki(p), " at ").concat(m, " (").concat(h, " in the current buffer)"))
                }
            })
        })
    }
    ,
    e.prototype.decodeArrayStream = function(t) {
        return this.decodeMultiAsync(t, !0)
    }
    ,
    e.prototype.decodeStream = function(t) {
        return this.decodeMultiAsync(t, !1)
    }
    ,
    e.prototype.decodeMultiAsync = function(t, i) {
        return Ma(this, arguments, function() {
            var n, r, o, l, c, a, u, p, h;
            return Ji(this, function(m) {
                switch (m.label) {
                case 0:
                    n = i,
                    r = -1,
                    m.label = 1;
                case 1:
                    m.trys.push([1, 13, 14, 19]),
                    o = Ps(t),
                    m.label = 2;
                case 2:
                    return [4, St(o.next())];
                case 3:
                    if (l = m.sent(),
                    !!l.done)
                        return [3, 12];
                    if (c = l.value,
                    i && r === 0)
                        throw this.createExtraByteError(this.totalPos);
                    this.appendBuffer(c),
                    n && (r = this.readArraySize(),
                    n = !1,
                    this.complete()),
                    m.label = 4;
                case 4:
                    m.trys.push([4, 9, , 10]),
                    m.label = 5;
                case 5:
                    return [4, St(this.doDecodeSync())];
                case 6:
                    return [4, m.sent()];
                case 7:
                    return m.sent(),
                    --r === 0 ? [3, 8] : [3, 5];
                case 8:
                    return [3, 10];
                case 9:
                    if (a = m.sent(),
                    !(a instanceof Pn))
                        throw a;
                    return [3, 10];
                case 10:
                    this.totalPos += this.pos,
                    m.label = 11;
                case 11:
                    return [3, 2];
                case 12:
                    return [3, 19];
                case 13:
                    return u = m.sent(),
                    p = {
                        error: u
                    },
                    [3, 19];
                case 14:
                    return m.trys.push([14, , 17, 18]),
                    l && !l.done && (h = o.return) ? [4, St(h.call(o))] : [3, 16];
                case 15:
                    m.sent(),
                    m.label = 16;
                case 16:
                    return [3, 18];
                case 17:
                    if (p)
                        throw p.error;
                    return [7];
                case 18:
                    return [7];
                case 19:
                    return [2]
                }
            })
        })
    }
    ,
    e.prototype.doDecodeSync = function() {
        e: for (; ; ) {
            var t = this.readHeadByte()
              , i = void 0;
            if (t >= 224)
                i = t - 256;
            else if (t < 192)
                if (t < 128)
                    i = t;
                else if (t < 144) {
                    var s = t - 128;
                    if (s !== 0) {
                        this.pushMapState(s),
                        this.complete();
                        continue e
                    } else
                        i = {}
                } else if (t < 160) {
                    var s = t - 144;
                    if (s !== 0) {
                        this.pushArrayState(s),
                        this.complete();
                        continue e
                    } else
                        i = []
                } else {
                    var n = t - 160;
                    i = this.decodeUtf8String(n, 0)
                }
            else if (t === 192)
                i = null;
            else if (t === 194)
                i = !1;
            else if (t === 195)
                i = !0;
            else if (t === 202)
                i = this.readF32();
            else if (t === 203)
                i = this.readF64();
            else if (t === 204)
                i = this.readU8();
            else if (t === 205)
                i = this.readU16();
            else if (t === 206)
                i = this.readU32();
            else if (t === 207)
                i = this.readU64();
            else if (t === 208)
                i = this.readI8();
            else if (t === 209)
                i = this.readI16();
            else if (t === 210)
                i = this.readI32();
            else if (t === 211)
                i = this.readI64();
            else if (t === 217) {
                var n = this.lookU8();
                i = this.decodeUtf8String(n, 1)
            } else if (t === 218) {
                var n = this.lookU16();
                i = this.decodeUtf8String(n, 2)
            } else if (t === 219) {
                var n = this.lookU32();
                i = this.decodeUtf8String(n, 4)
            } else if (t === 220) {
                var s = this.readU16();
                if (s !== 0) {
                    this.pushArrayState(s),
                    this.complete();
                    continue e
                } else
                    i = []
            } else if (t === 221) {
                var s = this.readU32();
                if (s !== 0) {
                    this.pushArrayState(s),
                    this.complete();
                    continue e
                } else
                    i = []
            } else if (t === 222) {
                var s = this.readU16();
                if (s !== 0) {
                    this.pushMapState(s),
                    this.complete();
                    continue e
                } else
                    i = {}
            } else if (t === 223) {
                var s = this.readU32();
                if (s !== 0) {
                    this.pushMapState(s),
                    this.complete();
                    continue e
                } else
                    i = {}
            } else if (t === 196) {
                var s = this.lookU8();
                i = this.decodeBinary(s, 1)
            } else if (t === 197) {
                var s = this.lookU16();
                i = this.decodeBinary(s, 2)
            } else if (t === 198) {
                var s = this.lookU32();
                i = this.decodeBinary(s, 4)
            } else if (t === 212)
                i = this.decodeExtension(1, 0);
            else if (t === 213)
                i = this.decodeExtension(2, 0);
            else if (t === 214)
                i = this.decodeExtension(4, 0);
            else if (t === 215)
                i = this.decodeExtension(8, 0);
            else if (t === 216)
                i = this.decodeExtension(16, 0);
            else if (t === 199) {
                var s = this.lookU8();
                i = this.decodeExtension(s, 1)
            } else if (t === 200) {
                var s = this.lookU16();
                i = this.decodeExtension(s, 2)
            } else if (t === 201) {
                var s = this.lookU32();
                i = this.decodeExtension(s, 4)
            } else
                throw new Pe("Unrecognized type byte: ".concat(Ki(t)));
            this.complete();
            for (var r = this.stack; r.length > 0; ) {
                var o = r[r.length - 1];
                if (o.type === 0)
                    if (o.array[o.position] = i,
                    o.position++,
                    o.position === o.size)
                        r.pop(),
                        i = o.array;
                    else
                        continue e;
                else if (o.type === 1) {
                    if (!Ea(i))
                        throw new Pe("The type of key must be string or number but " + typeof i);
                    if (i === "__proto__")
                        throw new Pe("The key __proto__ is not allowed");
                    o.key = i,
                    o.type = 2;
                    continue e
                } else if (o.map[o.key] = i,
                o.readCount++,
                o.readCount === o.size)
                    r.pop(),
                    i = o.map;
                else {
                    o.key = null,
                    o.type = 1;
                    continue e
                }
            }
            return i
        }
    }
    ,
    e.prototype.readHeadByte = function() {
        return this.headByte === Dt && (this.headByte = this.readU8()),
        this.headByte
    }
    ,
    e.prototype.complete = function() {
        this.headByte = Dt
    }
    ,
    e.prototype.readArraySize = function() {
        var t = this.readHeadByte();
        switch (t) {
        case 220:
            return this.readU16();
        case 221:
            return this.readU32();
        default:
            {
                if (t < 160)
                    return t - 144;
                throw new Pe("Unrecognized array type byte: ".concat(Ki(t)))
            }
        }
    }
    ,
    e.prototype.pushMapState = function(t) {
        if (t > this.maxMapLength)
            throw new Pe("Max length exceeded: map length (".concat(t, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
        this.stack.push({
            type: 1,
            size: t,
            key: null,
            readCount: 0,
            map: {}
        })
    }
    ,
    e.prototype.pushArrayState = function(t) {
        if (t > this.maxArrayLength)
            throw new Pe("Max length exceeded: array length (".concat(t, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
        this.stack.push({
            type: 0,
            size: t,
            array: new Array(t),
            position: 0
        })
    }
    ,
    e.prototype.decodeUtf8String = function(t, i) {
        var s;
        if (t > this.maxStrLength)
            throw new Pe("Max length exceeded: UTF-8 byte length (".concat(t, ") > maxStrLength (").concat(this.maxStrLength, ")"));
        if (this.bytes.byteLength < this.pos + i + t)
            throw Cs;
        var n = this.pos + i, r;
        return this.stateIsMapKey() && (!((s = this.keyDecoder) === null || s === void 0) && s.canBeCached(t)) ? r = this.keyDecoder.decode(this.bytes, n, t) : t > oa ? r = aa(this.bytes, n, t) : r = Br(this.bytes, n, t),
        this.pos += i + t,
        r
    }
    ,
    e.prototype.stateIsMapKey = function() {
        if (this.stack.length > 0) {
            var t = this.stack[this.stack.length - 1];
            return t.type === 1
        }
        return !1
    }
    ,
    e.prototype.decodeBinary = function(t, i) {
        if (t > this.maxBinLength)
            throw new Pe("Max length exceeded: bin length (".concat(t, ") > maxBinLength (").concat(this.maxBinLength, ")"));
        if (!this.hasRemaining(t + i))
            throw Cs;
        var s = this.pos + i
          , n = this.bytes.subarray(s, s + t);
        return this.pos += i + t,
        n
    }
    ,
    e.prototype.decodeExtension = function(t, i) {
        if (t > this.maxExtLength)
            throw new Pe("Max length exceeded: ext length (".concat(t, ") > maxExtLength (").concat(this.maxExtLength, ")"));
        var s = this.view.getInt8(this.pos + i)
          , n = this.decodeBinary(t, i + 1);
        return this.extensionCodec.decode(n, s, this.context)
    }
    ,
    e.prototype.lookU8 = function() {
        return this.view.getUint8(this.pos)
    }
    ,
    e.prototype.lookU16 = function() {
        return this.view.getUint16(this.pos)
    }
    ,
    e.prototype.lookU32 = function() {
        return this.view.getUint32(this.pos)
    }
    ,
    e.prototype.readU8 = function() {
        var t = this.view.getUint8(this.pos);
        return this.pos++,
        t
    }
    ,
    e.prototype.readI8 = function() {
        var t = this.view.getInt8(this.pos);
        return this.pos++,
        t
    }
    ,
    e.prototype.readU16 = function() {
        var t = this.view.getUint16(this.pos);
        return this.pos += 2,
        t
    }
    ,
    e.prototype.readI16 = function() {
        var t = this.view.getInt16(this.pos);
        return this.pos += 2,
        t
    }
    ,
    e.prototype.readU32 = function() {
        var t = this.view.getUint32(this.pos);
        return this.pos += 4,
        t
    }
    ,
    e.prototype.readI32 = function() {
        var t = this.view.getInt32(this.pos);
        return this.pos += 4,
        t
    }
    ,
    e.prototype.readU64 = function() {
        var t = Zo(this.view, this.pos);
        return this.pos += 8,
        t
    }
    ,
    e.prototype.readI64 = function() {
        var t = _r(this.view, this.pos);
        return this.pos += 8,
        t
    }
    ,
    e.prototype.readF32 = function() {
        var t = this.view.getFloat32(this.pos);
        return this.pos += 4,
        t
    }
    ,
    e.prototype.readF64 = function() {
        var t = this.view.getFloat64(this.pos);
        return this.pos += 8,
        t
    }
    ,
    e
}()
  , rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pi(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Hr = {
    exports: {}
}, le = Hr.exports = {}, Ce, Ae;
function Cn() {
    throw new Error("setTimeout has not been defined")
}
function An() {
    throw new Error("clearTimeout has not been defined")
}
(function() {
    try {
        typeof setTimeout == "function" ? Ce = setTimeout : Ce = Cn
    } catch {
        Ce = Cn
    }
    try {
        typeof clearTimeout == "function" ? Ae = clearTimeout : Ae = An
    } catch {
        Ae = An
    }
}
)();
function Fr(e) {
    if (Ce === setTimeout)
        return setTimeout(e, 0);
    if ((Ce === Cn || !Ce) && setTimeout)
        return Ce = setTimeout,
        setTimeout(e, 0);
    try {
        return Ce(e, 0)
    } catch {
        try {
            return Ce.call(null, e, 0)
        } catch {
            return Ce.call(this, e, 0)
        }
    }
}
function Da(e) {
    if (Ae === clearTimeout)
        return clearTimeout(e);
    if ((Ae === An || !Ae) && clearTimeout)
        return Ae = clearTimeout,
        clearTimeout(e);
    try {
        return Ae(e)
    } catch {
        try {
            return Ae.call(null, e)
        } catch {
            return Ae.call(this, e)
        }
    }
}
var ze = [], Tt = !1, Qe, ai = -1;
function Oa() {
    !Tt || !Qe || (Tt = !1,
    Qe.length ? ze = Qe.concat(ze) : ai = -1,
    ze.length && Vr())
}
function Vr() {
    if (!Tt) {
        var e = Fr(Oa);
        Tt = !0;
        for (var t = ze.length; t; ) {
            for (Qe = ze,
            ze = []; ++ai < t; )
                Qe && Qe[ai].run();
            ai = -1,
            t = ze.length
        }
        Qe = null,
        Tt = !1,
        Da(e)
    }
}
le.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
        for (var i = 1; i < arguments.length; i++)
            t[i - 1] = arguments[i];
    ze.push(new Lr(e,t)),
    ze.length === 1 && !Tt && Fr(Vr)
}
;
function Lr(e, t) {
    this.fun = e,
    this.array = t
}
Lr.prototype.run = function() {
    this.fun.apply(null, this.array)
}
;
le.title = "browser";
le.browser = !0;
le.env = {};
le.argv = [];
le.version = "";
le.versions = {};
function Fe() {}
le.on = Fe;
le.addListener = Fe;
le.once = Fe;
le.off = Fe;
le.removeListener = Fe;
le.removeAllListeners = Fe;
le.emit = Fe;
le.prependListener = Fe;
le.prependOnceListener = Fe;
le.listeners = function(e) {
    return []
}
;
le.binding = function(e) {
    throw new Error("process.binding is not supported")
}
;
le.cwd = function() {
    return "/"
}
;
le.chdir = function(e) {
    throw new Error("process.chdir is not supported")
}
;
le.umask = function() {
    return 0
}
;
var Ra = Hr.exports;
const Dn = Pi(Ra)
  , _a = 1920
  , Ba = 1080
  , za = 9
  , Ur = Dn && Dn.argv.indexOf("--largeserver") != -1 ? 80 : 40
  , Ha = Ur + 10
  , Fa = 6
  , Va = 3e3
  , La = 10
  , Ua = 5
  , Na = 50
  , qa = 4.5
  , Wa = 15
  , Xa = .9
  , Ga = 3e3
  , Ya = 60
  , $a = 35
  , Ka = 3e3
  , Ja = 500
  , Qa = Dn && {}.IS_SANDBOX
  , Za = 100
  , ja = Math.PI / 2.6
  , el = 10
  , tl = .25
  , il = Math.PI / 2
  , nl = 35
  , sl = .0016
  , rl = .993
  , ol = 34
  , al = ["#bf8f54", "#cbb091", "#896c4b", "#fadadc", "#ececec", "#c37373", "#4c4c4c", "#ecaff7", "#738cc3", "#8bc373"]
  , ll = 7
  , cl = .06
  , hl = ["Sid", "Steph", "Bmoe", "Romn", "Jononthecool", "Fiona", "Vince", "Nathan", "Nick", "Flappy", "Ronald", "Otis", "Pepe", "Mc Donald", "Theo", "Fabz", "Oliver", "Jeff", "Jimmy", "Helena", "Reaper", "Ben", "Alan", "Naomi", "XYZ", "Clever", "Jeremy", "Mike", "Destined", "Stallion", "Allison", "Meaty", "Sophia", "Vaja", "Joey", "Pendy", "Murdoch", "Theo", "Jared", "July", "Sonia", "Mel", "Dexter", "Quinn", "Milky"]
  , fl = Math.PI / 3
  , li = [{
    id: 0,
    src: "",
    xp: 0,
    val: 1
}, {
    id: 1,
    src: "_g",
    xp: 3e3,
    val: 1.1
}, {
    id: 2,
    src: "_d",
    xp: 7e3,
    val: 1.18
}, {
    id: 3,
    src: "_r",
    poison: !0,
    xp: 12e3,
    val: 1.18
}]
  , ul = function(e) {
    const t = e.weaponXP[e.weaponIndex] || 0;
    for (let i = li.length - 1; i >= 0; --i)
        if (t >= li[i].xp)
            return li[i]
}
  , dl = ["wood", "food", "stone", "points"]
  , pl = 7
  , ml = 9
  , gl = 3
  , yl = 32
  , wl = 7
  , kl = 724
  , vl = 114
  , xl = .0011
  , bl = 1e-4
  , Sl = 1.3
  , Tl = [150, 160, 165, 175]
  , Il = [80, 85, 95]
  , Ml = [80, 85, 90]
  , El = 2400
  , Pl = .75
  , Cl = 15
  , jn = 14400
  , Al = 40
  , Dl = 2200
  , Ol = .6
  , Rl = 1
  , _l = .3
  , Bl = .3
  , zl = 144e4
  , es = 320
  , Hl = 100
  , Fl = 2
  , Vl = 3200
  , Ll = 1440
  , Ul = .2
  , Nl = -1
  , ql = jn - es - 120
  , Wl = jn - es - 120
  , T = {
    maxScreenWidth: _a,
    maxScreenHeight: Ba,
    serverUpdateRate: za,
    maxPlayers: Ur,
    maxPlayersHard: Ha,
    collisionDepth: Fa,
    minimapRate: Va,
    colGrid: La,
    clientSendRate: Ua,
    healthBarWidth: Na,
    healthBarPad: qa,
    iconPadding: Wa,
    iconPad: Xa,
    deathFadeout: Ga,
    crownIconScale: Ya,
    crownPad: $a,
    chatCountdown: Ka,
    chatCooldown: Ja,
    inSandbox: Qa,
    maxAge: Za,
    gatherAngle: ja,
    gatherWiggle: el,
    hitReturnRatio: tl,
    hitAngle: il,
    playerScale: nl,
    playerSpeed: sl,
    playerDecel: rl,
    nameY: ol,
    skinColors: al,
    animalCount: ll,
    aiTurnRandom: cl,
    cowNames: hl,
    shieldAngle: fl,
    weaponVariants: li,
    fetchVariant: ul,
    resourceTypes: dl,
    areaCount: pl,
    treesPerArea: ml,
    bushesPerArea: gl,
    totalRocks: yl,
    goldOres: wl,
    riverWidth: kl,
    riverPadding: vl,
    waterCurrent: xl,
    waveSpeed: bl,
    waveMax: Sl,
    treeScales: Tl,
    bushScales: Il,
    rockScales: Ml,
    snowBiomeTop: El,
    snowSpeed: Pl,
    maxNameLength: Cl,
    mapScale: jn,
    mapPingScale: Al,
    mapPingTime: Dl,
    volcanoScale: es,
    innerVolcanoScale: Hl,
    volcanoAnimalStrength: Fl,
    volcanoAnimationDuration: Vl,
    volcanoAggressionRadius: Ll,
    volcanoAggressionPercentage: Ul,
    volcanoDamagePerSecond: Nl,
    volcanoLocationX: ql,
    volcanoLocationY: Wl,
    MAX_ATTACK: Ol,
    MAX_SPAWN_DELAY: Rl,
    MAX_SPEED: _l,
    MAX_TURN_SPEED: Bl,
    DAY_INTERVAL: zl
}
  , Xl = new xa
  , Gl = new Aa
  , ee = {
    socket: null,
    connected: !1,
    socketId: -1,
    connect: function(e, t, i) {
        if (this.socket)
            return;
        const s = this;
        try {
            let n = !1;
            const r = e;
            this.socket = new WebSocket(e),
            this.socket.binaryType = "arraybuffer",
            this.socket.onmessage = function(o) {
                var a = new Uint8Array(o.data);
                const l = Gl.decode(a)
                  , c = l[0];
                var a = l[1];
                c == "io-init" ? s.socketId = a[0] : i[c].apply(void 0, a)
            }
            ,
            this.socket.onopen = function() {
                s.connected = !0,
                t()
            }
            ,
            this.socket.onclose = function(o) {
                s.connected = !1,
                o.code == 4001 ? t("Invalid Connection") : n || t("disconnected")
            }
            ,
            this.socket.onerror = function(o) {
                this.socket && this.socket.readyState != WebSocket.OPEN && (n = !0,
                console.error("Socket error", arguments),
                t("Socket error"))
            }
        } catch (n) {
            console.warn("Socket connection error:", n),
            t(n)
        }
    },
    send: function(e) {
        const t = Array.prototype.slice.call(arguments, 1)
          , i = Xl.encode([e, t]);
        this.socket && this.socket.send(i)
    },
    socketReady: function() {
        return this.socket && this.connected
    },
    close: function() {
        this.socket && this.socket.close(),
        this.socket = null,
        this.connected = !1
    }
};
var Nr = Math.abs;
const Yl = Math.sqrt;
var Nr = Math.abs;
const $l = Math.atan2
  , Qi = Math.PI
  , Kl = function(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
}
  , Jl = function(e, t) {
    return Math.random() * (t - e + 1) + e
}
  , Ql = function(e, t, i) {
    return e + (t - e) * i
}
  , Zl = function(e, t) {
    return e > 0 ? e = Math.max(0, e - t) : e < 0 && (e = Math.min(0, e + t)),
    e
}
  , jl = function(e, t, i, s) {
    return Yl((i -= e) * i + (s -= t) * s)
}
  , ec = function(e, t, i, s) {
    return $l(t - s, e - i)
}
  , tc = function(e, t) {
    const i = Nr(t - e) % (Qi * 2);
    return i > Qi ? Qi * 2 - i : i
}
  , ic = function(e) {
    return typeof e == "number" && !isNaN(e) && isFinite(e)
}
  , nc = function(e) {
    return e && typeof e == "string"
}
  , sc = function(e) {
    return e > 999 ? (e / 1e3).toFixed(1) + "k" : e
}
  , rc = function(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
  , oc = function(e, t) {
    return e ? parseFloat(e.toFixed(t)) : 0
}
  , ac = function(e, t) {
    return parseFloat(t.points) - parseFloat(e.points)
}
  , lc = function(e, t, i, s, n, r, o, l) {
    let c = n
      , a = o;
    if (n > o && (c = o,
    a = n),
    a > i && (a = i),
    c < e && (c = e),
    c > a)
        return !1;
    let u = r
      , p = l;
    const h = o - n;
    if (Math.abs(h) > 1e-7) {
        const m = (l - r) / h
          , w = r - m * n;
        u = m * c + w,
        p = m * a + w
    }
    if (u > p) {
        const m = p;
        p = u,
        u = m
    }
    return p > s && (p = s),
    u < t && (u = t),
    !(u > p)
}
  , qr = function(e, t, i) {
    const s = e.getBoundingClientRect()
      , n = s.left + window.scrollX
      , r = s.top + window.scrollY
      , o = s.width
      , l = s.height
      , c = t > n && t < n + o
      , a = i > r && i < r + l;
    return c && a
}
  , ci = function(e) {
    const t = e.changedTouches[0];
    e.screenX = t.screenX,
    e.screenY = t.screenY,
    e.clientX = t.clientX,
    e.clientY = t.clientY,
    e.pageX = t.pageX,
    e.pageY = t.pageY
}
  , Wr = function(e, t) {
    const i = !t;
    let s = !1;
    const n = !1;
    e.addEventListener("touchstart", Be(r), n),
    e.addEventListener("touchmove", Be(o), n),
    e.addEventListener("touchend", Be(l), n),
    e.addEventListener("touchcancel", Be(l), n),
    e.addEventListener("touchleave", Be(l), n);
    function r(c) {
        ci(c),
        window.setUsingTouch(!0),
        i && (c.preventDefault(),
        c.stopPropagation()),
        e.onmouseover && e.onmouseover(c),
        s = !0
    }
    function o(c) {
        ci(c),
        window.setUsingTouch(!0),
        i && (c.preventDefault(),
        c.stopPropagation()),
        qr(e, c.pageX, c.pageY) ? s || (e.onmouseover && e.onmouseover(c),
        s = !0) : s && (e.onmouseout && e.onmouseout(c),
        s = !1)
    }
    function l(c) {
        ci(c),
        window.setUsingTouch(!0),
        i && (c.preventDefault(),
        c.stopPropagation()),
        s && (e.onclick && e.onclick(c),
        e.onmouseout && e.onmouseout(c),
        s = !1)
    }
}
  , cc = function(e) {
    for (; e.hasChildNodes(); )
        e.removeChild(e.lastChild)
}
  , hc = function(e) {
    const t = document.createElement(e.tag || "div");
    function i(s, n) {
        e[s] && (t[n] = e[s])
    }
    i("text", "textContent"),
    i("html", "innerHTML"),
    i("class", "className");
    for (const s in e) {
        switch (s) {
        case "tag":
        case "text":
        case "html":
        case "class":
        case "style":
        case "hookTouch":
        case "parent":
        case "children":
            continue
        }
        t[s] = e[s]
    }
    if (t.onclick && (t.onclick = Be(t.onclick)),
    t.onmouseover && (t.onmouseover = Be(t.onmouseover)),
    t.onmouseout && (t.onmouseout = Be(t.onmouseout)),
    e.style && (t.style.cssText = e.style),
    e.hookTouch && Wr(t),
    e.parent && e.parent.appendChild(t),
    e.children)
        for (let s = 0; s < e.children.length; s++)
            t.appendChild(e.children[s]);
    return t
}
  , Xr = function(e) {
    return e && typeof e.isTrusted == "boolean" ? e.isTrusted : !0
}
  , Be = function(e) {
    return function(t) {
        t && t instanceof Event && Xr(t) && e(t)
    }
}
  , fc = function(e) {
    let t = "";
    const i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let s = 0; s < e; s++)
        t += i.charAt(Math.floor(Math.random() * i.length));
    return t
}
  , uc = function(e, t) {
    let i = 0;
    for (let s = 0; s < e.length; s++)
        e[s] === t && i++;
    return i
}
  , C = {
    randInt: Kl,
    randFloat: Jl,
    lerp: Ql,
    decel: Zl,
    getDistance: jl,
    getDirection: ec,
    getAngleDist: tc,
    isNumber: ic,
    isString: nc,
    kFormat: sc,
    capitalizeFirst: rc,
    fixTo: oc,
    sortByPoints: ac,
    lineInRect: lc,
    containsPoint: qr,
    mousifyTouchEvent: ci,
    hookTouchEvents: Wr,
    removeAllChildren: cc,
    generateElement: hc,
    eventIsTrusted: Xr,
    checkTrusted: Be,
    randomString: fc,
    countInArray: uc
}
  , dc = function() {
    this.init = function(e, t, i, s, n, r, o) {
        this.x = e,
        this.y = t,
        this.color = o,
        this.scale = i,
        this.startScale = this.scale,
        this.maxScale = i * 1.5,
        this.scaleSpeed = .7,
        this.speed = s,
        this.life = n,
        this.text = r
    }
    ,
    this.update = function(e) {
        this.life && (this.life -= e,
        this.y -= this.speed * e,
        this.scale += this.scaleSpeed * e,
        this.scale >= this.maxScale ? (this.scale = this.maxScale,
        this.scaleSpeed *= -1) : this.scale <= this.startScale && (this.scale = this.startScale,
        this.scaleSpeed = 0),
        this.life <= 0 && (this.life = 0))
    }
    ,
    this.render = function(e, t, i) {
        e.fillStyle = this.color,
        e.font = this.scale + "px Hammersmith One",
        e.fillText(this.text, this.x - t, this.y - i)
    }
}
  , pc = function() {
    this.texts = [],
    this.update = function(e, t, i, s) {
        t.textBaseline = "middle",
        t.textAlign = "center";
        for (let n = 0; n < this.texts.length; ++n)
            this.texts[n].life && (this.texts[n].update(e),
            this.texts[n].render(t, i, s))
    }
    ,
    this.showText = function(e, t, i, s, n, r, o) {
        let l;
        for (let c = 0; c < this.texts.length; ++c)
            if (!this.texts[c].life) {
                l = this.texts[c];
                break
            }
        l || (l = new dc,
        this.texts.push(l)),
        l.init(e, t, i, s, n, r, o)
    }
}
  , mc = function(e, t) {
    let i;
    this.sounds = [],
    this.active = !0,
    this.play = function(s, n, r) {
        !n || !this.active || (i = this.sounds[s],
        i || (i = new Howl({
            src: ".././sound/" + s + ".mp3"
        }),
        this.sounds[s] = i),
        (!r || !i.isPlaying) && (i.isPlaying = !0,
        i.play(),
        i.volume((n || 1) * e.volumeMult),
        i.loop(r)))
    }
    ,
    this.toggleMute = function(s, n) {
        i = this.sounds[s],
        i && i.mute(n)
    }
    ,
    this.stop = function(s) {
        i = this.sounds[s],
        i && (i.stop(),
        i.isPlaying = !1)
    }
}
  , As = Math.floor
  , Ds = Math.abs
  , Ot = Math.cos
  , Rt = Math.sin
  , gc = Math.sqrt;
function yc(e, t, i, s, n, r) {
    this.objects = t,
    this.grids = {},
    this.updateObjects = [];
    let o, l;
    const c = s.mapScale / s.colGrid;
    this.setObjectGrids = function(h) {
        const m = Math.min(s.mapScale, Math.max(0, h.x))
          , w = Math.min(s.mapScale, Math.max(0, h.y));
        for (let v = 0; v < s.colGrid; ++v) {
            o = v * c;
            for (let x = 0; x < s.colGrid; ++x)
                l = x * c,
                m + h.scale >= o && m - h.scale <= o + c && w + h.scale >= l && w - h.scale <= l + c && (this.grids[v + "_" + x] || (this.grids[v + "_" + x] = []),
                this.grids[v + "_" + x].push(h),
                h.gridLocations.push(v + "_" + x))
        }
    }
    ,
    this.removeObjGrid = function(h) {
        let m;
        for (let w = 0; w < h.gridLocations.length; ++w)
            m = this.grids[h.gridLocations[w]].indexOf(h),
            m >= 0 && this.grids[h.gridLocations[w]].splice(m, 1)
    }
    ,
    this.disableObj = function(h) {
        if (h.active = !1,
        r) {
            h.owner && h.pps && (h.owner.pps -= h.pps),
            this.removeObjGrid(h);
            const m = this.updateObjects.indexOf(h);
            m >= 0 && this.updateObjects.splice(m, 1)
        }
    }
    ,
    this.hitObj = function(h, m) {
        for (let w = 0; w < n.length; ++w)
            n[w].active && (h.sentTo[n[w].id] && (h.active ? n[w].canSee(h) && r.send(n[w].id, "L", i.fixTo(m, 1), h.sid) : r.send(n[w].id, "Q", h.sid)),
            !h.active && h.owner == n[w] && n[w].changeItemCount(h.group.id, -1))
    }
    ;
    const a = [];
    let u;
    this.getGridArrays = function(h, m, w) {
        o = As(h / c),
        l = As(m / c),
        a.length = 0;
        try {
            this.grids[o + "_" + l] && a.push(this.grids[o + "_" + l]),
            h + w >= (o + 1) * c && (u = this.grids[o + 1 + "_" + l],
            u && a.push(u),
            l && m - w <= l * c ? (u = this.grids[o + 1 + "_" + (l - 1)],
            u && a.push(u)) : m + w >= (l + 1) * c && (u = this.grids[o + 1 + "_" + (l + 1)],
            u && a.push(u))),
            o && h - w <= o * c && (u = this.grids[o - 1 + "_" + l],
            u && a.push(u),
            l && m - w <= l * c ? (u = this.grids[o - 1 + "_" + (l - 1)],
            u && a.push(u)) : m + w >= (l + 1) * c && (u = this.grids[o - 1 + "_" + (l + 1)],
            u && a.push(u))),
            m + w >= (l + 1) * c && (u = this.grids[o + "_" + (l + 1)],
            u && a.push(u)),
            l && m - w <= l * c && (u = this.grids[o + "_" + (l - 1)],
            u && a.push(u))
        } catch {}
        return a
    }
    ;
    let p;
    this.add = function(h, m, w, v, x, D, k, S, O) {
        p = null;
        for (var L = 0; L < t.length; ++L)
            if (t[L].sid == h) {
                p = t[L];
                break
            }
        if (!p) {
            for (var L = 0; L < t.length; ++L)
                if (!t[L].active) {
                    p = t[L];
                    break
                }
        }
        p || (p = new e(h),
        t.push(p)),
        S && (p.sid = h),
        p.init(m, w, v, x, D, k, O),
        r && (this.setObjectGrids(p),
        p.doUpdate && this.updateObjects.push(p))
    }
    ,
    this.disableBySid = function(h) {
        for (let m = 0; m < t.length; ++m)
            if (t[m].sid == h) {
                this.disableObj(t[m]);
                break
            }
    }
    ,
    this.removeAllItems = function(h, m) {
        for (let w = 0; w < t.length; ++w)
            t[w].active && t[w].owner && t[w].owner.sid == h && this.disableObj(t[w]);
        m && m.broadcast("R", h)
    }
    ,
    this.fetchSpawnObj = function(h) {
        let m = null;
        for (let w = 0; w < t.length; ++w)
            if (p = t[w],
            p.active && p.owner && p.owner.sid == h && p.spawnPoint) {
                m = [p.x, p.y],
                this.disableObj(p),
                r.broadcast("Q", p.sid),
                p.owner && p.owner.changeItemCount(p.group.id, -1);
                break
            }
        return m
    }
    ,
    this.checkItemLocation = function(h, m, w, v, x, D, k) {
        for (let S = 0; S < t.length; ++S) {
            const O = t[S].blocker ? t[S].blocker : t[S].getScale(v, t[S].isItem);
            if (t[S].active && i.getDistance(h, m, t[S].x, t[S].y) < w + O)
                return !1
        }
        return !(!D && x != 18 && m >= s.mapScale / 2 - s.riverWidth / 2 && m <= s.mapScale / 2 + s.riverWidth / 2)
    }
    ,
    this.addProjectile = function(h, m, w, v, x) {
        const D = items.projectiles[x];
        let k;
        for (let S = 0; S < projectiles.length; ++S)
            if (!projectiles[S].active) {
                k = projectiles[S];
                break
            }
        k || (k = new Projectile(n,i),
        projectiles.push(k)),
        k.init(x, h, m, w, D.speed, v, D.scale)
    }
    ,
    this.checkCollision = function(h, m, w) {
        w = w || 1;
        const v = h.x - m.x
          , x = h.y - m.y;
        let D = h.scale + m.scale;
        if (Ds(v) <= D || Ds(x) <= D) {
            D = h.scale + (m.getScale ? m.getScale() : m.scale);
            let k = gc(v * v + x * x) - D;
            if (k <= 0) {
                if (m.ignoreCollision)
                    m.trap && !h.noTrap && m.owner != h && !(m.owner && m.owner.team && m.owner.team == h.team) ? (h.lockMove = !0,
                    m.hideFromEnemy = !1) : m.boostSpeed ? (h.xVel += w * m.boostSpeed * (m.weightM || 1) * Ot(m.dir),
                    h.yVel += w * m.boostSpeed * (m.weightM || 1) * Rt(m.dir)) : m.healCol ? h.healCol = m.healCol : m.teleport && (h.x = i.randInt(0, s.mapScale),
                    h.y = i.randInt(0, s.mapScale));
                else {
                    const S = i.getDirection(h.x, h.y, m.x, m.y);
                    if (i.getDistance(h.x, h.y, m.x, m.y),
                    m.isPlayer ? (k = k * -1 / 2,
                    h.x += k * Ot(S),
                    h.y += k * Rt(S),
                    m.x -= k * Ot(S),
                    m.y -= k * Rt(S)) : (h.x = m.x + D * Ot(S),
                    h.y = m.y + D * Rt(S),
                    h.xVel *= .75,
                    h.yVel *= .75),
                    m.dmg && m.owner != h && !(m.owner && m.owner.team && m.owner.team == h.team)) {
                        h.changeHealth(-m.dmg, m.owner, m);
                        const O = 1.5 * (m.weightM || 1);
                        h.xVel += O * Ot(S),
                        h.yVel += O * Rt(S),
                        m.pDmg && !(h.skin && h.skin.poisonRes) && (h.dmgOverTime.dmg = m.pDmg,
                        h.dmgOverTime.time = 5,
                        h.dmgOverTime.doer = m.owner),
                        h.colDmg && m.health && (m.changeHealth(-h.colDmg) && this.disableObj(m),
                        this.hitObj(m, i.getDirection(h.x, h.y, m.x, m.y)))
                    }
                }
                return m.zIndex > h.zIndex && (h.zIndex = m.zIndex),
                !0
            }
        }
        return !1
    }
}
function wc(e, t, i, s, n, r, o, l, c) {
    this.addProjectile = function(a, u, p, h, m, w, v, x, D) {
        const k = r.projectiles[w];
        let S;
        for (let O = 0; O < t.length; ++O)
            if (!t[O].active) {
                S = t[O];
                break
            }
        return S || (S = new e(i,s,n,r,o,l,c),
        S.sid = t.length,
        t.push(S)),
        S.init(w, a, u, p, m, k.dmg, h, k.scale, v),
        S.ignoreObj = x,
        S.layer = D || k.layer,
        S.src = k.src,
        S
    }
}
function kc(e, t, i, s, n, r, o, l, c) {
    this.aiTypes = [{
        id: 0,
        name: "🐮",
        src: "cow_1",
        killScore: 150,
        health: 500,
        weightM: .8,
        speed: 95e-5,
        turnSpeed: .001,
        scale: 72,
        drop: ["food", 50]
    }, {
        id: 1,
        name: "_Gh0st3rA_xD",
        src: "pig_1",
        killScore: 200,
        health: 800,
        weightM: .6,
        speed: 85e-5,
        turnSpeed: .001,
        scale: 72,
        drop: ["food", 80]
    }, {
        id: 2,
        name: "🐂",
        src: "bull_2",
        hostile: !0,
        dmg: 20,
        killScore: 1e3,
        health: 1800,
        weightM: .5,
        speed: 94e-5,
        turnSpeed: 74e-5,
        scale: 78,
        viewRange: 800,
        chargePlayer: !0,
        drop: ["food", 100]
    }, {
        id: 3,
        name: "🐂",
        src: "bull_1",
        hostile: !0,
        dmg: 20,
        killScore: 2e3,
        health: 2800,
        weightM: .45,
        speed: .001,
        turnSpeed: 8e-4,
        scale: 90,
        viewRange: 900,
        chargePlayer: !0,
        drop: ["food", 400]
    }, {
        id: 4,
        name: "🐺",
        src: "wolf_1",
        hostile: !0,
        dmg: 8,
        killScore: 500,
        health: 300,
        weightM: .45,
        speed: .001,
        turnSpeed: .002,
        scale: 84,
        viewRange: 800,
        chargePlayer: !0,
        drop: ["food", 200]
    }, {
        id: 5,
        name: "🐥",
        src: "chicken_1",
        dmg: 8,
        killScore: 2e3,
        noTrap: !0,
        health: 300,
        weightM: .2,
        speed: .0018,
        turnSpeed: .006,
        scale: 70,
        drop: ["food", 100]
    }, {
        id: 6,
        name: "☠",
        nameScale: 50,
        src: "enemy",
        hostile: !0,
        dontRun: !0,
        fixedSpawn: !0,
        spawnDelay: 6e4,
        noTrap: !0,
        colDmg: 100,
        dmg: 40,
        killScore: 8e3,
        health: 18e3,
        weightM: .4,
        speed: 7e-4,
        turnSpeed: .01,
        scale: 80,
        spriteMlt: 1.8,
        leapForce: .9,
        viewRange: 1e3,
        hitRange: 210,
        hitDelay: 1e3,
        chargePlayer: !0,
        drop: ["food", 100]
    }, {
        id: 7,
        name: "💼",
        hostile: !0,
        nameScale: 35,
        src: "crate_1",
        fixedSpawn: !0,
        spawnDelay: 12e4,
        colDmg: 200,
        killScore: 5e3,
        health: 2e4,
        weightM: .1,
        speed: 0,
        turnSpeed: 0,
        scale: 70,
        spriteMlt: 1
    }, {
        id: 8,
        name: "🦝",
        src: "wolf_2",
        hostile: !0,
        fixedSpawn: !0,
        dontRun: !0,
        hitScare: 4,
        spawnDelay: 3e4,
        noTrap: !0,
        nameScale: 35,
        dmg: 10,
        colDmg: 100,
        killScore: 3e3,
        health: 7e3,
        weightM: .45,
        speed: .0015,
        turnSpeed: .002,
        scale: 90,
        viewRange: 800,
        chargePlayer: !0,
        drop: ["food", 1e3]
    }, {
        id: 9,
        name: "🦝",
        src: "wolf_2",
        hostile: !0,
        fixedSpawn: !0,
        dontRun: !0,
        hitScare: 50,
        spawnDelay: 6e4,
        noTrap: !0,
        nameScale: 35,
        dmg: 12,
        colDmg: 100,
        killScore: 3e3,
        health: 9e3,
        weightM: .45,
        speed: .0015,
        turnSpeed: .0025,
        scale: 94,
        viewRange: 1440,
        chargePlayer: !0,
        drop: ["food", 3e3],
        minSpawnRange: .85,
        maxSpawnRange: .9
    }, {
        id: 10,
        name: "🐺",
        src: "wolf_1",
        hostile: !0,
        fixedSpawn: !0,
        dontRun: !0,
        hitScare: 50,
        spawnDelay: 3e4,
        dmg: 10,
        killScore: 700,
        health: 500,
        weightM: .45,
        speed: .00115,
        turnSpeed: .0025,
        scale: 88,
        viewRange: 1440,
        chargePlayer: !0,
        drop: ["food", 400],
        minSpawnRange: .85,
        maxSpawnRange: .9
    }, {
        id: 11,
        name: "🐂",
        src: "bull_1",
        hostile: !0,
        fixedSpawn: !0,
        dontRun: !0,
        hitScare: 50,
        dmg: 20,
        killScore: 5e3,
        health: 5e3,
        spawnDelay: 1e5,
        weightM: .45,
        speed: .00115,
        turnSpeed: .0025,
        scale: 94,
        viewRange: 1440,
        chargePlayer: !0,
        drop: ["food", 800],
        minSpawnRange: .85,
        maxSpawnRange: .9
    }],
    this.spawn = function(a, u, p, h) {
        if (!this.aiTypes[h])
            return console.error("missing ai type", h),
            this.spawn(a, u, p, 0);
        let m;
        for (let w = 0; w < e.length; ++w)
            if (!e[w].active) {
                m = e[w];
                break
            }
        return m || (m = new t(e.length,n,i,s,o,r,l,c),
        e.push(m)),
        m.init(a, u, p, h, this.aiTypes[h]),
        m
    }
}
const ot = Math.PI * 2
  , Zi = 0;
function vc(e, t, i, s, n, r, o, l) {
    this.sid = e,
    this.isAI = !0,
    this.nameIndex = n.randInt(0, r.cowNames.length - 1),
    this.init = function(p, h, m, w, v) {
        this.x = p,
        this.y = h,
        this.startX = v.fixedSpawn ? p : null,
        this.startY = v.fixedSpawn ? h : null,
        this.xVel = 0,
        this.yVel = 0,
        this.zIndex = 0,
        this.dir = m,
        this.dirPlus = 0,
        this.index = w,
        this.src = v.src,
        v.name && (this.name = v.name),
        (this.name || "").startsWith("💀") && (this.isVolcanoAi = !0),
        this.weightM = v.weightM,
        this.speed = v.speed,
        this.killScore = v.killScore,
        this.turnSpeed = v.turnSpeed,
        this.scale = v.scale,
        this.maxHealth = v.health,
        this.leapForce = v.leapForce,
        this.health = this.maxHealth,
        this.chargePlayer = v.chargePlayer,
        this.viewRange = v.viewRange,
        this.drop = v.drop,
        this.dmg = v.dmg,
        this.hostile = v.hostile,
        this.dontRun = v.dontRun,
        this.hitRange = v.hitRange,
        this.hitDelay = v.hitDelay,
        this.hitScare = v.hitScare,
        this.spriteMlt = v.spriteMlt,
        this.nameScale = v.nameScale,
        this.colDmg = v.colDmg,
        this.noTrap = v.noTrap,
        this.spawnDelay = v.spawnDelay,
        this.minSpawnRange = v.minSpawnRange,
        this.maxSpawnRange = v.maxSpawnRange,
        this.hitWait = 0,
        this.waitCount = 1e3,
        this.moveCount = 0,
        this.targetDir = 0,
        this.active = !0,
        this.alive = !0,
        this.runFrom = null,
        this.chargeTarget = null,
        this.dmgOverTime = {}
    }
    ,
    this.getVolcanoAggression = function() {
        const p = n.getDistance(this.x, this.y, r.volcanoLocationX, r.volcanoLocationY)
          , h = p > r.volcanoAggressionRadius ? 0 : r.volcanoAggressionRadius - p;
        return 1 + r.volcanoAggressionPercentage * (1 - h / r.volcanoAggressionRadius)
    }
    ;
    let c = 0;
    this.update = function(p) {
        if (this.active) {
            if (this.spawnCounter) {
                if (this.spawnCounter -= p * (1 + 0) * this.getVolcanoAggression(),
                this.spawnCounter <= 0)
                    if (this.spawnCounter = 0,
                    this.minSpawnRange || this.maxSpawnRange) {
                        const W = r.mapScale * this.minSpawnRange
                          , F = r.mapScale * this.maxSpawnRange;
                        this.x = n.randInt(W, F),
                        this.y = n.randInt(W, F)
                    } else
                        this.x = this.startX || n.randInt(0, r.mapScale),
                        this.y = this.startY || n.randInt(0, r.mapScale);
                return
            }
            c -= p,
            c <= 0 && (this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer),
            this.dmgOverTime.time -= 1,
            this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)),
            c = 1e3);
            let k = !1
              , S = 1;
            if (!this.zIndex && !this.lockMove && this.y >= r.mapScale / 2 - r.riverWidth / 2 && this.y <= r.mapScale / 2 + r.riverWidth / 2 && (S = .33,
            this.xVel += r.waterCurrent * p),
            this.lockMove)
                this.xVel = 0,
                this.yVel = 0;
            else if (this.waitCount > 0) {
                if (this.waitCount -= p,
                this.waitCount <= 0)
                    if (this.chargePlayer) {
                        let W, F, _;
                        for (var h = 0; h < i.length; ++h)
                            i[h].alive && !(i[h].skin && i[h].skin.bullRepel) && (_ = n.getDistance(this.x, this.y, i[h].x, i[h].y),
                            _ <= this.viewRange && (!W || _ < F) && (F = _,
                            W = i[h]));
                        W ? (this.chargeTarget = W,
                        this.moveCount = n.randInt(8e3, 12e3)) : (this.moveCount = n.randInt(1e3, 2e3),
                        this.targetDir = n.randFloat(-Math.PI, Math.PI))
                    } else
                        this.moveCount = n.randInt(4e3, 1e4),
                        this.targetDir = n.randFloat(-Math.PI, Math.PI)
            } else if (this.moveCount > 0) {
                var m = this.speed * S * (1 + r.MAX_SPEED * Zi) * this.getVolcanoAggression();
                if (this.runFrom && this.runFrom.active && !(this.runFrom.isPlayer && !this.runFrom.alive) ? (this.targetDir = n.getDirection(this.x, this.y, this.runFrom.x, this.runFrom.y),
                m *= 1.42) : this.chargeTarget && this.chargeTarget.alive && (this.targetDir = n.getDirection(this.chargeTarget.x, this.chargeTarget.y, this.x, this.y),
                m *= 1.75,
                k = !0),
                this.hitWait && (m *= .3),
                this.dir != this.targetDir) {
                    this.dir %= ot;
                    const W = (this.dir - this.targetDir + ot) % ot
                      , F = Math.min(Math.abs(W - ot), W, this.turnSpeed * p)
                      , _ = W - Math.PI >= 0 ? 1 : -1;
                    this.dir += _ * F + ot
                }
                this.dir %= ot,
                this.xVel += m * p * Math.cos(this.dir),
                this.yVel += m * p * Math.sin(this.dir),
                this.moveCount -= p,
                this.moveCount <= 0 && (this.runFrom = null,
                this.chargeTarget = null,
                this.waitCount = this.hostile ? 1500 : n.randInt(1500, 6e3))
            }
            this.zIndex = 0,
            this.lockMove = !1;
            var w;
            const O = n.getDistance(0, 0, this.xVel * p, this.yVel * p)
              , L = Math.min(4, Math.max(1, Math.round(O / 40)))
              , U = 1 / L;
            for (var h = 0; h < L; ++h) {
                this.xVel && (this.x += this.xVel * p * U),
                this.yVel && (this.y += this.yVel * p * U),
                w = t.getGridArrays(this.x, this.y, this.scale);
                for (var v = 0; v < w.length; ++v)
                    for (let F = 0; F < w[v].length; ++F)
                        w[v][F].active && t.checkCollision(this, w[v][F], U)
            }
            let q = !1;
            if (this.hitWait > 0 && (this.hitWait -= p,
            this.hitWait <= 0)) {
                q = !0,
                this.hitWait = 0,
                this.leapForce && !n.randInt(0, 2) && (this.xVel += this.leapForce * Math.cos(this.dir),
                this.yVel += this.leapForce * Math.sin(this.dir));
                var w = t.getGridArrays(this.x, this.y, this.hitRange), x, D;
                for (let F = 0; F < w.length; ++F)
                    for (var v = 0; v < w[F].length; ++v)
                        x = w[F][v],
                        x.health && (D = n.getDistance(this.x, this.y, x.x, x.y),
                        D < x.scale + this.hitRange && (x.changeHealth(-this.dmg * 5) && t.disableObj(x),
                        t.hitObj(x, n.getDirection(this.x, this.y, x.x, x.y))));
                for (var v = 0; v < i.length; ++v)
                    i[v].canSee(this) && l.send(i[v].id, "J", this.sid)
            }
            if (k || q) {
                var x, D;
                let _;
                for (var h = 0; h < i.length; ++h)
                    x = i[h],
                    x && x.alive && (D = n.getDistance(this.x, this.y, x.x, x.y),
                    this.hitRange ? !this.hitWait && D <= this.hitRange + x.scale && (q ? (_ = n.getDirection(x.x, x.y, this.x, this.y),
                    x.changeHealth(-this.dmg * (1 + r.MAX_ATTACK * Zi) * this.getVolcanoAggression()),
                    x.xVel += .6 * Math.cos(_),
                    x.yVel += .6 * Math.sin(_),
                    this.runFrom = null,
                    this.chargeTarget = null,
                    this.waitCount = 3e3,
                    this.hitWait = n.randInt(0, 2) ? 0 : 600) : this.hitWait = this.hitDelay) : D <= this.scale + x.scale && (_ = n.getDirection(x.x, x.y, this.x, this.y),
                    x.changeHealth(-this.dmg * (1 + r.MAX_ATTACK * Zi) * this.getVolcanoAggression()),
                    x.xVel += .55 * Math.cos(_),
                    x.yVel += .55 * Math.sin(_)))
            }
            this.xVel && (this.xVel *= Math.pow(r.playerDecel, p)),
            this.yVel && (this.yVel *= Math.pow(r.playerDecel, p));
            const P = this.scale;
            this.x - P < 0 ? (this.x = P,
            this.xVel = 0) : this.x + P > r.mapScale && (this.x = r.mapScale - P,
            this.xVel = 0),
            this.y - P < 0 ? (this.y = P,
            this.yVel = 0) : this.y + P > r.mapScale && (this.y = r.mapScale - P,
            this.yVel = 0),
            this.isVolcanoAi && (this.chargeTarget && (n.getDistance(this.chargeTarget.x, this.chargeTarget.y, r.volcanoLocationX, r.volcanoLocationY) || 0) > r.volcanoAggressionRadius && (this.chargeTarget = null),
            this.xVel && (this.x < r.volcanoLocationX - r.volcanoAggressionRadius ? (this.x = r.volcanoLocationX - r.volcanoAggressionRadius,
            this.xVel = 0) : this.x > r.volcanoLocationX + r.volcanoAggressionRadius && (this.x = r.volcanoLocationX + r.volcanoAggressionRadius,
            this.xVel = 0)),
            this.yVel && (this.y < r.volcanoLocationY - r.volcanoAggressionRadius ? (this.y = r.volcanoLocationY - r.volcanoAggressionRadius,
            this.yVel = 0) : this.y > r.volcanoLocationY + r.volcanoAggressionRadius && (this.y = r.volcanoLocationY + r.volcanoAggressionRadius,
            this.yVel = 0)))
        }
    }
    ,
    this.canSee = function(p) {
        if (!p || p.skin && p.skin.invisTimer && p.noMovTimer >= p.skin.invisTimer)
            return !1;
        const h = Math.abs(p.x - this.x) - p.scale
          , m = Math.abs(p.y - this.y) - p.scale;
        return h <= r.maxScreenWidth / 2 * 1.3 && m <= r.maxScreenHeight / 2 * 1.3
    }
    ;
    let a = 0
      , u = 0;
    this.animate = function(p) {
        this.animTime > 0 && (this.animTime -= p,
        this.animTime <= 0 ? (this.animTime = 0,
        this.dirPlus = 0,
        a = 0,
        u = 0) : u == 0 ? (a += p / (this.animSpeed * r.hitReturnRatio),
        this.dirPlus = n.lerp(0, this.targetAngle, Math.min(1, a)),
        a >= 1 && (a = 1,
        u = 1)) : (a -= p / (this.animSpeed * (1 - r.hitReturnRatio)),
        this.dirPlus = n.lerp(0, this.targetAngle, Math.max(0, a))))
    }
    ,
    this.startAnim = function() {
        this.animTime = this.animSpeed = 600,
        this.targetAngle = Math.PI * .8,
        a = 0,
        u = 0
    }
    ,
    this.changeHealth = function(p, h, m) {
        if (this.active && (this.health += p,
        m && (this.hitScare && !n.randInt(0, this.hitScare) ? (this.runFrom = m,
        this.waitCount = 0,
        this.moveCount = 2e3) : this.hostile && this.chargePlayer && m.isPlayer ? (this.chargeTarget = m,
        this.waitCount = 0,
        this.moveCount = 8e3) : this.dontRun || (this.runFrom = m,
        this.waitCount = 0,
        this.moveCount = 2e3)),
        p < 0 && this.hitRange && n.randInt(0, 1) && (this.hitWait = 500),
        h && h.canSee(this) && p < 0 && l.send(h.id, "8", Math.round(this.x), Math.round(this.y), Math.round(-p), 1),
        this.health <= 0)) {
            if (this.spawnDelay)
                this.spawnCounter = this.spawnDelay,
                this.x = -1e6,
                this.y = -1e6;
            else if (this.minSpawnRange || this.maxSpawnRange) {
                const w = r.mapScale * this.minSpawnRange
                  , v = r.mapScale * this.maxSpawnRange;
                this.x = n.randInt(w, v),
                this.y = n.randInt(w, v)
            } else
                this.x = this.startX || n.randInt(0, r.mapScale),
                this.y = this.startY || n.randInt(0, r.mapScale);
            if (this.health = this.maxHealth,
            this.runFrom = null,
            h && (o(h, this.killScore),
            this.drop))
                for (let w = 0; w < this.drop.length; )
                    h.addResource(r.resourceTypes.indexOf(this.drop[w]), this.drop[w + 1]),
                    w += 2
        }
    }
}
function xc(e) {
    this.sid = e,
    this.init = function(t, i, s, n, r, o, l) {
        o = o || {},
        this.sentTo = {},
        this.gridLocations = [],
        this.active = !0,
        this.doUpdate = o.doUpdate,
        this.x = t,
        this.y = i,
        this.dir = s,
        this.xWiggle = 0,
        this.yWiggle = 0,
        this.scale = n,
        this.type = r,
        this.id = o.id,
        this.owner = l,
        this.name = o.name,
        this.isItem = this.id != null,
        this.group = o.group,
        this.health = o.health,
        this.layer = 2,
        this.group != null ? this.layer = this.group.layer : this.type == 0 ? this.layer = 3 : this.type == 2 ? this.layer = 0 : this.type == 4 && (this.layer = -1),
        this.colDiv = o.colDiv || 1,
        this.blocker = o.blocker,
        this.ignoreCollision = o.ignoreCollision,
        this.dontGather = o.dontGather,
        this.hideFromEnemy = o.hideFromEnemy,
        this.friction = o.friction,
        this.projDmg = o.projDmg,
        this.dmg = o.dmg,
        this.pDmg = o.pDmg,
        this.pps = o.pps,
        this.zIndex = o.zIndex || 0,
        this.turnSpeed = o.turnSpeed,
        this.req = o.req,
        this.trap = o.trap,
        this.healCol = o.healCol,
        this.teleport = o.teleport,
        this.boostSpeed = o.boostSpeed,
        this.projectile = o.projectile,
        this.shootRange = o.shootRange,
        this.shootRate = o.shootRate,
        this.shootCount = this.shootRate,
        this.spawnPoint = o.spawnPoint
    }
    ,
    this.changeHealth = function(t, i) {
        return this.health += t,
        this.health <= 0
    }
    ,
    this.getScale = function(t, i) {
        return t = t || 1,
        this.scale * (this.isItem || this.type == 2 || this.type == 3 || this.type == 4 ? 1 : .6 * t) * (i ? 1 : this.colDiv)
    }
    ,
    this.visibleToPlayer = function(t) {
        return !this.hideFromEnemy || this.owner && (this.owner == t || this.owner.team && t.team == this.owner.team)
    }
    ,
    this.update = function(t) {
        this.active && (this.xWiggle && (this.xWiggle *= Math.pow(.99, t)),
        this.yWiggle && (this.yWiggle *= Math.pow(.99, t)),
        this.turnSpeed && (this.dir += this.turnSpeed * t))
    }
}
const j = [{
    id: 0,
    name: "food",
    layer: 0
}, {
    id: 1,
    name: "walls",
    place: !0,
    limit: 30,
    layer: 0
}, {
    id: 2,
    name: "spikes",
    place: !0,
    limit: 15,
    layer: 0
}, {
    id: 3,
    name: "mill",
    place: !0,
    limit: 7,
    sandboxLimit: 299,
    layer: 1
}, {
    id: 4,
    name: "mine",
    place: !0,
    limit: 1,
    layer: 0
}, {
    id: 5,
    name: "trap",
    place: !0,
    limit: 6,
    layer: -1
}, {
    id: 6,
    name: "booster",
    place: !0,
    limit: 12,
    sandboxLimit: 299,
    layer: -1
}, {
    id: 7,
    name: "turret",
    place: !0,
    limit: 2,
    layer: 1
}, {
    id: 8,
    name: "watchtower",
    place: !0,
    limit: 12,
    layer: 1
}, {
    id: 9,
    name: "buff",
    place: !0,
    limit: 4,
    layer: -1
}, {
    id: 10,
    name: "spawn",
    place: !0,
    limit: 1,
    layer: -1
}, {
    id: 11,
    name: "sapling",
    place: !0,
    limit: 2,
    layer: 0
}, {
    id: 12,
    name: "blocker",
    place: !0,
    limit: 3,
    layer: -1
}, {
    id: 13,
    name: "teleporter",
    place: !0,
    limit: 2,
    sandboxLimit: 299,
    layer: -1
}]
  , bc = [{
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 25,
    speed: 1.6,
    scale: 103,
    range: 1e3
}, {
    indx: 1,
    layer: 1,
    dmg: 25,
    scale: 20
}, {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 35,
    speed: 2.5,
    scale: 103,
    range: 1200
}, {
    indx: 0,
    layer: 0,
    src: "arrow_1",
    dmg: 30,
    speed: 2,
    scale: 103,
    range: 1200
}, {
    indx: 1,
    layer: 1,
    dmg: 16,
    scale: 20
}, {
    indx: 0,
    layer: 0,
    src: "bullet_1",
    dmg: 50,
    speed: 3.6,
    scale: 160,
    range: 1400
}]
  , Sc = [{
    id: 0,
    type: 0,
    name: "tool hammer",
    desc: "tool for gathering all resources",
    src: "hammer_1",
    length: 140,
    width: 140,
    xOff: -3,
    yOff: 18,
    dmg: 25,
    range: 65,
    gather: 1,
    speed: 300
}, {
    id: 1,
    type: 0,
    age: 2,
    name: "hand axe",
    desc: "gathers resources at a higher rate",
    src: "axe_1",
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 30,
    spdMult: 1,
    range: 70,
    gather: 2,
    speed: 400
}, {
    id: 2,
    type: 0,
    age: 8,
    pre: 1,
    name: "great axe",
    desc: "deal more damage and gather more resources",
    src: "great_axe_1",
    length: 140,
    width: 140,
    xOff: -8,
    yOff: 25,
    dmg: 35,
    spdMult: 1,
    range: 75,
    gather: 4,
    speed: 400
}, {
    id: 3,
    type: 0,
    age: 2,
    name: "short sword",
    desc: "increased attack power but slower move speed",
    src: "sword_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 46,
    dmg: 35,
    spdMult: .85,
    range: 110,
    gather: 1,
    speed: 300
}, {
    id: 4,
    type: 0,
    age: 8,
    pre: 3,
    name: "katana",
    desc: "greater range and damage",
    src: "samurai_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 59,
    dmg: 40,
    spdMult: .8,
    range: 118,
    gather: 1,
    speed: 300
}, {
    id: 5,
    type: 0,
    age: 2,
    name: "polearm",
    desc: "long range melee weapon",
    src: "spear_1",
    iPad: 1.3,
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 45,
    knock: .2,
    spdMult: .82,
    range: 142,
    gather: 1,
    speed: 700
}, {
    id: 6,
    type: 0,
    age: 2,
    name: "bat",
    desc: "fast long range melee weapon",
    src: "bat_1",
    iPad: 1.3,
    length: 110,
    width: 180,
    xOff: -8,
    yOff: 53,
    dmg: 20,
    knock: .7,
    range: 110,
    gather: 1,
    speed: 300
}, {
    id: 7,
    type: 0,
    age: 2,
    name: "daggers",
    desc: "really fast short range weapon",
    src: "dagger_1",
    iPad: .8,
    length: 110,
    width: 110,
    xOff: 18,
    yOff: 0,
    dmg: 20,
    knock: .1,
    range: 65,
    gather: 1,
    hitSlow: .1,
    spdMult: 1.13,
    speed: 100
}, {
    id: 8,
    type: 0,
    age: 2,
    name: "stick",
    desc: "great for gathering but very weak",
    src: "stick_1",
    length: 140,
    width: 140,
    xOff: 3,
    yOff: 24,
    dmg: 1,
    spdMult: 1,
    range: 70,
    gather: 7,
    speed: 400
}, {
    id: 9,
    type: 1,
    age: 6,
    name: "hunting bow",
    desc: "bow used for ranged combat and hunting",
    src: "bow_1",
    req: ["wood", 4],
    length: 120,
    width: 120,
    xOff: -6,
    yOff: 0,
    projectile: 0,
    spdMult: .75,
    speed: 600
}, {
    id: 10,
    type: 1,
    age: 6,
    name: "great hammer",
    desc: "hammer used for destroying structures",
    src: "great_hammer_1",
    length: 140,
    width: 140,
    xOff: -9,
    yOff: 25,
    dmg: 10,
    spdMult: .88,
    range: 75,
    sDmg: 7.5,
    gather: 1,
    speed: 400
}, {
    id: 11,
    type: 1,
    age: 6,
    name: "wooden shield",
    desc: "blocks projectiles and reduces melee damage",
    src: "shield_1",
    length: 120,
    width: 120,
    shield: .2,
    xOff: 6,
    yOff: 0,
    spdMult: .7
}, {
    id: 12,
    type: 1,
    age: 8,
    pre: 9,
    name: "crossbow",
    desc: "deals more damage and has greater range",
    src: "crossbow_1",
    req: ["wood", 5],
    aboveHand: !0,
    armS: .75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 2,
    spdMult: .7,
    speed: 700
}, {
    id: 13,
    type: 1,
    age: 9,
    pre: 12,
    name: "repeater crossbow",
    desc: "high firerate crossbow with reduced damage",
    src: "crossbow_2",
    req: ["wood", 10],
    aboveHand: !0,
    armS: .75,
    length: 120,
    width: 120,
    xOff: -4,
    yOff: 0,
    projectile: 3,
    spdMult: .7,
    speed: 230
}, {
    id: 14,
    type: 1,
    age: 6,
    name: "mc grabby",
    desc: "steals resources from enemies",
    src: "grab_1",
    length: 130,
    width: 210,
    xOff: -8,
    yOff: 53,
    dmg: 0,
    steal: 250,
    knock: .2,
    spdMult: 1.05,
    range: 125,
    gather: 0,
    speed: 700
}, {
    id: 15,
    type: 1,
    age: 9,
    pre: 12,
    name: "musket",
    desc: "slow firerate but high damage and range",
    src: "musket_1",
    req: ["stone", 10],
    aboveHand: !0,
    rec: .35,
    armS: .6,
    hndS: .3,
    hndD: 1.6,
    length: 205,
    width: 205,
    xOff: 25,
    yOff: 0,
    projectile: 5,
    hideProjectile: !0,
    spdMult: .6,
    speed: 1500
}]
  , dt = [{
    group: j[0],
    name: "apple",
    desc: "restores 20 health when consumed",
    req: ["food", 10],
    consume: function(e) {
        return e.changeHealth(20, e)
    },
    scale: 22,
    holdOffset: 15
}, {
    age: 3,
    group: j[0],
    name: "cookie",
    desc: "restores 40 health when consumed",
    req: ["food", 15],
    consume: function(e) {
        return e.changeHealth(40, e)
    },
    scale: 27,
    holdOffset: 15
}, {
    age: 7,
    group: j[0],
    name: "cheese",
    desc: "restores 30 health and another 50 over 5 seconds",
    req: ["food", 25],
    consume: function(e) {
        return e.changeHealth(30, e) || e.health < 100 ? (e.dmgOverTime.dmg = -10,
        e.dmgOverTime.doer = e,
        e.dmgOverTime.time = 5,
        !0) : !1
    },
    scale: 27,
    holdOffset: 15
}, {
    group: j[1],
    name: "wood wall",
    desc: "provides protection for your village",
    req: ["wood", 10],
    projDmg: !0,
    health: 380,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 3,
    group: j[1],
    name: "stone wall",
    desc: "provides improved protection for your village",
    req: ["stone", 25],
    health: 900,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    pre: 1,
    group: j[1],
    name: "castle wall",
    desc: "provides powerful protection for your village",
    req: ["stone", 35],
    health: 1500,
    scale: 52,
    holdOffset: 20,
    placeOffset: -5
}, {
    group: j[2],
    name: "spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 20, "stone", 5],
    health: 400,
    dmg: 20,
    scale: 49,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 5,
    group: j[2],
    name: "greater spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 30, "stone", 10],
    health: 500,
    dmg: 35,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 9,
    pre: 1,
    group: j[2],
    name: "poison spikes",
    desc: "poisons enemies when they touch them",
    req: ["wood", 35, "stone", 15],
    health: 600,
    dmg: 30,
    pDmg: 5,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    age: 9,
    pre: 2,
    group: j[2],
    name: "spinning spikes",
    desc: "damages enemies when they touch them",
    req: ["wood", 30, "stone", 20],
    health: 500,
    dmg: 45,
    turnSpeed: .003,
    scale: 52,
    spritePadding: -23,
    holdOffset: 8,
    placeOffset: -5
}, {
    group: j[3],
    name: "windmill",
    desc: "generates gold over time",
    req: ["wood", 50, "stone", 10],
    health: 400,
    pps: 1,
    turnSpeed: .0016,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 45,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 5,
    pre: 1,
    group: j[3],
    name: "faster windmill",
    desc: "generates more gold over time",
    req: ["wood", 60, "stone", 20],
    health: 500,
    pps: 1.5,
    turnSpeed: .0025,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 8,
    pre: 1,
    group: j[3],
    name: "power mill",
    desc: "generates more gold over time",
    req: ["wood", 100, "stone", 50],
    health: 800,
    pps: 2,
    turnSpeed: .005,
    spritePadding: 25,
    iconLineMult: 12,
    scale: 47,
    holdOffset: 20,
    placeOffset: 5
}, {
    age: 5,
    group: j[4],
    type: 2,
    name: "mine",
    desc: "allows you to mine stone",
    req: ["wood", 20, "stone", 100],
    iconLineMult: 12,
    scale: 65,
    holdOffset: 20,
    placeOffset: 0
}, {
    age: 5,
    group: j[11],
    type: 0,
    name: "sapling",
    desc: "allows you to farm wood",
    req: ["wood", 150],
    iconLineMult: 12,
    colDiv: .5,
    scale: 110,
    holdOffset: 50,
    placeOffset: -15
}, {
    age: 4,
    group: j[5],
    name: "pit trap",
    desc: "pit that traps enemies if they walk over it",
    req: ["wood", 30, "stone", 30],
    trap: !0,
    ignoreCollision: !0,
    hideFromEnemy: !0,
    health: 500,
    colDiv: .2,
    scale: 50,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 4,
    group: j[6],
    name: "boost pad",
    desc: "provides boost when stepped on",
    req: ["stone", 20, "wood", 5],
    ignoreCollision: !0,
    boostSpeed: 1.5,
    health: 150,
    colDiv: .7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: j[7],
    doUpdate: !0,
    name: "turret",
    desc: "defensive structure that shoots at enemies",
    req: ["wood", 200, "stone", 150],
    health: 800,
    projectile: 1,
    shootRange: 700,
    shootRate: 2200,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: j[8],
    name: "platform",
    desc: "platform to shoot over walls and cross over water",
    req: ["wood", 20],
    ignoreCollision: !0,
    zIndex: 1,
    health: 300,
    scale: 43,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: j[9],
    name: "healing pad",
    desc: "standing on it will slowly heal you",
    req: ["wood", 30, "food", 10],
    ignoreCollision: !0,
    healCol: 15,
    health: 400,
    colDiv: .7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 9,
    group: j[10],
    name: "spawn pad",
    desc: "you will spawn here when you die but it will dissapear",
    req: ["wood", 100, "stone", 100],
    health: 400,
    ignoreCollision: !0,
    spawnPoint: !0,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: j[12],
    name: "blocker",
    desc: "blocks building in radius",
    req: ["wood", 30, "stone", 25],
    ignoreCollision: !0,
    blocker: 300,
    health: 400,
    colDiv: .7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}, {
    age: 7,
    group: j[13],
    name: "teleporter",
    desc: "teleports you to a random point on the map",
    req: ["wood", 60, "stone", 60],
    ignoreCollision: !0,
    teleport: !0,
    health: 200,
    colDiv: .7,
    scale: 45,
    holdOffset: 20,
    placeOffset: -5
}];
for (let e = 0; e < dt.length; ++e)
    dt[e].id = e,
    dt[e].pre && (dt[e].pre = e - dt[e].pre);
const R = {
    groups: j,
    projectiles: bc,
    weapons: Sc,
    list: dt
}
  , Tc = ["ahole", "anus", "ash0le", "ash0les", "asholes", "ass", "Ass Monkey", "Assface", "assh0le", "assh0lez", "asshole", "assholes", "assholz", "asswipe", "azzhole", "bassterds", "bastard", "bastards", "bastardz", "basterds", "basterdz", "Biatch", "bitch", "bitches", "Blow Job", "boffing", "butthole", "buttwipe", "c0ck", "c0cks", "c0k", "Carpet Muncher", "cawk", "cawks", "Clit", "cnts", "cntz", "cock", "cockhead", "cock-head", "cocks", "CockSucker", "cock-sucker", "crap", "cum", "cunt", "cunts", "cuntz", "dick", "dild0", "dild0s", "dildo", "dildos", "dilld0", "dilld0s", "dominatricks", "dominatrics", "dominatrix", "dyke", "enema", "f u c k", "f u c k e r", "fag", "fag1t", "faget", "fagg1t", "faggit", "faggot", "fagg0t", "fagit", "fags", "fagz", "faig", "faigs", "fart", "flipping the bird", "fuck", "fucker", "fuckin", "fucking", "fucks", "Fudge Packer", "fuk", "Fukah", "Fuken", "fuker", "Fukin", "Fukk", "Fukkah", "Fukken", "Fukker", "Fukkin", "g00k", "God-damned", "h00r", "h0ar", "h0re", "hells", "hoar", "hoor", "hoore", "jackoff", "jap", "japs", "jerk-off", "jisim", "jiss", "jizm", "jizz", "knob", "knobs", "knobz", "kunt", "kunts", "kuntz", "Lezzian", "Lipshits", "Lipshitz", "masochist", "masokist", "massterbait", "masstrbait", "masstrbate", "masterbaiter", "masterbate", "masterbates", "Motha Fucker", "Motha Fuker", "Motha Fukkah", "Motha Fukker", "Mother Fucker", "Mother Fukah", "Mother Fuker", "Mother Fukkah", "Mother Fukker", "mother-fucker", "Mutha Fucker", "Mutha Fukah", "Mutha Fuker", "Mutha Fukkah", "Mutha Fukker", "n1gr", "nastt", "nigger;", "nigur;", "niiger;", "niigr;", "orafis", "orgasim;", "orgasm", "orgasum", "oriface", "orifice", "orifiss", "packi", "packie", "packy", "paki", "pakie", "paky", "pecker", "peeenus", "peeenusss", "peenus", "peinus", "pen1s", "penas", "penis", "penis-breath", "penus", "penuus", "Phuc", "Phuck", "Phuk", "Phuker", "Phukker", "polac", "polack", "polak", "Poonani", "pr1c", "pr1ck", "pr1k", "pusse", "pussee", "pussy", "puuke", "puuker", "qweir", "recktum", "rectum", "retard", "sadist", "scank", "schlong", "screwing", "semen", "sex", "sexy", "Sh!t", "sh1t", "sh1ter", "sh1ts", "sh1tter", "sh1tz", "shit", "shits", "shitter", "Shitty", "Shity", "shitz", "Shyt", "Shyte", "Shytty", "Shyty", "skanck", "skank", "skankee", "skankey", "skanks", "Skanky", "slag", "slut", "sluts", "Slutty", "slutz", "son-of-a-bitch", "tit", "turd", "va1jina", "vag1na", "vagiina", "vagina", "vaj1na", "vajina", "vullva", "vulva", "w0p", "wh00r", "wh0re", "whore", "xrated", "xxx", "b!+ch", "bitch", "blowjob", "clit", "arschloch", "fuck", "shit", "ass", "asshole", "b!tch", "b17ch", "b1tch", "bastard", "bi+ch", "boiolas", "buceta", "c0ck", "cawk", "chink", "cipa", "clits", "cock", "cum", "cunt", "dildo", "dirsa", "ejakulate", "fatass", "fcuk", "fuk", "fux0r", "hoer", "hore", "jism", "kawk", "l3itch", "l3i+ch", "masturbate", "masterbat*", "masterbat3", "motherfucker", "s.o.b.", "mofo", "nazi", "nigga", "nigger", "nutsack", "phuck", "pimpis", "pusse", "pussy", "scrotum", "sh!t", "shemale", "shi+", "sh!+", "slut", "smut", "teets", "tits", "boobs", "b00bs", "teez", "testical", "testicle", "titt", "w00se", "jackoff", "wank", "whoar", "whore", "*damn", "*dyke", "*fuck*", "*shit*", "@$$", "amcik", "andskota", "arse*", "assrammer", "ayir", "bi7ch", "bitch*", "bollock*", "breasts", "butt-pirate", "cabron", "cazzo", "chraa", "chuj", "Cock*", "cunt*", "d4mn", "daygo", "dego", "dick*", "dike*", "dupa", "dziwka", "ejackulate", "Ekrem*", "Ekto", "enculer", "faen", "fag*", "fanculo", "fanny", "feces", "feg", "Felcher", "ficken", "fitt*", "Flikker", "foreskin", "Fotze", "Fu(*", "fuk*", "futkretzn", "gook", "guiena", "h0r", "h4x0r", "hell", "helvete", "hoer*", "honkey", "Huevon", "hui", "injun", "jizz", "kanker*", "kike", "klootzak", "kraut", "knulle", "kuk", "kuksuger", "Kurac", "kurwa", "kusi*", "kyrpa*", "lesbo", "mamhoon", "masturbat*", "merd*", "mibun", "monkleigh", "mouliewop", "muie", "mulkku", "muschi", "nazis", "nepesaurio", "nigger*", "orospu", "paska*", "perse", "picka", "pierdol*", "pillu*", "pimmel", "piss*", "pizda", "poontsee", "poop", "porn", "p0rn", "pr0n", "preteen", "pula", "pule", "puta", "puto", "qahbeh", "queef*", "rautenberg", "schaffer", "scheiss*", "schlampe", "schmuck", "screw", "sh!t*", "sharmuta", "sharmute", "shipal", "shiz", "skribz", "skurwysyn", "sphencter", "spic", "spierdalaj", "splooge", "suka", "b00b*", "testicle*", "titt*", "twat", "vittu", "wank*", "wetback*", "wichser", "wop*", "yed", "zabourah"]
  , Ic = {
    words: Tc
};
var Mc = {
    "4r5e": 1,
    "5h1t": 1,
    "5hit": 1,
    a55: 1,
    anal: 1,
    anus: 1,
    ar5e: 1,
    arrse: 1,
    arse: 1,
    ass: 1,
    "ass-fucker": 1,
    asses: 1,
    assfucker: 1,
    assfukka: 1,
    asshole: 1,
    assholes: 1,
    asswhole: 1,
    a_s_s: 1,
    "b!tch": 1,
    b00bs: 1,
    b17ch: 1,
    b1tch: 1,
    ballbag: 1,
    balls: 1,
    ballsack: 1,
    bastard: 1,
    beastial: 1,
    beastiality: 1,
    bellend: 1,
    bestial: 1,
    bestiality: 1,
    "bi+ch": 1,
    biatch: 1,
    bitch: 1,
    bitcher: 1,
    bitchers: 1,
    bitches: 1,
    bitchin: 1,
    bitching: 1,
    bloody: 1,
    "blow job": 1,
    blowjob: 1,
    blowjobs: 1,
    boiolas: 1,
    bollock: 1,
    bollok: 1,
    boner: 1,
    boob: 1,
    boobs: 1,
    booobs: 1,
    boooobs: 1,
    booooobs: 1,
    booooooobs: 1,
    breasts: 1,
    buceta: 1,
    bugger: 1,
    bum: 1,
    "bunny fucker": 1,
    butt: 1,
    butthole: 1,
    buttmuch: 1,
    buttplug: 1,
    c0ck: 1,
    c0cksucker: 1,
    "carpet muncher": 1,
    cawk: 1,
    chink: 1,
    cipa: 1,
    cl1t: 1,
    clit: 1,
    clitoris: 1,
    clits: 1,
    cnut: 1,
    cock: 1,
    "cock-sucker": 1,
    cockface: 1,
    cockhead: 1,
    cockmunch: 1,
    cockmuncher: 1,
    cocks: 1,
    cocksuck: 1,
    cocksucked: 1,
    cocksucker: 1,
    cocksucking: 1,
    cocksucks: 1,
    cocksuka: 1,
    cocksukka: 1,
    cok: 1,
    cokmuncher: 1,
    coksucka: 1,
    coon: 1,
    cox: 1,
    crap: 1,
    cum: 1,
    cummer: 1,
    cumming: 1,
    cums: 1,
    cumshot: 1,
    cunilingus: 1,
    cunillingus: 1,
    cunnilingus: 1,
    cunt: 1,
    cuntlick: 1,
    cuntlicker: 1,
    cuntlicking: 1,
    cunts: 1,
    cyalis: 1,
    cyberfuc: 1,
    cyberfuck: 1,
    cyberfucked: 1,
    cyberfucker: 1,
    cyberfuckers: 1,
    cyberfucking: 1,
    d1ck: 1,
    damn: 1,
    dick: 1,
    dickhead: 1,
    dildo: 1,
    dildos: 1,
    dink: 1,
    dinks: 1,
    dirsa: 1,
    dlck: 1,
    "dog-fucker": 1,
    doggin: 1,
    dogging: 1,
    donkeyribber: 1,
    doosh: 1,
    duche: 1,
    dyke: 1,
    ejaculate: 1,
    ejaculated: 1,
    ejaculates: 1,
    ejaculating: 1,
    ejaculatings: 1,
    ejaculation: 1,
    ejakulate: 1,
    "f u c k": 1,
    "f u c k e r": 1,
    f4nny: 1,
    fag: 1,
    fagging: 1,
    faggitt: 1,
    faggot: 1,
    faggs: 1,
    fagot: 1,
    fagots: 1,
    fags: 1,
    fanny: 1,
    fannyflaps: 1,
    fannyfucker: 1,
    fanyy: 1,
    fatass: 1,
    fcuk: 1,
    fcuker: 1,
    fcuking: 1,
    feck: 1,
    fecker: 1,
    felching: 1,
    fellate: 1,
    fellatio: 1,
    fingerfuck: 1,
    fingerfucked: 1,
    fingerfucker: 1,
    fingerfuckers: 1,
    fingerfucking: 1,
    fingerfucks: 1,
    fistfuck: 1,
    fistfucked: 1,
    fistfucker: 1,
    fistfuckers: 1,
    fistfucking: 1,
    fistfuckings: 1,
    fistfucks: 1,
    flange: 1,
    fook: 1,
    fooker: 1,
    fuck: 1,
    fucka: 1,
    fucked: 1,
    fucker: 1,
    fuckers: 1,
    fuckhead: 1,
    fuckheads: 1,
    fuckin: 1,
    fucking: 1,
    fuckings: 1,
    fuckingshitmotherfucker: 1,
    fuckme: 1,
    fucks: 1,
    fuckwhit: 1,
    fuckwit: 1,
    "fudge packer": 1,
    fudgepacker: 1,
    fuk: 1,
    fuker: 1,
    fukker: 1,
    fukkin: 1,
    fuks: 1,
    fukwhit: 1,
    fukwit: 1,
    fux: 1,
    fux0r: 1,
    f_u_c_k: 1,
    gangbang: 1,
    gangbanged: 1,
    gangbangs: 1,
    gaylord: 1,
    gaysex: 1,
    goatse: 1,
    God: 1,
    "god-dam": 1,
    "god-damned": 1,
    goddamn: 1,
    goddamned: 1,
    hardcoresex: 1,
    hell: 1,
    heshe: 1,
    hoar: 1,
    hoare: 1,
    hoer: 1,
    homo: 1,
    hore: 1,
    horniest: 1,
    horny: 1,
    hotsex: 1,
    "jack-off": 1,
    jackoff: 1,
    jap: 1,
    "jerk-off": 1,
    jism: 1,
    jiz: 1,
    jizm: 1,
    jizz: 1,
    kawk: 1,
    knob: 1,
    knobead: 1,
    knobed: 1,
    knobend: 1,
    knobhead: 1,
    knobjocky: 1,
    knobjokey: 1,
    kock: 1,
    kondum: 1,
    kondums: 1,
    kum: 1,
    kummer: 1,
    kumming: 1,
    kums: 1,
    kunilingus: 1,
    "l3i+ch": 1,
    l3itch: 1,
    labia: 1,
    lust: 1,
    lusting: 1,
    m0f0: 1,
    m0fo: 1,
    m45terbate: 1,
    ma5terb8: 1,
    ma5terbate: 1,
    masochist: 1,
    "master-bate": 1,
    masterb8: 1,
    "masterbat*": 1,
    masterbat3: 1,
    masterbate: 1,
    masterbation: 1,
    masterbations: 1,
    masturbate: 1,
    "mo-fo": 1,
    mof0: 1,
    mofo: 1,
    mothafuck: 1,
    mothafucka: 1,
    mothafuckas: 1,
    mothafuckaz: 1,
    mothafucked: 1,
    mothafucker: 1,
    mothafuckers: 1,
    mothafuckin: 1,
    mothafucking: 1,
    mothafuckings: 1,
    mothafucks: 1,
    "mother fucker": 1,
    motherfuck: 1,
    motherfucked: 1,
    motherfucker: 1,
    motherfuckers: 1,
    motherfuckin: 1,
    motherfucking: 1,
    motherfuckings: 1,
    motherfuckka: 1,
    motherfucks: 1,
    muff: 1,
    mutha: 1,
    muthafecker: 1,
    muthafuckker: 1,
    muther: 1,
    mutherfucker: 1,
    n1gga: 1,
    n1gger: 1,
    nazi: 1,
    nigg3r: 1,
    nigg4h: 1,
    nigga: 1,
    niggah: 1,
    niggas: 1,
    niggaz: 1,
    nigger: 1,
    niggers: 1,
    nob: 1,
    "nob jokey": 1,
    nobhead: 1,
    nobjocky: 1,
    nobjokey: 1,
    numbnuts: 1,
    nutsack: 1,
    orgasim: 1,
    orgasims: 1,
    orgasm: 1,
    orgasms: 1,
    p0rn: 1,
    pawn: 1,
    pecker: 1,
    penis: 1,
    penisfucker: 1,
    phonesex: 1,
    phuck: 1,
    phuk: 1,
    phuked: 1,
    phuking: 1,
    phukked: 1,
    phukking: 1,
    phuks: 1,
    phuq: 1,
    pigfucker: 1,
    pimpis: 1,
    piss: 1,
    pissed: 1,
    pisser: 1,
    pissers: 1,
    pisses: 1,
    pissflaps: 1,
    pissin: 1,
    pissing: 1,
    pissoff: 1,
    poop: 1,
    porn: 1,
    porno: 1,
    pornography: 1,
    pornos: 1,
    prick: 1,
    pricks: 1,
    pron: 1,
    pube: 1,
    pusse: 1,
    pussi: 1,
    pussies: 1,
    pussy: 1,
    pussys: 1,
    rectum: 1,
    retard: 1,
    rimjaw: 1,
    rimming: 1,
    "s hit": 1,
    "s.o.b.": 1,
    sadist: 1,
    schlong: 1,
    screwing: 1,
    scroat: 1,
    scrote: 1,
    scrotum: 1,
    semen: 1,
    sex: 1,
    "sh!+": 1,
    "sh!t": 1,
    sh1t: 1,
    shag: 1,
    shagger: 1,
    shaggin: 1,
    shagging: 1,
    shemale: 1,
    "shi+": 1,
    shit: 1,
    shitdick: 1,
    shite: 1,
    shited: 1,
    shitey: 1,
    shitfuck: 1,
    shitfull: 1,
    shithead: 1,
    shiting: 1,
    shitings: 1,
    shits: 1,
    shitted: 1,
    shitter: 1,
    shitters: 1,
    shitting: 1,
    shittings: 1,
    shitty: 1,
    skank: 1,
    slut: 1,
    sluts: 1,
    smegma: 1,
    smut: 1,
    snatch: 1,
    "son-of-a-bitch": 1,
    spac: 1,
    spunk: 1,
    s_h_i_t: 1,
    t1tt1e5: 1,
    t1tties: 1,
    teets: 1,
    teez: 1,
    testical: 1,
    testicle: 1,
    tit: 1,
    titfuck: 1,
    tits: 1,
    titt: 1,
    tittie5: 1,
    tittiefucker: 1,
    titties: 1,
    tittyfuck: 1,
    tittywank: 1,
    titwank: 1,
    tosser: 1,
    turd: 1,
    tw4t: 1,
    twat: 1,
    twathead: 1,
    twatty: 1,
    twunt: 1,
    twunter: 1,
    v14gra: 1,
    v1gra: 1,
    vagina: 1,
    viagra: 1,
    vulva: 1,
    w00se: 1,
    wang: 1,
    wank: 1,
    wanker: 1,
    wanky: 1,
    whoar: 1,
    whore: 1,
    willies: 1,
    willy: 1,
    xrated: 1,
    xxx: 1
}
  , Ec = ["4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"]
  , Pc = /\b(4r5e|5h1t|5hit|a55|anal|anus|ar5e|arrse|arse|ass|ass-fucker|asses|assfucker|assfukka|asshole|assholes|asswhole|a_s_s|b!tch|b00bs|b17ch|b1tch|ballbag|balls|ballsack|bastard|beastial|beastiality|bellend|bestial|bestiality|bi\+ch|biatch|bitch|bitcher|bitchers|bitches|bitchin|bitching|bloody|blow job|blowjob|blowjobs|boiolas|bollock|bollok|boner|boob|boobs|booobs|boooobs|booooobs|booooooobs|breasts|buceta|bugger|bum|bunny fucker|butt|butthole|buttmuch|buttplug|c0ck|c0cksucker|carpet muncher|cawk|chink|cipa|cl1t|clit|clitoris|clits|cnut|cock|cock-sucker|cockface|cockhead|cockmunch|cockmuncher|cocks|cocksuck|cocksucked|cocksucker|cocksucking|cocksucks|cocksuka|cocksukka|cok|cokmuncher|coksucka|coon|cox|crap|cum|cummer|cumming|cums|cumshot|cunilingus|cunillingus|cunnilingus|cunt|cuntlick|cuntlicker|cuntlicking|cunts|cyalis|cyberfuc|cyberfuck|cyberfucked|cyberfucker|cyberfuckers|cyberfucking|d1ck|damn|dick|dickhead|dildo|dildos|dink|dinks|dirsa|dlck|dog-fucker|doggin|dogging|donkeyribber|doosh|duche|dyke|ejaculate|ejaculated|ejaculates|ejaculating|ejaculatings|ejaculation|ejakulate|f u c k|f u c k e r|f4nny|fag|fagging|faggitt|faggot|faggs|fagot|fagots|fags|fanny|fannyflaps|fannyfucker|fanyy|fatass|fcuk|fcuker|fcuking|feck|fecker|felching|fellate|fellatio|fingerfuck|fingerfucked|fingerfucker|fingerfuckers|fingerfucking|fingerfucks|fistfuck|fistfucked|fistfucker|fistfuckers|fistfucking|fistfuckings|fistfucks|flange|fook|fooker|fuck|fucka|fucked|fucker|fuckers|fuckhead|fuckheads|fuckin|fucking|fuckings|fuckingshitmotherfucker|fuckme|fucks|fuckwhit|fuckwit|fudge packer|fudgepacker|fuk|fuker|fukker|fukkin|fuks|fukwhit|fukwit|fux|fux0r|f_u_c_k|gangbang|gangbanged|gangbangs|gaylord|gaysex|goatse|God|god-dam|god-damned|goddamn|goddamned|hardcoresex|hell|heshe|hoar|hoare|hoer|homo|hore|horniest|horny|hotsex|jack-off|jackoff|jap|jerk-off|jism|jiz|jizm|jizz|kawk|knob|knobead|knobed|knobend|knobhead|knobjocky|knobjokey|kock|kondum|kondums|kum|kummer|kumming|kums|kunilingus|l3i\+ch|l3itch|labia|lust|lusting|m0f0|m0fo|m45terbate|ma5terb8|ma5terbate|masochist|master-bate|masterb8|masterbat*|masterbat3|masterbate|masterbation|masterbations|masturbate|mo-fo|mof0|mofo|mothafuck|mothafucka|mothafuckas|mothafuckaz|mothafucked|mothafucker|mothafuckers|mothafuckin|mothafucking|mothafuckings|mothafucks|mother fucker|motherfuck|motherfucked|motherfucker|motherfuckers|motherfuckin|motherfucking|motherfuckings|motherfuckka|motherfucks|muff|mutha|muthafecker|muthafuckker|muther|mutherfucker|n1gga|n1gger|nazi|nigg3r|nigg4h|nigga|niggah|niggas|niggaz|nigger|niggers|nob|nob jokey|nobhead|nobjocky|nobjokey|numbnuts|nutsack|orgasim|orgasims|orgasm|orgasms|p0rn|pawn|pecker|penis|penisfucker|phonesex|phuck|phuk|phuked|phuking|phukked|phukking|phuks|phuq|pigfucker|pimpis|piss|pissed|pisser|pissers|pisses|pissflaps|pissin|pissing|pissoff|poop|porn|porno|pornography|pornos|prick|pricks|pron|pube|pusse|pussi|pussies|pussy|pussys|rectum|retard|rimjaw|rimming|s hit|s.o.b.|sadist|schlong|screwing|scroat|scrote|scrotum|semen|sex|sh!\+|sh!t|sh1t|shag|shagger|shaggin|shagging|shemale|shi\+|shit|shitdick|shite|shited|shitey|shitfuck|shitfull|shithead|shiting|shitings|shits|shitted|shitter|shitters|shitting|shittings|shitty|skank|slut|sluts|smegma|smut|snatch|son-of-a-bitch|spac|spunk|s_h_i_t|t1tt1e5|t1tties|teets|teez|testical|testicle|tit|titfuck|tits|titt|tittie5|tittiefucker|titties|tittyfuck|tittywank|titwank|tosser|turd|tw4t|twat|twathead|twatty|twunt|twunter|v14gra|v1gra|vagina|viagra|vulva|w00se|wang|wank|wanker|wanky|whoar|whore|willies|willy|xrated|xxx)\b/gi
  , Cc = {
    object: Mc,
    array: Ec,
    regex: Pc
};
const Ac = Ic.words
  , Dc = Cc.array;
class Oc {
    constructor(t={}) {
        Object.assign(this, {
            list: t.emptyList && [] || Array.prototype.concat.apply(Ac, [Dc, t.list || []]),
            exclude: t.exclude || [],
            splitRegex: t.splitRegex || /\b/,
            placeHolder: t.placeHolder || "*",
            regex: t.regex || /[^a-zA-Z0-9|\$|\@]|\^/g,
            replaceRegex: t.replaceRegex || /\w/g
        })
    }
    isProfane(t) {
        return this.list.filter(i=>{
            const s = new RegExp(`\\b${i.replace(/(\W)/g, "\\$1")}\\b`,"gi");
            return !this.exclude.includes(i.toLowerCase()) && s.test(t)
        }
        ).length > 0 || !1
    }
    replaceWord(t) {
        return t.replace(this.regex, "").replace(this.replaceRegex, this.placeHolder)
    }
    clean(t) {
        return t.split(this.splitRegex).map(i=>this.isProfane(i) ? this.replaceWord(i) : i).join(this.splitRegex.exec(t)[0])
    }
    addWords() {
        let t = Array.from(arguments);
        this.list.push(...t),
        t.map(i=>i.toLowerCase()).forEach(i=>{
            this.exclude.includes(i) && this.exclude.splice(this.exclude.indexOf(i), 1)
        }
        )
    }
    removeWords() {
        this.exclude.push(...Array.from(arguments).map(t=>t.toLowerCase()))
    }
}
var Rc = Oc;
const _c = Pi(Rc)
  , Gr = new _c
  , Bc = ["jew", "black", "baby", "child", "white", "porn", "pedo", "trump", "clinton", "hitler", "nazi", "gay", "pride", "sex", "pleasure", "touch", "poo", "kids", "rape", "white power", "nigga", "nig nog", "doggy", "rapist", "boner", "nigger", "nigg", "finger", "nogger", "nagger", "nig", "fag", "gai", "pole", "stripper", "penis", "vagina", "pussy", "nazi", "hitler", "stalin", "burn", "chamber", "cock", "peen", "dick", "spick", "nieger", "die", "satan", "n|ig", "nlg", "cunt", "c0ck", "fag", "lick", "condom", "anal", "shit", "phile", "little", "kids", "free KR", "tiny", "sidney", "ass", "kill", ".io", "(dot)", "[dot]", "mini", "whiore", "whore", "faggot", "github", "1337", "666", "satan", "senpa", "discord", "d1scord", "mistik", ".io", "senpa.io", "sidney", "sid", "senpaio", "vries", "asa"];
Gr.addWords(...Bc);
const Os = Math.abs
  , at = Math.cos
  , lt = Math.sin
  , Rs = Math.pow
  , zc = Math.sqrt;
function Hc(e, t, i, s, n, r, o, l, c, a, u, p, h, m) {
    this.id = e,
    this.sid = t,
    this.tmpScore = 0,
    this.team = null,
    this.skinIndex = 0,
    this.tailIndex = 0,
    this.hitTime = 0,
    this.tails = {};
    for (var w = 0; w < u.length; ++w)
        u[w].price <= 0 && (this.tails[u[w].id] = 1);
    this.skins = {};
    for (var w = 0; w < a.length; ++w)
        a[w].price <= 0 && (this.skins[a[w].id] = 1);
    this.points = 0,
    this.dt = 0,
    this.hidden = !1,
    this.itemCounts = {},
    this.isPlayer = !0,
    this.pps = 0,
    this.moveDir = void 0,
    this.skinRot = 0,
    this.lastPing = 0,
    this.iconIndex = 0,
    this.skinColor = 0,
    this.spawn = function(k) {
        this.active = !0,
        this.alive = !0,
        this.lockMove = !1,
        this.lockDir = !1,
        this.minimapCounter = 0,
        this.chatCountdown = 0,
        this.shameCount = 0,
        this.shameTimer = 0,
        this.sentTo = {},
        this.gathering = 0,
        this.autoGather = 0,
        this.animTime = 0,
        this.animSpeed = 0,
        this.mouseState = 0,
        this.buildIndex = -1,
        this.weaponIndex = 0,
        this.dmgOverTime = {},
        this.noMovTimer = 0,
        this.maxXP = 300,
        this.XP = 0,
        this.age = 1,
        this.kills = 0,
        this.upgrAge = 2,
        this.upgradePoints = 0,
        this.x = 0,
        this.y = 0,
        this.zIndex = 0,
        this.xVel = 0,
        this.yVel = 0,
        this.slowMult = 1,
        this.dir = 0,
        this.dirPlus = 0,
        this.targetDir = 0,
        this.targetAngle = 0,
        this.maxHealth = 100,
        this.health = this.maxHealth,
        this.scale = i.playerScale,
        this.speed = i.playerSpeed,
        this.resetMoveDir(),
        this.resetResources(k),
        this.items = [0, 3, 6, 10],
        this.weapons = [0],
        this.shootCount = 0,
        this.weaponXP = [],
        this.reloads = {},
        this.timeSpentNearVolcano = 0
    }
    ,
    this.resetMoveDir = function() {
        this.moveDir = void 0
    }
    ,
    this.resetResources = function(k) {
        for (let S = 0; S < i.resourceTypes.length; ++S)
            this[i.resourceTypes[S]] = k ? 100 : 0
    }
    ,
    this.addItem = function(k) {
        const S = c.list[k];
        if (S) {
            for (let O = 0; O < this.items.length; ++O)
                if (c.list[this.items[O]].group == S.group)
                    return this.buildIndex == this.items[O] && (this.buildIndex = k),
                    this.items[O] = k,
                    !0;
            return this.items.push(k),
            !0
        }
        return !1
    }
    ,
    this.setUserData = function(k) {
        if (k) {
            this.name = "unknown";
            let S = k.name + "";
            S = S.slice(0, i.maxNameLength),
            S = S.replace(/[^\w:\(\)\/? -]+/gmi, " "),
            S = S.replace(/[^\x00-\x7F]/g, " "),
            S = S.trim();
            let O = !1;
            const L = S.toLowerCase().replace(/\s/g, "").replace(/1/g, "i").replace(/0/g, "o").replace(/5/g, "s");
            for (const U of Gr.list)
                if (L.indexOf(U) != -1) {
                    O = !0;
                    break
                }
            S.length > 0 && !O && (this.name = S),
            this.skinColor = 0,
            i.skinColors[k.skin] && (this.skinColor = k.skin)
        }
    }
    ,
    this.getData = function() {
        return [this.id, this.sid, this.name, s.fixTo(this.x, 2), s.fixTo(this.y, 2), s.fixTo(this.dir, 3), this.health, this.maxHealth, this.scale, this.skinColor]
    }
    ,
    this.setData = function(k) {
        this.id = k[0],
        this.sid = k[1],
        this.name = k[2],
        this.x = k[3],
        this.y = k[4],
        this.dir = k[5],
        this.health = k[6],
        this.maxHealth = k[7],
        this.scale = k[8],
        this.skinColor = k[9]
    }
    ;
    let v = 0;
    this.update = function(k) {
        if (!this.alive)
            return;
        if ((s.getDistance(this.x, this.y, i.volcanoLocationX, i.volcanoLocationY) || 0) < i.volcanoAggressionRadius && (this.timeSpentNearVolcano += k,
        this.timeSpentNearVolcano >= 1e3 && (this.changeHealth(i.volcanoDamagePerSecond, null),
        p.send(this.id, "8", Math.round(this.x), Math.round(this.y), i.volcanoDamagePerSecond, -1),
        this.timeSpentNearVolcano %= 1e3)),
        this.shameTimer > 0 && (this.shameTimer -= k,
        this.shameTimer <= 0 && (this.shameTimer = 0,
        this.shameCount = 0)),
        v -= k,
        v <= 0) {
            const _ = (this.skin && this.skin.healthRegen ? this.skin.healthRegen : 0) + (this.tail && this.tail.healthRegen ? this.tail.healthRegen : 0);
            _ && this.changeHealth(_, this),
            this.dmgOverTime.dmg && (this.changeHealth(-this.dmgOverTime.dmg, this.dmgOverTime.doer),
            this.dmgOverTime.time -= 1,
            this.dmgOverTime.time <= 0 && (this.dmgOverTime.dmg = 0)),
            this.healCol && this.changeHealth(this.healCol, this),
            v = 1e3
        }
        if (!this.alive)
            return;
        if (this.slowMult < 1 && (this.slowMult += 8e-4 * k,
        this.slowMult > 1 && (this.slowMult = 1)),
        this.noMovTimer += k,
        (this.xVel || this.yVel) && (this.noMovTimer = 0),
        this.lockMove)
            this.xVel = 0,
            this.yVel = 0;
        else {
            let _ = (this.buildIndex >= 0 ? .5 : 1) * (c.weapons[this.weaponIndex].spdMult || 1) * (this.skin && this.skin.spdMult || 1) * (this.tail && this.tail.spdMult || 1) * (this.y <= i.snowBiomeTop ? this.skin && this.skin.coldM ? 1 : i.snowSpeed : 1) * this.slowMult;
            !this.zIndex && this.y >= i.mapScale / 2 - i.riverWidth / 2 && this.y <= i.mapScale / 2 + i.riverWidth / 2 && (this.skin && this.skin.watrImm ? (_ *= .75,
            this.xVel += i.waterCurrent * .4 * k) : (_ *= .33,
            this.xVel += i.waterCurrent * k));
            let $ = this.moveDir != null ? at(this.moveDir) : 0
              , V = this.moveDir != null ? lt(this.moveDir) : 0;
            const z = zc($ * $ + V * V);
            z != 0 && ($ /= z,
            V /= z),
            $ && (this.xVel += $ * this.speed * _ * k),
            V && (this.yVel += V * this.speed * _ * k)
        }
        this.zIndex = 0,
        this.lockMove = !1,
        this.healCol = 0;
        let O;
        const L = s.getDistance(0, 0, this.xVel * k, this.yVel * k)
          , U = Math.min(4, Math.max(1, Math.round(L / 40)))
          , q = 1 / U;
        let P = {};
        for (var W = 0; W < U; ++W) {
            this.xVel && (this.x += this.xVel * k * q),
            this.yVel && (this.y += this.yVel * k * q),
            O = r.getGridArrays(this.x, this.y, this.scale);
            for (let _ = 0; _ < O.length; ++_) {
                for (let $ = 0; $ < O[_].length && !(O[_][$].active && !P[O[_][$].sid] && r.checkCollision(this, O[_][$], q) && (P[O[_][$].sid] = !0,
                !this.alive)); ++$)
                    ;
                if (!this.alive)
                    break
            }
            if (!this.alive)
                break
        }
        for (var F = o.indexOf(this), W = F + 1; W < o.length; ++W)
            o[W] != this && o[W].alive && r.checkCollision(this, o[W]);
        if (this.xVel && (this.xVel *= Rs(i.playerDecel, k),
        this.xVel <= .01 && this.xVel >= -.01 && (this.xVel = 0)),
        this.yVel && (this.yVel *= Rs(i.playerDecel, k),
        this.yVel <= .01 && this.yVel >= -.01 && (this.yVel = 0)),
        this.x - this.scale < 0 ? this.x = this.scale : this.x + this.scale > i.mapScale && (this.x = i.mapScale - this.scale),
        this.y - this.scale < 0 ? this.y = this.scale : this.y + this.scale > i.mapScale && (this.y = i.mapScale - this.scale),
        this.buildIndex < 0) {
            if (this.reloads[this.weaponIndex] > 0)
                this.reloads[this.weaponIndex] -= k,
                this.gathering = this.mouseState;
            else if (this.gathering || this.autoGather) {
                let _ = !0;
                if (c.weapons[this.weaponIndex].gather != null)
                    this.gather(o);
                else if (c.weapons[this.weaponIndex].projectile != null && this.hasRes(c.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0)) {
                    this.useRes(c.weapons[this.weaponIndex], this.skin ? this.skin.projCost : 0),
                    this.noMovTimer = 0;
                    var F = c.weapons[this.weaponIndex].projectile;
                    const V = this.scale * 2
                      , z = this.skin && this.skin.aMlt ? this.skin.aMlt : 1;
                    c.weapons[this.weaponIndex].rec && (this.xVel -= c.weapons[this.weaponIndex].rec * at(this.dir),
                    this.yVel -= c.weapons[this.weaponIndex].rec * lt(this.dir)),
                    n.addProjectile(this.x + V * at(this.dir), this.y + V * lt(this.dir), this.dir, c.projectiles[F].range * z, c.projectiles[F].speed * z, F, this, null, this.zIndex)
                } else
                    _ = !1;
                this.gathering = this.mouseState,
                _ && (this.reloads[this.weaponIndex] = c.weapons[this.weaponIndex].speed * (this.skin && this.skin.atkSpd || 1))
            }
        }
    }
    ,
    this.addWeaponXP = function(k) {
        this.weaponXP[this.weaponIndex] || (this.weaponXP[this.weaponIndex] = 0),
        this.weaponXP[this.weaponIndex] += k
    }
    ,
    this.earnXP = function(k) {
        this.age < i.maxAge && (this.XP += k,
        this.XP >= this.maxXP ? (this.age < i.maxAge ? (this.age++,
        this.XP = 0,
        this.maxXP *= 1.2) : this.XP = this.maxXP,
        this.upgradePoints++,
        p.send(this.id, "U", this.upgradePoints, this.upgrAge),
        p.send(this.id, "T", this.XP, s.fixTo(this.maxXP, 1), this.age)) : p.send(this.id, "T", this.XP))
    }
    ,
    this.changeHealth = function(k, S) {
        if (k > 0 && this.health >= this.maxHealth)
            return !1;
        k < 0 && this.skin && (k *= this.skin.dmgMult || 1),
        k < 0 && this.tail && (k *= this.tail.dmgMult || 1),
        k < 0 && (this.hitTime = Date.now()),
        this.health += k,
        this.health > this.maxHealth && (k -= this.health - this.maxHealth,
        this.health = this.maxHealth),
        this.health <= 0 && this.kill(S);
        for (let O = 0; O < o.length; ++O)
            this.sentTo[o[O].id] && p.send(o[O].id, "O", this.sid, this.health);
        return S && S.canSee(this) && !(S == this && k < 0) && p.send(S.id, "8", Math.round(this.x), Math.round(this.y), Math.round(-k), 1),
        !0
    }
    ,
    this.kill = function(k) {
        k && k.alive && (k.kills++,
        k.skin && k.skin.goldSteal ? h(k, Math.round(this.points / 2)) : h(k, Math.round(this.age * 100 * (k.skin && k.skin.kScrM ? k.skin.kScrM : 1))),
        p.send(k.id, "N", "kills", k.kills, 1)),
        this.alive = !1,
        p.send(this.id, "P"),
        m()
    }
    ,
    this.addResource = function(k, S, O) {
        !O && S > 0 && this.addWeaponXP(S),
        k == 3 ? h(this, S, !0) : (this[i.resourceTypes[k]] += S,
        p.send(this.id, "N", i.resourceTypes[k], this[i.resourceTypes[k]], 1))
    }
    ,
    this.changeItemCount = function(k, S) {
        this.itemCounts[k] = this.itemCounts[k] || 0,
        this.itemCounts[k] += S,
        p.send(this.id, "S", k, this.itemCounts[k])
    }
    ,
    this.buildItem = function(k) {
        const S = this.scale + k.scale + (k.placeOffset || 0)
          , O = this.x + S * at(this.dir)
          , L = this.y + S * lt(this.dir);
        if (this.canBuild(k) && !(k.consume && this.skin && this.skin.noEat) && (k.consume || r.checkItemLocation(O, L, k.scale, .6, k.id, !1, this))) {
            let U = !1;
            if (k.consume) {
                if (this.hitTime) {
                    const q = Date.now() - this.hitTime;
                    this.hitTime = 0,
                    q <= 120 ? (this.shameCount++,
                    this.shameCount >= 8 && (this.shameTimer = 3e4,
                    this.shameCount = 0)) : (this.shameCount -= 2,
                    this.shameCount <= 0 && (this.shameCount = 0))
                }
                this.shameTimer <= 0 && (U = k.consume(this))
            } else
                U = !0,
                k.group.limit && this.changeItemCount(k.group.id, 1),
                k.pps && (this.pps += k.pps),
                r.add(r.objects.length, O, L, this.dir, k.scale, k.type, k, !1, this);
            U && (this.useRes(k),
            this.buildIndex = -1)
        }
    }
    ,
    this.hasRes = function(k, S) {
        for (let O = 0; O < k.req.length; ) {
            if (this[k.req[O]] < Math.round(k.req[O + 1] * (S || 1)))
                return !1;
            O += 2
        }
        return !0
    }
    ,
    this.useRes = function(k, S) {
        if (!i.inSandbox)
            for (let O = 0; O < k.req.length; )
                this.addResource(i.resourceTypes.indexOf(k.req[O]), -Math.round(k.req[O + 1] * (S || 1))),
                O += 2
    }
    ,
    this.canBuild = function(k) {
        const S = i.inSandbox ? k.group.sandboxLimit || Math.max(k.group.limit * 3, 99) : k.group.limit;
        return S && this.itemCounts[k.group.id] >= S ? !1 : i.inSandbox ? !0 : this.hasRes(k)
    }
    ,
    this.gather = function() {
        this.noMovTimer = 0,
        this.slowMult -= c.weapons[this.weaponIndex].hitSlow || .3,
        this.slowMult < 0 && (this.slowMult = 0);
        const k = i.fetchVariant(this)
          , S = k.poison
          , O = k.val
          , L = {};
        let U, q, P, W;
        const F = r.getGridArrays(this.x, this.y, c.weapons[this.weaponIndex].range);
        for (let $ = 0; $ < F.length; ++$)
            for (var _ = 0; _ < F[$].length; ++_)
                if (P = F[$][_],
                P.active && !P.dontGather && !L[P.sid] && P.visibleToPlayer(this) && (U = s.getDistance(this.x, this.y, P.x, P.y) - P.scale,
                U <= c.weapons[this.weaponIndex].range && (q = s.getDirection(P.x, P.y, this.x, this.y),
                s.getAngleDist(q, this.dir) <= i.gatherAngle))) {
                    if (L[P.sid] = 1,
                    P.health) {
                        if (P.changeHealth(-c.weapons[this.weaponIndex].dmg * O * (c.weapons[this.weaponIndex].sDmg || 1) * (this.skin && this.skin.bDmg ? this.skin.bDmg : 1), this)) {
                            for (let V = 0; V < P.req.length; )
                                this.addResource(i.resourceTypes.indexOf(P.req[V]), P.req[V + 1]),
                                V += 2;
                            r.disableObj(P)
                        }
                    } else {
                        if (P.name === "volcano")
                            this.hitVolcano(c.weapons[this.weaponIndex].gather);
                        else {
                            this.earnXP(4 * c.weapons[this.weaponIndex].gather);
                            const V = c.weapons[this.weaponIndex].gather + (P.type == 3 ? 4 : 0);
                            this.addResource(P.type, V)
                        }
                        this.skin && this.skin.extraGold && this.addResource(3, 1)
                    }
                    W = !0,
                    r.hitObj(P, q)
                }
        for (var _ = 0; _ < o.length + l.length; ++_)
            if (P = o[_] || l[_ - o.length],
            P != this && P.alive && !(P.team && P.team == this.team) && (U = s.getDistance(this.x, this.y, P.x, P.y) - P.scale * 1.8,
            U <= c.weapons[this.weaponIndex].range && (q = s.getDirection(P.x, P.y, this.x, this.y),
            s.getAngleDist(q, this.dir) <= i.gatherAngle))) {
                let V = c.weapons[this.weaponIndex].steal;
                V && P.addResource && (V = Math.min(P.points || 0, V),
                this.addResource(3, V),
                P.addResource(3, -V));
                let z = O;
                P.weaponIndex != null && c.weapons[P.weaponIndex].shield && s.getAngleDist(q + Math.PI, P.dir) <= i.shieldAngle && (z = c.weapons[P.weaponIndex].shield);
                const X = c.weapons[this.weaponIndex].dmg
                  , G = X * (this.skin && this.skin.dmgMultO ? this.skin.dmgMultO : 1) * (this.tail && this.tail.dmgMultO ? this.tail.dmgMultO : 1)
                  , te = .3 * (P.weightM || 1) + (c.weapons[this.weaponIndex].knock || 0);
                P.xVel += te * at(q),
                P.yVel += te * lt(q),
                this.skin && this.skin.healD && this.changeHealth(G * z * this.skin.healD, this),
                this.tail && this.tail.healD && this.changeHealth(G * z * this.tail.healD, this),
                P.skin && P.skin.dmg && this.changeHealth(-X * P.skin.dmg, P),
                P.tail && P.tail.dmg && this.changeHealth(-X * P.tail.dmg, P),
                P.dmgOverTime && this.skin && this.skin.poisonDmg && !(P.skin && P.skin.poisonRes) && (P.dmgOverTime.dmg = this.skin.poisonDmg,
                P.dmgOverTime.time = this.skin.poisonTime || 1,
                P.dmgOverTime.doer = this),
                P.dmgOverTime && S && !(P.skin && P.skin.poisonRes) && (P.dmgOverTime.dmg = 5,
                P.dmgOverTime.time = 5,
                P.dmgOverTime.doer = this),
                P.skin && P.skin.dmgK && (this.xVel -= P.skin.dmgK * at(q),
                this.yVel -= P.skin.dmgK * lt(q)),
                P.changeHealth(-G * z, this, this)
            }
        this.sendAnimation(W ? 1 : 0)
    }
    ,
    this.hitVolcano = function(k) {
        const S = 5 + Math.round(k / 3.5);
        this.addResource(2, S),
        this.addResource(3, S)
    }
    ,
    this.sendAnimation = function(k) {
        for (let S = 0; S < o.length; ++S)
            this.sentTo[o[S].id] && this.canSee(o[S]) && p.send(o[S].id, "K", this.sid, k ? 1 : 0, this.weaponIndex)
    }
    ;
    let x = 0
      , D = 0;
    this.animate = function(k) {
        this.animTime > 0 && (this.animTime -= k,
        this.animTime <= 0 ? (this.animTime = 0,
        this.dirPlus = 0,
        x = 0,
        D = 0) : D == 0 ? (x += k / (this.animSpeed * i.hitReturnRatio),
        this.dirPlus = s.lerp(0, this.targetAngle, Math.min(1, x)),
        x >= 1 && (x = 1,
        D = 1)) : (x -= k / (this.animSpeed * (1 - i.hitReturnRatio)),
        this.dirPlus = s.lerp(0, this.targetAngle, Math.max(0, x))))
    }
    ,
    this.startAnim = function(k, S) {
        this.animTime = this.animSpeed = c.weapons[S].speed,
        this.targetAngle = k ? -i.hitAngle : -Math.PI,
        x = 0,
        D = 0
    }
    ,
    this.canSee = function(k) {
        if (!k || k.skin && k.skin.invisTimer && k.noMovTimer >= k.skin.invisTimer)
            return !1;
        const S = Os(k.x - this.x) - k.scale
          , O = Os(k.y - this.y) - k.scale;
        return S <= i.maxScreenWidth / 2 * 1.3 && O <= i.maxScreenHeight / 2 * 1.3
    }
}
const Fc = [{
    id: 45,
    name: "Shame!",
    dontSell: !0,
    price: 0,
    scale: 120,
    desc: "hacks are for losers"
}, {
    id: 51,
    name: "Moo Cap",
    price: 0,
    scale: 120,
    desc: "coolest mooer around"
}, {
    id: 50,
    name: "Apple Cap",
    price: 0,
    scale: 120,
    desc: "apple farms remembers"
}, {
    id: 28,
    name: "Moo Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 29,
    name: "Pig Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 30,
    name: "Fluff Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 36,
    name: "Pandou Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 37,
    name: "Bear Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 38,
    name: "Monkey Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 44,
    name: "Polar Head",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 35,
    name: "Fez Hat",
    price: 0,
    scale: 120,
    desc: "no effect"
}, {
    id: 42,
    name: "Enigma Hat",
    price: 0,
    scale: 120,
    desc: "join the enigma army"
}, {
    id: 43,
    name: "Blitz Hat",
    price: 0,
    scale: 120,
    desc: "hey everybody i'm blitz"
}, {
    id: 49,
    name: "Bob XIII Hat",
    price: 0,
    scale: 120,
    desc: "like and subscribe"
}, {
    id: 57,
    name: "Pumpkin",
    price: 50,
    scale: 120,
    desc: "Spooooky"
}, {
    id: 8,
    name: "Bummle Hat",
    price: 100,
    scale: 120,
    desc: "no effect"
}, {
    id: 2,
    name: "Straw Hat",
    price: 500,
    scale: 120,
    desc: "no effect"
}, {
    id: 15,
    name: "Winter Cap",
    price: 600,
    scale: 120,
    desc: "allows you to move at normal speed in snow",
    coldM: 1
}, {
    id: 5,
    name: "Cowboy Hat",
    price: 1e3,
    scale: 120,
    desc: "no effect"
}, {
    id: 4,
    name: "Ranger Hat",
    price: 2e3,
    scale: 120,
    desc: "no effect"
}, {
    id: 18,
    name: "Explorer Hat",
    price: 2e3,
    scale: 120,
    desc: "no effect"
}, {
    id: 31,
    name: "Flipper Hat",
    price: 2500,
    scale: 120,
    desc: "have more control while in water",
    watrImm: !0
}, {
    id: 1,
    name: "Marksman Cap",
    price: 3e3,
    scale: 120,
    desc: "increases arrow speed and range",
    aMlt: 1.3
}, {
    id: 10,
    name: "Bush Gear",
    price: 3e3,
    scale: 160,
    desc: "allows you to disguise yourself as a bush"
}, {
    id: 48,
    name: "Halo",
    price: 3e3,
    scale: 120,
    desc: "no effect"
}, {
    id: 6,
    name: "Soldier Helmet",
    price: 4e3,
    scale: 120,
    desc: "reduces damage taken but slows movement",
    spdMult: .94,
    dmgMult: .75
}, {
    id: 23,
    name: "Anti Venom Gear",
    price: 4e3,
    scale: 120,
    desc: "makes you immune to poison",
    poisonRes: 1
}, {
    id: 13,
    name: "Medic Gear",
    price: 5e3,
    scale: 110,
    desc: "slowly regenerates health over time",
    healthRegen: 3
}, {
    id: 9,
    name: "Miners Helmet",
    price: 5e3,
    scale: 120,
    desc: "earn 1 extra gold per resource",
    extraGold: 1
}, {
    id: 32,
    name: "Musketeer Hat",
    price: 5e3,
    scale: 120,
    desc: "reduces cost of projectiles",
    projCost: .5
}, {
    id: 7,
    name: "Bull Helmet",
    price: 6e3,
    scale: 120,
    desc: "increases damage done but drains health",
    healthRegen: -5,
    dmgMultO: 1.5,
    spdMult: .96
}, {
    id: 22,
    name: "Emp Helmet",
    price: 6e3,
    scale: 120,
    desc: "turrets won't attack but you move slower",
    antiTurret: 1,
    spdMult: .7
}, {
    id: 12,
    name: "Booster Hat",
    price: 6e3,
    scale: 120,
    desc: "increases your movement speed",
    spdMult: 1.16
}, {
    id: 26,
    name: "Barbarian Armor",
    price: 8e3,
    scale: 120,
    desc: "knocks back enemies that attack you",
    dmgK: .6
}, {
    id: 21,
    name: "Plague Mask",
    price: 1e4,
    scale: 120,
    desc: "melee attacks deal poison damage",
    poisonDmg: 5,
    poisonTime: 6
}, {
    id: 46,
    name: "Bull Mask",
    price: 1e4,
    scale: 120,
    desc: "bulls won't target you unless you attack them",
    bullRepel: 1
}, {
    id: 14,
    name: "Windmill Hat",
    topSprite: !0,
    price: 1e4,
    scale: 120,
    desc: "generates points while worn",
    pps: 1.5
}, {
    id: 11,
    name: "Spike Gear",
    topSprite: !0,
    price: 1e4,
    scale: 120,
    desc: "deal damage to players that damage you",
    dmg: .45
}, {
    id: 53,
    name: "Turret Gear",
    topSprite: !0,
    price: 1e4,
    scale: 120,
    desc: "you become a walking turret",
    turret: {
        proj: 1,
        range: 700,
        rate: 2500
    },
    spdMult: .7
}, {
    id: 20,
    name: "Samurai Armor",
    price: 12e3,
    scale: 120,
    desc: "increased attack speed and fire rate",
    atkSpd: .78
}, {
    id: 58,
    name: "Dark Knight",
    price: 12e3,
    scale: 120,
    desc: "restores health when you deal damage",
    healD: .4
}, {
    id: 27,
    name: "Scavenger Gear",
    price: 15e3,
    scale: 120,
    desc: "earn double points for each kill",
    kScrM: 2
}, {
    id: 40,
    name: "Tank Gear",
    price: 15e3,
    scale: 120,
    desc: "increased damage to buildings but slower movement",
    spdMult: .3,
    bDmg: 3.3
}, {
    id: 52,
    name: "Thief Gear",
    price: 15e3,
    scale: 120,
    desc: "steal half of a players gold when you kill them",
    goldSteal: .5
}, {
    id: 55,
    name: "Bloodthirster",
    price: 2e4,
    scale: 120,
    desc: "Restore Health when dealing damage. And increased damage",
    healD: .25,
    dmgMultO: 1.2
}, {
    id: 56,
    name: "Assassin Gear",
    price: 2e4,
    scale: 120,
    desc: "Go invisible when not moving. Can't eat. Increased speed",
    noEat: !0,
    spdMult: 1.1,
    invisTimer: 1e3
}]
  , Vc = [{
    id: 12,
    name: "Snowball",
    price: 1e3,
    scale: 105,
    xOff: 18,
    desc: "no effect"
}, {
    id: 9,
    name: "Tree Cape",
    price: 1e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 10,
    name: "Stone Cape",
    price: 1e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 3,
    name: "Cookie Cape",
    price: 1500,
    scale: 90,
    desc: "no effect"
}, {
    id: 8,
    name: "Cow Cape",
    price: 2e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 11,
    name: "Monkey Tail",
    price: 2e3,
    scale: 97,
    xOff: 25,
    desc: "Super speed but reduced damage",
    spdMult: 1.35,
    dmgMultO: .2
}, {
    id: 17,
    name: "Apple Basket",
    price: 3e3,
    scale: 80,
    xOff: 12,
    desc: "slowly regenerates health over time",
    healthRegen: 1
}, {
    id: 6,
    name: "Winter Cape",
    price: 3e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 4,
    name: "Skull Cape",
    price: 4e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 5,
    name: "Dash Cape",
    price: 5e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 2,
    name: "Dragon Cape",
    price: 6e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 1,
    name: "Super Cape",
    price: 8e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 7,
    name: "Troll Cape",
    price: 8e3,
    scale: 90,
    desc: "no effect"
}, {
    id: 14,
    name: "Thorns",
    price: 1e4,
    scale: 115,
    xOff: 20,
    desc: "no effect"
}, {
    id: 15,
    name: "Blockades",
    price: 1e4,
    scale: 95,
    xOff: 15,
    desc: "no effect"
}, {
    id: 20,
    name: "Devils Tail",
    price: 1e4,
    scale: 95,
    xOff: 20,
    desc: "no effect"
}, {
    id: 16,
    name: "Sawblade",
    price: 12e3,
    scale: 90,
    spin: !0,
    xOff: 0,
    desc: "deal damage to players that damage you",
    dmg: .15
}, {
    id: 13,
    name: "Angel Wings",
    price: 15e3,
    scale: 138,
    xOff: 22,
    desc: "slowly regenerates health over time",
    healthRegen: 3
}, {
    id: 19,
    name: "Shadow Wings",
    price: 15e3,
    scale: 138,
    xOff: 22,
    desc: "increased movement speed",
    spdMult: 1.1
}, {
    id: 18,
    name: "Blood Wings",
    price: 2e4,
    scale: 178,
    xOff: 26,
    desc: "restores health when you deal damage",
    healD: .2
}, {
    id: 21,
    name: "Corrupt X Wings",
    price: 2e4,
    scale: 178,
    xOff: 26,
    desc: "deal damage to players that damage you",
    dmg: .25
}]
  , Yr = {
    hats: Fc,
    accessories: Vc
};
function Lc(e, t, i, s, n, r, o) {
    this.init = function(a, u, p, h, m, w, v, x, D) {
        this.active = !0,
        this.indx = a,
        this.x = u,
        this.y = p,
        this.dir = h,
        this.skipMov = !0,
        this.speed = m,
        this.dmg = w,
        this.scale = x,
        this.range = v,
        this.owner = D,
        o && (this.sentTo = {})
    }
    ;
    const l = [];
    let c;
    this.update = function(a) {
        if (this.active) {
            let p = this.speed * a, h;
            if (this.skipMov ? this.skipMov = !1 : (this.x += p * Math.cos(this.dir),
            this.y += p * Math.sin(this.dir),
            this.range -= p,
            this.range <= 0 && (this.x += this.range * Math.cos(this.dir),
            this.y += this.range * Math.sin(this.dir),
            p = 1,
            this.range = 0,
            this.active = !1)),
            o) {
                for (var u = 0; u < e.length; ++u)
                    !this.sentTo[e[u].id] && e[u].canSee(this) && (this.sentTo[e[u].id] = 1,
                    o.send(e[u].id, "X", r.fixTo(this.x, 1), r.fixTo(this.y, 1), r.fixTo(this.dir, 2), r.fixTo(this.range, 1), this.speed, this.indx, this.layer, this.sid));
                l.length = 0;
                for (var u = 0; u < e.length + t.length; ++u)
                    c = e[u] || t[u - e.length],
                    c.alive && c != this.owner && !(this.owner.team && c.team == this.owner.team) && r.lineInRect(c.x - c.scale, c.y - c.scale, c.x + c.scale, c.y + c.scale, this.x, this.y, this.x + p * Math.cos(this.dir), this.y + p * Math.sin(this.dir)) && l.push(c);
                const m = i.getGridArrays(this.x, this.y, this.scale);
                for (let w = 0; w < m.length; ++w)
                    for (let v = 0; v < m[w].length; ++v)
                        c = m[w][v],
                        h = c.getScale(),
                        c.active && this.ignoreObj != c.sid && this.layer <= c.layer && l.indexOf(c) < 0 && !c.ignoreCollision && r.lineInRect(c.x - h, c.y - h, c.x + h, c.y + h, this.x, this.y, this.x + p * Math.cos(this.dir), this.y + p * Math.sin(this.dir)) && l.push(c);
                if (l.length > 0) {
                    let w = null
                      , v = null
                      , x = null;
                    for (var u = 0; u < l.length; ++u)
                        x = r.getDistance(this.x, this.y, l[u].x, l[u].y),
                        (v == null || x < v) && (v = x,
                        w = l[u]);
                    if (w.isPlayer || w.isAI) {
                        const D = .3 * (w.weightM || 1);
                        w.xVel += D * Math.cos(this.dir),
                        w.yVel += D * Math.sin(this.dir),
                        (w.weaponIndex == null || !(s.weapons[w.weaponIndex].shield && r.getAngleDist(this.dir + Math.PI, w.dir) <= n.shieldAngle)) && w.changeHealth(-this.dmg, this.owner, this.owner)
                    } else {
                        w.projDmg && w.health && w.changeHealth(-this.dmg) && i.disableObj(w);
                        for (var u = 0; u < e.length; ++u)
                            e[u].active && (w.sentTo[e[u].id] && (w.active ? e[u].canSee(w) && o.send(e[u].id, "L", r.fixTo(this.dir, 2), w.sid) : o.send(e[u].id, "Q", w.sid)),
                            !w.active && w.owner == e[u] && e[u].changeItemCount(w.group.id, -1))
                    }
                    this.active = !1;
                    for (var u = 0; u < e.length; ++u)
                        this.sentTo[e[u].id] && o.send(e[u].id, "Y", this.sid, r.fixTo(v, 1))
                }
            }
        }
    }
}
var $r = {
    exports: {}
}
  , Kr = {
    exports: {}
};
(function() {
    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
      , t = {
        rotl: function(i, s) {
            return i << s | i >>> 32 - s
        },
        rotr: function(i, s) {
            return i << 32 - s | i >>> s
        },
        endian: function(i) {
            if (i.constructor == Number)
                return t.rotl(i, 8) & 16711935 | t.rotl(i, 24) & 4278255360;
            for (var s = 0; s < i.length; s++)
                i[s] = t.endian(i[s]);
            return i
        },
        randomBytes: function(i) {
            for (var s = []; i > 0; i--)
                s.push(Math.floor(Math.random() * 256));
            return s
        },
        bytesToWords: function(i) {
            for (var s = [], n = 0, r = 0; n < i.length; n++,
            r += 8)
                s[r >>> 5] |= i[n] << 24 - r % 32;
            return s
        },
        wordsToBytes: function(i) {
            for (var s = [], n = 0; n < i.length * 32; n += 8)
                s.push(i[n >>> 5] >>> 24 - n % 32 & 255);
            return s
        },
        bytesToHex: function(i) {
            for (var s = [], n = 0; n < i.length; n++)
                s.push((i[n] >>> 4).toString(16)),
                s.push((i[n] & 15).toString(16));
            return s.join("")
        },
        hexToBytes: function(i) {
            for (var s = [], n = 0; n < i.length; n += 2)
                s.push(parseInt(i.substr(n, 2), 16));
            return s
        },
        bytesToBase64: function(i) {
            for (var s = [], n = 0; n < i.length; n += 3)
                for (var r = i[n] << 16 | i[n + 1] << 8 | i[n + 2], o = 0; o < 4; o++)
                    n * 8 + o * 6 <= i.length * 8 ? s.push(e.charAt(r >>> 6 * (3 - o) & 63)) : s.push("=");
            return s.join("")
        },
        base64ToBytes: function(i) {
            i = i.replace(/[^A-Z0-9+\/]/ig, "");
            for (var s = [], n = 0, r = 0; n < i.length; r = ++n % 4)
                r != 0 && s.push((e.indexOf(i.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << r * 2 | e.indexOf(i.charAt(n)) >>> 6 - r * 2);
            return s
        }
    };
    Kr.exports = t
}
)();
var Uc = Kr.exports
  , On = {
    utf8: {
        stringToBytes: function(e) {
            return On.bin.stringToBytes(unescape(encodeURIComponent(e)))
        },
        bytesToString: function(e) {
            return decodeURIComponent(escape(On.bin.bytesToString(e)))
        }
    },
    bin: {
        stringToBytes: function(e) {
            for (var t = [], i = 0; i < e.length; i++)
                t.push(e.charCodeAt(i) & 255);
            return t
        },
        bytesToString: function(e) {
            for (var t = [], i = 0; i < e.length; i++)
                t.push(String.fromCharCode(e[i]));
            return t.join("")
        }
    }
}
  , _s = On;
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var Nc = function(e) {
    return e != null && (Jr(e) || qc(e) || !!e._isBuffer)
};
function Jr(e) {
    return !!e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e)
}
function qc(e) {
    return typeof e.readFloatLE == "function" && typeof e.slice == "function" && Jr(e.slice(0, 0))
}
(function() {
    var e = Uc
      , t = _s.utf8
      , i = Nc
      , s = _s.bin
      , n = function(r, o) {
        r.constructor == String ? o && o.encoding === "binary" ? r = s.stringToBytes(r) : r = t.stringToBytes(r) : i(r) ? r = Array.prototype.slice.call(r, 0) : !Array.isArray(r) && r.constructor !== Uint8Array && (r = r.toString());
        for (var l = e.bytesToWords(r), c = r.length * 8, a = 1732584193, u = -271733879, p = -1732584194, h = 271733878, m = 0; m < l.length; m++)
            l[m] = (l[m] << 8 | l[m] >>> 24) & 16711935 | (l[m] << 24 | l[m] >>> 8) & 4278255360;
        l[c >>> 5] |= 128 << c % 32,
        l[(c + 64 >>> 9 << 4) + 14] = c;
        for (var w = n._ff, v = n._gg, x = n._hh, D = n._ii, m = 0; m < l.length; m += 16) {
            var k = a
              , S = u
              , O = p
              , L = h;
            a = w(a, u, p, h, l[m + 0], 7, -680876936),
            h = w(h, a, u, p, l[m + 1], 12, -389564586),
            p = w(p, h, a, u, l[m + 2], 17, 606105819),
            u = w(u, p, h, a, l[m + 3], 22, -1044525330),
            a = w(a, u, p, h, l[m + 4], 7, -176418897),
            h = w(h, a, u, p, l[m + 5], 12, 1200080426),
            p = w(p, h, a, u, l[m + 6], 17, -1473231341),
            u = w(u, p, h, a, l[m + 7], 22, -45705983),
            a = w(a, u, p, h, l[m + 8], 7, 1770035416),
            h = w(h, a, u, p, l[m + 9], 12, -1958414417),
            p = w(p, h, a, u, l[m + 10], 17, -42063),
            u = w(u, p, h, a, l[m + 11], 22, -1990404162),
            a = w(a, u, p, h, l[m + 12], 7, 1804603682),
            h = w(h, a, u, p, l[m + 13], 12, -40341101),
            p = w(p, h, a, u, l[m + 14], 17, -1502002290),
            u = w(u, p, h, a, l[m + 15], 22, 1236535329),
            a = v(a, u, p, h, l[m + 1], 5, -165796510),
            h = v(h, a, u, p, l[m + 6], 9, -1069501632),
            p = v(p, h, a, u, l[m + 11], 14, 643717713),
            u = v(u, p, h, a, l[m + 0], 20, -373897302),
            a = v(a, u, p, h, l[m + 5], 5, -701558691),
            h = v(h, a, u, p, l[m + 10], 9, 38016083),
            p = v(p, h, a, u, l[m + 15], 14, -660478335),
            u = v(u, p, h, a, l[m + 4], 20, -405537848),
            a = v(a, u, p, h, l[m + 9], 5, 568446438),
            h = v(h, a, u, p, l[m + 14], 9, -1019803690),
            p = v(p, h, a, u, l[m + 3], 14, -187363961),
            u = v(u, p, h, a, l[m + 8], 20, 1163531501),
            a = v(a, u, p, h, l[m + 13], 5, -1444681467),
            h = v(h, a, u, p, l[m + 2], 9, -51403784),
            p = v(p, h, a, u, l[m + 7], 14, 1735328473),
            u = v(u, p, h, a, l[m + 12], 20, -1926607734),
            a = x(a, u, p, h, l[m + 5], 4, -378558),
            h = x(h, a, u, p, l[m + 8], 11, -2022574463),
            p = x(p, h, a, u, l[m + 11], 16, 1839030562),
            u = x(u, p, h, a, l[m + 14], 23, -35309556),
            a = x(a, u, p, h, l[m + 1], 4, -1530992060),
            h = x(h, a, u, p, l[m + 4], 11, 1272893353),
            p = x(p, h, a, u, l[m + 7], 16, -155497632),
            u = x(u, p, h, a, l[m + 10], 23, -1094730640),
            a = x(a, u, p, h, l[m + 13], 4, 681279174),
            h = x(h, a, u, p, l[m + 0], 11, -358537222),
            p = x(p, h, a, u, l[m + 3], 16, -722521979),
            u = x(u, p, h, a, l[m + 6], 23, 76029189),
            a = x(a, u, p, h, l[m + 9], 4, -640364487),
            h = x(h, a, u, p, l[m + 12], 11, -421815835),
            p = x(p, h, a, u, l[m + 15], 16, 530742520),
            u = x(u, p, h, a, l[m + 2], 23, -995338651),
            a = D(a, u, p, h, l[m + 0], 6, -198630844),
            h = D(h, a, u, p, l[m + 7], 10, 1126891415),
            p = D(p, h, a, u, l[m + 14], 15, -1416354905),
            u = D(u, p, h, a, l[m + 5], 21, -57434055),
            a = D(a, u, p, h, l[m + 12], 6, 1700485571),
            h = D(h, a, u, p, l[m + 3], 10, -1894986606),
            p = D(p, h, a, u, l[m + 10], 15, -1051523),
            u = D(u, p, h, a, l[m + 1], 21, -2054922799),
            a = D(a, u, p, h, l[m + 8], 6, 1873313359),
            h = D(h, a, u, p, l[m + 15], 10, -30611744),
            p = D(p, h, a, u, l[m + 6], 15, -1560198380),
            u = D(u, p, h, a, l[m + 13], 21, 1309151649),
            a = D(a, u, p, h, l[m + 4], 6, -145523070),
            h = D(h, a, u, p, l[m + 11], 10, -1120210379),
            p = D(p, h, a, u, l[m + 2], 15, 718787259),
            u = D(u, p, h, a, l[m + 9], 21, -343485551),
            a = a + k >>> 0,
            u = u + S >>> 0,
            p = p + O >>> 0,
            h = h + L >>> 0
        }
        return e.endian([a, u, p, h])
    };
    n._ff = function(r, o, l, c, a, u, p) {
        var h = r + (o & l | ~o & c) + (a >>> 0) + p;
        return (h << u | h >>> 32 - u) + o
    }
    ,
    n._gg = function(r, o, l, c, a, u, p) {
        var h = r + (o & c | l & ~c) + (a >>> 0) + p;
        return (h << u | h >>> 32 - u) + o
    }
    ,
    n._hh = function(r, o, l, c, a, u, p) {
        var h = r + (o ^ l ^ c) + (a >>> 0) + p;
        return (h << u | h >>> 32 - u) + o
    }
    ,
    n._ii = function(r, o, l, c, a, u, p) {
        var h = r + (l ^ (o | ~c)) + (a >>> 0) + p;
        return (h << u | h >>> 32 - u) + o
    }
    ,
    n._blocksize = 16,
    n._digestsize = 16,
    $r.exports = function(r, o) {
        if (r == null)
            throw new Error("Illegal argument " + r);
        var l = e.wordsToBytes(n(r, o));
        return o && o.asBytes ? l : o && o.asString ? s.bytesToString(l) : e.bytesToHex(l)
    }
}
)();
var Wc = $r.exports;
const Xc = Pi(Wc);
var ji, Bs;
function Ge() {
    if (Bs)
        return ji;
    Bs = 1;
    function e(t, i, s, n, r, o) {
        return {
            tag: t,
            key: i,
            attrs: s,
            children: n,
            text: r,
            dom: o,
            domSize: void 0,
            state: void 0,
            events: void 0,
            instance: void 0
        }
    }
    return e.normalize = function(t) {
        return Array.isArray(t) ? e("[", void 0, void 0, e.normalizeChildren(t), void 0, void 0) : t == null || typeof t == "boolean" ? null : typeof t == "object" ? t : e("#", void 0, void 0, String(t), void 0, void 0)
    }
    ,
    e.normalizeChildren = function(t) {
        var i = [];
        if (t.length) {
            for (var s = t[0] != null && t[0].key != null, n = 1; n < t.length; n++)
                if ((t[n] != null && t[n].key != null) !== s)
                    throw new TypeError(s && (t[n] != null || typeof t[n] == "boolean") ? "In fragments, vnodes must either all have keys or none have keys. You may wish to consider using an explicit keyed empty fragment, m.fragment({key: ...}), instead of a hole." : "In fragments, vnodes must either all have keys or none have keys.");
            for (var n = 0; n < t.length; n++)
                i[n] = e.normalize(t[n])
        }
        return i
    }
    ,
    ji = e,
    ji
}
var Gc = Ge()
  , Qr = function() {
    var e = arguments[this], t = this + 1, i;
    if (e == null ? e = {} : (typeof e != "object" || e.tag != null || Array.isArray(e)) && (e = {},
    t = this),
    arguments.length === t + 1)
        i = arguments[t],
        Array.isArray(i) || (i = [i]);
    else
        for (i = []; t < arguments.length; )
            i.push(arguments[t++]);
    return Gc("", e.key, e, i)
}
  , Ci = {}.hasOwnProperty
  , Yc = Ge()
  , $c = Qr
  , pt = Ci
  , Kc = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
  , Zr = {};
function zs(e) {
    for (var t in e)
        if (pt.call(e, t))
            return !1;
    return !0
}
function Jc(e) {
    for (var t, i = "div", s = [], n = {}; t = Kc.exec(e); ) {
        var r = t[1]
          , o = t[2];
        if (r === "" && o !== "")
            i = o;
        else if (r === "#")
            n.id = o;
        else if (r === ".")
            s.push(o);
        else if (t[3][0] === "[") {
            var l = t[6];
            l && (l = l.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")),
            t[4] === "class" ? s.push(l) : n[t[4]] = l === "" ? l : l || !0
        }
    }
    return s.length > 0 && (n.className = s.join(" ")),
    Zr[e] = {
        tag: i,
        attrs: n
    }
}
function Qc(e, t) {
    var i = t.attrs
      , s = pt.call(i, "class")
      , n = s ? i.class : i.className;
    if (t.tag = e.tag,
    t.attrs = {},
    !zs(e.attrs) && !zs(i)) {
        var r = {};
        for (var o in i)
            pt.call(i, o) && (r[o] = i[o]);
        i = r
    }
    for (var o in e.attrs)
        pt.call(e.attrs, o) && o !== "className" && !pt.call(i, o) && (i[o] = e.attrs[o]);
    (n != null || e.attrs.className != null) && (i.className = n != null ? e.attrs.className != null ? String(e.attrs.className) + " " + String(n) : n : e.attrs.className != null ? e.attrs.className : null),
    s && (i.class = null);
    for (var o in i)
        if (pt.call(i, o) && o !== "key") {
            t.attrs = i;
            break
        }
    return t
}
function Zc(e) {
    if (e == null || typeof e != "string" && typeof e != "function" && typeof e.view != "function")
        throw Error("The selector must be either a string or a component.");
    var t = $c.apply(1, arguments);
    return typeof e == "string" && (t.children = Yc.normalizeChildren(t.children),
    e !== "[") ? Qc(Zr[e] || Jc(e), t) : (t.tag = e,
    t)
}
var jr = Zc
  , jc = Ge()
  , eh = function(e) {
    return e == null && (e = ""),
    jc("<", void 0, void 0, e, void 0, void 0)
}
  , th = Ge()
  , ih = Qr
  , nh = function() {
    var e = ih.apply(0, arguments);
    return e.tag = "[",
    e.children = th.normalizeChildren(e.children),
    e
}
  , ts = jr;
ts.trust = eh;
ts.fragment = nh;
var sh = ts, hi = {
    exports: {}
}, en, Hs;
function eo() {
    if (Hs)
        return en;
    Hs = 1;
    var e = function(t) {
        if (!(this instanceof e))
            throw new Error("Promise must be called with 'new'.");
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        var i = this
          , s = []
          , n = []
          , r = a(s, !0)
          , o = a(n, !1)
          , l = i._instance = {
            resolvers: s,
            rejectors: n
        }
          , c = typeof setImmediate == "function" ? setImmediate : setTimeout;
        function a(p, h) {
            return function m(w) {
                var v;
                try {
                    if (h && w != null && (typeof w == "object" || typeof w == "function") && typeof (v = w.then) == "function") {
                        if (w === i)
                            throw new TypeError("Promise can't be resolved with itself.");
                        u(v.bind(w))
                    } else
                        c(function() {
                            !h && p.length === 0 && console.error("Possible unhandled promise rejection:", w);
                            for (var x = 0; x < p.length; x++)
                                p[x](w);
                            s.length = 0,
                            n.length = 0,
                            l.state = h,
                            l.retry = function() {
                                m(w)
                            }
                        })
                } catch (x) {
                    o(x)
                }
            }
        }
        function u(p) {
            var h = 0;
            function m(v) {
                return function(x) {
                    h++ > 0 || v(x)
                }
            }
            var w = m(o);
            try {
                p(m(r), w)
            } catch (v) {
                w(v)
            }
        }
        u(t)
    };
    return e.prototype.then = function(t, i) {
        var s = this
          , n = s._instance;
        function r(a, u, p, h) {
            u.push(function(m) {
                if (typeof a != "function")
                    p(m);
                else
                    try {
                        o(a(m))
                    } catch (w) {
                        l && l(w)
                    }
            }),
            typeof n.retry == "function" && h === n.state && n.retry()
        }
        var o, l, c = new e(function(a, u) {
            o = a,
            l = u
        }
        );
        return r(t, n.resolvers, o, !0),
        r(i, n.rejectors, l, !1),
        c
    }
    ,
    e.prototype.catch = function(t) {
        return this.then(null, t)
    }
    ,
    e.prototype.finally = function(t) {
        return this.then(function(i) {
            return e.resolve(t()).then(function() {
                return i
            })
        }, function(i) {
            return e.resolve(t()).then(function() {
                return e.reject(i)
            })
        })
    }
    ,
    e.resolve = function(t) {
        return t instanceof e ? t : new e(function(i) {
            i(t)
        }
        )
    }
    ,
    e.reject = function(t) {
        return new e(function(i, s) {
            s(t)
        }
        )
    }
    ,
    e.all = function(t) {
        return new e(function(i, s) {
            var n = t.length
              , r = 0
              , o = [];
            if (t.length === 0)
                i([]);
            else
                for (var l = 0; l < t.length; l++)
                    (function(c) {
                        function a(u) {
                            r++,
                            o[c] = u,
                            r === n && i(o)
                        }
                        t[c] != null && (typeof t[c] == "object" || typeof t[c] == "function") && typeof t[c].then == "function" ? t[c].then(a, s) : a(t[c])
                    }
                    )(l)
        }
        )
    }
    ,
    e.race = function(t) {
        return new e(function(i, s) {
            for (var n = 0; n < t.length; n++)
                t[n].then(i, s)
        }
        )
    }
    ,
    en = e,
    en
}
var _t = eo();
typeof window < "u" ? (typeof window.Promise > "u" ? window.Promise = _t : window.Promise.prototype.finally || (window.Promise.prototype.finally = _t.prototype.finally),
hi.exports = window.Promise) : typeof rt < "u" ? (typeof rt.Promise > "u" ? rt.Promise = _t : rt.Promise.prototype.finally || (rt.Promise.prototype.finally = _t.prototype.finally),
hi.exports = rt.Promise) : hi.exports = _t;
var to = hi.exports, tn, Fs;
function rh() {
    if (Fs)
        return tn;
    Fs = 1;
    var e = Ge();
    return tn = function(t) {
        var i = t && t.document, s, n = {
            svg: "http://www.w3.org/2000/svg",
            math: "http://www.w3.org/1998/Math/MathML"
        };
        function r(d) {
            return d.attrs && d.attrs.xmlns || n[d.tag]
        }
        function o(d, f) {
            if (d.state !== f)
                throw new Error("'vnode.state' must not be modified.")
        }
        function l(d) {
            var f = d.state;
            try {
                return this.apply(f, arguments)
            } finally {
                o(d, f)
            }
        }
        function c() {
            try {
                return i.activeElement
            } catch {
                return null
            }
        }
        function a(d, f, g, b, I, A, H) {
            for (var N = g; N < b; N++) {
                var B = f[N];
                B != null && u(d, B, I, H, A)
            }
        }
        function u(d, f, g, b, I) {
            var A = f.tag;
            if (typeof A == "string")
                switch (f.state = {},
                f.attrs != null && Fi(f.attrs, f, g),
                A) {
                case "#":
                    p(d, f, I);
                    break;
                case "<":
                    m(d, f, b, I);
                    break;
                case "[":
                    w(d, f, g, b, I);
                    break;
                default:
                    v(d, f, g, b, I)
                }
            else
                D(d, f, g, b, I)
        }
        function p(d, f, g) {
            f.dom = i.createTextNode(f.children),
            X(d, f.dom, g)
        }
        var h = {
            caption: "table",
            thead: "table",
            tbody: "table",
            tfoot: "table",
            tr: "tbody",
            th: "tr",
            td: "tr",
            colgroup: "table",
            col: "colgroup"
        };
        function m(d, f, g, b) {
            var I = f.children.match(/^\s*?<(\w+)/im) || []
              , A = i.createElement(h[I[1]] || "div");
            g === "http://www.w3.org/2000/svg" ? (A.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + f.children + "</svg>",
            A = A.firstChild) : A.innerHTML = f.children,
            f.dom = A.firstChild,
            f.domSize = A.childNodes.length,
            f.instance = [];
            for (var H = i.createDocumentFragment(), N; N = A.firstChild; )
                f.instance.push(N),
                H.appendChild(N);
            X(d, H, b)
        }
        function w(d, f, g, b, I) {
            var A = i.createDocumentFragment();
            if (f.children != null) {
                var H = f.children;
                a(A, H, 0, H.length, g, null, b)
            }
            f.dom = A.firstChild,
            f.domSize = A.childNodes.length,
            X(d, A, I)
        }
        function v(d, f, g, b, I) {
            var A = f.tag
              , H = f.attrs
              , N = H && H.is;
            b = r(f) || b;
            var B = b ? N ? i.createElementNS(b, A, {
                is: N
            }) : i.createElementNS(b, A) : N ? i.createElement(A, {
                is: N
            }) : i.createElement(A);
            if (f.dom = B,
            H != null && Bi(f, H, b),
            X(d, B, I),
            !G(f) && f.children != null) {
                var Y = f.children;
                a(B, Y, 0, Y.length, g, null, b),
                f.tag === "select" && H != null && Wo(f, H)
            }
        }
        function x(d, f) {
            var g;
            if (typeof d.tag.view == "function") {
                if (d.state = Object.create(d.tag),
                g = d.state.view,
                g.$$reentrantLock$$ != null)
                    return;
                g.$$reentrantLock$$ = !0
            } else {
                if (d.state = void 0,
                g = d.tag,
                g.$$reentrantLock$$ != null)
                    return;
                g.$$reentrantLock$$ = !0,
                d.state = d.tag.prototype != null && typeof d.tag.prototype.view == "function" ? new d.tag(d) : d.tag(d)
            }
            if (Fi(d.state, d, f),
            d.attrs != null && Fi(d.attrs, d, f),
            d.instance = e.normalize(l.call(d.state.view, d)),
            d.instance === d)
                throw Error("A view cannot return the vnode it received as argument");
            g.$$reentrantLock$$ = null
        }
        function D(d, f, g, b, I) {
            x(f, g),
            f.instance != null ? (u(d, f.instance, g, b, I),
            f.dom = f.instance.dom,
            f.domSize = f.dom != null ? f.instance.domSize : 0) : f.domSize = 0
        }
        function k(d, f, g, b, I, A) {
            if (!(f === g || f == null && g == null))
                if (f == null || f.length === 0)
                    a(d, g, 0, g.length, b, I, A);
                else if (g == null || g.length === 0)
                    te(d, f, 0, f.length);
                else {
                    var H = f[0] != null && f[0].key != null
                      , N = g[0] != null && g[0].key != null
                      , B = 0
                      , Y = 0;
                    if (!H)
                        for (; Y < f.length && f[Y] == null; )
                            Y++;
                    if (!N)
                        for (; B < g.length && g[B] == null; )
                            B++;
                    if (H !== N)
                        te(d, f, Y, f.length),
                        a(d, g, B, g.length, b, I, A);
                    else if (N) {
                        for (var ve = f.length - 1, fe = g.length - 1, ii, xe, oe, ge, Z, Ui; ve >= Y && fe >= B && (ge = f[ve],
                        Z = g[fe],
                        ge.key === Z.key); )
                            ge !== Z && S(d, ge, Z, b, I, A),
                            Z.dom != null && (I = Z.dom),
                            ve--,
                            fe--;
                        for (; ve >= Y && fe >= B && (xe = f[Y],
                        oe = g[B],
                        xe.key === oe.key); )
                            Y++,
                            B++,
                            xe !== oe && S(d, xe, oe, b, $(f, Y, I), A);
                        for (; ve >= Y && fe >= B && !(B === fe || xe.key !== Z.key || ge.key !== oe.key); )
                            Ui = $(f, Y, I),
                            V(d, ge, Ui),
                            ge !== oe && S(d, ge, oe, b, Ui, A),
                            ++B <= --fe && V(d, xe, I),
                            xe !== Z && S(d, xe, Z, b, I, A),
                            Z.dom != null && (I = Z.dom),
                            Y++,
                            ve--,
                            ge = f[ve],
                            Z = g[fe],
                            xe = f[Y],
                            oe = g[B];
                        for (; ve >= Y && fe >= B && ge.key === Z.key; )
                            ge !== Z && S(d, ge, Z, b, I, A),
                            Z.dom != null && (I = Z.dom),
                            ve--,
                            fe--,
                            ge = f[ve],
                            Z = g[fe];
                        if (B > fe)
                            te(d, f, Y, ve + 1);
                        else if (Y > ve)
                            a(d, g, B, fe + 1, b, I, A);
                        else {
                            var Jo = I, Ms = fe - B + 1, At = new Array(Ms), Ni = 0, ne = 0, qi = 2147483647, Wi = 0, ii, Xi;
                            for (ne = 0; ne < Ms; ne++)
                                At[ne] = -1;
                            for (ne = fe; ne >= B; ne--) {
                                ii == null && (ii = W(f, Y, ve + 1)),
                                Z = g[ne];
                                var st = ii[Z.key];
                                st != null && (qi = st < qi ? st : -1,
                                At[ne - B] = st,
                                ge = f[st],
                                f[st] = null,
                                ge !== Z && S(d, ge, Z, b, I, A),
                                Z.dom != null && (I = Z.dom),
                                Wi++)
                            }
                            if (I = Jo,
                            Wi !== ve - Y + 1 && te(d, f, Y, ve + 1),
                            Wi === 0)
                                a(d, g, B, fe + 1, b, I, A);
                            else if (qi === -1)
                                for (Xi = _(At),
                                Ni = Xi.length - 1,
                                ne = fe; ne >= B; ne--)
                                    oe = g[ne],
                                    At[ne - B] === -1 ? u(d, oe, b, A, I) : Xi[Ni] === ne - B ? Ni-- : V(d, oe, I),
                                    oe.dom != null && (I = g[ne].dom);
                            else
                                for (ne = fe; ne >= B; ne--)
                                    oe = g[ne],
                                    At[ne - B] === -1 && u(d, oe, b, A, I),
                                    oe.dom != null && (I = g[ne].dom)
                        }
                    } else {
                        var Li = f.length < g.length ? f.length : g.length;
                        for (B = B < Y ? B : Y; B < Li; B++)
                            xe = f[B],
                            oe = g[B],
                            !(xe === oe || xe == null && oe == null) && (xe == null ? u(d, oe, b, A, $(f, B + 1, I)) : oe == null ? ie(d, xe) : S(d, xe, oe, b, $(f, B + 1, I), A));
                        f.length > Li && te(d, f, B, f.length),
                        g.length > Li && a(d, g, B, g.length, b, I, A)
                    }
                }
        }
        function S(d, f, g, b, I, A) {
            var H = f.tag
              , N = g.tag;
            if (H === N) {
                if (g.state = f.state,
                g.events = f.events,
                Ko(g, f))
                    return;
                if (typeof H == "string")
                    switch (g.attrs != null && Vi(g.attrs, g, b),
                    H) {
                    case "#":
                        O(f, g);
                        break;
                    case "<":
                        L(d, f, g, A, I);
                        break;
                    case "[":
                        U(d, f, g, b, I, A);
                        break;
                    default:
                        q(f, g, b, A)
                    }
                else
                    P(d, f, g, b, I, A)
            } else
                ie(d, f),
                u(d, g, b, A, I)
        }
        function O(d, f) {
            d.children.toString() !== f.children.toString() && (d.dom.nodeValue = f.children),
            f.dom = d.dom
        }
        function L(d, f, g, b, I) {
            f.children !== g.children ? (K(d, f),
            m(d, g, b, I)) : (g.dom = f.dom,
            g.domSize = f.domSize,
            g.instance = f.instance)
        }
        function U(d, f, g, b, I, A) {
            k(d, f.children, g.children, b, I, A);
            var H = 0
              , N = g.children;
            if (g.dom = null,
            N != null) {
                for (var B = 0; B < N.length; B++) {
                    var Y = N[B];
                    Y != null && Y.dom != null && (g.dom == null && (g.dom = Y.dom),
                    H += Y.domSize || 1)
                }
                H !== 1 && (g.domSize = H)
            }
        }
        function q(d, f, g, b) {
            var I = f.dom = d.dom;
            b = r(f) || b,
            f.tag === "textarea" && f.attrs == null && (f.attrs = {}),
            Xo(f, d.attrs, f.attrs, b),
            G(f) || k(I, d.children, f.children, g, null, b)
        }
        function P(d, f, g, b, I, A) {
            if (g.instance = e.normalize(l.call(g.state.view, g)),
            g.instance === g)
                throw Error("A view cannot return the vnode it received as argument");
            Vi(g.state, g, b),
            g.attrs != null && Vi(g.attrs, g, b),
            g.instance != null ? (f.instance == null ? u(d, g.instance, b, A, I) : S(d, f.instance, g.instance, b, I, A),
            g.dom = g.instance.dom,
            g.domSize = g.instance.domSize) : f.instance != null ? (ie(d, f.instance),
            g.dom = void 0,
            g.domSize = 0) : (g.dom = f.dom,
            g.domSize = f.domSize)
        }
        function W(d, f, g) {
            for (var b = Object.create(null); f < g; f++) {
                var I = d[f];
                if (I != null) {
                    var A = I.key;
                    A != null && (b[A] = f)
                }
            }
            return b
        }
        var F = [];
        function _(d) {
            for (var f = [0], g = 0, b = 0, I = 0, A = F.length = d.length, I = 0; I < A; I++)
                F[I] = d[I];
            for (var I = 0; I < A; ++I)
                if (d[I] !== -1) {
                    var H = f[f.length - 1];
                    if (d[H] < d[I]) {
                        F[I] = H,
                        f.push(I);
                        continue
                    }
                    for (g = 0,
                    b = f.length - 1; g < b; ) {
                        var N = (g >>> 1) + (b >>> 1) + (g & b & 1);
                        d[f[N]] < d[I] ? g = N + 1 : b = N
                    }
                    d[I] < d[f[g]] && (g > 0 && (F[I] = f[g - 1]),
                    f[g] = I)
                }
            for (g = f.length,
            b = f[g - 1]; g-- > 0; )
                f[g] = b,
                b = F[b];
            return F.length = 0,
            f
        }
        function $(d, f, g) {
            for (; f < d.length; f++)
                if (d[f] != null && d[f].dom != null)
                    return d[f].dom;
            return g
        }
        function V(d, f, g) {
            var b = i.createDocumentFragment();
            z(d, b, f),
            X(d, b, g)
        }
        function z(d, f, g) {
            for (; g.dom != null && g.dom.parentNode === d; ) {
                if (typeof g.tag != "string") {
                    if (g = g.instance,
                    g != null)
                        continue
                } else if (g.tag === "<")
                    for (var b = 0; b < g.instance.length; b++)
                        f.appendChild(g.instance[b]);
                else if (g.tag !== "[")
                    f.appendChild(g.dom);
                else if (g.children.length === 1) {
                    if (g = g.children[0],
                    g != null)
                        continue
                } else
                    for (var b = 0; b < g.children.length; b++) {
                        var I = g.children[b];
                        I != null && z(d, f, I)
                    }
                break
            }
        }
        function X(d, f, g) {
            g != null ? d.insertBefore(f, g) : d.appendChild(f)
        }
        function G(d) {
            if (d.attrs == null || d.attrs.contenteditable == null && d.attrs.contentEditable == null)
                return !1;
            var f = d.children;
            if (f != null && f.length === 1 && f[0].tag === "<") {
                var g = f[0].children;
                d.dom.innerHTML !== g && (d.dom.innerHTML = g)
            } else if (f != null && f.length !== 0)
                throw new Error("Child node of a contenteditable must be trusted.");
            return !0
        }
        function te(d, f, g, b) {
            for (var I = g; I < b; I++) {
                var A = f[I];
                A != null && ie(d, A)
            }
        }
        function ie(d, f) {
            var g = 0, b = f.state, I, A;
            if (typeof f.tag != "string" && typeof f.state.onbeforeremove == "function") {
                var H = l.call(f.state.onbeforeremove, f);
                H != null && typeof H.then == "function" && (g = 1,
                I = H)
            }
            if (f.attrs && typeof f.attrs.onbeforeremove == "function") {
                var H = l.call(f.attrs.onbeforeremove, f);
                H != null && typeof H.then == "function" && (g |= 2,
                A = H)
            }
            if (o(f, b),
            !g)
                nt(f),
                ke(d, f);
            else {
                if (I != null) {
                    var N = function() {
                        g & 1 && (g &= 2,
                        g || B())
                    };
                    I.then(N, N)
                }
                if (A != null) {
                    var N = function() {
                        g & 2 && (g &= 1,
                        g || B())
                    };
                    A.then(N, N)
                }
            }
            function B() {
                o(f, b),
                nt(f),
                ke(d, f)
            }
        }
        function K(d, f) {
            for (var g = 0; g < f.instance.length; g++)
                d.removeChild(f.instance[g])
        }
        function ke(d, f) {
            for (; f.dom != null && f.dom.parentNode === d; ) {
                if (typeof f.tag != "string") {
                    if (f = f.instance,
                    f != null)
                        continue
                } else if (f.tag === "<")
                    K(d, f);
                else {
                    if (f.tag !== "[" && (d.removeChild(f.dom),
                    !Array.isArray(f.children)))
                        break;
                    if (f.children.length === 1) {
                        if (f = f.children[0],
                        f != null)
                            continue
                    } else
                        for (var g = 0; g < f.children.length; g++) {
                            var b = f.children[g];
                            b != null && ke(d, b)
                        }
                }
                break
            }
        }
        function nt(d) {
            if (typeof d.tag != "string" && typeof d.state.onremove == "function" && l.call(d.state.onremove, d),
            d.attrs && typeof d.attrs.onremove == "function" && l.call(d.attrs.onremove, d),
            typeof d.tag != "string")
                d.instance != null && nt(d.instance);
            else {
                var f = d.children;
                if (Array.isArray(f))
                    for (var g = 0; g < f.length; g++) {
                        var b = f[g];
                        b != null && nt(b)
                    }
            }
        }
        function Bi(d, f, g) {
            d.tag === "input" && f.type != null && d.dom.setAttribute("type", f.type);
            var b = f != null && d.tag === "input" && f.type === "file";
            for (var I in f)
                Le(d, I, null, f[I], g, b)
        }
        function Le(d, f, g, b, I, A) {
            if (!(f === "key" || f === "is" || b == null || bs(f) || g === b && !Go(d, f) && typeof b != "object" || f === "type" && d.tag === "input")) {
                if (f[0] === "o" && f[1] === "n")
                    return Is(d, f, b);
                if (f.slice(0, 6) === "xlink:")
                    d.dom.setAttributeNS("http://www.w3.org/1999/xlink", f.slice(6), b);
                else if (f === "style")
                    Ts(d.dom, g, b);
                else if (Ss(d, f, I)) {
                    if (f === "value") {
                        if ((d.tag === "input" || d.tag === "textarea") && d.dom.value === "" + b && (A || d.dom === c()) || d.tag === "select" && g !== null && d.dom.value === "" + b || d.tag === "option" && g !== null && d.dom.value === "" + b)
                            return;
                        if (A && "" + b != "") {
                            console.error("`value` is read-only on file inputs!");
                            return
                        }
                    }
                    d.dom[f] = b
                } else
                    typeof b == "boolean" ? b ? d.dom.setAttribute(f, "") : d.dom.removeAttribute(f) : d.dom.setAttribute(f === "className" ? "class" : f, b)
            }
        }
        function Ye(d, f, g, b) {
            if (!(f === "key" || f === "is" || g == null || bs(f)))
                if (f[0] === "o" && f[1] === "n")
                    Is(d, f, void 0);
                else if (f === "style")
                    Ts(d.dom, g, null);
                else if (Ss(d, f, b) && f !== "className" && f !== "title" && !(f === "value" && (d.tag === "option" || d.tag === "select" && d.dom.selectedIndex === -1 && d.dom === c())) && !(d.tag === "input" && f === "type"))
                    d.dom[f] = null;
                else {
                    var I = f.indexOf(":");
                    I !== -1 && (f = f.slice(I + 1)),
                    g !== !1 && d.dom.removeAttribute(f === "className" ? "class" : f)
                }
        }
        function Wo(d, f) {
            if ("value"in f)
                if (f.value === null)
                    d.dom.selectedIndex !== -1 && (d.dom.value = null);
                else {
                    var g = "" + f.value;
                    (d.dom.value !== g || d.dom.selectedIndex === -1) && (d.dom.value = g)
                }
            "selectedIndex"in f && Le(d, "selectedIndex", null, f.selectedIndex, void 0)
        }
        function Xo(d, f, g, b) {
            if (f && f === g && console.warn("Don't reuse attrs object, use new object for every redraw, this will throw in next major"),
            g != null) {
                d.tag === "input" && g.type != null && d.dom.setAttribute("type", g.type);
                var I = d.tag === "input" && g.type === "file";
                for (var A in g)
                    Le(d, A, f && f[A], g[A], b, I)
            }
            var H;
            if (f != null)
                for (var A in f)
                    (H = f[A]) != null && (g == null || g[A] == null) && Ye(d, A, H, b)
        }
        function Go(d, f) {
            return f === "value" || f === "checked" || f === "selectedIndex" || f === "selected" && d.dom === c() || d.tag === "option" && d.dom.parentNode === i.activeElement
        }
        function bs(d) {
            return d === "oninit" || d === "oncreate" || d === "onupdate" || d === "onremove" || d === "onbeforeremove" || d === "onbeforeupdate"
        }
        function Ss(d, f, g) {
            return g === void 0 && (d.tag.indexOf("-") > -1 || d.attrs != null && d.attrs.is || f !== "href" && f !== "list" && f !== "form" && f !== "width" && f !== "height") && f in d.dom
        }
        var Yo = /[A-Z]/g;
        function $o(d) {
            return "-" + d.toLowerCase()
        }
        function zi(d) {
            return d[0] === "-" && d[1] === "-" ? d : d === "cssFloat" ? "float" : d.replace(Yo, $o)
        }
        function Ts(d, f, g) {
            if (f !== g)
                if (g == null)
                    d.style.cssText = "";
                else if (typeof g != "object")
                    d.style.cssText = g;
                else if (f == null || typeof f != "object") {
                    d.style.cssText = "";
                    for (var b in g) {
                        var I = g[b];
                        I != null && d.style.setProperty(zi(b), String(I))
                    }
                } else {
                    for (var b in g) {
                        var I = g[b];
                        I != null && (I = String(I)) !== String(f[b]) && d.style.setProperty(zi(b), I)
                    }
                    for (var b in f)
                        f[b] != null && g[b] == null && d.style.removeProperty(zi(b))
                }
        }
        function Hi() {
            this._ = s
        }
        Hi.prototype = Object.create(null),
        Hi.prototype.handleEvent = function(d) {
            var f = this["on" + d.type], g;
            typeof f == "function" ? g = f.call(d.currentTarget, d) : typeof f.handleEvent == "function" && f.handleEvent(d),
            this._ && d.redraw !== !1 && (0,
            this._)(),
            g === !1 && (d.preventDefault(),
            d.stopPropagation())
        }
        ;
        function Is(d, f, g) {
            if (d.events != null) {
                if (d.events._ = s,
                d.events[f] === g)
                    return;
                g != null && (typeof g == "function" || typeof g == "object") ? (d.events[f] == null && d.dom.addEventListener(f.slice(2), d.events, !1),
                d.events[f] = g) : (d.events[f] != null && d.dom.removeEventListener(f.slice(2), d.events, !1),
                d.events[f] = void 0)
            } else
                g != null && (typeof g == "function" || typeof g == "object") && (d.events = new Hi,
                d.dom.addEventListener(f.slice(2), d.events, !1),
                d.events[f] = g)
        }
        function Fi(d, f, g) {
            typeof d.oninit == "function" && l.call(d.oninit, f),
            typeof d.oncreate == "function" && g.push(l.bind(d.oncreate, f))
        }
        function Vi(d, f, g) {
            typeof d.onupdate == "function" && g.push(l.bind(d.onupdate, f))
        }
        function Ko(d, f) {
            do {
                if (d.attrs != null && typeof d.attrs.onbeforeupdate == "function") {
                    var g = l.call(d.attrs.onbeforeupdate, d, f);
                    if (g !== void 0 && !g)
                        break
                }
                if (typeof d.tag != "string" && typeof d.state.onbeforeupdate == "function") {
                    var g = l.call(d.state.onbeforeupdate, d, f);
                    if (g !== void 0 && !g)
                        break
                }
                return !1
            } while (!1);
            return d.dom = f.dom,
            d.domSize = f.domSize,
            d.instance = f.instance,
            d.attrs = f.attrs,
            d.children = f.children,
            d.text = f.text,
            !0
        }
        var Ct;
        return function(d, f, g) {
            if (!d)
                throw new TypeError("DOM element being rendered to does not exist.");
            if (Ct != null && d.contains(Ct))
                throw new TypeError("Node is currently being rendered to and thus is locked.");
            var b = s
              , I = Ct
              , A = []
              , H = c()
              , N = d.namespaceURI;
            Ct = d,
            s = typeof g == "function" ? g : void 0;
            try {
                d.vnodes == null && (d.textContent = ""),
                f = e.normalizeChildren(Array.isArray(f) ? f : [f]),
                k(d, d.vnodes, f, A, null, N === "http://www.w3.org/1999/xhtml" ? void 0 : N),
                d.vnodes = f,
                H != null && c() !== H && typeof H.focus == "function" && H.focus();
                for (var B = 0; B < A.length; B++)
                    A[B]()
            } finally {
                s = b,
                Ct = I
            }
        }
    }
    ,
    tn
}
var nn, Vs;
function io() {
    return Vs || (Vs = 1,
    nn = rh()(typeof window < "u" ? window : null)),
    nn
}
var Ls = Ge(), oh = function(e, t, i) {
    var s = []
      , n = !1
      , r = -1;
    function o() {
        for (r = 0; r < s.length; r += 2)
            try {
                e(s[r], Ls(s[r + 1]), l)
            } catch (a) {
                i.error(a)
            }
        r = -1
    }
    function l() {
        n || (n = !0,
        t(function() {
            n = !1,
            o()
        }))
    }
    l.sync = o;
    function c(a, u) {
        if (u != null && u.view == null && typeof u != "function")
            throw new TypeError("m.mount expects a component, not a vnode.");
        var p = s.indexOf(a);
        p >= 0 && (s.splice(p, 2),
        p <= r && (r -= 2),
        e(a, [])),
        u != null && (s.push(a, u),
        e(a, Ls(u), l))
    }
    return {
        mount: c,
        redraw: l
    }
}, ah = io(), is = oh(ah, typeof requestAnimationFrame < "u" ? requestAnimationFrame : null, typeof console < "u" ? console : null), sn, Us;
function no() {
    return Us || (Us = 1,
    sn = function(e) {
        if (Object.prototype.toString.call(e) !== "[object Object]")
            return "";
        var t = [];
        for (var i in e)
            s(i, e[i]);
        return t.join("&");
        function s(n, r) {
            if (Array.isArray(r))
                for (var o = 0; o < r.length; o++)
                    s(n + "[" + o + "]", r[o]);
            else if (Object.prototype.toString.call(r) === "[object Object]")
                for (var o in r)
                    s(n + "[" + o + "]", r[o]);
            else
                t.push(encodeURIComponent(n) + (r != null && r !== "" ? "=" + encodeURIComponent(r) : ""))
        }
    }
    ),
    sn
}
var rn, Ns;
function so() {
    if (Ns)
        return rn;
    Ns = 1;
    var e = Ci;
    return rn = Object.assign || function(t, i) {
        for (var s in i)
            e.call(i, s) && (t[s] = i[s])
    }
    ,
    rn
}
var on, qs;
function ns() {
    if (qs)
        return on;
    qs = 1;
    var e = no()
      , t = so();
    return on = function(i, s) {
        if (/:([^\/\.-]+)(\.{3})?:/.test(i))
            throw new SyntaxError("Template parameter names must be separated by either a '/', '-', or '.'.");
        if (s == null)
            return i;
        var n = i.indexOf("?")
          , r = i.indexOf("#")
          , o = r < 0 ? i.length : r
          , l = n < 0 ? o : n
          , c = i.slice(0, l)
          , a = {};
        t(a, s);
        var u = c.replace(/:([^\/\.-]+)(\.{3})?/g, function(D, k, S) {
            return delete a[k],
            s[k] == null ? D : S ? s[k] : encodeURIComponent(String(s[k]))
        })
          , p = u.indexOf("?")
          , h = u.indexOf("#")
          , m = h < 0 ? u.length : h
          , w = p < 0 ? m : p
          , v = u.slice(0, w);
        n >= 0 && (v += i.slice(n, o)),
        p >= 0 && (v += (n < 0 ? "?" : "&") + u.slice(p, m));
        var x = e(a);
        return x && (v += (n < 0 && p < 0 ? "?" : "&") + x),
        r >= 0 && (v += i.slice(r)),
        h >= 0 && (v += (r < 0 ? "" : "&") + u.slice(h)),
        v
    }
    ,
    on
}
var lh = ns(), Ws = Ci, ch = function(e, t, i) {
    var s = 0;
    function n(l) {
        return new t(l)
    }
    n.prototype = t.prototype,
    n.__proto__ = t;
    function r(l) {
        return function(c, a) {
            typeof c != "string" ? (a = c,
            c = c.url) : a == null && (a = {});
            var u = new t(function(w, v) {
                l(lh(c, a.params), a, function(x) {
                    if (typeof a.type == "function")
                        if (Array.isArray(x))
                            for (var D = 0; D < x.length; D++)
                                x[D] = new a.type(x[D]);
                        else
                            x = new a.type(x);
                    w(x)
                }, v)
            }
            );
            if (a.background === !0)
                return u;
            var p = 0;
            function h() {
                --p === 0 && typeof i == "function" && i()
            }
            return m(u);
            function m(w) {
                var v = w.then;
                return w.constructor = n,
                w.then = function() {
                    p++;
                    var x = v.apply(w, arguments);
                    return x.then(h, function(D) {
                        if (h(),
                        p === 0)
                            throw D
                    }),
                    m(x)
                }
                ,
                w
            }
        }
    }
    function o(l, c) {
        for (var a in l.headers)
            if (Ws.call(l.headers, a) && a.toLowerCase() === c)
                return !0;
        return !1
    }
    return {
        request: r(function(l, c, a, u) {
            var p = c.method != null ? c.method.toUpperCase() : "GET", h = c.body, m = (c.serialize == null || c.serialize === JSON.serialize) && !(h instanceof e.FormData || h instanceof e.URLSearchParams), w = c.responseType || (typeof c.extract == "function" ? "" : "json"), v = new e.XMLHttpRequest, x = !1, D = !1, k = v, S, O = v.abort;
            v.abort = function() {
                x = !0,
                O.call(this)
            }
            ,
            v.open(p, l, c.async !== !1, typeof c.user == "string" ? c.user : void 0, typeof c.password == "string" ? c.password : void 0),
            m && h != null && !o(c, "content-type") && v.setRequestHeader("Content-Type", "application/json; charset=utf-8"),
            typeof c.deserialize != "function" && !o(c, "accept") && v.setRequestHeader("Accept", "application/json, text/*"),
            c.withCredentials && (v.withCredentials = c.withCredentials),
            c.timeout && (v.timeout = c.timeout),
            v.responseType = w;
            for (var L in c.headers)
                Ws.call(c.headers, L) && v.setRequestHeader(L, c.headers[L]);
            v.onreadystatechange = function(U) {
                if (!x && U.target.readyState === 4)
                    try {
                        var q = U.target.status >= 200 && U.target.status < 300 || U.target.status === 304 || /^file:\/\//i.test(l), P = U.target.response, W;
                        if (w === "json") {
                            if (!U.target.responseType && typeof c.extract != "function")
                                try {
                                    P = JSON.parse(U.target.responseText)
                                } catch {
                                    P = null
                                }
                        } else
                            (!w || w === "text") && P == null && (P = U.target.responseText);
                        if (typeof c.extract == "function" ? (P = c.extract(U.target, c),
                        q = !0) : typeof c.deserialize == "function" && (P = c.deserialize(P)),
                        q)
                            a(P);
                        else {
                            var F = function() {
                                try {
                                    W = U.target.responseText
                                } catch {
                                    W = P
                                }
                                var _ = new Error(W);
                                _.code = U.target.status,
                                _.response = P,
                                u(_)
                            };
                            v.status === 0 ? setTimeout(function() {
                                D || F()
                            }) : F()
                        }
                    } catch (_) {
                        u(_)
                    }
            }
            ,
            v.ontimeout = function(U) {
                D = !0;
                var q = new Error("Request timed out");
                q.code = U.target.status,
                u(q)
            }
            ,
            typeof c.config == "function" && (v = c.config(v, c, l) || v,
            v !== k && (S = v.abort,
            v.abort = function() {
                x = !0,
                S.call(this)
            }
            )),
            h == null ? v.send() : typeof c.serialize == "function" ? v.send(c.serialize(h)) : h instanceof e.FormData || h instanceof e.URLSearchParams ? v.send(h) : v.send(JSON.stringify(h))
        }),
        jsonp: r(function(l, c, a, u) {
            var p = c.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + s++
              , h = e.document.createElement("script");
            e[p] = function(m) {
                delete e[p],
                h.parentNode.removeChild(h),
                a(m)
            }
            ,
            h.onerror = function() {
                delete e[p],
                h.parentNode.removeChild(h),
                u(new Error("JSONP request failed"))
            }
            ,
            h.src = l + (l.indexOf("?") < 0 ? "?" : "&") + encodeURIComponent(c.callbackKey || "callback") + "=" + encodeURIComponent(p),
            e.document.documentElement.appendChild(h)
        })
    }
}, hh = to, fh = is, uh = ch(typeof window < "u" ? window : null, hh, fh.redraw), an, Xs;
function ro() {
    if (Xs)
        return an;
    Xs = 1;
    function e(t) {
        try {
            return decodeURIComponent(t)
        } catch {
            return t
        }
    }
    return an = function(t) {
        if (t === "" || t == null)
            return {};
        t.charAt(0) === "?" && (t = t.slice(1));
        for (var i = t.split("&"), s = {}, n = {}, r = 0; r < i.length; r++) {
            var o = i[r].split("=")
              , l = e(o[0])
              , c = o.length === 2 ? e(o[1]) : "";
            c === "true" ? c = !0 : c === "false" && (c = !1);
            var a = l.split(/\]\[?|\[/)
              , u = n;
            l.indexOf("[") > -1 && a.pop();
            for (var p = 0; p < a.length; p++) {
                var h = a[p]
                  , m = a[p + 1]
                  , w = m == "" || !isNaN(parseInt(m, 10));
                if (h === "") {
                    var l = a.slice(0, p).join();
                    s[l] == null && (s[l] = Array.isArray(u) ? u.length : 0),
                    h = s[l]++
                } else if (h === "__proto__")
                    break;
                if (p === a.length - 1)
                    u[h] = c;
                else {
                    var v = Object.getOwnPropertyDescriptor(u, h);
                    v != null && (v = v.value),
                    v == null && (u[h] = v = w ? [] : {}),
                    u = v
                }
            }
        }
        return n
    }
    ,
    an
}
var ln, Gs;
function ss() {
    if (Gs)
        return ln;
    Gs = 1;
    var e = ro();
    return ln = function(t) {
        var i = t.indexOf("?")
          , s = t.indexOf("#")
          , n = s < 0 ? t.length : s
          , r = i < 0 ? n : i
          , o = t.slice(0, r).replace(/\/{2,}/g, "/");
        return o ? (o[0] !== "/" && (o = "/" + o),
        o.length > 1 && o[o.length - 1] === "/" && (o = o.slice(0, -1))) : o = "/",
        {
            path: o,
            params: i < 0 ? {} : e(t.slice(i + 1, n))
        }
    }
    ,
    ln
}
var cn, Ys;
function dh() {
    if (Ys)
        return cn;
    Ys = 1;
    var e = ss();
    return cn = function(t) {
        var i = e(t)
          , s = Object.keys(i.params)
          , n = []
          , r = new RegExp("^" + i.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(o, l, c) {
            return l == null ? "\\" + o : (n.push({
                k: l,
                r: c === "..."
            }),
            c === "..." ? "(.*)" : c === "." ? "([^/]+)\\." : "([^/]+)" + (c || ""))
        }) + "$");
        return function(o) {
            for (var l = 0; l < s.length; l++)
                if (i.params[s[l]] !== o.params[s[l]])
                    return !1;
            if (!n.length)
                return r.test(o.path);
            var c = r.exec(o.path);
            if (c == null)
                return !1;
            for (var l = 0; l < n.length; l++)
                o.params[n[l].k] = n[l].r ? c[l + 1] : decodeURIComponent(c[l + 1]);
            return !0
        }
    }
    ,
    cn
}
var hn, $s;
function oo() {
    if ($s)
        return hn;
    $s = 1;
    var e = Ci
      , t = new RegExp("^(?:key|oninit|oncreate|onbeforeupdate|onupdate|onbeforeremove|onremove)$");
    return hn = function(i, s) {
        var n = {};
        if (s != null)
            for (var r in i)
                e.call(i, r) && !t.test(r) && s.indexOf(r) < 0 && (n[r] = i[r]);
        else
            for (var r in i)
                e.call(i, r) && !t.test(r) && (n[r] = i[r]);
        return n
    }
    ,
    hn
}
var fn, Ks;
function ph() {
    if (Ks)
        return fn;
    Ks = 1;
    var e = Ge()
      , t = jr
      , i = to
      , s = ns()
      , n = ss()
      , r = dh()
      , o = so()
      , l = oo()
      , c = {};
    function a(u) {
        try {
            return decodeURIComponent(u)
        } catch {
            return u
        }
    }
    return fn = function(u, p) {
        var h = u == null ? null : typeof u.setImmediate == "function" ? u.setImmediate : u.setTimeout, m = i.resolve(), w = !1, v = !1, x = 0, D, k, S = c, O, L, U, q, P = {
            onbeforeupdate: function() {
                return x = x ? 2 : 1,
                !(!x || c === S)
            },
            onremove: function() {
                u.removeEventListener("popstate", _, !1),
                u.removeEventListener("hashchange", F, !1)
            },
            view: function() {
                if (!(!x || c === S)) {
                    var z = [e(O, L.key, L)];
                    return S && (z = S.render(z[0])),
                    z
                }
            }
        }, W = V.SKIP = {};
        function F() {
            w = !1;
            var z = u.location.hash;
            V.prefix[0] !== "#" && (z = u.location.search + z,
            V.prefix[0] !== "?" && (z = u.location.pathname + z,
            z[0] !== "/" && (z = "/" + z)));
            var X = z.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, a).slice(V.prefix.length)
              , G = n(X);
            o(G.params, u.history.state);
            function te(K) {
                console.error(K),
                $(k, null, {
                    replace: !0
                })
            }
            ie(0);
            function ie(K) {
                for (; K < D.length; K++)
                    if (D[K].check(G)) {
                        var ke = D[K].component
                          , nt = D[K].route
                          , Bi = ke
                          , Le = q = function(Ye) {
                            if (Le === q) {
                                if (Ye === W)
                                    return ie(K + 1);
                                O = Ye != null && (typeof Ye.view == "function" || typeof Ye == "function") ? Ye : "div",
                                L = G.params,
                                U = X,
                                q = null,
                                S = ke.render ? ke : null,
                                x === 2 ? p.redraw() : (x = 2,
                                p.redraw.sync())
                            }
                        }
                        ;
                        ke.view || typeof ke == "function" ? (ke = {},
                        Le(Bi)) : ke.onmatch ? m.then(function() {
                            return ke.onmatch(G.params, X, nt)
                        }).then(Le, X === k ? null : te) : Le("div");
                        return
                    }
                if (X === k)
                    throw new Error("Could not resolve default route " + k + ".");
                $(k, null, {
                    replace: !0
                })
            }
        }
        function _() {
            w || (w = !0,
            h(F))
        }
        function $(z, X, G) {
            if (z = s(z, X),
            v) {
                _();
                var te = G ? G.state : null
                  , ie = G ? G.title : null;
                G && G.replace ? u.history.replaceState(te, ie, V.prefix + z) : u.history.pushState(te, ie, V.prefix + z)
            } else
                u.location.href = V.prefix + z
        }
        function V(z, X, G) {
            if (!z)
                throw new TypeError("DOM element being rendered to does not exist.");
            if (D = Object.keys(G).map(function(ie) {
                if (ie[0] !== "/")
                    throw new SyntaxError("Routes must start with a '/'.");
                if (/:([^\/\.-]+)(\.{3})?:/.test(ie))
                    throw new SyntaxError("Route parameter names must be separated with either '/', '.', or '-'.");
                return {
                    route: ie,
                    component: G[ie],
                    check: r(ie)
                }
            }),
            k = X,
            X != null) {
                var te = n(X);
                if (!D.some(function(ie) {
                    return ie.check(te)
                }))
                    throw new ReferenceError("Default route doesn't match any known routes.")
            }
            typeof u.history.pushState == "function" ? u.addEventListener("popstate", _, !1) : V.prefix[0] === "#" && u.addEventListener("hashchange", F, !1),
            v = !0,
            p.mount(z, P),
            F()
        }
        return V.set = function(z, X, G) {
            q != null && (G = G || {},
            G.replace = !0),
            q = null,
            $(z, X, G)
        }
        ,
        V.get = function() {
            return U
        }
        ,
        V.prefix = "#!",
        V.Link = {
            view: function(z) {
                var X = t(z.attrs.selector || "a", l(z.attrs, ["options", "params", "selector", "onclick"]), z.children), G, te, ie;
                return (X.attrs.disabled = !!X.attrs.disabled) ? (X.attrs.href = null,
                X.attrs["aria-disabled"] = "true") : (G = z.attrs.options,
                te = z.attrs.onclick,
                ie = s(X.attrs.href, z.attrs.params),
                X.attrs.href = V.prefix + ie,
                X.attrs.onclick = function(K) {
                    var ke;
                    typeof te == "function" ? ke = te.call(K.currentTarget, K) : te == null || typeof te != "object" || typeof te.handleEvent == "function" && te.handleEvent(K),
                    ke !== !1 && !K.defaultPrevented && (K.button === 0 || K.which === 0 || K.which === 1) && (!K.currentTarget.target || K.currentTarget.target === "_self") && !K.ctrlKey && !K.metaKey && !K.shiftKey && !K.altKey && (K.preventDefault(),
                    K.redraw = !1,
                    V.set(ie, null, G))
                }
                ),
                X
            }
        },
        V.param = function(z) {
            return L && z != null ? L[z] : L
        }
        ,
        V
    }
    ,
    fn
}
var un, Js;
function mh() {
    if (Js)
        return un;
    Js = 1;
    var e = is;
    return un = ph()(typeof window < "u" ? window : null, e),
    un
}
var Ai = sh
  , ao = uh
  , lo = is
  , pe = function() {
    return Ai.apply(this, arguments)
};
pe.m = Ai;
pe.trust = Ai.trust;
pe.fragment = Ai.fragment;
pe.Fragment = "[";
pe.mount = lo.mount;
pe.route = mh();
pe.render = io();
pe.redraw = lo.redraw;
pe.request = ao.request;
pe.jsonp = ao.jsonp;
pe.parseQueryString = ro();
pe.buildQueryString = no();
pe.parsePathname = ss();
pe.buildPathname = ns();
pe.vnode = Ge();
pe.PromisePolyfill = eo();
pe.censor = oo();
var gh = pe;
const Ne = Pi(gh);
function we(e, t, i, s, n) {
    this.debugLog = !1,
    this.baseUrl = e,
    this.lobbySize = i,
    this.devPort = t,
    this.lobbySpread = s,
    this.rawIPs = !!n,
    this.server = void 0,
    this.gameIndex = void 0,
    this.callback = void 0,
    this.errorCallback = void 0
}
we.prototype.regionInfo = {
    0: {
        name: "Local",
        latitude: 0,
        longitude: 0
    },
    "us-east": {
        name: "Miami",
        latitude: 40.1393329,
        longitude: -75.8521818
    },
    "us-west": {
        name: "Silicon Valley",
        latitude: 47.6149942,
        longitude: -122.4759879
    },
    gb: {
        name: "London",
        latitude: 51.5283063,
        longitude: -.382486
    },
    "eu-west": {
        name: "Frankfurt",
        latitude: 50.1211273,
        longitude: 8.496137
    },
    au: {
        name: "Sydney",
        latitude: -33.8479715,
        longitude: 150.651084
    },
    sg: {
        name: "Singapore",
        latitude: 1.3147268,
        longitude: 103.7065876
    }
};
we.prototype.start = function(e, t, i, s) {
    if (this.callback = t,
    this.errorCallback = i,
    s)
        return t();
    const n = this.parseServerQuery(e);
    n && n.length > 0 ? (this.log("Found server in query."),
    this.password = n[3],
    this.connect(n[0], n[1], n[2])) : this.errorCallback("Unable to find server")
}
;
we.prototype.parseServerQuery = function(e) {
    const t = new URLSearchParams(location.search,!0)
      , i = e || t.get("server");
    if (typeof i != "string")
        return [];
    const [s,n] = i.split(":");
    return [s, n, t.get("password")]
}
;
we.prototype.findServer = function(e, t) {
    var i = this.servers[e];
    for (let s = 0; s < i.length; s++) {
        const n = i[s];
        if (n.name === t)
            return n
    }
    console.warn("Could not find server in region " + e + " with serverName " + t + ".")
}
;
we.prototype.seekServer = function(e, t, i) {
    i == null && (i = "random"),
    t == null && (t = !1);
    const s = ["random"]
      , n = this.lobbySize
      , r = this.lobbySpread
      , o = this.servers[e].flatMap(function(h) {
        let m = 0;
        return h.games.map(function(w) {
            const v = m++;
            return {
                region: h.region,
                index: h.index * h.games.length + v,
                gameIndex: v,
                gameCount: h.games.length,
                playerCount: w.playerCount,
                playerCapacity: w.playerCapacity,
                isPrivate: w.isPrivate
            }
        })
    }).filter(function(h) {
        return !h.isPrivate
    }).filter(function(h) {
        return t ? h.playerCount == 0 && h.gameIndex >= h.gameCount / 2 : !0
    }).filter(function(h) {
        return i == "random" ? !0 : s[h.index % s.length].key == i
    }).sort(function(h, m) {
        return m.playerCount - h.playerCount
    }).filter(function(h) {
        return h.playerCount < n
    });
    if (t && o.reverse(),
    o.length == 0) {
        this.errorCallback("No open servers.");
        return
    }
    const l = Math.min(r, o.length);
    var u = Math.floor(Math.random() * l);
    u = Math.min(u, o.length - 1);
    const c = o[u]
      , a = c.region;
    var u = Math.floor(c.index / c.gameCount);
    const p = c.index % c.gameCount;
    return this.log("Found server."),
    [a, u, p]
}
;
we.prototype.connect = function(e, t, i) {
    if (this.connected)
        return;
    const s = this.findServer(e, t);
    if (s == null) {
        this.errorCallback("Failed to find server for region " + e + " and serverName " + t);
        return
    }
    if (this.log("Connecting to server", s, "with game index", i),
    s.playerCount >= s.playerCapacity) {
        this.errorCallback("Server is already full.");
        return
    }
    window.history.replaceState(document.title, document.title, this.generateHref(e, t, this.password)),
    this.server = s,
    this.gameIndex = i,
    this.log("Calling callback with address", this.serverAddress(s), "on port", this.serverPort(s)),
    this.callback(this.serverAddress(s), this.serverPort(s), i),
    Ut && clearInterval(Ut)
}
;
we.prototype.switchServer = function(e, t) {
    this.switchingServers = !0,
    window.location = this.generateHref(e, t, null)
}
;
we.prototype.generateHref = function(e, t, i) {
    let s = window.location.href.split("?")[0];
    return s += "?server=" + e + ":" + t,
    i && (s += "&password=" + encodeURIComponent(i)),
    s
}
;
we.prototype.serverAddress = function(e) {
    return e.region == 0 ? "localhost" : e.key + "." + e.region + "." + this.baseUrl
}
;
we.prototype.serverPort = function(e) {
    return e.port
}
;
let Ut;
function yh(e) {
    e = e.filter(n=>n.playerCount !== n.playerCapacity);
    const t = Math.min(...e.map(n=>n.ping || 1 / 0))
      , i = e.filter(n=>n.ping === t);
    return !i.length > 0 ? null : i.reduce((n,r)=>n.playerCount > r.playerCount ? n : r)
}
we.prototype.processServers = function(e) {
    return Ut && clearInterval(Ut),
    new Promise(t=>{
        const i = {}
          , s = c=>{
            const a = i[c]
              , u = a[0];
            let p = this.serverAddress(u);
            const h = this.serverPort(u);
            h && (p += `:${h}`);
            const m = `https://${p}/ping`
              , w = new Date().getTime();
            return Promise.race([fetch(m).then(()=>{
                const v = new Date().getTime() - w;
                a.forEach(x=>{
                    x.pings = x.pings ?? [],
                    x.pings.push(v),
                    x.pings.length > 10 && x.pings.shift(),
                    x.ping = Math.floor(x.pings.reduce((D,k)=>D + k, 0) / x.pings.length)
                }
                )
            }
            ).catch(()=>{}
            ), new Promise(v=>setTimeout(()=>v(), 100))])
        }
          , n = async()=>{
            await Promise.all(Object.keys(i).map(s)),
            window.blockRedraw || Ne.redraw()
        }
        ;
        e.forEach(c=>{
            i[c.region] = i[c.region] || [],
            i[c.region].push(c)
        }
        );
        for (const c in i)
            i[c] = i[c].sort(function(a, u) {
                return u.playerCount - a.playerCount
            });
        this.servers = i;
        let r;
        const [o,l] = this.parseServerQuery();
        e.forEach(c=>{
            o === c.region && l === c.name && (c.selected = !0,
            r = c)
        }
        ),
        n().then(n).then(()=>{
            if (r)
                return;
            let c = yh(e);
            c || (c = e[0]),
            c && (c.selected = !0,
            window.history.replaceState(document.title, document.title, this.generateHref(c.region, c.name, this.password))),
            window.blockRedraw || Ne.redraw()
        }
        ).then(n).catch(c=>{}
        ).finally(t),
        Ut = setInterval(n, 5e3)
    }
    )
}
;
we.prototype.ipToHex = function(e) {
    return e.split(".").map(i=>("00" + parseInt(i).toString(16)).substr(-2)).join("").toLowerCase()
}
;
we.prototype.hashIP = function(e) {
    return Xc(this.ipToHex(e))
}
;
we.prototype.log = function() {
    if (this.debugLog)
        return console.log.apply(void 0, arguments);
    if (console.verbose)
        return console.verbose.apply(void 0, arguments)
}
;
we.prototype.stripRegion = function(e) {
    return e.startsWith("vultr:") ? e = e.slice(6) : e.startsWith("do:") && (e = e.slice(3)),
    e
}
;
const wh = function(e, t) {
    return e.concat(t)
}
  , kh = function(e, t) {
    return t.map(e).reduce(wh, [])
};
Array.prototype.flatMap = function(e) {
    return kh(e, this)
}
;
const fi = (e,t)=>{
    const i = t.x - e.x
      , s = t.y - e.y;
    return Math.sqrt(i * i + s * s)
}
  , vh = (e,t)=>{
    const i = t.x - e.x
      , s = t.y - e.y;
    return bh(Math.atan2(s, i))
}
  , xh = (e,t,i)=>{
    const s = {
        x: 0,
        y: 0
    };
    return i = Rn(i),
    s.x = e.x - t * Math.cos(i),
    s.y = e.y - t * Math.sin(i),
    s
}
  , Rn = e=>e * (Math.PI / 180)
  , bh = e=>e * (180 / Math.PI)
  , Sh = e=>isNaN(e.buttons) ? e.pressure !== 0 : e.buttons !== 0
  , dn = new Map
  , Qs = e=>{
    dn.has(e) && clearTimeout(dn.get(e)),
    dn.set(e, setTimeout(e, 100))
}
  , yi = (e,t,i)=>{
    const s = t.split(/[ ,]+/g);
    let n;
    for (let r = 0; r < s.length; r += 1)
        n = s[r],
        e.addEventListener ? e.addEventListener(n, i, !1) : e.attachEvent && e.attachEvent(n, i)
}
  , Zs = (e,t,i)=>{
    const s = t.split(/[ ,]+/g);
    let n;
    for (let r = 0; r < s.length; r += 1)
        n = s[r],
        e.removeEventListener ? e.removeEventListener(n, i) : e.detachEvent && e.detachEvent(n, i)
}
  , co = e=>(e.preventDefault(),
e.type.match(/^touch/) ? e.changedTouches : e)
  , js = ()=>{
    const e = window.pageXOffset !== void 0 ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
      , t = window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    return {
        x: e,
        y: t
    }
}
  , er = (e,t)=>{
    t.top || t.right || t.bottom || t.left ? (e.style.top = t.top,
    e.style.right = t.right,
    e.style.bottom = t.bottom,
    e.style.left = t.left) : (e.style.left = t.x + "px",
    e.style.top = t.y + "px")
}
  , rs = (e,t,i)=>{
    const s = ho(e);
    for (let n in s)
        if (s.hasOwnProperty(n))
            if (typeof t == "string")
                s[n] = t + " " + i;
            else {
                let r = "";
                for (let o = 0, l = t.length; o < l; o += 1)
                    r += t[o] + " " + i + ", ";
                s[n] = r.slice(0, -2)
            }
    return s
}
  , Th = (e,t)=>{
    const i = ho(e);
    for (let s in i)
        i.hasOwnProperty(s) && (i[s] = t);
    return i
}
  , ho = e=>{
    const t = {};
    return t[e] = "",
    ["webkit", "Moz", "o"].forEach(function(s) {
        t[s + e.charAt(0).toUpperCase() + e.slice(1)] = ""
    }),
    t
}
  , pn = (e,t)=>{
    for (let i in t)
        t.hasOwnProperty(i) && (e[i] = t[i]);
    return e
}
  , Ih = (e,t)=>{
    const i = {};
    for (let s in e)
        e.hasOwnProperty(s) && t.hasOwnProperty(s) ? i[s] = t[s] : e.hasOwnProperty(s) && (i[s] = e[s]);
    return i
}
  , _n = (e,t)=>{
    if (e.length)
        for (let i = 0, s = e.length; i < s; i += 1)
            t(e[i]);
    else
        t(e)
}
  , Mh = (e,t,i)=>({
    x: Math.min(Math.max(e.x, t.x - i), t.x + i),
    y: Math.min(Math.max(e.y, t.y - i), t.y + i)
});
var Eh = "ontouchstart"in window, Ph = !!window.PointerEvent, Ch = !!window.MSPointerEvent, Bt = {
    touch: {
        start: "touchstart",
        move: "touchmove",
        end: "touchend, touchcancel"
    },
    mouse: {
        start: "mousedown",
        move: "mousemove",
        end: "mouseup"
    },
    pointer: {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup, pointercancel"
    },
    MSPointer: {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
    }
}, vt, $t = {};
Ph ? vt = Bt.pointer : Ch ? vt = Bt.MSPointer : Eh ? (vt = Bt.touch,
$t = Bt.mouse) : vt = Bt.mouse;
function Ve() {}
Ve.prototype.on = function(e, t) {
    var i = this, s = e.split(/[ ,]+/g), n;
    i._handlers_ = i._handlers_ || {};
    for (var r = 0; r < s.length; r += 1)
        n = s[r],
        i._handlers_[n] = i._handlers_[n] || [],
        i._handlers_[n].push(t);
    return i
}
;
Ve.prototype.off = function(e, t) {
    var i = this;
    return i._handlers_ = i._handlers_ || {},
    e === void 0 ? i._handlers_ = {} : t === void 0 ? i._handlers_[e] = null : i._handlers_[e] && i._handlers_[e].indexOf(t) >= 0 && i._handlers_[e].splice(i._handlers_[e].indexOf(t), 1),
    i
}
;
Ve.prototype.trigger = function(e, t) {
    var i = this, s = e.split(/[ ,]+/g), n;
    i._handlers_ = i._handlers_ || {};
    for (var r = 0; r < s.length; r += 1)
        n = s[r],
        i._handlers_[n] && i._handlers_[n].length && i._handlers_[n].forEach(function(o) {
            o.call(i, {
                type: n,
                target: i
            }, t)
        })
}
;
Ve.prototype.config = function(e) {
    var t = this;
    t.options = t.defaults || {},
    e && (t.options = Ih(t.options, e))
}
;
Ve.prototype.bindEvt = function(e, t) {
    var i = this;
    return i._domHandlers_ = i._domHandlers_ || {},
    i._domHandlers_[t] = function() {
        typeof i["on" + t] == "function" ? i["on" + t].apply(i, arguments) : console.warn('[WARNING] : Missing "on' + t + '" handler.')
    }
    ,
    yi(e, vt[t], i._domHandlers_[t]),
    $t[t] && yi(e, $t[t], i._domHandlers_[t]),
    i
}
;
Ve.prototype.unbindEvt = function(e, t) {
    var i = this;
    return i._domHandlers_ = i._domHandlers_ || {},
    Zs(e, vt[t], i._domHandlers_[t]),
    $t[t] && Zs(e, $t[t], i._domHandlers_[t]),
    delete i._domHandlers_[t],
    this
}
;
function he(e, t) {
    return this.identifier = t.identifier,
    this.position = t.position,
    this.frontPosition = t.frontPosition,
    this.collection = e,
    this.defaults = {
        size: 100,
        threshold: .1,
        color: "white",
        fadeTime: 250,
        dataOnly: !1,
        restJoystick: !0,
        restOpacity: .5,
        mode: "dynamic",
        zone: document.body,
        lockX: !1,
        lockY: !1,
        shape: "circle"
    },
    this.config(t),
    this.options.mode === "dynamic" && (this.options.restOpacity = 0),
    this.id = he.id,
    he.id += 1,
    this.buildEl().stylize(),
    this.instance = {
        el: this.ui.el,
        on: this.on.bind(this),
        off: this.off.bind(this),
        show: this.show.bind(this),
        hide: this.hide.bind(this),
        add: this.addToDom.bind(this),
        remove: this.removeFromDom.bind(this),
        destroy: this.destroy.bind(this),
        setPosition: this.setPosition.bind(this),
        resetDirection: this.resetDirection.bind(this),
        computeDirection: this.computeDirection.bind(this),
        trigger: this.trigger.bind(this),
        position: this.position,
        frontPosition: this.frontPosition,
        ui: this.ui,
        identifier: this.identifier,
        id: this.id,
        options: this.options
    },
    this.instance
}
he.prototype = new Ve;
he.constructor = he;
he.id = 0;
he.prototype.buildEl = function(e) {
    return this.ui = {},
    this.options.dataOnly ? this : (this.ui.el = document.createElement("div"),
    this.ui.back = document.createElement("div"),
    this.ui.front = document.createElement("div"),
    this.ui.el.className = "nipple collection_" + this.collection.id,
    this.ui.back.className = "back",
    this.ui.front.className = "front",
    this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id),
    this.ui.el.appendChild(this.ui.back),
    this.ui.el.appendChild(this.ui.front),
    this)
}
;
he.prototype.stylize = function() {
    if (this.options.dataOnly)
        return this;
    var e = this.options.fadeTime + "ms"
      , t = Th("borderRadius", "50%")
      , i = rs("transition", "opacity", e)
      , s = {};
    return s.el = {
        position: "absolute",
        opacity: this.options.restOpacity,
        display: "block",
        zIndex: 999
    },
    s.back = {
        position: "absolute",
        display: "block",
        width: this.options.size + "px",
        height: this.options.size + "px",
        marginLeft: -this.options.size / 2 + "px",
        marginTop: -this.options.size / 2 + "px",
        background: this.options.color,
        opacity: ".5"
    },
    s.front = {
        width: this.options.size / 2 + "px",
        height: this.options.size / 2 + "px",
        position: "absolute",
        display: "block",
        marginLeft: -this.options.size / 4 + "px",
        marginTop: -this.options.size / 4 + "px",
        background: this.options.color,
        opacity: ".5",
        transform: "translate(0px, 0px)"
    },
    pn(s.el, i),
    this.options.shape === "circle" && pn(s.back, t),
    pn(s.front, t),
    this.applyStyles(s),
    this
}
;
he.prototype.applyStyles = function(e) {
    for (var t in this.ui)
        if (this.ui.hasOwnProperty(t))
            for (var i in e[t])
                this.ui[t].style[i] = e[t][i];
    return this
}
;
he.prototype.addToDom = function() {
    return this.options.dataOnly || document.body.contains(this.ui.el) ? this : (this.options.zone.appendChild(this.ui.el),
    this)
}
;
he.prototype.removeFromDom = function() {
    return this.options.dataOnly || !document.body.contains(this.ui.el) ? this : (this.options.zone.removeChild(this.ui.el),
    this)
}
;
he.prototype.destroy = function() {
    clearTimeout(this.removeTimeout),
    clearTimeout(this.showTimeout),
    clearTimeout(this.restTimeout),
    this.trigger("destroyed", this.instance),
    this.removeFromDom(),
    this.off()
}
;
he.prototype.show = function(e) {
    var t = this;
    return t.options.dataOnly || (clearTimeout(t.removeTimeout),
    clearTimeout(t.showTimeout),
    clearTimeout(t.restTimeout),
    t.addToDom(),
    t.restCallback(),
    setTimeout(function() {
        t.ui.el.style.opacity = 1
    }, 0),
    t.showTimeout = setTimeout(function() {
        t.trigger("shown", t.instance),
        typeof e == "function" && e.call(this)
    }, t.options.fadeTime)),
    t
}
;
he.prototype.hide = function(e) {
    var t = this;
    if (t.options.dataOnly)
        return t;
    if (t.ui.el.style.opacity = t.options.restOpacity,
    clearTimeout(t.removeTimeout),
    clearTimeout(t.showTimeout),
    clearTimeout(t.restTimeout),
    t.removeTimeout = setTimeout(function() {
        var i = t.options.mode === "dynamic" ? "none" : "block";
        t.ui.el.style.display = i,
        typeof e == "function" && e.call(t),
        t.trigger("hidden", t.instance)
    }, t.options.fadeTime),
    t.options.restJoystick) {
        const i = t.options.restJoystick
          , s = {};
        s.x = i === !0 || i.x !== !1 ? 0 : t.instance.frontPosition.x,
        s.y = i === !0 || i.y !== !1 ? 0 : t.instance.frontPosition.y,
        t.setPosition(e, s)
    }
    return t
}
;
he.prototype.setPosition = function(e, t) {
    var i = this;
    i.frontPosition = {
        x: t.x,
        y: t.y
    };
    var s = i.options.fadeTime + "ms"
      , n = {};
    n.front = rs("transition", ["transform"], s);
    var r = {
        front: {}
    };
    r.front = {
        transform: "translate(" + i.frontPosition.x + "px," + i.frontPosition.y + "px)"
    },
    i.applyStyles(n),
    i.applyStyles(r),
    i.restTimeout = setTimeout(function() {
        typeof e == "function" && e.call(i),
        i.restCallback()
    }, i.options.fadeTime)
}
;
he.prototype.restCallback = function() {
    var e = this
      , t = {};
    t.front = rs("transition", "none", ""),
    e.applyStyles(t),
    e.trigger("rested", e.instance)
}
;
he.prototype.resetDirection = function() {
    this.direction = {
        x: !1,
        y: !1,
        angle: !1
    }
}
;
he.prototype.computeDirection = function(e) {
    var t = e.angle.radian, i = Math.PI / 4, s = Math.PI / 2, n, r, o;
    if (t > i && t < i * 3 && !e.lockX ? n = "up" : t > -i && t <= i && !e.lockY ? n = "left" : t > -i * 3 && t <= -i && !e.lockX ? n = "down" : e.lockY || (n = "right"),
    e.lockY || (t > -s && t < s ? r = "left" : r = "right"),
    e.lockX || (t > 0 ? o = "up" : o = "down"),
    e.force > this.options.threshold) {
        var l = {}, c;
        for (c in this.direction)
            this.direction.hasOwnProperty(c) && (l[c] = this.direction[c]);
        var a = {};
        this.direction = {
            x: r,
            y: o,
            angle: n
        },
        e.direction = this.direction;
        for (c in l)
            l[c] === this.direction[c] && (a[c] = !0);
        if (a.x && a.y && a.angle)
            return e;
        (!a.x || !a.y) && this.trigger("plain", e),
        a.x || this.trigger("plain:" + r, e),
        a.y || this.trigger("plain:" + o, e),
        a.angle || this.trigger("dir dir:" + n, e)
    } else
        this.resetDirection();
    return e
}
;
function ae(e, t) {
    var i = this;
    i.nipples = [],
    i.idles = [],
    i.actives = [],
    i.ids = [],
    i.pressureIntervals = {},
    i.manager = e,
    i.id = ae.id,
    ae.id += 1,
    i.defaults = {
        zone: document.body,
        multitouch: !1,
        maxNumberOfNipples: 10,
        mode: "dynamic",
        position: {
            top: 0,
            left: 0
        },
        catchDistance: 200,
        size: 100,
        threshold: .1,
        color: "white",
        fadeTime: 250,
        dataOnly: !1,
        restJoystick: !0,
        restOpacity: .5,
        lockX: !1,
        lockY: !1,
        shape: "circle",
        dynamicPage: !1,
        follow: !1
    },
    i.config(t),
    (i.options.mode === "static" || i.options.mode === "semi") && (i.options.multitouch = !1),
    i.options.multitouch || (i.options.maxNumberOfNipples = 1);
    const s = getComputedStyle(i.options.zone.parentElement);
    return s && s.display === "flex" && (i.parentIsFlex = !0),
    i.updateBox(),
    i.prepareNipples(),
    i.bindings(),
    i.begin(),
    i.nipples
}
ae.prototype = new Ve;
ae.constructor = ae;
ae.id = 0;
ae.prototype.prepareNipples = function() {
    var e = this
      , t = e.nipples;
    t.on = e.on.bind(e),
    t.off = e.off.bind(e),
    t.options = e.options,
    t.destroy = e.destroy.bind(e),
    t.ids = e.ids,
    t.id = e.id,
    t.processOnMove = e.processOnMove.bind(e),
    t.processOnEnd = e.processOnEnd.bind(e),
    t.get = function(i) {
        if (i === void 0)
            return t[0];
        for (var s = 0, n = t.length; s < n; s += 1)
            if (t[s].identifier === i)
                return t[s];
        return !1
    }
}
;
ae.prototype.bindings = function() {
    var e = this;
    e.bindEvt(e.options.zone, "start"),
    e.options.zone.style.touchAction = "none",
    e.options.zone.style.msTouchAction = "none"
}
;
ae.prototype.begin = function() {
    var e = this
      , t = e.options;
    if (t.mode === "static") {
        var i = e.createNipple(t.position, e.manager.getIdentifier());
        i.add(),
        e.idles.push(i)
    }
}
;
ae.prototype.createNipple = function(e, t) {
    var i = this
      , s = i.manager.scroll
      , n = {}
      , r = i.options
      , o = {
        x: i.parentIsFlex ? s.x : s.x + i.box.left,
        y: i.parentIsFlex ? s.y : s.y + i.box.top
    };
    if (e.x && e.y)
        n = {
            x: e.x - o.x,
            y: e.y - o.y
        };
    else if (e.top || e.right || e.bottom || e.left) {
        var l = document.createElement("DIV");
        l.style.display = "hidden",
        l.style.top = e.top,
        l.style.right = e.right,
        l.style.bottom = e.bottom,
        l.style.left = e.left,
        l.style.position = "absolute",
        r.zone.appendChild(l);
        var c = l.getBoundingClientRect();
        r.zone.removeChild(l),
        n = e,
        e = {
            x: c.left + s.x,
            y: c.top + s.y
        }
    }
    var a = new he(i,{
        color: r.color,
        size: r.size,
        threshold: r.threshold,
        fadeTime: r.fadeTime,
        dataOnly: r.dataOnly,
        restJoystick: r.restJoystick,
        restOpacity: r.restOpacity,
        mode: r.mode,
        identifier: t,
        position: e,
        zone: r.zone,
        frontPosition: {
            x: 0,
            y: 0
        },
        shape: r.shape
    });
    return r.dataOnly || (er(a.ui.el, n),
    er(a.ui.front, a.frontPosition)),
    i.nipples.push(a),
    i.trigger("added " + a.identifier + ":added", a),
    i.manager.trigger("added " + a.identifier + ":added", a),
    i.bindNipple(a),
    a
}
;
ae.prototype.updateBox = function() {
    var e = this;
    e.box = e.options.zone.getBoundingClientRect()
}
;
ae.prototype.bindNipple = function(e) {
    var t = this, i, s = function(n, r) {
        i = n.type + " " + r.id + ":" + n.type,
        t.trigger(i, r)
    };
    e.on("destroyed", t.onDestroyed.bind(t)),
    e.on("shown hidden rested dir plain", s),
    e.on("dir:up dir:right dir:down dir:left", s),
    e.on("plain:up plain:right plain:down plain:left", s)
}
;
ae.prototype.pressureFn = function(e, t, i) {
    var s = this
      , n = 0;
    clearInterval(s.pressureIntervals[i]),
    s.pressureIntervals[i] = setInterval((function() {
        var r = e.force || e.pressure || e.webkitForce || 0;
        r !== n && (t.trigger("pressure", r),
        s.trigger("pressure " + t.identifier + ":pressure", r),
        n = r)
    }
    ).bind(s), 100)
}
;
ae.prototype.onstart = function(e) {
    var t = this
      , i = t.options
      , s = e;
    e = co(e),
    t.updateBox();
    var n = function(r) {
        t.actives.length < i.maxNumberOfNipples ? t.processOnStart(r) : s.type.match(/^touch/) && (Object.keys(t.manager.ids).forEach(function(o) {
            if (Object.values(s.touches).findIndex(function(c) {
                return c.identifier === o
            }) < 0) {
                var l = [e[0]];
                l.identifier = o,
                t.processOnEnd(l)
            }
        }),
        t.actives.length < i.maxNumberOfNipples && t.processOnStart(r))
    };
    return _n(e, n),
    t.manager.bindDocument(),
    !1
}
;
ae.prototype.processOnStart = function(e) {
    var t = this, i = t.options, s, n = t.manager.getIdentifier(e), r = e.force || e.pressure || e.webkitForce || 0, o = {
        x: e.pageX,
        y: e.pageY
    }, l = t.getOrCreate(n, o);
    l.identifier !== n && t.manager.removeIdentifier(l.identifier),
    l.identifier = n;
    var c = function(u) {
        u.trigger("start", u),
        t.trigger("start " + u.id + ":start", u),
        u.show(),
        r > 0 && t.pressureFn(e, u, u.identifier),
        t.processOnMove(e)
    };
    if ((s = t.idles.indexOf(l)) >= 0 && t.idles.splice(s, 1),
    t.actives.push(l),
    t.ids.push(l.identifier),
    i.mode !== "semi")
        c(l);
    else {
        var a = fi(o, l.position);
        if (a <= i.catchDistance)
            c(l);
        else {
            l.destroy(),
            t.processOnStart(e);
            return
        }
    }
    return l
}
;
ae.prototype.getOrCreate = function(e, t) {
    var i = this, s = i.options, n;
    return /(semi|static)/.test(s.mode) ? (n = i.idles[0],
    n ? (i.idles.splice(0, 1),
    n) : s.mode === "semi" ? i.createNipple(t, e) : (console.warn("Coudln't find the needed nipple."),
    !1)) : (n = i.createNipple(t, e),
    n)
}
;
ae.prototype.processOnMove = function(e) {
    var t = this
      , i = t.options
      , s = t.manager.getIdentifier(e)
      , n = t.nipples.get(s)
      , r = t.manager.scroll;
    if (!Sh(e)) {
        this.processOnEnd(e);
        return
    }
    if (!n) {
        console.error("Found zombie joystick with ID " + s),
        t.manager.removeIdentifier(s);
        return
    }
    if (i.dynamicPage) {
        var o = n.el.getBoundingClientRect();
        n.position = {
            x: r.x + o.left,
            y: r.y + o.top
        }
    }
    n.identifier = s;
    var l = n.options.size / 2
      , c = {
        x: e.pageX,
        y: e.pageY
    };
    i.lockX && (c.y = n.position.y),
    i.lockY && (c.x = n.position.x);
    var a = fi(c, n.position), u = vh(c, n.position), p = Rn(u), h = a / l, m = {
        distance: a,
        position: c
    }, w, v;
    if (n.options.shape === "circle" ? (w = Math.min(a, l),
    v = xh(n.position, w, u)) : (v = Mh(c, n.position, l),
    w = fi(v, n.position)),
    i.follow) {
        if (a > l) {
            let S = c.x - v.x
              , O = c.y - v.y;
            n.position.x += S,
            n.position.y += O,
            n.el.style.top = n.position.y - (t.box.top + r.y) + "px",
            n.el.style.left = n.position.x - (t.box.left + r.x) + "px",
            a = fi(c, n.position)
        }
    } else
        c = v,
        a = w;
    var x = c.x - n.position.x
      , D = c.y - n.position.y;
    n.frontPosition = {
        x,
        y: D
    },
    i.dataOnly || (n.ui.front.style.transform = "translate(" + x + "px," + D + "px)");
    var k = {
        identifier: n.identifier,
        position: c,
        force: h,
        pressure: e.force || e.pressure || e.webkitForce || 0,
        distance: a,
        angle: {
            radian: p,
            degree: u
        },
        vector: {
            x: x / l,
            y: -D / l
        },
        raw: m,
        instance: n,
        lockX: i.lockX,
        lockY: i.lockY
    };
    k = n.computeDirection(k),
    k.angle = {
        radian: Rn(180 - u),
        degree: 180 - u
    },
    n.trigger("move", k),
    t.trigger("move " + n.id + ":move", k)
}
;
ae.prototype.processOnEnd = function(e) {
    var t = this
      , i = t.options
      , s = t.manager.getIdentifier(e)
      , n = t.nipples.get(s)
      , r = t.manager.removeIdentifier(n.identifier);
    n && (i.dataOnly || n.hide(function() {
        i.mode === "dynamic" && (n.trigger("removed", n),
        t.trigger("removed " + n.id + ":removed", n),
        t.manager.trigger("removed " + n.id + ":removed", n),
        n.destroy())
    }),
    clearInterval(t.pressureIntervals[n.identifier]),
    n.resetDirection(),
    n.trigger("end", n),
    t.trigger("end " + n.id + ":end", n),
    t.ids.indexOf(n.identifier) >= 0 && t.ids.splice(t.ids.indexOf(n.identifier), 1),
    t.actives.indexOf(n) >= 0 && t.actives.splice(t.actives.indexOf(n), 1),
    /(semi|static)/.test(i.mode) ? t.idles.push(n) : t.nipples.indexOf(n) >= 0 && t.nipples.splice(t.nipples.indexOf(n), 1),
    t.manager.unbindDocument(),
    /(semi|static)/.test(i.mode) && (t.manager.ids[r.id] = r.identifier))
}
;
ae.prototype.onDestroyed = function(e, t) {
    var i = this;
    i.nipples.indexOf(t) >= 0 && i.nipples.splice(i.nipples.indexOf(t), 1),
    i.actives.indexOf(t) >= 0 && i.actives.splice(i.actives.indexOf(t), 1),
    i.idles.indexOf(t) >= 0 && i.idles.splice(i.idles.indexOf(t), 1),
    i.ids.indexOf(t.identifier) >= 0 && i.ids.splice(i.ids.indexOf(t.identifier), 1),
    i.manager.removeIdentifier(t.identifier),
    i.manager.unbindDocument()
}
;
ae.prototype.destroy = function() {
    var e = this;
    e.unbindEvt(e.options.zone, "start"),
    e.nipples.forEach(function(i) {
        i.destroy()
    });
    for (var t in e.pressureIntervals)
        e.pressureIntervals.hasOwnProperty(t) && clearInterval(e.pressureIntervals[t]);
    e.trigger("destroyed", e.nipples),
    e.manager.unbindDocument(),
    e.off()
}
;
function de(e) {
    var t = this;
    t.ids = {},
    t.index = 0,
    t.collections = [],
    t.scroll = js(),
    t.config(e),
    t.prepareCollections();
    var i = function() {
        var n;
        t.collections.forEach(function(r) {
            r.forEach(function(o) {
                n = o.el.getBoundingClientRect(),
                o.position = {
                    x: t.scroll.x + n.left,
                    y: t.scroll.y + n.top
                }
            })
        })
    };
    yi(window, "resize", function() {
        Qs(i)
    });
    var s = function() {
        t.scroll = js()
    };
    return yi(window, "scroll", function() {
        Qs(s)
    }),
    t.collections
}
de.prototype = new Ve;
de.constructor = de;
de.prototype.prepareCollections = function() {
    var e = this;
    e.collections.create = e.create.bind(e),
    e.collections.on = e.on.bind(e),
    e.collections.off = e.off.bind(e),
    e.collections.destroy = e.destroy.bind(e),
    e.collections.get = function(t) {
        var i;
        return e.collections.every(function(s) {
            return i = s.get(t),
            !i
        }),
        i
    }
}
;
de.prototype.create = function(e) {
    return this.createCollection(e)
}
;
de.prototype.createCollection = function(e) {
    var t = this
      , i = new ae(t,e);
    return t.bindCollection(i),
    t.collections.push(i),
    i
}
;
de.prototype.bindCollection = function(e) {
    var t = this, i, s = function(n, r) {
        i = n.type + " " + r.id + ":" + n.type,
        t.trigger(i, r)
    };
    e.on("destroyed", t.onDestroyed.bind(t)),
    e.on("shown hidden rested dir plain", s),
    e.on("dir:up dir:right dir:down dir:left", s),
    e.on("plain:up plain:right plain:down plain:left", s)
}
;
de.prototype.bindDocument = function() {
    var e = this;
    e.binded || (e.bindEvt(document, "move").bindEvt(document, "end"),
    e.binded = !0)
}
;
de.prototype.unbindDocument = function(e) {
    var t = this;
    (!Object.keys(t.ids).length || e === !0) && (t.unbindEvt(document, "move").unbindEvt(document, "end"),
    t.binded = !1)
}
;
de.prototype.getIdentifier = function(e) {
    var t;
    return e ? (t = e.identifier === void 0 ? e.pointerId : e.identifier,
    t === void 0 && (t = this.latest || 0)) : t = this.index,
    this.ids[t] === void 0 && (this.ids[t] = this.index,
    this.index += 1),
    this.latest = t,
    this.ids[t]
}
;
de.prototype.removeIdentifier = function(e) {
    var t = {};
    for (var i in this.ids)
        if (this.ids[i] === e) {
            t.id = i,
            t.identifier = this.ids[i],
            delete this.ids[i];
            break
        }
    return t
}
;
de.prototype.onmove = function(e) {
    var t = this;
    return t.onAny("move", e),
    !1
}
;
de.prototype.onend = function(e) {
    var t = this;
    return t.onAny("end", e),
    !1
}
;
de.prototype.oncancel = function(e) {
    var t = this;
    return t.onAny("end", e),
    !1
}
;
de.prototype.onAny = function(e, t) {
    var i = this, s, n = "processOn" + e.charAt(0).toUpperCase() + e.slice(1);
    t = co(t);
    var r = function(l, c, a) {
        a.ids.indexOf(c) >= 0 && (a[n](l),
        l._found_ = !0)
    }
      , o = function(l) {
        s = i.getIdentifier(l),
        _n(i.collections, r.bind(null, l, s)),
        l._found_ || i.removeIdentifier(s)
    };
    return _n(t, o),
    !1
}
;
de.prototype.destroy = function() {
    var e = this;
    e.unbindDocument(!0),
    e.ids = {},
    e.index = 0,
    e.collections.forEach(function(t) {
        t.destroy()
    }),
    e.off()
}
;
de.prototype.onDestroyed = function(e, t) {
    var i = this;
    if (i.collections.indexOf(t) < 0)
        return !1;
    i.collections.splice(i.collections.indexOf(t), 1)
}
;
const tr = new de
  , ir = {
    create: function(e) {
        return tr.create(e)
    },
    factory: tr
};
let nr = !1;
const Ah = e=>{
    if (nr)
        return;
    nr = !0;
    const t = document.getElementById("touch-controls-left")
      , i = ir.create({
        zone: t
    });
    i.on("start", e.onStartMoving),
    i.on("end", e.onStopMoving),
    i.on("move", e.onRotateMoving);
    const s = document.getElementById("touch-controls-right")
      , n = ir.create({
        zone: s
    });
    n.on("start", e.onStartAttacking),
    n.on("end", e.onStopAttacking),
    n.on("move", e.onRotateAttacking),
    t.style.display = "block",
    s.style.display = "block"
}
  , Dh = {
    enable: Ah
};
window.loadedScript = !0;
const Oh = location.hostname !== "localhost" && location.hostname !== "127.0.0.1" && !location.hostname.startsWith("192.168.")
  , fo = location.hostname === "sandbox-dev.moomoo.io" || location.hostname === "sandbox.moomoo.io"
  , Rh = location.hostname === "dev.moomoo.io" || location.hostname === "dev2.moomoo.io"
  , Bn = new pc;
let ui, di;
const wi = location.hostname === "localhost" || location.hostname === "127.0.0.1"
  , _h = !1
  , os = wi || _h;
fo ? (ui = "https://api-sandbox.moomoo.io",
di = "moomoo.io") : Rh ? (ui = "https://api-dev.moomoo.io",
di = "moomoo.io") : (ui = "https://api.moomoo.io",
di = "moomoo.io");
const Bh = !os
  , qe = new we(di,443,T.maxPlayers,5,Bh);
qe.debugLog = !1;
const Me = {
    animationTime: 0,
    land: null,
    lava: null,
    x: T.volcanoLocationX,
    y: T.volcanoLocationY
};
function zh() {
    let e = !1;
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera),
    e
}
const uo = zh();
let ki = !1
  , zn = !1;
function Hh() {
    !us || zn || (zn = !0,
    Oh || os ? window.turnstileToken ? mn(window.turnstileToken) : window.grecaptcha.ready(()=>{
        window.grecaptcha.execute("6LfahtgjAAAAAF8SkpjyeYMcxMdxIaQeh-VoPATP", {
            action: "homepage"
        }).then(function(e) {
            mn("re:" + e)
        }).catch(console.error)
    }
    ) : mn())
}
let Hn = !1;
function mn(e) {
    qe.start(xi, function(t, i, s) {
        let r = "wss" + "://" + t;
        e && (r += "?token=" + encodeURIComponent(e)),
        wi && (r = "wss://localhost:3000"),
        ee.connect(r, function(o) {
            if (Hn) {
                Hn = !1;
                return
            }
            Uo(),
            o ? xn(o) : (ki = !0,
            vs())
        }, {
            A: $h,
            B: xn,
            C: Af,
            D: iu,
            E: nu,
            a: au,
            G: zf,
            H: $f,
            I: eu,
            J: jf,
            K: Vf,
            L: Kf,
            M: Jf,
            N: ru,
            O: ou,
            P: Of,
            Q: _f,
            R: Rf,
            S: su,
            T: Bo,
            U: _o,
            V: Mo,
            X: Qf,
            Y: Zf,
            Z: hu,
            g: sf,
            1: af,
            2: nf,
            3: rf,
            4: of,
            5: gf,
            6: xf,
            7: uf,
            8: Df,
            9: hf,
            0: cu
        })
    }, function(t) {
        console.error("Vultr error:", t),
        alert(`Error:
` + t),
        xn("disconnected")
    }, wi)
}
function as() {
    return ee.connected
}
function Fh() {
    const t = prompt("party key", xi);
    t && (window.onbeforeunload = void 0,
    window.location.href = "/?server=" + t)
}
const Vh = new mc(T)
  , po = Math.PI
  , Ze = po * 2;
Math.lerpAngle = function(e, t, i) {
    Math.abs(t - e) > po && (e > t ? t += Ze : e += Ze);
    const n = t + (e - t) * i;
    return n >= 0 && n <= Ze ? n : n % Ze
}
;
CanvasRenderingContext2D.prototype.roundRect = function(e, t, i, s, n) {
    return i < 2 * n && (n = i / 2),
    s < 2 * n && (n = s / 2),
    n < 0 && (n = 0),
    this.beginPath(),
    this.moveTo(e + n, t),
    this.arcTo(e + i, t, e + i, t + s, n),
    this.arcTo(e + i, t + s, e, t + s, n),
    this.arcTo(e, t + s, e, t, n),
    this.arcTo(e, t, e + i, t, n),
    this.closePath(),
    this
}
;
let ls;
typeof Storage < "u" && (ls = !0);
function Di(e, t) {
    ls && localStorage.setItem(e, t)
}
function Nt(e) {
    return ls ? localStorage.getItem(e) : null
}
let vi = Nt("moofoll");
function Lh() {
    vi || (vi = !0,
    Di("moofoll", 1))
}
let mo, $e, mt = 1, be, It, gn, sr = Date.now();
var He;
let Ee;
const ye = []
  , J = [];
let Oe = [];
const et = []
  , Mt = []
  , go = new wc(Lc,Mt,J,ye,ue,R,T,C)
  , rr = new kc(ye,vc,J,R,null,T,C);
let E, yo, y, ct = 1, yn = 0, wo = 0, ko = 0, Re, _e, or, cs = 0;
const se = T.maxScreenWidth
  , re = T.maxScreenHeight;
let gt, yt, Kt = !1;
document.getElementById("ad-container");
const Oi = document.getElementById("mainMenu")
  , Fn = document.getElementById("enterGame")
  , wn = document.getElementById("promoImg");
document.getElementById("partyButton");
const kn = document.getElementById("joinPartyButton")
  , Vn = document.getElementById("settingsButton")
  , ar = Vn.getElementsByTagName("span")[0]
  , lr = document.getElementById("allianceButton")
  , cr = document.getElementById("storeButton")
  , hr = document.getElementById("chatButton")
  , xt = document.getElementById("gameCanvas")
  , M = xt.getContext("2d");
var Uh = document.getElementById("serverBrowser");
const Ln = document.getElementById("nativeResolution")
  , vn = document.getElementById("showPing");
document.getElementById("playMusic");
const Jt = document.getElementById("pingDisplay")
  , fr = document.getElementById("shutdownDisplay")
  , Qt = document.getElementById("menuCardHolder")
  , qt = document.getElementById("guideCard")
  , Et = document.getElementById("loadingText")
  , hs = document.getElementById("gameUI")
  , ur = document.getElementById("actionBar")
  , Nh = document.getElementById("scoreDisplay")
  , qh = document.getElementById("foodDisplay")
  , Wh = document.getElementById("woodDisplay")
  , Xh = document.getElementById("stoneDisplay")
  , Gh = document.getElementById("killCounter")
  , dr = document.getElementById("leaderboardData")
  , Zt = document.getElementById("nameInput")
  , Ue = document.getElementById("itemInfoHolder")
  , pr = document.getElementById("ageText")
  , mr = document.getElementById("ageBarBody")
  , ht = document.getElementById("upgradeHolder")
  , si = document.getElementById("upgradeCounter")
  , Te = document.getElementById("allianceMenu")
  , ri = document.getElementById("allianceHolder")
  , oi = document.getElementById("allianceManager")
  , me = document.getElementById("mapDisplay")
  , Wt = document.getElementById("diedText")
  , Yh = document.getElementById("skinColorHolder")
  , ce = me.getContext("2d");
me.width = 300;
me.height = 300;
const We = document.getElementById("storeMenu")
  , gr = document.getElementById("storeHolder")
  , ft = document.getElementById("noticationDisplay")
  , Xt = Yr.hats
  , Gt = Yr.accessories;
var ue = new yc(xc,et,C,T);
const jt = "#525252"
  , yr = "#3d3f42"
  , Xe = 5.5;
T.DAY_INTERVAL / 24;
T.DAY_INTERVAL / 2;
function $h(e) {
    Oe = e.teams
}
let fs = !0;
var us = !1;
(!os || wi) && (us = !0);
window.onblur = function() {
    fs = !1
}
;
window.onfocus = function() {
    fs = !0,
    E && E.alive && ks()
}
;
window.captchaCallbackHook = function() {
    us = !0
}
;
window.captchaCallbackComplete && window.captchaCallbackHook();
window.addEventListener("keydown", function(e) {
    e.keyCode == 32 && e.target == document.body && e.preventDefault()
});
xt.oncontextmenu = function() {
    return !1
}
;
["touch-controls-left", "touch-controls-right", "touch-controls-fullscreen", "storeMenu"].forEach(e=>{
    document.getElementById(e) && (document.getElementById(e).oncontextmenu = function(t) {
        t.preventDefault()
    }
    )
}
);
function xn(e) {
    ki = !1,
    ee.close(),
    ds(e)
}
function ds(e, t) {
    Oi.style.display = "block",
    hs.style.display = "none",
    Qt.style.display = "none",
    Wt.style.display = "none",
    Et.style.display = "block",
    Et.innerHTML = e + (t ? "<a href='javascript:window.location.href=window.location.href' class='ytLink'>reload</a>" : "")
}
function Kh() {
    Jt.hidden = !0,
    Et.style.display = "none",
    Oi.style.display = "block",
    Qt.style.display = "block",
    yf(),
    Jh(),
    Bf(),
    Et.style.display = "none",
    Qt.style.display = "block";
    let e = Nt("moo_name") || "";
    !e.length && FRVR.profile && (e = FRVR.profile.name(),
    e && (e += Math.floor(Math.random() * 90) + 9)),
    Zt.value = e || ""
}
function Jh() {
    Fn.onclick = C.checkTrusted(function() {
        ds("Connecting..."),
        as() ? vs() : Hh()
    }),
    C.hookTouchEvents(Fn),
    wn && (wn.onclick = C.checkTrusted(function() {
        qo("https://krunker.io/?play=SquidGame_KB")
    }),
    C.hookTouchEvents(wn)),
    kn && (kn.onclick = C.checkTrusted(function() {
        setTimeout(function() {
            Fh()
        }, 10)
    }),
    C.hookTouchEvents(kn)),
    Vn.onclick = C.checkTrusted(function() {
        kf()
    }),
    C.hookTouchEvents(Vn),
    lr.onclick = C.checkTrusted(function() {
        lf()
    }),
    C.hookTouchEvents(lr),
    cr.onclick = C.checkTrusted(function() {
        mf()
    }),
    C.hookTouchEvents(cr),
    hr.onclick = C.checkTrusted(function() {
        Po()
    }),
    C.hookTouchEvents(hr),
    me.onclick = C.checkTrusted(function() {
        Oo()
    }),
    C.hookTouchEvents(me)
}
let xi;
const Qh = {
    view: ()=>{
        if (!qe.servers)
            return;
        let e = 0;
        const t = Object.keys(qe.servers).map(i=>{
            const s = qe.regionInfo[i].name;
            let n = 0;
            const r = qe.servers[i].map(o=>{
                var h;
                n += o.playerCount;
                const l = o.selected;
                let c = s + " " + o.name + " [" + Math.min(o.playerCount, o.playerCapacity) + "/" + o.playerCapacity + "]";
                const a = o.name
                  , u = l ? "selected" : "";
                o.ping && ((h = o.pings) == null ? void 0 : h.length) >= 2 ? c += ` [${Math.floor(o.ping)}ms]` : l || (c += " [?]");
                let p = {
                    value: i + ":" + a
                };
                return u && (xi = i + ":" + a,
                p.selected = !0),
                Ne("option", p, c)
            }
            );
            return e += n,
            [Ne("option[disabled]", `${s} - ${n} players`), r, Ne("option[disabled]")]
        }
        );
        return Ne("select", {
            value: xi,
            onfocus: ()=>{
                window.blockRedraw = !0
            }
            ,
            onblur: ()=>{
                window.blockRedraw = !1
            }
            ,
            onchange: ef
        }, [t, Ne("option[disabled]", `All Servers - ${e} players`)])
    }
};
Ne.mount(Uh, Qh);
var Un, Nn;
location.hostname == "sandbox.moomoo.io" ? (Un = "Back to MooMoo",
Nn = "//moomoo.io/") : (Un = "Try the sandbox",
Nn = "//sandbox.moomoo.io/");
document.getElementById("altServer").innerHTML = "<a href='" + Nn + "'>" + Un + "<i class='material-icons' style='font-size:10px;vertical-align:middle'>arrow_forward_ios</i></a>";
const Zh = `${ui}/servers?v=1.22`
  , vo = async()=>fetch(Zh).then(e=>e.json()).then(async e=>qe.processServers(e)).catch(e=>{
    console.error("Failed to load server data with status code:", e)
}
)
  , jh = ()=>vo().then(Kh).catch(e=>{
    console.error("Failed to load.")
}
);
window.frvrSdkInitPromise.then(()=>window.FRVR.bootstrapper.complete()).then(()=>jh());
const ef = e=>{
    if (window.blockRedraw = !1,
    FRVR.channelCharacteristics.allowNavigation) {
        const [t,i] = e.target.value.split(":");
        qe.switchServer(t, i)
    } else
        ki && (ki = !1,
        zn = !1,
        Hn = !0,
        Mi = !0,
        ee.close())
}
;
document.getElementById("pre-content-container");
function tf() {
    FRVR.ads.show("interstitial", vs)
}
window.showPreAd = tf;
function Se(e, t, i) {
    if (E && e) {
        if (C.removeAllChildren(Ue),
        Ue.classList.add("visible"),
        C.generateElement({
            id: "itemInfoName",
            text: C.capitalizeFirst(e.name),
            parent: Ue
        }),
        C.generateElement({
            id: "itemInfoDesc",
            text: e.desc,
            parent: Ue
        }),
        !i)
            if (t)
                C.generateElement({
                    class: "itemInfoReq",
                    text: e.type ? "secondary" : "primary",
                    parent: Ue
                });
            else {
                for (let n = 0; n < e.req.length; n += 2)
                    C.generateElement({
                        class: "itemInfoReq",
                        html: e.req[n] + "<span class='itemInfoReqVal'> x" + e.req[n + 1] + "</span>",
                        parent: Ue
                    });
                const s = fo ? e.group.sandboxLimit || Math.max(e.group.limit * 3, 99) : e.group.limit;
                e.group.limit && C.generateElement({
                    class: "itemInfoLmt",
                    text: (E.itemCounts[e.group.id] || 0) + "/" + s,
                    parent: Ue
                })
            }
    } else
        Ue.classList.remove("visible")
}
let Pt = []
  , wt = [];
function nf(e, t) {
    Pt.push({
        sid: e,
        name: t
    }),
    ps()
}
function ps() {
    if (Pt[0]) {
        const e = Pt[0];
        C.removeAllChildren(ft),
        ft.style.display = "block",
        C.generateElement({
            class: "notificationText",
            text: e.name,
            parent: ft
        }),
        C.generateElement({
            class: "notifButton",
            html: "<i class='material-icons' style='font-size:28px;color:#cc5151;'>&#xE14C;</i>",
            parent: ft,
            onclick: function() {
                Wn(0)
            },
            hookTouch: !0
        }),
        C.generateElement({
            class: "notifButton",
            html: "<i class='material-icons' style='font-size:28px;color:#8ecc51;'>&#xE876;</i>",
            parent: ft,
            onclick: function() {
                Wn(1)
            },
            hookTouch: !0
        })
    } else
        ft.style.display = "none"
}
function sf(e) {
    Oe.push(e),
    Te.style.display == "block" && ei()
}
function rf(e, t) {
    E && (E.team = e,
    E.isOwner = t,
    Te.style.display == "block" && ei())
}
function of(e) {
    wt = e,
    Te.style.display == "block" && ei()
}
function af(e) {
    for (let t = Oe.length - 1; t >= 0; t--)
        Oe[t].sid == e && Oe.splice(t, 1);
    Te.style.display == "block" && ei()
}
function lf() {
    ks(),
    Te.style.display != "block" ? ei() : qn()
}
function qn() {
    Te.style.display == "block" && (Te.style.display = "none")
}
function ei() {
    if (E && E.alive) {
        if (Ri(),
        We.style.display = "none",
        Te.style.display = "block",
        C.removeAllChildren(ri),
        E.team)
            for (var e = 0; e < wt.length; e += 2)
                (function(t) {
                    const i = C.generateElement({
                        class: "allianceItem",
                        style: "color:" + (wt[t] == E.sid ? "#fff" : "rgba(255,255,255,0.6)"),
                        text: wt[t + 1],
                        parent: ri
                    });
                    E.isOwner && wt[t] != E.sid && C.generateElement({
                        class: "joinAlBtn",
                        text: "Kick",
                        onclick: function() {
                            xo(wt[t])
                        },
                        hookTouch: !0,
                        parent: i
                    })
                }
                )(e);
        else if (Oe.length)
            for (var e = 0; e < Oe.length; ++e)
                (function(i) {
                    const s = C.generateElement({
                        class: "allianceItem",
                        style: "color:" + (Oe[i].sid == E.team ? "#fff" : "rgba(255,255,255,0.6)"),
                        text: Oe[i].sid,
                        parent: ri
                    });
                    C.generateElement({
                        class: "joinAlBtn",
                        text: "Join",
                        onclick: function() {
                            bo(i)
                        },
                        hookTouch: !0,
                        parent: s
                    })
                }
                )(e);
        else
            C.generateElement({
                class: "allianceItem",
                text: "No Tribes Yet",
                parent: ri
            });
        C.removeAllChildren(oi),
        E.team ? C.generateElement({
            class: "allianceButtonM",
            style: "width: 360px",
            text: E.isOwner ? "Delete Tribe" : "Leave Tribe",
            onclick: function() {
                So()
            },
            hookTouch: !0,
            parent: oi
        }) : (C.generateElement({
            tag: "input",
            type: "text",
            id: "allianceInput",
            maxLength: 7,
            placeholder: "unique name",
            onchange: t=>{
                t.target.value = (t.target.value || "").slice(0, 7)
            }
            ,
            onkeypress: t=>{
                if (t.key === "Enter")
                    return t.preventDefault(),
                    Xn(),
                    !1
            }
            ,
            parent: oi
        }),
        C.generateElement({
            tag: "div",
            class: "allianceButtonM",
            style: "width: 140px;",
            text: "Create",
            onclick: function() {
                Xn()
            },
            hookTouch: !0,
            parent: oi
        }))
    }
}
function Wn(e) {
    ee.send("P", Pt[0].sid, e),
    Pt.splice(0, 1),
    ps()
}
function xo(e) {
    ee.send("Q", e)
}
function bo(e) {
    ee.send("b", Oe[e].sid)
}
function Xn() {
    ee.send("L", document.getElementById("allianceInput").value)
}
function So() {
    Pt = [],
    ps(),
    ee.send("N")
}
let pi, Ht, je;
const bt = [];
let Je;
function cf() {
    this.init = function(e, t) {
        this.scale = 0,
        this.x = e,
        this.y = t,
        this.active = !0
    }
    ,
    this.update = function(e, t) {
        this.active && (this.scale += .05 * t,
        this.scale >= T.mapPingScale ? this.active = !1 : (e.globalAlpha = 1 - Math.max(0, this.scale / T.mapPingScale),
        e.beginPath(),
        e.arc(this.x / T.mapScale * me.width, this.y / T.mapScale * me.width, this.scale, 0, 2 * Math.PI),
        e.stroke()))
    }
}
function hf(e, t) {
    for (let i = 0; i < bt.length; ++i)
        if (!bt[i].active) {
            Je = bt[i];
            break
        }
    Je || (Je = new cf,
    bt.push(Je)),
    Je.init(e, t)
}
function ff() {
    je || (je = {}),
    je.x = E.x,
    je.y = E.y
}
function uf(e) {
    Ht = e
}
function df(e) {
    if (E && E.alive) {
        ce.clearRect(0, 0, me.width, me.height),
        ce.strokeStyle = "#fff",
        ce.lineWidth = 4;
        for (var t = 0; t < bt.length; ++t)
            Je = bt[t],
            Je.update(ce, e);
        if (ce.globalAlpha = 1,
        ce.fillStyle = "#fff",
        Q(E.x / T.mapScale * me.width, E.y / T.mapScale * me.height, 7, ce, !0),
        ce.fillStyle = "rgba(255,255,255,0.35)",
        E.team && Ht)
            for (var t = 0; t < Ht.length; )
                Q(Ht[t] / T.mapScale * me.width, Ht[t + 1] / T.mapScale * me.height, 7, ce, !0),
                t += 2;
        pi && (ce.fillStyle = "#fc5553",
        ce.font = "34px Hammersmith One",
        ce.textBaseline = "middle",
        ce.textAlign = "center",
        ce.fillText("x", pi.x / T.mapScale * me.width, pi.y / T.mapScale * me.height)),
        je && (ce.fillStyle = "#fff",
        ce.font = "34px Hammersmith One",
        ce.textBaseline = "middle",
        ce.textAlign = "center",
        ce.fillText("x", je.x / T.mapScale * me.width, je.y / T.mapScale * me.height))
    }
}
let Gn = 0;
function pf(e) {
    Gn != e && (Gn = e,
    ms())
}
function mf() {
    We.style.display != "block" ? (We.style.display = "block",
    Te.style.display = "none",
    Ri(),
    ms()) : Yn()
}
function Yn() {
    We.style.display == "block" && (We.style.display = "none",
    Se())
}
function gf(e, t, i) {
    i ? e ? E.tailIndex = t : E.tails[t] = 1 : e ? E.skinIndex = t : E.skins[t] = 1,
    We.style.display == "block" && ms()
}
function ms() {
    if (E) {
        C.removeAllChildren(gr);
        const e = Gn
          , t = e ? Gt : Xt;
        for (let i = 0; i < t.length; ++i)
            t[i].dontSell || function(s) {
                const n = C.generateElement({
                    id: "storeDisplay" + s,
                    class: "storeItem",
                    onmouseout: function() {
                        Se()
                    },
                    onmouseover: function() {
                        Se(t[s], !1, !0)
                    },
                    parent: gr
                });
                C.hookTouchEvents(n, !0),
                C.generateElement({
                    tag: "img",
                    class: "hatPreview",
                    src: "./img/" + (e ? "accessories/access_" : "hats/hat_") + t[s].id + (t[s].topSprite ? "_p" : "") + ".png",
                    parent: n
                }),
                C.generateElement({
                    tag: "span",
                    text: t[s].name,
                    parent: n
                }),
                (e ? !E.tails[t[s].id] : !E.skins[t[s].id]) ? (C.generateElement({
                    class: "joinAlBtn",
                    style: "margin-top: 5px",
                    text: "Buy",
                    onclick: function() {
                        To(t[s].id, e)
                    },
                    hookTouch: !0,
                    parent: n
                }),
                C.generateElement({
                    tag: "span",
                    class: "itemPrice",
                    text: t[s].price,
                    parent: n
                })) : (e ? E.tailIndex : E.skinIndex) == t[s].id ? C.generateElement({
                    class: "joinAlBtn",
                    style: "margin-top: 5px",
                    text: "Unequip",
                    onclick: function() {
                        $n(0, e)
                    },
                    hookTouch: !0,
                    parent: n
                }) : C.generateElement({
                    class: "joinAlBtn",
                    style: "margin-top: 5px",
                    text: "Equip",
                    onclick: function() {
                        $n(t[s].id, e)
                    },
                    hookTouch: !0,
                    parent: n
                })
            }(i)
    }
}
function $n(e, t) {
    ee.send("c", 0, e, t)
}
function To(e, t) {
    ee.send("c", 1, e, t)
}
function Io() {
    We.style.display = "none",
    Te.style.display = "none",
    Ri()
}
function yf() {
    const e = Nt("native_resolution");
    bn(e ? e == "true" : typeof cordova < "u"),
    $e = Nt("show_ping") == "true",
    Jt.hidden = !$e || !Kt,
    Nt("moo_moosic"),
    setInterval(function() {
        window.cordova && (document.getElementById("downloadButtonContainer").classList.add("cordova"),
        document.getElementById("mobileDownloadButtonContainer").classList.add("cordova"))
    }, 1e3),
    Eo(),
    C.removeAllChildren(ur);
    for (var t = 0; t < R.weapons.length + R.list.length; ++t)
        (function(i) {
            C.generateElement({
                id: "actionBarItem" + i,
                class: "actionBarItem",
                style: "display:none",
                onmouseout: function() {
                    Se()
                },
                parent: ur
            })
        }
        )(t);
    for (var t = 0; t < R.list.length + R.weapons.length; ++t)
        (function(s) {
            const n = document.createElement("canvas");
            n.width = n.height = 66;
            const r = n.getContext("2d");
            if (r.translate(n.width / 2, n.height / 2),
            r.imageSmoothingEnabled = !1,
            r.webkitImageSmoothingEnabled = !1,
            r.mozImageSmoothingEnabled = !1,
            R.weapons[s]) {
                r.rotate(Math.PI / 4 + Math.PI);
                var o = new Image;
                Qn[R.weapons[s].src] = o,
                o.onload = function() {
                    this.isLoaded = !0;
                    const c = 1 / (this.height / this.width)
                      , a = R.weapons[s].iPad || 1;
                    r.drawImage(this, -(n.width * a * T.iconPad * c) / 2, -(n.height * a * T.iconPad) / 2, n.width * a * c * T.iconPad, n.height * a * T.iconPad),
                    r.fillStyle = "rgba(0, 0, 70, 0.1)",
                    r.globalCompositeOperation = "source-atop",
                    r.fillRect(-n.width / 2, -n.height / 2, n.width, n.height),
                    document.getElementById("actionBarItem" + s).style.backgroundImage = "url(" + n.toDataURL() + ")"
                }
                ,
                o.src = "./img/weapons/" + R.weapons[s].src + ".png";
                var l = document.getElementById("actionBarItem" + s);
                l.onmouseover = C.checkTrusted(function() {
                    Se(R.weapons[s], !0)
                }),
                l.onclick = C.checkTrusted(function() {
                    Yt(s, !0)
                }),
                C.hookTouchEvents(l)
            } else {
                var o = xs(R.list[s - R.weapons.length], !0);
                const a = Math.min(n.width - T.iconPadding, o.width);
                r.globalAlpha = 1,
                r.drawImage(o, -a / 2, -a / 2, a, a),
                r.fillStyle = "rgba(0, 0, 70, 0.1)",
                r.globalCompositeOperation = "source-atop",
                r.fillRect(-a / 2, -a / 2, a, a),
                document.getElementById("actionBarItem" + s).style.backgroundImage = "url(" + n.toDataURL() + ")";
                var l = document.getElementById("actionBarItem" + s);
                l.onmouseover = C.checkTrusted(function() {
                    Se(R.list[s - R.weapons.length])
                }),
                l.onclick = C.checkTrusted(function() {
                    Yt(s - R.weapons.length)
                }),
                C.hookTouchEvents(l)
            }
        }
        )(t);
    Zt.onchange = i=>{
        i.target.value = (i.target.value || "").slice(0, 15)
    }
    ,
    Zt.onkeypress = i=>{
        if (i.key === "Enter")
            return i.preventDefault(),
            Fn.onclick(i),
            !1
    }
    ,
    Ln.checked = mo,
    Ln.onchange = C.checkTrusted(function(i) {
        bn(i.target.checked)
    }),
    vn.checked = $e,
    vn.onchange = C.checkTrusted(function(i) {
        $e = vn.checked,
        Jt.hidden = !$e,
        Di("show_ping", $e ? "true" : "false")
    })
}
function Mo(e, t) {
    e && (t ? E.weapons = e : E.items = e);
    for (var i = 0; i < R.list.length; ++i) {
        const s = R.weapons.length + i;
        document.getElementById("actionBarItem" + s).style.display = E.items.indexOf(R.list[i].id) >= 0 ? "inline-block" : "none"
    }
    for (var i = 0; i < R.weapons.length; ++i)
        document.getElementById("actionBarItem" + i).style.display = E.weapons[R.weapons[i].type] == R.weapons[i].id ? "inline-block" : "none"
}
function bn(e) {
    mo = e,
    mt = e && window.devicePixelRatio || 1,
    Ln.checked = e,
    Di("native_resolution", e.toString()),
    gs()
}
function wf() {
    ti ? qt.classList.add("touch") : qt.classList.remove("touch")
}
function kf() {
    qt.classList.contains("showing") ? (qt.classList.remove("showing"),
    ar.innerText = "Settings") : (qt.classList.add("showing"),
    ar.innerText = "Close")
}
function Eo() {
    let e = "";
    for (let t = 0; t < T.skinColors.length; ++t)
        t == cs ? e += "<div class='skinColorItem activeSkin' style='background-color:" + T.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>" : e += "<div class='skinColorItem' style='background-color:" + T.skinColors[t] + "' onclick='selectSkinColor(" + t + ")'></div>";
    Yh.innerHTML = e
}
function vf(e) {
    cs = e,
    Eo()
}
const Ft = document.getElementById("chatBox")
  , bi = document.getElementById("chatHolder");
function Po() {
    ti ? setTimeout(function() {
        const e = prompt("chat message");
        e && wr(e)
    }, 1) : bi.style.display == "block" ? (Ft.value && wr(Ft.value),
    Ri()) : (We.style.display = "none",
    Te.style.display = "none",
    bi.style.display = "block",
    Ft.focus(),
    ks()),
    Ft.value = ""
}
function wr(e) {
    ee.send("6", e.slice(0, 30))
}
function Ri() {
    Ft.value = "",
    bi.style.display = "none"
}
function xf(e, t) {
    const i = _i(e);
    i && (i.chatMessage = t,
    i.chatCountdown = T.chatCountdown)
}
window.addEventListener("resize", C.checkTrusted(gs));
function gs() {
    gt = window.innerWidth,
    yt = window.innerHeight;
    const e = Math.max(gt / se, yt / re) * mt;
    xt.width = gt * mt,
    xt.height = yt * mt,
    xt.style.width = gt + "px",
    xt.style.height = yt + "px",
    M.setTransform(e, 0, 0, e, (gt * mt - se * e) / 2, (yt * mt - re * e) / 2)
}
gs();
let ti;
tt(!1);
function tt(e) {
    ti = e,
    wf()
}
window.setUsingTouch = tt;
let bf = document.getElementById("leaderboardButton")
  , Co = document.getElementById("leaderboard");
bf.addEventListener("touchstart", ()=>{
    Co.classList.add("is-showing")
}
);
const ys = ()=>{
    Co.classList.remove("is-showing")
}
;
document.body.addEventListener("touchend", ys);
document.body.addEventListener("touchleave", ys);
document.body.addEventListener("touchcancel", ys);
if (!uo) {
    let t = function(n) {
        n.preventDefault(),
        n.stopPropagation(),
        tt(!1),
        wo = n.clientX,
        ko = n.clientY
    }
      , i = function(n) {
        tt(!1),
        Ee != 1 && (Ee = 1,
        it())
    }
      , s = function(n) {
        tt(!1),
        Ee != 0 && (Ee = 0,
        it())
    };
    var fu = t
      , uu = i
      , du = s;
    const e = document.getElementById("touch-controls-fullscreen");
    e.style.display = "block",
    e.addEventListener("mousemove", t, !1),
    e.addEventListener("mousedown", i, !1),
    e.addEventListener("mouseup", s, !1)
}
let Kn = !1, Ao;
function Sf() {
    let e = 0, t = 0, i;
    if (ti) {
        if (!Kn)
            return;
        i = Ao
    }
    for (const s in Ti) {
        const n = Ti[s];
        e += !!He[s] * n[0],
        t += !!He[s] * n[1]
    }
    if ((e != 0 || t != 0) && (i = Math.atan2(t, e)),
    i !== void 0)
        return C.fixTo(i, 2)
}
let Si;
function ws() {
    return E ? (!E.lockDir && !ti && (Si = Math.atan2(ko - yt / 2, wo - gt / 2)),
    C.fixTo(Si || 0, 2)) : 0
}
var He = {}
  , Ti = {
    87: [0, -1],
    38: [0, -1],
    83: [0, 1],
    40: [0, 1],
    65: [-1, 0],
    37: [-1, 0],
    68: [1, 0],
    39: [1, 0]
};
function ks() {
    He = {},
    ee.send("e")
}
function Do() {
    return Te.style.display != "block" && bi.style.display != "block"
}
function Tf(e) {
    const t = e.which || e.keyCode || 0;
    t == 27 ? Io() : E && E.alive && Do() && (He[t] || (He[t] = 1,
    t == 69 ? Ef() : t == 67 ? ff() : t == 88 ? Mf() : E.weapons[t - 49] != null ? Yt(E.weapons[t - 49], !0) : E.items[t - 49 - E.weapons.length] != null ? Yt(E.items[t - 49 - E.weapons.length]) : t == 81 ? Yt(E.items[0]) : t == 82 ? Oo() : Ti[t] ? Ii() : t == 32 && (Ee = 1,
    it())))
}
window.addEventListener("keydown", C.checkTrusted(Tf));
function If(e) {
    if (E && E.alive) {
        const t = e.which || e.keyCode || 0;
        if (t == 13) {
            if (Te.style.display === "block")
                return;
            Po()
        } else
            Do() && He[t] && (He[t] = 0,
            Ti[t] ? Ii() : t == 32 && (Ee = 0,
            it()))
    }
}
window.addEventListener("keyup", C.checkTrusted(If));
function it() {
    E && E.alive && ee.send("d", Ee, E.buildIndex >= 0 ? ws() : null)
}
let Sn;
function Ii() {
    const e = Sf();
    (Sn == null || e == null || Math.abs(e - Sn) > .3) && (ee.send("a", e),
    Sn = e)
}
function Mf() {
    E.lockDir = E.lockDir ? 0 : 1,
    ee.send("K", 0)
}
function Oo() {
    ee.send("S", 1)
}
function Ef() {
    ee.send("K", 1)
}
function Yt(e, t) {
    ee.send("G", e, t)
}
window.io = ee;
function vs() {
    Jt.hidden = !$e,
    window.onbeforeunload = function(e) {
        return "Are you sure?"
    }
    ,
    window.FRVR && window.FRVR.tracker.levelStart("game_start"),
    Di("moo_name", Zt.value),
    !Kt && as() && (Kt = !0,
    Vh.stop("menu"),
    ds("Loading..."),
    ee.send("M", {
        name: Zt.value,
        moofoll: vi,
        skin: cs
    })),
    Pf()
}
function Pf() {
    var e = document.getElementById("ot-sdk-btn-floating");
    e && (e.style.display = "none")
}
function Cf() {
    var e = document.getElementById("ot-sdk-btn-floating");
    e && (e.style.display = "block")
}
let Mi = !0
  , Tn = !1;
function Af(e) {
    Et.style.display = "none",
    Qt.style.display = "block",
    Oi.style.display = "none",
    He = {},
    yo = e,
    Ee = 0,
    Kt = !0,
    Mi && (Mi = !1,
    et.length = 0),
    uo && Dh.enable({
        onStartMoving: ()=>{
            Yn(),
            qn(),
            tt(!0),
            Kn = !0
        }
        ,
        onStopMoving: ()=>{
            Kn = !1,
            Ii()
        }
        ,
        onRotateMoving: (t,i)=>{
            i.force < .25 || (Ao = -i.angle.radian,
            Ii(),
            Tn || (Si = -i.angle.radian))
        }
        ,
        onStartAttacking: ()=>{
            Yn(),
            qn(),
            tt(!0),
            Tn = !0,
            E.buildIndex < 0 && (Ee = 1,
            it())
        }
        ,
        onStopAttacking: ()=>{
            E.buildIndex >= 0 && (Ee = 1,
            it()),
            Ee = 0,
            it(),
            Tn = !1
        }
        ,
        onRotateAttacking: (t,i)=>{
            i.force < .25 || (Si = -i.angle.radian)
        }
    })
}
function Df(e, t, i, s) {
    s === -1 ? Bn.showText(e, t, 50, .18, 500, i, "#ee5551") : Bn.showText(e, t, 50, .18, 500, Math.abs(i), i >= 0 ? "#ee5551" : "#8aec29")
}
let mi = 99999;
function Of() {
    Kt = !1,
    Cf();
    try {
        factorem.refreshAds([2], !0)
    } catch {}
    hs.style.display = "none",
    Io(),
    pi = {
        x: E.x,
        y: E.y
    },
    Et.style.display = "none",
    Wt.style.display = "block",
    Wt.style.fontSize = "0px",
    mi = 0,
    setTimeout(function() {
        Qt.style.display = "block",
        Oi.style.display = "block",
        Wt.style.display = "none"
    }, T.deathFadeout),
    vo()
}
function Rf(e) {
    E && ue.removeAllItems(e)
}
function _f(e) {
    ue.disableBySid(e)
}
function Ro() {
    Nh.innerText = E.points,
    qh.innerText = E.food,
    Wh.innerText = E.wood,
    Xh.innerText = E.stone,
    Gh.innerText = E.kills
}
const Vt = {}
  , In = ["crown", "skull"];
function Bf() {
    for (let e = 0; e < In.length; ++e) {
        const t = new Image;
        t.onload = function() {
            this.isLoaded = !0
        }
        ,
        t.src = "./img/icons/" + In[e] + ".png",
        Vt[In[e]] = t
    }
}
const ut = [];
function _o(e, t) {
    if (E.upgradePoints = e,
    E.upgrAge = t,
    e > 0) {
        ut.length = 0,
        C.removeAllChildren(ht);
        for (var i = 0; i < R.weapons.length; ++i)
            if (R.weapons[i].age == t && (R.weapons[i].pre == null || E.weapons.indexOf(R.weapons[i].pre) >= 0)) {
                var s = C.generateElement({
                    id: "upgradeItem" + i,
                    class: "actionBarItem",
                    onmouseout: function() {
                        Se()
                    },
                    parent: ht
                });
                s.style.backgroundImage = document.getElementById("actionBarItem" + i).style.backgroundImage,
                ut.push(i)
            }
        for (var i = 0; i < R.list.length; ++i)
            if (R.list[i].age == t && (R.list[i].pre == null || E.items.indexOf(R.list[i].pre) >= 0)) {
                const r = R.weapons.length + i;
                var s = C.generateElement({
                    id: "upgradeItem" + r,
                    class: "actionBarItem",
                    onmouseout: function() {
                        Se()
                    },
                    parent: ht
                });
                s.style.backgroundImage = document.getElementById("actionBarItem" + r).style.backgroundImage,
                ut.push(r)
            }
        for (var i = 0; i < ut.length; i++)
            (function(r) {
                const o = document.getElementById("upgradeItem" + r);
                o.onmouseover = function() {
                    R.weapons[r] ? Se(R.weapons[r], !0) : Se(R.list[r - R.weapons.length])
                }
                ,
                o.onclick = C.checkTrusted(function() {
                    ee.send("H", r)
                }),
                C.hookTouchEvents(o)
            }
            )(ut[i]);
        ut.length ? (ht.style.display = "block",
        si.style.display = "block",
        si.innerHTML = "SELECT ITEMS (" + e + ")") : (ht.style.display = "none",
        si.style.display = "none",
        Se())
    } else
        ht.style.display = "none",
        si.style.display = "none",
        Se()
}
function Bo(e, t, i) {
    e != null && (E.XP = e),
    t != null && (E.maxXP = t),
    i != null && (E.age = i),
    i == T.maxAge ? (pr.innerHTML = "MAX AGE",
    mr.style.width = "100%") : (pr.innerHTML = "AGE " + E.age,
    mr.style.width = E.XP / E.maxXP * 100 + "%")
}
function zf(e) {
    C.removeAllChildren(dr);
    let t = 1;
    for (let i = 0; i < e.length; i += 3)
        (function(s) {
            C.generateElement({
                class: "leaderHolder",
                parent: dr,
                children: [C.generateElement({
                    class: "leaderboardItem",
                    style: "color:" + (e[s] == yo ? "#fff" : "rgba(255,255,255,0.6)"),
                    text: t + ". " + (e[s + 1] != "" ? e[s + 1] : "unknown")
                }), C.generateElement({
                    class: "leaderScore",
                    text: C.kFormat(e[s + 2]) || "0"
                })]
            })
        }
        )(i),
        t++
}
let kr = null;
function Hf() {
    {
        if (E && (!gn || It - gn >= 1e3 / T.clientSendRate)) {
            gn = It;
            const a = ws();
            kr !== a && (kr = a,
            ee.send("D", a))
        }
        if (mi < 120 && (mi += .1 * be,
        Wt.style.fontSize = Math.min(Math.round(mi), 120) + "px"),
        E) {
            const a = C.getDistance(Re, _e, E.x, E.y)
              , u = C.getDirection(E.x, E.y, Re, _e)
              , p = Math.min(a * .01 * be, a);
            a > .05 ? (Re += p * Math.cos(u),
            _e += p * Math.sin(u)) : (Re = E.x,
            _e = E.y)
        } else
            Re = T.mapScale / 2,
            _e = T.mapScale / 2;
        const o = It - 1e3 / T.serverUpdateRate;
        for (var e, t = 0; t < J.length + ye.length; ++t)
            if (y = J[t] || ye[t - J.length],
            y && y.visible)
                if (y.forcePos)
                    y.x = y.x2,
                    y.y = y.y2,
                    y.dir = y.d2;
                else {
                    const a = y.t2 - y.t1
                      , p = (o - y.t1) / a
                      , h = 170;
                    y.dt += be;
                    const m = Math.min(1.7, y.dt / h);
                    var e = y.x2 - y.x1;
                    y.x = y.x1 + e * m,
                    e = y.y2 - y.y1,
                    y.y = y.y1 + e * m,
                    y.dir = Math.lerpAngle(y.d2, y.d1, Math.min(1.2, p))
                }
        const l = Re - se / 2
          , c = _e - re / 2;//kolory biomow
        T.snowBiomeTop - c <= 0 && T.mapScale - T.snowBiomeTop - c >= re ? (M.fillStyle = "#92af52", //trawa
        M.fillRect(0, 0, se, re)) : T.mapScale - T.snowBiomeTop - c <= 0 ? (M.fillStyle = "#8f813f",//pustynia
        M.fillRect(0, 0, se, re)) : T.snowBiomeTop - c >= re ? (M.fillStyle = "#f5f5f5",//zima
        M.fillRect(0, 0, se, re)) : T.snowBiomeTop - c >= 0 ? (M.fillStyle = "#f5f5f5", //zima
        M.fillRect(0, 0, se, T.snowBiomeTop - c),
        M.fillStyle = "#92af52",//trawa
        M.fillRect(0, T.snowBiomeTop - c, se, re - (T.snowBiomeTop - c))) : (M.fillStyle = "#92af52",//zeima
        M.fillRect(0, 0, se, T.mapScale - T.snowBiomeTop - c),
        M.fillStyle = "#8f813f",//pustynia
        M.fillRect(0, T.mapScale - T.snowBiomeTop - c, se, re - (T.mapScale - T.snowBiomeTop - c))),
        Mi || (ct += yn * T.waveSpeed * be,
        ct >= T.waveMax ? (ct = T.waveMax,
        yn = -1) : ct <= 1 && (ct = yn = 1),
        M.globalAlpha = 1,
        M.fillStyle = "#ffd966",
        br(l, c, M, T.riverPadding),
        M.fillStyle = "#674ea7",
        br(l, c, M, (ct - 1) * 250)),
        M.lineWidth = 4,
        M.strokeStyle = "#000",
        M.globalAlpha = .06,
        M.beginPath();
        for (var i = -Re; i < se; i += re / 18)
            i > 0 && (M.moveTo(i, 0),
            M.lineTo(i, re));
        for (let a = -_e; a < re; a += re / 18)
            i > 0 && (M.moveTo(0, a),
            M.lineTo(se, a));
        M.stroke(),
        M.globalAlpha = 1,
        M.strokeStyle = jt,
        zt(-1, l, c),
        M.globalAlpha = 1,
        M.lineWidth = Xe,
        vr(0, l, c),
        Sr(l, c, 0),
        M.globalAlpha = 1;
        for (var t = 0; t < ye.length; ++t)
            y = ye[t],
            y.active && y.visible && (y.animate(be),
            M.save(),
            M.translate(y.x - l, y.y - c),
            M.rotate(y.dir + y.dirPlus - Math.PI / 2),
            tu(y, M),
            M.restore());
        if (zt(0, l, c),
        vr(1, l, c),
        zt(1, l, c),
        Sr(l, c, 1),
        zt(2, l, c),
        zt(3, l, c),
        M.fillStyle = "#000",
        M.globalAlpha = .09,
        l <= 0 && M.fillRect(0, 0, -l, re),
        T.mapScale - l <= se) {
            var s = Math.max(0, -c);
            M.fillRect(T.mapScale - l, s, se - (T.mapScale - l), re - s)
        }
        if (c <= 0 && M.fillRect(-l, 0, se + l, -c),
        T.mapScale - c <= re) {
            var n = Math.max(0, -l);
            let a = 0;
            T.mapScale - l <= se && (a = se - (T.mapScale - l)),
            M.fillRect(n, T.mapScale - c, se - n - a, re - (T.mapScale - c))
        }
        M.globalAlpha = 1,
        M.fillStyle = "rgba(0, 0, 70, 0.35)",
        M.fillRect(0, 0, se, re),
        M.strokeStyle = yr;
        for (var t = 0; t < J.length + ye.length; ++t)
            if (y = J[t] || ye[t - J.length],
            y.visible && (y.skinIndex != 10 || y == E || y.team && y.team == E.team)) {
                const u = (y.team ? "[" + y.team + "] " : "") + (y.name || "");
                if (u != "") {
                    if (M.font = (y.nameScale || 30) + "px Hammersmith One",
                    M.fillStyle = "#fff",
                    M.textBaseline = "middle",
                    M.textAlign = "center",
                    M.lineWidth = y.nameScale ? 11 : 8,
                    M.lineJoin = "round",
                    M.strokeText(u, y.x - l, y.y - c - y.scale - T.nameY),
                    M.fillText(u, y.x - l, y.y - c - y.scale - T.nameY),
                    y.isLeader && Vt.crown.isLoaded) {
                        var r = T.crownIconScale
                          , n = y.x - l - r / 2 - M.measureText(u).width / 2 - T.crownPad;
                        M.drawImage(Vt.crown, n, y.y - c - y.scale - T.nameY - r / 2 - 5, r, r)
                    }
                    if (y.iconIndex == 1 && Vt.skull.isLoaded) {
                        var r = T.crownIconScale
                          , n = y.x - l - r / 2 + M.measureText(u).width / 2 + T.crownPad;
                        M.drawImage(Vt.skull, n, y.y - c - y.scale - T.nameY - r / 2 - 5, r, r)
                    }
                }
                y.health > 0 && (T.healthBarWidth,
                M.fillStyle = yr,
                M.roundRect(y.x - l - T.healthBarWidth - T.healthBarPad, y.y - c + y.scale + T.nameY, T.healthBarWidth * 2 + T.healthBarPad * 2, 17, 8),
                M.fill(),
                M.fillStyle = y == E || y.team && y.team == E.team ? "#44fcf4" : "#e06666",//health bar collor health bar color
                M.roundRect(y.x - l - T.healthBarWidth, y.y - c + y.scale + T.nameY + T.healthBarPad, T.healthBarWidth * 2 * (y.health / y.maxHealth), 17 - T.healthBarPad * 2, 7),
                M.fill())
            }
        Bn.update(be, M, l, c);
        for (var t = 0; t < J.length; ++t)
            if (y = J[t],
            y.visible && y.chatCountdown > 0) {
                y.chatCountdown -= be,
                y.chatCountdown <= 0 && (y.chatCountdown = 0),
                M.font = "32px Hammersmith One";
                const u = M.measureText(y.chatMessage);
                M.textBaseline = "middle",
                M.textAlign = "center";
                var n = y.x - l
                  , s = y.y - y.scale - c - 90;
                const m = 47
                  , w = u.width + 17;
                M.fillStyle = "rgba(0,0,0,0.2)",
                M.roundRect(n - w / 2, s - m / 2, w, m, 6),
                M.fill(),
                M.fillStyle = "#fff",
                M.fillText(y.chatMessage, n, s)
            }
    }
    df(be)
}
function vr(e, t, i) {
    for (let s = 0; s < Mt.length; ++s)
        y = Mt[s],
        y.active && y.layer == e && (y.update(be),
        y.active && Ho(y.x - t, y.y - i, y.scale) && (M.save(),
        M.translate(y.x - t, y.y - i),
        M.rotate(y.dir),
        Jn(0, 0, y, M),
        M.restore()))
}
const xr = {};
function Jn(e, t, i, s, n) {
    if (i.src) {
        const r = R.projectiles[i.indx].src;
        let o = xr[r];
        o || (o = new Image,
        o.onload = function() {
            this.isLoaded = !0
        }
        ,
        o.src = "./img/weapons/" + r + ".png",
        xr[r] = o),
        o.isLoaded && s.drawImage(o, e - i.scale / 2, t - i.scale / 2, i.scale, i.scale)
    } else
        i.indx == 1 && (s.fillStyle = "#939393",
        Q(e, t, i.scale, s))
}
function Ff() {
    const e = Re - se / 2
      , t = _e - re / 2;
    Me.animationTime += be,
    Me.animationTime %= T.volcanoAnimationDuration;
    const i = T.volcanoAnimationDuration / 2
      , s = 1.7 + .3 * (Math.abs(i - Me.animationTime) / i)
      , n = T.innerVolcanoScale * s;
    M.drawImage(Me.land, Me.x - T.volcanoScale - e, Me.y - T.volcanoScale - t, T.volcanoScale * 2, T.volcanoScale * 2),
    M.drawImage(Me.lava, Me.x - n - e, Me.y - n - t, n * 2, n * 2)
}
function br(e, t, i, s) {
    const n = T.riverWidth + s
      , r = T.mapScale / 2 - t - n / 2;
    r < re && r + n > 0 && i.fillRect(0, r, se, n)
}
function zt(e, t, i) {
    let s, n, r;
    for (let o = 0; o < et.length; ++o)
        y = et[o],
        y.active && (n = y.x + y.xWiggle - t,
        r = y.y + y.yWiggle - i,
        e == 0 && y.update(be),
        y.layer == e && Ho(n, r, y.scale + (y.blocker || 0)) && (M.globalAlpha = y.hideFromEnemy ? .6 : 1,
        y.isItem ? (s = xs(y),
        M.save(),
        M.translate(n, r),
        M.rotate(y.dir),
        M.drawImage(s, -(s.width / 2), -(s.height / 2)),
        y.blocker && (M.strokeStyle = "#db6e6e",
        M.globalAlpha = .3,
        M.lineWidth = 6,
        Q(0, 0, y.blocker, M, !1, !0)),
        M.restore()) : y.type === 4 ? Ff() : (s = Nf(y),
        M.drawImage(s, n - s.width / 2, r - s.height / 2))))
}
function Vf(e, t, i) {
    y = _i(e),
    y && y.startAnim(t, i)
}
function Sr(e, t, i) {
    M.globalAlpha = 1;
    for (let s = 0; s < J.length; ++s)
        y = J[s],
        y.zIndex == i && (y.animate(be),
        y.visible && (y.skinRot += .002 * be,
        or = (y == E ? ws() : y.dir) + y.dirPlus,
        M.save(),
        M.translate(y.x - e, y.y - t),
        M.rotate(or),
        Lf(y, M),
        M.restore()))
}
function Lf(e, t) {
    t = t || M,
    t.lineWidth = Xe,
    t.lineJoin = "miter";
    const i = Math.PI / 4 * (R.weapons[e.weaponIndex].armS || 1)
      , s = e.buildIndex < 0 && R.weapons[e.weaponIndex].hndS || 1
      , n = e.buildIndex < 0 && R.weapons[e.weaponIndex].hndD || 1;
    if (e.tailIndex > 0 && Uf(e.tailIndex, t, e),
    e.buildIndex < 0 && !R.weapons[e.weaponIndex].aboveHand && (Pr(R.weapons[e.weaponIndex], T.weaponVariants[e.weaponVariant].src, e.scale, 0, t),
    R.weapons[e.weaponIndex].projectile != null && !R.weapons[e.weaponIndex].hideProjectile && Jn(e.scale, 0, R.projectiles[R.weapons[e.weaponIndex].projectile], M)),
    t.fillStyle = T.skinColors[e.skinColor],
    Q(e.scale * Math.cos(i), e.scale * Math.sin(i), 14),
    Q(e.scale * n * Math.cos(-i * s), e.scale * n * Math.sin(-i * s), 14),
    e.buildIndex < 0 && R.weapons[e.weaponIndex].aboveHand && (Pr(R.weapons[e.weaponIndex], T.weaponVariants[e.weaponVariant].src, e.scale, 0, t),
    R.weapons[e.weaponIndex].projectile != null && !R.weapons[e.weaponIndex].hideProjectile && Jn(e.scale, 0, R.projectiles[R.weapons[e.weaponIndex].projectile], M)),
    e.buildIndex >= 0) {
        const r = xs(R.list[e.buildIndex]);
        t.drawImage(r, e.scale - R.list[e.buildIndex].holdOffset, -r.width / 2)
    }
    Q(0, 0, e.scale, t),
    e.skinIndex > 0 && (t.rotate(Math.PI / 2),
    zo(e.skinIndex, t, null, e))
}
const Tr = {}
  , Ir = {};
let De;
function zo(e, t, i, s) {
    if (De = Tr[e],
    !De) {
        const r = new Image;
        r.onload = function() {
            this.isLoaded = !0,
            this.onload = null
        }
        ,
        r.src = "./img/hats/hat_" + e + ".png",
        Tr[e] = r,
        De = r
    }
    let n = i || Ir[e];
    if (!n) {
        for (let r = 0; r < Xt.length; ++r)
            if (Xt[r].id == e) {
                n = Xt[r];
                break
            }
        Ir[e] = n
    }
    De.isLoaded && t.drawImage(De, -n.scale / 2, -n.scale / 2, n.scale, n.scale),
    !i && n.topSprite && (t.save(),
    t.rotate(s.skinRot),
    zo(e + "_top", t, n, s),
    t.restore())
}
const Mr = {}
  , Er = {};
function Uf(e, t, i) {
    if (De = Mr[e],
    !De) {
        const n = new Image;
        n.onload = function() {
            this.isLoaded = !0,
            this.onload = null
        }
        ,
        n.src = "./img/accessories/access_" + e + ".png",
        Mr[e] = n,
        De = n
    }
    let s = Er[e];
    if (!s) {
        for (let n = 0; n < Gt.length; ++n)
            if (Gt[n].id == e) {
                s = Gt[n];
                break
            }
        Er[e] = s
    }
    De.isLoaded && (t.save(),
    t.translate(-20 - (s.xOff || 0), 0),
    s.spin && t.rotate(i.skinRot),
    t.drawImage(De, -(s.scale / 2), -(s.scale / 2), s.scale, s.scale),
    t.restore())
}
var Qn = {};
function Pr(e, t, i, s, n) {
    const r = e.src + (t || "");
    let o = Qn[r];
    o || (o = new Image,
    o.onload = function() {
        this.isLoaded = !0
    }
    ,
    o.src = "./img/weapons/" + r + ".png",
    Qn[r] = o),
    o.isLoaded && n.drawImage(o, i + e.xOff - e.length / 2, s + e.yOff - e.width / 2, e.length, e.width)
}
const Cr = {};
function Nf(e) {
    const t = e.y >= T.mapScale - T.snowBiomeTop ? 2 : e.y <= T.snowBiomeTop ? 1 : 0
      , i = e.type + "_" + e.scale + "_" + t;
    let s = Cr[i];
    if (!s) {
        const r = document.createElement("canvas");
        r.width = r.height = e.scale * 2.1 + Xe;
        const o = r.getContext("2d");
        if (o.translate(r.width / 2, r.height / 2),
        o.rotate(C.randFloat(0, Math.PI)),
        o.strokeStyle = jt,
        o.lineWidth = Xe,
        e.type == 0) {
            let l;
            for (var n = 0; n < 2; ++n)
                l = y.scale * (n ? .5 : 1),
                Ie(o, y.sid % 2 === 0 ? 5 : 7, l, l * .7),
                o.fillStyle = t ? n ? "#fff" : "#e3f1f4" : n ? "#b4db62" : "#9ebf57",
                o.fill(),
                n || o.stroke()
        } else if (e.type == 1)
            if (t == 2)
                o.fillStyle = "#606060",
                Ie(o, 6, e.scale * .3, e.scale * .71),
                o.fill(),
                o.stroke(),
                o.fillStyle = "#89a54c",
                Q(0, 0, e.scale * .55, o),
                o.fillStyle = "#a5c65b",
                Q(0, 0, e.scale * .3, o, !0);
            else {
                Xf(o, 6, y.scale, y.scale * .7),
                o.fillStyle = t ? "#e3f1f4" : "#89a54c",
                o.fill(),
                o.stroke(),
                o.fillStyle = t ? "#6a64af" : "#c15555";
                let l;
                const c = 4
                  , a = Ze / c;
                for (var n = 0; n < c; ++n)
                    l = C.randInt(y.scale / 3.5, y.scale / 2.3),
                    Q(l * Math.cos(a * n), l * Math.sin(a * n), C.randInt(10, 12), o)
            }
        else
            (e.type == 2 || e.type == 3) && (o.fillStyle = e.type == 2 ? t == 2 ? "#938d77" : "#939393" : "#e0c655",
            Ie(o, 3, e.scale, e.scale),
            o.fill(),
            o.stroke(),
            o.fillStyle = e.type == 2 ? t == 2 ? "#b2ab90" : "#bcbcbc" : "#ebdca3",
            Ie(o, 3, e.scale * .55, e.scale * .65),
            o.fill());
        s = r,
        Cr[i] = s
    }
    return s
}
function Ar(e, t, i) {
    const s = e.lineWidth || 0;
    i /= 2,
    e.beginPath();
    let n = Math.PI * 2 / t;
    for (let r = 0; r < t; r++)
        e.lineTo(i + (i - s / 2) * Math.cos(n * r), i + (i - s / 2) * Math.sin(n * r));
    e.closePath()
}
function qf() {
    const t = T.volcanoScale * 2
      , i = document.createElement("canvas");
    i.width = t,
    i.height = t;
    const s = i.getContext("2d");
    s.strokeStyle = "#3e3e3e",
    s.lineWidth = Xe * 2,
    s.fillStyle = "#7f7f7f",
    Ar(s, 10, t),
    s.fill(),
    s.stroke(),
    Me.land = i;
    const n = document.createElement("canvas")
      , r = T.innerVolcanoScale * 2;
    n.width = r,
    n.height = r;
    const o = n.getContext("2d");
    o.strokeStyle = jt,
    o.lineWidth = Xe * 1.6,
    o.fillStyle = "#f54e16",
    o.strokeStyle = "#f56f16",
    Ar(o, 10, r),
    o.fill(),
    o.stroke(),
    Me.lava = n
}
qf();//
const Dr = [];
function xs(e, t) {
    let i = Dr[e.id];
    if (!i || t) {
        const c = document.createElement("canvas");
        c.width = c.height = e.scale * 2.5 + Xe + (R.list[e.id].spritePadding || 0);
        const a = c.getContext("2d");
        if (a.translate(c.width / 2, c.height / 2),
        a.rotate(t ? 0 : Math.PI / 2),
        a.strokeStyle = jt,
        a.lineWidth = Xe * (t ? c.width / 81 : 1),
        e.name == "apple") {
            a.fillStyle = "#e72626",
            Q(0, 0, e.scale, a),
           a.fillStyle = "#89a54c";
/*              // Create an image element for the texture
            const img = new Image();
            img.src = "https://images.vexels.com/content/323037/preview/chocolate-bar-color-stroke-sweet-b840d9.png";

            // When the image is loaded, draw it on the canvas
            img.onload = function() {
                a.drawImage(img, -c.width / 2, -c.height / 2, c.width, c.height);

                // Optionally, add extra details for apple
                a.fillStyle = "#008000";
                a.beginPath();
                a.moveTo(-e.scale * 0.5, e.scale * 0.6);
                a.lineTo(e.scale * 0.5, e.scale * 0.6);
                a.lineTo(0, e.scale * 1.2);
                a.closePath();
                a.fill();

                // Append canvas to the document body or wherever needed
                document.body.appendChild(c);
            };*/
            const u = -(Math.PI / 2);
            Wf(e.scale * Math.cos(u), e.scale * Math.sin(u), 25, u + Math.PI / 2, a)
        } else if (e.name == "cookie") {
// Ustawienia kolorów
a.fillStyle = "#cca861";
Q(0, 0, e.scale, a);
a.fillStyle = "#937c4b";

// Zmienna dla liczby segmentów
var s = 6; // zwiększona liczba segmentów dla bardziej szczegółowego wzoru
var n = Ze / s;

// Pętla do rysowania segmentów
for (var o = 0; o < s; ++o) {
    // Losowa wielkość segmentu
    var r = C.randInt(e.scale / 2.5, e.scale / 1.7);

    // Losowy kąt obrotu dla bardziej losowego rozmieszczenia
    var angle = n * o + Math.random() * (Math.PI / s);

    // Losowy promień segmentu dla bardziej naturalnego wyglądu
    var radius = r * Math.cos(angle);

    // Rysowanie segmentu z różnym kolorem dla każdej iteracji
    a.fillStyle = `hsl(${Math.random() * 360}, 70%, 50%)`;
    Q(radius, r * Math.sin(angle), C.randInt(4, 5), a, true);

    // Dodanie cienia dla głębi
    a.shadowColor = 'rgba(0, 0, 0, 0.5)';
    a.shadowBlur = 5;
}



        } else if (e.name == "cheese") {
            a.fillStyle = "#f4f3ac",
            Q(0, 0, e.scale, a),
            a.fillStyle = "#c3c28b";
            for (var s = 4, n = Ze / s, r, o = 0; o < s; ++o)
                r = C.randInt(e.scale / 2.5, e.scale / 1.7),
                Q(r * Math.cos(n * o), r * Math.sin(n * o), C.randInt(4, 5), a, !0)
        } else if (e.name == "wood wall" || e.name == "stone wall" || e.name == "castle wall") {
            a.fillStyle = e.name == "castle wall" ? "#83898e" : e.name == "wood wall" ? "#a5974c" : "#939393";
            const u = e.name == "castle wall" ? 4 : 3;
            Ie(a, u, e.scale * 1.1, e.scale * 1.1),
            a.fill(),
            a.stroke(),
            a.fillStyle = e.name == "castle wall" ? "#9da4aa" : e.name == "wood wall" ? "#c9b758" : "#bcbcbc",
            Ie(a, u, e.scale * .65, e.scale * .65),
            a.fill()
        } else if (e.name == "spikes" || e.name == "greater spikes" || e.name == "poison spikes" || e.name == "spinning spikes") {
            a.fillStyle = e.name == "poison spikes" ? "#7b935d" : "#939393";
            var l = e.scale * .6;
            Ie(a, e.name == "spikes" ? 5 : 6, e.scale, l),
            a.fill(),
            a.stroke(),
            a.fillStyle = "#a5974c",
            Q(0, 0, l, a),
            a.fillStyle = "#c9b758",
            Q(0, 0, l / 2, a, !0)
        } else if (e.name == "windmill" || e.name == "faster windmill" || e.name == "power mill")
            a.fillStyle = "#a5974c",
            Q(0, 0, e.scale, a),
            a.fillStyle = "#c9b758",
            Mn(0, 0, e.scale * 1.5, 29, 4, a),
            a.fillStyle = "#a5974c",
            Q(0, 0, e.scale * .5, a);
        else if (e.name == "mine")
            a.fillStyle = "#939393",
            Ie(a, 3, e.scale, e.scale),
            a.fill(),
            a.stroke(),
            a.fillStyle = "#bcbcbc",
            Ie(a, 3, e.scale * .55, e.scale * .65),
            a.fill();
        else if (e.name == "sapling")
            for (var o = 0; o < 2; ++o) {
                var l = e.scale * (o ? .5 : 1);
                Ie(a, 7, l, l * .7),
                a.fillStyle = o ? "#b4db62" : "#9ebf57",
                a.fill(),
                o || a.stroke()
            }
        else if (e.name == "pit trap")
            a.fillStyle = "#a5974c",
            Ie(a, 3, e.scale * 1.1, e.scale * 1.1),
            a.fill(),
            a.stroke(),
            a.fillStyle = jt,
            Ie(a, 3, e.scale * .65, e.scale * .65),
            a.fill();
        else if (e.name == "boost pad")
            a.fillStyle = "#7e7f82",
            kt(0, 0, e.scale * 2, e.scale * 2, a),
            a.fill(),
            a.stroke(),
            a.fillStyle = "#dbd97d",
            Gf(e.scale * 1, a);
        else if (e.name == "turret") {
            a.fillStyle = "#a5974c",
            Q(0, 0, e.scale, a),
            a.fill(),
            a.stroke(),
            a.fillStyle = "#939393";
            const u = 50;
            kt(0, -u / 2, e.scale * .9, u, a),
            Q(0, 0, e.scale * .6, a),
            a.fill(),
            a.stroke()
        } else if (e.name == "platform") {
            a.fillStyle = "#cebd5f";
            const u = 4
              , p = e.scale * 2
              , h = p / u;
            let m = -(e.scale / 2);
            for (var o = 0; o < u; ++o)
                kt(m - h / 2, 0, h, e.scale * 2, a),
                a.fill(),
                a.stroke(),
                m += p / u
        } else
            e.name == "healing pad" ? (a.fillStyle = "#7e7f82",
            kt(0, 0, e.scale * 2, e.scale * 2, a),
            a.fill(),
            a.stroke(),
            a.fillStyle = "#db6e6e",
            Mn(0, 0, e.scale * .65, 20, 4, a, !0)) : e.name == "spawn pad" ? (a.fillStyle = "#7e7f82",
            kt(0, 0, e.scale * 2, e.scale * 2, a),
            a.fill(),
            a.stroke(),
            a.fillStyle = "#71aad6",
            Q(0, 0, e.scale * .6, a)) : e.name == "blocker" ? (a.fillStyle = "#7e7f82",
            Q(0, 0, e.scale, a),
            a.fill(),
            a.stroke(),
            a.rotate(Math.PI / 4),
            a.fillStyle = "#db6e6e",
            Mn(0, 0, e.scale * .65, 20, 4, a, !0)) : e.name == "teleporter" && (a.fillStyle = "#7e7f82",
            Q(0, 0, e.scale, a),
            a.fill(),
            a.stroke(),
            a.rotate(Math.PI / 4),
            a.fillStyle = "#d76edb",
            Q(0, 0, e.scale * .5, a, !0));
        i = c,
        t || (Dr[e.id] = i)
    }
    return i
}
function Wf(e, t, i, s, n) {
    const r = e + i * Math.cos(s)
      , o = t + i * Math.sin(s)
      , l = i * .4;
    n.moveTo(e, t),
    n.beginPath(),
    n.quadraticCurveTo((e + r) / 2 + l * Math.cos(s + Math.PI / 2), (t + o) / 2 + l * Math.sin(s + Math.PI / 2), r, o),
    n.quadraticCurveTo((e + r) / 2 - l * Math.cos(s + Math.PI / 2), (t + o) / 2 - l * Math.sin(s + Math.PI / 2), e, t),
    n.closePath(),
    n.fill(),
    n.stroke()
}
function Q(e, t, i, s, n, r) {
    s = s || M,
    s.beginPath(),
    s.arc(e, t, i, 0, 2 * Math.PI),
    r || s.fill(),
    n || s.stroke()
}
function Ie(e, t, i, s) {
    let n = Math.PI / 2 * 3, r, o;
    const l = Math.PI / t;
    e.beginPath(),
    e.moveTo(0, -i);
    for (let c = 0; c < t; c++)
        r = Math.cos(n) * i,
        o = Math.sin(n) * i,
        e.lineTo(r, o),
        n += l,
        r = Math.cos(n) * s,
        o = Math.sin(n) * s,
        e.lineTo(r, o),
        n += l;
    e.lineTo(0, -i),
    e.closePath()
}
function kt(e, t, i, s, n, r) {
    n.fillRect(e - i / 2, t - s / 2, i, s),
    r || n.strokeRect(e - i / 2, t - s / 2, i, s)
}
function Mn(e, t, i, s, n, r, o) {
    r.save(),
    r.translate(e, t),
    n = Math.ceil(n / 2);
    for (let l = 0; l < n; l++)
        kt(0, 0, i * 2, s, r, o),
        r.rotate(Math.PI / n);
    r.restore()
}
function Xf(e, t, i, s) {
    let n = Math.PI / 2 * 3;
    const r = Math.PI / t;
    let o;
    e.beginPath(),
    e.moveTo(0, -s);
    for (let l = 0; l < t; l++)
        o = C.randInt(i + .9, i * 1.2),
        e.quadraticCurveTo(Math.cos(n + r) * o, Math.sin(n + r) * o, Math.cos(n + r * 2) * s, Math.sin(n + r * 2) * s),
        n += r * 2;
    e.lineTo(0, -s),
    e.closePath()
}
function Gf(e, t) {
    t = t || M;
    const i = e * (Math.sqrt(3) / 2);
    t.beginPath(),
    t.moveTo(0, -i / 2),
    t.lineTo(-e / 2, i / 2),
    t.lineTo(e / 2, i / 2),
    t.lineTo(0, -i / 2),
    t.fill(),
    t.closePath()
}
function Yf() {
    const e = T.mapScale / 2;
    ue.add(0, e, e + 200, 0, T.treeScales[3], 0),
    ue.add(1, e, e - 480, 0, T.treeScales[3], 0),
    ue.add(2, e + 300, e + 450, 0, T.treeScales[3], 0),
    ue.add(3, e - 950, e - 130, 0, T.treeScales[2], 0),
    ue.add(4, e - 750, e - 400, 0, T.treeScales[3], 0),
    ue.add(5, e - 700, e + 400, 0, T.treeScales[2], 0),
    ue.add(6, e + 800, e - 200, 0, T.treeScales[3], 0),
    ue.add(7, e - 260, e + 340, 0, T.bushScales[3], 1),
    ue.add(8, e + 760, e + 310, 0, T.bushScales[3], 1),
    ue.add(9, e - 800, e + 100, 0, T.bushScales[3], 1),
    ue.add(10, e - 800, e + 300, 0, R.list[4].scale, R.list[4].id, R.list[10]),
    ue.add(11, e + 650, e - 390, 0, R.list[4].scale, R.list[4].id, R.list[10]),
    ue.add(12, e - 400, e - 450, 0, T.rockScales[2], 2)
}
function $f(e) {
    for (let t = 0; t < e.length; )
        ue.add(e[t], e[t + 1], e[t + 2], e[t + 3], e[t + 4], e[t + 5], R.list[e[t + 6]], !0, e[t + 7] >= 0 ? {
            sid: e[t + 7]
        } : null),
        t += 8
}
function Kf(e, t) {
    y = Vo(t),
    y && (y.xWiggle += T.gatherWiggle * Math.cos(e),
    y.yWiggle += T.gatherWiggle * Math.sin(e))
}
function Jf(e, t) {
    y = Vo(e),
    y && (y.dir = t,
    y.xWiggle += T.gatherWiggle * Math.cos(t + Math.PI),
    y.yWiggle += T.gatherWiggle * Math.sin(t + Math.PI))
}
function Qf(e, t, i, s, n, r, o, l) {
    fs && (go.addProjectile(e, t, i, s, n, r, null, null, o).sid = l)
}
function Zf(e, t) {
    for (let i = 0; i < Mt.length; ++i)
        Mt[i].sid == e && (Mt[i].range = t)
}
function jf(e) {
    y = Fo(e),
    y && y.startAnim()
}
function eu(e) {
    for (var t = 0; t < ye.length; ++t)
        ye[t].forcePos = !ye[t].visible,
        ye[t].visible = !1;
    if (e) {
        const i = Date.now();
        for (var t = 0; t < e.length; )
            y = Fo(e[t]),
            y ? (y.index = e[t + 1],
            y.t1 = y.t2 === void 0 ? i : y.t2,
            y.t2 = i,
            y.x1 = y.x,
            y.y1 = y.y,
            y.x2 = e[t + 2],
            y.y2 = e[t + 3],
            y.d1 = y.d2 === void 0 ? e[t + 4] : y.d2,
            y.d2 = e[t + 4],
            y.health = e[t + 5],
            y.dt = 0,
            y.visible = !0) : (y = rr.spawn(e[t + 2], e[t + 3], e[t + 4], e[t + 1]),
            y.x2 = y.x,
            y.y2 = y.y,
            y.d2 = y.dir,
            y.health = e[t + 5],
            rr.aiTypes[e[t + 1]].name || (y.name = T.cowNames[e[t + 6]]),
            y.forcePos = !0,
            y.sid = e[t],
            y.visible = !0),
            t += 7
    }
}
const Or = {};
function tu(e, t) {
    const i = e.index;
    let s = Or[i];
    if (!s) {
        const n = new Image;
        n.onload = function() {
            this.isLoaded = !0,
            this.onload = null
        }
        ,
        n.src = "./img/animals/" + e.src + ".png",
        s = n,
        Or[i] = s
    }
    if (s.isLoaded) {
        const n = e.scale * 1.2 * (e.spriteMlt || 1);
        t.drawImage(s, -n, -n, n * 2, n * 2)
    }
}
function Ho(e, t, i) {
    return e + i >= 0 && e - i <= se && t + i >= 0 && t - i <= re
}
function iu(e, t) {
    let i = lu(e[0]);
    i || (i = new Hc(e[0],e[1],T,C,go,ue,J,ye,R,Xt,Gt),
    J.push(i)),
    i.spawn(t ? vi : null),
    i.visible = !1,
    i.x2 = void 0,
    i.y2 = void 0,
    i.setData(e),
    t && (E = i,
    Re = E.x,
    _e = E.y,
    Mo(),
    Ro(),
    Bo(),
    _o(0),
    hs.style.display = "block")
}
function nu(e) {
    for (let t = 0; t < J.length; t++)
        if (J[t].id == e) {
            J.splice(t, 1);
            break
        }
}
function su(e, t) {
    E && (E.itemCounts[e] = t)
}
function ru(e, t, i) {
    E && (E[e] = t,
    i && Ro())
}
function ou(e, t) {
    y = _i(e),
    y && (y.health = t)
}
function au(e) {
    const t = Date.now();
    for (var i = 0; i < J.length; ++i)
        J[i].forcePos = !J[i].visible,
        J[i].visible = !1;
    for (var i = 0; i < e.length; )
        y = _i(e[i]),
        y && (y.t1 = y.t2 === void 0 ? t : y.t2,
        y.t2 = t,
        y.x1 = y.x,
        y.y1 = y.y,
        y.x2 = e[i + 1],
        y.y2 = e[i + 2],
        y.d1 = y.d2 === void 0 ? e[i + 3] : y.d2,
        y.d2 = e[i + 3],
        y.dt = 0,
        y.buildIndex = e[i + 4],
        y.weaponIndex = e[i + 5],
        y.weaponVariant = e[i + 6],
        y.team = e[i + 7],
        y.isLeader = e[i + 8],
        y.skinIndex = e[i + 9],
        y.tailIndex = e[i + 10],
        y.iconIndex = e[i + 11],
        y.zIndex = e[i + 12],
        y.visible = !0),
        i += 13
}
function lu(e) {
    for (let t = 0; t < J.length; ++t)
        if (J[t].id == e)
            return J[t];
    return null
}
function _i(e) {
    for (let t = 0; t < J.length; ++t)
        if (J[t].sid == e)
            return J[t];
    return null
}
function Fo(e) {
    for (let t = 0; t < ye.length; ++t)
        if (ye[t].sid == e)
            return ye[t];
    return null
}
function Vo(e) {
    for (let t = 0; t < et.length; ++t)
        if (et[t].sid == e)
            return et[t];
    return null
}
let Lo = -1;
function cu() {
    const e = Date.now() - Lo;
    window.pingTime = e,
    Jt.innerText = "Ping: " + e + " ms"
}
let En;
function Uo() {
    En && clearTimeout(En),
    as() && (Lo = Date.now(),
    ee.send("0")),
    En = setTimeout(Uo, 2500)
}
function hu(e) {
    if (e < 0)
        return;
    const t = Math.floor(e / 60);
    let i = e % 60;
    i = ("0" + i).slice(-2),
    fr.innerText = "Server restarting in " + t + ":" + i,
    fr.hidden = !1
}
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
        window.setTimeout(e, 1e3 / 60)
    }
}();
function No() {
    It = Date.now(),
    be = It - sr,
    sr = It,
    Hf(),
    requestAnimFrame(No)
}
Yf();
No();
function qo(e) {
    window.open(e, "_blank")
}
window.openLink = qo;
window.aJoinReq = Wn;
window.follmoo = Lh;
window.kickFromClan = xo;
window.sendJoin = bo;
window.leaveAlliance = So;
window.createAlliance = Xn;
window.storeBuy = To;
window.storeEquip = $n;
window.showItemInfo = Se;
window.selectSkinColor = vf;
window.changeStoreIndex = pf;
window.config = T;
(function() {
    'use strict';

    // Definicja nowego linku do Discorda
    const newDiscordLink = 'https://discord.gg/9TNezpZEmc';

    // Znalezienie istniejącego linku w kontenerze #linksContainer2
    const linksContainer = document.getElementById('linksContainer2');
    if (!linksContainer) return;

    const discordLink = linksContainer.querySelector('a[href="https://discord.gg/MqpUzka"]');
    if (!discordLink) return;

    // Aktualizacja adresu URL dla linku do Discorda
    discordLink.href = newDiscordLink;
})();
//PRZYCISKI


let newImg = document.createElement("img");
//https://media.discordapp.net/attachments/1196666586380120084/1201727790781571134/output-onlinepngtools.png?ex=65cadf38&is=65b86a38&hm=1b3021b7b2accb6268f7e09357ab5501279f699f3bb8b9e04feff1adcf8f6555&=&format=webp&quality=lossless
newImg.src = "https://cdn.discordapp.com/emojis/753907371599855626.gif?size=96&quality=lossless"
newImg.style = `position: absolute; top: 170px; left: 22px; z-index: 100000; width: 50px; height: 50px; cursor: pointer;`;
document.body.prepend(newImg);

newImg.addEventListener("click", () => {
    let w = window.open("https://discord.com/invite/9TNezpZEmc", null, `height=750, width=1199, status=yes, toolbar=no, menubar=no, location=no`);
});
