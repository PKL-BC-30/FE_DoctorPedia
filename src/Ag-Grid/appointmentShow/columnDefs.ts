export const columnDefs = [
  { headerName: "ID", field: "id" },
  { headerName: "Nama Pasien", field: "namaPasien", editable: true },
  { headerName: "Umur", field: "umur", editable: true },
  { headerName: "Berat", field: "berat", editable: true },
  { headerName: "Tinggi", field: "tinggi", editable: true },
  { headerName: "Gol. Darah", field: "golDarah", editable: true },
  { headerName: "Poli", field: "poli", editable: true },
  { headerName: "Dokter", field: "dokter", editable: true },
  { headerName: "Tanggal", field: "tanggal", editable: true },
  { headerName: "Sesi", field: "sesi", editable: true },
  { headerName: "Keluhan", field: "keluhan", editable: true },
  {
    headerName: "Delete",
    field: "delete",
    cellRenderer: "deleteButtonRenderer",
    width: 100,
    editable: false,
  },
];
