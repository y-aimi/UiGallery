/** ページ情報の型 */
export type Page = {
  /** ページ名 */
  name: string;
  /** URLパス */
  url: string;
};

/**
 * アプリページ情報
 */
export const AppRoutes: { [key in 'index' | 'error' | 'button']: Page } = {
  index: { name: 'index', url: '/' },
  button: { name: 'ボタン', url: '/button' },

  // エラー画面
  error: { name: 'error', url: '/error' },
} as const;
