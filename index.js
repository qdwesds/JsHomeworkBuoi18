const arrNumbers = [];
document.querySelector("#btnThemSo").onclick = function () {
  var themSo = document.getElementById("SoN").value * 1;
  arrNumbers.push(themSo);
  document.getElementById("xuatSoN").innerHTML = arrNumbers;
};

// Tính tổng số dương
function tongSoDuong() {
  var sum = 0;
  var length = arrNumbers.length;
  for (var i = 0; i < length; i++) {
    var number = arrNumbers[i];
    sum += number;
  }
  document.getElementById(
    "xuatTongSoDuong"
  ).innerHTML = `Tổng số dương: ${sum}`;
}
document.getElementById("tongSoDuong").onclick = tongSoDuong;

// Đếm số dương
function demSoDuong() {
  var count = 0;
  var length = arrNumbers.length;
  for (var i = 0; i < length; i++) {
    count++;
  }
  document.getElementById("xuatDemSoDuong").innerHTML = `Số dương: ${count}`;
}
document.getElementById("demSoDuong").onclick = demSoDuong;

// Tìm số nhỏ nhất
function soNhoNhat() {
  var min = arrNumbers[0];
  var length = arrNumbers.length;
  for (var i = 1; i < length; i++) {
    var number = arrNumbers[i];
    if (number < min) {
      min = number;
    }
  }
  document.getElementById("xuatSoNhoNhat").innerHTML = `${min}`;
}
document.getElementById("soNhoNhat").onclick = soNhoNhat;

// Tìm số dương nhỏ nhất
function soDuongNhoNhat() {
  var length = arrNumbers.length;
  var min = Infinity;
  for (var i = 0; i < length; i++) {
    var number = arrNumbers[i];
    if (number > 0 && number < min) {
      min = number;
      document.getElementById(
        "xuatSoDuongNhoNhat"
      ).innerHTML = `Số dương nhỏ nhất: ${min}`;
    } else {
      document.getElementById("xuatSoDuongNhoNhat").innerHTML =
        "Không có số dương trong mảng";
    }
  }
}
document.getElementById("soDuongNhoNhat").onclick = soDuongNhoNhat;

// Tìm số chẵn cuối cùng
function soChanCuoiCung(lastEven) {
  var length = arrNumbers.length;
  var lastEven = -1;
  for (var i = 0; i < length; i++) {
    var number = arrNumbers[i];
    if (number % 2 == 0 && number > lastEven) {
      lastEven = number;
    }
  }
  return lastEven;
}
document.getElementById("soChanCuoiCung").onclick = function () {
  var evenNumber = soChanCuoiCung();
  document.getElementById(
    "xuatSoChanCuoiCung"
  ).innerHTML = `Số chẵn cuối cùng: ${evenNumber}`;
};

// Đổi chỗ 2 số
function doiCho(array, index1, index2) {
  var index1 = document.getElementById("viTri1").value * 1;
  var index2 = document.getElementById("viTri2").value * 1;
  var array = arrNumbers;
  var giaTri = arrNumbers[index1];
  arrNumbers[index1] = arrNumbers[index2];
  arrNumbers[index2] = giaTri;
  document.getElementById(
    "xuatDoiCho"
  ).innerHTML = `Mảng sau khi đổi: ${array}`;
}
document.getElementById("doiCho").onclick = doiCho;

// Sắp xếp tăng dần
function sapXepTangDan() {
  var arrSort = arrNumbers.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "xuatKQSapXep"
  ).innerHTML = `Mảng sau khi sắp xếp: ${arrSort}`;
}
document.getElementById("sapXep").onclick = sapXepTangDan;

// Tìm số nguyên tố đầu tiên
var length = arrNumbers.length;
function findFirstPrime() {
  var arr = arrNumbers;
  for (var i = 0; i <= length; i++) {
    if (arr[i] === 2) {
      return arr[i];
    }
    for (var j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        break;
      }
      if (j === arr[i] - 1) {
        return arr[i];
      }
    }
  }
  return -1;
}

document.getElementById("soNguyenTo").onclick = function () {
  var firstPrime = findFirstPrime();
  document.getElementById("xuatSoNguyenTo").innerHTML = `${firstPrime}`;
};

// Đếm số nguyên
var arrNumber = [];
document.querySelector("#btnThemSoN").onclick = function () {
  var addNumbers = document.getElementById("nhapSo").value * 1;
  arrNumber.push(addNumbers);
  document.getElementById("xuatSo").innerHTML = arrNumber;
};

function demSoNguyen() {
  var arrLength = arrNumber.length;
  var count = 0;
  for (var i = 0; i < arrLength; i++) {
    var number = arrNumber[i];
    if (Number.isInteger(number)) {
      count++;
    }
  }
  document.getElementById("tongSoNguyen").innerHTML = `Số nguyên: ${count}`;
}
document.getElementById("demSoNguyen").onclick = demSoNguyen;

// So sánh số lượng số âm và dương
function soSanhSoLuong() {
  var length = arrNumbers.length;
  var countPositive = 0;
  var countNegative = 0;
  for (i = 0; i < length; i++) {
    var num = arrNumbers[i];
    if (num > 0) {
      countPositive++;
    } else if (num < 0) {
      countNegative++;
    }
  }
  if (countPositive > countNegative) {
    document.getElementById("xuatKQSoSanh").innerHTML = `Số dương > Số âm`;
  } else if (countPositive < countNegative) {
    document.getElementById("xuatKQSoSanh").innerHTML = `Số dương < Số âm`;
  } else {
    document.getElementById("xuatKQSoSanh").innerHTML = `Số dương = Số âm`;
  }
}
document.getElementById("btnSoSanh").onclick = soSanhSoLuong;
