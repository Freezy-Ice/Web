import * as React from 'react';
import HomeComponents from '../../Components/Home/HomeComponents/HomeComponents';
import SearchBar from '../../Components/Home/SearchBar';

function Home() {
    const [shops] = React.useState([
        {
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
        },
        {
            id: 2,
            name: 'Lodziarnia 2',
            description: 'Testowy drugi opis.',
            updatedAt: '2015-05-16T05:50:06',
            address: 'Miasto ul. Bliska 175/4',
            openAt: '2015-05-16T05:50:06',
            closedAt: '2015-05-16T15:50:06',
            grade: 4.5,
            picture:
                'https://dictionary.cambridge.org/pl/images/thumb/black_noun_002_03536.jpg?version=5.0.195',
        },
    ]);

    return (
        <div>
            <SearchBar key="SearchBar" />
            <HomeComponents shops={shops} key="HomeComponents" />
        </div>
    );
}

export default Home;
