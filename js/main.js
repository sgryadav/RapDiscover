
$(document).ready(function(){

	$("#search").keyup(function(){

		var entry = $(this).val();

		$(".list img").each(function(){

			if($(this).attr("alt").search(new RegExp(entry, "i")) < 0){
				$(this).fadeOut();
			}

			else{
				$(this).fadeIn();
			}
			});
		});
	});



