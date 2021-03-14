import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from '../pages/registration/controller/registration.controller';
import trackBy from '../pages/trackBy/controller/trackBy.controller';

// import tableScreen from '../pages/tableScreen/controller/tableScreen.controller';

import Template from '../../applicationComponent/Template';





class App extends React.Component {

    render() {
        return (
            <Template header={true} footer={true}>
                <Switch>
                    <Route exact path="/" component={trackBy} />
                    <Route exact path="/registration" component={Registration} />
                    <Route path="/trackBy" component={trackBy} />
                    {/* <Route path="/tableScreen" component={ tableScreen } /> */}
                </Switch>
            </Template>
        );
    }
}

export default App;
