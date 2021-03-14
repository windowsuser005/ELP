import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Registration from '../pages/registration/controller/registration.controller';
import trackBy from '../pages/trackBy/controller/trackBy.controller'
import Template from '../../applicationComponent/Template';





class App extends React.Component {

    render() {
        return (
            <Template header={true} footer={true}>
                <Switch>
                    <Route exact path="/" component={trackBy} />
                    <Route exact path="/registration" component={Registration} />
                    <Route path="/trackBy" component={trackBy} />
                </Switch>
            </Template>
        );
    }
}

export default App;
