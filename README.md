# React Star Rating Component

ReactJS Star Rating is a flexible and dynamic star rating component with plenty of features. It is easy to use and customize, making it perfect for any project. It has features like custom labels, read-only mode, callback function, and custom styling.

## Demo

![GIF](https://ik.imagekit.io/varshilshah/uploads/star-rating.gif?updatedAt=1692110217489)

## Install

Using npm:

```
$ npm install reactjs-star-rating
```

OR

Using yarn:

```
$ yarn add reactjs-star-rating
```

## Parameters

```javascript
<StarRating
  maxRating={7} // Maximum rating value
  color="green" // Color of stars
  size={48} // Size of stars in pixels
  className="" // For custom styling
  defaultRating={2} // Default rating value
  readOnly={false} // Make rating read only
  showLabel={false} // Show label
  labels={["Bad", "Poor", "Ok", "Good", "Great"]} // Labels for rating
  onSetRating={(rating) => console.log(rating)} // Callback function when rating is set
/>
```

## Examples

### Default star rating

```javascript
<StarRating color="green" size={48} defaultRating={2} maxRating={7} />
```

### Star with custom labels

```javascript
// NOTE: maxRating should be equal to the number of labels
<StarRating
  color="green"
  size={48}
  defaultRating={2}
  maxRating={5}
  showLabel={true}
  labels={["Bad", "Poor", "Ok", "Good", "Great"]}
/>
```

### Read only star rating

```javascript
<StarRating color="blue" size={48} defaultRating={2} maxRating={7} readOnly />
```

### Star rating with callback function

```javascript
<StarRating
  color="green"
  size={48}
  defaultRating={2}
  maxRating={7}
  onSetRating={(rating) => console.log(rating)}
/>
```

### Star rating with custom styling

```javascript
<StarRating
  color="green"
  size={48}
  defaultRating={2}
  maxRating={7}
  className="custom-star-rating"
/>
```

Feel free to play around with the parameters and customize the star rating component as per your needs.

### MIT License

Made with ❤ by [Varshil Shah](https://www.linkedin.com/in/shahvarshil/) from 🇮🇳
