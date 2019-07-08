import React, { PureComponent } from 'react';
import PictureWall from 'components/PictureWall';

export default class Page extends PureComponent {
  render() {
    return (
      <div>
        this is Page~
        <PictureWall></PictureWall>
      </div>
    );
  }
}
