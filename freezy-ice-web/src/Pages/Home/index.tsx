import { Pagination, Stack } from '@mui/material';
import * as React from 'react';

import HomeComponents from '../../Components/Home/HomeComponents/HomeComponents';
import SearchBar from '../../Components/Home/SearchBar';
import { useAppDispatch, useAppSelector } from '../../Store';
import { FetchShops } from '../../Store/Reducer/Shop/action';
import { shopsState } from '../../Store/selectors';

function HomePage() {
    const shops = useAppSelector(shopsState);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        if (shops === null) {
            FetchShops(dispatch, 1);
        }
    }, [shops, dispatch]);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        if (shops !== null) FetchShops(dispatch, value);
    };

    const paginationComponent = () => (
        <Stack spacing={2} alignItems="center">
            <Pagination
                color="primary"
                size="large"
                count={shops!.paginationData.total / 5}
                page={shops!.paginationData.currentPage}
                onChange={handleChange}
            />
        </Stack>
    );

    return (
        <div>
            <SearchBar key="SearchBar" />
            {shops !== null ? (
                <div>
                    {paginationComponent()}
                    <HomeComponents shops={shops} key="HomeComponents" />
                    {paginationComponent()}
                </div>
            ) : null}
        </div>
    );
}

export default HomePage;
