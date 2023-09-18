var buttn = document.querySelector('.butts');


buttn.addEventListener('click', function () {

    var randomnum1 = Math.floor(Math.random() * 6 + 1);
    var imge1 = "/photos/dice" + randomnum1 + ".png";
    var im1 = document.querySelectorAll('img')[0];

    im1.setAttribute('src', imge1);

    var randomnum2 = Math.floor(Math.random() * 6 + 1);
    var imge2 = "/photos/dice" + randomnum2 + ".png";
    var im2 = document.querySelectorAll('img')[1];
    im2.setAttribute('src', imge2);
    if (randomnum1 > randomnum2) {
        document.getElementById('refresh_me').innerHTML = '🚩Player 1 WINS🚩';
    }
    else if (randomnum1 < randomnum2) {
        var inn = document.getElementById('refresh_me');
        inn.innerHTML = '🚩Player 2 WINS🚩';
    }
    else {

        var inn = document.getElementById('refresh_me');
        inn.innerHTML = '!!DRAW!!';
    }
});


