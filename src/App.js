import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './colorHelpers';
import { palette } from '@material-ui/system';

class App extends Component {

  findPalette(id) {
    return seedColors.find(palette => palette.id === id);
  }

  render() {

    return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
        <Route exact path="/palette/:id" render={routeProps => <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />} />
        <Route exact path="/palette/:paletteId/:colorId"
          render={routeProps => <SingleColorPalette
            palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
            colorId={routeProps.match.params.colorId} />} />
      </Switch>


      //{/* <div>
      //  <Palette palette={generatePalette(seedColors[4])} />
      //</div> */}
    );
  }

}

export default App;
