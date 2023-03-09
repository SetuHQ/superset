import { t } from '@superset-ui/core';
import { CustomControlItem } from '../types';

export const onClickHandlerChartInput: CustomControlItem = {
  name: 'on_click_redirection',
  config: {
    type: 'TextControl',
    label: t('On Click Redirection'),
    renderTrigger: false,
    clearable: true,
    default: '',
    description: t('// todo'),
  },
};

export function onChartClickRedirectionHandler(
  onClickRedirection: string,
  values: string | string[],
) {
  if (!Array.isArray(values)) {
    values = [values];
  }
  if (onClickRedirection) {
    const url = onClickRedirection.replaceAll(
      '{{key}}',
      encodeURIComponent(values.join(',')),
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
