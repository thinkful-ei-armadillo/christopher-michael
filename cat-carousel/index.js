function bigCat(){
    $('.thumbnail').click(function(event) {
        const heroSrc = $(this).find('img').attr('src');
        const heroAlt = $(this).find('img').attr('alt');
        $('.hero img').attr('src', heroSrc).attr('alt', heroAlt);
    });
}

$(bigCat);
