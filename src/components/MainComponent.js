import React, {Component} from 'react';
import {Navbar, NavbarBrand} from "reactstrap";
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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

                <Header />

                <div className="container">

                    <Menu dishes={this.state.dishes}
                          onClick={(dishId) => this.onDishSelect(dishId)}/>

                    <div className="row">
                        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                    </div>

                </div>

                <Footer />
            </div>
        );
    }
}

export default Main;