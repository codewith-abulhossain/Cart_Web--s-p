import React from 'react';
import Layout from "../layout/layout.jsx";
import ProductList from "../component/product-list.jsx";
import Loading from "../component/loading.jsx";
const HomePage = () => {
    return (
        <Layout>
                <ProductList/>
        </Layout>
    );
};

export default HomePage;