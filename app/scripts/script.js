const body = document.querySelector('body');


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

(() => {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = 75;
        // const headerElHeight =  document.querySelector('header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        // let targetPosition = target.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
})();

//----------- burger-menu---------------------//

(() => {
    const header__burger = document.querySelector('.header__burger');
    const header_nav_items = document.querySelector('.header__nav');
    const header__nav_links = document.querySelectorAll('.header__nav-item');

    header__burger.addEventListener('click', () => {
        header__burger.classList.toggle('active');
        header_nav_items.classList.toggle('active')
    });

    if (window.innerWidth <= 960) {
        header__nav_links.forEach(item => {
            item.addEventListener('click', () => {
                header__burger.classList.remove('active');
                header_nav_items.classList.remove('active')
            })
        })
    }
})();

//------------------------------header---------------------------------------//

const header = document.querySelector('.header');

window.onscroll = () => {
    if (window.pageYOffset > 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
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

    const demo_logo = document.querySelector('.demonsration__logo'),
        partner_logos = document.querySelectorAll('.demonsration__partners-logo'),
        demo_bg1 = document.querySelector('.demonsration__bg1'),
        demo_bg2 = document.querySelector('.demonsration__bg2');

    let side__diff = $('.demonsration__bg1').width() - $('.demonsration__bg1').height();

    const demo_reset = () => {
        setTimeout(() => demo_logo.classList.remove('active'), 1000);
        demo_bg2.classList.remove('active');
        demo_bg1.classList.add('active');
        for (let i = 0; i < partner_logos.length; i++) {
            partner_logos[i].classList.remove('active');
            partner_logos[i].style.transform = 'rotateZ(0) translateY(0)'
        }
    };

    const demo = () => {

        demo_logo.classList.add('active');

        for (let i = 0; i < partner_logos.length; i++) {
            ((j) => {
                setTimeout(() => {
                    partner_logos[j].classList.add('active');
                    if (side__diff > 0) {
                        partner_logos[j].style.transform = 'rotateZ(' +
                            (80 - j * (160 / 7)) + 'deg) translateY(45vh)'
                    } else {
                        partner_logos[j].style.transform = 'rotateZ(' +
                            (80 - j * (160 / 7)) + 'deg) translateY(35vW)'
                    }

                }, j * 400)
            })(i);
        }

        setTimeout(() => {
            demo_bg1.classList.remove('active');
            demo_bg2.classList.add('active')
        }, 3000);
    };

    demo();
    setTimeout(() => {
        demo_reset();
        setInterval(demo_reset, 14000);
    }, 9000);

    setInterval(demo, 14000);

//-----------------------------slick------------------------//

    let slides = document.querySelectorAll('.partners__slide');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.background = 'url("img/partners/Picture' + i + '.jpg") no-repeat center/100% auto'
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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ],
        pauseOnFocus: false
    });
}

//===================================================for cleaning page================================================//

