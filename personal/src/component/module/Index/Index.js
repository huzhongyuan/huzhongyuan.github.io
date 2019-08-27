import React from 'react'
import './Index.css'
import { Carousel } from 'antd';

class Index extends React.Component{
    state = {
        imageList: [
            'https://github.com/huzhongyuan/test/blob/master/1e259de21e3eece6dbf6099e4882c672.jpeg?raw=true',
            'https://github.com/huzhongyuan/test/blob/master/1e259de21e3eece6dbf6099e4882c672.jpeg?raw=true',
            'https://github.com/huzhongyuan/test/blob/master/1e259de21e3eece6dbf6099e4882c672.jpeg?raw=true'
        ]
    }
    render () {
        return (
            <div className="index">
                <Carousel autoplay className="carousel">
                    {
                        this.state.imageList.map((img) => {
                            return (
                                // <div>{img}</div>
                                <img className="img" src={ img } alt="" />
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}
export default Index;