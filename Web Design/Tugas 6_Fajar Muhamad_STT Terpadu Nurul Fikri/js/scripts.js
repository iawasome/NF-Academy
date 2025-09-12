document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".menu-link");
  const mainContent = document.getElementById("main-content");

  // Data halaman
  const pages = {
    home: `
      <h4>Home</h4>
      <p>Ini adalah halaman Home. Selamat datang di website!</p>
    `,
    study: `
      <h4>MyStudy</h4>
      <p>Berisi daftar tabel riwayat pendidikan.</p>
      <table class="table table-bordered">
        <tr><th>Tahun</th><th>Sekolah</th></tr>
        <tr><td>2018</td><td>SMP</td></tr>
        <tr><td>2021</td><td>SMA</td></tr>
        <tr><td>2025</td><td>Kuliah</td></tr>
      </table>
    `,
    gallery: `
      <h4>Gallery</h4>
      <p>Koleksi gambar:</p>
      <div class="row">
        <div class="col-4"><img src="https://via.placeholder.com/150" class="img-fluid"></div>
        <div class="col-4"><img src="https://via.placeholder.com/150" class="img-fluid"></div>
        <div class="col-4"><img src="https://via.placeholder.com/150" class="img-fluid"></div>
      </div>
    `,
    datatable: `
      <h4>Datatable</h4>
      <p>Contoh datatable sederhana:</p>
      <table class="table table-striped">
        <tr><th>ID</th><th>Nama</th><th>Nilai</th></tr>
        <tr><td>1</td><td>Andi</td><td>90</td></tr>
        <tr><td>2</td><td>Budi</td><td>85</td></tr>
        <tr><td>3</td><td>Citra</td><td>88</td></tr>
      </table>
    `,
    login: `
      <h4>Login</h4>
      <form>
        <div class="mb-3">
          <label>Email</label>
          <input type="email" class="form-control">
        </div>
        <div class="mb-3">
          <label>Password</label>
          <input type="password" class="form-control">
        </div>
        <button class="btn btn-primary">Login</button>
      </form>
    `
  };

  // Event listener untuk link
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const page = this.getAttribute("data-page");
      mainContent.innerHTML = pages[page] || "<h4>404</h4><p>Halaman tidak ditemukan.</p>";
    });
  });
});
