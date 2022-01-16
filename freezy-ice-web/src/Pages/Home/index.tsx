import { Pagination, Stack } from '@mui/material';
import * as React from 'react';

import HomeComponents from '../../Components/Home/HomeComponents/HomeComponents';
import SearchBar from '../../Components/Home/SearchBar';
import { useAppDispatch, useAppSelector } from '../../Store';
import { PaginationInterface } from '../../Store/Interface/Shop/PaginationInterface';
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

    const paginationTotal = shops ? shops?.paginationData.total / 5 : 0;

    const paginationComponent = (pagination: PaginationInterface) => (
        <Stack spacing={2} alignItems="center">
            <Pagination
                color="primary"
                size="large"
                count={Math.ceil(paginationTotal)}
                page={pagination.currentPage}
                onChange={handleChange}
            />
        </Stack>
    );
    // eslint-disable-next-line
    return (
        <div>
            {shops && <SearchBar key="SearchBar" currentPage={shops?.paginationData.currentPage} />}
            {shops && shops !== null ? (
                <div>
                    {paginationComponent(shops.paginationData)}
                    <HomeComponents shops={shops} key="HomeComponents" />
                    {paginationComponent(shops.paginationData)}
                </div>
            ) : null}
        </div>
    );
}

export default HomePage;
