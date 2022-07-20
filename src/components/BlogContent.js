import React from "react";
/* create a div element with the id 'blog-content'.
2. render the blog article text within the blog-content element.
3. return the blog-content element.

Now we can create the template for the blog article. We are going to use
the 'react-markdown' module to use markdown to create the blog entries.

.. code-block:: html

    <div>
      <BlogTitle articleTitle={this.state.articleTitle} />
      <BlogContent articleText={this.state.articleText} />
    </div>

Here's what the above template is doing::

    1. create a div element.
    2. render the BlogTitle element within the div
    3. render the BlogContent within the div

And finally, we need to create the function that will be executed when the
blog entry is clicked on. This function is going to set the state of our
application so the title and text are updated to whatever is clicked on.

.. code-block:: javascript

  handleClick(event) {
    let blogTitle = event.target.innerText;
    let blogText = this.state.blogArticles[blogTitle];
    this.setState({
      articleTitle: blogTitle,
      articleText: blogText,
    });
  }

Here's what the above function is doing::

    1. retreive the title of the blog post that was clicked on by parsing the
       innerText of the element that was clicked on.
    2. find the corresponding text for this blog post by looking it up in the
       list of blog posts.
    3. set the state of our application with the title and text of the blog
       post that was clicked on.

Now that all of our code is in place, let's create our application container.
*/

function BlogContent(props) {
  return <div id="blog-content">{props.articleText}</div>;
}

export default BlogContent;
