import 'server-only';

const dictionaries: Record<string, () => Promise<any>> = {
  'en-US': () => import('@/locales/en-US/common.json').then((m) => m.default),
  'zh-Hans': () => import('@/locales/zh-Hans/common.json').then((m) => m.default),
};

export const getDictionary = async (locale: string) => {
  const load = dictionaries[locale] ?? dictionaries['en-US'];
  const common = await load();
  return { common };
};
