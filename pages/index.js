import React from 'react';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';

import _ from 'lodash';

import Logo, { LOGO_TEXT, LOGO_ICON } from './components/logo';
import Typing from './components/typing';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render () {
    const stringsToType = [
      'Design',
      'Graphic Design',
      'Photography',
      'Web Design',
      'Videography',
      'Design'
    ];

    return (
      <DocumentTitle title="Innovative Design">
        <div>
          <div className="page__wrapper home">
            <div className="home__container">
              <Logo logoType={ LOGO_TEXT } logoClass={ 'logo__text' } />
              <Typing
                defaultString="Design"
                strings={ stringsToType }
                interval={ { letter: 50, string: 500 } }
                backspace={ true }
                cursor={ '|' }
                startDelay={ 750 }
                hideCursorOnDone={ true }
              />
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}
