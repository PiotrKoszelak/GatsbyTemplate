import React from 'react';
import Layout from "../utils/layout"
import SEO from "../utils/seo"
import Index from '../containers/Index'


const IndexPage = () => 
        <Layout >
            <SEO title="Strona główna" />
            <Index />
        </Layout>


export default IndexPage
