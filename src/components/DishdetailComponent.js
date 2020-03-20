import React, {Component} from "react";
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        const dishComment = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {comment.date}</p>
                </li>
            );
        });

        if (comments != null)
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                    {dishComment}
                    </ul>
                </div>
            );
        else
            return (
                <div></div>
            );

    };

    render() {

        return (
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>

            </div>
        )
    };


}


export default DishDetail;