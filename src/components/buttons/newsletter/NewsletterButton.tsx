import * as React from 'react';
import '../../../compiled_css/components/buttons/newsletter/NewsletterButton.css';

const newsLetterUrl = 'http://eepurl.com/dll_5H';

export default function NewsletterButton(props: any) {
  if (props.onClick) {
    return (
      <button className="newsletter-button" onClick={props.onClick}>Follow our journey!</button>
    );
  } else {
    return (
      <a className="newsletter-button" target="_blank" href={newsLetterUrl}>Follow our journey!</a>
    );
  }
}