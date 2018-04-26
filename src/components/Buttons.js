import React from 'react';

const buttons = props => {
    const { values, click } = props;
    
    return values.map((value, i) => {
        return (
            <div key={ i }>
                <input
                    type='submit'
                    value={ props.values[i] }
                    onClick={ click[i] } />
            </div>
        );
    })
}

export default buttons;