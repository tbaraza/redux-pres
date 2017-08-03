import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class StarshipTable extends PureComponent {
    render() {
        const { starship } = this.props;
        return (
          <tr>
            <td>{starship.name}</td>
            <td>{starship.passengers}</td>
            <td>{starship.crew}</td>
          </tr>
        );
    }
}

StarshipTable.propTypes = {
    starship: PropTypes.object,
};
