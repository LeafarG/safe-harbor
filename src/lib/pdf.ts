import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface JsPDFWithAutoTable extends jsPDF {
  lastAutoTable: { finalY: number };
}

interface PatientData {
  name: string;
  dateOfBirth?: string | null;
  notes?: string | null;
}

export interface SessionData {
  sessionDate: string;
  location?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  notes?: string | null;
}

export function generateIepPDF(
  patient: PatientData,
  goals: string,
  sessions?: SessionData[]
) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  
  // Header
  doc.setFillColor(99, 102, 241); // Indigo-500
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Safe Harbor', margin, 25);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Plano de Educação Individualizada (IEP)', margin, 32);
  
  // Report Info
  doc.setTextColor(100, 100, 100);
  doc.setFontSize(9);
  doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')}`, pageWidth - margin, 25, { align: 'right' });
  doc.text(`ID: ${Math.random().toString(36).substring(2, 10).toUpperCase()}`, pageWidth - margin, 30, { align: 'right' });
  
  // Patient Info Section
  let y = 55;
  doc.setTextColor(31, 41, 55); // Gray-800
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Dados do Estudante', margin, y);
  
  y += 10;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const patientInfo = [
    ['Nome:', patient.name || 'Não informado'],
    ['Data de Nascimento:', patient.dateOfBirth ? new Date(patient.dateOfBirth).toLocaleDateString('pt-BR') : 'Não informada'],
    ['Observações:', patient.notes ? patient.notes.substring(0, 200) + (patient.notes.length > 200 ? '...' : '') : 'Nenhuma observação registrada'],
  ];
  
  autoTable(doc, {
    startY: y,
    head: [],
    body: patientInfo,
    theme: 'plain',
    styles: {
      fontSize: 10,
      cellPadding: 3,
    },
    columnStyles: {
      0: { fontStyle: 'bold', cellWidth: 50 },
      1: { cellWidth: 'auto' },
    },
    margin: { left: margin, right: margin },
  });
  
  // Goals Section
    y = (doc as JsPDFWithAutoTable).lastAutoTable.finalY + 15;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Objetivos IEP Gerados', margin, y);
  
  y += 10;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  
  // Parse goals and create table
  const goalLines = goals.split('\n').filter(line => line.trim());
  const goalData = goalLines.map(line => {
    // Clean up markdown-style formatting
    const clean = line
      .replace(/^#{1,6}\s*/, '')
      .replace(/\*\*/g, '')
      .replace(/[🎯📋⚙️📊🔄]/g, '')
      .trim();
    return [clean];
  }).filter(row => row[0]);
  
  if (goalData.length > 0) {
    autoTable(doc, {
      startY: y,
      head: [['Objetivos e Estratégias']],
      body: goalData,
      theme: 'striped',
      headStyles: {
        fillColor: [99, 102, 241],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
      styles: {
        fontSize: 9,
        cellPadding: 4,
        overflow: 'linebreak',
      },
      margin: { left: margin, right: margin },
    });
  }
  
  // Sessions Section (if provided)
  if (sessions && sessions.length > 0) {
  y = (doc as JsPDFWithAutoTable).lastAutoTable.finalY + 15;
    
    if (y > 240) {
      doc.addPage();
      y = 30;
    }
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Histórico de Sessões', margin, y);
    
    const sessionData = sessions.map(s => [
      new Date(s.sessionDate).toLocaleDateString('pt-BR'),
      s.location || '-',
      s.notes ? s.notes.substring(0, 50) + (s.notes.length > 50 ? '...' : '') : '-',
    ]);
    
    autoTable(doc, {
      startY: y + 10,
      head: [['Data', 'Local', 'Resumo']],
      body: sessionData,
      theme: 'grid',
      headStyles: {
        fillColor: [16, 185, 129], // Emerald-500
        textColor: [255, 255, 255],
        fontStyle: 'bold',
      },
      styles: {
        fontSize: 9,
        cellPadding: 3,
      },
      margin: { left: margin, right: margin },
    });
  }
  
  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Safe Harbor - Plataforma EdTech & ABA | Página ${i} de ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }
  
  // Save
  const fileName = `IEP_${patient.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
  
  return fileName;
}

export function generateSessionsPDF(
  patient: PatientData,
  sessions: SessionData[]
) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  
  // Header
  doc.setFillColor(99, 102, 241);
  doc.rect(0, 0, pageWidth, 35, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Relatório de Sessões', margin, 22);
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(patient.name, margin, 30);
  
  // Summary
  let y = 50;
  doc.setTextColor(31, 41, 55);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text(`Total de Sessões: ${sessions.length}`, margin, y);
  
  y += 10;
  
  // Sessions table
  const sessionData = sessions.map(s => [
    new Date(s.sessionDate).toLocaleDateString('pt-BR'),
    `${s.startTime || '--:--'} - ${s.endTime || '--:--'}`,
    s.location || '-',
    s.notes ? (s.notes.length > 40 ? s.notes.substring(0, 40) + '...' : s.notes) : '-',
  ]);
  
  autoTable(doc, {
    startY: y,
    head: [['Data', 'Horário', 'Local', 'Notas']],
    body: sessionData,
    theme: 'striped',
    headStyles: {
      fillColor: [99, 102, 241],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
    },
    styles: {
      fontSize: 9,
      cellPadding: 4,
    },
    margin: { left: margin, right: margin },
  });
  
  // Footer
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Safe Harbor | ${new Date().toLocaleDateString('pt-BR')} | Página ${i} de ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 10,
      { align: 'center' }
    );
  }
  
  const fileName = `Sessoes_${patient.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
  
  return fileName;
}
