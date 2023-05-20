import useTitle from "../Hooks/useTitle"

/* eslint-disable react/no-unescaped-entities */
const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="container mx-auto px-4">
            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">What is an Access Token and Refresh Token?</h3>
                <p className="text-gray-600 mb-4">
                    An access token is a credential used to authenticate and authorize access to protected resources in a system. It is usually short-lived and is issued to a user after successful authentication. The access token contains information about the user's identity and permissions. On the other hand, a refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. Refresh tokens are securely stored on the client-side and can be exchanged for a new access token without requiring the user to reauthenticate.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Comparison of SQL and NoSQL Databases</h3>
                <p className="text-gray-600 mb-4">
                    SQL (Structured Query Language) databases are relational databases that use tables with predefined schemas to store and organize data. They provide strong consistency, ACID (Atomicity, Consistency, Isolation, Durability) properties, and support complex queries and joins. NoSQL databases, on the other hand, are non-relational databases that offer flexible schemas and horizontal scalability. They are designed for handling large amounts of unstructured or semi-structured data and provide high availability and scalability. NoSQL databases may sacrifice some consistency in favor of performance and scalability.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">What is Express.js? What is Nest.js?</h3>
                <p className="text-gray-600 mb-4">
                    Express.js is a popular web application framework for Node.js that simplifies the development of server-side applications. It provides a robust set of features and middleware for building web APIs, handling HTTP requests, routing, and more. Express.js is known for its simplicity and flexibility, making it a go-to choice for many Node.js developers.

                    Nest.js, on the other hand, is a progressive Node.js framework for building efficient and scalable server-side applications. It is built with TypeScript and leverages modern JavaScript features. Nest.js takes inspiration from Angular and provides a modular and structured approach to building applications. It focuses on developer productivity, code maintainability, and scalability, making it suitable for large-scale applications.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">What is MongoDB Aggregate and How Does It Work?</h3>
                <p className="text-gray-600 mb-4">
                    MongoDB's Aggregation Framework is a powerful feature that allows you to perform advanced data processing operations on collections of documents. It enables you to perform operations such as filtering, grouping, sorting, and transforming data in a flexible and efficient way. The aggregation pipeline in MongoDB consists of multiple stages that process the documents sequentially. Each stage takes input from the previous stage and performs specific operations on the data. Examples of aggregation stages include `$match`, `$group`, `$sort`, `$project`, and many more. The aggregation framework provides a rich set of operators and expressions to manipulate and analyze data in MongoDB.
                </p>
            </div>
        </div>)
}
export default Blogs