import React from 'react';
import { RefinementList } from 'react-instantsearch';
import { Panel } from '@/components/Panel';

type RefinementFallbackProps = {
  attribute: string;
};

/**
 * Fallback component for DynamicWidgets
 * Renders a refinement list panel for attributes not explicitly configured
 */
export function RefinementFallback({ attribute }: RefinementFallbackProps) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  );
}
