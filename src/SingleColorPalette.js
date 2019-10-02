import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';

class SinglColorPalette extends Component {

    constructor(props) {
        super(props);

        this.state = { format: "hex" };

        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.changeColorFormat = this.changeColorFormat.bind(this);
    }

    gatherShades(palette, colorToFilterBy) {
        // return all shades of a given color
        let shades = [];
        let allColors = palette.colors

        for (let key in allColors) {

            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }

        return shades.slice(1);
    }

    changeColorFormat(value) {

        this.setState({ format: value });

    }

    render() {
        const { paletteName, emoji, id } = this.props.palette;
        const { format } = this.state;
        const colorBoxes = this._shades.map(color => (

            <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />

        ));
        return (
            <div className="SingleColorPalette Palette">
                <NavBar handelChange={this.changeColorFormat} showAllColors={false} />
                <div className="Palette-colors">
                    {colorBoxes}
                    <div className="go-back ColorBox"><Link to={`/palette/${id}`} className="back-button">GO BACK</Link></div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );

    }


}

export default SinglColorPalette;
