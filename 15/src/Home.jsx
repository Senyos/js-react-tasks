import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Home';

class Home extends React.Component {
  // BEGIN (write your solution here)
    static contextType = ThemeContext;
    static content = content;

    render() {
        <article className="light">{this.content}</article>
    }
  // END
}

export default Home;
