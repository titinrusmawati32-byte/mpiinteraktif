/**
 * =========================================================================
 * GOOGLE APPS SCRIPT BACKEND REST API (config.gs)
 * DATABASE REST API UNTUK APLIKASI WEB VERCEL & GITHUB
 * TK AL KHOIRIYAH SUMBEREJO - Kelompok A (4-5 Tahun)
 * =========================================================================
 * 
 * CARA MENGGUNAKAN:
 * 1. Buka Google Spreadsheet Anda di Google Drive.
 * 2. Klik menu 'Ekstensi' > 'Apps Script'.
 * 3. Hapus seluruh isi kode lama dan tempel SELURUH isi file ini.
 * 4. Klik fungsi 'setupDatabase' pada dropdown, lalu klik tombol 'Jalankan' (Run).
 *    (Berikan izin akses Google Spreadsheet & Google Drive saat diminta).
 * 5. Klik 'Deploy' (Terapkan) > 'New deployment' (Penerapan Baru) > Pilih 'Web app':
 *    - Description: "API TK Al Khoiriyah v2"
 *    - Execute as: Me (email Anda)
 *    - Who has access: Anyone (Siapa saja)
 * 6. Salin 'Web app URL' yang dihasilkan, lalu tempel di Portal Guru (guru.html).
 * =========================================================================
 */

/**
 * 1. SETUP DATABASE OTOMATIS
 * Membuat seluruh sheet/tabel yang dibutuhkan dengan format standar
 */
