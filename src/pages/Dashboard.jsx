import React, { useState, useEffect } from 'react'
import { ApiUrl } from '../utils/ApiUrl'
import axios from 'axios'
import Table from '../components/Table.jsx';
import '../styles/New.css'
import schema from './schema.json';
import { Link } from 'react-router-dom'

import '../styles/Dashboard.css'

export default function Dashboard() {

    const [ data, setData] = useState(null)

    useEffect(() => {
        const allHouses = async() => {
            axios.get(`${ApiUrl}/properties/`)
            .then(function (response) {
                setData(response.data)
            })
        }
        allHouses()
    }, [])

    // const getOwnerHouseById = (id) => {
    //     houses.methods
    //     .houseToOwner(id)
    //     .call()
    //     .then((addressFromOwner) => {
    //         console.log('Wallet del Usuario', addressFromOwner)
    //         return addressFromOwner
    //     })
    // }
    // const getHouseDataById = (id) => {
    //     houses.methods
    //     .houses(id)
    //     .call()
    //     .then((houseData) => {
    //         console.log('Obj con Data de la Casa', houseData)
    //         return houseData
    //     })
    // }
    // const getAllHouses = () => {
    //     if (houses) {
    //         houses.methods
    //         .getAll()
    //         .call()
    //         .then((allHouses) => {
    //             console.log('Arreglo con todas las casas', allHouses)
    //             return allHouses
    //         })
    //     }
    // }

    return (
        <div className="dashboard-container">
            <div className="container">
            <div className="row title_register table_reg">
                <h2>Lista de inmuebles registrados</h2>
                    <Link to='/new/property' className="btn btn-primary text-right" style={{color: 'white', display: 'flex', alignItems: 'center' }}>Registrar inmueble</Link>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    <Table headers={Object.keys(schema)} rows={data}/>
                </div>
            </div>
        </div>
        </div>
    )
}
