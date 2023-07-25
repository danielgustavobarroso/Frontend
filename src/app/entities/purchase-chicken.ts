export interface PurchaseChicken {
    id?: string,
    farmId: string,
    purchaseDate: Date,
    units: number,
    price: number,
    totalAmount: number
}