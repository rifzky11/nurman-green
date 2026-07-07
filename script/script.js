function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email); // Returns true or false
}

function kirimPesan() {
  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const pesan = document.getElementById("pesan").value.trim();

  const validasiNama = document.getElementById("validasiNama");
  const validasiEmail = document.getElementById("validasiEmail");
  const validasiPesan = document.getElementById("validasiPesan");
  const status = document.getElementById("status");

  let isValid = true

  if (nama == ""){
    validasiNama.innerHTML = "Kolom tidak boleh kosong!";
    isValid = false
  } else {
    validasiNama.innerHTML = "";
  }

  if (email == ""){
    validasiEmail.innerHTML = "Kolom tidak boleh kosong!";
    isValid = false
  } else if (!validateEmail(email)){
    validasiEmail.innerHTML = "Email tidak valid!";
    isValid = false
  } else {
    validasiEmail.innerHTML = "";
  }

  if (pesan == ""){
    validasiPesan.innerHTML = "Kolom tidak boleh kosong!";
    isValid = false
  } else {
    validasiPesan.innerHTML = "";
  }

  if (!isValid) {
    return
  }

  localStorage.setItem("nama", nama);
  localStorage.setItem("email", email);
  localStorage.setItem("pesan", pesan);

  status.innerHTML = "Pesan berhasil terkirim!";
  setTimeout(() => {
    status.innerHTML = "";
  }, 5000);
}
