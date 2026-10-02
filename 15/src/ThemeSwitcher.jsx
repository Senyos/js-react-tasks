import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
    constructor(props) {
        super(props);
        this.state = { white: false, black: false, blue: false };
    }
    setChecked = (value) => {
        this.setState({ checked: value })
    }

    setWhite = (value) => this.setState({ white: value, black: false, blue: false })
    setBlack = (value) => this.setState({ white: false, black: value, blue: false })
    setBlue  = (value) => this.setState({ white: false, black: false, blue: value })

    render() {
        return (
            <ButtonGroup className="mb-2">
                <ToggleButton
                    id="toggle-check"
                    type="checkbox"
                    variant="secondary"
                    checked={this.state.white}
                    value="1"
                    onChange={(e) => this.setWhite(e.currentTarget.checked)}
                    >
                    Checked
                </ToggleButton>
                <ToggleButton
                    id="toggle-check"
                    type="checkbox"
                    variant="secondary"
                    checked={this.state.black}
                    value="1"
                    onChange={(e) => this.setBlack(e.currentTarget.checked)}
                    >
                    Checked
                </ToggleButton>
                <ToggleButton
                    id="toggle-check"
                    type="checkbox"
                    variant="secondary"
                    checked={this.state.blue}
                    value="1"
                    onChange={(e) => this.setBlue(e.currentTarget.checked)}
                    >
                    Checked
                </ToggleButton>
            </ButtonGroup>
        );
    }
  // END
}

export default ThemeSwitcher;
