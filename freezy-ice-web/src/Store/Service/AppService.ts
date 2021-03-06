import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import errHandler from '../../Helpers/utils/Utils';

const token: any = localStorage.getItem('token');
export const SendGetRequest = async (url: string) =>
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`,
        },
    })
        .then((response) => {
            if (!response.ok) {
                toast.error('Pobieranie danych zakończyło się niepowodzeniem', {
                    position: toast.POSITION.TOP_CENTER,
                });
                return null;
            }
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => data)
        .catch(() => {
            toast.error('Pobieranie danych zakończyło się niepowodzeniem', {
                position: toast.POSITION.TOP_CENTER,
            });
            errHandler();
        });

export const SendImageRequest = async (url: string, payload: any) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer  ${token}`,
        },
        body: payload,
    })
        .then((response) => {
            if (!response.ok) {
                toast.error('Tworzenie zakończyło się niepowodzeniem', {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,
            });
            return data;
        })
        .catch(() => {
            toast.error('Tworzenie zakończyło się niepowodzeniem', {
                position: toast.POSITION.TOP_CENTER,
            });
            errHandler();
        });

export const SendPostRequest = async (url: string, payload: any) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`,
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (!response.ok) {
                toast.error('Tworzenie zakończyło się niepowodzeniem', {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,
            });
            return data;
        })
        .catch(() => {
            toast.error('Tworzenie zakończyło się niepowodzeniem', {
                position: toast.POSITION.TOP_CENTER,
            });
            errHandler();
        });

export const SendPostWithoutPayloadRequest = async (url: string) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`,
        },
    })
        .then((response) => {
            if (!response.ok) {
                toast.error('Tworzenie zakończyło się niepowodzeniem', {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,
            });
            return data;
        })
        .catch(() => {
            toast.error('Tworzenie zakończyło się niepowodzeniem', {
                position: toast.POSITION.TOP_CENTER,
            });
            errHandler();
        });

export const SendPutRequest = async (url: string, payload: any) =>
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`,
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (response.ok) {
                toast.success('Zaktualizowano', {
                    position: toast.POSITION.TOP_CENTER,
                });
            } else {
                toast.error('Aktualizacja zakończyło się niepowodzeniem', {
                    position: toast.POSITION.TOP_CENTER,
                });
            }

            return response.status === 200 ? response.json() : '';
        })
        .catch(() => {
            toast.error('Aktualizacja zakończyło się niepowodzeniem', {
                position: toast.POSITION.TOP_CENTER,
            });
            errHandler();
        });

export const SendDeleteRequest = async (url: string) =>
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`,
        },
    })
        .then((response) => {
            if (!response.ok) {
                toast.error('Usuwanie zakończyło się niepowodzeniem', {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {
            toast.success('Usuwanie zakończyło się sukcesem.', {
                position: toast.POSITION.TOP_CENTER,
            });
        })
        .catch(() => {
            toast.error('Usuwanie zakończyło się niepowodzeniem', {
                position: toast.POSITION.TOP_CENTER,
            });
            errHandler();
        });

export const SendLoginRequest = async (url: string, payload: any) =>
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer  ${token}`,
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (!response.ok) {
                toast.error('Logowanie zakończyło się niepowodzeniem', {
                    position: toast.POSITION.TOP_CENTER,
                });
            }
            return response.status === 200 ? response.json() : '';
        })
        .then((data) => {
            toast.success(data.message, {
                position: toast.POSITION.TOP_CENTER,
            });

            if (data !== '') localStorage.setItem('token', data?.data);

            return data;
        })
        .catch(() => {
            toast.error('Logowanie zakończyło się niepowodzeniem', {
                position: toast.POSITION.TOP_CENTER,
            });
            errHandler();
        });
