<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="normalize.css">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script src="Jquery.js"></script>
    <script src="cvscript.js"></script>
    <script src="ityped.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</head>

<body>
    <header class="cvhead">
        <h1>
            <span class="withoutJS itypedsecret">Ahoj!</span>
            <span class="cvh1ityped"></span>
        </h1>
        <h2>
            <span class="withoutJS itypedsecret">Jmenuji se Patrik Birula <br> a chci být velkým programátorem!</span>
            <span class="cvh2ityped"></span><br>
            <span class="cvh3ityped"></span><span class="cvh4ityped"></span>
        </h2>
        <div class="cvphotosecret">
            <img src="img/Me.jpg" alt="">
        </div>
    </header>
    <section class="cvbody">
        <article class="whyprogrammer">
            <h3 class="cvh3red">Proč chci být programátorem?</h3>
            <p>
                Láká mě možnost svobody s tím spojená. To, že člověk nemusí pracovat jen na jednom místě, může si
                organizovat čas své práce dle aktuálních deadlinů. Navíc je to tvořivá práce, kde za sebou vidím
                výsledky a chci pracovat na projektech, které používají miliony lidí.
            </p>
            <h3 class="cvh3green">A kdo jsem?</h3>
            <p>
                Člověk, který se rád učí novým věcem, pracuje v týmu a má nutkavou potřebu vědět, proč věci fungují tak,
                jak fungují. Mezi mé největší plusy patří to, že se rychle učím a chci si neustále rozšiřovat své
                dovednosti. Mezi mé mínusy patří touha po dokonalosti a občasné záchvaty lenosti.
            </p>
            <h3 class="cvh3red">Jak Vám budu vlastně prospěšný?</h3>
            <p>
                No, hlavně tím, že pokud mi dáte možnost organizovat si svoji práci, vše dodám před termínem. Dále
                svým zápalem pro věc, kdy chci být užitečným členem týmu.
            </p>
            <h3 class="cvh3green">Tak to spolu zkusíme?</h3>
            <p>
                Když se rozhodnete dát mi šanci stát se Vaším novým juniorem, budu za to velmi vděčný. Koukněte na
                mnou vytvořené webové stránky a věřím, že zde najdete určitý potenciál. Předem děkuji za šanci.
            </p>

            <button class="contactbtn clickpop" id="cvcontactbtn">
                <h3>Zde najdete veškeré možnosti pro kontakt</h3>
            </button>
        </article>
        <section class="cvphoto">
            <img src="img/Me.jpg" alt="">
            <p id="feedbacktext">Ještě bych Vás chtěl požádat o zpětnou vazbu na mnou vytvořené webové
                stránky a co
                bych se měl případně doučit, abych se uchytil ve světě programátorů. Použijte, prosím, tento <a
                    href="#" id="formularbtn">formulář</a>. Velice děkuji a moc si vážím každého feedbacku.</p>
        </section>
        <article class="myknowledge">
            <h3>Co už vše umím?</h3>
            <h4>Označte, co se Vám hodí!</h4>
            <ul>
                <li>
                    <h5>HTML</h5>
                    <span class="idea" id="idea1">Bez toho nemá smysl číst dál</span>
                    <div class="button-area boxshadow-red" id="button-area1">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox1">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>CSS</h5>
                    <span class="idea" id="idea2">Jasný, to je základ</span>
                    <div class="button-area boxshadow-red" id="button-area2">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox2">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>SCSS</h5>
                    <span class="idea" id="idea3">Aspoň to bude přehlednější</span>
                    <div class="button-area boxshadow-red" id="button-area3">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox3">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>JQuery</h5>
                    <span class="idea" id="idea4">To se může občas hodit</span>
                    <div class="button-area boxshadow-red" id="button-area4">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox4">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>React - základy</h5>
                    <span class="idea" id="idea5">Konečně něco pořádného!</span>
                    <div class="button-area boxshadow-red" id="button-area5">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox5">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>Google vyhledávač</h5>
                    <span class="idea" id="idea6">Bomba! Vše si najde!</span>
                    <div class="button-area boxshadow-red" id="button-area6">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox6">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>Git/Github - základy</h5>
                    <span class="idea" id="idea7">Jistě, může spolupracovat</span>
                    <div class="button-area boxshadow-red" id="button-area7">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox7">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>Adobe Photoshop</h5>
                    <span class="idea" id="idea8">Snad nebude dělat meme šéfa</span>
                    <div class="button-area boxshadow-red" id="button-area8">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox8">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>Adobe Lightroom</h5>
                    <span class="idea" id="idea9">Jo, fotky si může upravit sám</span>
                    <div class="button-area boxshadow-red" id="button-area9">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox9">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>Adobe Illustrator</h5>
                    <span class="idea" id="idea10">Vector se občas hodí</span>
                    <div class="button-area boxshadow-red" id="button-area10">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox10">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
                <li>
                    <h5>Anglicky</h5>
                    <span class="idea" id="idea11">Dokumentaci bude rozumět</span>
                    <div class="button-area boxshadow-red" id="button-area11">
                        <div class="main-button">
                            <input type="checkbox" class="checkbox" id="checkbox11">
                            <div class="checkboxtext"></div>
                        </div>
                    </div>
                </li>
            </ul>

            <h4 class="resultbtn">Vyhodnotit</h4>
            <h5 class="result">
                <span class="withoutJS">Je to kluk šikovná! Určitě se vše hodí!</span>
                <span class="resultspan"></span>
            </h5>
            <p id="feedbacktextsecret">Ještě bych Vás chtěl poprosit o zpětnou vazbu na mnou vytvořené
                webové
                stránky a co
                bych se měl případně doučit, abych se uchytil ve světě programátorů. Použijte, prosím, tento <a
                    href="#" id="formularbtnsecret">formulář</a>. Velice děkuji a moc si vážím každého feedbacku.</p>
        </article>
        <?php
                        if($_GET['success'] == 1){
                            echo "<script>
                                (function ($) {
	                                $(document).ready(function () {
                                        $('.cvh1ityped').hide();
                                        $('.cvh2ityped').hide();
                                        $('.cvh3ityped').hide();
                                        $('.cvh4ityped').hide();
                                        $('.itypedsecret').show();
                                        setTimeout(function () {
                                            $('.whyprogrammer').fadeIn(1);
                                            }, 1);
                                        setTimeout(function () {
                                            $('.myknowledge').fadeIn(1);
                                            }, 1);
                                    });
                                })(jQuery);
                                Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Děkuji za Váš feedback! Určitě mi pomůže!',
                                showConfirmButton: false,
                                timer: 2000
                                })
                             </script>";
                        };
                        if($_GET['success'] == -1){
                            echo "<script>
                                $(document).ready(function () {
                                            $('.cvh1ityped').hide();
                                            $('.cvh2ityped').hide();
                                            $('.cvh3ityped').hide();
                                            $('.cvh4ityped').hide();
                                            $('.itypedsecret').show();
                                            setTimeout(function () {
                                                $('.whyprogrammer').fadeIn(1);
                                                }, 1);
                                            setTimeout(function () {
                                                $('.myknowledge').fadeIn(1);
                                                }, 1);
                                        });
                                    })(jQuery);
                                Swal.fire({
                                position: 'center',
                                icon: 'error',
                                title: 'Něco se pokazilo, zkuste to ještě jednou.',
                                showConfirmButton: false,
                                timer: 2000
                                })
                             </script>";
                        };
                    ?>
        <section class="formular">  
            <div class="popwindows" id="feedback">
                <div class="crosswrapper">
                    <span class="cross">&#x2718</span>
                </div>
                <form action="sendEmail.php" method="post" class="feedbackform">

                    <div class="formwrapper">
                        <h2>Děkuji za Váš feedback</h2>
                        <p>
                            <input type="text" name="name" placeholder="Společnost (nemusíte vyplňovat)"
                                class="formrow">
                        </p>
                        <p>
                            <textarea name="message" placeholder="Vaše zpráva" cols="70" rows="15"
                                class="formarea"></textarea>
                        </p>
                        <p>
                            <input type="submit" name="submit" value="Odeslat" onclick="V" class="formsubmit">
                        </p>
                    </div>
                    
                </form>
            </div>
        </section>
    </section>
    <div class="contacts" id="webcontacts">
        <div class="crosswrapper"><span class="cross" id="crossprogram1">&#x2718</span></div>
        <div class="contactswrapper">
            <div class="contactwrapper">
                <a href="tel:+420739715955"><img src="img/telcontact.png" alt=""></a>
                <h3><a href="tel:+420739715955">Tel.: +420 739 715 955</a></h3>
            </div>
            <div class="contactwrapper">
                <a href="mailto:patrik&#064;birula.cz"><img src="img/Email.png" alt=""></a>
                <h3><a href="mailto:patrik&#064;birula.cz">Email: patrik@birula.cz</a></h3>
            </div>
        </div>
        <img src="img/Logo.png" alt="" class="logo">
        <div class="contactswrapper">
            <div class="contactwrapper">
                <a href="https://www.facebook.com/patrik.birula"><img src="img/Facebook.png" alt=""></a>
                <h3><a href="https://www.facebook.com/patrik.birula">www.facebook.com/patrik.birula</a></h3>
            </div>
            <div class="contactwrapper">
                <a href="https://www.instagram.com/patrikbirula"><img src="img/Instagram.png" alt=""></a>
                <h3><a href="https://www.instagram.com/patrikbirula">www.instagram.com/patrikbirula</a></h3>
            </div>
        </div>
    </div>

</body>

</html>