import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  formData = {
    nama: '',
    nik: '',
    alamat: '',
    agama: '',
    pekerjaan: '',
    tempat_tanggal_lahir: '',
    golongan_darah: '',
    status_perkawinan: '',
  };

  constructor() {}

  submitForm() {
    // Handle form submission logic here
  }

  submitToWhatsApp() {
    const phoneNumber = '+6289604325305'; // Replace with your desired phone number
    const message =
      `Nama: ${this.formData.nama}\n` +
      `NIK: ${this.formData.nik}\n` +
      `Alamat: ${this.formData.alamat}\n` +
      `Agama: ${this.formData.agama}\n` +
      `Pekerjaan: ${this.formData.pekerjaan}\n` +
      `Tempat/Tanggal Lahir: ${this.formData.tempat_tanggal_lahir}\n` +
      `Golongan Darah: ${this.formData.golongan_darah}\n` +
      `Status Perkawinan: ${this.formData.status_perkawinan}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }

  submitTotelegram() {
    const phoneNumber = '+6281211719875'; // Replace with your desired phone number
    const message =
      `Nama: ${this.formData.nama}\n` +
      `NIK: ${this.formData.nik}\n` +
      `Alamat: ${this.formData.alamat}\n` +
      `Agama: ${this.formData.agama}\n` +
      `Pekerjaan: ${this.formData.pekerjaan}\n` +
      `Tempat/Tanggal Lahir: ${this.formData.tempat_tanggal_lahir}\n` +
      `Golongan Darah: ${this.formData.golongan_darah}\n` +
      `Status Perkawinan: ${this.formData.status_perkawinan}`;

    const encodedMessage = encodeURIComponent(message);
    const telegramUrl = `https://web.telegram.org/a/=&text=${encodedMessage}`;
  }
}
