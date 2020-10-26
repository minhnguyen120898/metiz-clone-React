import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routers from './router';
import "./scss/_styles.scss";

function App() {
  
  const showRouter = (router) => {
    console.log(router[0].path);
    return router.map((e, i) => (
      <Route key={i} 
        exact = {e.exact}
        path = {e.path}
        component = {e.main}  
      />
    ))
  };

  return (
    <div>
      <Router>
        <Switch>
            {showRouter(routers)}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
