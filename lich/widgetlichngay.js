function getWidgetLichNgay(n) {
    ngayhientain = new Date;
    var h = "";
    h += styleLichNgay, h += "\x3c!--Bengin col-2--\x3e<div id='slideshows' class='slideshow-lvsicsoft disabled'><button class='previous-lvsicsoft' id='lvsicsoft-previous'><b>Previous</b></button><button class='next-lvsicsoft' id='lvsicsoft-next'><b>Next</b></button><div class='strip-lvsicsoft' id='lvs-hienthi-lich'></div></div>\x3c!--End col-2--\x3e";
    var t = document.getElementById(n);
    t.innerHTML = h, data_urlimagen = t.getAttribute("data-urlimagen"), data_colorbordern = t.getAttribute("data-colorbordern"), data_coloramn = t.getAttribute("data-coloramn"), data_colorduongn = t.getAttribute("data-colorduongn"), getNgay(ngayhientain), setBorderSlideshow(data_colorbordern), setColorAm(data_coloramn), setColorDuong(data_colorduongn), setBackground(data_urlimagen);
    var i = document.getElementById("lvsicsoft-previous"),
        g = document.getElementById("lvsicsoft-next");
    i.addEventListener("click", function () {
        ngayhientain.setDate(ngayhientain.getDate() - 1), getNgay(ngayhientain), setBorderSlideshow(data_colorbordern), setColorAm(data_coloramn), setColorDuong(data_colorduongn), setBackground(data_urlimagen)
    }), g.addEventListener("click", function () {
        ngayhientain.setDate(ngayhientain.getDate() + 1), getNgay(ngayhientain), setBorderSlideshow(data_colorbordern), setColorAm(data_coloramn), setColorDuong(data_colorduongn), setBackground(data_urlimagen)
    })
}

function setBorderSlideshow(n) {
    document.getElementsByClassName("widgetlich-lvsicsoft")[0].getElementsByClassName("khung-lich-lvsicsoft")[0].style.border = "1px solid " + n
}

function setColorAm(n) {
    document.getElementsByClassName("lich-tom-tat-lvsicsoft")[0].getElementsByClassName("l-am-lvsicsoft")[0].getElementsByTagName("span")[0].style.color = n
}

function setColorDuong(n) {
    document.getElementsByClassName("lich-conten-lvsicsoft")[0].getElementsByClassName("lich-conten-center-lvsicsoft")[0].getElementsByTagName("span")[0].style.color = n
}

function setBackground(n) {
    var h = document.getElementsByClassName("widgetlich-lvsicsoft")[0].getElementsByClassName("lich-conten-lvsicsoft")[0];
    "" + n == "" || (h.style.background = "url('" + n + "') no-repeat", h.style.backgroundSize = "100% 100%")
}

function getNgay(ngayhientai) {
    var strngayhientai = ngayhientai.getFullYear() + "-" + (ngayhientai.getMonth() + 1) + "-" + ngayhientai.getDate(),
        ngayam = convertSolar2Lunar(ngayhientai.getDate(), ngayhientai.getMonth() + 1, ngayhientai.getFullYear(), 7),
        ldanhngon = DANHNGON[MyRandom(0, DANHNGON.length - 1)].toString().split("("),
        mNgayKyNiem_ = getNgayKyNiem(strngayhientai),
        strHtml = "";
    strHtml += "\x3c!--Bengin khung-lich--\x3e<div class='slide-lvsicsoft' style='display:block;'><div class='khung-lich-lvsicsoft'><div class='td_lich-lvsicsoft'><div class='td_lich_left-lvsicsoft'><span>" + ngayhientai.getFullYear() + "</span></div><div class='td_lich_center-lvsicsoft'><span>Tháng " + (ngayhientai.getMonth() + 1) + "</span></div><div class='td_lich_right-lvsicsoft'><span>" + (0 == ngayhientai.getDay() ? "C.Nhật" : "Thứ " + eval(ngayhientai.getDay() + 1)) + "</span></div></div><div class='lich-conten-lvsicsoft'  style='background: url(https://lichngaytot.com/Content/Images/hoatiet-lich-29.png) repeat;'><div class='lich-conten-center-lvsicsoft'><span>" + ngayhientai.getDate() + "</span></div><div class='danh-ngon-lvsicsoft'><p style='color:#5B8DFC;'>" + ldanhngon[0] + "</p><p style='font-weight: bold;'>" + ldanhngon[1].toString().replace(")", "") + "</p>" + (null != mNgayKyNiem_ ? "<p style='font-weight: bold; color:red;'>" + mNgayKyNiem_ + "</p>" : "") + "</div></div> <div class='lich-tom-tat-lvsicsoft'><div class='gio-hoang-hac-dao-lvsicsoft'><div class='licht-tam-tat-col1-lvsicsoft'><p><strong>Năm " + TinhCanNam(strngayhientai)[0] + " " + TinhChiNam(strngayhientai)[0] + "</strong></p><p>Tháng " + TinhCanThang(ngayam[1], ngayam[2])[0] + " " + TinhChiThang(ngayam[1])[0] + "</p><p>Ngày " + TinhCanNgay(strngayhientai)[0] + " " + TinhChiNgay(strngayhientai)[0] + "</p><p id='clock-widget-lvs'>11:10:06</p><p>" + TinhCanGio(strngayhientai, (new Date).getHours())[0] + " " + TinhChiGio((new Date).getHours())[0] + "</p><br></div><div class='licht-tam-tat-col1-lvsicsoft'><div class='con-giap-12-lvsicsoft'><div class='l-thang-lvsicsoft'><strong>Tháng " + ngayam[1] + "</strong></div><div class='l-am-lvsicsoft'><span>" + ngayam[0] + "</span></div></div></div><div class='licht-tam-tat-col1-lvsicsoft'>" + (1 == parseInt(TinhNgayHoangDao2(strngayhientai)) ? "<p><strong style='color:red; font-size: 9px;'>Ngày hoàng đạo *</strong></p>" : "<p><strong>Ngày hắc đạo *</strong></p>") + "<p><strong>Mệnh ngày:</strong></p><p>" + TinhMenhNguHanh(strngayhientai, "Ngay")[0] + "</p><p style='font-size: 8px;'>(" + TinhMenhNguHanh(strngayhientai, "Ngay")[1] + ")</p><p><strong>Tiết khí:</strong></p><p>" + TinhTietKhi(strngayhientai)[0] + "</p></div></div><div class='gio-hoang-hac-dao-lvsicsoft'><p style='float: left; width: 100%; text-align: left;'><strong style='margin-left: 10px; text-transform: uppercase; font-size: 10px;'>Giờ hoàng đạo</strong></p>";
    for (var lGioHD = LayGioHoangDaoLVSICsoft(strngayhientai), i = 0; i < 3; i++) {
        var lGioHD1 = lGioHD[2 * i].toString().split("("),
            lGioHD2 = lGioHD[2 * i + 1].toString().split("(");
        strHtml += "<div class='licht-tam-tat-col1-lvsicsoft'><p>" + lGioHD1[0] + ":<br>(" + lGioHD1[1] + "</p><p>" + lGioHD2[0] + ":<br>(" + lGioHD2[1] + "</p></div>"
    }
    strHtml += "</div></div><div class='fooder_lich-lvsicsoft'><div class='fooder_lich_left-lvsicsoft'><a href='javascript:void(0)' onclick='backtoday()'>Quay về ngày hôm nay</a></div><div class='fooder_lich_right-lvsicsoft'><a rel='nofollow' href='https://lichngaytot.com/xem-ngay-tot-xau-" + (ngayhientai.getDate() < 10 ? "0" + ngayhientai.getDate() : "" + ngayhientai.getDate()) + "-" + (ngayhientai.getMonth() + 1 < 10 ? "0" + (ngayhientai.getMonth() + 1) : "" + (ngayhientai.getMonth() + 1)) + "-" + ngayhientai.getFullYear() + "#ct-ngay'>Việc nên làm, kiêng kỵ " + ngayhientai.getDate() + "/" + (ngayhientai.getMonth() + 1) + "/" + ngayhientai.getFullYear() + "</a></div></div></div></div>\x3c!--End khung-lich--\x3e ";
    var divlvs_hienthi_lich = document.getElementById("lvs-hienthi-lich");
    divlvs_hienthi_lich.innerHTML = strHtml, AddAnhConGiapLVSICSOFT(ngayhientai.getFullYear() + "," + (ngayhientai.getMonth() + 1) + "," + ngayhientai.getDate())
}

function backtoday() {
    getNgay(ngayhientain = new Date)
}

function startClockWidgetlvs() {
    var n = new Date,
        h = n.getHours(),
        t = n.getMinutes(),
        i = n.getSeconds(),
        g = document.getElementById("clock-widget-lvs");
    g && (g.innerHTML = (h < 10 ? "0" + h : h) + ":" + (t < 10 ? "0" + t : t) + ":" + (i < 10 ? "0" + i : i))
}

function TinhCanNgay(n) {
    var h = DateDiff(NgayBatDauCan, n, "Ngay");
    return h = (10 + h % 10) % 10, new Array(Can[h], h)
}

function TinhChiNgay(n) {
    var h = DateDiff(NgayBatDauChi, n, "Ngay");
    return h = (12 + h % 12) % 12, new Array(Chi[h], h)
}

function TinhCanNam(n) {
    var h = DateDiff(NgayBatDauNam, n, "Nam");
    return h = (10 + h % 10) % 10, new Array(Can[h], h)
}

function TinhChiNam(n) {
    var h = DateDiff(NgayBatDauNam, n, "Nam");
    return h = (12 + h % 12) % 12, new Array(Chi[h], h)
}

function TinhCanThang(n, h) {
    return Index = (12 * h + n + 3) % 10, new Array(Can[Index], Index)
}

function TinhChiThang(n) {
    return Index = (n + 1) % 12, new Array(Chi[Index], Index)
}

function TinhCanGio(n, h) {
    var t = TinhChiGio(h)[1],
        i = DateDiff(NgayBatDauCan, n, "Ngay");
    return i = 2 * (i = (10 + i % 10) % 10) % 10, 0 < t && (i = (i + t) % 10), new Array(Can[i], i)
}

function TinhChiGio(n) {
    return 23 <= n || n < 1 ? Index = 0 : 1 <= n && n < 3 ? Index = 1 : 3 <= n && n < 5 ? Index = 2 : 5 <= n && n < 7 ? Index = 3 : 7 <= n && n < 9 ? Index = 4 : 9 <= n && n < 11 ? Index = 5 : 11 <= n && n < 13 ? Index = 6 : 13 <= n && n < 15 ? Index = 7 : 15 <= n && n < 17 ? Index = 8 : 17 <= n && n < 19 ? Index = 9 : 19 <= n && n < 21 ? Index = 10 : 21 <= n && n < 23 && (Index = 11), new Array(Chi[Index], Index)
}

function TinhNgayHoangDao(n, h) {
    var t = DateDiff(NgayBatDauChi, n, "Ngay");
    return NgayHoangDao[t = (24 + (t = (12 + t % 12) % 12) - 2 * (h - 1)) % 12]
}

function TinhNgayHoangDao2(n) {
    var h = n.split(split_1),
        t = convertSolar2Lunar(parseInt(h[2].toString()), parseInt(h[1].toString()), parseInt(h[0].toString()), 7)[1],
        i = DateDiff(NgayBatDauChi, n, "Ngay");
    return NgayHoangDao[i = (24 + (i = (12 + i % 12) % 12) - 2 * (t - 1)) % 12]
}

function NgayDaiMinhCatNhat(n) {
    var h = DateDiff(NgayBatDauCan, n, "Ngay");
    h = (10 + h % 10) % 10;
    var t = DateDiff(NgayBatDauChi, n, "Ngay");
    t = (12 + t % 12) % 12;
    for (var i = Can[h] + " " + Chi[t], g = 0; g < DaiMinh.length; g++)
        if (i.toLowerCase() == DaiMinh[g].toLowerCase()) return 1;
    return 0
}

function TinhGioHoangDao(n, h) {
    var t = TinhChiNgay(n)[1];
    t %= 6;
    var i = TinhChiGio(h)[1];
    return GioHoangDao[t][i]
}

function LayGioHoangDaoLVSICsoft(n) {
    for (var h = 0, t = "", i = "", g = "", a = "", c = "", e = "", o = "", l = 0; l < 24; l += 2) 1 == TinhGioHoangDao(n, l) && (1 == (h += 1) ? t = TinhCanGio(n, l)[0] + " " + TinhChiGio(l)[0] + "(" + KhoangGio[l / 2] + ")" : 2 == h ? i = TinhCanGio(n, l)[0] + " " + TinhChiGio(l)[0] + "(" + KhoangGio[l / 2] + ")" : 3 == h ? g = TinhCanGio(n, l)[0] + " " + TinhChiGio(l)[0] + "(" + KhoangGio[l / 2] + ")" : 4 == h ? a = TinhCanGio(n, l)[0] + " " + TinhChiGio(l)[0] + "(" + KhoangGio[l / 2] + ")" : 5 == h ? c = TinhCanGio(n, l)[0] + " " + TinhChiGio(l)[0] + "(" + KhoangGio[l / 2] + ")" : 6 == h ? e = TinhCanGio(n, l)[0] + " " + TinhChiGio(l)[0] + "(" + KhoangGio[l / 2] + ")" : o += "" == o ? TinhCanGio(n, l)[0] + " " + TinhChiGio(l)[0] + "(" + KhoangGio[l / 2] + ")" : "," + TinhCanGio(n, l)[0] + " " + TinhChiGio(l)[0] + "(" + KhoangGio[l / 2] + ")");
    return [t, i, g, a, c, e]
}

function TinhMenhNguHanh(n, h) {
    var t = DateDiff(NgayBatDauChi, n, h);
    return t = (60 + t) % 60, t = Math.floor(t / 2), new Array(MenhNguHanh[t], MenhNguHanh2[t], t)
}

function TinhTietKhi(n) {
    var h = new Date(n),
        t = h.getDate(),
        i = h.getMonth() + 1,
        g = h.getFullYear();
    if (2 == i && 5 <= t && t < 19) Index = 0;
    else if (2 == i && 19 <= t || 3 == i && t < 6) Index = 1;
    else if (3 == i && 7 <= t && t < 21) Index = 2;
    else if (3 == i && 22 <= t || 4 == i && t < 5) Index = 3;
    else if (4 == i && 6 <= t && t < 20) Index = 4;
    else if (4 == i && 21 <= t || 5 == i && t < 6) Index = 5;
    else if (5 == i && 7 <= t && t < 21) Index = 6;
    else if (5 == i && 22 <= t || 6 == i && t < 5) Index = 7;
    else if (6 == i && 7 <= t && t < 21) Index = 8;
    else if (6 == i && 22 <= t || 7 == i && t < 7) Index = 9;
    else if (7 == i && 8 <= t && t < 23) Index = 10;
    else if (7 == i && 24 <= t || 8 == i && t < 8) Index = 11;
    else if (8 == i && 9 <= t && t < 23) Index = 12;
    else if (8 == i && 24 <= t || 9 == i && t < 8) Index = 13;
    else if (9 == i && 9 <= t && t < 23) Index = 14;
    else if (9 == i && 24 <= t || 10 == i && t < 8) Index = 15;
    else if (10 == i && 9 <= t && t < 23) Index = 16;
    else if (10 == i && 24 <= t || 11 == i && t < 8) Index = 17;
    else if (11 == i && 9 <= t && t < 22) Index = 18;
    else if (11 == i && 23 <= t || 12 == i && t < 7) Index = 19;
    else if (12 == i && 8 <= t && t < 22) Index = 20;
    else if (12 == i && 23 <= t || 1 == i && t < 6) Index = 21;
    else if (1 == i && 7 <= t && t < 20) Index = 22;
    else if (1 == i && 21 <= t || 2 == i && t < 4) Index = 23;
    else {
        var a = getSunLongitude2(jdFromDate(t + 1, i, g));
        Index = Math.floor(a / 15), Index = (Index + 3) % 24
    }
    return new Array(TietKhi[Index], Index)
}

function TinhTruc(n) {
    var h = TinhTietKhi(n)[1],
        t = (12 + TinhChiNgay(n)[1] - (h = Math.floor(h / 2)) - 2) % 12;
    return new Array(Truc[t], t)
}

