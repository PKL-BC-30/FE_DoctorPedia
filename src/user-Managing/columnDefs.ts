import styles from './userManaging.module.css';


const columnDefs = (context) => [
  // Other column definitions...
  {
    headerName: 'Action',
    cellRenderer: 'actionButtonRenderer',
    width: 100,
    minWidth: 80,
    maxWidth: 120,
    cellRendererParams: {
      context: context // Pass context directly
    }
  },
  {
    headerName: "Last Name",
    field: "lastName",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: (params) => params.context.isEditing(),
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Full Name",
    valueGetter: (params) => params.data.firstName + ' ' + params.data.lastName,
    editable: false,
    sortable: true,
    resizable: true,
    filter: true,
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' }
  },
  {
    headerName: "Password",
    field: "password",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: (params) => params.context.isEditing(),
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Email",
    field: "email",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: (params) => params.context.isEditing(),
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Mobile Number",
    field: "mobileNumber",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: (params) => params.context.isEditing(),
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Username",
    field: "userName",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: (params) => params.context.isEditing(),
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Role",
    field: "role",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: (params) => params.context.isEditing(),
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: 'Action',
    cellRenderer: 'actionButtonRenderer',
    width: 100,
    minWidth: 80,
    maxWidth: 120,
   
    
  }
];

export { columnDefs };
