import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import React from 'react';
import { PropsWithChildren, useEffect } from 'react'
import useInit from '../context/hook/useInit';

const appxios = axios.create({
    baseURL: ''
})

export function AxiosInterceptor({ children }: PropsWithChildren<{}>) {
    useInit();
    useEffect(() => {
        const beforeRequest = (config: AxiosRequestConfig<any>) => {

            return config;
        }
        const requestError = (error: any) => {

            return Promise.reject(error);
        }
        const onResponse = (response: AxiosResponse<any, any>) => {

            return response;
        }
        const onResponseError = (error: any) => {
            return Promise.reject(error);
        }
        appxios.interceptors.request.use(beforeRequest, requestError);
        const interceptor = appxios.interceptors.response.use(onResponse, onResponseError);
        return () => appxios.interceptors.response.eject(interceptor);
    }, [])
    return <>{children}</>;
}


export default appxios;
