import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Profile';

class Profile extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext;
    static content = content;

    render() {
        <article className={this.contextType}>{this.content}</article>
    }
  // END
}

export default Profile;
