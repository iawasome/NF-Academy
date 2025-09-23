// Class Kendaraan (sebagai parent class)
class Kendaraan {
  constructor(nama, tipe) {
    this.nama = nama;
    this.tipe = tipe;
  }

  infoKendaraan() {
    return `${this.nama} (${this.tipe})`;
  }
}

// Class turunan kendaraan
class Mobil extends Kendaraan {
  constructor(nama, kapasitas) {
    super(nama, "Mobil");
    this.kapasitas = kapasitas;
  }
}

class Motor extends Kendaraan {
  constructor(nama, kapasitas) {
    super(nama, "Motor");
    this.kapasitas = kapasitas;
  }
}

// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = null;
  }

  sewaKendaraan(kendaraan) {
    this.kendaraanDisewa = kendaraan;
    console.log(`${this.nama} telah menyewa ${kendaraan.infoKendaraan()}`);
  }

  infoPelanggan() {
    if (this.kendaraanDisewa) {
      return `${this.nama} (${this.nomorTelepon}) menyewa ${this.kendaraanDisewa.infoKendaraan()}`;
    } else {
      return `${this.nama} (${this.nomorTelepon}) belum menyewa kendaraan.`;
    }
  }
}

// Sistem Manajemen Transportasi
class SistemTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  tampilkanPelanggan() {
    console.log("=== Daftar Pelanggan Penyewa Kendaraan ===");
    this.daftarPelanggan.forEach((pelanggan, index) => {
      console.log(`${index + 1}. ${pelanggan.infoPelanggan()}`);
    });
  }
}

// ======= Contoh Penggunaan =======

// Buat kendaraan
const mobil1 = new Mobil("Toyota Supra", 7);
const motor1 = new Motor("Honda CBR 150R", 2);

// Buat pelanggan
const pelanggan1 = new Pelanggan("Fajar", "081319941507");
const pelanggan2 = new Pelanggan("Reyvo", "081319941504");

// Buat sistem transportasi
const sistem = new SistemTransportasi();

// Tambah pelanggan ke sistem
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Pelanggan sewa kendaraan
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);

// Tampilkan daftar pelanggan penyewa kendaraan
sistem.tampilkanPelanggan();
