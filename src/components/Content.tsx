import { Switch, Route } from 'react-router-dom';

import {observer} from "mobx-react-lite";

import { authRoutes } from '../routes'

const Content = observer(() => {


  return (
    <div className='content'>
      <Switch>
        {authRoutes.map(({ path, Component }) =>
          <Route key={path} path={path} component={Component} exact />
        )}
      </Switch>
    </div>
  );
})

export default Content;          