<!doctype html>
<html lang="ru">
<head>

    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=1.0"
          name="viewport">
    <meta content="ie=edge" http-equiv="X-UA-Compatible">
    <title>Atyrau Vital Global Mote</title>
    <meta content="ТОО «Atyrau Vital Global Mote LTD» занимается экологическим аутсорсингом.
           Мы предлагаем Вам свои услуги: аэродинамические испытания, вентиляция, строительство,
            сервис и услуги монтажа, утилизация распределение отходов, обслуживание электрика,
             системы кондиционирования, комплексное обслуживание объектов клининг"
          name="description">
    <meta content="avgm, avgm.kz, avgm kz, Atyrau Vital Global Mote LTD, Atyrau Vital Global Mote, Утилизация отходов,
            Утилизация отходов казахстан, клининг атырау, переработка отходов, переработка пищевых отходов,
            утилизация пищевых отходов, утилизация пищевых отходов казахстан, переработка пищевых отходов казахстан,
            утилизация отходов пищевой промышленности, утилизация пищевых отходов цена, способы утилизации пищевых отходов,
            отходы утилизация, управление отходами казахстан, пищевые отходы Казахстан, утилизация промышленных отходов в Казахстане,
            служба клининга в Атырау, комплексное обслуживание объектов, уборка квартир в Атырау"
          name="keywords"/>
    <link href="https://avgm.kz" rel="canonical"/>
    <link href="favicon.ico" rel="icon" type="image/x-icon">
    <link href="apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180">
    <link href="favicon-32x32.png" rel="icon" sizes="32x32" type="image/png">
    <link href="favicon-16x16.png" rel="icon" sizes="16x16" type="image/png">
    <link href="site.webmanifest" rel="manifest">
    <link color="#5bbad5" href="safari-pinned-tab.svg" rel="mask-icon">
    <meta content="#da532c" name="msapplication-TileColor">
    <meta content="#ffffff" name="theme-color">
    <link href="libs/slick.css" rel="stylesheet"/>
    <link href="libs/slick-theme.css" rel="stylesheet"/>
    <link href="styles.css" rel="stylesheet">
</head>
<body class="<?= $page ?>">
<!--<div class="preloader">-->
<!--    <div class="letter">A</div>-->
<!--    <div class="letter">V</div>-->
<!--    <div class="letter">G</div>-->
<!--    <div class="letter">M</div>-->
<!--</div>-->
<div class="video__background"></div>
<header class="header">
    <div class="wrapper_big">
        <div class="header__content">
            <div class="header__logo">
                <a class="heder__logo-link js-scroll" href=<?= $page === 'mainPage'? "#intro" : 'main.php'?>></a>
            </div>
            <nav class="header__nav">
                <div class="header__nav-item">
                    <a class="header__nav-link js-scroll <?= $page === 'mainPage'? "active" : ''?>" href=<?= $page === 'mainPage'? "#intro" : 'main.php'?> >главная</a>
                    <?= $page === 'mainPage'? '
                    <div class="sub-menu">
                        <a class="header__nav-link js-scroll" href="#about">о нас</a>
                        <a class="header__nav-link  js-scroll" href="#services">услуги</a>
                        <a class="header__nav-link  js-scroll" href="#certificates">сертификаты</a>
                        <a class="header__nav-link  js-scroll" href="#contacts">контакты</a>
                    </div>
                    ' : ''?>
                </div>
                <div class="header__nav-item ">
                    <a class="header__nav-link <?= $page === 'equipmentPage'? "active" : ''?>" href="equipment.php">ОБОРУДОВАНИЕ</a>
                </div>
                <div class="header__nav-item">
                    <a class="header__nav-link <?= $page === 'cleaningPage'? "active" : ''?>" href="cleaning.php">клининг</a>
                </div>
                <div class="header__nav-item">
                    <a class="header__nav-link <?= $page === 'articlesPage'? "active" : ''?>" href="articles.php">статьи</a>
                </div>
                <div class="header__nav-item">
                    <a class="header__nav-link  <?= $page === 'contactsPage'? "active" : ''?>" href="contacts.php">контакты</a>
                </div>
                <div class="header__nav-close header__nav-item">
                    <span class="header___nav-close-line"></span>
                    <span class="header___nav-close-line"></span>
                </div>
            </nav>
            <div class="header__burger">
                <span class="burger__line"></span>
                <span class="burger__line"></span>
                <span class="burger__line"></span>
            </div>

        </div>
    </div>
</header>
<?= $pageContent ?>

<?= $page === 'contactsPage'? "" : '
<footer class="footer" id="contacts">
    <div class="wrapper">
        <div class="footer__content">
            <div class="footer__logo"></div>
            <h2 class="footer__title">Atyrau Vital Global Mote LTD</h2>
            <div class="footer__contacts">
                <div class="telephone">
                    <h3>Телефоны</h3>
                    <a href="tel:87122457525">8 712 245 75 25</a>
                    <a href="tel:87015096655">8 701 509 66 55</a>
                </div>
                <div class="e-mails">
                    <h3>E_MAIL</h3>
                    <a href="mailto:avgmpo@mail.ru">avgmpo@mail.ru</a>
                </div>
                <div class="adress">
                    <h3>АДРЕС</h3>
                    <p> г. Атырау Южная Пром Зона 4</p>
                </div>
                <h3 class="bin">БИН 080540018659</h3>
            </div>
        </div>
    </div>
</footer>
'?>
<script src="libs/jquery.min.js"></script>
<script src="libs/jquery.vide.min.js"></script>
<script src="libs/slick.min.js"></script>
<script src="script.js"></script>

</body>
</html>