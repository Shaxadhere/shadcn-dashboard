import { Payment } from "@/models/Payment";

export const paymentTableData: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    type: "Paid",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
    type: "Unpaid",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "jss@mail.com",
    type: "Unpaid",
  },
] as const;