if (body.classList.contains('cleaningPage')) {

//---------------------------------popup---------------------/

    const popup_cleaning = document.querySelector('.popup__cleaning'),
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
        mode11 = document.querySelectorAll('.clean_mode-11')
    ;

    let cleaning_mode = 0;
    let start_price = 0;


    for (let i = 0; i < cleaning__content_items.length; i++) {
        cleaning__content_items[i].addEventListener('click', () => {
            popup_cleaning.classList.remove('invis');
            body.classList.add('inactive');

            document.querySelector('.popup__cleaning-form-title').textContent = 'Расчет стоимости уборки';

            mode1.forEach((item) => {
                item.classList.add('hide')
            });
            mode3.forEach((item) => {
                item.classList.add('hide')
            });
            mode4.forEach((item) => {
                item.classList.add('hide')
            });
            mode11.forEach((item) => {
                item.classList.add('hide')
            });

            cleaning_mode = i + 1;
            cleaning_mode === 1 ? start_price = 6500 :
                cleaning_mode === 2 ? start_price = 9000 :
                    cleaning_mode === 3 ? start_price = 8000 :
                        cleaning_mode === 4 ? start_price = 17500 :
                            '';

            cleaning_mode === 1 || cleaning_mode === 2 ? mode1.forEach((item) => item.classList.remove('hide')) :
                cleaning_mode === 3 ? mode3.forEach((item) => item.classList.remove('hide')) :
                    cleaning_mode === 4 ? mode4.forEach((item) => item.classList.remove('hide')) : '';

            document.querySelector('.calc-result').value = 'Итого: ' + start_price + ' тг';
            document.querySelector('.calc-result-hidden').value = document.querySelector('.calc-result').value;

            custom_inputs.forEach((item) => {
                if (item.classList.contains('hide')) {
                    item.querySelector('input').setAttribute('disabled', 'disabled')
                } else {
                    item.querySelector('input').removeAttribute('disabled')
                }
            });

            //---------------------------------------------start content display mode-------------------------------------------//

            let general_switches_panel = document.querySelector('.cleaning-form__general_switch');
            cleaning_mode === 3 || cleaning_mode === 4 || cleaning_mode === 5 ? general_switches_panel.classList.add('hide') :
                general_switches_panel.classList.remove('hide');

            let about__cleaning_content = document.querySelectorAll('.about__cleaning-content');
            cleaning_mode === 3 ? (about__cleaning_content.forEach((item) => item.classList.add('hide')) ,
                    about__cleaning_content[1].classList.remove('hide')) :
                cleaning_mode === 4 ? (about__cleaning_content.forEach((item) => item.classList.add('hide')) ,
                        about__cleaning_content[2].classList.remove('hide')) :
                    (about__cleaning_content.forEach((item) => item.classList.add('hide')) ,
                        about__cleaning_content[0].classList.remove('hide'));

            let capet_clean__table = document.querySelector('.capet_clean__table');
            let question__desc_content = document.querySelectorAll('.question__desc-content');

            cleaning_mode === 5 ? (capet_clean__table.classList.remove('hide'),
                    document.querySelector('.calc-result').classList.add('hide'),
                    document.querySelector('.calc-result-hidden').value = 'химчистка',
                    document.querySelector('.popup__cleaning-form-title').textContent = 'Прайс-лист услуг химчистки(тенге)',
                    question__desc_content[0].classList.add('hide'),
                    question__desc_content[1].classList.remove('hide')) :
                (capet_clean__table.classList.add('hide'),
                    document.querySelector('.calc-result').classList.remove('hide'),
                    question__desc_content[1].classList.add('hide'),
                    question__desc_content[0].classList.remove('hide'));


            //----------------------------------------------end content display mode--------------------------------------//
        });
    }

    general_switches.forEach((item, index) => {
        item.addEventListener('click', () => {
            if (item.classList.contains('active')) {
            } else {
                item.classList.add('active');
                if (index === 1) {
                    general_switches[0].classList.remove('active');
                    cleaning_mode === 1 ? cleaning_mode = 11 : cleaning_mode === 2 ? cleaning_mode = 21 : '';

                } else {
                    general_switches[1].classList.remove('active');
                    cleaning_mode === 11 ? cleaning_mode = 1 : cleaning_mode === 21 ? cleaning_mode = 2 : '';
                }

                mode1.forEach((item) => {
                    item.classList.add('hide')
                });

                mode11.forEach((item) => {
                    item.classList.add('hide')
                });

                cleaning_mode === 1 || cleaning_mode === 2 ? mode1.forEach((item) => item.classList.remove('hide')) :
                    cleaning_mode === 11 || cleaning_mode === 21 ? mode11.forEach((item) => item.classList.remove('hide')) : '';

                cleaning_mode === 1 ? start_price = 6500 :
                    cleaning_mode === 2 ? start_price = 9000 :
                        cleaning_mode === 11 || cleaning_mode === 21 ? start_price = 13500 : '';

                document.querySelector('.calc-result').value = 'Итого: ' + start_price + ' тг';

                custom_inputs.forEach((item) => {
                    if (item.classList.contains('hide')) {
                        item.querySelector('input').setAttribute('disabled', 'disabled')
                    } else {
                        item.querySelector('input').removeAttribute('disabled')
                    }
                });

            }
        })
    });


    frame__close_button.addEventListener('click', () => {
        body.classList.remove('inactive');
        popup_cleaning.classList.add('invis');
        general_switches[0].classList.add('active');
        general_switches[1].classList.remove('active');
        document.querySelector('.popup__cleaning-form').reset()
    });


//---------------------bookmark switch--------------//
    for (let i = 0; i < popup_buttons.length; i++) {
        popup_buttons[i].addEventListener('click', () => {
            bookmarks.forEach((item) => {
                item.classList.remove('active')
            });
            bookmarks[i].classList.add('active')
        })
    }

//----------------------------------------------about cleaning-content------------------------------------------------//

    let cleaning_content__switch_buttons = document.querySelectorAll('.cleaning-content__switch-button');
    let cleaning_content__pictures = document.querySelectorAll('.cleaning-content__picture');

    cleaning_content__switch_buttons.forEach((item, index) => {
        item.addEventListener('click', () => {
            cleaning_content__pictures.forEach((i) => {
                i.classList.remove('active')
            });
            cleaning_content__switch_buttons.forEach((i) => {
                i.classList.remove('active')
            });
            cleaning_content__pictures[index].classList.add('active');
            item.classList.add('active')
        })
    });

//--------------------custom input number-------------------//


    const custom_input_func = (custom_input) => {
        const button_down = custom_input.querySelector('.custom_input-number_down'),
            button_up = custom_input.querySelector('.custom_input-number_up');
        let current_input = custom_input.querySelector('input');
        let custom_input_value = current_input.value;
        let custom_input_step = Number(current_input.getAttribute('step'));
        let custom_input_max = Number(current_input.getAttribute('max'));
        let custom_input_min = Number(current_input.getAttribute('min'));
        let event = new Event("input");

        button_up.addEventListener('click', () => {
            if (custom_input_max && Number(custom_input_value) < Number(custom_input_max)) {
                custom_input_step ? custom_input_value = Number(custom_input_value + custom_input_step) : custom_input_value++;
                custom_input.querySelector('input').value = custom_input_value;
                current_input.dispatchEvent(event);
            }
        });
        button_down.addEventListener('click', () => {
            if (Number(custom_input_value) > Number(custom_input_min)) {
                custom_input_step ? custom_input_value = Number(custom_input_value - custom_input_step) : custom_input_value--;
                custom_input.querySelector('input').value = custom_input_value;
                current_input.dispatchEvent(event);
            }
        });
    };

    custom_inputs.forEach((item) => {
        custom_input_func(item)
    });

//---------------------------------------calc mech--------------------------------------------//

    const cleaning_form_number_inputs = document.querySelectorAll('.cleaning-form_inputs input');


    cleaning_form_number_inputs.forEach((item) => {
        item.addEventListener('input', () => {
            let calc_result = 0;

            calc_result =
                (cleaning_mode === 11 || cleaning_mode === 21 ? Number(cleaning_form_number_inputs[0].value) * 450 : 0) +
                (cleaning_mode === 1 || cleaning_mode === 2 ? (Number(cleaning_form_number_inputs[1].value - 1) * 2000 + start_price) : 0) +
                Number(cleaning_form_number_inputs[2].value - 1) * 1000 +
                Number(cleaning_form_number_inputs[3].value) * 1500 +
                Number(cleaning_form_number_inputs[4].value) * 1500 +
                Number(cleaning_form_number_inputs[5].value) * 1000 +
                Number(cleaning_form_number_inputs[6].value) * 1400 +
                Number(cleaning_form_number_inputs[7].value) * 1000 +
                Number(cleaning_form_number_inputs[8].value) * 1200 +
                Number(cleaning_form_number_inputs[9].value) * 1000 +
                Number(cleaning_form_number_inputs[10].value) * 1600 +
                Number(cleaning_form_number_inputs[11].value) * 1900 +
                Number(cleaning_form_number_inputs[12].value) * 700 +
                Number(cleaning_form_number_inputs[13].value) * 700 +
                Number(cleaning_form_number_inputs[14].value) * 500 +
                (cleaning_mode === 3 ? Number(cleaning_form_number_inputs[15].value) * 160 : 0) +
                (cleaning_mode === 4 ? Number(cleaning_form_number_inputs[16].value) * 350 : 0);

            document.querySelector('.calc-result').value = 'Итого: ' + calc_result + ' тг';
            document.querySelector('.calc-result-hidden').value = calc_result + ' тг';

        })
    });


//---------------------------------email------------------------//

    const ajax_mail = (form) => {
        form.submit(function () { //Change
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
        })
    };

    ajax_mail($(".popup__cleaning-form"));
}

//=======================================for contacts=================================================================//


if (body.classList.contains('contactsPage')) {
    const contactMapCover = document.querySelector('.contact__map-cover');
    window.onload = () => {
        contactMapCover.classList.add('active')
    }
}