import React, {Component} from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class Dishdetail extends Component {

    renderDetail(dish) {
        // console.log(dish);
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}>
                        <CardImg top src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) {
            if (dish.comments != null) {
                // console.log(dish.comments);
                const dishComment = dish.comments.map((comment) => {
                    return (
                        <li key={comment.id}>
                            <p>{comment.comment}</p>
                            <p>--{comment.author}, {comment.date}</p>
                        </li>
                    );
                });

                return (
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {dishComment}
                        </ul>
                    </div>
                );

            }
        } else {
            return (
                <div></div>
            );
        }


    }

    render() {
        return (
            <div className="row">
                {this.renderDetail(this.props.dish)}
                {this.renderComments(this.props.dish)}
            </div>
        );
    };

}


export default Dishdetail