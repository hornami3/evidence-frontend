import http from '../axios/http-common';
import { AstronautData, httpAstronaut } from '../types/astronaut';

interface AxiosResMany {
    status: string,
    data: { astronauts: httpAstronaut[] }
};

interface AxiosResOne {
    data: {
        status: string,
        data: { astronaut: httpAstronaut }
    }
};

export const getAll = () => {
    return http.get<AxiosResMany>('/astronauts');
};

export const get = (id: string) => {
    return http.get<AxiosResOne>(`/astronauts/${id}`);
};

export const update = (id: string, data: AstronautData) => {
    return http.patch<AstronautData, AxiosResOne>(`/astronauts/${id}`, data);
};

export const remove = (id: string) => {
    return http.delete<AxiosResOne>(`/astronauts/${id}`);
};

export const create = (data: AstronautData) => {
    return http.post<AstronautData, AxiosResOne>('/astronauts', data);
};