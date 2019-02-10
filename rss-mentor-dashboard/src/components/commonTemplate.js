import React, { Component } from 'react';
import Search from './search/search';
import Table from './table/table';

function Common() {
  return (
    <div className="container">
      <Search />
      <Table />
    </div>
  );
}
export default Common;
