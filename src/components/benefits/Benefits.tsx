import * as React from 'react';
import '../../compiled_css/components/benefits/Benefits.css';
import { TextData } from '../../api/texts';

class Benefits extends React.Component {
  public props: { text: TextData };

  render() {
    return (
      <div className="benefits">
        <h2>Benefits</h2>
        <dl className="benefits__list">
          {this.props.text.value.map((item, key) => [
            <dt key={key + 'dt'} className="benefits__list-item-label">{item.label}</dt>,
            <dd key={key + 'dd'} className="benefits__list-item-value">{item.value}</dd>
          ])}
        </dl>
      </div>
    );
  }
}

export default Benefits;