function DateDiff(n, h, t) {
    var i, g, a = new Date(n),
        c = new Date(h);
    switch (t) {
        case "Nam":
            i = a.getFullYear(), g = c.getFullYear();
            break;
        case "Ngay":
            i = Math.floor(a / 864e5), g = Math.floor(c / 864e5);
            break;
        default:
            return
    }
    return g - i
}

function jdFromDate(n, h, t) {
    var i, g, a, c;
    return g = t + 4800 - (i = Math.floor((14 - h) / 12)), a = h + 12 * i - 3, (c = n + Math.floor((153 * a + 2) / 5) + 365 * g + Math.floor(g / 4) - Math.floor(g / 100) + Math.floor(g / 400) - 32045) < 2299161 && (c = n + Math.floor((153 * a + 2) / 5) + 365 * g + Math.floor(g / 4) - 32083), c
}

function jdToDate(n) {
    var h, t, i, g, a, c, e, o, l;
    return i = 2299160 < n ? (h = n + 32044, t = Math.floor((4 * h + 3) / 146097), h - Math.floor(146097 * t / 4)) : (t = 0, n + 32082), g = Math.floor((4 * i + 3) / 1461), a = i - Math.floor(1461 * g / 4), c = Math.floor((5 * a + 2) / 153), e = a - Math.floor((153 * c + 2) / 5) + 1, o = c + 3 - 12 * Math.floor(c / 10), l = 100 * t + g - 4800 + Math.floor(c / 10), new Array(e, o, l)
}

function getNewMoonDay(n, h) {
    var t, i, g, a, c, e, o, l, s, u;
    return g = (i = (t = n / 1236.85) * t) * t, a = Math.PI / 180, c = 2415020.75933 + 29.53058868 * n + 1178e-7 * i - 155e-9 * g, c += 33e-5 * Math.sin((166.56 + 132.87 * t - .009173 * i) * a), e = 359.2242 + 29.10535608 * n - 333e-7 * i - 347e-8 * g, o = 306.0253 + 385.81691806 * n + .0107306 * i + 1236e-8 * g, l = 21.2964 + 390.67050646 * n - .0016528 * i - 239e-8 * g, s = (s = (.1734 - 393e-6 * t) * Math.sin(e * a) + .0021 * Math.sin(2 * a * e)) - .4068 * Math.sin(o * a) + .0161 * Math.sin(2 * a * o), u = c + (s = (s = (s = (s = (s -= 4e-4 * Math.sin(3 * a * o)) + .0104 * Math.sin(2 * a * l) - .0051 * Math.sin(a * (e + o))) - .0074 * Math.sin(a * (e - o)) + 4e-4 * Math.sin(a * (2 * l + e))) - 4e-4 * Math.sin(a * (2 * l - e)) - 6e-4 * Math.sin(a * (2 * l + o))) + .001 * Math.sin(a * (2 * l - o)) + 5e-4 * Math.sin(a * (2 * o + e))) - (t < -11 ? .001 + 839e-6 * t + 2261e-7 * i - 845e-8 * g - 81e-9 * t * g : 265e-6 * t - 278e-6 + 262e-6 * i), Math.floor(u + .5 + h / 24)
}

function getSunLongitude(n, h) {
    var t, i, g, a, c;
    return i = (t = (n - 2451545.5 - h / 24) / 36525) * t, g = Math.PI / 180, a = 357.5291 + 35999.0503 * t - 1559e-7 * i - 48e-8 * t * i, c = 280.46645 + 36000.76983 * t + 3032e-7 * i + ((1.9146 - .004817 * t - 14e-6 * i) * Math.sin(g * a) + (.019993 - 101e-6 * t) * Math.sin(2 * g * a) + 29e-5 * Math.sin(3 * g * a)), c *= g, c -= 2 * Math.PI * Math.floor(c / (2 * Math.PI)), Math.floor(c / Math.PI * 6)
}

function getSunLongitude2(n) {
    var h, t, i, g, a;
    return t = (h = (n - 2451545.5 - 7 / 24) / 36525) * h, i = Math.PI / 180, g = 357.5291 + 35999.0503 * h - 1559e-7 * t - 48e-8 * h * t, a = 280.46645 + 36000.76983 * h + 3032e-7 * t + ((1.9146 - .004817 * h - 14e-6 * t) * Math.sin(i * g) + (.019993 - 101e-6 * h) * Math.sin(2 * i * g) + 29e-5 * Math.sin(3 * i * g)), Math.floor(a) % 360
}

function getLunarMonth11(n, h) {
    var t, i, g;
    return i = jdFromDate(31, 12, n) - 2415021, 9 <= getSunLongitude(g = getNewMoonDay(t = Math.floor(i / 29.530588853), h), h) && (g = getNewMoonDay(t - 1, h)), g
}

function getLeapMonthOffset(n, h) {
    var t, i, g, a;
    for (i = 0, g = getSunLongitude(getNewMoonDay((t = Math.floor((n - 2415021.076998695) / 29.530588853 + .5)) + (a = 1), h), h); i = g, (g = getSunLongitude(getNewMoonDay(t + ++a, h), h)) != i && a < 14;);
    return a - 1
}

function convertSolar2Lunar(n, h, t, i) {
    var g, a, c, e, o, l, s, u, r, m;
    return (a = jdFromDate(n, h, t)) < (c = getNewMoonDay((g = Math.floor((a - 2415021.076998695) / 29.530588853)) + 1, i)) && (c = getNewMoonDay(g, i)), c <= (o = e = getLunarMonth11(t, i)) ? e = getLunarMonth11((u = t) - 1, i) : o = getLunarMonth11(u = t + 1, i), l = a - c + 1, diff = Math.floor((c - e) / 29), r = 0, s = diff + 11, 365 < o - e && (leapMonthDiff = getLeapMonthOffset(e, i), diff >= leapMonthDiff && (s = diff + 10, diff == leapMonthDiff && (r = 1))), 12 < s && (s -= 12), 11 <= s && diff < 4 && (u -= 1), m = 0 < r ? Math.floor(s).toString() + "(Nhuận)" : Math.floor(s).toString(), new Array(l, s, u, m)
}

function convertLunar2Solar(n, h, t, i, g) {
    var a, c, e, o;
    if ((c = h - 11) < 0 && (c += 12), 365 < (h < 11 ? (a = getLunarMonth11(t - 1, g), getLunarMonth11(t, g)) : (a = getLunarMonth11(t, g), getLunarMonth11(t + 1, g))) - a) {
        if ((o = (e = getLeapMonthOffset(a, g)) - 2) < 0 && (o += 12), 0 != i && h != o) return new Array(0, 0, 0);
        (0 != i || e <= c) && (c += 1)
    }
    return jdToDate(getNewMoonDay(Math.floor(.5 + (a - 2415021.076998695) / 29.530588853) + c, g) + n - 1)
}

function CreateCalendarUCWidget() {
    function t() {
        $month = $("#custom-month").val(cal.getMonthName()), $year = $("#custom-year").val(cal.getYear())
    }
    $calendar = $("#calendar"), cal = $calendar.calendario({
        onDayClick: function (n, h, t) {
            var i, g, a;
            i = t, g = new Date, a = ("" == GetFullString(i.day) ? g.getDate() : GetFullString(i.day)) + split_1 + ("" == GetFullString(i.month) ? g.getMonth() + 1 : GetFullString(i.month)) + split_1 + i.year.toString(), i.year.toString(), GetFullString(i.month), GetFullString(i.day), window.location = "/lich-ngay-" + a.replace("/", "-") + ".html"
        },
        caldata: null,
        displayWeekAbbr: !0
    }), $month = $("#custom-month").val(cal.getMonthName()), $year = $("#custom-year").val(cal.getYear()), $("#custom-next").on("click", function () {
        cal.gotoNextMonth(t)
    }), $("#custom-prev").on("click", function () {
        cal.gotoPreviousMonth(t)
    }), $("#custom-current").on("click", function () {
        cal.gotoNow(t)
    }), $("#custom-month").on("change", function () {
        var n = parseInt($("#custom-month").val()) - 1,
            h = parseInt($("#custom-year").val());
        cal.goto(n, h, t)
    }), $("#custom-year").on("change", function () {
        var n = parseInt($("#custom-month").val()) - 1,
            h = parseInt($("#custom-year").val());
        cal.goto(n, h, t)
    })
}

function CreateCalendarUCRight() {
    function t() {
        $month = $("#custom-month-right").val(calRight.getMonthName()), $year = $("#custom-year-right").val(calRight.getYear())
    }
    $calendar = $("#calendar-right"), calRight = $calendar.calendario({
        onDayClick: function (n, h, t) {
            var i, g, a;
            i = t, g = new Date, a = ("" == GetFullString(i.day) ? g.getDate() : GetFullString(i.day)) + split_1 + ("" == GetFullString(i.month) ? g.getMonth() + 1 : GetFullString(i.month)) + split_1 + i.year.toString(), i.year.toString(), GetFullString(i.month), GetFullString(i.day), window.location = "/lich-ngay-" + a.replace("/", "-") + ".html"
        },
        caldata: null,
        displayWeekAbbr: !0
    }), $month = $("#custom-month-right").val(calRight.getMonthName()), $year = $("#custom-year-right").val(calRight.getYear()), $("#custom-next-right").on("click", function () {
        calRight.gotoNextMonth(t)
    }), $("#custom-prev-right").on("click", function () {
        calRight.gotoPreviousMonth(t)
    }), $("#custom-current-right").on("click", function () {
        calRight.gotoNow(t)
    }), $("#custom-month-right").on("change", function () {
        var n = parseInt($("#custom-month-right").val()) - 1,
            h = parseInt($("#custom-year-right").val());
        calRight.goto(n, h, t)
    }), $("#custom-year-right").on("change", function () {
        var n = parseInt($("#custom-month-right").val()) - 1,
            h = parseInt($("#custom-year-right").val());
        calRight.goto(n, h, t)
    })
}

function CreateCalendarFull() {
    function i() {
        n.val(g.getMonthName()), h.val(g.getYear()), ShowDayDetail()
    }
    var g = $("#calendar").calendario({
        onDayClick: function (n, h, t) {
            var i = t.year.toString() + split_1 + GetFullString(t.month) + split_1 + GetFullString(t.day);
            $.cookie(CookieName, i, {
                expires: 7,
                path: "/"
            }), ("" + window.location).indexOf(ShowDetailUrl) < 0 ? window.location = ShowDetailUrl : ($(".fc-selectedday").removeClass("fc-selectedday"), n.addClass("fc-selectedday"))
        },
        caldata: null
    }),
        n = $("#custom-month").val(g.getMonthName()),
        h = $("#custom-year").val(g.getYear());
    $("#custom-next").on("click", function () {
        g.gotoNextMonth(i)
    }), $("#custom-prev").on("click", function () {
        g.gotoPreviousMonth(i)
    }), $("#custom-current").on("click", function () {
        g.gotoNow(i)
    }), $("#custom-month").on("change", function () {
        var n = parseInt($("#custom-month").val()) - 1,
            h = parseInt($("#custom-year").val());
        g.goto(n, h, i)
    }), $("#custom-year").on("change", function () {
        var n = parseInt($("#custom-month").val()) - 1,
            h = parseInt($("#custom-year").val());
        g.goto(n, h, i)
    }), $("#custom-year").on("keypress", function (n) {
        if (13 == n.keyCode) {
            var h = parseInt($("#custom-month").val()) - 1,
                t = parseInt($("#custom-year").val());
            return g.goto(h, t, i), !1
        }
    })
}

function GetSelectedDate() {
    var n, h = $.cookie(CookieName);
    if (h) n = h.split(split_1);
    else {
        var t = new Date;
        n = (h = t.getFullYear().toString() + split_1 + t.getMonth().toString() + split_1 + t.getDate().toString()).split(split_1)
    }
    return new Array(n[2], n[1], n[0], h)
}

function ShowDayDetail() {
    var n, h = new Date,
        t = GetSelectedDate(),
        i = t[3],
        g = parseInt(t[0]),
        a = parseInt(t[1]),
        c = parseInt(t[2]),
        e = convertSolar2Lunar(g, a, c, 7),
        o = parseInt(e[0]),
        l = parseInt(e[1]),
        s = parseInt(e[2]),
        u = (TinhCanGio(i, h.getHours()), TinhChiGio(h.getHours()), TinhCanNgay(i)),
        r = TinhChiNgay(i),
        m = TinhCanThang(l, s),
        y = TinhChiThang(l),
        d = TinhCanNam(i),
        p = TinhChiNam(i),
        v = TinhNgayHoangDao(i, l),
        N = LayGioHoangDao(i),
        b = TinhMenhNguHanh(i, "Ngay"),
        f = TinhMenhNguHanh(i, "Nam"),
        k = TinhTietKhi(i),
        T = TinhTruc(i);
    n = 1 == v ? '<div class="ngayhoangdao">Ngày hoàng đạo <img src="' + ImagePath + 'hoangdao.png"></img></div>' : '<div class="ngayhacdao">Ngày hắc đạo <img src="' + ImagePath + 'ngay-hac-dao.png"></img></div>', $("#thangnamduong").html("Tháng " + GetFullString(a) + " Năm " + GetFullString(c)), $("#ngayduong").html(GetFullString(g)), $("#ThuTuan").html(GetTuan(g, a, c)), $("#thangam").html(GetThang(l)), $("#ngayam").html(GetFullString(o)), $("#battu").html("<div class='thongtinleft_noidung'><strong>Năm " + d[0] + " " + p[0] + "</strong></div><div class='thongtinleft_noidung'>Tháng " + m[0] + " " + y[0] + "</div><div class='thongtinleft_noidung'>Ngày " + u[0] + " " + r[0] + "</div>"), $("#hoangdao").html(n), $("#giohoangdao").html(N), $("#menhngay").html("<b>Mệnh ngày:</b><br />" + b[0] + "<br />(" + b[1] + ")"), $("#menhnam").html(f[0] + "(" + f[1] + ")"), $("#tietkhi").html("<b>Tiết khí:</b><br />" + k[0]), $("#truc").html(T[0]), AddlAnhNen(g, a, c), AddAnhConGiap(i);
    var C, M = "",
        H = "",
        D = "",
        x = "",
        w = "",
        L = "";
    C = BuldJsonUrl(GetFullString(g) + GetFullString(a) + GetFullString(c)), $.getJSON(C, {
        format: "json"
    }).done(function (n) {
        $("#DanhNgon").html(n.DanhNgon), $.each(n.mListNhiThapBatTusView, function (n, h) {
            M += h.Contents
        }), $("#nhithapbattu").html(M), $.each(n.mListHolidays, function (n, h) {
            L += h.HolidayDesc + "<br />"
        }), $("#Holiday").html(L), $.each(n.mListSaosView, function (n, h) {
            1 == h.SaoTypeId ? x += h.SaoName + ": " + h.SaoDesc + "<br />" : w += h.SaoName + ": " + h.SaoDesc + "<br />"
        }), $("#saotot").html(x), $("#saoxau").html(w), $.each(n.mListNgayNayNamXuasView, function (n, h) {
            "Sự kiện trong nước" == h.EventTypeDesc ? H += '<div class="tieudechiet_day"><div class="tieudechiet_day12">' + h.EventTime + '</div><div class="tieudechiet_day13">' + h.EventContent + "</div></div>" : "Sự kiện Quốc tế" == h.EventTypeDesc && (D += '<div class="tieudechiet_day"><div class="tieudechiet_day12">' + h.EventTime + '</div><div class="tieudechiet_day13">' + h.EventContent + "</div></div>")
        }), $("#NgayNayNamXuaTrongNuoc").html(H), $("#NgayNayNamXuaQuocTe").html(D)
    })
}

function BuldJsonUrl(n) {
    var h = "/CalendarService.svc/DayDetailView_Get/";
    return h += n + ",1", h += ",1", h += ",1", h += ",1", (h += "," + $("input[id *='hdfJsonAppKey']").val()) + ",1_0"
}

function GetFullString(n) {
    return n < 10 ? "0" + n.toString() : n.toString()
}

function GetTuan(n, h, t) {
    var i = jdFromDate(n, h, t);
    return TUAN[(i + 1) % 7]
}

