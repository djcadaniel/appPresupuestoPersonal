type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Presupuest = {
  name: string,
  monto: number
}

export type Expense = {
  id: string
  expenseName: string
  price: number
  category: string
  date: Value
}

//gasto temporal
export type DraftExpense = Omit< Expense, 'id'>

export type Category = {
  id: string
  name: string
  icon: string
}