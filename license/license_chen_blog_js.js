var urlBlog = 'https://www.giahuy.net';
var license = $('#license-code').text();
  var informasibatas = '<style>body{background:#fff}#peringatan span{font-size:50px}#peringatan{z-index:99999;position:fixed;top:0;right:0;left:0;height:30%;text-align:center;background:rgba(235, 0, 0, 1);border:5px solid #444;color:#fff;padding:20px;font-family:monospace;border-radius:10px}#peringatan h4{font-size:20px}</style><div id="peringatan"><h4>License activation</h4><p>De co ma License ban vui long lien he Admin www.giahuy.net | 0362 118 138</p><span id="batas-waktu-template">20</span></div>';
  var input = 20;

$(document).ready(function () {
  var dataLicense = license.split('-');
  var codeLicense = dataLicense[0];
  var arrayLicense = dataLicense[1];
  console.log(codeLicense);
  console.log(arrayLicense);
  if (arrayLicense == undefined) {
    $(document.body).html(informasibatas);
    setInterval(function () {
        input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
    }, 1e3);
  }
  str = [arrayLicense];
$.ajax({
    url: "https://script.google.com/macros/s/AKfycbyKOvN6K31He4UlZrkuMaMmX1FeBw_3gkOf3z0Q2lgdo9A1tXLg2X59wVogujuV8JTEmA/exec",
    type: "GET",
    data: "users",
    crossDomain: true,
    dataType: "",
    success: function (data) {
      
      // Tim nap du lieu JSON tu Trang tinh cua nguoi dung Google
      var json = data.user;
      
      // Tim nap du lieu tu mang thu n
      var sheetLicense = json[str];
      console.log(sheetLicense)
      if (sheetLicense == undefined) {
        $(document.body).html(informasibatas);
        setInterval(function () {
          input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
        }, 1e3);
      }
      // Lay du lieu tu Trang tinh, co ID va Ma
      var ID = sheetLicense.id;
      var code = sheetLicense.code;
      // Truy xuat du lieu ID Blog bang Ajax
      $.ajax({
        url: "/feeds/posts/summary/?alt=json",
        type: "get",
        dataType: "jsonp",
        success: function (data) {
          // Truy xuat ID blog tu tom tat bai đang cua blogger
          var dataID = data.feed.id.$t;
          console.log(dataID)
          
          // The ket qua: blogger.com, 1999: blog-1480319877278940945, tat ca nhung gi chung ta can la ID nen chung ta can khai thac
          var IDblog = dataID.split('-');
          
          // Ket qua se co hai mang cu the la tag: blogger.com, 1999: blog va 1480319877278940945 ["tag: blogger.com, 1999: blog", "1480319877278940945"]
         var blogID = IDblog[1];
          try {
            var input = 20,
                dataInBlog = blogID + codeLicense,
                dataInSheet = ID + code;
            if (dataInBlog == dataInSheet) {
              return;
            }
            $(document.body).html(informasibatas);
            setInterval(function () {
              input <= 1 ? (window.location.href = urlBlog) : (document.getElementById("batas-waktu-template").innerHTML = --input);
            }, 1e3);
          } catch (input) {
            window.location.href = urlBlog;
          }
        },
      });
    },
});
});