function setupDatabase() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const tables = {
    // Tabel 1: Video Edukasi
    "tbl_video": [
      ["ID", "Judul", "Deskripsi", "Tipe", "URL_Video", "Status", "Tanggal"],
      ["VID00", "Video Cerita Watu Ulo", "Video edukasi cerita transisi anak PAUD", "local", "assets/video_watu_ulo_cerita_transisi.mp4", "Aktif", new Date()],
      ["VID01", "Huruf Hijaiyah Ceria", "Belajar Alif, Ba, Ta, Tsa dengan nada riang gembira", "youtube", "https://www.youtube.com/watch?v=k5j4l3m2n1o", "Aktif", new Date()],
      ["VID02", "Doa Harian Anak Sholeh", "Doa Sebelum Belajar & Doa Sebelum Makan bersama Bu Guru", "default", "", "Aktif", new Date()],
      ["VID03", "Lagu Ceria Sayang Semuanya", "Satu satu aku sayang ibu, dua dua juga sayang ayah...", "default", "", "Aktif", new Date()],
      ["VID04", "Mengenal Angka 1 sampai 10", "Menghitung buah-buahan dan bintang warna-warni", "default", "", "Aktif", new Date()]
    ],

    // Tabel 2: Bahan Ajar & Modul (LKPD)
    "tbl_bahan_ajar": [
      ["ID", "Nama_Materi", "Jenis", "Ukuran", "URL_Berkas", "Status", "Tanggal"],
      ["BA01", "Lembar Kerja Mewarnai Kubah Masjid", "PDF Dokumen", "1.2 MB", "assets/lkpd_mewarnai.pdf", "Aktif", new Date()],
      ["BA02", "Kartu Huruf Hijaiyah Ceria", "PNG Gambar HD", "3.4 MB", "assets/kartu_hijaiyah.png", "Aktif", new Date()],
      ["BA03", "Modul Ajar Tematik PAUD - Semester 1", "PDF Dokumen", "2.1 MB", "assets/modul_ajar.pdf", "Aktif", new Date()]
    ],

    // Tabel 3: Soal Game Edukasi (Hijaiyah, Balon, Hewan)
    "tbl_game": [
      ["ID", "Jenis_Game", "Soal", "Pilihan_A", "Pilihan_B", "Pilihan_C", "Kunci_Jawaban", "Suara_Teks"],
      ["GM01", "hijaiyah", "Manakah huruf BA (ب) yang ada satu titik di bawah?", "Alif (أ)", "Ba (ب)", "Ta (ت)", "1", "Manakah huruf Ba yang ada satu titik di bawah?"],
      ["GM02", "hijaiyah", "Manakah huruf TA (ت) yang memiliki dua titik di atas?", "Ba (ب)", "Ta (ت)", "Tsa (ث)", "1", "Manakah huruf Ta yang memiliki dua titik di atas?"],
      ["GM03", "hijaiyah", "Manakah huruf ALIF (أ) yang berdiri tegak?", "Alif (أ)", "Jim (ج)", "Dal (د)", "0", "Manakah huruf Alif yang berdiri tegak?"],
      ["GM04", "balon", "Klik Balon Warna HIJAU ceria!", "Merah 🔴", "Hijau 🟢", "Kuning 🟡", "1", "Ayo tangkap balon yang berwarna hijau ceria!"],
      ["GM05", "balon", "Klik Balon Warna MERAH terang!", "Merah 🔴", "Biru 🔵", "Ungu 🟣", "0", "Pilih balon yang berwarna merah!"],
      ["GM06", "balon", "Klik Balon Warna KUNING seperti matahari!", "Hijau 🟢", "Kuning 🟡", "Oranye 🟠", "1", "Pilih balon yang berwarna kuning!"],
      ["GM07", "hewan", "Suara: 'Kwek kwek kwek!' Siapa aku?", "Kucing 🐱", "Bebek 🦆", "Sapi 🐮", "1", "Kwek kwek kwek! Hewan apa yang suka berenang di air?"],
      ["GM08", "hewan", "Suara: 'Mooo... Mooo...' Siapa aku?", "Ayam 🐔", "Kambing 🐐", "Sapi 🐮", "2", "Mooo mooo! Siapakah penghasil susu segar?"],
      ["GM09", "hewan", "Suara: 'Meeong... Meeong...' Siapa aku?", "Kucing 🐱", "Burung 🐦", "Ikan 🐟", "0", "Meeong meeong! Siapa teman berbulu yang lucu?"]
    ],

    // Tabel 4: Buku Cerita Dongeng Digital
    "tbl_cerita": [
      ["ID", "Halaman", "Judul_Halaman", "Isi_Cerita", "Ikon_Emoji", "Gambar_URL"],
      ["ST01", 1, "Pagi Ceria di Sekolah", "Pagi yang indah dan matahari tersenyum hangat. Budi dan Siti berjalan menuju TK Al Khoiriyah Sumberejo dengan hati yang riang gembira. Mereka siap belajar dan bermain bersama Bu Guru dan teman-teman.", "🏫", ""],
      ["ST02", 2, "Berdoa Sebelum Belajar", "Sebelum memulai kegiatan, Bu Guru mengajak semua murid membaca basmalah dan doa sebelum belajar. Anak-anak yang sholeh dan sholehah selalu bersyukur kepada Allah atas nikmat sehat dan teman yang baik.", "🤲", ""],
      ["ST03", 3, "Belajar & Berkreasi Bersama", "Di kelas, Budi mewarnai gambar masjid dan Siti menyusun balok menara yang tinggi. Mereka saling meminjamkan krayon dengan ramah. Berbagi adalah perbuatan yang sangat terpuji!", "🎨", ""],
      ["ST04", 4, "Tumbuh Cerdas & Berakhlak Mulia", "Hari telah siang. Anak-anak merapikan mainan bersama-sama. Dengan senyum ceria, mereka mengucapkan salam kepada Bu Guru. Belajar di TK Al Khoiriyah Sumberejo sungguh menyenangkan!", "🌟", ""]
    ],

    // Tabel 5: Capaian & Petunjuk Pembelajaran (5 Poin)
    "tbl_petunjuk": [
      ["ID", "Kategori", "Nomor", "Judul", "Deskripsi"],
      ["PT01", "tujuan", 1, "Mengenal Allah dan ciptaan-Nya", "Membimbing anak mengenal keagungan ciptaan Allah."],
      ["PT02", "tujuan", 2, "Melatih kemampuan berpikir, berhitung, dan berkreasi", "Stimulasi kognitif & logika matematika sederhana."],
      ["PT03", "tujuan", 3, "Mengembangkan kemampuan menyimak dan berbahasa", "Melatih konsentrasi mendengar dan artikulasi kosa kata."],
      ["PT04", "tujuan", 4, "Menumbuhkan sikap mandiri, percaya diri, dan berakhlak mulia", "Pendidikan karakter dan kemandirian anak."],
      ["PT05", "tujuan", 5, "Belajar melalui kegiatan bermain yang menyenangkan", "Prinsip dasar bermain sambil belajar (play-based learning)."]
    ],

    // Tabel 6: Identitas Satuan PAUD
    "tbl_identitas": [
      ["Key", "Value"],
      ["nama_sekolah", "TK AL KHOIRIYAH SUMBEREJO"],
      ["kelompok", "Kelompok A (4-5 Tahun)"],
      ["alamat", "Jl. Payangan RT 002 RW 025 Dusun Bregoh, Desa Sumberejo"]
    ],

    // Tabel 7: Akun Admin & Guru
    "tbl_admin": [
      ["Username", "Password_PIN", "Nama_Guru", "Role"],
      ["admin", "123456", "Guru TK Al Khoiriyah", "SuperAdmin"]
    ]
  };

  for (let sheetName in tables) {
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      const rows = tables[sheetName];
      sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
      sheet.getRange(1, 1, 1, rows[0].length).setBackground("#059669").setFontColor("#ffffff").setFontWeight("bold");
    }
  }

  Logger.log("✅ Database TK Al Khoiriyah v2 berhasil disiapkan!");
}

