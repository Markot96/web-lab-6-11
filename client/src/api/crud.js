// import axios from "axios";
// import addImage from "../data/add_image";

// const http = axios.create({
//     baseURL: 'http://localhost:5000/vacancy',
//     headers: {
//         'Content-Type': 'application/json'
//     }
// });

// export async function getAllByFilters(company, name, salary) {
//     let url = `http://localhost:5000/vacancy?`;
//     if (company !== undefined && company !== '') {
//       url += `company=${company}&`;
//     }
//     if (name !== undefined) {
//       url += `name=${name}&`;
//     }
//     if (salary !== undefined) {
//       url += `salary=${salary}&`;
//     } 
//     let data = (await http.get(url)).data;
//     return addImage(data)
// }

// export async function getOne(id) {
//     let url = `http://localhost:5000/vacancy/${id}`;
//     return (await http.get(url)).data;
// }

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/equip',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export async function getVacancies() {
    await delay(2000);
    return (await instance.get()).data;
}

export async function getVacancyById(id) {
    await delay(2000);
    return (await instance.get(`/${id}`)).data;
}

export async function getFilteredVacancies(company, name) {
    await delay(2000);
    return (await instance.get(`/filters/${company}&${name}`)).data;
}

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}