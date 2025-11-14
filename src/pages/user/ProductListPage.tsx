// src/pages/ProductListPage.tsx
import React, { useEffect } from 'react';
import {Spinner} from "../../components/ui/loading/Spinner";
import { fetchProducts } from '../../store/slices/productSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {IProduct} from "../../types";
import { addItem } from '../../store/slices/cartSlice';





export const ProductListPage: React.FC = () => {

    return (
        <div>
            <h1>Danh Sách Sản Phẩm</h1>
            <Spinner></Spinner>

        </div>
    );
};