import qs from 'query-string';

export const getProfileFromURL = () => {
  const q = qs.parse(window.location.search);

  if (!q.profile) return null;

  return q.profile;
};
