import React from "react";

const Blogs = () => {
  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
        <div>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
          Difference between javascript and nodejs
          </h3>
          <p className='text-gray-600'>
            -  js is client side coding. Node js enables server side coding writtrn in javascript. Java script is language. Node js is not just a language but it has v8 engine that runs javascript on the server side. Javascript runs inside the browser. Nodejs runs outside the browser.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
