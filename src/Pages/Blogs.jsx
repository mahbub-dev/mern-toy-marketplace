import useTitle from "../Hooks/useTitle"

/* eslint-disable react/no-unescaped-entities */
const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="container mx-auto px-4">
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">What is an Access Token and Refresh Token?</h3>
                <p className="text-gray-600 mb-4">
                    An access token is a credential used to authenticate and authorize access to protected resources in a system.
                    It is usually short-lived and is issued to a user after successful authentication.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Comparison of SQL and NoSQL Databases</h3>
                <p className="text-gray-600 mb-4">
                    SQL is a types of relational  databases . SQL is use tables with predefined schemas to store and organize data. They provide strong consistency, ACID (Atomicity, Consistency, Isolation, Durability) properties, and support complex queries and joins.On the other hand, NO-SQL datatebases are non-relational databases that offer flexible schemas and horizontal scalability. They are designed for handling large amounts of unstructured or semi-structured data and provide high availability and scalability.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">What is Express.js? What is Nest.js?</h3>
                <p className="text-gray-600 mb-4">
                    Express.js is a popular web application framework for Node.js that simplifies the development of server-side applications. It provides a robust set of features and middleware for building web APIs, handling HTTP requests, routing, and more. Express.js is known for its simplicity and flexibility, making it a go-to choice for many Node.js developers.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">What is MongoDB Aggregate and How Does It Work?</h3>
                <p className="text-gray-600 mb-4">
                    MongoDB's Aggregation Framework is a powerful feature that allows us to perform advanced data processing operations on collections of documents. It enables us to perform operations such as filtering, grouping, sorting, and transforming data in a flexible and efficient way.
                </p>
            </div>
        </div>)
}
export default Blogs