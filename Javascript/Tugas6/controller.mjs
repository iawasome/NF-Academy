import users from "./data.mjs";

// tampilkan data
const index = () => {
  console.log("=== Daftar Artis Hollywood ===");
  users.map((user, i) => {
    console.log(`${i+1}. ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}, Email: ${user.email}`);
  });
};

// tambah data
const store = (user) => {
  users.push(user);
  console.log(`Artis ${user.nama} berhasil ditambahkan!`);
};

// hapus data berdasarkan index
const destroy = (i) => {
  if (i >= 0 && i < users.length) {
    let removed = users.splice(i, 1);
    console.log(`Artis ${removed[0].nama} berhasil dihapus!`);
  } else {
    console.log("Index tidak valid!");
  }
};

export { index, store, destroy };
