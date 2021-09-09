When you first create a NEXT.js app with

```
npx create-next-app
```

The file structure is:

![file structure 1](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mlvf0fqvesbwl3ki471s.png)

the `pages` folder contains the page which will be rendered.

Let's add a simple page `contact.js`

![file structure 2](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e7385jbf53p74on3ybyo.png)

**contact.js**

```js
export default function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
    </div>
  );
}
```

open `http://localhost:3000/contact`
and you should see your page title

![contact page](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cpa7554f1r1bql00zxke.png)

> Creating a large number of pages manually becomes quickly cumbersome. Fortunately NEXT.js provides dynamic routes.

# Dynamic Routes

A dynamic route is basically a javascript file under `pages/` folder with special characters in its name.

**basis examples**

- [id].js
- [slug].js
- [user_id].js
- [name].js

**catch all examples**

- [...id].js
- [...slug].js
- [...user_id].js
- [...name].js
