import { TStockMovementReason } from './common.types';
import { ISupplier } from './product.types';

export interface IWarehouse {
    warehouse_id: string;
    name: string;
    address_text?: string;
}

export interface IStockMovement {
    movement_id: string;
    product_id: string;
    warehouse_id: string;
    quantity_delta: number; // Số âm (bán) hoặc số dương (nhập)
    reason: TStockMovementReason;
    occurred_at: string;
    reference_no?: string;
    order_id?: string;
}

export interface IGoodsReceipt {
    receipt_id: string;
    supplier_id?: string;
    receipt_date: string;
    invoice_number?: string;
    total_cost?: number;
    notes?: string;

    // Dữ liệu lồng nhau BE có thể trả về:
    supplier?: ISupplier;
    lines?: IGoodsReceiptLine[];
}

export interface IGoodsReceiptLine {
    receipt_id: string;
    line_no: number;
    product_id: string;
    warehouse_id: string;
    quantity_received: number;
    unit_cost?: number;
}