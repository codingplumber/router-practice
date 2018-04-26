import React from 'react';

export const inputs = props => {
    const { labels, names, values, focus, change } = props;
    return labels.map((label, i) => {
            return (
                <div key={ i }>
                    <label>{ labels[i] }</label>
                    <input
                        type='text'
                        name={ names[i] }
                        value={ values[i] }
                        onFocus={ focus }
                        onChange={ change } />
                </div>
            );
        })
};

export default inputs;