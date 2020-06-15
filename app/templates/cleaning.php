<main>
    <div class="cleaning" id="cleaning">
        <div class="popup__cleaning invis">
            <div class="popup__cleaning-frame">

                <div class="bookmark calc__form active">
                    <div class="bookmark-button">
                        <p class="bookmark-button__title">стоимость</p>
                    </div>
                    <form class="popup__cleaning-form">
                        <h2 class="popup__cleaning-form-title">Расчет стоимости уборки</h2>
                        <a class="popup__cleaning-form-tel" href="tel:+77013222137">+7 (701) 322-2137 </a>
                        <p>Ежедневно с 8 до 20</p>
                        <div class="cleaning-form__general_switch">
                            <div class="cleaning-form__general_switch-item active">стандартная</div>
                            <div class="cleaning-form__general_switch-item">генеральная</div>
                        </div>

                        <!-- Hidden Required Fields -->
                        <input name="project_name" type="hidden" value="AVGM.KZ">
                        <input name="admin_email" type="hidden" value="cleaning@mail.avgm.kz">
                        <input class="form_subject" name="form_subject" type="hidden" value="Cleaning!">
                        <!-- END Hidden Required Fields -->

                        <label for="i0"></label>
                        <label for="i1"></label>
                        <label for="i2"></label>
                        <label for="i3"></label>
                        <label for="i4"></label>
                        <label for="i5"></label>
                        <label for="i6"></label>
                        <label for="i7"></label>
                        <label for="i8"></label>
                        <label for="i9"></label>
                        <label for="i10"></label>
                        <label for="i11"></label>
                        <label for="i12"></label>
                        <label for="i13"></label>
                        <label for="i14"></label>
                        <label for="i15"></label>
                        <label for="i16"></label>
                        <label for="i17"></label>
                        <label for="i18"></label>
                        <label for="result"></label>
                        <div class="cleaning-form_inputs">
                            <div class="cleaning-form_input clean_mode-11">
                                <div class="form_input-pic">
                                    <img alt="" src="#">
                                </div>
                                <p class="form_input-quest">!</p>
                                <p class="form_input-title">площадь м<sup>2</sup></p>
                                <div class="custom_input-number custom_input-number-rooms">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i0" max="1000" min="30" name="площадь" placeholder="30" type="number"
                                           value="30">
                                    <div class="custom_input-number_up"></div>
                                </div>

                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="" src="#">
                                </div>
                                <p class="form_input-quest">!</p>
                                <p class="form_input-title">количество комнат</p>
                                <div class="custom_input-number custom_input-number-rooms">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i1" max="10" min="1" name="количество комнат" placeholder="1"
                                           type="number" value="1">
                                    <div class="custom_input-number_up"></div>
                                </div>

                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="" src="#">
                                </div>
                                <p class="form_input-quest">!</p>
                                <p class="form_input-title">количество санузлов</p>
                                <div class="custom_input-number custom_input-number-toiletss">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i2" max="10" min="1" name="количество санузлов" placeholder="1"
                                           type="number" value="1">
                                    <div class="custom_input-number_up"></div>
                                </div>

                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="fridge" src="../img/svg/fridge.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Вымоем снаружи и внутри, выкинем пропавшее. Морозильную камеру размораживает клиент.">
                                    ?</p>
                                <p class="form_input-title">холодильник</p>
                                <div class="custom_input-number custom_input-number-fridge">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i3" max="10" min="0" name="холодильник" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>

                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/oven.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Вымоем снаружи и внутри.">?</p>
                                <p class="form_input-title">духовка</p>
                                <div class="custom_input-number custom_input-number-oven">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i4" max="10" min="0" name="духовка" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/plate.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Помоем всю грязную посуду, высушим и аккуратно расставим.">?</p>
                                <p class="form_input-title">посуда</p>
                                <div class="custom_input-number custom_input-number-plates">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i5" max="1" min="0" name="посуда" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-1 clean_mode-11">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/laundry.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Погладим всё, что оставите, кроме нижнего белья и верхней одежды.">?</p>
                                <p class="form_input-title">глажка</p>
                                <div class="custom_input-number custom_input-number-laundry">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i6" max="90" min="0" name="глажка" placeholder="0" step="10"
                                           type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/cat.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Почистим и продезинфицируем лоток, сменим наполнитель, помоем мисочки.">?</p>
                                <p class="form_input-title">питомец</p>
                                <div class="custom_input-number custom_input-number-cat">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i7" max="10" min="0" name="питомец" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/kitchen.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Вымоем снаружи и внутри, наведём порядок.">?</p>
                                <p class="form_input-title">кухонные шкафы</p>
                                <div class="custom_input-number custom_input-number-kitchen">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i8" max="10" min="0" name="кухонные шкафы" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/window.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Вымоем снаружи и внутри, включая рамы, торцы и подоконник. Одно окно — 2-3 секции общей площадью ~3 кв. м.">
                                    ?</p>
                                <p class="form_input-title">окна</p>
                                <div class="custom_input-number custom_input-number-window">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i9" max="10" min="0" name="окна" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-1 clean_mode-11">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/cupboard.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Вымоем снаружи и внутри, наведём порядок, аккуратно сложим вещи. Делаем только в присутствии клиента.">
                                    ?</p>
                                <p class="form_input-title">шкафы</p>
                                <div class="custom_input-number custom_input-number-cupboard">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i10" max="10" min="0" name="шкафы" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/balcony.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Наведём порядок, вымоем полы и стены. Окна считаем отдельно.">?</p>
                                <p class="form_input-title">балкон</p>
                                <div class="custom_input-number custom_input-number-balcony">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i11" max="10" min="0" name="балкон" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-1">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/microwave.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Вымоем снаружи и внутри">?</p>
                                <p class="form_input-title">микроволновка</p>
                                <div class="custom_input-number custom_input-number-microwave">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i12" max="10" min="0" name="микроволновка" placeholder="0" type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-11">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/window.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Снимем старые шторы и тюль, повесим новые. Считаем комплектами, комплект — всё, что висит на одном окне.">
                                    ?</p>
                                <p class="form_input-title">снять и повесить шторы</p>
                                <div class="custom_input-number custom_input-number-microwave">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i15" max="40" min="0" name="снять и повесить шторы" placeholder="0"
                                           type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-11">
                                <div class="form_input-pic">
                                    <img alt="oven" src="../img/svg/steam-iron.svg">
                                </div>
                                <p class="form_input-quest"
                                   title="Обработаем шторы и тюль от пыли парогенератором. Считаем поштучно.">?</p>
                                <p class="form_input-title">обработка штор от пыли</p>
                                <div class="custom_input-number custom_input-number-microwave">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i16" max="40" min="0" name="обработка штор от пыли" placeholder="0"
                                           type="number">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="cleaning-form_input clean_mode-3">
                                <div class="form_input-pic">
                                    <img alt="" src="#">
                                </div>
                                <p class="form_input-quest">!</p>
                                <p class="form_input-title">Общая площадь м<sup>2</sup></p>
                                <div class="custom_input-number custom_input-number-rooms">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i17" max="1000" min="50" name="площадь" placeholder="50" type="number"
                                           value="50">
                                    <div class="custom_input-number_up"></div>
                                </div>

                            </div>
                            <div class="cleaning-form_input clean_mode-4">
                                <div class="form_input-pic">
                                    <img alt="" src="#">
                                </div>
                                <p class="form_input-quest">!</p>
                                <p class="form_input-title">Общая площадь м<sup>2</sup></p>
                                <div class="custom_input-number custom_input-number-rooms">
                                    <div class="custom_input-number_down"></div>
                                    <input id="i18" max="1000" min="50" name="площадь" placeholder="50" type="number"
                                           value="50">
                                    <div class="custom_input-number_up"></div>
                                </div>
                            </div>
                            <div class="capet_clean__table hide">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Диван с одним посадочным местом
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">2000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Диван двухместный
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">4000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Диван трехместный
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">6000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Кресло
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">3000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ковер шелковый
                                        </td>
                                        <td class="text-right">м<sup>2</sup></td>
                                        <td class="text-right">от 800
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ковер шерстяной
                                        </td>
                                        <td class="text-right">м<sup>2</sup></td>
                                        <td class="text-right">от 800
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ковер синтетический
                                        </td>
                                        <td class="text-right">м<sup>2</sup></td>
                                        <td class="text-right">от 500
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ковер короткий ворс
                                        </td>
                                        <td class="text-right">м<sup>2</sup></td>
                                        <td class="text-right">500
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ковер длинный ворс
                                        </td>
                                        <td class="text-right">м<sup>2</sup></td>
                                        <td class="text-right">600
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Ковролан
                                        </td>
                                        <td class="text-right">м<sup>2</sup></td>
                                        <td class="text-right">от 500
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Матрац односпальный
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">6000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Матрац полутораспальный
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">7000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Матрац двуспальный
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">8000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Пуф
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">1500
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Табурет (стул без спинки)
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">500
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Стул со спинкой
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">от 1000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Кухонный уголок
                                        </td>
                                        <td class="text-right">шт
                                        </td>
                                        <td class="text-right">4000
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <input class="calc-result-hidden" name="Итого" type="hidden" value="Итого: 6500 тг">
                        <input class="calc-result" disabled id="result" type="text" value="Итого: 6500 тг">
                        <input class="input__name" id="i13" name="Имя" placeholder="введите имя..." type="text">
                        <input class="input__phone" id="i14" name="Телефон" placeholder="введите телефон..." type="tel">
                        <button>Оптравить заявку</button>
                    </form>
                </div>
                <div class="bookmark about__cleaning">
                    <div class="bookmark-button">
                        <p class="bookmark-button__title">Как мы делаем уборку</p>
                    </div>
                    <div class="about__cleaning-content">
                        <div class="cleaning-content__switch">
                            <div class="cleaning-content__switch-button active">в комнате</div>
                            <div class="cleaning-content__switch-button">на кухне</div>
                            <div class="cleaning-content__switch-button">в ванной</div>
                        </div>
                        <div class="cleaning-content__picture active"></div>
                        <div class="cleaning-content__picture"></div>
                        <div class="cleaning-content__picture"></div>
                    </div>
                    <div class="about__cleaning-content hide">
                        <div class="cleaning-content__picture-office"></div>
                    </div>
                    <div class="about__cleaning-content hide">
                        <div class="cleaning-content__picture-renov"></div>
                    </div>
                </div>

                <div class="bookmark question__desc">
                    <div class="bookmark-button">
                        <p class="bookmark-button__title">Часто задаваемые вопросы</p>
                    </div>

                    <div class="question__desc-content">
                        <h3>Нужно ли мне присутствовать во время уборки?</h3>
                        <p>Нет, ваше присутствие не требуется. Весь процесс уборки контролирует наш менеджер. Мы просим
                            хозяев остаться, только если наводим порядок в гардеробе и шкафах с личными вещами.</p>
                        <h3>Какой инвентарь и бытовую химию мне нужно для вас оставить?</h3>
                        <p>Ничего специально оставлять не нужно, у нас всё есть: стремянки, мопы, профессиональные
                            пылесосы,
                            парогенераторы, вот это всё. Для каждой поверхности или отделочного материала мы используем
                            подходящее специализированное моющее средство. Все средства безвредны для людей и животных.
                            Если
                            вы хотите, чтобы мы воспользовались какой-то специальной химией, попросите об этом
                            менеджера.</p>
                        <h3>Чем отличается стандартная уборка от генеральной?</h3>
                        <p>В стандартной уборке мы наводим порядок в более-менее незагрязнённом доме: вытираем пыль,
                            моем
                            молы. При генеральной уборке перед наведением порядка в доме отмывается каждый уголок. Даже
                            если
                            он не очень этого хочет.</p>
                        <h3>Могу ли я заказать уборку части дома?</h3>
                        <p>Конечно, мы наведём порядок там, где вы попросите. И если вы уже на месте решите донавести
                            порядок везде — так мы тоже можем.</p>
                        <h3>Как я могу оплатить ваши услуги?</h3>
                        <p>Мы принимаем оплату картами и наличными. Вы платите в конце уборки, когда приняли её и вам
                            всё
                            понравилось. В случае оплаты на сайте, мы блокируем на вашей карте необходимую сумму и
                            спишем её
                            в течение часа после уборки.</p>
                    </div>
                    <div class="question__desc-content hide">
                        <h3>Почему не стоит самостоятельно чистить мягкую мебель?</h3>
                        <p>Стойкие пятна можно удалить только с помощью специальных средств. С обычной бытовой химией
                            приходится прилагать значительные усилия, долго и сильно тереть пятно. А это разрушает
                            структуру и портит внешний вид ткани.
                            <br/>Процесс удаления пятен и загрязнений очень деликатный. Необходимо обладать
                            определенными навыками, хорошо разбираться в технологии и чистящих средствах, так как для
                            каждого вида материала существуют свои особые правила ухода. Используя неподходящий состав,
                            можно повредить вещь.
                            <br/>Если пылесосить обивку бытовым пылесосом, то он вытягивает не только пыль, но и ворс,
                            что приводит к сокращению службы мебели.
                            <br/>После чистки собственными силами чаще всего образуются разводы, что портит эстетическое
                            восприятие.</p>
                        <h3>Как часто нужно делать химчистку?</h3>
                        <p>Химическая уборка квартиры должна проводится регулярно – не менее 2-х раз в год. Только так
                            можно защитить дом от накопившейся грязи и вредных микроорганизмов, вызывающих аллергию и
                            кожные раздражения. Если проводить чистку реже, то это отразится на сроке службы мебели и
                            будет способствовать распространению пылевых клещей.</p>
                        <h3>Какие типы загрязнений удаляются в процессе чистки?</h3>
                        <p>Следы кофе, сока, вина и жирные пятна от различных масел и еды. <br/>
                            Следы карандашей, фломастеров и ручек. <br/>
                            Специфические запахи и шерсть домашних животных. <br/>
                            Пятна крови. <br/>
                            Пыль и микроорганизмы, которые находятся в обивке мебели. <br/>
                            Засаленные места на подлокотниках. <br/>
                            Старые пятна, которые сложно поддаются устранению.</p>
                        <h3>Какие способы химчистки мебели применяются в работе?</h3>
                        <p>Сухая чистка. Предварительный этап, который позволяет избавиться от пыли внутри мягкой
                            мебели, а заодно и пылевых клещей.<br/>
                            Влажная чистка. Рекомендуется для удаления стойких загрязнений. Подходит не для всех видов
                            материалов. Проводится специальным оборудованием с применением профессиональных чистящих
                            средств.<br/>
                            Полувлажная чистка. Предназначена для деликатных тканей и незначительных пятен на
                            поверхности мебели и выполняется с использованием профессиональной техники.</p>
                        <h3>Безопасно ли делать химчистку, если в доме маленький ребенок?</h3>
                        <p>Используемые нами методы удаления загрязнений относятся к категории безопасных, и не наносят
                            вред здоровью детям, взрослым и домашним питомцам. Средства для выведения пятен, которые мы
                            применяем, предназначены для работы внутри помещений.</p>
                        <h3>Если мы закажем химчистку дивана, то сколько времени займет выполнение услуги?</h3>
                        <p>Продолжительность работы зависит от размера мебели, вида материала обивки, характера и
                            сложности загрязнения. Например, на чистку стандартного раскладного дивана потребуется около
                            1 часа времени.</p>
                    </div>
                </div>
                <div class="cleaning__frame-close_button">
                    <div class="close_button-pic"></div>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <h2 class="clening__title">Услуги клининга в Атырау</h2>
            <div class="clening__content">
                <div class="cleaning__content-item">
                    <h3 class="cleaning__item-title">Уборка квартир</h3>
                    <div class="cleaning__item-pic"></div>
                </div>
                <div class="cleaning__content-item">
                    <h3 class="cleaning__item-title">Уборка домов</h3>
                    <div class="cleaning__item-pic"></div>
                </div>
                <div class="cleaning__content-item">
                    <h3 class="cleaning__item-title">Уборка офисов</h3>
                    <div class="cleaning__item-pic"></div>
                </div>
                <div class="cleaning__content-item">
                    <h3 class="cleaning__item-title">Уборка после ремонта в квартирах, домах и офисах</h3>
                    <div class="cleaning__item-pic"></div>
                </div>
                <div class="cleaning__content-item">
                    <h3 class="cleaning__item-title">Химчистка мебели и ковров</h3>
                    <div class="cleaning__item-pic"></div>
                </div>
            </div>
        </div>
    </div>
</main>
