import React from 'react';
import Layout from '../utils/Layout';
import SEO from '../utils/Seo';
import Index from '../containers/Index';

const IndexPage = () => (
  <Layout>
    <SEO title="Main page" />
    <Index />
  </Layout>
);

export default IndexPage;
