import React from 'react';
import { Header } from './header'
import { FiltersBoxRedux } from './filters'
import { ResultsPageRedux } from './results-page'

function App() {
  return (
    <div style={{ backgroundColor: "#1b242e"}}>
      <div class="container" >
        <Header />
        <div class="row" >
          <div class="col-md-8"  >
            <ResultsPageRedux></ResultsPageRedux>
          </div>
          <div class="col-md-4">
            <FiltersBoxRedux  ></FiltersBoxRedux>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#1b242e" , height: '270px'}}></div>
    </div>
  );
}

export default App;
