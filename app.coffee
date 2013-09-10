$("document").ready ->
    $(".nav.a").click (e) ->
        console.log e.target.hash
        window.scrollTo 0,  $(e.target.hash).offset().top
        #e.preventDefault()
        $(this).tab 'show'

