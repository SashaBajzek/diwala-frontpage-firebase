import React from 'react';
import '../../compiled_css/components/main_box/MainBox.css';
import '../../compiled_css/components/core/Core.css';
import ButtonLink from '../buttons/ButtonLink';
import look from '../../graphics/look.png'
import { SocialIcons } from 'react-social-icons';

export default function MainText() {
  const urls = [
    'http://twitter.com/diwalaorg',
    'https://www.linkedin.com/company/18089037/',
    'https://www.instagram.com/diwala_/',
    'https://www.facebook.com/diwalaorg/',
    'https://diwala.org/'
  ];

  return (
    <div>
      <div className='MainBox'>
        <img className='Look-figure' src={look} alt='Look' />
        <div className='MainText'>
          <p>We are currently working on our new webpage, which will be <span className='Diwala-bold'>released early 2018</span></p>
          <p><span className='Diwala-bold'>More curious or got any questions?</span></p>
          <div className='Button-holder'>
            <ButtonLink
              href='mailto:hello@diwala.org'
              text='Send us an mail'
              color='purple' />
            <span className='Diwala-bold'>or</span>
            <ButtonLink
              href='https://join.slack.com/t/diwala-org/shared_invite/MjIyODA4OTQ0MjEzLTE1MDE5NDQxMTAtMjA4NmRkZmI2ZA'
              text='Join us on Slack'
              color='yellow'
              newTab={true}
              />
          </div>
          <p>Looking forward to hear from you</p>
          <p><span className='Diwala-bold'>The Diwala Team</span></p>
          <div className='social-icons'>
            <SocialIcons urls={urls} />
          </div>
        </div>
      </div>
    </div>
      )
}
