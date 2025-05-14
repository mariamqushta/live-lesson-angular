import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent {

  schools = ['School A', 'School B', 'School C'];
  academicYears = ['2022/2023', '2023/2024', '2024/2025'];
  semesters = ['Semester 1', 'Semester 2', 'Semester 3'];
  months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'
  ];
  classrooms = ['Room 1', 'Room 2', 'Room 3'];
  students = ['Student 1', 'Student 2', 'Student 3'];


  dataList: any[] = [];

  newData = {
    selectedSchool: '',
    selectedAcademicYear: '',
    selectedSemester: '',
    selectedMonth: '',
    selectedClassroom: '',
    selectedStudent: ''
  };
  selectedData: any = null;
  addData() {
    if (
      this.newData.selectedSchool &&
      this.newData.selectedAcademicYear &&
      this.newData.selectedSemester &&
      this.newData.selectedMonth &&
      this.newData.selectedClassroom &&
      this.newData.selectedStudent
    ) {
      const submitted = { ...this.newData };
      this.dataList.push(submitted);
      this.selectedData = submitted; 
      this.resetForm();
    } else {
      alert('Please fill all fields');
    }
  }
  

  resetForm() {
    this.newData = {
      selectedSchool: '',
      selectedAcademicYear: '',
      selectedSemester: '',
      selectedMonth: '',
      selectedClassroom: '',
      selectedStudent: ''
    };
  }



  marks = [
    {
      subject: 'اللغة العربية',
      exams: '0/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '0/30',
      classwork: '10/10',
      total: '50/100',
      percentage: '50%'
    },
    {
      subject: 'English O.L.',
      exams: '20/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '0/30',
      classwork: '10/10',
      total: '70/100',
      percentage: '70%'
    },
    {
      subject: 'German',
      exams: '20/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '30/30',
      classwork: '10/10',
      total: '100/100',
      percentage: '100%'
    },
    {
      subject: 'Chemistry',
      exams: '5/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '0/30',
      classwork: '8/10',
      total: '53/100',
      percentage: '53%'
    },
    {
      subject: 'Physics',
      exams: '0/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '0/30',
      classwork: '10/10',
      total: '50/100',
      percentage: '50%'
    },
    {
      subject: 'Biology',
      exams: '0/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '0/30',
      classwork: '8/10',
      total: '48/100',
      percentage: '48%'
    },
    {
      subject: 'جبر و هندسة',
      exams: '20/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '30/30',
      classwork: '10/10',
      total: '100/100',
      percentage: '100%'
    },
    {
      subject: 'التربية الدينية الإسلامية',
      exams: '20/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '30/30',
      classwork: '10/10',
      total: '100/100',
      percentage: '100%'
    },
    {
      subject: 'English AL',
      exams: '20/20',
      quizzes: '30/30',
      attendance: '10/10',
      homework: '30/30',
      classwork: '10/10',
      total: '100/100',
      percentage: '100%'
    }
  ];
  



  printPDF(): void {
    const pdfHeader = document.getElementById('pdfHeader');
    const pdfContent = document.getElementById('pdfContent');
    const pdfTime = document.getElementById('pdfTime');
  
    if (!pdfContent || !pdfHeader || !pdfTime) return;
  
    const now = new Date();
    pdfTime.textContent = now.toISOString();
    pdfHeader.style.display = 'block';
  
    const combined = document.createElement('div');
    combined.appendChild(pdfHeader.cloneNode(true));  // <-- use cloneNode
    combined.appendChild(pdfContent.cloneNode(true)); // <-- use cloneNode
    combined.style.padding = '20px';
    document.body.appendChild(combined);
  
    setTimeout(() => {
      html2canvas(combined).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
  
        const scale = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);
        const imgW = canvas.width * scale;
        const imgH = canvas.height * scale;
  
        pdf.addImage(imgData, 'PNG', 0, 0, imgW, imgH);
        pdf.save('student-grade-book.pdf');
  
        pdfHeader.style.display = 'none';
        document.body.removeChild(combined);
      });
    }, 100);
  }
  
  
  
  

}
