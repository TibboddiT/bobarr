import React from 'react';

import { LayoutComponent } from '../components/layout/layout.component';
import { HomeComponent } from '../components/home/home.component';

export default function IndexPage() {
  return (
    <LayoutComponent>
      <HomeComponent />
    </LayoutComponent>
  );
}
