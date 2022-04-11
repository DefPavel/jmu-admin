import HomeForm from 'components/HomeForm';
import BaseLayout from 'components/layouts/BaseLayout';
import React from 'react';

const Home = () => {
  return (
    <>
     <BaseLayout >
      <HomeForm />
     </BaseLayout>
    </>
  )
}

export default Home;
