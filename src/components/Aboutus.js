import React, { useState } from "react";

export default function Aboutus(props) {
  return (
    <>
      <div
        className={`container-fluid  bg-${props.mode} text-${props.textmode}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-4">
              <h2 className="text-center">Declarative</h2>
              <p>
                React makes it painless to create interactive UIs. Design simple
                views for each state in your application, and React will
                efficiently update and render just the right components when
                your data changes. Declarative views make your code more
                predictable and easier to debug.
              </p>
            </div>
            <div className="col-12 col-xl-4">
              <h2 className="text-center">Component-Based</h2>
              <p>
                Build encapsulated components that manage their own state, then
                compose them to make complex UIs. Since component logic is
                written in JavaScript instead of templates, you can easily pass
                rich data through your app and keep state out of the DOM.
              </p>
            </div>
            <div className="col-12 col-xl-4">
              <h2 className="text-center">Learn Once, Write Anywhere</h2>
              <p>
                We don’t make assumptions about the rest of your technology
                stack, so you can develop new features in React without
                rewriting existing code. React can also render on the server
                using Node and power mobile apps using React Native.
              </p>
            </div>
          </div>
          <div className="row my-5 py-5 ">
            <div className="col-12 col-xl-4">
              <h3>A Simple Component</h3>
              <p>
                React components implement a render() method that takes input
                data and returns what to display. This example uses an XML-like
                syntax called JSX. Input data that is passed into the component
                can be accessed by render() via this.props.
              </p>
            </div>
            <div className="col-12 col-xl-4">
              <h3>A Stateful Component</h3>
              <p>
                In addition to taking input data (accessed via this.props), a
                component can maintain internal state data (accessed via
                this.state). When a component’s state data changes, the rendered
                markup will be updated by re-invoking render().
              </p>
            </div>
            <div className="col-12 col-xl-4">
              <h3>An Application</h3>
              <p>
                Using props and state, we can put together a small Todo
                application. This example uses state to track the current list
                of items as well as the text that the user has entered. Although
                event handlers appear to be rendered inline, they will be
                collected and implemented using event delegation.
              </p>
            </div>
            <div className="col-12 d-none d-sm-block col-xl-4">
              <h3>Love You 🥰😘</h3>
              <img
                src={require("../images/image.jpg")}
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
