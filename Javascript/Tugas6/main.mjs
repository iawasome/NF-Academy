import { index, store, destroy } from "./controller.mjs";

const main = () => {
  // tampilkan data awal
  index();

  // tambah 2 artis baru
  store({ nama: "Chris Hemsworth", umur: 41, alamat: "Jl. Hollywood 11", email: "hemsworth@mail.com" });
  store({ nama: "Natalie Portman", umur: 43, alamat: "Jl. Hollywood 12", email: "natalie@mail.com" });

  // tampilkan data setelah tambah
  index();

  // hapus data ke-2 (index 1 -> Scarlett Johansson)
  destroy(1);

  // tampilkan data setelah hapus
  index();
};

main();
