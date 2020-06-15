'use strict';

var body = document.querySelector('body');

//-----------------------preloader-----------------------------//

// document.body.onload = function () {
//     setTimeout(function () {
//         const preloader = document.querySelector('.preloader');
//         if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//         }
//     }, 500)
// };

//-----------------------scroll-----------------------------//

(function () {

    var smoothScroll = function smoothScroll(targetEl, duration) {
        var headerElHeight = 75;
        // const headerElHeight =  document.querySelector('header').clientHeight;
        var target = document.querySelector(targetEl);
        var targetPosition = target.getBoundingClientRect().top - headerElHeight;
        // let targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var startTime = null;

        var ease = function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        var animation = function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    var scrollTo = function scrollTo() {
        var links = document.querySelectorAll('.js-scroll');
        links.forEach(function (each) {
            each.addEventListener('click', function () {
                var currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
})();

//----------- burger-menu---------------------//

(function () {
    var header__burger = document.querySelector('.header__burger');
    var header_nav_items = document.querySelector('.header__nav');
    var header__nav_links = document.querySelectorAll('.header__nav-item');

    header__burger.addEventListener('click', function () {
        header__burger.classList.toggle('active');
        header_nav_items.classList.toggle('active');
    });

    if (window.innerWidth <= 960) {
        header__nav_links.forEach(function (item) {
            item.addEventListener('click', function () {
                header__burger.classList.remove('active');
                header_nav_items.classList.remove('active');
            });
        });
    }
})();

//------------------------------header---------------------------------------//

var header = document.querySelector('.header');

window.onscroll = function () {
    if (window.pageYOffset > 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
};

//-----------------------------intro video-----------------------------------//

$('.video__background').vide({
    mp4: '../img/video/cover1.mp4',
    poster: '../img/video/cover1.jpg'
}, {
    volume: 1,
    playbackRate: 1,
    muted: true,
    loop: true,
    autoplay: true,
    position: '50% 50%', // Similar to the CSS `background-position` property.
    posterType: 'jpg', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
    resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
    bgColor: 'transparent', // Allow custom background-color for Vide div,
    className: '' // Add custom CSS class to Vide div
});

//===========================================================for main page============================================//

if (body.classList.contains('mainPage')) {

    //-------------------------------demo mech--------------------------------------//

    var demo_logo = document.querySelector('.demonsration__logo'),
        partner_logos = document.querySelectorAll('.demonsration__partners-logo'),
        demo_bg1 = document.querySelector('.demonsration__bg1'),
        demo_bg2 = document.querySelector('.demonsration__bg2');

    var side__diff = $('.demonsration__bg1').width() - $('.demonsration__bg1').height();

    var demo_reset = function demo_reset() {
        setTimeout(function () {
            return demo_logo.classList.remove('active');
        }, 1000);
        demo_bg2.classList.remove('active');
        demo_bg1.classList.add('active');
        for (var i = 0; i < partner_logos.length; i++) {
            partner_logos[i].classList.remove('active');
            partner_logos[i].style.transform = 'rotateZ(0) translateY(0)';
        }
    };

    var demo = function demo() {

        demo_logo.classList.add('active');

        for (var i = 0; i < partner_logos.length; i++) {
            (function (j) {
                setTimeout(function () {
                    partner_logos[j].classList.add('active');
                    if (side__diff > 0) {
                        partner_logos[j].style.transform = 'rotateZ(' + (80 - j * (160 / 7)) + 'deg) translateY(45vh)';
                    } else {
                        partner_logos[j].style.transform = 'rotateZ(' + (80 - j * (160 / 7)) + 'deg) translateY(35vW)';
                    }
                }, j * 400);
            })(i);
        }

        setTimeout(function () {
            demo_bg1.classList.remove('active');
            demo_bg2.classList.add('active');
        }, 3000);
    };

    demo();
    setTimeout(function () {
        demo_reset();
        setInterval(demo_reset, 14000);
    }, 9000);

    setInterval(demo, 14000);

    //-----------------------------slick------------------------//

    var slides = document.querySelectorAll('.partners__slide');

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.background = 'url("img/parnters/Picture' + i + '.jpg") no-repeat center/100% auto';
    }

    $('.partners__slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }],
        pauseOnFocus: false
    });
}

//===================================================for cleaning page================================================//

if (body.classList.contains('cleaningPage')) {
    (function () {

        //---------------------------------popup---------------------/

        var popup_cleaning = document.querySelector('.popup__cleaning'),
            cleaning__content_items = document.querySelectorAll('.cleaning__content-item'),
            popup_buttons = popup_cleaning.querySelectorAll('.bookmark-button'),
            bookmarks = popup_cleaning.querySelectorAll('.bookmark'),
            frame__close_button = popup_cleaning.querySelector('.cleaning__frame-close_button'),
            custom_inputs = document.querySelectorAll('.cleaning-form_input'),
            general_switches = document.querySelectorAll('.cleaning-form__general_switch-item'),
            mode1 = document.querySelectorAll('.clean_mode-1'),

        // mode2 = document.querySelectorAll('.clean_mode-2'),
        mode3 = document.querySelectorAll('.clean_mode-3'),
            mode4 = document.querySelectorAll('.clean_mode-4'),

        // mode5 = document.querySelectorAll('.clean_mode-5'),
        mode11 = document.querySelectorAll('.clean_mode-11');

        var cleaning_mode = 0;
        var start_price = 0;

        var _loop = function _loop(_i) {
            cleaning__content_items[_i].addEventListener('click', function () {
                popup_cleaning.classList.remove('invis');
                body.classList.add('inactive');

                document.querySelector('.popup__cleaning-form-title').textContent = 'Расчет стоимости уборки';

                mode1.forEach(function (item) {
                    item.classList.add('hide');
                });
                mode3.forEach(function (item) {
                    item.classList.add('hide');
                });
                mode4.forEach(function (item) {
                    item.classList.add('hide');
                });
                mode11.forEach(function (item) {
                    item.classList.add('hide');
                });

                cleaning_mode = _i + 1;
                cleaning_mode === 1 ? start_price = 6500 : cleaning_mode === 2 ? start_price = 9000 : cleaning_mode === 3 ? start_price = 8000 : cleaning_mode === 4 ? start_price = 17500 : '';

                cleaning_mode === 1 || cleaning_mode === 2 ? mode1.forEach(function (item) {
                    return item.classList.remove('hide');
                }) : cleaning_mode === 3 ? mode3.forEach(function (item) {
                    return item.classList.remove('hide');
                }) : cleaning_mode === 4 ? mode4.forEach(function (item) {
                    return item.classList.remove('hide');
                }) : '';

                document.querySelector('.calc-result').value = 'Итого: ' + start_price + ' тг';
                document.querySelector('.calc-result-hidden').value = document.querySelector('.calc-result').value;

                custom_inputs.forEach(function (item) {
                    if (item.classList.contains('hide')) {
                        item.querySelector('input').setAttribute('disabled', 'disabled');
                    } else {
                        item.querySelector('input').removeAttribute('disabled');
                    }
                });

                //---------------------------------------------start content display mode-------------------------------------------//

                var general_switches_panel = document.querySelector('.cleaning-form__general_switch');
                cleaning_mode === 3 || cleaning_mode === 4 || cleaning_mode === 5 ? general_switches_panel.classList.add('hide') : general_switches_panel.classList.remove('hide');

                var about__cleaning_content = document.querySelectorAll('.about__cleaning-content');
                cleaning_mode === 3 ? (about__cleaning_content.forEach(function (item) {
                    return item.classList.add('hide');
                }), about__cleaning_content[1].classList.remove('hide')) : cleaning_mode === 4 ? (about__cleaning_content.forEach(function (item) {
                    return item.classList.add('hide');
                }), about__cleaning_content[2].classList.remove('hide')) : (about__cleaning_content.forEach(function (item) {
                    return item.classList.add('hide');
                }), about__cleaning_content[0].classList.remove('hide'));

                var capet_clean__table = document.querySelector('.capet_clean__table');
                var question__desc_content = document.querySelectorAll('.question__desc-content');

                cleaning_mode === 5 ? (capet_clean__table.classList.remove('hide'), document.querySelector('.calc-result').classList.add('hide'), document.querySelector('.calc-result-hidden').value = 'химчистка', document.querySelector('.popup__cleaning-form-title').textContent = 'Прайс-лист услуг химчистки(тенге)', question__desc_content[0].classList.add('hide'), question__desc_content[1].classList.remove('hide')) : (capet_clean__table.classList.add('hide'), document.querySelector('.calc-result').classList.remove('hide'), question__desc_content[1].classList.add('hide'), question__desc_content[0].classList.remove('hide'));

                //----------------------------------------------end content display mode--------------------------------------//
            });
        };

        for (var _i = 0; _i < cleaning__content_items.length; _i++) {
            _loop(_i);
        }

        general_switches.forEach(function (item, index) {
            item.addEventListener('click', function () {
                if (item.classList.contains('active')) {} else {
                    item.classList.add('active');
                    if (index === 1) {
                        general_switches[0].classList.remove('active');
                        cleaning_mode === 1 ? cleaning_mode = 11 : cleaning_mode === 2 ? cleaning_mode = 21 : '';
                    } else {
                        general_switches[1].classList.remove('active');
                        cleaning_mode === 11 ? cleaning_mode = 1 : cleaning_mode === 21 ? cleaning_mode = 2 : '';
                    }

                    mode1.forEach(function (item) {
                        item.classList.add('hide');
                    });

                    mode11.forEach(function (item) {
                        item.classList.add('hide');
                    });

                    cleaning_mode === 1 || cleaning_mode === 2 ? mode1.forEach(function (item) {
                        return item.classList.remove('hide');
                    }) : cleaning_mode === 11 || cleaning_mode === 21 ? mode11.forEach(function (item) {
                        return item.classList.remove('hide');
                    }) : '';

                    cleaning_mode === 1 ? start_price = 6500 : cleaning_mode === 2 ? start_price = 9000 : cleaning_mode === 11 || cleaning_mode === 21 ? start_price = 13500 : '';

                    document.querySelector('.calc-result').value = 'Итого: ' + start_price + ' тг';

                    custom_inputs.forEach(function (item) {
                        if (item.classList.contains('hide')) {
                            item.querySelector('input').setAttribute('disabled', 'disabled');
                        } else {
                            item.querySelector('input').removeAttribute('disabled');
                        }
                    });
                }
            });
        });

        frame__close_button.addEventListener('click', function () {
            body.classList.remove('inactive');
            popup_cleaning.classList.add('invis');
            general_switches[0].classList.add('active');
            general_switches[1].classList.remove('active');
            document.querySelector('.popup__cleaning-form').reset();
        });

        //---------------------bookmark switch--------------//

        var _loop2 = function _loop2(_i2) {
            popup_buttons[_i2].addEventListener('click', function () {
                bookmarks.forEach(function (item) {
                    item.classList.remove('active');
                });
                bookmarks[_i2].classList.add('active');
            });
        };

        for (var _i2 = 0; _i2 < popup_buttons.length; _i2++) {
            _loop2(_i2);
        }

        //----------------------------------------------about cleaning-content------------------------------------------------//

        var cleaning_content__switch_buttons = document.querySelectorAll('.cleaning-content__switch-button');
        var cleaning_content__pictures = document.querySelectorAll('.cleaning-content__picture');

        cleaning_content__switch_buttons.forEach(function (item, index) {
            item.addEventListener('click', function () {
                cleaning_content__pictures.forEach(function (i) {
                    i.classList.remove('active');
                });
                cleaning_content__switch_buttons.forEach(function (i) {
                    i.classList.remove('active');
                });
                cleaning_content__pictures[index].classList.add('active');
                item.classList.add('active');
            });
        });

        //--------------------custom input number-------------------//


        var custom_input_func = function custom_input_func(custom_input) {
            var button_down = custom_input.querySelector('.custom_input-number_down'),
                button_up = custom_input.querySelector('.custom_input-number_up');
            var current_input = custom_input.querySelector('input');
            var custom_input_value = current_input.value;
            var custom_input_step = Number(current_input.getAttribute('step'));
            var custom_input_max = Number(current_input.getAttribute('max'));
            var custom_input_min = Number(current_input.getAttribute('min'));
            var event = new Event("input");

            button_up.addEventListener('click', function () {
                if (custom_input_max && Number(custom_input_value) < Number(custom_input_max)) {
                    custom_input_step ? custom_input_value = Number(custom_input_value + custom_input_step) : custom_input_value++;
                    custom_input.querySelector('input').value = custom_input_value;
                    current_input.dispatchEvent(event);
                }
            });
            button_down.addEventListener('click', function () {
                if (Number(custom_input_value) > Number(custom_input_min)) {
                    custom_input_step ? custom_input_value = Number(custom_input_value - custom_input_step) : custom_input_value--;
                    custom_input.querySelector('input').value = custom_input_value;
                    current_input.dispatchEvent(event);
                }
            });
        };

        custom_inputs.forEach(function (item) {
            custom_input_func(item);
        });

        //---------------------------------------calc mech--------------------------------------------//

        var cleaning_form_number_inputs = document.querySelectorAll('.cleaning-form_inputs input');

        cleaning_form_number_inputs.forEach(function (item) {
            item.addEventListener('input', function () {
                var calc_result = 0;

                calc_result = (cleaning_mode === 11 || cleaning_mode === 21 ? Number(cleaning_form_number_inputs[0].value) * 450 : 0) + (cleaning_mode === 1 || cleaning_mode === 2 ? Number(cleaning_form_number_inputs[1].value - 1) * 2000 + start_price : 0) + Number(cleaning_form_number_inputs[2].value - 1) * 1000 + Number(cleaning_form_number_inputs[3].value) * 1500 + Number(cleaning_form_number_inputs[4].value) * 1500 + Number(cleaning_form_number_inputs[5].value) * 1000 + Number(cleaning_form_number_inputs[6].value) * 1400 + Number(cleaning_form_number_inputs[7].value) * 1000 + Number(cleaning_form_number_inputs[8].value) * 1200 + Number(cleaning_form_number_inputs[9].value) * 1000 + Number(cleaning_form_number_inputs[10].value) * 1600 + Number(cleaning_form_number_inputs[11].value) * 1900 + Number(cleaning_form_number_inputs[12].value) * 700 + Number(cleaning_form_number_inputs[13].value) * 700 + Number(cleaning_form_number_inputs[14].value) * 500 + (cleaning_mode === 3 ? Number(cleaning_form_number_inputs[15].value) * 160 : 0) + (cleaning_mode === 4 ? Number(cleaning_form_number_inputs[16].value) * 350 : 0);

                document.querySelector('.calc-result').value = 'Итого: ' + calc_result + ' тг';
                document.querySelector('.calc-result-hidden').value = calc_result + ' тг';
            });
        });

        //---------------------------------email------------------------//

        var ajax_mail = function ajax_mail(form) {
            form.submit(function () {
                //Change
                var th = $(this);
                $.ajax({
                    type: "POST",
                    url: "mail.php", //Change
                    data: th.serialize()
                }).done(function () {
                    alert("Thank you!");
                    setTimeout(function () {
                        // Done Functions
                        th.trigger("reset");
                    }, 1000);
                });
                return false;
            });
        };

        ajax_mail($(".popup__cleaning-form"));
    })();
}