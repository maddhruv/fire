
$(document).ready(function() {
    var width = 0;
    var id = setInterval(frame, 30);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            //loginToggle();
        } else {
            width++;
            $("#booting").css('width', width + '%');
        }
    };
    $('#login').on('click', function() {
        fbLogin();
    });
    $('#get-in').on('click', function() {
        $("#login-screen").hide();
        $("#mainDesktop").show();
    });
});

function loginToggle() {
    $("#boot-screen").hide();
    $("#login-screen").show();
}

/*facebook login*/
function connected() {
    $("#login").css("display", "none");
    getInfo();
    $("#get-in").show();
}

window.fbAsyncInit = function() {
    FB.init({
        appId: '1322635707782746',
        xfbml: true,
        version: 'v2.8'
    });
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            connected();
        } else if (response.status === 'not_authorized') {

        } else {

        }
    });
};
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function fbLogin() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            connected();
        } else if (response.status === 'not_authorized') {

        } else {

        }
    });
}

function getInfo() {
    FB.api('/me', 'GET', {
        fields: 'first_name,email,last_name,name,id,picture.width(64).height(64)'
    }, function(response) {
        photoURL = response.picture.data.url;
        $("#user-login-avatar").attr("src", photoURL);
        $("#user-login-uname").html(response.first_name);
        $(".mac-username").html(response.first_name);
    });
    console.log(userId);
}
