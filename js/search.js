$(document).ready(function(){

	$('#search').keyup($.debounce(1000, (function(){
		var searchField = $('#search').val();
		var myExp = new RegExp(searchField, "i");
		var space = '  ';
		var noResult = true;
			
		//if user hasn't entered a long enough search string, add invalid class to input
		if ($('#search').val().length == 1 || $('#search').val() == ' ' || $('#search').val() == space){
			console.log('less than 2');
			$('#search').addClass('invalid');
		} else {
			$('#search').removeClass('invalid');
		}
		//check if search field is empty or not, if not empty execute the ajax call
		if ($('#search').val().length > 1  && $('#search').val() != space){
			//$('#search').removeClass('invalid');	
			$.ajax({
				type: 'GET',
				cache: true,
				url: 'tmp/results.json',
				dataType: 'json',
				beforeSend: function(){
					$('#update').empty().append('<img src=\"img/ajax-loader.gif\" />');
				},
				success: function (data){

						$('#update').empty();
						var output = '<ul class="searchresults">';
						$.each(data, function(key, val){

						if ((val.name.search(myExp) != -1) || (val.city.search(myExp) != -1) || (val.state.search(myExp)!= -1) || (val.zip.search(myExp) != -1)) {
						noResult = false;
						output += '<li class="clearfix">';
						output += '<div>';
						output += '<h3>'+val.name+'</h3>';
						output += '<h5>'+val.street_address+'<br />'+val.city+', '+val.state+' '+val.zip+'<br />'+val.phone_number+'</h5>';
						output += '</div>';
						output += '</li>';
						}
						});
						// if no search results are found display an error
						if(noResult == true){
							output += '<li><p class="error">Sorry, that search didn\'t find anything!</p></li>';						
						}
						output += '</ul>';
						//animate the results
						$('#update').hide().html(output).animate({
							height: "toggle", opacity: "toggle"} , "fast");
						},
				error: function(data){
				alert('Uh-oh! Something is wrong! That search isn\'t going to work. Please try again later.');
				}
			});// end ajax	
		} // end if 
	}))); //end search



	$(function () {
	  $("#fixed-bar")
	    .css({position:'fixed',bottom:'0px'})
	    .hide();
	  $(window).scroll(function () {
	    if ($(this).scrollTop() > 400) {
	      $('#fixed-bar').fadeIn(200);
	    } else {
	      $('#fixed-bar').fadeOut(200);
	    }
	  });
	  $('.go-top').click(function () {
	    $('html,body').animate({
	      scrollTop: 0
	    }, 1000);
	    return false;
	  });
	});
});

