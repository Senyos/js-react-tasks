import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext;

    render() {
        const { themes, theme, setTheme } = this.context;

        return (
            <ButtonGroup className="mb-2">
                {themes.map( (item) => ( <ToggleButton
                    key={item.id}
                    id={`toggle-${item.id}`}
                    type="checkbox"
                    variant="secondary"
                    checked={this.state.white}
                    value="1"
                    onChange={(e) => this.setWhite(e.currentTarget.checked)}
                    >
                    White
                </ToggleButton>))}
            </ButtonGroup>
        );
    }
  // END
}

export default ThemeSwitcher;