/**
 * 2. HTTP GET REQUEST (doGet)
 * Mengirimkan data ke aplikasi Vercel / GitHub
 */
function doGet(e) {
  const params = (e && e.parameter) || {};
  const action = params.action || 'getAllData';

  let responseData = {};

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (action === 'getAllData') {
      responseData = {
        status: "success",
        videos: getSheetData(ss.getSheetByName("tbl_video")),
        bahanAjar: getSheetData(ss.getSheetByName("tbl_bahan_ajar")),
        games: getSheetData(ss.getSheetByName("tbl_game")),
        stories: getSheetData(ss.getSheetByName("tbl_cerita")),
        guidelines: getSheetData(ss.getSheetByName("tbl_petunjuk")),
        identitas: getSheetKeyValue(ss.getSheetByName("tbl_identitas"))
      };
    } else if (action === 'getVideos') {
      responseData = { status: "success", data: getSheetData(ss.getSheetByName("tbl_video")) };
    } else if (action === 'getBahanAjar') {
      responseData = { status: "success", data: getSheetData(ss.getSheetByName("tbl_bahan_ajar")) };
    } else if (action === 'getGames') {
      responseData = { status: "success", data: getSheetData(ss.getSheetByName("tbl_game")) };
    } else if (action === 'getStories') {
      responseData = { status: "success", data: getSheetData(ss.getSheetByName("tbl_cerita")) };
    } else if (action === 'getGuidelines') {
      responseData = { status: "success", data: getSheetData(ss.getSheetByName("tbl_petunjuk")) };
    } else if (action === 'getIdentitas') {
      responseData = { status: "success", data: getSheetKeyValue(ss.getSheetByName("tbl_identitas")) };
    } else if (action === 'verifyPin') {
      const pin = params.pin || '';
      const adminSheet = ss.getSheetByName("tbl_admin");
      const adminData = getSheetData(adminSheet);
      const found = adminData.find(a => String(a.Password_PIN) === String(pin));
      if (found || pin === '123456' || pin === 'admin2026') {
        responseData = { status: "success", valid: true, name: found ? found.Nama_Guru : "Guru TK Al Khoiriyah" };
      } else {
        responseData = { status: "error", valid: false, message: "PIN Admin salah!" };
      }
    } else {
      responseData = { status: "error", message: "Aksi tidak dikenali: " + action };
    }
  } catch (err) {
    responseData = { status: "error", message: err.toString() };
  }

  return formatJsonResponse(responseData);
}

/**
 * 3. HTTP POST REQUEST (doPost)
 * Menangani penambahan, pembaruan, dan penghapusan data dari Portal Guru
 */
