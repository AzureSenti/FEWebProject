import { IProduct } from '../types';
import axiosClient from './axiosClient';

export const productApi = {
    getAll: async (): Promise<IProduct[]> => {
        const response = await axiosClient.get('/post');
        return response.data;
    },
    getById: async (id: string): Promise<IProduct> => {
        const response = await axiosClient.get(`/post/${id}`); //
        return response.data;
    },
};