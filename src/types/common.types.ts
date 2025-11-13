
// Khối Con người (People)
export type TAddressType = 'SHIPPING' | 'BILLING' | 'OTHER';
export type TAccountProvider = 'LOCAL' | 'GOOGLE' | 'FACEBOOK';
export type TAccountStatus = 'Active' | 'Locked' | 'Suspended';

// Khối Sản phẩm & Danh mục
export type TProductStatus = 'Active' | 'Inactive';
export type TReviewVisibility = 'Visible' | 'Hidden';
export type TModerationStatus = 'Pending' | 'Approved' | 'Rejected' | 'Hidden';

// Khối Bán hàng (Đơn hàng)
export type TOrderStatus =
    | 'Draft'
    | 'Confirmed'
    | 'Paid'
    | 'Shipped'
    | 'Completed'
    | 'Cancelled';

export type TOrderAddressType = 'SHIPPING' | 'BILLING';

export type TPaymentStatus =
    | 'Pending'
    | 'Authorized'
    | 'Captured'
    | 'Failed'
    | 'Refunded';

export type TShipmentStatus = 'Ready' | 'Shipped' | 'Delivered' | 'Returned';

// Khối Tồn kho
export type TStockMovementReason =
    | 'GoodsReceipt'
    | 'Sale'
    | 'Return'
    | 'DamagedAdjustment'
    | 'StocktakeAdjustment'
    | 'ManualAdjustment';


