var JJdecode = {
  dst: '',
  out: function(c) {
    JJdecode.dst += c;
  },
  decode: function(txt) {
    var t = txt;
    t.replace(/^\s+|\s+$/g, "");
    var startpos;
    var endpos;
    var gv;
    var gvl;
    if (t.indexOf("\"\'\\\"+\'+\",") == 0) {
      startpos = t.indexOf('$$+"\\""+') + 8;
      endpos = t.indexOf('"\\"")())()');
      gv = t.substring((t.indexOf('"\'\\"+\'+",') + 9), t.indexOf("=~[]"));
      gvl = gv.length;
    } else {
      gv = t.substr(0, t.indexOf("="));
      gvl = gv.length;
      startpos = t.indexOf('"\\""+') + 5;
      endpos = t.indexOf('"\\"")())()');
    }
    if (startpos == endpos) {
      throw new Error("No data !");
      return;
    }
    var data = t.substring(startpos, endpos);
    var b = ["___+", "__$+", "_$_+", "_$$+", "$__+", "$_$+", "$$_+", "$$$+", "$___+", "$__$+", "$_$_+", "$_$$+", "$$__+", "$$_$+", "$$$_+", "$$$$+"];
    var str_l = "(![]+\"\")[" + gv + "._$_]+";
    var str_o = gv + "._$+";
    var str_t = gv + ".__+";
    var str_u = gv + "._+";
    var str_hex = gv + ".";
    var str_s = '"';
    var gvsig = gv + ".";
    var str_quote = '\\\\\\"';
    var str_slash = '\\\\\\\\';
    var str_lower = "\\\\\"+";
    var str_upper = "\\\\\"+" + gv + "._+";
    var str_end = '"+';
    while (data != "") {
      if (0 == data.indexOf(str_l)) {
        data = data.substr(str_l.length);
        JJdecode.out("l");
        continue;
      } else if (0 == data.indexOf(str_o)) {
        data = data.substr(str_o.length);
        JJdecode.out("o");
        continue;
      } else if (0 == data.indexOf(str_t)) {
        data = data.substr(str_t.length);
        JJdecode.out("t");
        continue;
      } else if (0 == data.indexOf(str_u)) {
        data = data.substr(str_u.length);
        JJdecode.out("u");
        continue;
      }
      if (0 == data.indexOf(str_hex)) {
        data = data.substr(str_hex.length);
        var i = 0;
        for (i = 0; i < b.length; i++) {
          if (0 == data.indexOf(b[i])) {
            data = data.substr((b[i]).length);
            JJdecode.out(i.toString(16));
            break;
          }
        }
        continue;
      }
      if (0 == data.indexOf(str_s)) {
        data = data.substr(str_s.length);
        if (0 == data.indexOf(str_upper)) {
          data = data.substr(str_upper.length);
          var ch_str = "";
          for (j = 0; j < 2; j++) {
            if (0 == data.indexOf(gvsig)) {
              data = data.substr(gvsig.length);
              for (k = 0; k < b.length; k++) {
                if (0 == data.indexOf(b[k])) {
                  data = data.substr(b[k].length);
                  ch_str += k.toString(16) + "";
                  break;
                }
              }
            } else {
              break; 
            }
          }
          JJdecode.out(String.fromCharCode(parseInt(ch_str, 16)));
          continue;
        } else if (0 == data.indexOf(str_lower)) {
          data = data.substr(str_lower.length);
          var ch_str = "";
          var ch_lotux = ""
          var temp = "";
          var b_checkR1 = 0;
          for (j = 0; j < 3; j++){
            if (j > 1) {
              if (0 == data.indexOf(str_l)) {
                data = data.substr(str_l.length);
                ch_lotux = "l";
                break;
              } else if (0 == data.indexOf(str_o)) {
                data = data.substr(str_o.length);
                ch_lotux = "o";
                break;
              } else if (0 == data.indexOf(str_t)) {
                data = data.substr(str_t.length);
                ch_lotux = "t";
                break;
              } else if (0 == data.indexOf(str_u)) {
                data = data.substr(str_u.length);
                ch_lotux = "u";
                break;
              }
            }
            if (0 == data.indexOf(gvsig)) {
              temp = data.substr(gvsig.length);
              for (k = 0; k < 8; k++) {
                if (0 == temp.indexOf(b[k])) {
                  if (parseInt(ch_str + k + "", 8) > 128) {
                    b_checkR1 = 1;
                    break;
                  }
                  ch_str += k + "";
                  data = data.substr(gvsig.length);
                  data = data.substr(b[k].length);
                  break;
                }
              }
              if (1 == b_checkR1) {
                if (0 == data.indexOf(str_hex)) {
                  data = data.substr(str_hex.length);
                  var i = 0;
                  for (i = 0; i < b.length; i++) {
                    if (0 == data.indexOf(b[i])) {
                      data = data.substr((b[i]).length);
                      ch_lotux = i.toString(16);
                      break;
                    }
                  }
                  break;
                }
              }
            } else {
              break;
            }
          }
          JJdecode.out(String.fromCharCode(parseInt(ch_str, 8)) + ch_lotux);
          continue;
        } else {
          var match = 0;
          var n;
          while (true) {
            n = data.charCodeAt(0);
            if (0 == data.indexOf(str_quote)) {
              data = data.substr(str_quote.length);
              JJdecode.out('"');
              match += 1;
              continue;
            } else if (0 == data.indexOf(str_slash)) {
              data = data.substr(str_slash.length);
              JJdecode.out('\\');
              match += 1;
              continue;
            } else if (0 == data.indexOf(str_end))
            {
              if (match == 0) {
                throw new Error("+ no match S block: " + data);
                return;
              }
              data = data.substr(str_end.length);
              break;
            } else if (0 == data.indexOf(str_upper))
            {
              if (match == 0) {
                throw new Error("no match S block n>128: " + data);
                return;
              }
              data = data.substr(str_upper.length);
              var ch_str = "";
              var ch_lotux = "";
              for (j = 0; j < 10; j++)
              {
                if (j > 1) //lotu check
                {
                  if (0 == data.indexOf(str_l)) {
                    data = data.substr(str_l.length);
                    ch_lotux = "l";
                    break;
                  } else if (0 == data.indexOf(str_o)) {
                    data = data.substr(str_o.length);
                    ch_lotux = "o";
                    break;
                  } else if (0 == data.indexOf(str_t)) {
                    data = data.substr(str_t.length);
                    ch_lotux = "t";
                    break;
                  } else if (0 == data.indexOf(str_u)) {
                    data = data.substr(str_u.length);
                    ch_lotux = "u";
                    break;
                  }
                }
                if (0 == data.indexOf(gvsig)) {
                  data = data.substr(gvsig.length);
                  for (k = 0; k < b.length; k++)
                  {
                    if (0 == data.indexOf(b[k])) {
                      data = data.substr(b[k].length);
                      ch_str += k.toString(16) + "";
                      break;
                    }
                  }
                } else {
                  break;
                }
              }
              JJdecode.out(String.fromCharCode(parseInt(ch_str, 16)));
              break;
            } else if (0 == data.indexOf(str_lower))
            {
              if (match == 0) {
                throw new Error("no match S block n<128: " + data);
                return;
              }
              data = data.substr(str_lower.length);
              var ch_str = "";
              var ch_lotux = ""
              var temp = "";
              var b_checkR1 = 0;
              for (j = 0; j < 3; j++)
              {
                if (j > 1)
                {
                  if (0 == data.indexOf(str_l)) {
                    data = data.substr(str_l.length);
                    ch_lotux = "l";
                    break;
                  } else if (0 == data.indexOf(str_o)) {
                    data = data.substr(str_o.length);
                    ch_lotux = "o";
                    break;
                  } else if (0 == data.indexOf(str_t)) {
                    data = data.substr(str_t.length);
                    ch_lotux = "t";
                    break;
                  } else if (0 == data.indexOf(str_u)) {
                    data = data.substr(str_u.length);
                    ch_lotux = "u";
                    break;
                  }
                }
                if (0 == data.indexOf(gvsig)) {
                  temp = data.substr(gvsig.length);
                  for (k = 0; k < 8; k++) //for every entry in b octal
                  {
                    if (0 == temp.indexOf(b[k])) {
                      if (parseInt(ch_str + k + "", 8) > 128) {
                        b_checkR1 = 1;
                        break;
                      }
                      ch_str += k + "";
                      data = data.substr(gvsig.length); //skip gvsig
                      data = data.substr(b[k].length);
                      break;
                    }
                  }
                  if (1 == b_checkR1) {
                    if (0 == data.indexOf(str_hex)) //0123456789abcdef
                    {
                      data = data.substr(str_hex.length);
                      var i = 0;
                      for (i = 0; i < b.length; i++) {
                        if (0 == data.indexOf(b[i])) {
                          data = data.substr((b[i]).length);
                          ch_lotux = i.toString(16);
                          break;
                        }
                      }
                    }
                  }
                } else {
                  break; //done
                }
              }
              JJdecode.out(String.fromCharCode(parseInt(ch_str, 8)) + ch_lotux);
              break; //step out of the while loop
            } else if ((0x21 <= n && n <= 0x2f) || (0x3A <= n && n <= 0x40) || (0x5b <= n && n <= 0x60) || (0x7b <= n && n <= 0x7f)) {
              JJdecode.out(data.charAt(0));
              data = data.substr(1);
              match += 1;
            }
          }
          continue;
        }
      }
      throw new Error("no match : " + data);
      break;
    }
    return JJdecode.dst;
  }
};