function GetThang(n) {
    return "Tháng " + THANG[n -= 1]
}

function AddlAnhNen() {
    try {
        String(GetRandomNumber())
    } catch (n) {
        alert(n)
    }
}

function AddAnhConGiapLVSICSOFT(n) {
    var h = DateDiff(NgayBatDauNam, n, "Ngay");
    h = (12 + h % 12) % 12;
    var t = Array(["Ti", "Suu", "Dan", "Mao", "Thin", "Ty", "Ngo", "Mui", "Than", "Dau", "Tuat", "Hoi"][h], h),
        i = ImagePathLVSICSOFT + "images/con-giap/" + t[0] + ".png",
        g = document.getElementsByClassName("widgetlich-lvsicsoft")[0].getElementsByClassName("con-giap-12-lvsicsoft")[0];
    g.style.backgroundImage = "url('" + i + "')", g.style.backgroundRepeat = "no-repeat"
}

function GetRandomNumber() {
    var n = Math.floor(10 * Math.random() + 1);
    return 6 < n && (n = 10 == n ? 1 : 10 - n), n
}

function MyRandom(n, h) {
    return Math.floor(Math.random() * (h - n + 1) + n)
}

function getNgayKyNiem(n) {
    for (var h = new Date(n), t = convertSolar2Lunar(h.getDate(), h.getMonth() + 1, h.getFullYear(), 0), i = NGAYKYNIEM.length, g = -1, a = 0; a < i; a++) {
        var c = NGAYKYNIEM[a];
        if (parseInt(c.day) == h.getDate() && parseInt(c.month) == h.getMonth() + 1 && 1 == parseInt(c.type)) return c.desc;
        if (parseInt(c.day) == parseInt(t[0]) && parseInt(c.month) == parseInt(t[1]) && 2 == parseInt(c.type)) return c.desc;
        g = -1
    }
    return -1 == g ? null : void 0
}
var styleLichNgay = "<style>.widgetlich-lvsicsoft img{border:none}.widgetlich-lvsicsoft .clear10px{height:10px;float:left;width:100%}.widgetlich-lvsicsoft a{text-decoration:none}.widgetlich-lvsicsoft h1,.widgetlich-lvsicsoft h2,.widgetlich-lvsicsoft h3,.widgetlich-lvsicsoft h4,.widgetlich-lvsicsoft h5,.widgetlich-lvsicsoft h6,.widgetlich-lvsicsoft p{margin:0}.widgetlich-lvsicsoft .slideshow-lvsicsoft{background:#fff;position:relative;overflow:hidden;float:left;width:100%;height:556px;min-width:300px}.slideshow-lvsicsoft .slide-lvsicsoft,.slideshow-lvsicsoft>button,.widgetlich-lvsicsoft .slideshow-lvsicsoft .strip-lvsicsoft{-webkit-perspective:1000;-webkit-backface-visibility:hidden}.widgetlich-lvsicsoft .slideshow-lvsicsoft .slide-lvsicsoft{position:absolute;display:block;text-align:center;outline:0}.widgetlich-lvsicsoft .slideshow-lvsicsoft>button{z-index:1;left:0;padding:0 10px 0 7px;position:absolute;top:20%;display:block;width:40px;height:36px}.widgetlich-lvsicsoft .slideshow-lvsicsoft button.next-lvsicsoft{left:auto;right:0}.widgetlich-lvsicsoft .slideshow-lvsicsoft .strip-lvsicsoft{padding-bottom:75%}.widgetlich-lvsicsoft .slideshow-lvsicsoft button{margin:0;background:0 0;border:0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.widgetlich-lvsicsoft .slideshow-lvsicsoft>button b{display:block;width:23px;height:36px;background:url(https://lichngaytot.com/Content/Images/arrow.png) 0 -36px no-repeat;background-size:23px 72px;text-indent:-10000px}.widgetlich-lvsicsoft .slideshow-lvsicsoft button.next-lvsicsoft b{background-position:0 0;left:10px}.widgetlich-lvsicsoft .khung-lich-lvsicsoft{border:1px solid #000;float:left;width:99%}.widgetlich-lvsicsoft .td_lich-lvsicsoft{background:#c50000;float:left;height:40px;line-height:40px;width:100%}.widgetlich-lvsicsoft .td_lich_left-lvsicsoft{float:left;text-align:center;width:20%}.widgetlich-lvsicsoft .td_lich_left-lvsicsoft>span{color:#fff;font-size:14px;text-transform:uppercase}.widgetlich-lvsicsoft .td_lich_center-lvsicsoft{float:left;text-align:center;width:60%}.widgetlich-lvsicsoft .td_lich_center-lvsicsoft>span{color:#fff;font-size:18px;text-transform:uppercase}.widgetlich-lvsicsoft .td_lich_right-lvsicsoft{float:right;text-align:center;width:20%}.widgetlich-lvsicsoft .td_lich_right-lvsicsoft>span{color:#fff;font-size:14px;text-transform:uppercase}.widgetlich-lvsicsoft .lich-conten-lvsicsoft{float:left;width:100%}.widgetlich-lvsicsoft .lich-icon-left-lvsicsoft{float:left;margin-top:70px;text-align:center;width:10%}.widgetlich-lvsicsoft .lich-conten-center-lvsicsoft{float:left;height:160px;line-height:160px;text-align:center;width:100%}.widgetlich-lvsicsoft .lich-conten-center-lvsicsoft>span{font-size:140px;color:#c50000}.widgetlich-lvsicsoft .lich-icon-right-lvsicsoft{margin-top:70px;float:right;text-align:center;width:10%}.widgetlich-lvsicsoft .danh-ngon-lvsicsoft{float:left;width:100%;height:70px}.widgetlich-lvsicsoft .danh-ngon-lvsicsoft>p{line-height:13px; font-size: 12px;padding:0 10px;text-align:center;margin:0}.widgetlich-lvsicsoft .lich-tom-tat-lvsicsoft{float:left;width:100%;padding-bottom:8px;padding-top:8px;border-top:solid 10px #58585a}.widgetlich-lvsicsoft .licht-tam-tat-col1-lvsicsoft{float:left;width:33%;text-align:center}.widgetlich-lvsicsoft .licht-tam-tat-col1-lvsicsoft>p{font-size:10px;text-transform:uppercase;line-height:18px}.widgetlich-lvsicsoft .con-giap-12-lvsicsoft{float:left;width:100%;height:120px}.widgetlich-lvsicsoft .l-thang-lvsicsoft{float:left;font-size:11px;text-transform:uppercase;width:100%}.widgetlich-lvsicsoft .l-am-lvsicsoft{float:left;font-size:80px;height:100px;width:100%}.l-am-lvsicsoft span {float:left;margin-top:30px; width: 100%;}.widgetlich-lvsicsoft .con-giap-12-lvsicsoft>p{float:left;font-size:10px;text-transform:uppercase;width:100%}.widgetlich-lvsicsoft .gio-hoang-hac-dao-lvsicsoft{float:left;width:100%}.widgetlich-lvsicsoft .fooder_lich-lvsicsoft{background:#c50000;float:left;padding-bottom:7px;padding-top:10px;width:100%}.widgetlich-lvsicsoft .fooder_lich_left-lvsicsoft{float:left;text-align:center;width:100px}.widgetlich-lvsicsoft .fooder_lich_left-lvsicsoft>a{color:#fff;font-size:12px;text-transform:uppercase;float:left;width:100%}.widgetlich-lvsicsoft .fooder_lich_right-lvsicsoft{float:right;text-align:center;width:150px}.widgetlich-lvsicsoft .fooder_lich_right-lvsicsoft>a{color:#fff;font-size:12px;text-transform:uppercase;float:left;width:100%}.widgetlich-lvsicsoft .noibat2-item-lvsicsoft{float:left;width:100%}.widgetlich-lvsicsoft .bong-da-item-2-lvsicsoft{float:left;margin-right:30px;padding-bottom:15px;padding-top:15px;width:300px}.widgetlich-lvsicsoft .thunal100x60-lvsicsoft{float:left}.widgetlich-lvsicsoft .thunal100x60-lvsicsoft img{float:left;height:60px;margin-right:20px;width:100px}.widgetlich-lvsicsoft .h3-seo-lvsicsoft{font-size:13px;max-height:90px;font-weight:700;overflow:hidden}.widgetlich-lvsicsoft .h3-seo-lvsicsoft>a{color:#252525}.widgetlich-lvsicsoft .h3-seo-lvsicsoft>a:hover{color:#c50000}.widgetlich-lvsicsoft .bong-da-item-2-lvsicsoft>p{padding-top:6px}</style>",
    ngayhientain, data_urlimagen = "",
    data_colorbordern = "#fff",
    data_coloramn = "#c0c0c0",
    data_colorduongn = "#000";
