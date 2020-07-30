// Trùng tên với index.html mục đích là điều hướng.
// lỗi trên index.html thì sẽ đi tới index.js để quản lý

// Tạo đối tượng service tương tác với backend
var svService = new SinhVienService();

var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();

  promise
    .then(function (res) {
      // tạo <tr> table</tr>
      console.log(res.data);

      var contentTable = "";
      for (var index = 0; index < res.data.length; index++) {
        // mỗi lần duyệt lấy ra 1 đối tướng sinh viên
        var sinhVien = res.data[index];

        // từ đối tượng sinh ra thẻ tr trên index.html
        contentTable += `
      <tr>
      <td>${sinhVien.MaSV}</td>      
      <td>${sinhVien.HoTen}</td>      
      <td>${sinhVien.Email}</td>      
      <td>${sinhVien.SoDT}</td>      
      <td>${sinhVien.CMND}</td>      
      <td>${sinhVien.DiemToan}</td>      
      <td>${sinhVien.DiemLy}</td>      
      <td>${sinhVien.DiemHoa}</td>      
      
      </tr>
      
      `;
      }

      document.getElementById("tblSinhVien").innerHTML = contentTable;
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
};

var deleteSV = function (idSinhVien) {
  console.log("Xoá Sinh viên" + idSinhVien);
};
renderSinhVien();

// Thêm Sinh Viên
<<<<<<< HEAD
=======
<<<<<<< HEAD
var themSinhVien = function(){
  console.log('Thêm Sinh Viên');
}

=======
<<<<<<< HEAD
>>>>>>> 14ef47d5ba04792783008cc9df8443dc84b5e743
>>>>>>> bbe8888982489b77c5b06879cea9409b9ab64c41

var capNhatSV = function(idSinhVien){
  console.log('Cập nhật sinh viên' + idSinhVien);
}
