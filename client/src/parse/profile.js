const profile = {
  name: 'test1',
  professions: [{
    name: 'testProfession',
    nodes: [{
      name: 'testNode',
      max: 30,
      assigned: 5,
    }],
  }],
};

// eslint-disable-next-line max-len
const testProfile = 'ewoJIm5hbWUiOiAidGVzdDEiLAoJInByb2Zlc3Npb25zIjogW3sKCQkibmFtZSI6ICJ0ZXN0UHJvZmVzc2lvbiIsCgkJIm5vZGVzIjogW3sKCQkJIm5hbWUiOiAidGVzdE5vZGUiLAoJCQkibWF4IjogMzAsCgkJCSJhc3NpZ25lZCI6IDUKCQl9XQoJfV0KfQ==';

export const decodeProfile = (base64) => JSON.parse(atob(base64));

const encodeProfile = (obj) => btoa(JSON.stringify(obj));
