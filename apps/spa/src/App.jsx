import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from './components/header';
import ElkTable from './components/elasticSearchDataTable'

const DashboardRoute = lazy(() => import('@logrhythm/dashboard/route'));

const testColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'fullName', headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false, width: 160, valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} 
        ${ params.getValue(params.id, 'lastName') || ''}`,
  },
];

const testRowData = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={ <div>Loading...</div> }>
        <Header />
        <Switch>
         {/* <Route exact path="/" component={DashboardRoute} />*/} {/*Not Working?*/}
          <Redirect exact from="/" to="/dashboard" />
          <Route path="/dashboard" component={DashboardRoute} />
          <Route path="/products" render={() => <h2>Products...</h2>} />
          <Route path="/pricing" render={() => <h2>Pricing...</h2>} />
          <Route path="/blog" render={() => <h2>Blog...</h2>} />
          <Route path="/elk-table" render={() => <>
              <ElkTable title={"ELK Table Test1234"} height={"300px"} width={"50%"} cols={testColumns} rows={testRowData} pagesize={7} />
              <ElkTable title={"ELK Table Test-ABCDE"} height={"300px"} width={"80%"} cols={testColumns} rows={null} />
              </>
          } />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
