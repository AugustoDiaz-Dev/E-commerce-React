import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { collection, getDocs } from 'firebase/firestore'
import fireDB from '../fireConfig';
import '../styles/products.css'
import { useNavigate } from 'react-router-dom';
// import { productsData } from '../productData';

function Homepage() {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const users = await getDocs(collection(fireDB, 'products'));
            const productsArray = [];
            users.forEach((doc) => {
                const obj = {
                    id: doc.id,
                    ...doc.data()
                }
                productsArray.push(obj);
            });
            setProducts(productsArray);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    {products.map(product => {
                        return <div className="col-md-4 ">
                            <div className="product m-2 p-1 position-relative">
                                <div className="product-content d-flex flex-column align-items-center">
                                    <h3>{product.name}</h3>
                                    <img src={product.imageURL} alt={product.name} className='product-img' />
                                </div>
                                <div className="product-actions d-flex flex-column justify-content-center align-items-center">
                                    <h2>{product.price} US$</h2>
                                    <div className="d-flex">
                                        <div className='d-flex flex-column'>
                                            <button>Add to Cart</button>
                                            <button onClick={() => navigate(`/product-info/${product.id}`)}>View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </Layout>
    )
}
export default Homepage