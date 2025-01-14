import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalLayout from './global-layout';
import { HomePage, MyConfetiPage, MyPage } from './lazy';
import { routePath } from '@shared/constants/path';

export default function Router() {
  return (
    <Suspense>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path={routePath.ROOT} element={<HomePage />} />
          <Route path={routePath.MY} element={<MyPage />} />
          <Route path={routePath.MYCONFETI} element={<MyConfetiPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
