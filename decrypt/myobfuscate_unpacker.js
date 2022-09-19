var _escape = 'your_script_escaped';
var _111 = document.createElement('script');
_111.src = 'http://api.www.myobfuscate.com/?getsrc=ok' +
  '&ref=' + encodeURIComponent(document.referrer) +
  '&url=' + encodeURIComponent(document.URL);
var 000 = document.getElementsByTagName('head')[0];
000. appendChild(_111);
document.write(unescape(_escape));
var MyObfuscate = {
  detect: function(str) {
    if (/^var _?[0O1lI]{3}\=('|\[).*\)\)\);/.test(str)) {
      return true;
    }
    if (/^function _?[0O1lI]{3}\(_/.test(str) && /eval\(/.test(str)) {
      return true;
    }
    return false;
  },
  unpack: function(str) {
    if (MyObfuscate.detect(str)) {
      var __eval = eval;
      try {
        eval = function(unpacked) {
          if (MyObfuscate.starts_with(unpacked, 'var _escape')) {
            var matches = /'([^']*)'/.exec(unpacked);
            var unescaped = unescape(matches[1]);
            if (MyObfuscate.starts_with(unescaped, '<script>')) {
              unescaped = unescaped.substr(8, unescaped.length - 8);
            }
            if (MyObfuscate.ends_with(unescaped, '</script>')) {
              unescaped = unescaped.substr(0, unescaped.length - 9);
            }
            unpacked = unescaped;
          }
          unpacked = "// Unpacker warning: be careful when using myobfuscate.com for your projects:\n" +
            "// scripts obfuscated by the free online version may call back home.\n" +
            "\n//\n" + unpacked;
          throw unpacked;
        };
        __eval(str);
      } catch (e) {
        if (typeof e === "string") {
          str = e;
        }
      }
      eval = __eval;
    }
    return str;
  },
  starts_with: function(str, what) {
    return str.substr(0, what.length) === what;
  },
  ends_with: function(str, what) {
    return str.substr(str.length - what.length, what.length) === what;
  },
  run_tests: function(sanity_test) {
    var t = sanity_test || new SanityTest();
    return t;
  }
};