setInterval("startClockWidgetlvs()", 1e3);
var NgayBatDauChi = "1924-02-15",
    NgayBatDauCan = "1924-02-15",
    NgayBatDauNam = "1924-02-15",
    DaiMinh = ["Tân Mùi", "Nhâm Thân", "Quý Dậu", "Đinh Sửu", "Kỷ Mẹo", "Nhâm Ngọ", "Giáp Thân", "Đinh Hợi", "Nhâm Thìn", "Ất Mùi", "Nhâm Dần", "Giáp Thìn", "Ất Tị", "Bính Ngọ", "Kỷ Dậu", "Canh Tuất", "Tân Hợi", "Bính Thìn", "Kỷ Mùi", "Canh Thân", "Tân Dậu"],
    Chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"],
    Can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"],
    KhoangGio = ["23h - 1h", "1h-3h", "3h-5h", "5h-7h", "7h-9h", "9h-11h", "11h-13h", "13h-15h", "15h-17h", "17h-19h", "19h-21h", "21h-23h"],
    MenhNguHanh = ["Hải Trung Kim", "Lư Trung Hỏa", "Đại Lâm Mộc", "Lộ Bàng Thổ", "Kiếm Phong Kim", "Sơn Đầu Hỏa", "Giản Hạ Thủy", "Thành Đầu Thổ", "Bạch Lạp Kim", "Dương Liễu Mộc", "Tuyền Trung Thủy", "Ốc Thượng Thổ", "Tích Lịch Hỏa", "Tùng Bách Mộc", "Trường Lưu Thủy", "Sa Trung Kim", "Sơn Hạ Hỏa", "Bình Địa Mộc", "Bích Thượng Thổ", "Kim Bạch Kim", "Phú Đăng Hỏa", "Thiên Hà Thủy", "Đại Trạch Thổ", "Thoa Xuyến Kim", "Tang Đồ Mộc", "Đại Khê Thủy", "Sa Trung Thổ", "Thiên Thượng Hỏa", "Thạch Lựu Mộc ", "Đại Hải Thủy"],
    MenhNguHanh2 = ["Vàng trong biển", "Lửa trong lò", "Cây rừng lớn", "Đất ven đường", "Vàng đầu kiếm", "Lửa trên núi", "Nước dưới sông", "Đất trên thành", "Vàng chân đèn", "Cây dương liễu", "Nước trong giếng", "Đất mái nhà", "Lửa sấm chớp", "Cây tùng bách", "Nước giữa dòng", "Vàng trong cát", "Lửa chân núi", "Cây đất bằng", "Đất trên vách", "Vàng lá trắng", "Lửa đèn to", "Nước trên trời", "Đất đầm lầy", "Vàng trang sức", "Gỗ cây dâu", "Nước giữa khe lớn", "Đất trong cát", "Lửa trên trời", "Gỗ Thạch Lựu", "Nước biển lớn"],
    TietKhi = ["Lập xuân", "Vũ thủy", "Kinh trập", "Xuân phân", "Thanh minh", "Cốc vũ", "Lập hạ", "Tiểu mãn", "Mang chủng", "Hạ chí", "Tiểu thử", "Đại thử", "Lập thu", "Xử thử", "Bạch lộ", "Thu phân", "Hàn lộ", "Sương giáng", "Lập đông", "Tiểu tuyết", "Đại tuyết", "Đông chí", "Tiểu hàn", "Đại hàn"],
    Truc = ["Kiến (tốt)", "Trừ (thường)", "Mãn (tốt)", "Bình (tốt)", "Định (tốt)", "Chấp (thường)", "Phá (xấu)", "Nguy (xấu)", "Thành (tốt)", "Thu (thường)", "Khai (tốt)", "Bế (xấu)"],
    TUAN = new Array("Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"),
    THANG = new Array("Giêng", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười", "Mười Một", "Chạp"),
    NGAYKYNIEM = new Array({
        desc: "Ngày Sinh viên - Học sinh Việt Nam",
        day: 9,
        month: 1,
        type: 1
    }, {
            desc: "Tổng tuyển cử quốc hội khóa đầu tiên của nước Việt Nam (6.1.1946)",
            day: 6,
            month: 1,
            type: 1
        }, {
            desc: "Ngày Sinh viên - Học sinh Việt Nam",
            day: 9,
            month: 1,
            type: 1
        }, {
            desc: "Tổng tuyển cử quốc hội khóa đầu tiên của nước Việt Nam (6.1.1946)",
            day: 6,
            month: 1,
            type: 1
        }, {
            desc: "Việt Nam chính thức gia nhập WTO (11.1.2007)",
            day: 11,
            month: 1,
            type: 1
        }, {
            desc: "Ký Hiệp định Pari chấm dứt chiến tranh ở Việt Nam (27.1.1973)",
            day: 27,
            month: 1,
            type: 1
        }, {
            desc: "Kỷ niệm ngày sinh Phạm Quỳnh - Nhà văn hóa kỳ tài của Việt Nam (30.1.1893)",
            day: 30,
            month: 1,
            type: 1
        }, {
            desc: 'Ngày sinh "ông Hoàng thơ tình Việt Nam" - Xuân Diệu (2.2.1916)',
            day: 2,
            month: 2,
            type: 1
        }, {
            desc: "Ngày thành lập Đảng Cộng sản Việt Nam (3.2.1930)",
            day: 3,
            month: 2,
            type: 1
        }, {
            desc: "Ngày thống nhất các tổ chức mặt trận thành mặt trận Tổ quốc Việt Nam (4.2.1977)",
            day: 4,
            month: 2,
            type: 1
        }, {
            desc: "Nguyễn Ái Quốc về nước (tới Cao Bằng) trực tiếp chỉ đạo cách mạng (8.2.1941)",
            day: 8,
            month: 2,
            type: 1
        }, {
            desc: "Ngày sinh Thomas Alva Edison - nhà phát minh vĩ đại (11.2.1847)",
            day: 11,
            month: 2,
            type: 1
        }, {
            desc: "Ngày sinh nhà sinh vật học người Anh Charles Robert Darwin (Đac-uyn) (12.2.1809)",
            day: 12,
            month: 2,
            type: 1
        }, {
            desc: "Lễ Tình nhân (Valentine)",
            day: 14,
            month: 2,
            type: 1
        }, {
            desc: "Ngày sinh Galilê - Cha đẻ của khoa học cận đại (15.2.1564)",
            day: 15,
            month: 2,
            type: 1
        }, {
            desc: "Pháp đánh chiếm tỉnh thành Gia Định (17.2.1859)",
            day: 17,
            month: 2,
            type: 1
        }, {
            desc: "Ngày sinh Nhà thiên văn học Nicolaus Copernicus (19.2.1473)",
            day: 19,
            month: 2,
            type: 1
        }, {
            desc: "Ngày Công bằng xã hội thế giới (từ năm 2009)",
            day: 20,
            month: 2,
            type: 1
        }, {
            desc: "Ngày Ngôn ngữ mẹ đẻ Quốc tế ",
            day: 21,
            month: 2,
            type: 1
        }, {
            desc: "Ngày thầy thuốc Việt Nam",
            day: 27,
            month: 2,
            type: 1
        }, {
            desc: "Ngày Quốc tế Phụ nữ",
            day: 8,
            month: 3,
            type: 1
        }, {
            desc: "Khởi nghĩa Ba Tơ tại Quảng Ngãi (11.3.1945)",
            day: 11,
            month: 3,
            type: 1
        }, {
            desc: "Ngày sinh nhà bác học thiên tài Albert Einstein (14.3.1879)",
            day: 14,
            month: 3,
            type: 1
        }, {
            desc: "Ngày toàn quốc chống Mỹ (19.3.1950)",
            day: 19,
            month: 3,
            type: 1
        }, {
            desc: "Ngày Hội chứng Down thế giới và Ngày Quốc tế xóa bỏ phân biệt chủng tộc",
            day: 21,
            month: 3,
            type: 1
        }, {
            desc: "Ngày Nước Thế giới",
            day: 22,
            month: 3,
            type: 1
        }, {
            desc: "Ngày Khí tượng Thế giới",
            day: 23,
            month: 3,
            type: 1
        }, {
            desc: "Ngày thành lập Đoàn TNCS Hồ Chí Minh",
            day: 26,
            month: 3,
            type: 1
        }, {
            desc: "Ngày Cá Tháng Tư",
            day: 1,
            month: 4,
            type: 1
        }, {
            desc: "Ngày Quốc tế Nhận thức bom mìn và Hỗ trợ bằng hành động chống bom mìn",
            day: 4,
            month: 4,
            type: 1
        }, {
            desc: "Ngày Y tế Thế giới",
            day: 7,
            month: 4,
            type: 1
        }, {
            desc: "Tết Dân tộc Khmer Nam Bộ",
            day: 14,
            month: 4,
            type: 1
        }, {
            desc: "Ngày sinh Lê Nin (22.4.1870)",
            day: 22,
            month: 4,
            type: 1
        }, {
            desc: "Ngày Sách và Bản quyền Thế giới",
            day: 23,
            month: 4,
            type: 1
        }, {
            desc: "Ngày Sở hữu trí tuệ thế giới",
            day: 26,
            month: 4,
            type: 1
        }, {
            desc: "Ngày Giải phóng miền Nam thống nhất đất nước (30.4.1975)",
            day: 30,
            month: 4,
            type: 1
        }, {
            desc: "Ngày Quốc tế Lao động",
            day: 1,
            month: 5,
            type: 1
        }, {
            desc: "Ngày Tự do Báo chí thế giới",
            day: 3,
            month: 5,
            type: 1
        }, {
            desc: "Ngày sinh Các - Mác (5.5.1818)",
            day: 5,
            month: 5,
            type: 1
        }, {
            desc: "Chiến thắng Điện Biên Phủ(7.5.1954)",
            day: 7,
            month: 5,
            type: 1
        }, {
            desc: "Ngày thành lập Đội thiếu niên tiền phong Hồ Chí Minh (15.5.1941)",
            day: 15,
            month: 5,
            type: 1
        }, {
            desc: "Ngày Xã hội Thông tin Thế giới",
            day: 17,
            month: 5,
            type: 1
        }, {
            desc: "Ngày sinh Chủ tịch Hồ Chí Minh(19.5.1890)",
            day: 19,
            month: 5,
            type: 1
        }, {
            desc: "Ngày Thế giới về Đa dạng Văn hóa vì Đối thoại và Phát triển",
            day: 21,
            month: 5,
            type: 1
        }, {
            desc: "Ngày quốc tế Đa dạng sinh học (trước đây là 29 tháng 12, thay đổi vào năm 2001)",
            day: 22,
            month: 5,
            type: 1
        }, {
            desc: "Ngày Quốc tế Gìn giữ hòa bình Liên Hiệp Quốc",
            day: 29,
            month: 5,
            type: 1
        }, {
            desc: "Ngày Thế giới không thuốc lá",
            day: 31,
            month: 5,
            type: 1
        }, {
            desc: "Ngày Quốc tế Thiếu nhi",
            day: 1,
            month: 6,
            type: 1
        }, {
            desc: "Ngày Quốc tế của trẻ em vô tội và là nạn nhân bị xâm lược",
            day: 4,
            month: 6,
            type: 1
        }, {
            desc: "Ngày Môi trường Thế giới",
            day: 5,
            month: 6,
            type: 1
        }, {
            desc: "Ngày Thế giới chống sa mạc hóa và hạn hán",
            day: 17,
            month: 6,
            type: 1
        }, {
            desc: "Ngày Tị nạn Thế giới",
            day: 20,
            month: 6,
            type: 1
        }, {
            desc: "Ngày Dịch vụ Công cộng Liên Hiệp Quốc",
            day: 23,
            month: 6,
            type: 1
        }, {
            desc: "Ngày Quốc tế chống lạm dụng ma túy và buôn bán bất hợp pháp",
            day: 26,
            month: 6,
            type: 1
        }, {
            desc: "Ngày Gia đình Việt Nam",
            day: 28,
            month: 6,
            type: 1
        }, {
            desc: "Quốc hội Khóa VI quyết nghị lấy tên nước là Cộng hòa Xã hội Chủ nghĩa Việt Nam (2.7.1976)",
            day: 2,
            month: 7,
            type: 1
        }, {
            desc: "Ngày Hôn thế giới (World Kiss)",
            day: 6,
            month: 7,
            type: 1
        }, {
            desc: "Ngày Dân số Thế giới ",
            day: 11,
            month: 7,
            type: 1
        }, {
            desc: "Ngày truyền thống Thanh niên xung phong",
            day: 15,
            month: 7,
            type: 1
        }, {
            desc: "Ngày thành lập Tổng liên đoàn lao động Việt Nam nay là Tổng Công đoàn Việt Nam",
            day: 20,
            month: 7,
            type: 1
        }, {
            desc: "Ngày Thương binh Liệt sĩ",
            day: 27,
            month: 7,
            type: 1
        }, {
            desc: "Ngày Việt Nam gia nhập ASEAN (28.7.1995)",
            day: 28,
            month: 7,
            type: 1
        }, {
            desc: "Ngày Quốc tế của người thổ dân thế giới",
            day: 9,
            month: 8,
            type: 1
        }, {
            desc: "Ngày Quốc tế Thanh Thiếu niên",
            day: 12,
            month: 8,
            type: 1
        }, {
            desc: "Cách mạng Tháng 8 thành công (19.8.1945)",
            day: 19,
            month: 8,
            type: 1
        }, {
            desc: "Ngày Quốc tế tưởng niệm việc buôn bán nô lệ và việc hủy bỏ nó.",
            day: 23,
            month: 8,
            type: 1
        }, {
            desc: "Bảo Đại thoái vị(25.8.1945)",
            day: 25,
            month: 8,
            type: 1
        }, {
            desc: "Ngày sinh tỷ phú Warren Edward Buffett (30.8.1930)",
            day: 30,
            month: 8,
            type: 1
        }, {
            desc: "Ngày sinh Đại tướng Võ Nguyên Giáp (25.8.1911)",
            day: 25,
            month: 8,
            type: 1
        }, {
            desc: "Chiến tranh thế giới thứ hai bùng nổ (1.9.1939)",
            day: 1,
            month: 9,
            type: 1
        }, {
            desc: "Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam",
            day: 2,
            month: 9,
            type: 1
        }, {
            desc: "Ngày Biết chữ Quốc tế (International Literacy Day)",
            day: 8,
            month: 9,
            type: 1
        }, {
            desc: "Ngày thành lập Mặt trận Tổ quốc Việt Nam (10.9.1955)",
            day: 10,
            month: 9,
            type: 1
        }, {
            desc: "Vụ khủng bố tại Mỹ (11.9.2001)",
            day: 11,
            month: 9,
            type: 1
        }, {
            desc: "Chiến dịch Xô Viết Nghệ Tĩnh (12.9.1930)",
            day: 12,
            month: 9,
            type: 1
        }, {
            desc: "Ngày Quốc tế Dân chủ",
            day: 15,
            month: 9,
            type: 1
        }, {
            desc: "Ngày Quốc tế Bảo vệ Tầng ôzôn",
            day: 16,
            month: 9,
            type: 1
        }, {
            desc: "Việt Nam gia nhập Liên Hiệp Quốc (20.9.1977)",
            day: 20,
            month: 9,
            type: 1
        }, {
            desc: "Ngày Quốc tế Hòa bình (trước đây là ngày khai mạc Đại hội đồng LHQ)",
            day: 21,
            month: 9,
            type: 1
        }, {
            desc: "Ngày sinh nhà bác học người Anh Michael Faraday (22.9.1791)",
            day: 22,
            month: 9,
            type: 1
        }, {
            desc: "Ngày Nam Bộ kháng chiến (23.9.1945)",
            day: 23,
            month: 9,
            type: 1
        }, {
            desc: "Khởi nghĩa Bắc Sơn (27.9.1940) và Ngày Du lịch thế giới.",
            day: 27,
            month: 9,
            type: 1
        }, {
            desc: "Ngày Quốc tế người cao tuổi",
            day: 1,
            month: 10,
            type: 1
        }, {
            desc: "Ngày Quốc tế bất bạo động",
            day: 2,
            month: 10,
            type: 1
        }, {
            desc: "Ngày Động vật thế giới",
            day: 4,
            month: 10,
            type: 1
        }, {
            desc: "Ngày Nhà giáo thế giới",
            day: 5,
            month: 10,
            type: 1
        }, {
            desc: "Ngày Bưu chính Thế giới",
            day: 9,
            month: 10,
            type: 1
        }, {
            desc: "Ngày Giải phóng Thủ đô (10.10.1954)",
            day: 10,
            month: 10,
            type: 1
        }, {
            desc: "Ngày Doanh nhân Việt Nam",
            day: 13,
            month: 10,
            type: 1
        }, {
            desc: "Ngày thành lập Hội Nông dân Việt Nam",
            day: 14,
            month: 10,
            type: 1
        }, {
            desc: "Ngày truyền thống Hội liên hiệp Thanh niên Việt Nam",
            day: 15,
            month: 10,
            type: 1
        }, {
            desc: "Ngày Lương thực thế giới",
            day: 16,
            month: 10,
            type: 1
        }, {
            desc: "Ngày quốc tế xóa nghèo",
            day: 17,
            month: 10,
            type: 1
        }, {
            desc: "Ngày thành lập Hội Liên hiệp Phụ nữ Việt Nam (20.10.1930)",
            day: 20,
            month: 10,
            type: 1
        }, {
            desc: "Ngày Liên Hiệp Quốc và Ngày Thông tin về Phát triển thế giới",
            day: 24,
            month: 10,
            type: 1
        }, {
            desc: "Ngày sinh nhà toán học thiên tài Galo (25.10.1811)",
            day: 25,
            month: 10,
            type: 1
        }, {
            desc: "Ngày sinh nữ bác học người Ba Lan Marie Curie (7.11.1867)",
            day: 7,
            month: 11,
            type: 1
        }, {
            desc: "Ngày sinh nhà bác học thiên tài người Nga Lomonoxop (8.11.1711)",
            day: 8,
            month: 11,
            type: 1
        }, {
            desc: "Ngày Bệnh dư đường Thế giới",
            day: 14,
            month: 11,
            type: 1
        }, {
            desc: "Ngày Khoan dung Quốc tế",
            day: 16,
            month: 11,
            type: 1
        }, {
            desc: "Ngày Nhà giáo Việt Nam",
            day: 20,
            month: 11,
            type: 1
        }, {
            desc: "Ngày Truyền hình thế giới",
            day: 21,
            month: 11,
            type: 1
        }, {
            desc: "Ngày khởi nghĩa Nam Kỳ (23.11.1940)",
            day: 23,
            month: 11,
            type: 1
        }, {
            desc: "Ngày quốc tế loại bỏ bạo lực đối với Phụ nữ",
            day: 25,
            month: 11,
            type: 1
        }, {
            desc: "Ngày Lâm nghiệp Việt Nam",
            day: 28,
            month: 11,
            type: 1
        }, {
            desc: "Ngày sinh Ăng ghen (28.11.1820)",
            day: 28,
            month: 11,
            type: 1
        }, {
            desc: "Ngày Quốc tế Đoàn kết với nhân dân Palestine",
            day: 29,
            month: 11,
            type: 1
        }, {
            desc: "Ngày thế giới phòng chống AIDS và Ngày Nhân quyền Quốc tế",
            day: 1,
            month: 12,
            type: 1
        }, {
            desc: "Ngày Quốc tế Giải phóng Nô lệ",
            day: 2,
            month: 12,
            type: 1
        }, {
            desc: "Ngày Người khuyết tật Quốc tế",
            day: 3,
            month: 12,
            type: 1
        }, {
            desc: "Ngày Tình nguyện Quốc tế vì sự phát triển kinh tế và xã hội",
            day: 5,
            month: 12,
            type: 1
        }, {
            desc: "Ngày Hàng không Dân dụng Quốc tế",
            day: 7,
            month: 12,
            type: 1
        }, {
            desc: "Ngày Quốc tế chống Tham nhũng",
            day: 9,
            month: 12,
            type: 1
        }, {
            desc: "Ngày Núi Quốc tế (International Mountain Day)",
            day: 11,
            month: 12,
            type: 1
        }, {
            desc: "Ngày quốc tế di dân",
            day: 18,
            month: 12,
            type: 1
        }, {
            desc: "Ngày toàn quốc kháng chiến (19.12.1946)",
            day: 19,
            month: 12,
            type: 1
        }, {
            desc: "Ngày Quốc tế Đoàn kết Nhân loại",
            day: 20,
            month: 12,
            type: 1
        }, {
            desc: "Ngày thành lập Quân đội nhân dân Việt Nam (22.12.1944)",
            day: 22,
            month: 12,
            type: 1
        }, {
            desc: "Lễ Giáng sinh và Kỷ niệm ngày sinh nhà bác học thiên tài Isaac Newton (25.12.1642)",
            day: 25,
            month: 12,
            type: 1
        }, {
            desc: "Ngày sinh nhà vi sinh học và hóa học người Pháp Louis Pasteur (27.12.1822)",
            day: 27,
            month: 12,
            type: 1
        }, {
            desc: "Tết Nguyên Đán",
            day: 1,
            month: 1,
            type: 2
        }, {
            desc: "Tết Nguyên Đán",
            day: 2,
            month: 1,
            type: 2
        }, {
            desc: "Tết Nguyên Đán",
            day: 3,
            month: 1,
            type: 2
        }, {
            desc: "Lễ hội Đồng Kỵ (Bắc Ninh)",
            day: 4,
            month: 1,
            type: 2
        }, {
            desc: "Lễ hội gò Đống Đa",
            day: 5,
            month: 1,
            type: 2
        }, {
            desc: "Hội Gióng Sóc Sơn (Hà Nội)",
            day: 6,
            month: 1,
            type: 2
        }, {
            desc: "Lễ hội Cổ Loa - Hà Nội (từ 6-16.1 âm lịch)",
            day: 6,
            month: 1,
            type: 2
        }, {
            desc: "Khai hội chùa Hương",
            day: 6,
            month: 1,
            type: 2
        }, {
            desc: "Hội chợ Viềng (Nam Định) và Lễ hội đầm Ô Loan (Phú Yên)",
            day: 7,
            month: 1,
            type: 2
        }, {
            desc: "Lễ hội đền Vua Bà (Hòa Bình)",
            day: 8,
            month: 1,
            type: 2
        }, {
            desc: "Lễ hội Đức Chí Tôn (Tây Ninh)",
            day: 9,
            month: 1,
            type: 2
        }, {
            desc: "Khai hội Yên Tử (Quảng Ninh)",
            day: 10,
            month: 1,
            type: 2
        }, {
            desc: "Hội Lim (Bắc Ninh)",
            day: 13,
            month: 1,
            type: 2
        }, {
            desc: "Lễ hội Bà Chúa Kho (Bắc Ninh)",
            day: 14,
            month: 1,
            type: 2
        }, {
            desc: "Tết Nguyên Tiêu",
            day: 15,
            month: 1,
            type: 2
        }, {
            desc: "Lễ hội chọi trâu (Vĩnh Phúc)",
            day: 17,
            month: 1,
            type: 2
        }, {
            desc: "Lễ Cầu tháng Giêng (Phú Thọ)",
            day: 27,
            month: 1,
            type: 2
        }, {
            desc: "Hội làng Bùi (Bắc Ninh)",
            day: 28,
            month: 1,
            type: 2
        }, {
            desc: "Hội làng Long Khám (Bắc Ninh)",
            day: 7,
            month: 2,
            type: 2
        }, {
            desc: "Lễ hội đình Yên Phụ (Hà Nội)",
            day: 10,
            month: 2,
            type: 2
        }, {
            desc: "Hội chọi trâu Phù Ninh (Phú Thọ); Lễ hội Làng rèn Tây Phương Danh (Bình Định)",
            day: 12,
            month: 2,
            type: 2
        }, {
            desc: "Lễ hội Hoa Ban (Lai Châu)",
            day: 13,
            month: 2,
            type: 2
        }, {
            desc: "Lễ hội chùa Vĩnh Nghiêm (Bắc Giang)",
            day: 14,
            month: 2,
            type: 2
        }, {
            desc: "Lễ hội Quán Thế Âm (Đà Nẵng)",
            day: 19,
            month: 2,
            type: 2
        }, {
            desc: "Hội đình Trúc Tay (Bắc Giang)",
            day: 22,
            month: 2,
            type: 2
        }, {
            desc: "Hội chùa Sàn (Lục Nam, Bắc Giang)",
            day: 27,
            month: 2,
            type: 2
        }, {
            desc: "Tết Hàn thực",
            day: 3,
            month: 3,
            type: 2
        }, {
            desc: "Lễ hội Cố đô Hoa Lư (Ninh Bình)",
            day: 6,
            month: 3,
            type: 2
        }, {
            desc: "Lễ hội chùa Thầy (Hà Nội)",
            day: 7,
            month: 3,
            type: 2
        }, {
            desc: "Lễ hội Nam Trì (Hưng Yên)",
            day: 9,
            month: 3,
            type: 2
        }, {
            desc: "Giỗ tổ Hùng Vương",
            day: 10,
            month: 3,
            type: 2
        }, {
            desc: "Hội làng Đông Hồ (Bắc Ninh)",
            day: 15,
            month: 3,
            type: 2
        }, {
            desc: "Lễ hội Yên Thế (Bắc Giang)",
            day: 16,
            month: 3,
            type: 2
        }, {
            desc: "Hội Đậu (Bắc Ninh)",
            day: 18,
            month: 3,
            type: 2
        }, {
            desc: "Hội chùa Bút Tháp (Bắc Ninh)",
            day: 23,
            month: 3,
            type: 2
        }, {
            desc: "Hội thả chim bồ câu (Bắc Ninh)",
            day: 27,
            month: 3,
            type: 2
        }, {
            desc: "Lễ hội làng cá Cát Bà (Hải Phòng)",
            day: 1,
            month: 4,
            type: 2
        }, {
            desc: "Hội Gióng Phù Đổng (Hà Nội)",
            day: 9,
            month: 4,
            type: 2
        }, {
            desc: "Lễ hội chùa Dâu (Bắc Ninh)",
            day: 8,
            month: 4,
            type: 2
        }, {
            desc: "Lễ Phật Đản",
            day: 15,
            month: 4,
            type: 2
        }, {
            desc: "Tết Đoan Ngọ",
            day: 5,
            month: 5,
            type: 2
        }, {
            desc: "Hội làng Cựu Ấp (Vĩnh Phúc)",
            day: 10,
            month: 4,
            type: 2
        }, {
            desc: "Lễ Thất tịch (Ngày hội tình nhân phương Đông)",
            day: 7,
            month: 7,
            type: 2
        }, {
            desc: "Lễ Vu Lan, Tết Trung nguyên",
            day: 15,
            month: 7,
            type: 2
        }, {
            desc: "Tết Katê - Dân tộc Chăm",
            day: 1,
            month: 8,
            type: 2
        }, {
            desc: "Lễ hội Đình Châm Khê (Bắc Ninh)",
            day: 4,
            month: 8,
            type: 2
        }, {
            desc: "Lễ hội chọi trâu (Đồ Sơn, Hải Phòng)",
            day: 9,
            month: 8,
            type: 2
        }, {
            desc: "Hội Thị Cầu (Bắc Ninh)",
            day: 10,
            month: 8,
            type: 2
        }, {
            desc: "Tết Trung thu",
            day: 15,
            month: 8,
            type: 2
        }, {
            desc: "Hội đền Kiếp Bạc (Hải Dương)",
            day: 15,
            month: 8,
            type: 2
        }, {
            desc: "Tết Trùng Cửu",
            day: 9,
            month: 9,
            type: 2
        }, {
            desc: "Lễ hội chùa Keo (Thái Bình)",
            day: 13,
            month: 9,
            type: 2
        }, {
            desc: "Hội đền Bắc Lệ (Lạng Sơn)",
            day: 20,
            month: 9,
            type: 2
        }, {
            desc: "Hội Đại Bái (Bắc Ninh)",
            day: 29,
            month: 9,
            type: 2
        }, {
            desc: "Tết Trùng Thập",
            day: 10,
            month: 10,
            type: 2
        }, {
            desc: "Tết Hạ Nguyên (Tết cơm mới)",
            day: 15,
            month: 10,
            type: 2
        }, {
            desc: "Tết cơm mới của người La Hủ (Lai Châu)",
            day: 10,
            month: 11,
            type: 2
        }, {
            desc: "Hội chùa Canh Bầu (Bắc Giang)",
            day: 8,
            month: 11,
            type: 2
        }, {
            desc: "Lễ hội đền Nguyễn Công Trứ (Ninh Bình)",
            day: 14,
            month: 11,
            type: 2
        }, {
            desc: "Hội Mậu Lân (Vĩnh Phúc)",
            day: 13,
            month: 12,
            type: 2
        }, {
            desc: "Tết Ông Táo",
            day: 23,
            month: 12,
            type: 2
        }, {
            desc: "Hội Bạch Lưu (Vĩnh Phúc)",
            day: 28,
            month: 12,
            type: 2
        }),
    DANHNGON = new Array("Khi bạn tin rằng tất cả mọi thứ đã chấm dứt thì đó chính là lúc mọi thứ mới bắt đầu. (Louis L’Amour)", "Người đàn bà khóc trước khi cưới, còn người đàn ông thì khóc sau đó (Tục ngữ Ba lan)", "Bạn sẽ khám phá ra chính mình ở một bậc cao hơn sau mỗi lần vượt qua nghịch cảnh. (Thomas Edison)", "Trị quốc thì dễ nhưng tề gia thì khó (Danh ngôn Trung Quốc)", "Bằng niềm tin và cảm hứng, bạn có thể đặt chân lên bất cứ con đường nào bạn chọn. (Dr.Seuss)", "Dấu hiệu thứ nhất của hạnh phúc gia đình là tình yêu gia đình (Montlosier)", "Tình yêu của các chàng trai không nằm ở trái tim mà nằm ở đôi mắt. (Shakespear)", "Không nên nói tất cả những gì bạn biết, nhưng bao giờ cũng phải biết những gì bạn nói. (M.Claudius)", "Kẻ nào gian dối trong việc nhỏ sẽ gian dối trong việc lớn. (Kinh thánh)", "Đừng đọc những gì anh không muốn nhớ và đừng nhớ những gì anh không định dùng. (G.Blecki)", "Mình thế nào mà không dám tỏ ra như thế là mình khinh mình. (Mat-xi-lông)", "Kẻ nào không biết giữ cái nhỏ sẽ mất cái lớn. (Mênanđơ)", "Dùng người như dùng gỗ, đừng vì một vài chỗ mục mà bỏ cả cây lớn. (Khổng Tử)", "Cho mượn ít, tạo ra một con nợ. Cho mượn nhiều, tạo ra một kẻ thù. (La Bruyere)", "Hỏi một câu, chỉ dốt nát trong chốc lát. Không dám hỏi sẽ dốt nát suốt đời. (Danh ngôn phương Tây)", "Lãng phí thời gian chính là tự sát, nhưng thứ chảy ra không chỉ là máu (Emerson - Mỹ)", "Tính cẩn thận là mẹ đẻ của sự an toàn nhưng lại là con đẻ của nỗi sợ hãi. (A.Xenblec)", "Khi nào tình yêu còn mù quáng, khi ấy vẫn chưa có lý do nào để ly dị. (A.Anđriepxki)", "Chúng ta có bốn mươi triệu lý do về sự thất bại nhưng không có một lời bào chữa nào. (C.Xanbot)", "Hãy học cách sống vượt thành công của người khác. (A.Fuirstenbeg) ", "Thành công chỉ đến khi bạn làm việc tận tâm và luôn nghĩ đến những điều tốt đẹp. (A.Schwarzenegger)", "Không có nghèo gì bằng không có tài, không có gì hèn bằng không có chí. (Uông Cách) ", "Chưa thử sức thì không bao giờ biết hết năng lực của mình. (Goethe)", "Đừng để đến ngày mai những việc gì anh có thể làm hôm nay. (Lord Chesterfield)", "Im lặng là câu trả lời tốt nhất với giận dữ (Ngạn ngữ Đức)", "Năm tháng hạnh phúc chính là năm tháng đã mất (Proust - Pháp)", "Vàng ngọc không quý báu bằng lòng trung tín. (Lễ Ký)", "Không có gì hèn cho bằng khi ta nghĩ bạo mà không dám làm. (Jean Ronstard) ", "Tự ái là thuốc độc giết chết tình bạn.(Balzac)", "Sự bình dị là sự nối giữa nhân ái và sắc đẹp.(Ngạn ngữ Hi Lạp)", "Chiến thắng bản thân là chiến thắng hiển hách nhất. (Platon) ", "Kẻ hoang phí sẽ là kẻ ăn mày trong tương lai. Kẻ tham lam là kẻ ăn mày suốt đời. (Ngạn ngữ Balan)", "Dễ dãi là phương châm của thể xác và là tro nguội của tâm hồn. (Ngạn ngữ Đức)", "Ba cái nền tảng của học vấn là: nhận xét nhiều, từng trải nhiều và học tập nhiều. (Catherall) ", "Đường tuy gần không đi không bao giờ đến, việc tuy nhỏ không làm chẳng bao giờ nên. (Tuân Tử) ", "Đi vòng mà đến đích còn hơn đi thẳng mà ngã đau. (Tục ngữ Anh)", "Đời người được đo bằng tư tưởng và hành động chứ không phải bằng thời gian. (Emerson) ", "Lý tưởng ấp ủ trong tâm trí sẽ tạo nên những hành vi phù hợp với lý tưởng. (E. Hubbart) ", "Người anh hùng vĩ đại nhất là người làm chủ được những ước mơ của mình. (Bhartrihary)", "Hi sinh vĩ đại nhất chính là hi sinh thời gian (Ngạn ngữ Hi Lạp)", "Làm việc đừng quá trông đợi vào kết quả, nhưng hãy mong cho mình làm được hết sức mình. (Anita Hill) ", "Sắc đẹp làm vui mắt, sự dịu hiền thu hút lòng người.(Voltaire)", "Nền không chắc mà tường cao thì sự sụp đổ nằm sẵn nơi đó rồi. (Hậu Hán Thơ)", "Cần phải lựa chọn một cách nghiêm ngặt xem nên học gì và không nên học gì. (L.Tônxtôi)", "Lề mề là tên trộm ăn cắp thời gian, hãy tóm lấy nó (Dickens - Anh)", "Ai tràn trề hy vọng và nguyện vọng, người đó sống ở tương lai (L.Sêphe)", "Hôm nay là học trò của hôm qua (Thomas Fuller)", "Hãy quay đầu và mỉm cười với những nguy hiểm đã trôi qua (Walter Scott)", "Tình bạn nhiều khi đưa đến tình yêu nhưng rất ít tình yêu chấm dứt mà thành tình bạn. (Colton)", "Chết vì thiếu tình yêu thì ghê sợ quá. Đó là sự chết ngạt của tâm hồn (Victor Hugo)", "Để giữ được niềm vui bạn phải chia sẻ nó. Hạnh phúc chào đời đã là anh em sinh đôi. (Lord Byron)", "Người ta vẫn nói hiện tại hoài thai tương lai. (Voltaire)", "Ngày mai là sự trào phúng ngày hôm nay và cho thấy điểm yếu của nó. (Edward Young)", "Nên tập thói quen tìm sự thật trong các việc nhỏ, nếu không sẽ bị lừa trong các việc lớn. (Vontaire)", "Nếu bạn không muốn đi qua cuộc đời phiền toái thì chẳng nên bỏ đá vào túi mà đeo. (V.Shemtchisnikov)", "Thiên đường ở chính trong ta. Địa ngục cũng do lòng ta mà có. (Chúa Jesus)", "Đừng sống theo điều ta mong muốn. Hãy sống theo điều ta có thể. (Ngạn ngữ Latin)", "Không ai hạnh phúc nếu không nghĩ mình hạnh phúc. (Publilius Syrus)", "Người muốn đi thì số phận dẫn đi. Người không muốn đi thì số phận kéo lê. (Ngạn ngữ Latin)", "Khi con người sống chỉ vì mình thì trở thành thừa đối với những người còn lại. (I.Rađep)", "Thời gian không đo lường bằng năm tháng mà bằng những gì chúng ta làm được. (H.Cason)", "Cuộc sống là nghĩa vụ ngay cả trong trường hợp nó chỉ diễn ra trong khoảnh khắc. (W.Gớt)", "Khi không còn ai ghen tị với bạn thì hãy xem lại liệu mình đã sống đúng chưa? (M.Ghenin)", "Chỉ có cuộc sống vì người khác mới là cuộc sống đáng quý. (A. Einstein)", "Đạo đức là sức mạnh của tâm hồn (Rousseau - Pháp)", "Nước trong quá thì không có cá, người câu nệ quá thì không có bạn. (Kinh Dịch)", "Điều quan trọng không phải chúng ta sống được bao lâu mà chúng ta phải sống như thế nào. (Bailey)", "Hãy đặt tương lai vào bàn tay đáng tin cậy - bàn tay của chính bạn (Khuyết danh)", "Ngu dốt không đáng thẹn bằng thiếu ý chí học hỏi. (B.Franklin)", "Tình yêu tiêu diệt cái chết hoặc biến nó thành ảo ảnh mờ nhạt. (L. Tolstoi)", "Anh phải lao động và táo bạo nếu anh thực sự muốn sống.(Vincent Van Gogh)", "Cố chấp và bảo thủ là bằng chứng chắc chắn nhất của sự ngu si. (J.B.Bactong)", "Hôm nay là học trò của hôm qua (Thomas Fuller)", "Chúng ta hãy sống sao cho khi chết, ngay cả người làm tang lễ cũng thấy tiếc thương. (Mark Twain)", "Hãy quay đầu và mỉm cười với những nguy hiểm đã trôi qua (Walter Scott)", "Một nguời chân thật là một công trình của thuợng đế. (Pope)", "Phụ nữ là linh hồn của nhân loại, đàn ông là thể xác của nhân loại. (Musset - Pháp)", "Hãy đặt tương lai vào bàn tay đáng tin cậy - bàn tay của chính bạn (Khuyết danh)", "Quá khứ là tro tàn; tương lai là gỗ. Chỉ ngày hôm nay là lửa sáng chói lòa. (Ngạn ngữ Eskimo)", "Tương lai được mua bằng hiện tại (Samuel Johnson)", "Sắc đẹp rất cần trong lễ cưới, còn hạnh phúc thì cần trong suốt cả cuộc đời. (Ngạn ngữ Nga)", "Cái chết không phải là phòng ngủ mà bạn có thể đi vào rồi sau đó lại đi ra được. (Tục ngữ Gana)", "Không có gì thật cao quý và đáng kính trọng bằng lòng chung thủy (Cicero)", "Anh hùng chỉ chết một lần, kẻ hèn yếu lại chết vô số lần. (Shakespeare)", "Đàn ông đau xót với cái họ mất, còn phụ nữ với cái mà họ không thể nhận được (D.BilingX)", "Hạnh phúc sinh ra trong đau khổ, đau khổ giấu mình trong hạnh phúc (Lão Tử)", "Bạn không thể làm sống lại người đã chết bằng nước mắt được. (Tục ngữ Nga)", "Nỗi buồn là di sản của quá khứ; sự nuối tiếc là nỗi đau của ký ức. (Khuyết danh)", "Khi chiến thắng được nỗi sợ cái chết bạn sẽ trở thành chủ nhân của cuộc đời mình. (George Meredith)", "Có phải cái chết là giấc ngủ sau cùng? Thưa không, nó là sự tỉnh giấc cuối cùng. (Scott Sir Walter)", "Đàn ông nói điều mình biết (Phụ nữ nói điều mình thích (J.J.Rousseau)", "Chết là đau khổ, nhưng còn điều đau khổ hơn chết là chờ chết. (Peter - Pháp)", "Cái chết thể xác không đáng sợ, cái chết của linh hồn mới đáng sợ. (Ngạn ngữ Đan Mạch)", "Cái vui sướng nhất trên đời là tin chắc ta đã được yêu (Victo Hugo)", "Phụ nữ bao giờ cũng yêu vì tài trước khi yêu vẻ bề ngoài (Banzac)", "Im lặng đem đến cho người phụ nữ sự kính nể (Sophocle)", "Thường thì sự xét đoán lòng can đảm không phải dám chết mà là dám sống.(Alfieri Vittorio)", "Tình yêu thành thật làm cho người phụ nữ trở nên kín đáo và ít bộc lộ (Barthe)", "Chúng ta cần phải đi ngang với thời gian chứ không phải để thời gian đi ngang qua. (Tục ngữ Đức)", "Trước con mắt của người yêu, không có người phụ nữ nào xấu cả (Ronsard)", "Người hoàn thiện nhất là người đã giúp ích cho đồng loại nhiều nhất. (Kinh Coran)", "Người mẹ thật sự chẳng bao giờ rảnh rỗi (Balzac - Pháp)", "Đau khổ là khuôn đúc tâm hồn người phụ nữ để trở nên thành cao cả (Khuyết danh)", "Trước phái đẹp và âm nhạc, thời gian sẽ trở thành vô nghĩa (A.Xmit)", "Tự khiêm người ta càng phục, tự khoe người ta càng khinh. (Lữ Hồi)", "Cái lợi của việc chỉ có một vợ là họ luôn bênh vực ta để chống lại những phụ nữ khác (Khuyết danh)", "Người phụ nữ đức hạnh đánh ghen bằng nước mắt (John Gay)", "Lề mề là tên trộm ăn cắp thời gian, hãy tóm lấy nó! (Dickens - Anh)", "Bạn đối xử với người khác như thế nào, họ sẽ đối xử với bạn như vậy (Tục ngữ Gabon)", "Thiếu nữ không có bạn bè là mùa xuân không có hoa hồng (A De Moniluc)", "Người cao thượng là người không bao giờ làm một điều gì để hạ thấp người khác. (A. Ca-Sơn)", "Chỉ có con đường gập ghềnh chưa từng có người đi vào mới là con đường của thiên tài. (Blake - Anh)", "Hi sinh vĩ đại nhất chính là hi sinh thời gian. (Ngạn ngữ Hi Lạp)", "Ba thứ chóng qua: tiếng vọng, cầu vòng và sắc đẹp phụ nữ (Ngạn ngữ Đức)", "Bất kì một đạo lý đáng tin nào đều là một hình tượng của chân lý. (Block - Anh)", "Người quân tử chẳng sợ cọp mà chỉ sợ miệng kẻ gièm pha. (Luận Hành)", "Ai cũng có lòng tự trọng, tự tin. Không có lòng tự trọng, tự tin là người vô dụng. (Hồ Chí Minh)", "Kiêu ngạo, ganh tị và tham lam là ba đốm lửa, chúng sẽ thiêu cháy lòng người. (Dante - Ý)", "Thói quen làm những gì tốt đẹp nhất trở nên tầm thường. (Bade Rvew)", "Cái đẹp không đến từ thân xác đẹp mà từ hành vi đẹp (Thales de Milet)", "Tiếng thở nhẹ của nàng con gái đẹp vang xa hơn tiếng gầm sư tử (Ngạn ngữ Ả Rập)", "Người thông minh thích học, nhưng người ngu lại thích dạy. (Chekhov - Nga)", "Ai ngờ vực tức là làm cho kẻ khác phản bội mình (Voltaire)", "Người đọc biết nhiều nhưng người quan sát còn biết nhiều hơn. (A.Dumas con)", "Một lời xin lỗi vụng về vẫn tốt hơn im lặng. (Stephen Gosson)", "Nước mắt là ngôn ngữ câm lặng của đau buồn (Voltaire)", "Khi bạn ý thức được mình là người khiêm tốn nghĩa là bạn không còn khiêm tốn nữa. (Lev Tolstoy - Nga)", "Người đàn bà mà không biết trang điểm thì chỉ giống như thửa ruộng khô cằn (Tục ngữ Ấn Độ)", "Cái bóng của đàn ông là mặt trời của đàn bà (Shakespeare - Anh)", "Hạnh phúc là sự vui thú mà người ta không chờ (Hakim Mazouni)", "Trái tim yêu thương là điểm bắt đầu của mọi tri thức. (Thomas Carlyle)", "Tâm hồn phản ánh cuộc sống, diện mạo phản ánh tâm hồn. (Balzac - Pháp)", "Người giỏi sử dụng thời gian, mãi mãi không thấy đủ thời gian. (Goethe - Đức)", "Chúng ta hãy đọc và hãy nhảy múa - Hai niềm vui không bao giờ làm hại thế giới này (Voltaire)", "Cách tốt nhất để làm bạn vui lên là làm người khác vui lên (Mark Twain)", "Dễ mười lần không dân cũng chịu. Khó trăm lần dân liệu cũng xong. (Hồ Chí Minh)", "Có đủ chỗ cho mọi thứ, nếu mỗi thứ được đặt ở chỗ của mình (Tục ngữ Pháp)", "Khi số phận đưa đến một quả chanh chua là muốn ta pha chế nó thành nước chanh. (Hugo - Pháp)", "Kẻ nào càng sung sướng, kẻ đó càng ít để ý đến hạnh phúc của họ (Alberto Moravia)", "Một người càng biết giá trị của thời gian, càng cảm thấy đau khổ khi thời gian mất đi. (Dante - Ý)", "Nhìn bầu trời từ trong hang động, trời thì bé nhỏ cuộc sống thì bó hẹp. (Gorky - Liên Xô)", "Vinh quang của đàn bà là sắc đẹp. Vinh quang của đàn ông là sức mạnh (Bion de Boistheme)", "Vàng khiến đàn bà cảm động. Đàn bà khiến đàn ông cảm động (Danh ngôn Armenie)", "Một người vĩ đại có hai quả tim: một quả tim chảy máu, một quả tim khoan dung. (Gibran - Libăng)", "Tuổi trẻ là tuổi không ngại ngùng gì cả và không ghi ngờ gì cả (Susanna March)", "Rung cảm, yêu, đau khổ, hi sinh những chữ này mãi dệt trong đời của người phụ nữ (Balzac - Pháp)", "Khoa học là thống soái, thực hành là binh lính. (Da Vinci - Ý)", "Khi bạn quay lưng về phía mặt trời, bạn chỉ nhìn thấy cái bóng của mình. (Gibran - Libăng)", "Sống chung gây gổ, cách biệt khổ hình (Ngạn ngữ Nga)", "Tôi biết có một điều tốt đẹp hơn cả sự ngay thẳng: ấy là sự khoan dung. (Victor Hugo)", "Thỉnh thoảng cần đi du lịch để dẹp bớt lòng tự ái và mở rộng kiến thức.(Saint Beuve)", "Đôi tai là lối vào của trái tim. (Viltaire)", "Chí khí mạnh mẽ và nhiệt tình là đôi cánh vĩ đại. (Geothe - Đức)", "Từ cao thượng đến đáng cười chỉ có một bước chân. (Napoleon - Pháp)", "Chỉ có một nỗi đau khổ, đó là phải sống cô độc (Gabriel Marcel)", "Tôi thích những người đàn bà không dĩ vãng, và những người đàn ông có tương lai (Wells)", "Đường đi khó không phải vì ngăn sông cách núi. Mà khó vì lòng người ngại núi e sông. (Nguyễn Bá Học)", "Đầu óc không có trí tuệ, giống như lồng đèn không có nến. (Lev Tolstoy - Nga)", "Một gánh sách không bằng một người thầy giỏi. (Ngạn ngữ Trung Quốc)", "Hạnh phúc đúng là món quà của thượng đế (Aristotle)", "Hạnh phúc là sự vui thú mà người ta không chờ (Hakim Mazouni)", "Lãng phí thời gian chính là tự sát, nhưng thứ chảy ra không chỉ là máu. (Emerson - Mỹ)", "Người sáng tạo lịch sử không có thời gian để viết lịch sử. (Montaigne - Pháp)", "Hạnh phúc không phải là cảm giác tới đích mà là trên từng chặng đường đi (Che)", "Ai vâng lời liều, hứa liều, tất nhiên khó lòng đúng hẹn. (Lão Tử)", "Sứ mệnh chân chính của con người là sống, chứ không phải là tồn tại. (Jack London)", "Trong thành phố phồn hoa nhất, con người càng cảm thấy sự cô độc lớn nhất (Labsine - Pháp)", "Phép lịch sự là quy tắc chi phối các mối quan hệ, đó là nghệ thuật của lòng vị tha. (Erasme)", "Kẻ thù tệ nhất là hạnh phúc dài hạn (Israël )", "Miệng: ở đàn ông là cửa đi tới tâm hồn, ở đàn bà là lối ra của trái tim (Ambrose Bierce)", "Thế giới không có đau buồn nào có thể so sánh được với nỗi đau không lời (Longfellow - Mỹ)", "Một khoảnh khắc hạnh phúc là một niềm vui bất diệt (Figuiere)", "Nếu muốn trả thù một người đàn ông, hãy gửi hắn cho một người đàn bà đẹp (Danh ngôn Á Rập)", "Lấy tình yêu ra khỏi cuộc sống là lấy luôn niềm vui của cuộc đời (Moliere)", "Người thông minh thích học, nhưng người ngu lại thích dạy (Chekhov - Nga)", "Nghịch cảnh là một con đường đạt đến chân lý. (Byron - Anh)", "Lời nói là cái bóng của hành động. (Democritus - Hy Lạp)", "Một người nào đó đã chết điều đó chưa chắc chắn đã phải người ấy đã từng sống. (X. Letx)", "Có quyền lợi cho kẻ khôn ngoan chứ không có quyên lợi cho kẻ mạnh hơn (Joubert)", "Phụ nữ là linh hồn của nhân loại, đàn ông là thể xác của nhân loại ( Musset - Pháp)", "Không gì đẹp bằng nụ cười khi đôi mắt e lệ nhìn xuống (Victor Hugo)", "Chân lý là một quả đã chín rồi mới có thể hái xuống được. (Voltaire - Pháp)", "Ngoại giao là khoa học của sự nhượng bộ. (A.Musset)", "Sinh sự thì sự sinh, bớt việc thì việc bớt. (Kinh Dịch)", "Muốn được hạnh phúc đến mức độ nào, ta phải có đau khổ đến mức độ đó (Edgar Poe)", "Yêu mọi người, tin vài người và đừng xúc phạm đến ai. (Shakespear)", "Bao giờ cũng nên có nhiều trí tuệ hơn lòng tự ái. (Epiquya)", "Mỗi người đàn ông là một cuốn sách nếu ta biết đọc nó (William Ellery Channing)", "Trăm thứ hoa không bằng thứ hoa con gái (Ngạn ngữ Trung Quốc)", "Bí quyết để sống hạnh phúc là biết chờ đợi hạnh phúc của mình (H.Riviere )", "Khuyên răn thay cho giận dữ, mỉm cười thay cho khinh bỉ. (Epiquya)", "Tri thức là kết tinh của trí tuệ, văn hóa là ánh sáng của ngọc thạch phát ra. (Tagore - Ấn Độ)", "Nếu không có người bạn tốt thì ta khó mà biết được những sai lầm của bản thân. (Tục ngữ Nga)", "Tất cả hạnh phúc của mình có đều do hạnh phúc của mình cho (Sully Prudhomme)", "Người đàn bà lương thiện không thể tự an ủi được về những lỗi lầm mà họ đã làm (Sacha Guitry)", "Chính mình tìm hạnh phúc thì dễ, cho người khác hạnh phúc thì khó. (Lev Tolstoy - Nga)", "Bao lâu bạn vẫn còn tự tin ở bạn, thì người khác vẫn còn tin bạn. (Cynda Williams)", "Khi tất cả những cái khác đã mất đi thì tương lai vẫn còn. (Bové)", "Những luyến tiếc về tình yêu vẫn còn tạo nên hạnh phúc (Lermontov)", "Khi hạnh phúc đến cực điểm thì sinh ra nụ cười và nước mắt ( Stendhai - Pháp)", "Nếu bạn đóng cửa với mọi sai lầm, vậy chân lý cũng bị bạn cho đứng ngoài cửa. (Tagore - Ấn Độ)", "Bạn không bao giờ thực sự phân biệt được bạn và thù cho tới khi mặt băng vỡ. (Khuyết danh)", "Một nửa thế giới không thể hiểu hạnh phúc của người khác (Jane Austen)", "Tên gọi thực sự của hạnh phúc là “thỏa mãn” (Amiel - Thụy Sĩ)", "Trên thế giới chỉ có một chân lý, đó là trung thực với đời và thương yêu nó (Romain Rolland - Pháp)", "Đừng phấn đấu để thành công mà hãy phấn đấu để mình có ích. (Albert Einstein)", "Bạn giận dữ một chút thì mất đi sáu mươi giây hạnh phúc ( Emerson - Mỹ)", "Bước ra từ đau khổ ta mạnh mẽ hơn khi bước vào (Alexandre Dumas)", "Một nhà thơ nhìn thế giới như người đàn ông nhìn người phụ nữ ( Swift - Anh)", "Nuốt được cái cay đắng trong cái cay đắng mới làm được hạng người trên loài người.(Lục Tài - Tử)", "Đàn ông yêu đàn bà không phải vì những gì họ nói mà vì những gì họ biết lắng nghe. (D.Lexinicơ)", "Đàn ông khinh nhau trong học vấn, phụ nữ ghét nhau về sắc đẹp (Difan - Pháp)", "Con người sinh ra để thành công, không phải để thất bại. (Henry David Thoreau)", "Im lặng là câu trả lời tốt nhất với giận dữ. (Ngạn ngữ Đức)", "Lấp không đầy là lòng ham muốn, phá không vỡ là thành u sầu. (George Sand - Pháp)", "Năm tháng hạnh phúc chính là năm tháng đã mất (Proust - Pháp)", "Tự khiêm người ta càng phục, tự khoe người ta càng khinh (Lữ Hồi)", "Đường tuy gần không đi không bao giờ đến, việc tuy nhỏ không làm chẳng bao giờ nên. (Tuân Tử) ", "Khôn ngoan đến với sự lắng nghe, hối hận đến với sự ba hoa. (Tục ngữ Ý)", "Sự thành công thường đến với những ai không quá bận rộn đi tìm nó. (Henry David Thoreau)", "Một người bạn đáng giá tất cả những chướng ngại vật mà chúng ta phải vượt qua. (Edward Young)", "Khi lòng không yêu, phụ nữ có tất cả sự bình tĩnh của một luật sư biện hộ lão thành. (H. Balzac)", "Một người kiêu ngạo luôn tiêu diệt mình trong kiêu ngạo (Shakespeare - Anh)", "Để thành công, thái độ cũng quan trọng ngang bằng khả năng. (Walter Scott)", "Cả giàu sang lẫn sự vĩ đại đều không thể mang cho chúng ta hạnh phúc. (La Fontaine)", "Không có gì nguy hiểm bằng lời khuyên tốt đi kèm với gương xấu. (De Scudery)", "Muốn uốn cây cong cho thẳng lại, ta uốn cong nó theo chiều ngược lại. (Montaigne)", "Lương tâm trong sáng là cái gối mềm mại nhất.(Andersen - Đan Mạch)", "Ảo tưởng là đôi cánh của nhà thơ, giả thiết là thang trời của khoa học. (Goethe - Đức)", "Khi tất cả những cái khác đã mất đi thì tương lai vẫn còn. (Bové)", "Trên thế giới cách duy nhất nhân hạnh phúc lên gấp bội là chia sẻ nó ra. (Schiller - Thụy Sĩ)", "Hãy hiền dịu khoan dung với hết mọi người trừ bản thân mình. (Joubert)", "Đầu hàng cám dỗ là hành động của thú tính, chiến thắng nó mới là con người. (Waterstone)", "Sự hào phóng thật sự đối với tương lai là việc đem cho tất cả trong hiện tại. (Albert Camus)", "Hi vọng sẽ giúp bạn trẻ ra vì hi vọng và tuổi trẻ là anh em song sinh (Shelley - Anh)", "Để thành công, hãy chớp lấy cơ hội cũng nhanh như khi vội vã kết luận. (Benjamin Franklin)", "Khi tự cho mình là đầy đủ thì mình có được một của quý vô giá là Tự Do. (Épicure)", "Hạnh phúc là sản phẩm hóa trang tốt nhất của cái đẹp (Bá tước phu nhân Boleyxiton - Anh)", "Tình yêu cổ xưa nhất và vĩ đại nhất là tình yêu cuộc sống (H.Plutarque)", "Nếu không có sách, chúng ta vẫn chỉ là những kẻ man rợ. (Henvétiuyt)", "Ðàn bà đẹp là thiên đường của đôi mắt và là địa ngục của... túi tiền (Estonia)", "Cuộc sống không phải là một thảm hoa hồng (Tục ngữ Anh)", "Sự ngắn gọn là linh hồn của trí khôn sắc sảo. (Shakespear)", "Không nên sống bình thường! Phải sống háo hức say mê (S.Korolev)", "Thiếu thận trọng gây nhiều tai họa hơn thiếu hiểu biết. (Franklin)", "Những gì ta cho đi một cách thật lòng thì mãi mãi là của ta. (Geoges Granville)", "Nếu không biết tươi cười sẽ không biết cách mở ra những cánh cửa. (Ngạn ngữ Trung Quốc)", "Người nào đi tìm một người bạn không có khiếm khuyết thì sẽ không bao giờ tìm thấy. (Tục ngữ Hasid)", "Hà tiện thời gian là loại hà tiện duy nhất có thể chấp nhận được. (Khuyết danh)", "Thành công là đạt được thứ bạn muốn. Hạnh phúc là muốn thứ bạn đạt được. (Dale Carnegie)", "Yêu nhiều là sống nhiều, và yêu mãi mãi là sống vĩnh hằng. (Henry Drummond)", "Đừng mua thứ hữu ích mà hãy mua những thứ cần thiết. (Caton Le Censeu)", "Đừng quá xem trọng điều gì. Hãy tiếp nhận mọi sự may rủi một cách nhẹ nhàng. ( Jepfecson)", "Biết đủ không nhục, biết dừng không nguy. Như thế có thể giữ được lâu dài. ( Lão Tử)", "Bước vào cuộc đời là bước vào cuộc chiến đấu (Voltaire)", "Anh hãy tự giúp anh trước, trời sẽ giúp anh sau. (La Fontaine)", "Tình yêu thương cũng như cơ thể của chúng ta là dòng chảy bất tận. (Jean Jaques Rousseau)", "Mỗi con người là một vầng trăng với một tối không bao giờ để cho ai nhìn thấy (Mark Twain)", "Người quân tử khi tai họa đến thì không sợ, khi phúc đến thì không mừng. (Khổng Tử)", "Lời nói là cái bóng của hành động (Democritus - Hy Lạp)", "Người hoàn toàn không cười chính là đang vui (Meitelinger - Bỉ)", "Thành công lớn nhất là đứng dậy sau mỗi lần vấp ngã. (Khuyết danh)", "Đừng khinh việc nhỏ, lỗ nhỏ làm đắm thuyền. (Quan Doãn Tử)", "Tôi chưa gặp một ai yêu đức như người ta yêu sắc đẹp của người phụ nữ. (Khổng Tử)", "Kẻ chết mở mắt cho người sống (Khuyết danh)", "Bạo lực làm cho người ta sợ, nhưng lại giúp người ta khi cần. (B.Johnson)", "Thời gian là nhà cách tân vĩ đại nhất. (Ph.Bêcơn)", "Cách duy nhất để có một người bạn là chính mình phải là một người bạn. (Ralph Waldo Emerson)", "Nếu sống lâu, bạn sẽ nhìn thấy rất nhiều điều (Tục ngữ Mozambique)", "Người bi quan chính là người cứ dòm trái ngó phải khi đi một mình trên đường (Peter - Pháp)", "Sự tin tưởng không phải là sự bắt đầu, mà là sự kết thúc của mọi nhận thức. (G.V. Gớt)", "Điều quan trọng không phải chúng ta sống được bao lâu mà chúng ta phải sống như thế nào. (Bailey)", "Cái gọi là cuộc sống hạnh phúc, là dựa vào đạo đức mà sống (Aristotle - Hy Lạp)", "Đời người chính là ý chí kết bạn với tuổi trẻ, trí tuệ và tuổi già đi chung (Gibran - Libăng)", "Nếu ai cũng đều sống cho bản thân thì thế giới sẽ lạnh dần (Byron - Anh)", "Tất cả kho báu trên Trái đất không thể nào sánh bằng hạnh phúc gia đình (Calderon)", "Thời gian hóa trang của người đàn bà nhất định tỉ lệ thuận với tuổi tác của cô ta (Peter - Pháp)", "Thân thiện sinh ra hạnh phúc, văn minh mang tới hài hòa (V.Hugo - Pháp)", "Hạnh phúc chính là sức khỏe, cộng thêm trí nhớ ( Ingrid Bergman - Thụy Điển)", "Hãy sống xứng đáng và hãy nghĩ mỗi ngày là một cuộc đời! (L. A. Seneca)", "Tự tin là điều kiện đầu tiên để làm được những việc lớn lao. (Samuel Johnson)", "Người cha chính là người thầy đầu tiên của đứa trẻ. (T.Thore)", "Biện pháp tốt nhất làm chính mình vui vẻ là làm cho người khác vui vẻ trước (Mark Twain - Mỹ)", "Không tự tin là nguyên nhân gây ra tất cả thất bại. (Bouvi)", "Đàn bà đẹp là thiên đường của đôi mắt và là địa ngục của túi tiền. (Estonia)", "Trăm thứ hoa không bằng thứ hoa con gái. (Ngạn ngữ Trung Quốc)", "Thời điểm thích hợp nhất để kết bạn là trước khi ta cần đến họ. (Ether Barrymore)", "Người phụ nữ đẹp là một viên ngọc quý, nhưng người phụ nữ tốt là một kho tàng ( Sadi - Ba Tư)", "Nếu tuổi trẻ không phát ra ánh sáng rực rỡ, mọi thứ sẽ mất đi sức hút. (Walpole - Anh)", "Gió và sóng luôn ở bên các thủy thủ khéo léo. (Edward Gibbon)", "Ghen ghét thường gây tai họa cho bản thân hơn là cho người bị ghen ghét. (Alexandre Dumas)", "Đôi khi cuộc đời sẽ ném gạch vào đầu bạn. Đừng đánh mất niềm tin. (Steve Jobs)", "Thôi thúc muốn có những chuyến đi là một trong những dấu hiệu hi vọng của sự sống. (Agnes Repplier)", "Hạnh phúc nào mà chẳng phải mua với ít nhiều đau khổ (Margaret Oliphant)", "Tất cả cuộc sống đều là thử nghiệm. Bạn càng thử nghiệm nhiều càng tốt. (Ralph Waldo Emerson)", "Khi được sung sướng mà cúi đầu ngủ mãi, ấy là coi thường hạnh phúc (Calderol De La Berca)", "“Nếu tôi biết trước” không đến vào lúc đầu mà vào khi cuối (Tục ngữ Cameroon)", "Niềm tin là tài sản cá nhân tích trữ trong nhà bạn. (Bernard Shaw - Đức)", "Nỗi bất hạnh làm ra con người, còn con người làm ra hạnh phúc (Tục ngữ Ba Lan)", "Hi vọng sẽ giúp bạn trẻ ra vì hi vọng và tuổi trẻ là anh em song sinh. (Shelley (Anh)", "Quan trọng không phải là sống lâu như thế nào, mà là sống sâu như thế nào. (Ralph Waldo Emerson)", "Nếu anh muốn yêu thương, anh phải phụng sự; nếu anh muốn tự do, anh phải chết. (Hegel)", "Tai họa thì bay đến mà hạnh phúc thì bò đến ta (Tục ngữ Nga)", "Mục đích tối trọng của đời người không phải là sự hiểu biết mà là hành động. (A. Haoxlay)", "Yêu nhiều là sống nhiều, và yêu mãi mãi là sống vĩnh hằng. (Henry Drummond)", "Nơi nào có bạn bè, nơi đó có của cải. (Jitus Muccius Plautus)", "Người hạnh phúc là người lắng nghe; kẻ bất hạnh là kẻ thổ lộ. (Ralph Waldo Emerson)", "Trí óc lớn lên bằng những gì người ta nuôi dưỡng nó (J.G.Holland)", "Người có niềm tin có thể đi qua bất kỳ phong ba bão táp nào. (Ovidius - La Mã)", "Để tỏa sáng ngày mai thì bạn phải lấp lánh từ hôm nay. (Khuyết danh)", "Gieo một hạt tình bạn; gặt một bó hạnh phúc. (Lois L. Kaufman)", "Tự lừa gạt bản thân sẽ dẫn tới tự hủy diệt bản thân. (Aesop)", "Miếng ăn càng to càng dễ bị nghẹn (Tục ngữ Ả Rập)", "Dũng cảm và lòng tin tất thắng thường kết thúc trận đấu bằng thắng lợi. (Marx - Đức)", "Tuổi thơ là giấc ngủ của lý trí. (Jean Jaques Rousseau)", "Hạnh phúc ở ngay trong gia đình bạn, chớ đi tìm nó nơi địa đàng của kẻ xa lạ. (Vơrôn)", "Đừng chỉ học cách tìm điều mình thích, hãy học cách thích điều mình tìm thấy. (Anthony J. D'Angelo)", "Thất bại đơn giản chỉ là cơ hội để bắt đầu lại mọi thứ một cách thông minh hơn. (Henry Ford)", "Sự thỏa mãn khiến người nghèo giàu có; bất mãn khiến người giàu nghèo khổ. (Benjamin Franklin)", "Quyết tâm, chủ động và bền bỉ là nền tảng của thành công. (Khuyết danh)", "Tình yêu là trò chơi mà ai cũng gian lận. (Balzac)", "Bệnh nhân nào cũng đem theo bên trong người thầy thuốc của chính bản thân mình. (Albert Schweitzer)", "Một ý tưởng không nguy hiểm không đáng được gọi là ý tưởng. (Elbert Hubbard)", "Không ai có thể cho bạn sự bình yên ngoài chính bạn. (Ralph Waldo Emerson)", "Hạnh phúc là tự thấy ở mình một linh hồn trong sạch (Joseph Joubert)", "Có những sự quyến rũ chỉ nên đứng từ xa mà ngắm. (Samuel Johnson)", "Cho dù con gà trống không gáy thì một ngày mới vẫn cứ bắt đầu (Tục ngữ Nam Phi)", "Trái tim giống như làn nước sâu, nó giấu đi nhiều điều bí ẩn (Tục ngữ Zambia)", "Tuổi trẻ không có lý tưởng giống như buổi sáng không có mặt trời. (Belinsky - Nga)", "Đàn bà và rượu kéo đàn ông ra khỏi sự phán đoán (Cesar Oudin)", "Hạnh phúc luôn mỉm cười với những ai kiên trì, dũng cảm, hăng say lao động (Ivokresenskaia)", "Đời người chính là ý chí kết bạn với tuổi trẻ, trí tuệ và tuổi già đi chung ( Gibran - Libăng)", "Tình yêu giống như bệnh sởi, luống tuổi rồi bệnh mới phát thì thật chẳng hay ho gì (Duoglas Jerold)", "Không yêu ai tức là không sống, yêu yếu ớt không phải là sống mà là đau khổ (Ph.Fénelon)", "Bạn đừng làm một điểm trên vòng tròn mà phải làm một trung tâm điểm. (Luc Miriam)", "Tài trí mà mất lương tri chi bằng không có tài trí thì hơn (Yanger - Anh)", "Yêu thương mang lại nhiều lạc thú hơn là được yêu. (Thomas Fuller)", "Sự phẫn nộ xác đáng khơi dậy tất cả sức mạnh của con người. (Ralph Waldo Emerson)", "Tình yêu là ước vọng của con người đã làm tươi đẹp thảo nguyên thế giới của chúng ta. (A.Hinlơ)", "Nỗi đau li biệt chẳng có nghĩa lý gì so với niềm vui tái ngộ. (Charles Dickens)", "Hương thơm của mối tình đầu là ở tình bạn chân thành (Herchen - Nga)", "Tình yêu không bao giờ chết vì đói, mà thường do bội thực. (N. D. Lenclôxơ)", "Tình yêu là một thứ vải mà trí tưởng tượng đã thêu hoa (Voltaire)", "Chết vì thiếu tình yêu thì ghê sợ quá. Đó là sự chết ngạt của tâm hồn (Victor Hugo)", "Cái gì cũng nói biết nghĩa là không biết gì cả. (Tục ngữ Anh)", "Không ai tự mình hoàn chỉnh, bạn bè là phần mà mình còn thiếu. (Harry Emerson)", "Bạo lực làm cho người ta sợ, nhưng lại giúp người ta khi cần (B.Johnson)", "Tình yêu nâng cao con người thoát khỏi sự tầm thường (Pascal)", "Thà đau khổ vì tình yêu tan vỡ hơn là không có tình yêu (A.La Martin)", "Chân lý cuối cùng trên cõi đời này là tình yêu (F.Voltaire)", "Chẳng có bản năng nào như bản năng của trái tim. (Lord Byron)", "Con người sở dĩ bất hạnh vì con người ở trong phúc mà không biết đấy là phúc. (Dostoevsky (Nga)", "Một trong những bất lợi của rượu là nó khiến người ta nhầm lẫn ngôn từ với tư duy. (Samuel Johnson)", "Con người là loài động vật thông minh hành xử một cách ngu dại. (Albert Schweitzer)", "Tình yêu như dòng sông cuộn chảy, không có chỗ cho kẻ ngược dòng (R.D.Campôamô)", "Nỗi sợ hãi có công dụng, nhưng sự hèn nhát thì không. (Mahatma Gandhi)", "Một người bạn có thể được xem như là kiệt tác của tạo hóa. (Ralph Waldo Emerson)", "Yêu nhiều là sống nhiều, và yêu mãi mãi là sống vĩnh hằng (Henry Drummond)", "Tình yêu an ủi được tất cả, kể cả những ưu phiền do nó gây ra (P.Roochipđie)", "Tài sản đầu tiên là sức khỏe. (Ralph Waldo Emerson)", "Kẻ dốt khẳng định, người thông thái nghi ngờ, nhà hiền triết suy nghĩ. (Aristote)", "Trái tim đang yêu là sự thông thái chân thực nhất. (Charles Dickens)", "Nỗi sợ hãi chẳng tồn tại ở nơi nào khác ngoài trí óc. (Dale Carnegie)", "Sự thật không thuộc sở hữu của cá nhân nào mà là báu vật của cả loài người. (Ralph Waldo Emerson)", "Chính sức khỏe mới là sự giàu có thực sự, không phải vàng và bạc. (Mahatma Gandhi)", "Tình yêu thương cũng như cơ thể của chúng ta là dòng chảy bất tận (Jean Jacques Rousseau)", "Người thấu hiểu đau buồn, rất ít khi phiền muộn. (Disraeli - Anh)", "Trong tình yêu, chiến thắng của người đàn ông là sự chạy trốn. (Napoléon)", "Nếu muốn trả thù một người đàn ông, hãy gửi hắn cho một người đàn bà đẹp. (Danh ngôn Ả Rập)", "Hạnh phúc giống như một nụ hôn... bạn phải chia sẻ nó để tận hưởng nó. (Khuyết danh)", "Chẳng có sự trần trụi nào khó chịu hơn sự thật trần trụi. (Agnes Repplier)", "Hạnh phúc lớn nhất trên đời, đó là tin rằng mình được yêu (V.Hugo)", "Nhớ một người là cách trái tim nhắc nhở rằng bạn yêu người ấy (Khuyết danh)", "Đôi khi những điều nhỏ nhất chiếm lấy phần lớn trái tim ta (A.A.Milne)", "Những trái tim chịu nhiều đau khổ và dũng cảm chính là những trái tim cao cả (R.Bazin)", "Hạnh phúc không phải đích đến; nó là phụ phẩm. (Eleanor Roosevelt)", "Thú nhận sai lầm là điều gần với sự trong sạch nhất. (Publilius Syrus)", "Chúng ta nắm giữ vận mệnh của chính mình chứ không phải các vì sao. (William Shakespeare)", "Sự độc ác là tên bạo chúa luôn đi cùng với nỗi sợ hãi. (Thomas Fuller)", "Làm đánh đổ một thành kiến khó hơn làm phân hủy một nguyên tử. (Albert Einstein)", "Lời cầu nguyện càng ít ngôn từ càng tốt. (Martin Luther)", "Cuộc sống và tình yêu đều vô cùng quý giá khi chúng đang nở rộ (Louisa May Alcott)", "Hành trình của sông ra biển không nhanh như hành trình của con người đến với sai lầm. (Voltaire)", "Nỗi sợ hãi là mẹ của sự lo xa. (Thomas Hardy)", "Sự thật không bao giờ mắc nợ lời dối trá. (Edward Young)", "Tôi không nghĩ rằng trên đời này lại có nỗi đau khổ nào hèn hạ hơn sự ghen tuông (A.Phrăngxơ)", "Tình yêu không bao giờ chết vì đói, mà thường do bội thực (N.D.Lenclôxơ)", "Có vài cách bảo vệ tốt chống lại sự cám dỗ, nhưng cách chắc chắn nhất là sự hèn nhát. (Mark Twain)", "Quyền lực không phải bằng chứng vững chắc cho sự thật. (Samuel Johnson)", "Danh tiếng tốt đáng giá hơn tiền bạc. (Publilus Sirus)", "Tôi tư duy nên tôi tồn tại. (Rene Descartes)", "Tình yêu chiến thắng tất cả, song con người không thể chỉ sống bằng tình yêu ( Lêbông)", "Sự dối trá sẽ giết chết tình yêu, song chính sự thẳng thắn sẽ giết nó trước (D.Hemingway)", "Ảo tưởng là thức ăn của tình yêu (V.Hugo)", "Lương tâm là tiếng nói của linh hồn; Dục vọng là tiếng nói của cơ thể. (Jean Jaques Rousseau)", "Hạnh phúc là khi điều bạn nghĩ, điều bạn nói và điều bạn làm hài hòa với nhau. (Mahatma Gandhi)", "Muốn đi tới mục tiêu lớn phải bắt đầu từ mục tiêu nhỏ. (Lenin - Liên Xô)", "Tình yêu là sự thông thái của kẻ khờ và sự khờ dại của người thông thái. (Samuel Johnson)", "Người có cái gì đó để say mê theo đuổi là người hạnh phúc. (Shaw - Ireland)", "Những người học được cách chịu đựng là những người gọi cả thế giới là anh em. (Charles Dickens)", "Sung sướng gấp đôi khi ta lừa được kẻ lừa lọc. (La Fontaine)", "Dư luận là con thú dữ tợn; anh phải hoặc xích nó lại hoặc bỏ chạy khỏi nó. (Voltaire)", "Chủ nghĩa dân tộc là căn bệnh tiềm ẩn. Nó là bệnh sởi của loài người. (Albert Einstein)", "Những đam mê của chúng ta nói lên chính bản thân ta. (Anatole France)", "Nếu đam mê chở bạn đi, hãy để lý trí nắm dây cương. (Benjamin Franklin)", "Trong tình yêu, chiến thắng của người đàn ông là sự chạy trốn (Napoléon)", "Đức tin là vô nghĩa trừ phi nó được chuyển thành hành động. ( Thomas Carlyle)", "Vì động cơ tốt, làm sai cũng là đức hạnh. (Publilius Syrus)", "Người không muốn tới đích thì dù có khởi sự tốt cũng uổng công. ( Ngạn Ngữ Mỹ)", "Nếu anh không thể giải thích đơn giản thì anh chưa hiểu đủ rõ. (Albert Einstein)", "Kẻ độc tài luôn luôn tỏ ra tốt đẹp chừng nào chưa tới mười phút cuối cùng. (Jan Masaryk)", "Định kiến là điều những thằng ngu sử dụng làm lý lẽ. (Voltaire)", "Khi trời đẹp hãy chuẩn bị cho thời tiết xấu. (Thomas Fuller)", "Không gì nguy hiểm hơn bạn bè ngu dốt; tôi thà có kẻ thù khôn. (La Fontaine)", "Đầu tư vào tri thức đem lại lợi nhuận cao nhất. (Benjamin Franklin)", "Sự ghen tị với người khác nuốt chửng chúng ta nhiều nhất. (Aleksandr Solzhenitsyn)", "Đừng gây bất lợi cho con cái bạn bằng việc cho chúng cuộc sống dễ dàng. (Robert A Heinlein)", "Cuộc sống đồng điệu giữa những người yêu nhau là hạnh phúc lý tưởng (George Sand)", "Tương lai thuộc về người tin vào vẻ đẹp trong những giấc mơ của mình. (William Arthur Ward)", "Nơi nào có sự đoàn kết, nơi đó có chiến thắng. (Publilius Syrus)", "Từ bỏ thành kiến không bao giờ quá muộn. (Henry David Thoreau)", "Hậu quả cơn nóng giận bao giờ cũng nghiêm trọng hơn nguyên nhân. (Ngạn Ngữ Hy Lạp)", "Ai làm chủ giáo dục có thể thay đổi thế giới (Leibniz)", "Kết quả cao nhất của giáo dục là sự khoan dung. (Helen Keller)", "Chỉ có một thứ hạnh phúc trên đời, yêu và được yêu (George Sand)", "Không có thứ gì là số phận, tất cả chỉ là thử thách, trừng phạt hay bù đắp (Voltaire - Pháp)", "Điều đếm được không nhất thiết đáng kể; điều đáng kể không nhất thiết đếm được. (Albert Einstein)", "Người có ý chí vượt qua tất cả sự nặng nhọc có thể đạt được bất cứ mục tiêu nào. (Menander)", "Lời nói đẹp - đó là chi phí thấp nhất để thu lợi cao nhất. (Ngạn ngữ Anh)", "Bộ lông làm đẹp con công, học vấn làm đẹp con người (Ngạn ngữ Nga)", "Cần phải lựa chọn một cách nghiêm ngặt xem nên học gì và không nên học gì (Lev.Tolstoy)", "Không có thứ gì là số phận, tất cả chỉ là thử thách, trừng phạt hay bù đắp (Voltaire - Pháp)", "Người thông minh nghĩ rồi mới nói, kẻ ngốc nói rồi mới nghĩ (Kerdon - Anh)", "Đừng để bị những rắc rối của mình thúc đẩy. Hãy để giấc mơ dẫn đường. (Khuyết Danh)", "Đánh giá một người qua những câu hỏi của anh ta chứ không phải là những câu trả lời. (Voltaire)", "Lòng nhân đức bắt đầu từ gia đình, nhưng không nên kết thúc luôn ở đó. (Thomas Fuller)", "Chúng ta thường không biết quý trọng những thứ đạt được quá dễ dàng. (Thomas Paine)", "Mỗi phút bạn giận dữ, bạn từ bỏ sáu mươi giây thanh thản tâm hồn. (Ralph Waldo Emerson)", "Đọc sách không bằng suy ngẫm. Học trường không hơn được trường đời (Immanuel Kant)", "Người ta giàu vì biết lao động, giàu hơn nữa vì biết tiết kiệm chi tiêu. (Ngạn ngữ Thổ Nhĩ Kỳ)", "Đời sống có hạn mà sự học thì vô hạn (Trang Tử)", "Hãy dành thời gian cho mọi thứ: quá vội vàng sẽ hỏng việc. (Benjamin Franklin)", "Thông minh tài trí là đòn bẩy thúc đẩy xã hội (Balzac - Pháp)", "Người thông minh ỷ vào kẻ ngốc nhiều hơn kẻ ngốc ỷ vào người thông minh (Collins - Anh)", "Đừng xấu hổ khi không biết, chỉ xấu hổ khi không học (Khuyết danh)", "Người thông minh thích học, nhưng người ngu lại thích dạy (Chekhov - Nga)", "Giáo dục là làm cho con người tìm thấy chính mình (Socrates)", "Chúng ta chẳng bao giờ biết được giá trị của nước cho tới khi giếng cạn khô. (Thomas Fuller)", "Một cuộc hôn nhân tốt là giữa bà vợ mù và ông chồng điếc. (Balzac)", "Với những người không được giáo dục, chữ A chỉ là ba cái que. (A. A. Milne)", "Cuộc sống là điều xảy ra trong khi bạn còn đang bận lên những kế hoạch khác. (John Lennon)", "Hiền dữ đâu phải do tính sẵn, phần nhiều do giáo dục mà nên (Hồ Chí Minh)", "Trước khi chúng ta học được sống như thế nào thì cái chết đã gần bên rồi (Boulxua - Pháp)", "Quả trên mặt đất mọc lên nhờ những thứ thối rữa dưới mặt đất (Charles Dickens - Anh)", "Người giàu có không phải là người có nhiều, mà là người cho nhiều. (Erich Fromm)", "Cuộc sống không có giới hạn, chỉ trừ những giới hạn do chính bạn tạo ra. (Les Brown)", "Một khoảnh khắc hạnh phúc là một niềm vui bất diệt (Figuiere)", "Đừng quá nhút nhát và đắn đo trong hành động. Cuộc sống là thử nghiệm. (Ralph Waldo Emerson)", "Bí mật của một cuộc hôn nhân tốt đẹp là tha thứ cho bạn đời vì đã lấy mình. (Sacha Guitry)", "Tôi thà có năm kẻ thù mạnh mẽ và tài giỏi hơn là một người bạn ngu xuẩn. (Edward Bulwer Lytton)", "Tất cả chúng ta đều là người mới học. Chỉ có người chết mới không còn gì để học. (Khuyết danh)", "Chúng ta phải hiểu cơn thịnh nộ là một dấu hiệu của cảm giác thấp kém. (Alfred Adler)", "Kiến thức chỉ có được qua tư duy của con người (A.Einstein)", "Cỏ dại là gì? Một loại cây mà phẩm chất tốt chưa bao giờ được khám phá. (Ralph Waldo Emerson)", "Có những người cha không yêu con; nhưng chẳng có người ông nào không yêu cháu. (Victor Hugo)", "Những người nông cạn tin vào may mắn. Những người mạnh mẽ tin vào nhân quả. (Ralph Waldo Emerson)", "Tương lai quan trọng với hiện tại biết bao nhiêu khi xung quanh anh là con trẻ. (Charles Darwin)", "Một đứa trẻ được dạy bảo tốt sẽ trở thành người tốt (Victor Hugo)", "Hãy đi xa tới hết tầm mắt của mình; khi bạn tới đó, bạn sẽ nhìn được xa hơn nữa. (Thomas Carlyle)", "Dưới ánh mặt trời không có nghề nào cao quý hơn nghề dạy học (Comenxki)", "Hoa hồng lặng lẽ ca ngợi tình yêu, bằng ngôn ngữ chỉ trái tim mới hiểu. (Khuyết danh)", "Ai chi tiêu quá nhanh không bao giờ giàu có được. (Balzac)", "Số hoàn hảo giống như người hoàn hảo, rất hiếm có. (Rene Descartes)", "Bạn có trách nhiệm biến giấc mơ của mình thành hiện thực. (Les Brown)", "Chỉ có con đường gập ghềnh chưa từng có người đi vào mới là con đường của thiên tài (Blake - Anh)", "Thật ngu ngốc nếu trừng phạt hàng xóm bằng lửa khi mình sống ngay bên cạnh. (Publilius Syrus)", "Kẻ hèn nhát gọi mình là thận trọng, người bủn xỉn gọi mình là tằn tiện. (Publilius Syrus) ", "Muốn có một bữa ăn ngon và một người vợ hiền thì bạn phải biết chờ đợi. (Ngạn ngữ Đan Mạch)", "Con khỉ đẹp nhất cũng là xấu nhất khi so sánh với nhân loại (Heraclitus - Hy Lạp)", "Một con mèo bị nhốt trong phòng, bị đuổi dồn quá sẽ biến thành sư tử (Cervantes - Tây Ban Nha)", "Một chữ cũng là thầy, nửa chữ cũng là thầy (Tục ngữ Việt Nam)", "Khi con người là dã thú, anh ta còn tồi tệ hơn cả dã thú (Tagore - Ấn Độ)", "Con ơi ghi nhớ lời này Công cha, nghĩa mẹ, công thầy chớ quên (Tục ngữ Việt Nam)", "Tính tự cao tự đại là nguồn gốc và lời tóm tắt của tất cả mọi sai lầm và khổ sở. (Thomas Carlyle)", "Giáo dục là vũ khí mạnh nhất mà người ta có thể sử dụng để thay đổi cả thế giới (N.Mandela)", "Đàn ông luôn luôn không thể hiểu nổi tại sao phụ nữ lại có thể từ chối lời cầu hôn. (Jane Austen)", "Tiếng cười ồn ào thể hiện sự trống rỗng của tâm hồn (Olivier Goldsmith)", "Sự sáng suốt của chúng ta đến từ kinh nghiệm, và kinh nghiệm đến từ sự ngu ngốc. (Sacha Guitry)", "Kinh doanh giống như một cái xe cút kít. Chẳng có gì xảy ra nếu bạn không bắt đầu đẩy. (Khuyết danh)", "Bạn hãy yêu tự do hơn tất cả và làm điều thiện ở bất cứ nơi nào có thể (V.Beethoven)", "Khi giấc mơ của bạn biến thành bụi đất, hãy hút bụi. (Khuyết danh)", "Học... học để là chính mình, và học để từ bỏ với vẻ thanh cao những gì không phải là mình. (Henri Frederic Amiel)", "Hạnh phúc tùy thuộc vào bản thân ta hơn là những gì xảy ra bên ngoài (R.Holden)", "Lấp không đầy là lòng ham muốn, phá không vỡ là thành u sầu (George Sand - Pháp)", "Tâm hồn của con người là tiêu điểm của ánh sáng lý trí (Coleridge - Anh)", "Cười là liều thuốc bổ, là sự giải thoát, và là sự chấm dứt khổ đau (Ecclesiastes)", "Đạo đức là sức mạnh của tâm hồn (Rousseau - Pháp)", "Nơi người phụ nữ quyến rũ lòng người nhất không phải là cái đẹp mà là sự cao quý (Eunpide)", "Chết vì thiếu tình yêu thì ghê sợ quá (Đó là sự chết ngạt của tâm hồn (Victor Hugo)", "Sai lầm lớn nhất bạn có thể phạm phải trong đời là luôn sợ hãi mình sẽ phạm sai lầm (Elbert Hubbard)", "Đường tuy ngắn, không đi không đến. Việc tuy nhỏ, không làm không nên (Tuân Tử)", "Ước mơ cũng tốn nhiều năng lượng như lên kế hoạch. (Eleanor Roosevelt)", "Tri thức là kết tinh của trí tuệ, văn hóa là ánh sáng của ngọc thạch phát ra. (Tagore - Ấn Độ)", "Anh phải lao động và táo bạo nếu anh thực sự muốn sống.(Vincent Van Gogh)", "Tâm niệm trầm tĩnh thì lẽ gì nghĩ chẳng tới. Chí khí cao rộng thì việc gì làm chẳng xong (Lã Khôn)", "Có đủ chỗ cho mọi thứ, nếu mỗi thứ được đặt ở chỗ của mình (Tục ngữ Pháp)", "Thế giới không có đau buồn nào có thể so sánh được với nỗi đau không lời (Longfellow - Mỹ)"),
    NgayHoangDao = [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    GioHoangDao = new Array(6),
    CookieName = "SelectedDate",
    split_1 = "-",
    ShowDetailUrl = "/",
    ImagePathLVSICSOFT = "https://lichngaytot.com/Content/";
GioHoangDao[0] = [1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0], GioHoangDao[1] = [0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1], GioHoangDao[2] = [1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0], GioHoangDao[3] = [1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0], GioHoangDao[4] = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], GioHoangDao[5] = [0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1];