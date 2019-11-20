## About

This repository defines a technique called 'artificial element breakpoints' for creating artificial element breakpoints based solely on html and css.

## Demo

https://artificial-element-breakpoints.netlify.com

## Why

When creating a component for a library, you may want breakpoints based on your components parent width instead of the viewport. This technique allows you to do that with css and html.

## Advantages

* Since the technique uses simple css and basic html, it has excellent browser support.
* The result when zooming a page is (as far as i have checked) identical if you were to css media queries.
* No installation needed.
* Components content can adjust to width of parent container.
* No need to define content based on individual use case.

## Drawbacks

* The height needs to be explicitly set. (for now, no fix found yet)
* You will need to structure your component with individual containers for each breakpoint.

## Naming

The technique is based on html elements breaking in and out of a block level. Since these elements have different purposes, they have been given different names.

* container: contains all your content.
* wrapper: offset container containing all breakpoints.
* define: defines a breakpoint block level for a given breakpoint.
* break: breaks in and out of the block level created by the preceding 'define' element.
* block: blocks succeeding 'define' and 'break' elements from entering the preceding breakpoint block level.
* content: container for breakpoint content.

You are encouraged to use these names for your css class names.

## Example

The following is an example of how you could implement the technique.

* Breakpoints: [N] = 2, which gives 3 ([N] + 1) different width sections.
* Height: [H] = '100px'.
* Breakpoint 1: [B1] = '500px';
* Breakpoint 2: [B2] = '1000px';

Other optional css values that should be set, use [?] as a placeholder.

Start by setting up your html structure along with the given order of class names.

```
<div class="container">
  <div class="wrapper">

    <div class="define"></div>
    <div class="break break-1"></div>
    <div class="block"></div>

    <div class="define"></div>
    <div class="break break-2"></div>
    <div class="block"></div>

    <div class="content content-1">
      <!-- your first breakpoint-view html...  -->
    </div>

    <div class="content content-2">
      <!-- your second breakpoint-view html...  -->
    </div>

    <div class="content content-3">
      <!-- your third breakpoint-view html...  -->
    </div>

  </div>
</div>
```

Set the following css.

```
.container {
  height: [H];
  width: [?];
  position: [?];
  overflow: hidden;
}

.wrapper {
  top: -[H]*(1 + [N]);
  height: [H]*(1 + [N]);
  width: 100%;
  font-size: 0px;
  position: relative;
}

.define {
  position: relative;
  display: inline-block;
  height: [H];
  width: 50%;
}

.break {
  position: relative;
  display: inline-block;
  height: [H];
}

.block {
  position: relative;
  display: inline-block;
  height: [H];
  width: 100%;
}

.content {
  position: relative;
  display: inline-block;
  height: [H];
  width: 100%;
}
```

Then you can add your custom breakpoint and content classes.

```
.break-1 {
  width: 0.5*[B1];
}

.break-2 {
  width: 0.5*[B2];
}

.content-1 {
  // your first breakpoint-view css...
}

.content-2 {
  // your second breakpoint-view css...
}

.content-3 {
  // your third breakpoint-view css...
}
```

As you perhaps can see, using a preprocessor stylesheet language like Sass, Less or Stylus can be very helpful.

## Notes

* There is javascript in the project folder. This is solely for demo purposes. Scripting is not needed for actual implementation.
* The width of 'define' elements can technically be set to zero since their foremost purpose is creating breakpoint block levels. But in fear of breaking browser support you are encouraged to set it to 50% of container width and set 'break' to half the actual breakpoint value.
* You could also use a 'float: left' approach instead of setting inline-block and font-size.