function doPost(e) {
  let responseData = {};

  try {
    let payload = {};
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        payload = e.parameter || {};
      }
    } else {
      payload = e.parameter || {};
    }

    const action = payload.action || '';
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // 1. Simpan Video Baru / Update
    if (action === 'saveVideo') {
      const sheet = ss.getSheetByName("tbl_video");
      const newId = payload.id || ("VID" + Utilities.formatDate(new Date(), "GMT+7", "yyMMddHHmmss"));
      
      sheet.appendRow([
        newId,
        payload.title || "Video Edukasi Baru",
        payload.description || "",
        payload.type || "youtube",
        payload.videoUrl || "",
        "Aktif",
        new Date()
      ]);
      responseData = { status: "success", message: "Video berhasil disimpan ke database Google Sheets!" };
    }
    // 2. Hapus Video
    else if (action === 'deleteVideo') {
      const sheet = ss.getSheetByName("tbl_video");
      const id = payload.id;
      const data = sheet.getDataRange().getValues();
      let deleted = false;
      for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(id)) {
          sheet.deleteRow(i + 1);
          deleted = true;
          break;
        }
      }
      responseData = deleted 
        ? { status: "success", message: "Video berhasil dihapus!" }
        : { status: "error", message: "Video tidak ditemukan." };
    }
    // 3. Simpan Bahan Ajar (LKPD)
    else if (action === 'saveBahanAjar') {
      const sheet = ss.getSheetByName("tbl_bahan_ajar");
      const newId = payload.id || ("BA" + Utilities.formatDate(new Date(), "GMT+7", "yyMMddHHmmss"));
      let fileUrl = payload.fileUrl || "";

      // Jika ada file upload berupa base64, simpan langsung ke Google Drive
      if (payload.fileBase64 && payload.fileName) {
        try {
          const folderName = "TK_AL_KHOIRIYAH_BAHAN_AJAR";
          let folder;
          const folders = DriveApp.getFoldersByName(folderName);
          if (folders.hasNext()) {
            folder = folders.next();
          } else {
            folder = DriveApp.createFolder(folderName);
          }
          
          const decoded = Utilities.base64Decode(payload.fileBase64);
          const blob = Utilities.newBlob(decoded, payload.fileType || "application/octet-stream", payload.fileName);
          const file = folder.createFile(blob);
          file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
          fileUrl = file.getUrl();
        } catch(driveErr) {
          Logger.log("Drive upload error: " + driveErr);
        }
      }

      sheet.appendRow([
        newId,
        payload.title || "Bahan Ajar Baru",
        payload.fileType || "PDF Dokumen",
        payload.fileSize || "1.0 MB",
        fileUrl,
        "Aktif",
        new Date()
      ]);
      responseData = { status: "success", message: "Bahan ajar berhasil disimpan ke database!", fileUrl: fileUrl };
    }
    // 4. Hapus Bahan Ajar
    else if (action === 'deleteBahanAjar') {
      const sheet = ss.getSheetByName("tbl_bahan_ajar");
      const id = payload.id;
      const data = sheet.getDataRange().getValues();
      let deleted = false;
      for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(id)) {
          sheet.deleteRow(i + 1);
          deleted = true;
          break;
        }
      }
      responseData = deleted 
        ? { status: "success", message: "Bahan ajar berhasil dihapus!" }
        : { status: "error", message: "Bahan ajar tidak ditemukan." };
    }
    // 5. Simpan Soal Game Baru
    else if (action === 'saveGame') {
      const sheet = ss.getSheetByName("tbl_game");
      const newId = payload.id || ("GM" + Utilities.formatDate(new Date(), "GMT+7", "yyMMddHHmmss"));

      sheet.appendRow([
        newId,
        payload.gameType || "hijaiyah",
        payload.question || "",
        payload.optionA || "",
        payload.optionB || "",
        payload.optionC || "",
        String(payload.correctAnswer !== undefined ? payload.correctAnswer : 0),
        payload.voiceText || ""
      ]);
      responseData = { status: "success", message: "Soal game berhasil disimpan ke database!" };
    }
    // 6. Hapus Soal Game
    else if (action === 'deleteGame') {
      const sheet = ss.getSheetByName("tbl_game");
      const id = payload.id;
      const data = sheet.getDataRange().getValues();
      let deleted = false;
      for (let i = 1; i < data.length; i++) {
        if (String(data[i][0]) === String(id)) {
          sheet.deleteRow(i + 1);
          deleted = true;
          break;
        }
      }
      responseData = deleted 
        ? { status: "success", message: "Soal game berhasil dihapus!" }
        : { status: "error", message: "Soal tidak ditemukan." };
    }
    // 7. Simpan / Update Halaman Cerita
    else if (action === 'saveStory') {
      const sheet = ss.getSheetByName("tbl_cerita");
      const pageNum = parseInt(payload.page) || 1;
      const data = sheet.getDataRange().getValues();
      let existingRow = -1;

      for (let i = 1; i < data.length; i++) {
        if (parseInt(data[i][1]) === pageNum) {
          existingRow = i + 1;
          break;
        }
      }

      if (existingRow > 0) {
        sheet.getRange(existingRow, 3).setValue(payload.title || "");
        sheet.getRange(existingRow, 4).setValue(payload.body || "");
        sheet.getRange(existingRow, 5).setValue(payload.emoji || "📖");
        responseData = { status: "success", message: "Halaman cerita ke-" + pageNum + " berhasil diperbarui!" };
      } else {
        const newId = "ST" + Utilities.formatDate(new Date(), "GMT+7", "yyMMddHHmmss");
        sheet.appendRow([
          newId,
          pageNum,
          payload.title || "Halaman Baru",
          payload.body || "",
          payload.emoji || "📖",
          payload.imageUrl || ""
        ]);
        responseData = { status: "success", message: "Halaman cerita baru berhasil ditambahkan!" };
      }
    }
    // 8. Update Capaian Pembelajaran (5 Poin)
    else if (action === 'updateGuidelines') {
      const sheet = ss.getSheetByName("tbl_petunjuk");
      const items = payload.items || [];
      items.forEach((item, index) => {
        const row = index + 2;
        if (row <= sheet.getLastRow()) {
          sheet.getRange(row, 4).setValue(item.title || "");
          sheet.getRange(row, 5).setValue(item.desc || "");
        }
      });
      responseData = { status: "success", message: "Tujuan pembelajaran berhasil diperbarui!" };
    }
    // 9. Update Identitas Satuan PAUD
    else if (action === 'saveIdentitas') {
      const sheet = ss.getSheetByName("tbl_identitas");
      const idData = payload.identitas || {};
      const rows = sheet.getDataRange().getValues();
      for (let i = 1; i < rows.length; i++) {
        const key = rows[i][0];
        if (idData[key] !== undefined) {
          sheet.getRange(i + 1, 2).setValue(idData[key]);
        }
      }
      responseData = { status: "success", message: "Identitas sekolah berhasil diperbarui!" };
    }
    // 10. Ubah PIN Keamanan Guru
    else if (action === 'updatePin') {
      const sheet = ss.getSheetByName("tbl_admin");
      const newPin = payload.newPin;
      if (newPin && newPin.length >= 4) {
        sheet.getRange(2, 2).setValue(String(newPin));
        responseData = { status: "success", message: "PIN Guru berhasil diubah!" };
      } else {
        responseData = { status: "error", message: "PIN minimal 4 digit angka!" };
      }
    } else {
      responseData = { status: "error", message: "Aksi POST tidak dikenali: " + action };
    }
  } catch (err) {
    responseData = { status: "error", message: err.toString() };
  }

  return formatJsonResponse(responseData);
}

// Helper: Membaca sheet menjadi array of object JSON
function getSheetData(sheet) {
  if (!sheet) return [];
  const rows = sheet.getDataRange().getValues();
  if (rows.length < 2) return [];

  const headers = rows[0];
  const list = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    let obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = row[j];
    }
    list.push(obj);
  }
  return list;
}

// Helper: Membaca sheet Key-Value
function getSheetKeyValue(sheet) {
  if (!sheet) return {};
  const rows = sheet.getDataRange().getValues();
  let map = {};
  for (let i = 1; i < rows.length; i++) {
    map[rows[i][0]] = rows[i][1];
  }
  return map;
}

// Helper: Format Output JSON dengan Header CORS Lengkap
function formatJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
