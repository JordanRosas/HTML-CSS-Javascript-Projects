// hides the flash message until blog is submitted for preview
$('#flashMessage').hide();
// adding an event listener to the preview button
// when button is clicked it will execute this below function
$('#previewButton').click(function(){
	// saves the value in the title box into the variable title
	const title = $('#blogTitleInput').val();
	// saves the user input in the content box in the value content
	const content = $('#blogContentInput').val();

	// this will print out the values of the blogTitleInput
	// and the blogContentInput to the preview side of the window -- the right side.
	$('#blogTitlePreview').text(title);
	$('#blogContentPreview').text(content);

	// execute the flashMessage animation upon the submission of the form
	$('#flashMessage')
	.slideDown(1000)
	.delay(2000)
	.slideUp();
});

