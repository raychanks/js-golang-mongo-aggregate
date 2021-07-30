const dedent = require('dedent');

it('tests', () => {
  const input = dedent`
  [
    {
      $match: {
        price: {
          $gt: 10,
        },
      },
    },
  ];`;
  const expected = dedent`
  bson.A{
    bson.M{
      "$match": bson.M{
        "price": bson.M{
          "$gt": 10,
        },
      },
    },
  }
  `;

  expect(input).toBe(expected);
});
