$(document).ready(function(){
    $('.switch__checkbox').click(() => {
        if($('.switch__checkbox').is(":checked") == true){
            $('.price').removeClass('year')
        } else{
            $('.price').addClass('year')
        }
    })
})