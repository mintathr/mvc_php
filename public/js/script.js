$(function() {
	$('.tombolTambahData').on('click', function() {
		$('#formModallabel').html('Tambah Data Mahasiswa');
		$('.modal-footer button[type=submit]').html('Tambah Data'); //css selector
		/*$('#nama').val('');
		$('#nrp').val('');
		$('#email').val('');
		$('#jurusan').val('');
		$('#id').val('');*/
		$('.modal-body form')[0].reset();
		
	});

	$('.tampilModalUbah').on('click', function() {
		$('#formModallabel').html('Ubah Data Mahasiswa');
		$('.modal-footer button[type=submit]').html('Ubah Data'); //css selector
		$('.modal-body form').attr('action', 'http://localhost:8081/mvc_php/public/mahasiswa/ubah');
		const id = $(this).data('id');

		$.ajax({
			url: 'http://localhost:8081/mvc_php/public/mahasiswa/getubah',
			data: {id : id},
			method: 'post',
			dataType: 'json',
			success: function(data) {
				$('#nama').val(data.nama);
				$('#nrp').val(data.nrp);
				$('#email').val(data.email);
				$('#jurusan').val(data.jurusan);
				$('#id').val(data.id);
			}
		});
		//console.log(id);
	});
});