//JQuery
(function ($) {
    $(document).ready(function () {

        console.log('Im ready!')
        //Nastavení překliku obsahu

        $('.navigation a').on('click', function (event) {
            event.preventDefault();

            var href = $(this).attr('href');
            var content = $('.content');
            $.ajax({
                url: href,
                type: 'GET',
                dataType: 'html'
            }).done(function (data) {
                var newContent = $(data).find('.changecontent');

                content.html(newContent);
                newContent.addClass("fadeInLeft");
                //Nastavení formuláře bez reloadu
                $('#exampleform').on("submit", function (event) {
                    event.preventDefault()

                    $.ajax({
                        type: "POST",
                        url: "process.php",
                        data: $("#exampleform").serialize(),
                        success: function (data) {
                            Swal.fire({
                                position: 'center',
                                title: (data),
                                text: 'jsi prostě jednička!',
                                showConfirmButton: true,
                            })
                        }
                    })

                })

                //Nastavení galerie bez reloadu

                $('.gallerymenu a').on('click', function (event) {
                    event.preventDefault();

                    var href = $(this).attr('href');
                    var gallery = $('.gallery');

                    $.ajax({
                        url: href,
                        type: 'GET',
                        dataType: 'html'
                    }).done(function (data) {
                        var newGallery = $(data).find('.gallery-set');

                        gallery.html(newGallery);
                    });

                })


                //Nastavení našeptávače
                $.ajaxSetup({ cache: false });
                $('#search').keyup(function () {
                    $('#result').html('');
                    $('#state').val('');
                    var searchField = $('#search').val();
                    var expression = new RegExp(searchField, "i");
                    $.getJSON('data.json', function (data) {
                        $.each(data, function (key, value) {
                            if (value.name.search(expression) != -1 || value.location.search(expression) != -1) {
                                $('#result').append('<li class="list-group-item link-class"><img src="' + value.image + '" height="80" width="80" class="img-thumbnail" />' + value.name + ' | <span class="text-muted">' + value.age + '</span> | <span class="text-muted">' + value.location + '</span></li>');
                            }
                        });
                    });
                });

                $('#result').on('click', 'li', function () {
                    var click_text = $(this).text().split('|');
                    $('#search').val($.trim(click_text[0]));
                    $("#result").html('');
                });
            });

        })


    });
})(jQuery);
