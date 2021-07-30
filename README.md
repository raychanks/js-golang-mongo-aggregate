# js-golang-mongo-aggregate

## A CLI tool for transforming hand-written aggregate pipelines between golang and javascript

- object <-> bson.M

- array <-> bson.A

- double quote keys

## Support live reload to output modified file

---

## Example transformation

Transform the format of the contents within the aggregate pipeline

Javascript

```Javascript
const pipelines = [
  {
    $match: {
      price: {
        $gt: 10,
      },
    },
  },
];
```

Go

```Go
pipelines := bson.A{
  bson.M{
    "$match": bson.M{
      "price": bson.M{
        "$gt": 10,
      },
    },
  },
}
```
