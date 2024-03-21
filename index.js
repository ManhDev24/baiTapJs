function tinhLuong() {
  var luongMotNgay = +document.getElementById("luongMotNgay").value;
  var soNgay = +document.getElementById("soNgayLam").value;
  var luong = luongMotNgay * soNgay;
  document.getElementById("output").innerHTML = `
  <h2 class='text-center'>
  ${luong}$
  </h2>
  `;
}

function tinhTrungBinh() {
  var soThu1 = +document.getElementById("soThu1").value;
  var soThu2 = +document.getElementById("soThu2").value;
  var soThu3 = +document.getElementById("soThu3").value;
  var soThu4 = +document.getElementById("soThu4").value;
  var soThu5 = +document.getElementById("soThu5").value;

  var average = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("output2").innerHTML = `
  <h2 class='text-center'>
  ${average}
  </h2>
  `;
}

function quyDoiTien() {
  var soTien = +document.getElementById("soTien").value;
  var tiGiaQuyDoi = 23500;
  var soTienQuyDoi = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(soTien * tiGiaQuyDoi);
  document.getElementById("output3").innerHTML = `
      <h2 class='text-center'>
        ${soTienQuyDoi}
      </h2>
    `;
}

function chuViDienTichHCN() {
  var chieuDai = +document.getElementById("chieuDai").value;
  var chieuRong = +document.getElementById("chieuRong").value;

  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("output4").innerHTML = `
      <h2 class='text-center'>
        Diện tích hình chữ nhật: ${dienTich} <br>

        Chu vi hình chữ nhật : ${chuVi}
      </h2>
    `;
}
function tongKySo(){
    var kySo = document.getElementById("kySo").value;
    var sum = 0;
    while(kySo > 0){
        var soTam = kySo % 10;
        kySo = Math.floor(kySo / 10);
        sum+=soTam;
    }
    document.getElementById("output5").innerHTML = `
      <h2 class='text-center'>
        ${sum}
      </h2>
    `;
}