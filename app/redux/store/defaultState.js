const { fromJS } = require('immutable');

export default function getInitialData() {
    const initialData = {
        auth: {
            user: {
                email: '',
                password: '',
            },
            data: {},
        },
        count: {
            number: 0,
        },
    };

    return fromJS(initialData);
}
