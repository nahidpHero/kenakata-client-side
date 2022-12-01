import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-4/5 mx-auto mt-5 shadow-xl'>
             <h1 className='text-3xl font-bold'>What are the different ways to manage a state in a React application?</h1>
             <h1 className='text-xl font-bold'>The Four Kinds of React State to Manage</h1>
             <p>There are four main types of state you need to properly manage in your React apps:</p>
             <p>1.Local state</p>
             <p>2.Global state</p>
             <p>3.Server state</p>
             <p>4.URL state</p>
             <p className='text-xl'>Local (UI) state </p>
             <p>Local state is data we manage in one or another component.

              Local state is most often managed in React using the useState hook.
              For example, local state would be needed to show or hide a modal component or to track values for a             form component, such as form submission, when the form is    disabled and the values of a form’s inputs.</p>
              <br />
              <p className='text-xl'>Global (UI) state </p>
              <p>Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
              A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.</p>
               <br />
               <p className='text-xl'>Server state </p>
              <p>Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

              There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

              Fortunately there are tools such as SWR and React Query that make managing server state much easier.</p>
               <br />
               <p className='text-xl'>URL state</p>
              <p>URL state is often missing as a category of state, but it is an important one.
                In many cases, a lot of major parts of our application rely upon accessing URL state.   Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

               There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
               <h1 className='text-3xl font-bold'> How does prototypical inheritance work?</h1>
               <p>
               JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved. The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.

                    How it works?
                  Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server    decodes and verifies the authenticity of the token using secret salt / public key.

               User sign-in using username and password or google/facebook. Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
               </p>
               <h1 className='text-3xl font-bold'>What is a unit test? Why should we write unit tests?</h1>
               <p>
               Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.
              </p>
              <br />
              <p>How unit tests work</p>
              <br />
              <p>A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.

              Test-driven development requires that developers first write failing unit tests. Then they write code and refactor the application until the test passes. TDD typically results in an explicit and  predictable code base.</p>
              <p>Each test case is tested independently in an isolated environment, as to ensure a lack of dependencies in the code. The software developer should code criteria to verify each test case, and a testing framework can be used to report any failed tests. Developers should not make a test for every line of code, as this may take up too much time. Developers should then create tests focusing on code which could affect the behavior of the software being developed.

              Unit testing involves only those characteristics that are vital to the performance of the unit under test. This encourages developers to modify the source code without immediate concerns about how such changes might affect the functioning of other units or the program as a whole. Once all of the units in a program have been found to be working in the most efficient and error-free manner possible, larger components of the program can be evaluated by means of integration testing. Unit tests should be performed frequently, and can be done manually or can be automated.</p>
                <h1 className='text-3xl font-bold'>React vs. Angular vs. Vue?</h1>
                <h1 className='text-xl font-bold'>React</h1>
                <p>React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website..</p>

                <h1 className='text-xl font-bold'>Angular</h1>
                <p>developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular. </p>

                <h1 className='text-xl font-bold'>Vue</h1>
                <p>Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                  Further reading: Vue.js Tutorial for Beginner Developers
                   </p>
               
                </div>
            
        </div>
    );
};

export default Blog;