$(document).ready(function(){
	$.getJSON("team.json", function(data) {
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#team").append(
					"<h4>" + value.name + "</h4>" +
					"<h3>" + value.title +"</h3>" + 
                    "<h3>" + value.tag_line + "</h3>" +
                    "<h3>" + value.Personal_contact + "</h3>" +
                    "<h3>" + value.numb + "</h3>"
				);
			});
		}); 
	});
});