import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import './Palette.css';

class Palette extends Component {

    constructor(props) {
        super(props);

        this.state = { level: 500, format: "hex" };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeColorFormat = this.changeColorFormat.bind(this);
    }

    changeLevel(level) {

        this.setState({ level });

    }

    changeColorFormat(value) {

        this.setState({ format: value });

    }

    render() {

        const { colors, paletteName, emoji, id } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => <ColorBox background={color[format]}
            name={color.name}
            key={color.id}
            url={`/palette/${id}/${color.id}`}
            showLink={true}
        />);
        return (
            <div className="Palette">
                <NavBar level={level} changeLevel={this.changeLevel} handelChange={this.changeColorFormat} showAllColors />

                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                <footer className="Palette-footer">
                    {paletteName}<span className="emoji">{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;
