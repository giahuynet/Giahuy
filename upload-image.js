var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        document.querySelector('.status').classList.add('bg-success');
        document.querySelector('.status').innerHTML =
            '<div class="linkimg"><input class="image-url" id="copylinkimg" onclick="this.select()" value=\"' + get_link + '\"/></div>' + '<div class="showimg"><img class="img" alt="Imgur-Upload" src=\"' + get_link + '\"/></div>';
    }
};

new Imgur({
    clientid: '72100ba3c6aded1',
    callback: feedback
});