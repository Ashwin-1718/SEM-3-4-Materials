import { useState } from 'react';

function SubscribeButton() {
    const [subscribed, setSubscribed] = useState(false);

    return (
        <div className="component">
            <button
                onClick={() => setSubscribed(!subscribed)}
                className={subscribed ? 'subscribed' : 'subscribe'}
            >
                {subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
        </div>
    );
}

export default SubscribeButton;