import { Column } from "react-table"; 

export interface DataType {
  id: number;
  value: string;
  strike_difference: number;
  lot_size: number;
  expiry_week: number;
  name: string;
  exchange_id: number;
}

// ✅ Type-safe `Columns` definition
export const Columns: Column<DataType>[] = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Value",
    accessor: "value",
  },
  {
    Header: "Strike Difference",
    accessor: "strike_difference",
  },
  {
    Header: "Lot Size",
    accessor: "lot_size",
  },
  {
    Header: "Expiry Week",
    accessor: "expiry_week",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Exchange Id",
    accessor: "exchange_id",
  }
]
