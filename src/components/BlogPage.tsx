import React from 'react';

const BlogPage = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <iframe
                src="/blog/blog.html"
                title="Blog"
                style={{ width: '100%', height: '100%', border: 'none' }}
            />
        </div>
    );
};

export default BlogPage; 