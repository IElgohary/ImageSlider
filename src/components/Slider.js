import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import Slideshow from '../lib/react-native-slideshow';

const { height } = Dimensions.get('window');
class Slider extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          position: 0,
          interval: null,
          dataSource: [
            {
              title: 'Title 1',
              caption: 'Caption 1',
              url: 'https://i.pinimg.com/236x/b4/1a/92/b41a92756412ca262fc029d308308258.jpg',
            }, {
              title: 'Title 2',
              caption: 'Caption 2',
              url: 'https://i.pinimg.com/564x/23/ab/9b/23ab9b49e9e1ce9a32c956824275fef4.jpg',
            }, {
              title: 'Title 3',
              caption: 'Caption 3',
              url: 'https://i.pinimg.com/236x/fe/ec/48/feec489c0bf0f8720f9521ebc545418d.jpg',
            },
            {
                title: 'Title 4',
                caption: 'Caption 4',
                url: 'https://i.pinimg.com/236x/6f/1c/ef/6f1cefb5899bae4a8baef28364be7e6b.jpg',
            },
            {
            title: 'Title 5',
            caption: 'Caption 5',
            url: 'https://i.pinimg.com/236x/f5/ea/14/f5ea144c352f0ef2dc9729634f62d287.jpg',
            }
          ]
        };
      }

      render() {
        return (
        <Slideshow 
            height={height * 0.5}
            arrowSize={20}
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })} 
        />
        );
      }
    
}

export default Slider;
 