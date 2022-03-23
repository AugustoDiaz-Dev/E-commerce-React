import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { getDoc, doc } from 'firebase/firestore'
import fireDB from '../fireConfig';
import { useParams } from 'react-router-dom';
import '../styles/products.css'

function ProductInfo() {

    const [product, setProduct] = useState();
    const params = useParams();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const productTemp = await getDoc(doc(fireDB, 'products', params.id));
            setProduct(productTemp.data());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <section className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        {product && (<div>
                            <h2 className='fw-bold fst-italic'>{product.name}</h2>
                            <div className="product-info-body text-center">
                                <img className='product-info-img' src={product.imageURL} alt={product.name} />
                                <p>{product.description}</p>
                            </div>
                            <div className="d-flex justify-content-end my-3">
                                <button>Add to cart</button>
                            </div>
                        </div>)}
                    </div>
                </div>

            </section>
        </Layout>
    )
}
export default ProductInfo