/* global utils */
// eslint-disable-next-line no-unused-vars
function Wise_EvalDecode(source) {
  if (!isPacked(source)) throw 'Not matched';
  var code = source;
  if (code.startsWith("//Protected by WiseLoop PHP JavaScript Obfuscator")) code = code.substring(code.indexOf("\n")).trim();
  
  code = eval("("+code.substring(";eval".length).replace(");}('",");})('"));
  code = eval("("+code.substring(";eval".length).replace(");}('",");})('"));
  if (code.includes("; ;eval")) code = eval("("+code.substring(code.indexOf("; ;eval")+"; ;eval".length).replace(");}('",");})('"));
  if (hasDomainCheck(code)) {
    code = code.substring(code.indexOf(");}throw new Error('');}")+");}throw new Error('');}".length);
  }
  return code;
}

function Wise_FunctionalDecode(source) {
  if (!isPacked(source)) throw 'Not matched';
  var code = source;
  if (code.startsWith("//Protected by WiseLoop PHP JavaScript Obfuscator")) code = code.substring(code.indexOf("\n")).trim();
  
  code = unpackStep(unpackStep(unpackStep(code)));
  
  if (hasDomainCheck(code)) {
    code = code.substring(code.indexOf(");}throw new Error('');}")+");}throw new Error('');}".length);
  }
  return code;
}

// Sorry for not translating this one!
function unpackAlgorithm(w,i,s,e) {
  var lIll = 0;
  var ll1I = 0;
  var Il1l = 0;
  var ll1l = [];
  var l1lI = [];
  while (true) {
    if (lIll < 5) l1lI.push(w.charAt(lIll));
    else if (lIll < w.length) ll1l.push(w.charAt(lIll));
    lIll++;
    if (ll1I < 5) l1lI.push(i.charAt(ll1I));
    else if (ll1I < i.length) ll1l.push(i.charAt(ll1I));
    ll1I++;
    if (Il1l < 5) l1lI.push(s.charAt(Il1l));
    else if (Il1l < s.length) ll1l.push(s.charAt(Il1l));
    Il1l++;
    if (w.length + i.length + s.length + e.length == ll1l.length + l1lI.length + e.length) break;
  }
  var lI1l = ll1l.join('');
  var I1lI = l1lI.join('');
  ll1I = 0;
  var l1ll = [];
  for (lIll = 0; lIll < ll1l.length; lIll += 2) {
    var ll11 = -1;
    if (I1lI.charCodeAt(ll1I) % 2) ll11 = 1;
    l1ll.push(String.fromCharCode(parseInt(lI1l.substr(lIll, 2), 36) - ll11));
    ll1I++;
    if (ll1I >= l1lI.length) ll1I = 0;
  }
  return l1ll.join('');
}
function unpackStep(code) {
  var argsScope = code.split(");}(")[1];
  var args = eval("["+argsScope.substring(0,argsScope.length-3)+"]");
  return unpackAlgorithm(args[0],args[1],args[2],args[3]);
}
function isPacked(src) {
  return src.startsWith("//Protected by WiseLoop PHP JavaScript Obfuscator") || src.includes(";eval(function(w,i,s,e)");
}
function hasDomainCheck(src) {
  return src.includes("window.location.hostname.replace(\"www.\",\"\")") && src.includes("throw new Error('');");
}

// Warning: The code expects the source to be well-formed. Perhaps I will implement additional checks later.
