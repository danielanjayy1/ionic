import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { StorageService } from '../services/storage.service';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  formData = {
    nik: '',
    nama: '',
    tempat_lahir: '',
    tanggal_lahir: '',
    gender: '',
    alamat: '',
    agama: '',
    status: '',
    pekerjaan: '',
    warga_negara: '',
    berlaku: '',
  };
  constructor(
    private Toast: ToastController,
    private storage: StorageService,
    private location: LocationService
  ) {}

  submitToWhatsApp() {
    const phoneNumber = '+6289604325305'; // Replace with your desired phone number
    const message =
      `NIK: ${this.formData.nik}\n` +
      `Nama: ${this.formData.nama}\n` +
      `Tempat Lahir: ${this.formData.tempat_lahir}\n` +
      `Tanggal Lahir: ${this.formData.tanggal_lahir}\n` +
      `gender: ${this.formData.gender}\n` +
      `alamat: ${this.formData.alamat}\n` +
      `Agama: ${this.formData.agama}\n` +
      `Status Kawin: ${this.formData.status}` +
      `Pekerjaan: ${this.formData.pekerjaan}\n` +
      `Warga Negara: ${this.formData.warga_negara}\n` +
      `Belaku Hingga: ${this.formData.berlaku}\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_system');
  }
}
