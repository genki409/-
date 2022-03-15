$('#image').on('change', function(){
	var $fr = new FileReader();
	$fr.onload = function(){
		$('#preview').attr('src', $fr.result);
	}
	$fr.readAsDataURL(this.files[0]);
});