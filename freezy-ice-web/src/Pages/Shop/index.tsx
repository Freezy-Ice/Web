import * as React from 'react';
import ShopBaseInfo from '../../Components/Shop/ShopBaseInfo';
import { ShopResponse } from '../../Store/Interface/Shop/ShopResponse';

function ShopPage() {
    const [shop] = React.useState<ShopResponse>({
        id: 1,
        name: 'Lodziarnia 1',
        description: 'Testowy pierwszy opis lodziarni',
        updatedAt: '2015-05-16T05:50:06',
        address: 'Miasto ul. Daleka 11',
        openAt: '2015-05-16T05:50:06',
        closedAt: '2015-05-16T15:50:06',
        grade: 1.5,
        picture:
            'https://dictionary.cambridge.org/pl/images/thumb/black_noun_002_03536.jpg?version=5.0.195',
        cords: [51.204574, 16.148809],
        isFavorite: true,
    });

    return (
        <div>
            <ShopBaseInfo shop={shop} />
        </div>
    );
}

export default ShopPage;
