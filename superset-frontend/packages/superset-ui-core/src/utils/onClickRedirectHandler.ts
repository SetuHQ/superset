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
  