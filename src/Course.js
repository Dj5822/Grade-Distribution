import React from 'react';

class Course extends React.Component {
    render() {
        var distList = [];

        for (let i=0; i<this.props.dist.length; i++) {
            distList.push(<p>{this.props.dist[i]}</p>);
        }

        return (
            <div>
                <h2>
                    {this.props.subject}
                </h2>
                <p>
                    {distList}
                </p>
            </div>
        );
    }
}

export default Course;