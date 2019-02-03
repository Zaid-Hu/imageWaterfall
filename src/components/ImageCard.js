import React from 'react';

class ImageCard extends React.Component {
    constructor () {
        super();
        this.state = { spanNum: 0};

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }

    setSpan = () => {
        const imageHeight = this.imageRef.current.clientHeight;
        const spanNum = Math.ceil(imageHeight / 10 +1);

        this.setState({ spanNum });
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spanNum}`}}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}
export default ImageCard;