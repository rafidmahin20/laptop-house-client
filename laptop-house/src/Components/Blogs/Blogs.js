import React from "react";

const Blogs = () => {
  return (
    <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2">
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
        <div>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
            Difference between javascript and nodejs
          </h3>
          <p className="text-gray-600">
            - js is client side coding. Node js enables server side coding
            writtrn in javascript. Java script is language. Node js is not just
            a language but it has v8 engine that runs javascript on the server
            side. Javascript runs inside the browser. Nodejs runs outside the
            browser.
          </p>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
           What is the purpose of jwt and how does it work
          </h3>
          <p className="text-gray-600">
            - JWT also known as json web token provides you a way of represnting claims to be transfered between two parties. it is Manily used for authorization. JWT consists of three parts. Frist is header second is payload and third is signature. The header and payload are base64 encoded strings it can be decoded without any need for password so anyone can read the plain text format.
          </p>
        </div>
        <div>
          <h3 className="mt-10 mb-3 font-bold text-gray-900">
            Differences between sql and nosql databases.
          </h3>
          <p className="text-gray-600">
            - SQL is generally used in relational database management system.
            NoSQL is used for non-relational distributed database system. In SQL
            structured data can be stored in tables. Using json data
            unstructured data can be stored. In SQL the schemas are static. In
            NoSQL the schemas are dynamic.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
