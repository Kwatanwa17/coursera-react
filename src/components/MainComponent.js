import React, {Component} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import DishDetail from "./DishdetailComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color='primary'>
                    <div className="container">
                        <NavbarBrand>
                            Ristorante Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} />
                <DishDetail dish={this.state.selectedDish}/>
            </div>
        );
    }
}

export default App;