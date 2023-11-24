import React from 'react';
import Head from 'next/head';
import Calculator from '../components/Calculator';

const Calculate = () => {
  return (
    <div>
      <Head>
        <title>계산기</title>
      </Head>
      <Calculator />
    </div>
  );
};

export default Calculate;