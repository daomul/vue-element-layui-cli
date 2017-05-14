import axios from 'axios';

let base = '';

export const getOrderList = params => { return axios.get(`${base}/order/list`, { params: params }); };

export const getOrederListPage = params => { return axios.get(`${base}/order/listpage`, { params: params }); };

export const removeOrder = params => { return axios.get(`${base}/order/remove`, { params: params }); };

export const batchRemoveOrder = params => { return axios.get(`${base}/order/batchremove`, { params: params }); };

export const editOrder = params => { return axios.get(`${base}/order/edit`, { params: params }); };

export const addOrder = params => { return axios.get(`${base}/order/add`, { params: params }); };
