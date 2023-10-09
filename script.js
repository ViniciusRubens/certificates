// document.querySelectorAll('.card').forEach(function(card) {
//     card.addEventListener('mouseover', function() {
//         card.classList.toggle('flipped');
//     });
// });

// document.querySelector('.card1').addEventListener('mouseenter', function() {
//     this.classList.add('active');
// });

// document.querySelector('.card1').addEventListener('mouseleave', function() {
//     this.classList.remove('active');
// });

document.querySelector('.card1').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card1').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card1 = document.querySelector('.card1');

card1.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});


document.querySelector('.card2').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card2').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card2 = document.querySelector('.card2');

card2.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card3').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card3').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card3 = document.querySelector('.card3');

card3.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card4').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card4').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card4 = document.querySelector('.card4');

card4.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card5').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card5').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card5 = document.querySelector('.card5');

card5.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card6').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card6').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card6 = document.querySelector('.card6');

card6.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card7').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card7').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card7 = document.querySelector('.card7');

card7.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card8').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card8').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card8 = document.querySelector('.card8');

card8.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card9').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card9').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card9 = document.querySelector('.card9');

card9.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card10').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card10').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card10 = document.querySelector('.card10');

card10.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card11').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card11').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card11 = document.querySelector('.card11');

card11.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});

document.querySelector('.card12').addEventListener('mouseenter', function() {
    this.querySelector('.front').style.transform = 'rotateY(-180deg)';
    this.querySelector('.back').style.transform = 'rotateY(0deg)';
});

document.querySelector('.card12').addEventListener('mouseleave', function() {
    this.querySelector('.front').style.transform = 'rotateY(0deg)';
    this.querySelector('.back').style.transform = 'rotateY(180deg)';
});

const card12 = document.querySelector('.card12');

card12.addEventListener('click', function() {
    if (this.classList.contains('active')) {
        this.classList.remove('active');
    } else {
        this.classList.add('active');
    }
});