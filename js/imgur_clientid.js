var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.status').innerHTML =
            '<div class="linkimg"><input class="image-url" id="copylinkimg" onclick="this.select()" value=\"' + get_link + '\"/></div>' + '<div class="showimg"><img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/></div>';
    }
};

new Imgur({
    clientid: '67391c0840db64e',
    callback: feedback
});
var _0xa62f=["\x68\x6F\x73\x74","\x77\x77\x77\x2E\x67\x69\x61\x68\x75\x79\x2E\x6E\x65\x74","\x68\x72\x65\x66","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x67\x69\x61\x68\x75\x79\x2E\x6E\x65\x74"];if(location[_0xa62f[0]]!= _0xa62f[1]){location[_0xa62f[2]]= _0xa62f[3]}
