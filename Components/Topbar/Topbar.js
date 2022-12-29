import React, {useContext} from 'react';
import TopbarDesktop from './TopbarDesktop';
import {WidthContext} from '../page';
import TopbarMobile from './TopbarMobile';

export default function Topbar() {
  const width = useContext(WidthContext);
  return width > 1000 ? <TopbarDesktop /> : <TopbarMobile />;
}
